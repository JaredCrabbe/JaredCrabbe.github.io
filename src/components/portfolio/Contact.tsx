import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EMAIL } from "@/lib/portfolio-data";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  return (
    <section aria-labelledby="contact" className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="mb-4 font-mono text-sm text-primary">04. contact</p>
        <h2 id="contact" className="text-3xl font-bold text-foreground sm:text-5xl">
          Get in touch
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I'm currently looking for entry-level opportunities, internships and learnerships. Send me
          a message.
        </p>
        <Button asChild size="lg" className="mt-10 font-mono">
          <a href={`mailto:${EMAIL}`}>
            <Mail aria-hidden="true" /> Say hello
          </a>
        </Button>
        <SocialLinks size="lg" className="mt-8 justify-center" />
      </div>
    </section>
  );
}
