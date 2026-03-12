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
    title: "AI Solutions",
    description: "Custom copilots, intelligent assistants and AI workflows designed for real business operations.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & DevOps",
    description: "Reliable cloud architectures and delivery pipelines that accelerate product and platform velocity.",
    icon: CloudCog,
  },
  {
    title: "Software Engineering",
    description: "Scalable digital products, APIs and enterprise applications built with modern engineering standards.",
    icon: Code2,
  },
  {
    title: "Data & Analytics",
    description: "Data pipelines, governance and analytics ecosystems that convert information into decisions.",
    icon: Database,
  },
  {
    title: "Technology Consulting",
    description: "Strategic technology roadmaps aligned with business priorities, outcomes and operational reality.",
    icon: Lightbulb,
  },
];

export default function SolutionsSection() {
  return (
    <SectionShell id="solutions">
      <SectionHeading
        eyebrow="Solutions"
        title="Technology capabilities built for high-impact execution"
        description="From AI adoption to cloud modernization, our teams design and deliver solutions that scale with your organization."
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
