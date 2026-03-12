import { ArrowUpRight, Bot, ChartLine, CloudUpload, Sparkles, Workflow } from "lucide-react";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const useCases = [
  {
    title: "AI assistants",
    description: "Enterprise copilots for internal teams and citizen-facing services.",
    icon: Bot,
  },
  {
    title: "Process automation",
    description: "Workflow orchestration that removes bottlenecks and reduces manual effort.",
    icon: Workflow,
  },
  {
    title: "Data platforms",
    description: "Scalable data foundations that centralize, govern and activate data assets.",
    icon: CloudUpload,
  },
  {
    title: "Intelligent analytics",
    description: "Predictive and descriptive analytics for faster, better-informed decisions.",
    icon: ChartLine,
  },
  {
    title: "Cloud modernization",
    description: "Migration and platform engineering initiatives with measurable business outcomes.",
    icon: Sparkles,
  },
];

export default function UseCasesSection() {
  return (
    <SectionShell id="use-cases">
      <SectionHeading
        eyebrow="Use cases"
        title="Applied innovation for real operational challenges"
        description="These are examples of how we convert strategic priorities into scalable technology execution."
      />

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
