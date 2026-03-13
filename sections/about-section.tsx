import AnimatedReveal from "@/components/animated-reveal";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

export default function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="Nosotros" title="Un socio tecnológico con ambición global" />

      <AnimatedReveal>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
          <p className="text-lg leading-relaxed text-[#F8FAFC]">
            Ariwa Labs es una startup tecnológica peruana enfocada en construir soluciones digitales de impacto mediante inteligencia artificial, ingeniería cloud y desarrollo moderno de software.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[#94A3B8]">
            Trabajamos como socio de ejecución para organizaciones públicas y privadas que necesitan modernizar operaciones, mejorar servicios y acelerar su transformación digital con confianza.
          </p>
        </div>
      </AnimatedReveal>
    </SectionShell>
  );
}
