import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="w-full rounded-3xl bg-[linear-gradient(135deg,#0A1A2F,#324A5F_60%,#D72638)] px-6 py-12 text-gray-50 shadow-[0_24px_60px_-25px_rgba(10,26,47,.65)] md:px-10 md:py-20">
          <div className="w- full mx-auto max-w-3xl text-center">
            <h2
              className="pb-8 font-nacelle text-3xl font-semibold text-gray-50 md:text-4xl"
              data-aos="fade-up"
            >
              Join the content-first platform
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-rose-600 to-rose-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Start Building
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-linear-to-b from-[#1A2E42] to-[#0A1A2F] bg-[length:100%_100%] bg-[bottom] text-gray-100 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,rgba(50,74,95,.65),rgba(10,26,47,.85),rgba(50,74,95,.65))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="#0"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
