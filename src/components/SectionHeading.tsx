// No imports needed
interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-sm text-accent-500">{number} /</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          {title}
        </h2>
        <div className="h-[1px] flex-grow bg-border-subtle ml-4 hidden sm:block"></div>
      </div>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
