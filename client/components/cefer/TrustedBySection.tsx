import * as React from "react";

export function TrustedBySection() {
    return (
        <section className="flex flex-col items-center w-full py-20 px-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
                Trusted By{" "}
                <span className="text-gradient-cefer">Top Companies</span>
            </h2>

            {/* Scrolling company logos */}
            <div className="w-full overflow-hidden">
                <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
                    {/* Repeat for infinite scroll effect */}
                    {[1, 2].map((set) => (
                        <React.Fragment key={set}>
                            <span className="text-3xl font-bold text-neutral-300 tracking-tight">zomato</span>
                            <span className="text-3xl font-bold text-neutral-300 tracking-tight flex items-center gap-1">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>
                                slack
                            </span>
                            <span className="text-3xl font-bold text-neutral-300 tracking-tight flex items-center gap-1">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4l4.5 16H11L7.5 4H4zm8.5 0L17 20h2.5L15 4h-2.5zM1 12h22v2H1v-2z" /></svg>
                                Walmart
                            </span>
                            <span className="text-3xl font-bold text-neutral-300 tracking-tight flex items-center gap-1">
                                <span className="w-7 h-7 bg-cefer-blue rounded-full flex items-center justify-center text-white text-sm font-bold">p</span>
                                plusvibe
                            </span>
                            <span className="text-3xl font-bold text-neutral-300 tracking-tight">Google</span>
                            <span className="text-3xl font-bold text-neutral-300 tracking-tight flex items-center gap-1">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z" /></svg>
                                Microsoft
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
