"use client";
import * as React from "react";
import { Header } from "@/components/cefer/Header";
import { HeroSection } from "@/components/cefer/HeroSection";
import { DashboardSection } from "@/components/cefer/DashboardSection";
import { StatsSection } from "@/components/cefer/StatsSection";
import { FeaturesSection } from "@/components/cefer/FeaturesSection";
import { PlatformSection } from "@/components/cefer/PlatformSection";
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
        <PlatformSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
