import type { ReactNode } from "react";

import PageIllustration from "@/components/page-illustration";

interface AuthPageShellProps {
  children: ReactNode;
}

export default function AuthPageShell({ children }: AuthPageShellProps) {
  return (
    <main className="relative flex min-h-screen flex-col">
      <PageIllustration multiple />
      {children}
    </main>
  );
}
