import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";

const CTA_CLASSES: Record<"primary" | "secondary", string> = {
  primary:
    "btn group mb-4 w-full bg-linear-to-t from-rose-600 to-rose-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto",
  secondary:
    "btn relative w-full bg-linear-to-b from-[#1A2E42] to-[#0A1A2F] bg-[length:100%_100%] bg-[bottom] text-gray-100 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,rgba(50,74,95,.65),rgba(10,26,47,.85),rgba(50,74,95,.65))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto",
};

const CTA_BUTTONS: Array<{
  label: string;
  href: string;
  variant: "primary" | "secondary";
  showArrow?: boolean;
}> = [
  {
    label: "Conócenos",
    href: "#0",
    variant: "primary",
    showArrow: true,
  },
  {
    label: "Contáctanos",
    href: "#0",
    variant: "secondary",
  },
];

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0A1A2F,#324A5F_55%,#D72638)] text-gray-50">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        {/* Hero content */}
        <div className="py-16 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="pb-5 font-nacelle text-4xl font-semibold text-gray-50 text-balance md:text-5xl"
              data-aos="fade-up"
            >
              ARIWA LABS
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-xl text-gray-100 text-balance sm:text-2xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Somos una startup peruana que combina innovación tecnológica con identidad cultural para crear soluciones con impacto social real.
              </p>
              <div className="mx-auto flex max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
                {CTA_BUTTONS.map(({ label, href, variant, showArrow }, index) => (
                  <div
                    key={label}
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 200}
                  >
                    <a className={CTA_CLASSES[variant]} href={href}>
                      <span className="relative inline-flex items-center">
                        {label}
                        {showArrow && (
                          <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                            -&gt;
                          </span>
                        )}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
