// Change this one constant to point every "Read the write-up" link at a different repo/branch.
export const HOMELAB_REPO_URL = "https://github.com/JaredCrabbe/homelab";
export const HOMELAB_REPO_BRANCH = "master";

export const GITHUB_URL = "https://github.com/JaredCrabbe";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jared-crabbe-524400203/";
export const EMAIL = "jdcrabbe1@gmail.com";

export function writeUpUrl(path: string) {
  return `${HOMELAB_REPO_URL}/blob/${HOMELAB_REPO_BRANCH}/${path}`;
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Linux",
    items: [
      "Fedora",
      "Command line",
      "systemd services and timers",
      "Users, groups and permissions",
      "firewalld",
      "SELinux awareness",
    ],
  },
  {
    title: "Networking",
    items: [
      "TCP/IP basics",
      "DNS filtering",
      "Reverse proxying",
      "Tailscale overlay VPN",
      "ICMP latency and packet-loss monitoring",
      "Firewall rules",
    ],
  },
  {
    title: "Services & containers",
    items: ["Docker", "Docker Compose", "Samba/SMB", "Nginx Proxy Manager", "AdGuard Home", "Plex"],
  },
  {
    title: "Monitoring & automation",
    items: ["Python", "ntfy notifications", "Prometheus", "Grafana", "Scheduled jobs"],
  },
  {
    title: "Security",
    items: [
      "Least privilege",
      "Attack-surface reduction",
      "SSH restriction",
      "Verifying changes after applying them",
    ],
  },
  {
    title: "Workflow",
    items: ["Git and GitHub", "Markdown documentation", "Obsidian"],
  },
] as const;

export type ProjectIcon =
  | "boxes"
  | "storage"
  | "backup"
  | "docker"
  | "network"
  | "shield"
  | "chart"
  | "dns";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: ProjectIcon;
  docs: { label: string; path: string }[];
}

export const projects: Project[] = [
  {
    title: "Self-hosted Docker Compose platform",
    description:
      "A set of self-hosted services where each one runs in its own Docker Compose project: Nginx Proxy Manager, AdGuard Home, Homepage, Plex, Samba and ntfy. Keeping them separate means any service can be updated, restarted or removed without touching the others. Configuration and documentation are tracked in Git.",
    tags: ["Docker", "Docker Compose", "Git", "Linux"],
    icon: "boxes",
    docs: [{ label: "Docker and Compose", path: "docs/02-Docker-and-Compose.md" }],
  },
  {
    title: "NAS storage and Samba",
    description:
      "A 2.7 TB external drive formatted as ext4 and mounted persistently so it survives reboots. Data follows a structured directory layout with Linux permissions controlling access, and Samba shares make it available to Windows machines.",
    tags: ["ext4", "Linux permissions", "Samba", "SMB"],
    icon: "storage",
    docs: [
      { label: "NAS storage", path: "docs/03-NAS-Storage.md" },
      { label: "Samba / SMB", path: "docs/04-Samba-SMB.md" },
    ],
  },
  {
    title: "Automated backups",
    description:
      "A Python backup script run daily by a systemd timer, creating timestamped snapshots and keeping the latest seven. Each backup gets SHA-256 checksums and is verified, a restore has been tested, and a failed run sends an alert.",
    tags: ["Python", "systemd timers", "SHA-256", "Alerting"],
    icon: "backup",
    docs: [{ label: "Automated backups", path: "docs/07-Automated-backups.md" }],
  },
  {
    title: "Docker health monitor",
    description:
      "A Python service that watches Docker events and sends ntfy alerts when containers change state. It persists its state, reconciles with what is actually running on startup, and calculates how long a service was down.",
    tags: ["Python", "Docker", "ntfy", "Monitoring"],
    icon: "docker",
    docs: [{ label: "Homelab monitor", path: "docs/06-Homelab-Monitor.md" }],
  },
  {
    title: "Network monitor",
    description:
      "Checks the network interface, the gateway and internet connectivity while tracking latency and packet loss. Each run is classified as up, degraded or down, and an alert goes out only when that state changes. It runs on a systemd timer.",
    tags: ["Networking", "ICMP", "systemd timers", "Alerting"],
    icon: "network",
    docs: [{ label: "Network monitor", path: "docs/11-Network-Monitor.md" }],
  },
  {
    title: "Secure remote access and hardening",
    description:
      "Remote access runs over Tailscale SSH with a least-privilege access policy. Root SSH login is disabled, admin interfaces are bound to localhost and broad firewall port ranges were removed. Every change was verified after it was applied.",
    tags: ["Tailscale", "SSH", "firewalld", "Least privilege"],
    icon: "shield",
    docs: [
      { label: "Tailscale remote access", path: "docs/12-Tailscale-Remote-Access.md" },
      { label: "Security hardening", path: "docs/13-Security-Hardening.md" },
    ],
  },
  {
    title: "Prometheus and Grafana",
    description:
      "Host metrics collected by Prometheus with 30-day retention and visualised in Grafana dashboards. Both are exposed to localhost only rather than the wider network.",
    tags: ["Prometheus", "Grafana", "Metrics"],
    icon: "chart",
    docs: [{ label: "Prometheus and Grafana", path: "docs/14-Prometheus-and-Grafana.md" }],
  },
  {
    title: "DNS filtering and reverse proxy",
    description:
      "AdGuard Home filters DNS for the network and provides internal DNS names for self-hosted services. Nginx Proxy Manager routes those names to the right service, so each one has a readable name.",
    tags: ["AdGuard Home", "Nginx Proxy Manager", "DNS", "Reverse proxy"],
    icon: "dns",
    docs: [
      { label: "Nginx Proxy Manager", path: "docs/08-nginx-proxy-manager.md" },
      { label: "AdGuard Home", path: "docs/09-adguard-home.md" },
    ],
  },
];
