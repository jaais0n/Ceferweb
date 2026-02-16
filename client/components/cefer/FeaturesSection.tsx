import * as React from "react";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section className="flex flex-col items-center w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-2 mt-40 max-w-full text-4xl font-bold tracking-tighter text-center w-[611px] max-md:mt-10">
        <h2 className="flex-auto text-zinc-900">Everything You Need to</h2>
        <h2 className="grow shrink w-[194px]">Win More Deals</h2>
      </div>

      <div className="flex flex-col px-16 py-px mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <FeatureCard
          icon="https://api.builder.io/api/v1/image/assets/TEMP/d2b2cd42-dd96-44e1-b679-8c407b5da771?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          title="Prospector"
          description="Find decision-makers by industry, role, company size, and location."
          className="z-10 max-w-full w-[242px]"
        />

        <FeatureCard
          icon="https://api.builder.io/api/v1/image/assets/TEMP/82eab0db-8798-48a3-a541-1b7b27435bd0?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          title="Data Enrichment"
          description="Fill in missing details and enhance existing contacts."
          className="self-center mt-0 max-w-full w-[214px]"
        />

        <div className="z-10 self-end mt-0 max-w-full w-[534px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-semibold tracking-tighter text-center text-zinc-900 max-md:mt-10">
                <FeatureCard
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/03840d51-2aad-4c17-b01b-1ea2e028ed08?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                  title="Chrome Extension"
                  description="Reduce bounces and increase deliverabilityCapture leads directly while browsing LinkedIn or websites."
                />

                <div className="flex shrink-0 mt-11 w-14 h-14 bg-white rounded-full shadow-[0px_1px_6px_rgba(0,0,0,0.18)] max-md:mt-10" />
                <h3 className="ml-4">Email Finder</h3>
                <p className="self-stretch mt-1.5 w-full text-base tracking-tighter text-neutral-400 max-md:ml-1">
                  Find verified emails in seconds. Just enter a name and company
                  domain.
                </p>
              </div>
            </div>

            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-2xl font-semibold tracking-tighter text-center text-zinc-900 max-md:mt-10">
                <FeatureCard
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/2208fc7b-ebc1-4914-a6ca-bd3c6ba8e141?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                  title="API"
                  description="Integrate verified data directly into your CRM or systems."
                />

                <div className="flex shrink-0 mt-16 w-14 h-14 bg-white rounded-full shadow-[0px_1px_6px_rgba(0,0,0,0.18)] max-md:mt-10" />
                <h3>Intent Data</h3>
                <p className="self-start mt-1.5 text-base tracking-tighter text-neutral-400 w-[246px] max-md:ml-1.5">
                  Prioritize leads who are actively researching your solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex z-10 flex-col mt-0 ml-20 max-w-full font-semibold text-center w-[492px]">
        <FeatureCard
          icon="https://api.builder.io/api/v1/image/assets/TEMP/25c1629a-abb2-4ae6-aaa9-b16acfbd695b?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          title="Email Verification"
          description="Reduce bounces and increase deliverability."
          className="z-10 max-w-full w-[193px]"
        />

        <FeatureCard
          icon="https://api.builder.io/api/v1/image/assets/TEMP/46b26392-7dc3-48e5-81d9-161cc7d69d30?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          title="Technographics"
          description="Target companies based on technology usage."
          className="self-end mt-0 max-w-full w-[178px]"
        />
      </div>
    </section>
  );
}
