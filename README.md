# Jared Crabbe — Portfolio

Single-page portfolio: dark theme, one mint accent, JetBrains Mono headings over IBM Plex Sans
body. One page at `/` with in-page `#section` anchors — no backend, no forms, no login.

Content lives in `src/lib/portfolio-data.ts`; everything in `src/components/portfolio/` only
renders it.

## Run locally

```sh
bun install
bun run dev
```

## Tests

```sh
bun run test
```

## Deploy to GitHub Pages

The site is prerendered to plain static files in `dist/client` at build time, so Pages serves it
without a server.

1. Create a repository for it.
   - For the address `jaredcrabbe.github.io`, name the repo **`JaredCrabbe.github.io`**.
   - Any other name (e.g. `Portfolio_website`) serves at
     `jaredcrabbe.github.io/<repo-name>` instead.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push the code to the `main` branch. `.github/workflows/deploy-pages.yml` builds it and
   publishes the result.
4. Check **Actions** in the repository for the run, then open the site address.

The base path is decided by `vite.config.ts` from `GITHUB_REPOSITORY`, so the workflow needs no
editing when the repo is renamed. To force a base (for example `/` when a custom domain points at
a repo whose name isn't `<owner>.github.io`), add an Actions **variable** named `PAGES_BASE`.

### Publishing from Lovable instead

`bun run build` still produces the Lovable/Cloudflare bundle, so publishing through the Lovable
editor keeps working alongside this.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
