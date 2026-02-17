import * as React from "react";

export function HowItWorksSection() {
    return (
        <section className="relative flex flex-col items-center w-full py-24 px-4 overflow-hidden bg-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-24">
                How It <span className="text-gradient-cefer">Works ?</span>
            </h2>

            <div className="relative max-w-[1200px] w-full min-h-[500px]">
                {/* Wave/Flow Line */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    viewBox="0 0 1200 500"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    {/* Dashed line for effect? No, image serves solid blue line */}
                    <path
                        d="M0 300 C200 300, 300 450, 600 300 S900 100, 1200 100"
                        stroke="#0E7BF5"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-80"
                    />
                </svg>

                {/* Step 1 - Search & Filter */}
                <div className="absolute left-[5%] top-[55%] z-10 flex items-start gap-4">
                    <span className="text-[120px] font-bold leading-none text-gradient-cefer transform -translate-y-8">1</span>
                    <div className="mt-4 max-w-[200px]">
                        <h3 className="text-xl font-bold text-cefer-black">Search & Filter</h3>
                        <p className="text-sm text-neutral-500 mt-1">Find leads that match your ideal customer profile</p>
                    </div>
                </div>

                {/* Step 2 - Verify & Enrich */}
                <div className="absolute left-[30%] top-[70%] z-10 flex items-start gap-4">
                    <span className="text-[120px] font-bold leading-none text-gradient-cefer transform -translate-y-8">2</span>
                    <div className="mt-4 max-w-[200px]">
                        <h3 className="text-xl font-bold text-cefer-black">Verify & Enrich</h3>
                        <p className="text-sm text-neutral-500 mt-1">Get accurate, actionable data in real-time</p>
                    </div>
                </div>

                {/* Step 3 - Integrate & Outreach */}
                <div className="absolute left-[55%] top-[25%] z-10 flex items-start gap-4">
                    <span className="text-[120px] font-bold leading-none text-gradient-cefer transform -translate-y-8">3</span>
                    <div className="mt-4 max-w-[200px]">
                        <h3 className="text-xl font-bold text-cefer-black">Integrate & Outreach</h3>
                        <p className="text-sm text-neutral-500 mt-1">Export, sync, or push leads to your CRM</p>
                    </div>
                </div>

                {/* Step 4 - Integrate & Outreach (Scale) */}
                <div className="absolute right-[5%] top-[5%] z-10 flex items-start gap-4">
                    <div className="mt-4 max-w-[200px] text-right">
                        <h3 className="text-xl font-bold text-cefer-black">Integrate & Outreach</h3>
                        <p className="text-sm text-neutral-500 mt-1">Focus on conversations, not data cleanup</p>
                    </div>
                    <span className="text-[120px] font-bold leading-none text-gradient-cefer transform -translate-y-8">4</span>
                </div>
            </div>
        </section>
    );
}
