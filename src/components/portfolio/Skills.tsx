import { skillGroups } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section aria-labelledby="skills" className="border-y border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading index="02" id="skills" title="Skills" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li key={group.title} className="card-hover rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-base font-semibold text-primary">
                <span className="text-muted-foreground">#</span> {group.title}
              </h3>
              <ul className="space-y-2 text-sm text-foreground/90">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-mono text-primary/70" aria-hidden="true">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
