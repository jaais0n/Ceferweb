import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

const infoCards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Contact Details",
    desc: "Name, email, job title, and company information",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Company Information",
    desc: "Company information and technographics data",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Usage Data",
    desc: "How you interact with our platform to improve services",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Cookies & Analytics",
    desc: "Analytics data to improve user experience",
  },
];

const rights = [
  {
    title: "Access Your Data",
    desc: "Access the data we hold about you",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Request Changes",
    desc: "Request corrections or deletions of your information",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Opt-Out",
    desc: "Opt-out of marketing communications at any time",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Submit Concerns",
    desc: "Submit a privacy concern or complaint",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* ── Hero Banner ── */}
      <section className="py-16 px-2">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[280px] flex flex-col items-center justify-center overflow-hidden">
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10">
              <span className="inline-block border border-blue-200 text-[#0e7bf5] text-sm font-medium rounded-full px-4 py-1 mb-4 bg-white/60">
                Legal
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Privacy <span className="text-gradient-cefer">Policy</span>
              </h1>
              <p className="mt-4 text-gray-600 text-lg font-medium">
                Protecting Your Data, Always
              </p>
              <p className="mt-2 text-gray-400 text-sm">Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="px-6 pb-4 max-w-4xl mx-auto">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-4 text-sm text-gray-600 leading-relaxed">
          At <span className="font-semibold text-[#0e7bf5]">Cefer</span>, your privacy is our priority. We are committed to handling personal and business information with transparency, care, and compliance.
        </div>
      </section>

      {/* ── Information We Collect ── */}
      <section className="py-8 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            We collect information to improve our services and provide accurate, verified B2B data. This may include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 text-[#0e7bf5] flex items-center justify-center flex-shrink-0 shadow-sm">
                  {card.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{card.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Use Your Data ── */}
      <section className="py-2 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">How We Use Your Data</h2>
          </div>
          <ul className="space-y-3 text-gray-600 text-sm">
            {[
              "Deliver and improve Cefer services",
              "Ensure data accuracy and verification",
              "Provide customer support",
              "Send updates and product announcements (you can opt-out anytime)",
              "Comply with legal obligations",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Your Rights ── */}
      <section className="py-8 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6 pl-13">We follow GDPR, CCPA, and other applicable privacy laws</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rights.map((r, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 text-[#0e7bf5] flex items-center justify-center flex-shrink-0 shadow-sm">
                  {r.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="py-2 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Security Measures</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cefer uses industry-standard <span className="font-semibold text-gray-800">encryption</span>, <span className="font-semibold text-gray-800">access controls</span>, and <span className="font-semibold text-gray-800">monitoring</span> to protect data from unauthorized access or breaches.
          </p>
        </div>
      </section>

      {/* ── Learn More ── */}
      <section className="py-8 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Learn More</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">For questions about privacy or data handling:</p>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm">Email us at</span>
            <a
              href="mailto:privacy@cefer.io"
              className="text-[#0e7bf5] font-semibold text-sm hover:underline"
            >
              privacy@cefer.io
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-4 relative overflow-hidden mt-4"
        style={{
          backgroundImage: "url(/bgcase.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Questions about your data?
          </h2>
          <p className="text-gray-500 text-base mb-10">
            We're committed to full transparency. Reach out and we'll respond promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/terms"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              View Terms of Service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
