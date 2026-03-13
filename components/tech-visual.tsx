"use client";

import { BrainCircuit, CloudCog, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TechVisual() {
  const { scrollYProgress } = useScroll();
  const orbitUp = useTransform(scrollYProgress, [0, 1], [0, -85]);
  const orbitDown = useTransform(scrollYProgress, [0, 1], [0, 65]);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <motion.div
        style={{ y: orbitUp }}
        className="pointer-events-none absolute -left-10 top-12 h-24 w-24 rounded-full bg-[#22C55E]/15 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: orbitDown }}
        className="pointer-events-none absolute -right-10 bottom-2 h-28 w-28 rounded-full bg-[#2563EB]/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="landing-grid relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(160deg,rgba(14,20,34,.94),rgba(11,15,25,.85))] p-6 shadow-[0_40px_80px_-55px_rgba(37,99,235,.85)] sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.28),transparent_48%)]" aria-hidden="true" />
        <div className="relative grid gap-4 sm:grid-cols-2">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
          >
            <BrainCircuit className="mb-3 h-6 w-6 text-[#22C55E]" />
            <p className="text-sm font-medium text-[#F8FAFC]">Capa de inteligencia IA</p>
            <p className="mt-2 text-xs text-[#94A3B8]">Modelos, copilotos y automatización práctica para equipos empresariales.</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
          >
            <CloudCog className="mb-3 h-6 w-6 text-[#2563EB]" />
            <p className="text-sm font-medium text-[#F8FAFC]">Operaciones cloud</p>
            <p className="mt-2 text-xs text-[#94A3B8]">Arquitecturas resilientes, observabilidad y pipelines de entrega escalables.</p>
          </motion.div>
        </div>

        <div className="relative mt-4 rounded-2xl border border-[#2563EB]/35 bg-[#0B0F19]/70 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#F8FAFC]">Panel unificado de ingeniería</p>
            <Cpu className="h-5 w-5 text-[#22C55E]" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { label: "Automatización", value: "+68%" },
              { label: "Velocidad de entrega", value: "2.7x" },
              { label: "Precisión de datos", value: "99.9%" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                <p className="text-lg font-semibold text-[#F8FAFC]">{metric.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-[#94A3B8]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
