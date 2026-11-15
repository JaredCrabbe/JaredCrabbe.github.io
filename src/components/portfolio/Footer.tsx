import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jared Crabbe · built, broken, fixed, documented
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
