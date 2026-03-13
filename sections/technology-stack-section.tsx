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
        title="Plataformas modernas con las que construimos"
        description="Ariwa Labs utiliza tecnologías de grado productivo para entregar sistemas seguros, resilientes y escalables."
      />

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {stack.map((item, index) => (
            <AnimatedReveal key={item} delay={0.05 * index}>
              <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(11,15,25,.94),rgba(37,99,235,.16))] px-4 py-5 text-sm font-semibold uppercase tracking-wider text-[#F8FAFC]">
                {item}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
