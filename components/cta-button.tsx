import Link from "next/link";
import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

function mergeClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const variants = {
  primary:
    "border border-[#2563EB] bg-[#2563EB] text-white shadow-[0_12px_32px_-18px_rgba(37,99,235,.95)] hover:-translate-y-0.5 hover:bg-blue-500",
  secondary:
    "border border-white/25 bg-white/5 text-[#F8FAFC] hover:-translate-y-0.5 hover:border-[#22C55E]/70 hover:bg-[#22C55E]/10",
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={mergeClasses(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
