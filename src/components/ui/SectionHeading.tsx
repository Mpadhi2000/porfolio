type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mx-auto flex max-w-2xl flex-col items-center text-center space-y-3">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="text-pretty text-base text-secondary md:text-lg">{subtitle}</p> : null}
    </header>
  );
}
