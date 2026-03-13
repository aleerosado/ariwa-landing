import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Lightbulb,
} from "lucide-react";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const solutions = [
  {
    title: "Soluciones de IA",
    description: "Copilotos personalizados, asistentes inteligentes y flujos de IA diseñados para operaciones reales.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud y DevOps",
    description: "Arquitecturas cloud confiables y pipelines de entrega que aceleran productos y plataformas.",
    icon: CloudCog,
  },
  {
    title: "Ingeniería de software",
    description: "Productos digitales escalables, APIs y aplicaciones empresariales con estándares modernos.",
    icon: Code2,
  },
  {
    title: "Datos y analítica",
    description: "Pipelines de datos, gobierno y ecosistemas analíticos que convierten información en decisiones.",
    icon: Database,
  },
  {
    title: "Consultoría tecnológica",
    description: "Hojas de ruta tecnológicas alineadas con prioridades de negocio, resultados y realidad operativa.",
    icon: Lightbulb,
  },
];

export default function SolutionsSection() {
  return (
    <SectionShell id="solutions">
      <SectionHeading
        eyebrow="Soluciones"
        title="Capacidades tecnológicas para ejecutar con alto impacto"
        description="Desde adopción de IA hasta modernización cloud, diseñamos y entregamos soluciones que escalan con tu organización."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <HoverCard
              key={solution.title}
              delay={0.08 * index}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(37,99,235,.12),rgba(15,23,42,.35))] p-5"
            >
              <div className="inline-flex rounded-xl border border-[#2563EB]/40 bg-[#2563EB]/15 p-2">
                <Icon className="h-5 w-5 text-[#60A5FA]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#F8FAFC]">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{solution.description}</p>
            </HoverCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
