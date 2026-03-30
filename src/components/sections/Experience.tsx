import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Work Experience"
      subtitle="A progression built on shipping reliable outcomes in production environments."
    >
      <div className="mx-auto max-w-4xl">
        <ol className="relative ml-3 space-y-8 border-l border-white/10 md:ml-6">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 80}>
              <li className="relative pl-6 md:pl-10">
                {/* Timeline dot positioned cleanly on the left border */}
                <span 
                  className="absolute -left-[6.5px] top-10 h-3 w-3 rounded-full border border-accent/60 bg-accent ring-4 ring-[#050505]" 
                  aria-hidden="true" 
                />

                <div className="card-shell block w-full">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        {item.role} <span className="text-secondary">@ {item.company}</span>
                      </h3>
                      <p className="text-sm text-secondary">{item.location}</p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-accent">{item.period}</p>
                  </div>

                  <ul className="space-y-2 text-sm leading-6 text-secondary">
                    {item.achievements.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((stackItem) => (
                      <Tag key={stackItem}>{stackItem}</Tag>
                    ))}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
