type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-semibold tracking-wide text-accent backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-accent/10">
      {children}
    </span>
  );
}
