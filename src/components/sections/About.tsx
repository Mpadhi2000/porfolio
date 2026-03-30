import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Summary"
      title={about.title}
      subtitle="Business-focused engineering, clean execution, and measurable outcomes."
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal className="space-y-5">
          {about.summary.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-base leading-7 text-secondary md:text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80} className="card-shell">
          <h3 className="mb-4 text-lg font-semibold text-primary">Career Highlights</h3>
          <ul className="space-y-3 text-sm text-secondary">
            {about.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
