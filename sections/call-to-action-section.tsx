import AnimatedReveal from "@/components/animated-reveal";
import CtaButton from "@/components/cta-button";
import SectionShell from "@/components/section-shell";

export default function CallToActionSection() {
  return (
    <SectionShell className="pb-20">
      <AnimatedReveal>
        <div className="relative overflow-hidden rounded-2xl bg-[#1B365D] p-7 sm:p-10">
          <div className="peru-ribbon absolute inset-x-0 top-0 h-2" aria-hidden="true" />

          <h2 className="relative font-sora text-3xl font-bold text-white sm:text-4xl">
            Construyamos tecnología legendaria desde Perú
          </h2>
          <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-white/78">
            Inicia una conversación estratégica con Ariwa Labs y descubre cómo nuestros productos, IA e ingeniería pueden generar impacto medible en tu organización.
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
