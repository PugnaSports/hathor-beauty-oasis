type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${a} reveal`}>
      {eyebrow ? (
        <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-ink-muted text-base md:text-lg leading-relaxed text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}