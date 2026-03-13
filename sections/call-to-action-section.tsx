import AnimatedReveal from "@/components/animated-reveal";
import CtaButton from "@/components/cta-button";
import SectionShell from "@/components/section-shell";

export default function CallToActionSection() {
  return (
    <SectionShell className="pb-20">
      <AnimatedReveal>
        <div className="relative overflow-hidden rounded-3xl border border-[#2563EB]/35 bg-[linear-gradient(135deg,rgba(37,99,235,.2),rgba(11,15,25,.9)_45%,rgba(34,197,94,.15))] p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#2563EB]/30 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#22C55E]/20 blur-3xl" aria-hidden="true" />

          <h2 className="relative text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Construyamos el futuro juntos
          </h2>
          <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-[#BFDBFE]">
            Inicia una conversación estratégica con Ariwa Labs y descubre cómo la IA, el cloud y la ingeniería de software pueden generar impacto medible en tu organización.
          </p>

          <div className="relative mt-7 flex flex-wrap gap-3">
            <CtaButton href="mailto:contact@ariwalabs.com">Iniciar un proyecto</CtaButton>
            <CtaButton href="mailto:partners@ariwalabs.com" variant="secondary">
              Agendar una consultoría
            </CtaButton>
          </div>
        </div>
      </AnimatedReveal>
    </SectionShell>
  );
}
