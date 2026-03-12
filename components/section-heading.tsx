interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const aligned = align === "center";

  return (
    <div className={aligned ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#22C55E]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#F8FAFC] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[#94A3B8] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
