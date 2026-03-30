import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Case Studies"
      title="Featured Projects"
      subtitle="Problem, solution, and impact presented in a recruiter-friendly format."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 70} className="card-shell">
            <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
            <p className="mt-2 text-sm text-secondary">{project.summary}</p>

            <dl className="mt-5 space-y-4 text-sm text-secondary">
              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Problem</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Solution</dt>
                <dd>{project.solution}</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Impact</dt>
                <dd>{project.impact}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((stackItem) => (
                <Tag key={stackItem}>{stackItem}</Tag>
              ))}
            </div>

            <div className="mt-6 flex gap-4 text-sm">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-btn">
                  Live Site
                </a>
              ) : null}
              {project.codeUrl ? (
                <a href={project.codeUrl} target="_blank" rel="noreferrer" className="link-btn">
                  Code
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
