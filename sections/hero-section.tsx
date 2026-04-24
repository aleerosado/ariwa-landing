import AnimatedReveal from "@/components/animated-reveal";
import CtaButton from "@/components/cta-button";
import SectionShell from "@/components/section-shell";

const stats = [
  { value: "85%", label: "Liderazgo femenino" },
  { value: "3+", label: "Productos propios" },
  { value: "12+", label: "Proyectos completados" },
  { value: "100%", label: "Talento peruano" },
];

const missionTags = ["Liderazgo femenino", "Productos propios", "IA aplicada"];

export default function HeroSection() {
  return (
    <SectionShell
      id="top"
      className="overflow-hidden pb-16 pt-14 sm:pt-16 lg:pb-20"
    >
      <div className="landing-hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="landing-hero-orb pointer-events-none absolute -right-32 top-12 -z-10 h-[400px] w-[400px]" aria-hidden="true" />

      <div className="hero-grid grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <AnimatedReveal>
          <p className="mb-6 inline-flex items-center gap-3 rounded-[50px] border border-[rgba(232,81,63,0.2)] bg-white px-[18px] py-[10px] text-sm font-semibold text-[#1B365D] shadow-sm">
            <span className="peru-ribbon h-4 w-7 rounded-sm border border-[#E8ECF2]" aria-hidden="true" />
            Tecnología peruana de clase mundial
          </p>
          <h1 className="fluid-h1 font-sora text-balance font-extrabold leading-[1.04] text-[#1B365D]">
            Empoderamos con <span className="text-[#E8513F]">IA</span> y productos propios
          </h1>
          <p className="mt-5 font-sora text-[clamp(1.125rem,2.8vw,1.375rem)] font-light italic text-[#E8513F]">
            Pensamos como startup, programamos como leyenda
          </p>
          <p className="responsive-copy mt-6 max-w-2xl font-normal leading-[1.7] text-[#5A6C84]">
            Ariwa Labs construye productos propios, IA aplicada e ingeniería de software desde Perú para organizaciones que necesitan moverse rápido sin sacrificar calidad.
          </p>

          <div className="responsive-actions mt-8 flex flex-wrap gap-4">
            <CtaButton
              href="#products"
              className="rounded-[10px] px-[30px] py-4 shadow-[0_4px_14px_rgba(232,81,63,0.25)] hover:shadow-[0_12px_28px_rgba(232,81,63,0.32)]"
            >
              Ver productos
            </CtaButton>
            <CtaButton
              href="#contact"
              variant="secondary"
              className="rounded-[10px] border-2 border-[#E0E5EC] px-[30px] py-4 shadow-none hover:shadow-[0_12px_28px_rgba(27,54,93,0.12)]"
            >
              Contáctanos
            </CtaButton>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {missionTags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-[rgba(232,81,63,0.2)] bg-[#FEF5F4] px-4 py-2 text-sm font-semibold text-[#1B365D]"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="stats-grid grid gap-5">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-[#E8ECF2] bg-white px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-34px_rgba(27,54,93,0.35)]"
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-[#E8513F] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <p className="font-sora text-[44px] font-bold leading-none text-[#1B365D]">{stat.value}</p>
                <p className="mt-3 text-[13px] font-normal uppercase tracking-wide text-[#5A6C84]">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </SectionShell>
  );
}
