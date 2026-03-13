"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Soluciones", href: "#solutions" },
  { label: "Industrias", href: "#industries" },
  { label: "Tecnología", href: "#technology" },
  { label: "Casos de uso", href: "#use-cases" },
  { label: "Perspectivas", href: "#insights" },
  { label: "Contacto", href: "#contact" },
];

export default function StickyNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F19]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="inline-flex items-center gap-2" aria-label="Inicio de Ariwa Labs">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#2563EB]/60 bg-[#2563EB]/20 text-sm font-semibold text-[#F8FAFC]">
            AL
          </span>
          <span className="text-sm font-semibold tracking-wide text-[#F8FAFC] sm:text-base">Ariwa Labs</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-[#2563EB] bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Agendar una llamada
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-[#F8FAFC] md:hidden"
          aria-label="Abrir menú móvil"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/10 bg-[#0B0F19]/95 px-4 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-[#94A3B8] transition-colors hover:bg-white/5 hover:text-[#F8FAFC]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-1 inline-flex w-full items-center justify-center rounded-lg border border-[#2563EB] bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500"
                >
                  Agendar una llamada
                </Link>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
