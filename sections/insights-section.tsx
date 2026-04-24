import { ArrowRight } from "lucide-react";
import Image from "next/image";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";
import insightImageOne from "@/public/images/testimonial-01.jpg";
import insightImageTwo from "@/public/images/testimonial-02.jpg";
import insightImageThree from "@/public/images/testimonial-03.jpg";
import insightImageFour from "@/public/images/testimonial-04.jpg";

const insights = [
  {
    title: "IA en gobierno",
    category: "Innovación pública",
    summary: "Cómo las entidades pueden usar IA confiable para mejorar servicios al ciudadano y tiempos de respuesta.",
    image: insightImageOne,
  },
  {
    title: "Transformación digital",
    category: "Estrategia",
    summary: "Un modelo operativo práctico para alinear programas tecnológicos con resultados de negocio medibles.",
    image: insightImageTwo,
  },
  {
    title: "Modernización cloud",
    category: "Ingeniería cloud",
    summary: "Patrones para migrar de infraestructura legada a plataformas cloud-native resilientes sin interrupciones.",
    image: insightImageThree,
  },
  {
    title: "Inteligencia artificial aplicada",
    category: "Ejecución de IA",
    summary: "De la prueba de concepto a producción: un marco para desplegar IA responsablemente a escala.",
    image: insightImageFour,
  },
];

export default function InsightsSection() {
  return (
    <SectionShell id="insights">
      <SectionHeading
        eyebrow="Perspectivas"
        title="Ideas desde la práctica"
        description="Aprendizajes sobre IA, producto, cloud y modernización digital para líderes que necesitan ejecutar mejor."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {insights.map((insight, index) => (
          <HoverCard
            key={insight.title}
            delay={0.08 * index}
            className="group rounded-2xl border border-[#1B365D]/10 bg-white p-6"
          >
            <div className="mb-5 overflow-hidden rounded-xl border border-[#1B365D]/10">
              <Image
                src={insight.image}
                alt={insight.title}
                className="media-pan h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E8513F]">{insight.category}</p>
            <h3 className="mt-3 font-sora text-xl font-semibold text-[#1B365D]">{insight.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5A6C84]">{insight.summary}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E8513F]">
              Leer artículo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </p>
          </HoverCard>
        ))}
      </div>
    </SectionShell>
  );
}
