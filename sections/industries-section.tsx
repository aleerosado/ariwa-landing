import { Building2, GraduationCap, HandCoins, HeartPulse, Wheat } from "lucide-react";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const industries = [
  { name: "Government", icon: Building2 },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Agriculture", icon: Wheat },
  { name: "Finance", icon: HandCoins },
  { name: "Education", icon: GraduationCap },
];

export default function IndustriesSection() {
  return (
    <SectionShell id="industries">
      <SectionHeading
        eyebrow="Industries"
        title="Industries we transform"
        description="We partner with complex organizations where technology modernization has direct impact on people, services and growth."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <HoverCard
              key={industry.name}
              delay={0.06 * index}
              className="flex min-h-36 flex-col items-start justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <Icon className="h-6 w-6 text-[#22C55E]" />
              <p className="text-base font-semibold text-[#F8FAFC]">{industry.name}</p>
            </HoverCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
