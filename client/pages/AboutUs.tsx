import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

// --- What Sets Us Apart data ---
const differentiators = [
  {
    label: "3-Layer Verification",
    tag: "AI checks + human validation + continuous updates",
    gradient: "from-orange-400 via-pink-400 to-red-400",
  },
  {
    label: "Global Coverage",
    tag: "300M+ contacts across 50+ countries",
    gradient: "from-blue-400 via-cyan-400 to-blue-600",
  },
  {
    label: "Compliance",
    tag: "GDPR, CCPA, and CAN-SPAM aligned",
    gradient: "from-teal-400 via-cyan-400 to-blue-400",
  },
  {
    label: "Actionable Insights",
    tag: "Technographics, intent signals, and enriched profiles",
    gradient: "from-pink-400 via-purple-400 to-indigo-500",
  },
  {
    label: "Ease of Use",
    tag: "One-click exports, CRM integrations & browser extension",
    gradient: "from-blue-500 via-indigo-400 to-purple-500",
  },
];

export default function AboutUs() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* ── Hero ── */}
      <section className="py-16 px-2">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[260px] flex flex-col items-center justify-center overflow-hidden">
            {/* Blobs */}
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                About <span className="text-gradient-cefer">Cefer.io</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── Smarter B2B tagline ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center leading-tight mb-6">
            Smarter B2B{" "}
            <span className="text-gradient-cefer">Sales Intelligence</span>
          </h2>



          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto text-center leading-relaxed mb-12">
            At <span className="text-[#0e7bf5] font-semibold">Cefer</span>, we're on a mission to
            make <span className="text-[#0e7bf5] font-semibold">B2B</span> prospecting smarter,
            faster, and more reliable — empowering sales, marketing, and growth teams to find,
            contact, and close the right decision-makers across the globe.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "300M+", label: "Verified Contacts" },
              { value: "50+", label: "Countries Covered" },
              { value: "10+", label: "Years of Expertise" },
              { value: "3-Layer", label: "Verification Process" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 bg-white rounded-2xl border border-gray-100 shadow-sm py-6 px-4"
              >
                <span className="text-2xl font-extrabold text-[#0e7bf5]">{stat.value}</span>
                <span className="text-xs text-gray-500 text-center font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Our <span className="text-gradient-cefer">Story</span>
          </h2>
          <div className="space-y-5 text-gray-600 text-base leading-relaxed">
            <p>
              We're a small team with a big obsession — data and technology. Both of us have a little
              geek in us — we enjoy tinkering with code, building small tools, and experimenting with
              how data can be used smarter.
            </p>
            <p>
              With over 10 years of experience in B2B data aggregation, we've spent countless hours
              deep in the data industry — understanding how information is collected, verified, and
              delivered. But we also saw the same recurring problem: most platforms made access to
              quality data too complicated or too expensive.
            </p>
            <p>
              That's what led to the creation of Cefer — a self-service B2B data platform that
              bridges this gap. Our goal? To make verified, high-quality data accessible, affordable,
              and transparent for everyone — not just large enterprises with big budgets.
            </p>
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-3">
            Meet the <span className="text-gradient-cefer">Founders</span>
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10 max-w-xl mx-auto">
            The minds behind Cefer — obsessed with data, technology, and building things that matter.
          </p>

          {/* Founder cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Naresh */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base leading-tight">Naresh</p>
                  <p className="text-xs text-[#0e7bf5] font-medium">Founder</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                A data and technology enthusiast with deep expertise in B2B data aggregation. Naresh
                brings 10+ years of hands-on industry knowledge, having built tools and systems that
                turn raw data into actionable intelligence.
              </p>
            </div>

            {/* Winston */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base leading-tight">Winston Davis</p>
                  <p className="text-xs text-[#0e7bf5] font-medium">Co-Founder &amp; CEO</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                A seasoned sales and marketing leader with a passion for helping B2B teams grow.
                Winston's vision drives Cefer's product strategy — making verified, high-quality data
                accessible for companies of every size.
              </p>
            </div>
          </div>

          {/* Founder description */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 px-8 py-6 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Founded by <span className="font-semibold text-gray-900">Naresh</span> and{" "}
              <span className="font-semibold text-gray-900">Winston Davis</span>, Cefer blends
              AI-powered aggregation with a 3-layer verification process to ensure every contact is
              accurate, compliant, and actionable. Because great data shouldn't be hard to find — or
              overpriced.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10">
            Our <span className="text-gradient-cefer">Mission &amp; Vision</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8 text-center">
              <p className="text-[#0e7bf5] font-bold text-lg mb-3">Mission</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide B2B teams with verified, real-time data that accelerates pipeline growth and helps close deals faster.
              </p>
            </div>
            {/* Vision */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8 text-center">
              <p className="text-[#0e7bf5] font-bold text-lg mb-3">Vision</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become the most trusted source of B2B contact and intent data, helping companies
                worldwide scale smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10">
            What Sets <span className="text-gradient-cefer">Us Apart</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Left: list */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {differentiators.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-left transition-all duration-200 border-b border-gray-100 last:border-b-0 ${
                    activeIdx === idx
                      ? "bg-gray-50 text-gray-900"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${activeIdx === idx ? "text-[#0e7bf5] translate-x-0" : "text-gray-300"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Right: animated card */}
            <div className="sm:w-80 flex-shrink-0">
              <div className="relative min-h-[240px]">
                {differentiators.map((item, idx) => (
                  <div
                    key={item.label}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} p-6 flex items-center justify-center transition-all duration-500 ease-in-out ${
                      activeIdx === idx
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <p className="text-white font-bold text-base text-center leading-snug drop-shadow">
                      {item.tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join the Growth Journey ── */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Join the Growth Journey
          </h2>
          <p className="text-gray-500 text-base mb-10">
            Cefer is trusted by startups, SMBs, agencies, and enterprises worldwide to power smarter
            sales and marketing campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/demo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
