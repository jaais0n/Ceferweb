
export function HowItWorksSection() {
    return (
        <section className="relative w-full pt-10 md:pt-12 pb-10 md:pb-16 px-0 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-0">
                    How It <span className="text-gradient-cefer">Works ?</span>
                </h2>
            </div>

            {/* Desktop: SVG full-bleed illustration */}
            <div className="hidden md:block w-screen relative left-1/2 -translate-x-1/2 -mt-[18%]">
                <img
                    src="/123home.svg"
                    alt="How It Works - Steps 1 2 3 4"
                    className="w-full h-auto object-fill select-none pointer-events-none"
                    draggable={false}
                />
            </div>

                {/* Mobile: plain gradient numbers + text */}
                <div className="md:hidden flex flex-col gap-6 px-4">
                    {[
                        { num: "1", title: "Search & Filter", desc: "Find leads that match your ideal customer profile" },
                        { num: "2", title: "Verify & Enrich", desc: "Get accurate, actionable data in real-time" },
                        { num: "3", title: "Integrate & Outreach", desc: "Export, sync, or push leads to your CRM" },
                        { num: "4", title: "Close & Convert", desc: "Focus on conversations, not data cleanup" },
                    ].map((step) => (
                        <div key={step.num} className="flex items-start gap-4">
                            <span
                                className="font-extrabold leading-none select-none flex-shrink-0"
                                style={{
                                    fontSize: "5rem",
                                    lineHeight: 1,
                                    background: "linear-gradient(to bottom, #b8d3f5 0%, #0e7bf5 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {step.num}
                            </span>
                            <div className="pt-3">
                                <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    );
}
