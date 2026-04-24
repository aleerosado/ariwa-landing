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
    "border border-[#E8513F] bg-[#E8513F] text-white shadow-[0_16px_34px_-20px_rgba(232,81,63,.85)] hover:-translate-y-0.5 hover:bg-[#D94433]",
  secondary:
    "border border-[#1B365D]/20 bg-white text-[#1B365D] hover:-translate-y-0.5 hover:border-[#E8513F]/70 hover:bg-[#FFF2EF]",
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
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
