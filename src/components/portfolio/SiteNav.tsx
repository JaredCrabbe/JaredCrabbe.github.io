import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/portfolio-data";
import { SocialLinks } from "./SocialLinks";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold text-foreground transition-colors hover:text-primary">
          <span className="text-primary">~/</span>jared-crabbe
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="h-5 w-px bg-border" aria-hidden="true" />
          <SocialLinks />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <SocialLinks />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-border bg-background px-5 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
