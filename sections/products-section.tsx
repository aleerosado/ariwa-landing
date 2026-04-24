import SectionShell from "@/components/section-shell";

const products = [
  {
    name: "AgriSense AI",
    icon: "🌾",
    iconBackground: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
    status: "EN PRODUCCIÓN",
    statusClassName: "bg-[#E8F5E9] text-[#2E7D32]",
    description: "Plataforma de inteligencia artificial para agricultura de precisión, diseñada para mejorar decisiones de campo con datos predictivos y monitoreo operativo.",
    features: [
      "Modelos predictivos de rendimiento",
      "Alertas climáticas en tiempo real",
      "Dashboard móvil para campo",
      "Integración con IoT agrícola",
    ],
  },
  {
    name: "GovBot",
    icon: "🏛️",
    iconBackground: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
    status: "BETA PÚBLICA",
    statusClassName: "bg-[#FFF3E0] text-[#F57C00]",
    description: "Asistente conversacional de IA para entidades públicas, creado para simplificar atención ciudadana, consultas frecuentes y procesos administrativos.",
    features: [
      "NLP en español peruano",
      "Integración con sistemas legacy",
      "Analítica de interacciones",
      "Cumplimiento normativo",
    ],
  },
  {
    name: "DataFlow",
    icon: "📊",
    iconBackground: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
    status: "Q3 2026",
    statusClassName: "bg-[#E8EAF6] text-[#5E35B1]",
    description: "Plataforma low-code para pipelines de datos que permite diseñar, gobernar y desplegar flujos de información sin fricción técnica innecesaria.",
    features: [
      "Constructor visual drag & drop",
      "Conectores pre-construidos",
      "Gobierno de datos integrado",
      "Despliegue cloud automático",
    ],
  },
];

export default function ProductsSection() {
  return (
    <SectionShell id="products" className="bg-[#F8F9FB]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex rounded-full bg-[linear-gradient(135deg,#E8513F_0%,#ff6b57_100%)] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_-18px_rgba(232,81,63,0.9)]">
          NUESTROS PRODUCTOS
        </p>
        <h2 className="fluid-section-title mt-5 font-sora font-bold leading-tight text-[#1B365D]">
          De la consultoría a productos escalables
        </h2>
        <p className="responsive-copy mt-4 leading-[1.7] text-[#5A6C84]">
          Convertimos aprendizajes de implementación en plataformas propias que resuelven problemas reales en agricultura, gobierno y datos.
        </p>
      </div>

      <div className="my-12 h-px bg-[linear-gradient(90deg,transparent,#e8ecf2,transparent)]" aria-hidden="true" />

      <div className="products-grid grid gap-6">
        {products.map((product) => (
          <article
            key={product.name}
            className="group flex h-full flex-col rounded-2xl border-[1.5px] border-[#E8ECF2] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8513F] hover:shadow-[0_12px_32px_rgba(232,81,63,0.12)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                style={{ background: product.iconBackground }}
                aria-hidden="true"
              >
                {product.icon}
              </div>
              <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${product.statusClassName}`}>
                {product.status}
              </span>
            </div>

            <h3 className="mt-7 font-sora text-2xl font-bold text-[#1B365D]">{product.name}</h3>
            <p className="mt-3 text-sm leading-[1.7] text-[#5A6C84]">{product.description}</p>

            <ul className="mt-6 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed text-[#1B365D]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8513F]" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#E8513F] transition-[gap] duration-300 group-hover:gap-2.5"
            >
              Conocer más <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
