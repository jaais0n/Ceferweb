import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

const categories = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

const jobs = [
  {
    title: "Product Designer",
    description: "We're looking for a mid-level product designer to join our team.",
    category: "Design",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    description: "We're looking for an experienced engineering manager to join our team.",
    category: "Management",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    description: "We're looking for a customer success manager to join our team.",
    category: "Customer Service",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Account Executive",
    description: "We're looking for an account executive to join our team.",
    category: "Sales",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Frontend Developer",
    description: "We're looking for a skilled frontend developer to build great user experiences.",
    category: "Development",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Growth Marketing Manager",
    description: "We're looking for a data-driven growth marketer to scale our acquisition channels.",
    category: "Marketing",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Data Operations Analyst",
    description: "We're looking for a detail-oriented analyst to help maintain our data quality.",
    category: "Operations",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Finance Controller",
    description: "We're looking for a finance controller to manage our financial operations.",
    category: "Finance",
    remote: true,
    type: "Full-time",
  },
];

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState("View all");

  const filtered =
    activeCategory === "View all"
      ? jobs
      : jobs.filter((j) => j.category === activeCategory);

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
            {/* Blobs */}
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Careers at <span className="text-gradient-cefer">Cefer.io</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Heading ── */}
      <section className="pt-6 pb-2 px-6 md:px-16 max-w-[900px] mx-auto">
        {/* Badge */}
        <div className="mb-5">
          <span className="inline-block border border-gray-300 text-gray-700 text-sm font-medium rounded-full px-4 py-1">
            We're hiring!
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          Be part of our mission
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl">
          We're looking for passionate people to join us on our mission. We value flat hierarchies,
          clear communication, and full ownership and responsibility.
        </p>
      </section>

      {/* ── Job Listings ── */}
      <section className="py-12 px-6 md:px-16 max-w-[900px] mx-auto">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job list */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-gray-400 text-base">
              No open positions in this category right now.
            </p>
          ) : (
            filtered.map((job) => (
              <div
                key={job.title}
                className="py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{job.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {job.remote && (
                      <span className="inline-flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        100% remote
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-1 text-base font-bold text-gray-900 hover:text-[#0e7bf5] transition-colors"
                  >
                    Apply
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))
          )}
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
            Don't see your role?
          </h2>
          <p className="text-gray-500 text-base mb-10">
            We're always looking for talented people. Send us your resume and we'll reach out when a
            position opens up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
