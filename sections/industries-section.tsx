import { Building2, GraduationCap, HandCoins, HeartPulse, Wheat } from "lucide-react";

import HoverCard from "@/components/hover-card";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const industries = [
  { name: "Gobierno", icon: Building2 },
  { name: "Salud", icon: HeartPulse },
  { name: "Agroindustria", icon: Wheat },
  { name: "Finanzas", icon: HandCoins },
  { name: "Educación", icon: GraduationCap },
];

export default function IndustriesSection() {
  return (
    <SectionShell id="industries">
      <SectionHeading
        eyebrow="Industrias"
        title="Industrias que transformamos"
        description="Trabajamos con organizaciones complejas donde la modernización tecnológica impacta directamente en personas, servicios y crecimiento."
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
