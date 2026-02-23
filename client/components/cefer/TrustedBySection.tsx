import * as React from "react";

export function TrustedBySection() {
    const companies = [
        { name: "Microsoft", logo: "/logos/microsoft.svg" },
        { name: "Amazon", logo: "/logos/amazon.svg" },
        { name: "LinkedIn", logo: "/logos/linkedin.svg" },
        { name: "Zoom", logo: "/logos/zoom.svg" },
        { name: "Salesforce", logo: "/logos/salesforce.svg" },
        { name: "HubSpot", logo: "/logos/hubspot.svg" },
        { name: "Slack", logo: "/logos/slack.svg" },
        { name: "Google", logo: "/logos/google.svg" },
    ];

    return (
        <section className="flex flex-col items-center w-full py-10 md:py-28 px-4 bg-gray-50">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-20">
                Trusted By{" "}
                <span className="text-[#4BA3F5]">Top Companies</span>
            </h2>

            {/* Scrolling company names */}
            <div className="w-full max-w-6xl overflow-hidden relative">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
                
                <div className="flex items-center gap-12 md:gap-16 lg:gap-20 animate-marquee">
                    {/* Repeat companies twice for infinite scroll */}
                    {[1, 2].map((set) => (
                        <React.Fragment key={set}>
                            {companies.map((company) => (
                                <div
                                    key={`${set}-${company.name}`}
                                    className="flex-shrink-0 flex items-center"
                                >
                                    <img
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        title={company.name}
                                        loading="lazy"
                                        className="h-7 md:h-8 lg:h-9 w-auto opacity-60 grayscale hover:opacity-90 hover:grayscale-0 transition"
                                    />
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
