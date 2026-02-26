"use client";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/cefer/HeroSection";

const Skeleton = ({ h }: { h: string }) => <div style={{ minHeight: h }} aria-hidden="true" />;

// Below-the-fold sections — lazily loaded after above-fold content renders
const DashboardSection = dynamic(() => import("@/components/cefer/DashboardSection").then(m => ({ default: m.DashboardSection })), { loading: () => <Skeleton h="600px" /> });
const StatsSection = dynamic(() => import("@/components/cefer/StatsSection").then(m => ({ default: m.StatsSection })), { loading: () => <Skeleton h="200px" /> });
const FeaturesSection = dynamic(() => import("@/components/cefer/FeaturesSection").then(m => ({ default: m.FeaturesSection })), { loading: () => <Skeleton h="500px" /> });
const HowItWorksSection = dynamic(() => import("@/components/cefer/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })), { loading: () => <Skeleton h="500px" /> });
const WhyCeferSection = dynamic(() => import("@/components/cefer/WhyCeferSection").then(m => ({ default: m.WhyCeferSection })), { loading: () => <Skeleton h="500px" /> });
const PoweringGrowthSection = dynamic(() => import("@/components/cefer/PoweringGrowthSection").then(m => ({ default: m.PoweringGrowthSection })), { loading: () => <Skeleton h="400px" /> });
const TrustedBySection = dynamic(() => import("@/components/cefer/TrustedBySection").then(m => ({ default: m.TrustedBySection })), { loading: () => <Skeleton h="200px" /> });
const CtaSection = dynamic(() => import("@/components/cefer/CtaSection").then(m => ({ default: m.CtaSection })), { loading: () => <Skeleton h="300px" /> });
const FaqSection = dynamic(() => import("@/components/cefer/FaqSection").then(m => ({ default: m.FaqSection })), { ssr: false, loading: () => <Skeleton h="400px" /> });

function Home() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="flex flex-col self-stretch pt-4 pb-36 w-full bg-neutral-100 max-md:pb-10 max-md:max-w-full">
          <HeroSection />
        </div>

        <DashboardSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyCeferSection />
        <PoweringGrowthSection />
        <TrustedBySection />
        <CtaSection />
        <FaqSection />
      </div>
    </div>
  );
}

export default Home;
