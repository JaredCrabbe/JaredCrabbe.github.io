import { Github, Linkedin } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function SocialLinks({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const icon = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  const linkClass = cn(
    "inline-flex items-center justify-center rounded-md border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-secondary hover:text-primary",
    box,
  );
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      <li>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="GitHub profile (opens in a new tab)">
          <Github className={icon} aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="LinkedIn profile (opens in a new tab)">
          <Linkedin className={icon} aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
