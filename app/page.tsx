import type { Metadata } from "next";

import LandingLayout from "@/layout/landing-layout";
import AboutSection from "@/sections/about-section";
import CallToActionSection from "@/sections/call-to-action-section";
import HeroSection from "@/sections/hero-section";
import IndustriesSection from "@/sections/industries-section";
import InsightsSection from "@/sections/insights-section";
import ProblemSection from "@/sections/problem-section";
import SolutionsSection from "@/sections/solutions-section";
import TechnologyStackSection from "@/sections/technology-stack-section";
import UseCasesSection from "@/sections/use-cases-section";

export const metadata: Metadata = {
  title: "Ariwa Labs | Ingeniería de IA y Consultoría Tecnológica",
  description:
    "Ariwa Labs es una startup de consultoría tecnológica enfocada en inteligencia artificial, arquitectura cloud e ingeniería de software.",
};

export default function Home() {
  return (
    <LandingLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionsSection />
      <IndustriesSection />
      <TechnologyStackSection />
      <UseCasesSection />
      <AboutSection />
      <InsightsSection />
      <CallToActionSection />
    </LandingLayout>
  );
}
