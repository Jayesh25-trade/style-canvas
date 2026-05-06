// Targeting Vercel: disable the Cloudflare plugin so TanStack Start
// builds a Node-compatible SSR bundle that Vercel can run.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
