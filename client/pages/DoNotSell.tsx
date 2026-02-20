import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

const yourRights = [
  "Request deletion of your personal information",
  "Opt-out of the sale of your data",
  "Access the data we have about you",
  "Correct inaccurate information",
];

const ourCommitment = [
  "Process requests within 30 days",
  "Verify your identity for security",
  "Provide confirmation once complete",
  "No discrimination for exercising rights",
];

const requestItems = [
  "Your full name and contact information",
  "Email address associated with your account (if applicable)",
  "Phone number or company name for verification",
  "Specific details about your request (delete data, opt-out, access information, etc.)",
  "Any additional information that helps us verify your identity",
];

export default function DoNotSell() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* ── Hero Banner ── */}
      <section className="py-16 px-2">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[300px] flex flex-col items-center justify-center overflow-hidden">
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10">
              <span className="inline-block border border-blue-200 text-[#0e7bf5] text-sm font-medium rounded-full px-4 py-1 mb-4 bg-white/60">
                Legal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl mx-auto leading-tight">
                Do Not Sell My{" "}
                <span className="text-gradient-cefer">Personal Information</span>
              </h1>
              <p className="mt-4 text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
                Submit a request to remove or opt-out of the sale of your personal information in accordance with CCPA and other privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rights + Commitment ── */}
      <section className="px-6 pb-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Your Rights */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900">Your Rights</h2>
            </div>
            <ul className="space-y-3">
              {yourRights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900">Our Commitment</h2>
            </div>
            <ul className="space-y-3">
              {ourCommitment.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Submit Your Request ── */}
      <section className="px-6 pb-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Submit Your Request</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6 ml-13">
            To submit your data removal or opt-out request, please contact us using the button below. We'll guide you through the process and ensure your request is processed within <span className="font-semibold text-gray-700">30 days</span>.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#0e7bf5] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors text-sm"
          >
            Submit a Request
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── What to Include ── */}
      <section className="px-6 pb-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-900">What to Include in Your Request</h2>
          </div>
          <ul className="space-y-3 mb-6">
            {requestItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0e7bf5] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-xs text-gray-500 leading-relaxed">
            By submitting a request, you confirm that the information provided is accurate and that you are the individual whose data is being requested or have authorization to act on their behalf.
          </div>
        </div>
      </section>

      {/* ── Need Help ── */}
      <section className="px-6 pb-10 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Need Help?</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            If you have questions about your privacy rights or need assistance with your request, please contact us:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 text-[#0e7bf5] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:privacy@cefer.io" className="text-sm font-semibold text-[#0e7bf5] hover:underline">
                  privacy@cefer.io
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 text-[#0e7bf5] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</p>
                <a href="tel:+15551234567" className="text-sm font-semibold text-gray-800">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 text-[#0e7bf5] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Address</p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  123 Privacy Lane,<br />San Francisco, CA 94105
                </p>
              </div>
            </div>
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
            Your privacy matters to us
          </h2>
          <p className="text-gray-500 text-base mb-10">
            We're committed to honoring your rights and keeping your data safe.
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
              to="/privacy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
