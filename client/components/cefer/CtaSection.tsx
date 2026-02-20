import { Link } from "react-router-dom";

export function CtaSection() {
    return (
        <section className="w-full py-12 md:py-24 px-4 relative overflow-hidden no-gradient" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className="max-w-[800px] mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 text-black">
                    Ready to Grow Your Pipeline?
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-10 max-w-[600px] mx-auto">
                    Start finding your ideal customers today. No credit card required.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/signup"
                        className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
                    >
                        Try Cefer.io Free
                    </Link>
                    <Link
                        to="/demo"
                        className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
                    >
                        Book a Demo
                    </Link>
                </div>

                <p className="mt-8 text-sm text-gray-600">
                    Join 10,000+ teams growing with Cefer
                </p>
            </div>
        </section>
    );
}
