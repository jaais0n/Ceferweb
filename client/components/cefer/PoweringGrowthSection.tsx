import * as React from "react";

export function PoweringGrowthSection() {
    const stats = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            value: "300M+",
            label: "Verified Contacts",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            value: "99%",
            label: "Data Accuracy",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            value: "50+",
            label: "Countries",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
            value: "500+",
            label: "Industries Covered",
        },
    ];

    return (
        <section className="flex flex-col items-center w-full py-24 px-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-20">
                Powering Growth{" "}
                <span className="text-gradient-cefer">Worldwide</span>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 max-w-[900px] w-full">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-cefer-blue/10 rounded-full flex items-center justify-center mb-5 text-cefer-blue">
                            {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-cefer-black mb-1">
                            {stat.value}
                        </div>
                        <p className="text-sm text-neutral-400">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
