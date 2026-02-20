import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

const caseStudyTopics = [
  "How SDR teams use Cefer to target the right buyers in seconds.",
  "How marketing teams improve campaign ROI with verified contact data.",
  "How agencies save hours every week on data research and list building.",
  "How startups scale faster with AI-powered lead generation tools.",
];

export default function CaseStudies() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Use a small, fixed set of generic sample images (not derived from topic text)
  const sampleImages = [
    "https://picsum.photos/900/600?random=101",
    "https://picsum.photos/900/600?random=102",
    "https://picsum.photos/900/600?random=103",
    "https://picsum.photos/900/600?random=104",
  ];

  const sampleImageFor = (i: number) => sampleImages[i % sampleImages.length];

  const sampleImage = sampleImageFor(selectedIndex);

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-2">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[320px] flex flex-col items-center justify-center overflow-hidden">
            {/* Abstract Blobs */}
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight md:whitespace-nowrap">
                See How Businesses Are
                <span className="block text-gradient-cefer">Winning with Cefer</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mt-6">
                We've just launched — and our first users are already discovering
                smarter, faster ways to find leads, validate data, and close deals.
                Real use cases are coming soon — stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find Here */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          What You'll{" "}
          <span className="text-gradient-cefer">Find Here</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-14 text-base">
          This page will soon feature real-world stories from teams using Cefer
          to transform their sales and marketing efforts.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center text-left">
          {/* Topic list */}
          <div className="flex-1 divide-y divide-gray-100 border-t border-gray-100">
            {caseStudyTopics.map((topic, i) => (
              <p
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedIndex(i)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedIndex(i)}
                className={`py-4 text-sm md:text-base cursor-pointer select-none transition-colors ${
                  selectedIndex === i
                    ? "text-gray-800 font-medium"
                    : "text-gray-400 hover:text-gray-600 font-medium"
                }`}
              >
                {topic}
              </p>
            ))}
          </div>

          {/* Image placeholder */}
          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center min-h-[200px] md:min-h-[280px]">
            <img
              src={sampleImage}
              alt="Case study preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                if (img.src.endsWith("/placeholder.svg")) {
                  img.style.display = "none";
                } else {
                  img.src = "/placeholder.svg";
                }
              }}
            />
            <span className="text-gray-400 text-sm absolute">
              {/* fallback handled by onError */}
            </span>
          </div>
        </div>
      </section>

      {/* Your Story Could Be Next */}
      <section
        className="mx-4 md:mx-8 lg:mx-16 my-6 rounded-3xl overflow-hidden relative flex items-center min-h-[320px]"
        style={{ backgroundImage: "url('/bgcase.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* translucent gradient overlay to preserve legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dde8f8]/60 via-[#e8f0fb]/40 to-[#f0e8ff]/40 pointer-events-none" />

        {/* Bottom-right image — absolutely anchored */}
        <img
          src="/Group.png"
          alt="Group of people"
          className="absolute bottom-0 right-0 h-full max-h-[340px] w-auto object-contain drop-shadow-xl z-10 pointer-events-none hidden sm:block"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            if (img.src.endsWith("/placeholder.svg")) {
              img.style.display = "none";
            } else {
              img.src = "/placeholder.svg";
            }
          }}
        />

        {/* Text content — left side */}
        <div className="flex w-full justify-start px-6 sm:px-10 md:px-20 py-12 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight md:whitespace-nowrap">
              Your Story{" "}
              <span className="text-gradient-cefer">Could Be Next</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 max-w-md">
              We've officially launched and are collecting results from our first
              customers.
              <br />
              If Cefer has already helped your business, we'd love to feature
              your success story here!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto text-center">
                Share Your Experience
              </button>
              <Link
                to="/demo"
                className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors w-full sm:w-auto text-center"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Page Is Still Growing */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:whitespace-nowrap">
          Why This Page Is{" "}
          <span className="text-gradient-cefer">Still Growing</span>
        </h2>
        <p className="text-gray-700 font-semibold mb-2">
          We believe in transparency — no made-up stories, no fluff.
        </p>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
          As new clients use Cefer, we'll publish real, verified case studies
          showing how our platform delivers measurable results.
        </p>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-3">
          Cefer is live — Start using it
        </h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base">
          We believe in transparency — no made-up stories, no fluff.
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
