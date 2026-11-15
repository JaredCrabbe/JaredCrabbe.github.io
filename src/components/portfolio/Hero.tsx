import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const focusAreas = [
  "linux administration",
  "networking",
  "self-hosted services",
  "monitoring & automation",
  "security hardening",
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="grid-bg hero-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-5 font-mono text-sm text-primary">$ whoami</p>
          <h1 id="hero-title" className="text-4xl font-bold text-foreground sm:text-6xl">
            Jared Crabbe
          </h1>
          <p className="mt-4 font-mono text-lg text-muted-foreground sm:text-xl">
            Systems &amp; Network Administration
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90">
            Building, monitoring and securing self-hosted infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="font-mono">
              <a href="#projects">
                View projects <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="terminal" className="font-mono">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card/80 font-mono text-sm shadow-2xl backdrop-blur" aria-hidden="true">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="ml-2 text-xs text-muted-foreground">focus.txt</span>
          </div>
          <div className="space-y-1.5 px-5 py-5">
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> cat focus.txt
            </p>
            {focusAreas.map((area) => (
              <p key={area} className="text-foreground/90">
                <span className="text-primary/70">›</span> {area}
              </p>
            ))}
            <p className="caret pt-1 text-muted-foreground">
              <span className="text-primary">$</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
