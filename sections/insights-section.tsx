import { ArrowRight } from "lucide-react";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const insights = [
  {
    title: "IA en gobierno",
    category: "Innovación pública",
    summary: "Cómo las entidades pueden usar IA confiable para mejorar servicios al ciudadano y tiempos de respuesta.",
  },
  {
    title: "Transformación digital",
    category: "Estrategia",
    summary: "Un modelo operativo práctico para alinear programas tecnológicos con resultados de negocio medibles.",
  },
  {
    title: "Modernización cloud",
    category: "Ingeniería cloud",
    summary: "Patrones para migrar de infraestructura legada a plataformas cloud-native resilientes sin interrupciones.",
  },
  {
    title: "Inteligencia artificial aplicada",
    category: "Ejecución de IA",
    summary: "De la prueba de concepto a producción: un marco para desplegar IA responsablemente a escala.",
  },
];

export default function InsightsSection() {
  return (
    <SectionShell id="insights">
      <SectionHeading
        eyebrow="Perspectivas"
        title="Lecciones desde el terreno"
        description="Una vista previa de artículos estratégicos y aprendizajes de implementación del equipo de Ariwa Labs."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {insights.map((insight, index) => (
          <HoverCard
            key={insight.title}
            delay={0.08 * index}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#22C55E]">{insight.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-[#F8FAFC]">{insight.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{insight.summary}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F8FAFC]">
              Leer artículo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </p>
          </HoverCard>
        ))}
      </div>
    </SectionShell>
  );
}
