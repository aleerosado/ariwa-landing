import AnimatedReveal from "@/components/animated-reveal";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";
import Image from "next/image";

import workflowOne from "@/public/images/workflow-01.png";
import workflowTwo from "@/public/images/workflow-02.png";

export default function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="Nosotros" title="Un socio tecnológico con ambición global" />

      <AnimatedReveal>
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-2 lg:p-10">
          <div>
            <p className="text-lg leading-relaxed text-[#F8FAFC]">
              Ariwa Labs es una startup tecnológica peruana enfocada en construir soluciones digitales de impacto mediante inteligencia artificial, ingeniería cloud y desarrollo moderno de software.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#94A3B8]">
              Trabajamos como socio de ejecución para organizaciones públicas y privadas que necesitan modernizar operaciones, mejorar servicios y acelerar su transformación digital con confianza.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19]/60">
              <Image
                src={workflowOne}
                alt="Arquitectura de datos y automatización en Ariwa Labs"
                className="h-44 w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19]/60">
              <Image
                src={workflowTwo}
                alt="Panel de monitoreo y métricas de soluciones digitales"
                className="h-44 w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </AnimatedReveal>
    </SectionShell>
  );
}
