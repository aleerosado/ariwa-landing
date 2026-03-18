import { ArrowUpRight, Bot, ChartLine, CloudUpload, Sparkles, Workflow } from "lucide-react";
import Image from "next/image";

import AnimatedReveal from "@/components/animated-reveal";
import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";
import featuresImage from "@/public/images/features.png";

const useCases = [
  {
    title: "Asistentes de IA",
    description: "Copilotos empresariales para equipos internos y servicios orientados al ciudadano.",
    icon: Bot,
  },
  {
    title: "Automatización de procesos",
    description: "Orquestación de flujos que elimina cuellos de botella y reduce trabajo manual.",
    icon: Workflow,
  },
  {
    title: "Plataformas de datos",
    description: "Bases de datos escalables que centralizan, gobiernan y activan activos de información.",
    icon: CloudUpload,
  },
  {
    title: "Analítica inteligente",
    description: "Analítica predictiva y descriptiva para decisiones más rápidas y mejor informadas.",
    icon: ChartLine,
  },
  {
    title: "Modernización cloud",
    description: "Iniciativas de migración e ingeniería de plataforma con resultados medibles de negocio.",
    icon: Sparkles,
  },
];

export default function UseCasesSection() {
  return (
    <SectionShell id="use-cases">
      <SectionHeading
        eyebrow="Casos de uso"
        title="Innovación aplicada a desafíos operativos reales"
        description="Estos son ejemplos de cómo convertimos prioridades estratégicas en ejecución tecnológica escalable."
      />

      <AnimatedReveal className="mb-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <Image
            src={featuresImage}
            alt="Visualización de casos de uso de IA, cloud y analítica en Ariwa Labs"
            className="h-52 w-full object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
      </AnimatedReveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, index) => {
          const Icon = item.icon;

          return (
            <HoverCard
              key={item.title}
              delay={0.08 * index}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-[#22C55E]" />
                <ArrowUpRight className="h-4 w-4 text-[#94A3B8] transition-colors group-hover:text-[#F8FAFC]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#F8FAFC]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{item.description}</p>
            </HoverCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
