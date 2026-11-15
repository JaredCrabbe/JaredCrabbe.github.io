// Decides the URL prefix the site is built for, so one repo deploys to any
// GitHub Pages address without editing the deploy workflow.

export type PagesEnv = {
  /** Forces a prefix, e.g. "/" or "/portfolio". Wins over the repository name. */
  PAGES_BASE?: string | undefined;
  /** GitHub's "owner/repo" for the repository being built. */
  GITHUB_REPOSITORY?: string | undefined;
};

/**
 * Returns Vite's `base`: always "/" or "/name/", never a bare "" or "/name".
 *
 * - `PAGES_BASE` set -> use it (for a custom domain, or to override locally).
 * - repo named "<owner>.github.io" -> "/", because that repo is served from the
 *   domain root.
 * - any other repo -> "/<repo-name>/", because Pages serves it as a project page.
 */
export function resolvePagesBase(env: PagesEnv): string {
  const override = env.PAGES_BASE;
  if (override !== undefined && override.trim() !== "") {
    const trimmed = override.trim().replace(/\/+$/, "");
    return trimmed === "" ? "/" : `${trimmed}/`;
  }

  const name = env.GITHUB_REPOSITORY?.split("/")[1];
  if (name !== undefined && name !== "") {
    return name.endsWith(".github.io") ? "/" : `/${name}/`;
  }

  return "/";
}
