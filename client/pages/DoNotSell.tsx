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
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
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
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
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
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
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
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── What to Include ── */}
      <section className="px-6 pb-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e7bf5] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
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
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
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
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
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
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
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
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
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
