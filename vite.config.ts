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

// GitHub Pages base path.
//   username.github.io/repo-name  ->  "/repo-name/"
//   username.github.io            ->  "/"  (repo named "username.github.io")
//   custom domain                 ->  "/"
// In CI this is read from GITHUB_REPOSITORY ("owner/repo") so the workflow never
// needs editing. Locally, set PAGES_BASE="/repo-name/" to test the real URL shape.
function resolveBase(): string {
  const override = process.env.PAGES_BASE;
  if (override && override.trim()) {
    const trimmed = override.trim().replace(/\/+$/, "");
    return trimmed === "" ? "/" : `${trimmed}/`;
  }

  const repo = process.env.GITHUB_REPOSITORY;
  if (repo && repo.includes("/")) {
    const name = repo.split("/")[1];
    // A repo named "<owner>.github.io" is served from the domain root.
    return name.endsWith(".github.io") ? "/" : `/${name}/`;
  }

  return "/";
}

export default defineConfig({
  vite: {
    base: resolveBase(),
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
