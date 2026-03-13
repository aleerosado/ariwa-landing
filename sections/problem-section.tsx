import { Bot, DatabaseZap, Gauge, Workflow } from "lucide-react";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const challenges = [
  {
    title: "Sistemas legados",
    description:
      "Procesos críticos aún dependen de plataformas desactualizadas que limitan la agilidad y aumentan el riesgo operativo.",
    icon: DatabaseZap,
  },
  {
    title: "Falta de automatización",
    description:
      "Los equipos invierten demasiado tiempo en tareas manuales, haciendo la ejecución más lenta y menos confiable.",
    icon: Workflow,
  },
  {
    title: "Subutilización de datos",
    description:
      "La información valiosa está fragmentada y no logra sostener decisiones estratégicas de forma consistente.",
    icon: Bot,
  },
  {
    title: "Transformación digital lenta",
    description:
      "Las iniciativas desconectadas retrasan el impacto, reducen la adopción y elevan los costos de transformación.",
    icon: Gauge,
  },
];

export default function ProblemSection() {
  return (
    <SectionShell>
      <SectionHeading
        title="Las organizaciones modernas enfrentan desafíos tecnológicos complejos"
        description="Ariwa Labs ayuda a cerrar brechas de ejecución y convertir la complejidad en resultados medibles."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {challenges.map((challenge, index) => {
          const Icon = challenge.icon;

          return (
            <HoverCard
              key={challenge.title}
              delay={0.08 * index}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <Icon className="h-6 w-6 text-[#22C55E]" />
              <h3 className="mt-4 text-lg font-semibold text-[#F8FAFC]">{challenge.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{challenge.description}</p>
            </HoverCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
