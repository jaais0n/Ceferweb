
export function WhyCeferSection() {
    return (
        <section className="flex flex-col items-center w-full py-10 md:py-16 px-4 bg-white">
            {/* Why Cefer Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-10">
                Why <span className="text-gradient-cefer">Cefer ?</span>
            </h2>

            <div className="max-w-4xl w-full space-y-0">
                {/* Verified Data You Can Trust */}
                <div className="text-center py-5 md:py-8 border-t border-gray-200">
                    <h3 className="text-2xl md:text-3xl font-semibold text-cefer-navy mb-3 md:mb-4">
                        Verified Data You Can Trust
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        99% accuracy rate with our real-time 3-step validation process. Get direct dials and verified emails that don't bounce.
                    </p>
                </div>

                {/* All-in-One Platform */}
                <div className="text-center py-5 md:py-8 border-t border-gray-200">
                    <h3 className="text-2xl md:text-3xl font-semibold text-cefer-navy mb-3 md:mb-4">
                        All-in-One Platform
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        From prospecting to enrichment, email automation, and intent signals, Cefer gives your team everything you need in one unified workspace.
                    </p>
                </div>

                {/* Easy to Integrate */}
                <div className="text-center py-5 md:py-8 border-t border-b border-gray-200">
                    <h3 className="text-2xl md:text-3xl font-semibold text-cefer-navy mb-3 md:mb-4">
                        Easy to Integrate
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Seamlessly sync your data with Salesforce, HubSpot, or via our robust API. Getting started takes minutes, not weeks.
                    </p>
                </div>
            </div>
        </section>
    );
}
