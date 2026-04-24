import SectionShell from "@/components/section-shell";

const values = [
  {
    title: "Empoderamiento femenino",
    emoji: "👩‍💻",
    description:
      "El 85% de nuestro equipo técnico está liderado por mujeres que diseñan, programan y llevan soluciones complejas a producción.",
  },
  {
    title: "Orgullo peruano",
    emoji: "🇵🇪",
    description:
      "Creamos tecnología desde Lima para resolver desafíos regionales con estándares globales, cercanía cultural y ambición internacional.",
  },
  {
    title: "Productos propios",
    emoji: "🚀",
    description:
      "Construimos propiedad intelectual sobre cada aprendizaje. Pensamos como startup, programamos como leyenda.",
  },
];

const stats = [
  { value: "85%", label: "Liderazgo femenino" },
  { value: "12+", label: "Organizaciones transformadas" },
  { value: "3", label: "Productos en producción" },
  { value: "100%", label: "Talento peruano" },
];

export default function AboutSection() {
  return (
    <SectionShell id="about" className="bg-[#F8F9FB]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex rounded-full border border-[#E8513F]/20 bg-white px-4 py-2 text-sm font-bold text-[#E8513F] shadow-sm">
          💪 Nuestro propósito
        </p>
        <h2 className="fluid-section-title mt-5 font-sora font-bold leading-tight text-[#1B365D]">
          Tecnología con <span className="text-[#E8513F]">propósito</span> e impacto real
        </h2>
        <p className="responsive-copy mt-4 leading-[1.7] text-[#5A6C84]">
          Creemos que la diversidad acelera mejores decisiones y que la innovación tecnológica debe crear oportunidades reales para equipos, organizaciones y comunidades.
        </p>
      </div>

      <div className="values-grid mt-12 grid gap-6">
        {values.map((value) => (
          <article
            key={value.title}
            className="group relative overflow-hidden rounded-2xl border border-[#E8ECF2] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-34px_rgba(27,54,93,0.35)]"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#E8513F] transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
            <div className="text-[40px] leading-none" aria-hidden="true">
              {value.emoji}
            </div>
            <h3 className="mt-6 font-sora text-xl font-bold text-[#1B365D]">{value.title}</h3>
            <p className="mt-3 text-sm leading-[1.7] text-[#5A6C84]">{value.description}</p>
          </article>
        ))}
      </div>

      <div className="purpose-stats-pattern mt-14 overflow-hidden rounded-[20px] bg-[#1B365D] p-6 sm:p-8">
        <div className="purpose-stats-grid grid gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/12 bg-white/[0.08] p-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white/[0.14]"
            >
              <p className="font-sora text-[56px] font-bold leading-none text-white">{stat.value}</p>
              <p className="mt-3 text-sm font-medium text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-3xl bg-[linear-gradient(135deg,#E8513F_0%,#ff6b57_100%)] p-8 text-center shadow-[0_24px_58px_-36px_rgba(232,81,63,0.8)] sm:p-10">
        <h3 className="fluid-cta-title font-sora font-bold text-white">Únete a la transformación</h3>
        <div className="responsive-actions mt-7 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-sora text-sm font-semibold text-[#1B365D] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(27,54,93,0.18)]"
          >
            Ver posiciones abiertas
          </a>
          <a
            href="#insights"
            className="inline-flex items-center justify-center rounded-xl border border-white/70 px-7 py-4 font-sora text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/12"
          >
            Conocer cultura
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
