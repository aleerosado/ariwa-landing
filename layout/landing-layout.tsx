import type { ReactNode } from "react";

import SiteFooter from "@/layout/site-footer";
import StickyNavbar from "@/layout/sticky-navbar";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <StickyNavbar />
      <main className="relative flex grow flex-col">{children}</main>
      <SiteFooter />
    </>
  );
}
