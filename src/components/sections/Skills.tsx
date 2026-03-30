import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/data/portfolio";
import Marquee from "react-fast-marquee";

export function Skills() {
  const row1 = [
    "Responsive Design", "Core Web Vitals", "React", "Next.js", "JavaScript", 
    "Tailwind CSS", "HTML5", "CSS3"
  ];
  const row2 = [
    "Node.js", "Express", "REST APIs", "WordPress", "Headless CMS", 
    "JWT", "MySQL", "PostgreSQL", "MongoDB"
  ];
  const row3 = [
    "GitHub", "Figma", "CDN", "Caching", "ADA Compliance", 
    "GDPR Compliance", "Chrome DevTools", "Git", "SEO Workflows"
  ];

  const renderMarqueeItems = (items: string[]) =>
    items.map((skill, index) => (
      <div key={`${skill}-${index}`} className="flex items-center py-2">
        <span className="mx-6 text-3xl font-semibold text-white/30 transition-colors hover:text-white md:mx-10 md:text-4xl">
          {skill}
        </span>
        <span className="text-white/50">•</span>
      </div>
    ));

  return (
    <section id="skills" className="relative section-shell text-white">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10 md:mb-12">
            <SectionHeading 
              eyebrow="Expertise" 
              title="Skills & Technologies" 
              subtitle="Technologies and tools I work with systematically." 
            />
          </div>
        </Reveal>

        <div className="mb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100} className="flex h-full">
              <div className="card-shell flex w-full flex-col">
                <h3 className="mb-6 text-lg font-semibold text-primary">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200} className="w-full overflow-hidden space-y-6 md:space-y-8 pb-10">
        <Marquee
          className="overflow-hidden"
          speed={40}
          pauseOnHover={true}
        >
          {renderMarqueeItems(row1)}
        </Marquee>
        <Marquee
          className="overflow-hidden"
          speed={40}
          pauseOnHover={true}
          direction="right"
        >
          {renderMarqueeItems(row2)}
        </Marquee>
        <Marquee
          className="overflow-hidden"
          speed={40}
          pauseOnHover={true}
        >
          {renderMarqueeItems(row3)}
        </Marquee>
      </Reveal>
    </section>
  );
}
