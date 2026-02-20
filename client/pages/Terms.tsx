import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

const sections = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Welcome to Cefer",
    content: (
      <p className="text-gray-600 leading-relaxed">
        By accessing or using Cefer, you agree to comply with these Terms of Service. Please read them carefully before using our platform.
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Account Usage",
    content: (
      <ul className="space-y-3 text-gray-600">
        {[
          "You must provide accurate and up-to-date information when creating an account.",
          "You are responsible for all activity under your account credentials.",
          "Sharing accounts or selling access without authorization is prohibited.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Platform Services",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>Cefer provides:</p>
        <ul className="space-y-2">
          {[
            "Verified B2B contact data",
            "Prospecting, enrichment, and intent tools",
            "API and CRM integrations",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="pt-2 border-t border-gray-100">
          These services are for <span className="font-semibold text-gray-800">lawful business use only</span>. Users must not use data for illegal purposes, spam, or harassment.
        </p>
      </div>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "User Responsibilities",
    content: (
      <ul className="space-y-3 text-gray-600">
        {[
          "Maintain confidentiality of your login credentials",
          "Respect privacy of all contacts in our database",
          "Comply with GDPR, CCPA, CAN-SPAM, and other applicable regulations",
          "Avoid unauthorized data extraction or scraping",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Liability & Disclaimer",
    content: (
      <ul className="space-y-3 text-gray-600">
        {[
          "Cefer strives for accuracy and reliability, but we cannot guarantee 100% accuracy of external data.",
          "We are not responsible for third-party actions, campaign outcomes, or misuse of data.",
          "Use the platform at your own risk; Cefer provides no warranties beyond what is explicitly stated.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Termination",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>We may suspend or terminate accounts for:</p>
        <ul className="space-y-2">
          {[
            "Violation of these Terms",
            "Misuse of platform or data",
            "Legal obligations or governmental requests",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="pt-2 border-t border-gray-100">
          Upon termination, your access to Cefer services and data will end immediately.
        </p>
      </div>
    ),
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* ── Hero Banner ── */}
      <section className="py-16 px-2">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[260px] flex flex-col items-center justify-center overflow-hidden">
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10">
              <span className="inline-block border border-blue-200 text-[#0e7bf5] text-sm font-medium rounded-full px-4 py-1 mb-4 bg-white/60">
                Legal
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Terms of <span className="text-gradient-cefer">Service</span>
              </h1>
              <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
                Last updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro banner ── */}
      <section className="py-4 px-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-4 text-sm text-gray-600 leading-relaxed">
          By accessing or using Cefer, you agree to comply with these Terms of Service. Please read them carefully before using our platform.
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          {sections.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
                  {s.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{s.title}</h2>
              </div>
              <div className="pl-0 md:pl-13">{s.content}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "url(/bgcase.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Questions about our Terms?
          </h2>
          <p className="text-gray-500 text-base mb-10">
            Our team is happy to clarify anything. Reach out anytime.
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
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
