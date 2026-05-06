#!/usr/bin/env node
// Adapts the TanStack Start build output (dist/client + dist/server/server.js)
// into Vercel's Build Output API (https://vercel.com/docs/build-output-api/v3).
import { cp, mkdir, writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distClient = resolve(root, "dist/client");
const distServer = resolve(root, "dist/server");
const out = resolve(root, ".vercel/output");
const fnDir = resolve(out, "functions/_ssr.func");

if (!existsSync(distServer)) {
  console.error("[vercel-adapter] dist/server missing — run `vite build` first.");
  process.exit(1);
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

// 1. Static assets
await mkdir(resolve(out, "static"), { recursive: true });
if (existsSync(distClient)) {
  await cp(distClient, resolve(out, "static"), { recursive: true });
}

// 2. SSR Node function
await mkdir(fnDir, { recursive: true });
await cp(distServer, fnDir, { recursive: true });

// Function entry: adapts Node (req, res) -> Web Fetch -> Node response.
const entry = `import server from "./server.js";

const toWebRequest = (req) => {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = new URL(req.url, \`\${protocol}://\${host}\`);
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (Array.isArray(v)) for (const vv of v) headers.append(k, vv);
    else if (v !== undefined) headers.set(k, String(v));
  }
  const method = req.method || "GET";
  let body;
  if (method !== "GET" && method !== "HEAD") {
    body = new ReadableStream({
      start(controller) {
        req.on("data", (c) => controller.enqueue(c));
        req.on("end", () => controller.close());
        req.on("error", (e) => controller.error(e));
      },
    });
  }
  return new Request(url, { method, headers, body, duplex: "half" });
};

const sendResponse = async (response, res) => {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  if (!response.body) return res.end();
  const reader = response.body.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    res.write(value);
  }
  res.end();
};

export default async function handler(req, res) {
  try {
    const webReq = toWebRequest(req);
    const response = await server.fetch(webReq);
    await sendResponse(response, res);
  } catch (err) {
    console.error("[ssr] error:", err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Internal Server Error");
  }
}
`;
await writeFile(resolve(fnDir, "index.mjs"), entry);
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
    2,
  ),
);
await writeFile(
  resolve(fnDir, "package.json"),
  JSON.stringify({ type: "module" }, null, 2),
);

// 3. Output config — assets served as static, everything else hits the SSR function.
await writeFile(
  resolve(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "^/assets/(.*)$", headers: { "cache-control": "public, max-age=31536000, immutable" }, continue: true },
        { src: "/(.*)", dest: "/_ssr" },
      ],
    },
    null,
    2,
  ),
);

console.log("[vercel-adapter] wrote .vercel/output");
