import { ArrowUpRight, Bot, ChartLine, CloudUpload, Sparkles, Workflow } from "lucide-react";

import AnimatedReveal from "@/components/animated-reveal";
import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

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
        title="De la idea a operación con impacto medible"
        description="Convertimos prioridades estratégicas en flujos, interfaces y plataformas que los equipos pueden usar todos los días."
      />

      <AnimatedReveal className="mb-6">
        <div className="overflow-hidden rounded-2xl border border-[#1B365D]/10 bg-white">
          <img
            src="/images/use-cases-immersive-ai.png"
            alt="Personas interactuando con interfaces digitales inmersivas para casos de uso de IA, cloud y analítica en Ariwa Labs"
            className="h-52 w-full object-cover object-center"
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
              className="group rounded-2xl border border-[#1B365D]/10 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-[#E8513F]" />
                <ArrowUpRight className="h-4 w-4 text-[#6B7C95] transition-colors group-hover:text-[#E8513F]" />
              </div>
              <h3 className="mt-4 font-sora text-lg font-semibold text-[#1B365D]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A6C84]">{item.description}</p>
            </HoverCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
