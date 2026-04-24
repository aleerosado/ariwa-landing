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
        title="Sectores donde la tecnología cambia vidas"
        description="Trabajamos con organizaciones donde modernizar procesos mejora servicios, acceso, productividad y crecimiento regional."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <HoverCard
              key={industry.name}
              delay={0.06 * index}
              className="flex min-h-36 flex-col items-start justify-between rounded-2xl border border-[#1B365D]/10 bg-white p-5"
            >
              <Icon className="h-6 w-6 text-[#E8513F]" />
              <p className="font-sora text-base font-semibold text-[#1B365D]">{industry.name}</p>
            </HoverCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
