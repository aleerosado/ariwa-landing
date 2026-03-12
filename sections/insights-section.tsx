import { ArrowRight } from "lucide-react";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const insights = [
  {
    title: "AI in government",
    category: "Public innovation",
    summary: "How agencies can use trustworthy AI to improve citizen services and operational response times.",
  },
  {
    title: "Digital transformation",
    category: "Strategy",
    summary: "A practical operating model for aligning technology programs with measurable business results.",
  },
  {
    title: "Cloud modernization",
    category: "Cloud engineering",
    summary: "Patterns to move from legacy infrastructure to resilient cloud-native platforms without disruption.",
  },
  {
    title: "Applied artificial intelligence",
    category: "AI execution",
    summary: "From proof of concept to production systems: a framework for deploying AI responsibly at scale.",
  },
];

export default function InsightsSection() {
  return (
    <SectionShell id="insights">
      <SectionHeading
        eyebrow="Insights"
        title="Perspectives from the field"
        description="A preview of strategic articles and implementation lessons from Ariwa Labs teams."
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
              Read insight
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </p>
          </HoverCard>
        ))}
      </div>
    </SectionShell>
  );
}
