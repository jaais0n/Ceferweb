"use client";
import * as React from "react";
import { Header } from "@/components/cefer/Header";
import { HeroSection } from "@/components/cefer/HeroSection";
import { DashboardSection } from "@/components/cefer/DashboardSection";
import { WhyCeferSection } from "@/components/cefer/WhyCeferSection";
import { PoweringGrowthSection } from "@/components/cefer/PoweringGrowthSection";
import { TrustedBySection } from "@/components/cefer/TrustedBySection";
import { StatsSection } from "@/components/cefer/StatsSection";
import { FeaturesSection } from "@/components/cefer/FeaturesSection";
import { HowItWorksSection } from "@/components/cefer/HowItWorksSection";
import { TestimonialsSection } from "@/components/cefer/TestimonialsSection";
import { FaqSection } from "@/components/cefer/FaqSection";
import { CtaSection } from "@/components/cefer/CtaSection";
import { Footer } from "@/components/cefer/Footer";

function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="flex flex-col self-stretch pt-4 pb-36 w-full bg-neutral-100 max-md:pb-24 max-md:max-w-full">
          <Header />
          <HeroSection />
        </div>

        <DashboardSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyCeferSection />
        <PoweringGrowthSection />
        <TrustedBySection />
        <TestimonialsSection />
        <CtaSection />
        <FaqSection />
      </div>
    </div>
  );
}

export default Home;
