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
            Let&apos;s build the future together
          </h2>
          <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-[#BFDBFE]">
            Start a strategic conversation with Ariwa Labs and discover how AI, cloud and software engineering can create measurable impact for your organization.
          </p>

          <div className="relative mt-7 flex flex-wrap gap-3">
            <CtaButton href="mailto:contact@ariwalabs.com">Start a project</CtaButton>
            <CtaButton href="mailto:partners@ariwalabs.com" variant="secondary">
              Schedule a consultation
            </CtaButton>
          </div>
        </div>
      </AnimatedReveal>
    </SectionShell>
  );
}
