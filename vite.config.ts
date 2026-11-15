// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { resolvePagesBase } from "./src/lib/pages-base";

export default defineConfig({
  vite: {
    // Where the site is served from. See src/lib/pages-base.ts and the README.
    base: resolvePagesBase({
      PAGES_BASE: process.env["PAGES_BASE"],
      GITHUB_REPOSITORY: process.env["GITHUB_REPOSITORY"],
    }),
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // This site is one static page at "/" with in-page #section anchors: no cookies,
    // session, headers or per-user data, so one build render is correct for every visitor.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
