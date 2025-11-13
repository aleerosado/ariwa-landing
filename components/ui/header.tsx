"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 w-full bg-[rgba(10,26,47,.98)] shadow-[0_18px_45px_-25px_rgba(5,14,26,.6)]">
      <div className="flex h-16 w-full items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <div className="relative flex h-12 w-full items-center justify-between gap-3 rounded-2xl border border-[#324A5F]/60 bg-[rgba(10,26,47,.92)] px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(135deg,rgba(50,74,95,.65),rgba(215,38,56,.25))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-linear-to-b from-[#1A2E42] to-[#0A1A2F] bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-100 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,rgba(50,74,95,.65),rgba(10,26,47,.85),rgba(50,74,95,.65))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Iniciar Sesion
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-linear-to-t from-rose-600 to-rose-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                AI Bot
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
