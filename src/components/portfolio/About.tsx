import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section aria-labelledby="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading index="01" id="about" title="About" />
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-foreground/90">
        <p>
          I'm a self-taught IT practitioner moving into systems and network administration from a
          manufacturing technician background. I learn by building, breaking, fixing, documenting
          and automating, using a Fedora Linux homelab as my training ground.
        </p>
        <p>
          My strengths are troubleshooting, learning unfamiliar systems and working methodically:
          changing one thing at a time and verifying it. I'm looking for entry-level systems
          administration, IT support and networking roles, as well as internships and learnerships.
        </p>
      </div>
    </section>
  );
}
