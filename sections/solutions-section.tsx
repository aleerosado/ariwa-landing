import SectionShell from "@/components/section-shell";

const services = [
  {
    title: "Adopción de IA",
    icon: "🧠",
    iconBackground: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
    features: ["Evaluación casos de uso", "Copilotos personalizados", "Automatización IA", "Capacitación"],
  },
  {
    title: "Cloud y DevOps",
    icon: "☁️",
    iconBackground: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
    features: ["Migración cloud", "CI/CD", "IaC", "Optimización costos"],
  },
  {
    title: "Desarrollo de software a medida",
    icon: "💻",
    iconBackground: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
    featured: true,
    features: ["Apps web/móvil", "Sistemas internos", "APIs", "MVPs"],
  },
  {
    title: "Datos y analítica",
    icon: "📊",
    iconBackground: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
    features: ["Data warehouses", "ETL", "Dashboards", "Modelos predictivos"],
  },
  {
    title: "Modernización legacy",
    icon: "🔧",
    iconBackground: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)",
    features: ["Auditoría técnica", "Re-arquitectura", "Integración APIs", "Transferencia conocimiento"],
  },
  {
    title: "Consultoría estratégica",
    icon: "🎯",
    iconBackground: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
    features: ["Madurez digital", "Diseño arquitecturas", "Priorización", "ROI"],
  },
];

const trustBadges = ["Respuesta en 24h", "Sin compromisos", "Equipo 100% peruano"];

export default function SolutionsSection() {
  return (
    <SectionShell id="solutions" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex rounded-full border border-[#E8513F]/20 bg-[#FEF5F4] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#E8513F]">
          SERVICIOS DE CONSULTORÍA
        </p>
        <h2 className="fluid-section-title mt-5 font-sora font-bold leading-tight text-[#1B365D]">
          Transformamos tu visión en soluciones reales
        </h2>
        <p className="responsive-copy mt-4 leading-[1.7] text-[#5A6C84]">
          Acompañamos a tu organización desde la estrategia hasta la implementación, combinando IA, cloud, datos e ingeniería de software con ejecución pragmática.
        </p>
      </div>

      <div className="services-grid mt-12 grid gap-6">
        {services.map((service) => (
          <article
            key={service.title}
            className="card-hover border-top-animated group rounded-2xl border border-[#E8ECF2] bg-white p-7 shadow-[0_18px_50px_-44px_rgba(27,54,93,0.45)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                style={{ background: service.iconBackground }}
                aria-hidden="true"
              >
                {service.icon}
              </div>
              {service.featured ? (
                <span className="rounded-full bg-[#FEF5F4] px-3 py-1 text-xs font-bold text-[#E8513F]">⭐</span>
              ) : null}
            </div>

            <h3 className="mt-6 font-sora text-xl font-bold text-[#1B365D]">{service.title}</h3>
            <ul className="mt-5 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed text-[#5A6C84]">
                  <span className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-[#E8513F]" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#1B365D_0%,#2a4a75_100%)] px-6 py-14 text-center shadow-[0_28px_80px_-46px_rgba(27,54,93,0.9)] sm:px-10 sm:py-16">
        <h3 className="fluid-cta-title cta-title mx-auto max-w-3xl font-sora font-extrabold leading-tight text-white">
          ¿Listo para transformar tu organización?
        </h3>
        <p className="responsive-copy mx-auto mt-4 max-w-2xl leading-[1.7] text-white/90">
          Agenda una consultoría inicial sin costo y descubre qué oportunidades tecnológicas pueden generar impacto medible en tu operación.
        </p>

        <div className="responsive-actions mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:contact@ariwalabs.com" className="cta-btn-primary btn-ripple">
            <span className="relative z-10">📅 Agendar consultoría gratuita</span>
          </a>
          <a
            href="mailto:partners@ariwalabs.com"
            className="inline-flex items-center justify-center rounded-xl bg-white px-9 py-[18px] font-sora text-base font-semibold text-[#1B365D] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,255,255,0.22)]"
          >
            Solicitar propuesta técnica
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-sm font-medium text-white/85">
          {trustBadges.map((badge) => (
            <span key={badge}>✓ {badge}</span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
