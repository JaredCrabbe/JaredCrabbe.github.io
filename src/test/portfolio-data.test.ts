import { describe, expect, it } from "vitest";
import { HOMELAB_REPO_URL, projects, writeUpUrl } from "@/lib/portfolio-data";

describe("portfolio data", () => {
  it("builds write-up links from the single repo constant on the master branch", () => {
    expect(writeUpUrl("docs/07-Automated-backups.md")).toBe(
      "https://github.com/JaredCrabbe/homelab/blob/master/docs/07-Automated-backups.md",
    );
    for (const p of projects) {
      for (const d of p.docs) expect(writeUpUrl(d.path).startsWith(`${HOMELAB_REPO_URL}/blob/`)).toBe(true);
    }
  });

  it("lists the eight requested projects", () => {
    expect(projects).toHaveLength(8);
  });

  it("never exposes IP addresses or port numbers in project copy", () => {
    const text = JSON.stringify(projects);
    expect(text).not.toMatch(/\b\d{1,3}(\.\d{1,3}){3}\b/);
    expect(text).not.toMatch(/:\d{2,5}\b/);
    expect(text).not.toMatch(/\bport \d+/i);
  });
});
