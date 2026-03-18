import AnimatedReveal from "@/components/animated-reveal";
import CtaButton from "@/components/cta-button";
import SectionShell from "@/components/section-shell";
import TechVisual from "@/components/tech-visual";
import Image from "next/image";

import heroImage from "@/public/images/hero-image-01.jpg";

export default function HeroSection() {
  return (
    <SectionShell
      id="top"
      className="overflow-hidden pb-20 pt-14 sm:pt-16 lg:pb-24"
    >
      <div className="landing-hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]" aria-hidden="true" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_.94fr]">
        <AnimatedReveal>
          <p className="mb-5 inline-flex rounded-full border border-[#22C55E]/35 bg-[#22C55E]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#22C55E]">
            consultoría tecnológica centrada en ia
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
            Ingeniería del futuro con inteligencia artificial
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Consultoría tecnológica, desarrollo de software e inteligencia artificial para organizaciones que buscan innovar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="#solutions">Explorar soluciones</CtaButton>
            <CtaButton href="#contact" variant="secondary">
              Contáctanos
            </CtaButton>
          </div>
        </AnimatedReveal>

        <div className="space-y-4">
          <AnimatedReveal delay={0.15}>
            <TechVisual />
          </AnimatedReveal>
          <AnimatedReveal delay={0.24}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <Image
                src={heroImage}
                alt="Equipo de Ariwa Labs en sesión estratégica de tecnología"
                className="h-52 w-full object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </SectionShell>
  );
}
