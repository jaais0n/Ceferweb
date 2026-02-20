import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* ── Hero ── */}
      <section className="py-16 px-4">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[240px] flex flex-col items-center justify-center overflow-hidden">
            {/* Blobs */}
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                We're <span className="text-gradient-cefer">Here to Help</span>
              </h1>
              <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
                Have a question, feedback, or partnership inquiry? The Cefer team is ready to assist you — quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left: Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a <span className="text-gradient-cefer">Message</span>
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-900 font-semibold text-lg">Message Sent!</p>
                <p className="text-gray-500 text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name <span className="text-red-400">*</span></label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0e7bf5]/30 focus:border-[#0e7bf5] transition"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address <span className="text-red-400">*</span></label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0e7bf5]/30 focus:border-[#0e7bf5] transition"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name <span className="text-red-400">*</span></label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0e7bf5]/30 focus:border-[#0e7bf5] transition"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Reason for Contact <span className="text-red-400">*</span></label>
                  <select
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0e7bf5]/30 focus:border-[#0e7bf5] transition"
                  >
                    <option value="" disabled>Select a reason</option>
                    <option>General Inquiry</option>
                    <option>Sales & Partnership</option>
                    <option>Technical Support</option>
                    <option>Billing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Message <span className="text-red-400">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0e7bf5]/30 focus:border-[#0e7bf5] transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0e7bf5] text-white text-sm font-semibold hover:bg-[#0e7bf5]/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Ways to reach us */}
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <div>
              <h2 className="font-extrabold text-gray-900 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                Ways to
              </h2>
              <img src="/reachus.svg" alt="Reach Us" className="w-full max-w-sm" />
              <p className="text-gray-500 text-sm mt-3 max-w-xs">
                Fill out the form on our website, and our team will respond within 24 hours.
              </p>
            </div>

            {/* Email cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* General Inquiries */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center gap-3 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  {/* Send/email icon */}
                  <svg className="w-5 h-5 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">General Inquiries</p>
                  <p className="text-xs text-gray-400 mb-2">For support and questions.</p>
                  <a
                    href="mailto:info@cefer.io"
                    className="inline-block px-3 py-1 rounded-full bg-[#0e7bf5] text-white text-xs font-medium hover:bg-[#0e7bf5]/90 transition"
                  >
                    info@cefer.io
                  </a>
                </div>
              </div>

              {/* Sales & Partnerships */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center gap-3 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  {/* Growth/chart icon */}
                  <svg className="w-5 h-5 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Sales &amp; Partnerships</p>
                  <p className="text-xs text-gray-400 mb-2">For business inquiries.</p>
                  <a
                    href="mailto:sales@cefer.io"
                    className="inline-block px-3 py-1 rounded-full bg-[#0e7bf5] text-white text-xs font-medium hover:bg-[#0e7bf5]/90 transition"
                  >
                    sales@cefer.io
                  </a>
                </div>
              </div>
            </div>

            {/* Help Center card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="font-semibold text-gray-900 text-base mb-1">General Inquiries</p>
              <p className="text-gray-500 text-xs mb-4">Visit our Help Centre for tutorials, FAQs, and troubleshooting guides to get immediate support.</p>
              <Link
                to="/help"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full flex items-center justify-center py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition cefer-cta cefer-cta-lg"
              >
                Visit Help Center
              </Link>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="font-semibold text-gray-900 text-base mb-1">Stay Connected</p>
              <p className="text-gray-500 text-xs mb-4">Follow us on LinkedIn, Twitter, and Facebook for the latest updates, product releases, and insights from the Cefer team.</p>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="cefer-cta-social w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0e7bf5] hover:text-[#0e7bf5] transition text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="cefer-cta-social w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0e7bf5] hover:text-[#0e7bf5] transition text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.8}/>
                    <circle cx="12" cy="12" r="4" strokeWidth={1.8}/>
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="cefer-cta-social w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0e7bf5] hover:text-[#0e7bf5] transition text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Start Your Free Trial Today
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Join thousands of sales teams using Cefer to find and connect with their ideal customers.
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
