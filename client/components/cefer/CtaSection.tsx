import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
    return (
        <section className="w-full py-24 px-4 bg-cefer-black text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cefer-blue opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-[800px] mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                    Ready to Grow Your Pipeline?
                </h2>
                <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-[600px] mx-auto">
                    Start finding your ideal customers today. No credit card required.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center px-8 py-4 bg-cefer-blue text-white text-lg font-bold rounded-full hover:bg-cefer-blue/90 transition-all hover:scale-105"
                    >
                        Get Started for Free
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-neutral-700 text-white text-lg font-bold rounded-full hover:bg-neutral-800 transition-all">
                        Contact Sales
                    </button>
                </div>

                <p className="mt-8 text-sm text-neutral-500">
                    Join 10,000+ teams growing with Cefer
                </p>
            </div>
        </section>
    );
}
