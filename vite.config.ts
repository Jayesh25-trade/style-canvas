import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
  vite: {
    ssr: {
      noExternal: true,
    },
  },
});
