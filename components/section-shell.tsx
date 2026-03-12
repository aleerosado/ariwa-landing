import type { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

function mergeClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={mergeClasses("relative scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
