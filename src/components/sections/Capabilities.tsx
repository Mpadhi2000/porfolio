import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/data/portfolio";

export function Capabilities() {
  return (
    <Section
      id="services"
      eyebrow="Role-Focused Skills"
      title="What I Do"
      subtitle="Practical engineering capabilities applied in real production teams."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 70} className="card-shell">
            <h3 className="text-lg font-semibold text-primary">{capability.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              {capability.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
