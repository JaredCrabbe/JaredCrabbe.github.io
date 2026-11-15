import { describe, expect, it } from "vitest";
import { resolvePagesBase } from "@/lib/pages-base";

describe("GitHub Pages base path", () => {
  it("serves a repo named after the account from the domain root", () => {
    expect(resolvePagesBase({ GITHUB_REPOSITORY: "JaredCrabbe/JaredCrabbe.github.io" })).toBe("/");
  });

  it("serves any other repo as a project page under its name", () => {
    expect(resolvePagesBase({ GITHUB_REPOSITORY: "JaredCrabbe/Portfolio_website" })).toBe(
      "/Portfolio_website/",
    );
  });

  it("falls back to the domain root outside GitHub", () => {
    expect(resolvePagesBase({})).toBe("/");
    expect(resolvePagesBase({ GITHUB_REPOSITORY: undefined })).toBe("/");
  });

  it("lets an explicit PAGES_BASE override the repo name", () => {
    expect(
      resolvePagesBase({
        PAGES_BASE: "/",
        GITHUB_REPOSITORY: "JaredCrabbe/Portfolio_website",
      }),
    ).toBe("/");
    expect(resolvePagesBase({ PAGES_BASE: "/portfolio" })).toBe("/portfolio/");
    expect(resolvePagesBase({ PAGES_BASE: "/portfolio/" })).toBe("/portfolio/");
    // An empty override (an unset Actions variable) must not change anything.
    expect(
      resolvePagesBase({
        PAGES_BASE: "",
        GITHUB_REPOSITORY: "JaredCrabbe/Portfolio_website",
      }),
    ).toBe("/Portfolio_website/");
  });

  it("always returns a form Vite accepts", () => {
    for (const env of [
      {},
      { GITHUB_REPOSITORY: "JaredCrabbe/Portfolio_website" },
      { GITHUB_REPOSITORY: "JaredCrabbe/JaredCrabbe.github.io" },
      { PAGES_BASE: "/x" },
      { PAGES_BASE: "  " },
    ]) {
      const base = resolvePagesBase(env);
      expect(base.startsWith("/")).toBe(true);
      expect(base.endsWith("/")).toBe(true);
    }
  });
});
