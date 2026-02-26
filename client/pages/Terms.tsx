"use client";
import Link from "next/link";

const sections = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.68L5.68 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.68L18.32 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
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
              href="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

