import { Bot, DatabaseZap, Gauge, Workflow } from "lucide-react";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const challenges = [
  {
    title: "Legacy systems",
    description:
      "Critical processes still depend on outdated platforms that limit agility and increase operational risk.",
    icon: DatabaseZap,
  },
  {
    title: "Lack of automation",
    description:
      "Teams spend too much time on manual tasks, making execution slower and less reliable.",
    icon: Workflow,
  },
  {
    title: "Data underutilization",
    description:
      "Valuable data is fragmented and cannot consistently support strategic decisions.",
    icon: Bot,
  },
  {
    title: "Slow digital transformation",
    description:
      "Disconnected initiatives delay impact, reduce adoption and increase transformation costs.",
    icon: Gauge,
  },
];

export default function ProblemSection() {
  return (
    <SectionShell>
      <SectionHeading
        title="Modern organizations face complex technological challenges"
        description="Ariwa Labs helps organizations close execution gaps and transform complexity into measurable results."
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
