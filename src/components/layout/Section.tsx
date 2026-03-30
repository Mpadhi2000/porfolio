import { SectionHeading } from "@/components/ui/SectionHeading";

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, eyebrow, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`section-shell ${className}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {title ? (
          <div className="mb-10 md:mb-12">
            <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
