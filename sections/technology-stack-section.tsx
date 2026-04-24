import AnimatedReveal from "@/components/animated-reveal";
import SectionHeading from "@/components/section-heading";
import SectionShell from "@/components/section-shell";

const stack = [
  "AWS",
  "Azure",
  "Python",
  "Kubernetes",
  "TensorFlow",
  "Terraform",
  "Flutter",
];

export default function TechnologyStackSection() {
  return (
    <SectionShell id="technology">
      <SectionHeading
        eyebrow="Stack tecnológico"
        title="Base técnica para productos serios"
        description="Elegimos tecnologías probadas para entregar sistemas seguros, mantenibles y listos para crecer."
      />

      <div className="rounded-2xl border border-[#1B365D]/10 bg-[#F8F9FB] p-5 sm:p-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {stack.map((item, index) => (
            <AnimatedReveal key={item} delay={0.05 * index}>
              <div className="flex h-full items-center justify-center rounded-xl border border-[#1B365D]/10 bg-white px-4 py-5 text-sm font-semibold uppercase tracking-wide text-[#1B365D]">
                {item}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
