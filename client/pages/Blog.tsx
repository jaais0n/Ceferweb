import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

const allPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
    author: "Sarah Mitchell",
    date: "14 Feb 2026",
    title: "How B2B Sales Teams Are Closing 3x More Deals with Intent Data",
    excerpt: "Intent data is transforming how sales teams prioritize outreach. Discover how leading companies are using real-time buying signals to reach prospects at exactly the right moment.",
    tags: ["Sales", "Intent Data"],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
    author: "James Ortega",
    date: "11 Feb 2026",
    title: "The Ultimate Guide to Building a High-Quality B2B Contact Database",
    excerpt: "A stale or incomplete database can cost you thousands in wasted outreach. Learn the best practices for building, enriching, and maintaining a database your team can rely on.",
    tags: ["Data Quality", "Guide"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop",
    author: "Priya Nair",
    date: "8 Feb 2026",
    title: "Email Deliverability in 2026: What Every SDR Needs to Know",
    excerpt: "With inbox competition fiercer than ever, getting your emails delivered — and opened — takes more than a good subject line. Here's what's changed and how to adapt.",
    tags: ["Email", "Deliverability"],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop",
    author: "Tom Brennan",
    date: "5 Feb 2026",
    title: "Technographics Explained: How to Sell Smarter Using Tech Stack Data",
    excerpt: "Knowing what software a company uses gives you an unfair advantage. We break down how technographic data works and how to use it to refine your ICP and outreach.",
    tags: ["Technographics", "Strategy"],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop",
    author: "Leila Haddad",
    date: "2 Feb 2026",
    title: "From Cold Outreach to Warm Pipeline: A Practical Prospecting Playbook",
    excerpt: "Cold doesn't have to mean disconnected. Learn how top-performing SDRs use data enrichment and personalization to turn cold lists into conversations that convert.",
    tags: ["Prospecting", "Playbook"],
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop",
    author: "Carlos Mendes",
    date: "28 Jan 2026",
    title: "CRM Enrichment: Why Your HubSpot Data Is Probably Incomplete",
    excerpt: "Most CRMs are only as good as the data inside them. Discover how automatic enrichment keeps your records fresh, accurate, and ready for your next campaign.",
    tags: ["CRM", "Enrichment"],
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop",
    author: "Naomi Walsh",
    date: "24 Jan 2026",
    title: "5 Signs Your Lead Generation Strategy Is Stuck in 2020",
    excerpt: "The tools and tactics that worked five years ago are producing diminishing returns. Here are five red flags — and what modern B2B teams are doing instead.",
    tags: ["Lead Gen", "Strategy"],
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop",
    author: "David Kim",
    date: "20 Jan 2026",
    title: "How to Use Chrome Extensions to Prospect While You Browse",
    excerpt: "Browser-based prospecting tools have changed the game for sales teams. See how Cefer's Chrome Extension lets you pull verified contacts directly from LinkedIn profiles.",
    tags: ["Chrome Extension", "Tips"],
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop",
    author: "Amara Osei",
    date: "16 Jan 2026",
    title: "Account-Based Marketing: Aligning Sales and Marketing on Target Accounts",
    excerpt: "ABM works best when sales and marketing share the same data. Learn how to build a unified view of your target accounts using intent signals, firmographics, and enrichment.",
    tags: ["ABM", "Marketing"],
  },
];

const POSTS_PER_PAGE = 6;

const tagColors: Record<string, string> = {
  "Sales": "bg-blue-50 text-blue-600",
  "Intent Data": "bg-purple-50 text-purple-600",
  "Data Quality": "bg-green-50 text-green-600",
  "Guide": "bg-yellow-50 text-yellow-700",
  "Email": "bg-red-50 text-red-600",
  "Deliverability": "bg-orange-50 text-orange-600",
  "Technographics": "bg-indigo-50 text-indigo-600",
  "Strategy": "bg-teal-50 text-teal-600",
  "Prospecting": "bg-blue-50 text-blue-600",
  "Playbook": "bg-pink-50 text-pink-600",
  "CRM": "bg-cyan-50 text-cyan-600",
  "Enrichment": "bg-lime-50 text-lime-700",
  "Lead Gen": "bg-amber-50 text-amber-700",
  "Chrome Extension": "bg-blue-50 text-blue-600",
  "Tips": "bg-green-50 text-green-600",
  "ABM": "bg-violet-50 text-violet-600",
  "Marketing": "bg-rose-50 text-rose-600",
};

export default function Blog() {
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featured = allPosts[0];
  const totalPages = Math.ceil((allPosts.length - 1) / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const pagePosts = allPosts.slice(1).slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-100">
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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                B2B Growth <span className="text-gradient-cefer">Insights</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-5xl mx-auto font-semibold">
                Sales strategies, data intelligence tips, and product updates
              </p>
              <p className="text-base text-gray-700 max-w-3xl mx-auto mb-6">
                Straight from the Cefer team — actionable advice to help you build better pipelines, close more deals, and grow faster.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
                onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
              >
                {subscribed ? (
                  <p className="text-[#0e7bf5] font-semibold py-3">🎉 You're subscribed!</p>
                ) : (
                  <>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-3 rounded-full border border-white/60 bg-white/70 backdrop-blur text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#0e7bf5] text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="max-w-[1800px] mx-auto w-full px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Featured Post</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 md:pr-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {featured.tags.map((t) => (
                <span key={t} className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[t] ?? "bg-gray-100 text-gray-600"}`}>{t}</span>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
              {featured.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400 font-medium">{featured.author} · {featured.date}</p>
              <Link
                to={`/blog/${featured.id}`}
                className="flex items-center gap-1.5 text-[#0e7bf5] text-sm font-semibold hover:gap-2.5 transition-all"
              >
                Read more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="#0e7bf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All posts grid */}
      <section className="max-w-[1800px] mx-auto w-full px-4 md:px-8 pb-16">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">All Posts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pagePosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-3 font-medium">{post.author} · {post.date}</p>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug flex items-start justify-between gap-2">
                  {post.title}
                  <svg className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2h10v10M2 12L12 2" stroke="#0e7bf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[t] ?? "bg-gray-100 text-gray-600"}`}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#0e7bf5] hover:text-[#0e7bf5] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
                  page === p
                    ? "bg-[#0e7bf5] text-white"
                    : "border border-gray-200 text-gray-600 hover:border-[#0e7bf5] hover:text-[#0e7bf5]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#0e7bf5] hover:text-[#0e7bf5] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section
        className="w-full py-20 px-4 text-center relative overflow-hidden"
        style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Ready to Put These Insights Into Action?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">Start finding your ideal customers today. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup" className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
              Try Cefer.io Free
            </Link>
            <Link to="/demo" className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
