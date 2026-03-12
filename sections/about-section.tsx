import AnimatedReveal from "@/components/animated-reveal";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

export default function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="About" title="A technology partner with global ambition" />

      <AnimatedReveal>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
          <p className="text-lg leading-relaxed text-[#F8FAFC]">
            Ariwa Labs is a Peruvian technology startup focused on building impactful digital solutions through artificial intelligence, cloud engineering and modern software development.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[#94A3B8]">
            We work as an execution partner for public and private organizations that need to modernize operations, deliver better services and accelerate digital transformation with confidence.
          </p>
        </div>
      </AnimatedReveal>
    </SectionShell>
  );
}
