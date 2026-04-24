import type { Metadata } from "next";

import LandingLayout from "@/layout/landing-layout";
import AboutSection from "@/sections/about-section";
import CallToActionSection from "@/sections/call-to-action-section";
import HeroSection from "@/sections/hero-section";
import IndustriesSection from "@/sections/industries-section";
import InsightsSection from "@/sections/insights-section";
import ProblemSection from "@/sections/problem-section";
import ProductsSection from "@/sections/products-section";
import SolutionsSection from "@/sections/solutions-section";
import TechnologyStackSection from "@/sections/technology-stack-section";
import UseCasesSection from "@/sections/use-cases-section";

export const metadata: Metadata = {
  title: "Ariwa Labs | Tecnología peruana con mentalidad startup",
  description:
    "Ariwa Labs crea productos tecnológicos, IA e ingeniería de software desde Perú con un equipo mayoritariamente femenino.",
};

export default function Home() {
  return (
    <LandingLayout>
      <HeroSection />
      <ProblemSection />
      <ProductsSection />
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
