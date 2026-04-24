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
        <p className="mb-4 inline-flex rounded-full border border-[#E8513F]/25 bg-[#E8513F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#E8513F]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-sora text-3xl font-bold leading-tight text-[#1B365D] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[#5A6C84] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
