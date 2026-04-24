"use client";

import { BrainCircuit, Cpu, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TechVisual() {
  const { scrollYProgress } = useScroll();
  const orbitUp = useTransform(scrollYProgress, [0, 1], [0, -85]);
  const orbitDown = useTransform(scrollYProgress, [0, 1], [0, 65]);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <motion.div
        style={{ y: orbitUp }}
        className="pointer-events-none absolute -left-4 top-10 h-20 w-1 bg-[#E8513F]/35"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orbitDown }}
        className="pointer-events-none absolute -right-4 bottom-8 h-20 w-1 bg-[#1B365D]/20"
        aria-hidden="true"
      />

      <div className="landing-grid relative overflow-hidden rounded-2xl border border-[#1B365D]/10 bg-white p-6 shadow-[0_30px_80px_-55px_rgba(27,54,93,.95)] sm:p-8">
        <div className="absolute inset-x-0 top-0 h-2 bg-[#E8513F]" aria-hidden="true" />
        <div className="relative grid gap-4 sm:grid-cols-2">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl border border-[#1B365D]/10 bg-[#F8F9FB] p-4"
          >
            <BrainCircuit className="mb-3 h-6 w-6 text-[#E8513F]" />
            <p className="font-sora text-sm font-semibold text-[#1B365D]">IA aplicada</p>
            <p className="mt-2 text-xs text-[#5A6C84]">Copilotos, agentes y automatización práctica para operaciones reales.</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl border border-[#1B365D]/10 bg-[#F8F9FB] p-4"
          >
            <Rocket className="mb-3 h-6 w-6 text-[#E8513F]" />
            <p className="font-sora text-sm font-semibold text-[#1B365D]">Productos propios</p>
            <p className="mt-2 text-xs text-[#5A6C84]">Software diseñado para escalar desde prototipo hasta plataforma.</p>
          </motion.div>
        </div>

        <div className="relative mt-4 rounded-xl border border-[#1B365D]/10 bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="font-sora text-sm font-semibold text-[#1B365D]">Panel Ariwa de ejecución</p>
            <Cpu className="h-5 w-5 text-[#E8513F]" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { label: "Equipo femenino", value: "85%" },
              { label: "Origen", value: "PE" },
              { label: "Modo", value: "Producto" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl border border-[#1B365D]/10 bg-[#F8F9FB] p-3 text-center">
                <p className="font-sora text-lg font-bold text-[#1B365D]">{metric.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-[#6B7C95]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
