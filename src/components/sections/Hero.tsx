import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { hero, contact } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Decorative center glowing blob */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 opacity-30 blur-[100px]" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center md:px-8">
        <Reveal className="flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              {hero.eyebrow}
            </div>
            
            <h1 className="max-w-4xl text-balance font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              I build fast, scalable web products that <span className="text-gradient-accent">users trust</span> and teams can grow.
            </h1>
            
            <p className="max-w-2xl text-pretty px-1 text-base leading-relaxed text-secondary md:text-lg">
              {hero.subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="flex items-center justify-center gap-6 pt-6 text-secondary">
            <a href={contact.github || "https://github.com"} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={contact.linkedin || "https://linkedin.com"} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
              <FaEnvelope className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
