import Image, { StaticImageData } from "next/image";

import Spotlight from "@/components/spotlight";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";

type WorkflowItem = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const WORKFLOW_ITEMS: WorkflowItem[] = [
  {
    title: "Agentes de Inteligencia Artificial",
    description:
      "Diseñamos y entrenamos agentes conversacionales inteligentes que mejoran la productividad y experiencia del usuario en sectores como ventas, salud, educación y más.",
    image: WorflowImg01,
    alt: "Ilustración de agentes de inteligencia artificial",
  },
  {
    title: "Consultoría, Desarrollo y Soporte",
    description:
      "Acompañamos a startups y empresas en la implementación de tecnología eficiente: arquitectura cloud, desarrollo de software, soporte y soluciones a medida.",
    image: WorflowImg02,
    alt: "Ilustración de consultoría tecnológica",
  },
  {
    title: "Formación & Academia Ariwa",
    description:
      "Enseñamos lo que hacemos: cursos, talleres y mentorías para equipos que buscan dominar tecnologías emergentes con un enfoque aplicado y humano.",
    image: WorflowImg03,
    alt: "Ilustración de programa de formación",
  },
];

export default function Workflows() {
  return (
    <section className="bg-surface-alt">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-rose-500/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-rose-500/50">
              <span className="inline-flex bg-linear-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                Tecnología con propósito, creada en Perú para transformar al mundo
              </span>
            </div>
            <h2 className="pb-4 font-nacelle text-3xl font-semibold text-brand-primary md:text-4xl">
              Nuestros Productos
            </h2>
            <p className="text-lg text-gray-600">
              En Ariwa Labs desarrollamos tecnología que potencia ideas, transforma industrias y crea impacto real. Desde agentes inteligentes hasta soluciones personalizadas en software, consultoría, soporte y formación, somos tu aliado tecnológico para el presente y el futuro.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group grid w-full items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WORKFLOW_ITEMS.map(({ title, description, image, alt }, index) => (
              <a
                key={title}
                className="group/card relative h-full w-full overflow-hidden rounded-2xl bg-[rgba(10,26,47,.08)] p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-rose-500/60 before:opacity-0 before:blur-3xl before:transition-all before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[rgba(10,26,47,.6)] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:-translate-y-1 hover:after:opacity-20 group-hover:before:opacity-100"
                href="#0"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-50 after:absolute after:inset-0 after:bg-[linear-gradient(145deg,rgba(10,26,47,.08),rgba(215,38,56,.08))]">
                  {/* Arrow */}
                  <div
                    className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(215,38,56,.3)] bg-[rgba(10,26,47,.05)] text-brand-accent opacity-0 transition-all group-hover/card:opacity-100"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={9}
                      height={8}
                      fill="none"
                    >
                      <path
                        fill="#F4F4F5"
                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                      />
                    </svg>
                  </div>
                  {/* Image */}
                  <Image
                    className="inline-flex"
                    src={image}
                    width={350}
                    height={288}
                    alt={alt}
                  />
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-[rgba(10,26,47,.05)] px-2.5 py-0.5 text-xs font-medium text-brand-primary before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,rgba(10,26,47,.08),rgba(10,26,47,.2))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                        <span>{title}</span>
                      </span>
                    </div>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              </a>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
