#!/usr/bin/env node
/**
 * Vercel Build Output API v3 adapter for TanStack Start (Node.js SSR)
 * https://vercel.com/docs/build-output-api/v3
 *
 * Transforms:
 *   dist/client  → .vercel/output/static      (CDN-served assets)
 *   dist/server  → .vercel/output/functions/_ssr.func  (Node.js SSR)
 *
 * Requirements:
 *   - Run AFTER `vite build` (i.e. `npm run build && node scripts/vercel-adapter.mjs`)
 *   - Node.js 20+
 */

import { cp, mkdir, writeFile, rm, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distClient = resolve(root, "dist/client");
const distServer = resolve(root, "dist/server");
const out = resolve(root, ".vercel/output");
const fnDir = resolve(out, "functions/_ssr.func");

// ── Sanity checks ────────────────────────────────────────────────────────────
if (!existsSync(distServer)) {
  console.error(
    "[vercel-adapter] ERROR: dist/server is missing.\n" +
      "  Make sure `vite build` completed successfully before running this script."
  );
  process.exit(1);
}

if (!existsSync(distClient)) {
  console.warn(
    "[vercel-adapter] WARNING: dist/client not found — static assets will be empty."
  );
}

// ── Clean & recreate output directory ────────────────────────────────────────
console.log("[vercel-adapter] Cleaning .vercel/output …");
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

// ── 1. Static assets (client build → CDN) ────────────────────────────────────
console.log("[vercel-adapter] Copying static assets …");
const staticDir = resolve(out, "static");
await mkdir(staticDir, { recursive: true });
if (existsSync(distClient)) {
  await cp(distClient, staticDir, { recursive: true });
}

// ── 2. SSR Function (Node.js 20, NOT edge) ───────────────────────────────────
console.log("[vercel-adapter] Building SSR function …");
await mkdir(fnDir, { recursive: true });

// Copy the entire server bundle into the function directory
await cp(distServer, fnDir, { recursive: true });

// Detect the actual server entry-point filename (TanStack may vary the name)
let serverEntryFile = "server.js";
try {
  const files = await readdir(fnDir);
  // Prefer an explicit "server.js", otherwise find any .js that looks like an entry
  const candidate = files.find(
    (f) => f === "server.js" || f === "index.js" || f === "handler.js"
  );
  if (candidate) serverEntryFile = candidate;
} catch {
  // fall back to server.js
}

// Function entry shim: bridges Vercel's Node (req, res) API → Web Fetch API
// TanStack Start server output exposes a `fetch` handler (Fetch API standard).
const entryShim = `
import server from "./${serverEntryFile}";

/** Convert a Node IncomingMessage to a Web Request */
function toWebRequest(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host =
    req.headers["x-forwarded-host"] ||
    req.headers.host ||
    "localhost";
  const url = new URL(req.url, \`\${proto}://\${host}\`);

  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v === undefined) continue;
    if (Array.isArray(v)) {
      for (const vv of v) headers.append(k, vv);
    } else {
      headers.set(k, String(v));
    }
  }

  const method = (req.method || "GET").toUpperCase();
  let body = undefined;
  if (method !== "GET" && method !== "HEAD") {
    body = new ReadableStream({
      start(controller) {
        req.on("data", (chunk) => controller.enqueue(chunk));
        req.on("end", () => controller.close());
        req.on("error", (err) => controller.error(err));
      },
    });
  }

  return new Request(url, { method, headers, body, duplex: "half" });
}

/** Stream a Web Response back through Node ServerResponse */
async function sendWebResponse(webRes, res) {
  res.statusCode = webRes.status;
  webRes.headers.forEach((value, key) => res.setHeader(key, value));
  if (!webRes.body) {
    res.end();
    return;
  }
  const reader = webRes.body.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  } finally {
    res.end();
  }
}

/** Vercel serverless function handler */
export default async function handler(req, res) {
  try {
    const webReq = toWebRequest(req);
    const webRes = await server.fetch(webReq);
    await sendWebResponse(webRes, res);
  } catch (err) {
    console.error("[ssr] Unhandled error:", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Internal Server Error");
    }
  }
}
`.trimStart();

await writeFile(resolve(fnDir, "index.mjs"), entryShim, "utf-8");

// Vercel function configuration — Node.js runtime, NOT edge
await writeFile(
  resolve(fnDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: true,
    },
    null,
    2
  ),
  "utf-8"
);

// Mark as ESM so Node resolves bare imports correctly
await writeFile(
  resolve(fnDir, "package.json"),
  JSON.stringify({ type: "module" }, null, 2),
  "utf-8"
);

// ── 3. Vercel Output config (routes) ─────────────────────────────────────────
//
// Route order matters:
//  1. Serve everything that actually exists on the filesystem (static assets).
//  2. Apply long-lived cache headers to fingerprinted /assets/* files.
//  3. Pass all other requests to the SSR function (including nested routes,
//     SPA fallback, dynamic params like /product/:slug, /order/:id, etc.)
//
console.log("[vercel-adapter] Writing output config …");

await writeFile(
  resolve(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        // Serve real filesystem files first (static HTML, client chunks, etc.)
        { handle: "filesystem" },

        // Cache-bust: immutable long-lived cache for hashed /assets/* files
        {
          src: "^/assets/(.+)$",
          headers: {
            "cache-control": "public, max-age=31536000, immutable",
          },
          continue: true,
        },

        // SPA/SSR fallback: every other path → SSR function
        // This covers TanStack Router nested routes like:
        //   /product/:slug, /order/:orderId, /checkout, /cart, etc.
        {
          src: "/(.*)",
          dest: "/_ssr",
        },
      ],
    },
    null,
    2
  ),
  "utf-8"
);

// ── Done ─────────────────────────────────────────────────────────────────────
console.log(`
[vercel-adapter] ✅ Done! Output structure:
  .vercel/output/
  ├── config.json          ← Vercel route config (v3)
  ├── static/              ← CDN-served client assets
  └── functions/
      └── _ssr.func/
          ├── index.mjs    ← Node.js SSR handler shim
          ├── server.js    ← TanStack Start server bundle
          ├── .vc-config.json
          └── package.json
`);
