import { Activity, Boxes, HardDrive, Laptop, Server } from "lucide-react";
import type { ReactNode } from "react";

const services = [
  "reverse proxy",
  "DNS filtering",
  "dashboard",
  "media server",
  "file shares",
  "notifications",
];

function Node({ icon, title, children }: { icon: ReactNode; title: string; children?: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
        <span className="text-primary">{icon}</span>
        {title}
      </div>
      {children && <div className="mt-2 text-sm text-muted-foreground">{children}</div>}
    </div>
  );
}

function Link({ label, vertical = false }: { label: string; vertical?: boolean }) {
  return (
    <div
      className={
        vertical
          ? "flex flex-col items-center justify-center gap-1 py-2"
          : "flex flex-col items-center justify-center gap-1 py-2 lg:flex-row lg:px-1 lg:py-0"
      }
      aria-hidden="true"
    >
      <span className={vertical ? "h-6 w-px border-l border-dashed border-primary/60" : "h-6 w-px border-l border-dashed border-primary/60 lg:h-px lg:w-6 lg:border-l-0 lg:border-t"} />
      <span className="font-mono text-[11px] text-primary/80 whitespace-nowrap">{label}</span>
      <span className={vertical ? "h-6 w-px border-l border-dashed border-primary/60" : "h-6 w-px border-l border-dashed border-primary/60 lg:h-px lg:w-6 lg:border-l-0 lg:border-t"} />
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure className="mb-14 rounded-xl border border-border bg-surface p-5 sm:p-8">
      <figcaption className="mb-6 font-mono text-sm text-muted-foreground">
        <span className="text-primary">$</span> homelab --overview
      </figcaption>

      <div className="grid items-center lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,2.2fr)_auto_minmax(0,1fr)]">
        <Node icon={<Laptop className="h-4 w-4" aria-hidden="true" />} title="Remote device">
          Laptop or phone, away from home
        </Node>

        <Link label="Tailscale VPN" />

        <div className="rounded-lg border border-primary/40 bg-card p-4 shadow-[var(--shadow-glow)]">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
            <Server className="h-4 w-4 text-primary" aria-hidden="true" />
            Fedora Linux host
          </div>
          <div className="mt-3 rounded-md border border-dashed border-border p-3">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Boxes className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Docker Compose services
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {services.map((s) => (
                <li key={s} className="tag">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link label="persistent mount" />

        <Node icon={<HardDrive className="h-4 w-4" aria-hidden="true" />} title="NAS storage">
          External drive, Samba shares, backup snapshots
        </Node>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,2.2fr)_auto_minmax(0,1fr)]">
        <div className="col-start-1 lg:col-start-3">
          <Link label="metrics & events" vertical />
          <Node icon={<Activity className="h-4 w-4" aria-hidden="true" />} title="Monitoring & alerts">
            Prometheus + Grafana, Python health and network monitors, push alerts via ntfy
          </Node>
        </div>
      </div>
    </figure>
  );
}
