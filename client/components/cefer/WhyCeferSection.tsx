import * as React from "react";

export function WhyCeferSection() {
    return (
        <section className="flex flex-col items-center w-full py-24 px-4">
            {/* Why Cefer Heading */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-20">
                Why <span className="text-gradient-cefer">Cefer ?</span>
            </h2>

            <div className="max-w-[900px] w-full space-y-0">
                {/* Verified Data You Can Trust */}
                <div className="text-center py-8 border-t border-neutral-200">
                    <h3 className="text-xl font-semibold tracking-tight text-cefer-black mb-2">
                        Verified Data You Can Trust
                    </h3>
                    <p className="text-sm text-neutral-400 max-w-[500px] mx-auto">
                        99% accuracy rate with our real-time 3-step validation process. Get direct dials and verified emails that don't bounce.
                    </p>
                </div>

                {/* All-in-One Platform */}
                <div className="text-center py-8 border-t border-neutral-200">
                    <h3 className="text-xl font-semibold tracking-tight text-cefer-black mb-2">
                        All-in-One Platform
                    </h3>
                    <p className="text-sm text-neutral-400 max-w-[700px] mx-auto">
                        From prospecting to enrichment, email automation, and intent signals, Cefer gives your team everything you need in one unified workspace.
                    </p>
                </div>

                {/* Easy to Integrate */}
                <div className="text-center py-8 border-t border-b border-neutral-200">
                    <h3 className="text-xl font-semibold tracking-tight text-cefer-black mb-2">
                        Easy to Integrate
                    </h3>
                    <p className="text-sm text-neutral-400 max-w-[700px] mx-auto">
                        Seamlessly sync your data with Salesforce, HubSpot, or via our robust API. Getting started takes minutes, not weeks.
                    </p>
                </div>
            </div>
        </section>
    );
}
