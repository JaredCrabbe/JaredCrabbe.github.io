import { Activity, ArrowUpRight, Boxes, ChartLine, DatabaseBackup, Globe, HardDrive, Network, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projects, writeUpUrl, type ProjectIcon } from "@/lib/portfolio-data";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { SectionHeading } from "./SectionHeading";

const icons: Record<ProjectIcon, LucideIcon> = {
  boxes: Boxes,
  storage: HardDrive,
  backup: DatabaseBackup,
  docker: Activity,
  network: Network,
  shield: ShieldCheck,
  chart: ChartLine,
  dns: Globe,
};

export function Projects() {
  return (
    <section aria-labelledby="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading index="03" id="projects" title="Projects" />
      <ArchitectureDiagram />

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => {
          const Icon = icons[project.icon];
          return (
            <li key={project.title} className="card-hover flex flex-col overflow-hidden rounded-lg border border-border bg-card">
              <div className="grid-bg relative flex aspect-[16/7] items-center justify-center border-b border-border bg-surface" aria-hidden="true">
                <span className="absolute top-3 left-4 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-primary/30 bg-primary-soft text-primary">
                  <Icon className="h-7 w-7" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-4 font-mono text-sm">
                  {project.docs.length === 1 && project.docs[0] ? (
                    <a
                      href={writeUpUrl(project.docs[0].path)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                    >
                      Read the write-up
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      <span className="sr-only"> about {project.title} (opens in a new tab)</span>
                    </a>
                  ) : (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="text-muted-foreground">Read the write-up:</span>
                      {project.docs.map((doc) => (
                        <a
                          key={doc.path}
                          href={writeUpUrl(doc.path)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                        >
                          {doc.label}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
