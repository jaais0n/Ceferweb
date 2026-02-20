import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

// --- FAQ data ---
const faqs = [
  {
    question: "How SDR teams use Cefer to target the right buyers in seconds.",
    answer:
      "SDR teams use Cefer's Prospector to filter 300M+ verified contacts by job title, company size, funding stage, location, and tech stack. With one-click export to CRMs like HubSpot or Salesforce, reps skip manual research and reach decision-makers immediately. AI-powered recommendations surface look-alike prospects from your best-performing leads, keeping your pipeline constantly replenished.",
  },
  {
    question: "How marketing teams improve campaign ROI with verified contact data.",
    answer:
      "Cefer gives marketing teams access to real-time verified email addresses and firmographic data, so they can build hyper-targeted lists for outbound campaigns. Email Verification ensures delivery rates stay high and bounce rates stay low. Intent Data signals tell you exactly when a company is actively researching a solution like yours — so you can reach them at peak buying intent.",
  },
  {
    question: "How agencies save hours every week on data research and list building.",
    answer:
      "Rather than manually scraping LinkedIn or bouncing between tools, agencies use Cefer's Chrome Extension to pull verified contact and company data in-browser with a single click. Data Enrichment automatically fills in missing CRM fields — email, phone, LinkedIn, seniority, tech stack — so your team stops wasting time on incomplete records.",
  },
  {
    question: "How startups scale faster with AI-powered lead generation tools.",
    answer:
      "Startups use Cefer to punch above their weight. Our AI surfaces high-intent prospects that match your ICP, so a 2-person team can outperform a 20-person manual research team. Technographics filtering lets you target companies already using complementary or competing tools, giving you an instant conversation starter.",
  },
  {
    question: "How does Cefer keep its contact data accurate and up to date?",
    answer:
      "Cefer's data accuracy pipeline runs continuous validation across 300M+ contacts. Every email is triple-verified: syntax check, domain check, and real-time SMTP verification. Company records are refreshed with news signals, job-change tracking, and firmographic updates — ensuring you always have the freshest data available.",
  },
  {
    question: "Can I use Cefer.io with LinkedIn?",
    answer:
      "Yes. Cefer.io offers a Chrome extension that works directly on LinkedIn and company websites. You can find, verify, and export contact details without leaving your browser.",
  },
  {
    question: "What is Intent Data and how does it help prioritise outreach?",
    answer:
      "Intent Data monitors B2B buying signals — content consumption, keyword research patterns, third-party review site activity — to identify companies actively researching products or services like yours. Cefer surfaces these high-intent companies in your Prospector dashboard so you can reach out while they're in-market, dramatically improving conversion rates.",
  },
];

// --- Category cards ---
const categories = [
  {
    label: "Prospector",
    path: "/prospector",
    icon: (
      <svg className="w-9 h-9 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Data Enrichment",
    path: "/data-enrichment",
    icon: (
      <svg className="w-9 h-9 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    label: "Chrome Extension",
    path: "/chrome-extension",
    icon: (
      <svg className="w-9 h-9 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Email Verification",
    path: "/email-verification",
    icon: (
      <svg className="w-9 h-9 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Email Finder",
    path: "/email-finder",
    icon: (
      <svg className="w-9 h-9 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Intent Data",
    path: "/intent-data",
    icon: (
      <svg className="w-9 h-9 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

// --- AI mock knowledge base ---
const knowledgeBase: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["what is cefer", "cefer", "about cefer", "what does cefer do"],
    answer:
      "Cefer.io is a B2B sales intelligence platform launched in November 2025 for modern outbound teams. It provides 300M+ verified global contacts, accurate company data, and intent signals to help businesses identify and connect with ideal customers. Designed as a cost-effective alternative to traditional tools, it supports stronger outbound performance and pipeline growth.\n\n**Key Details About Cefer**\n- Access to 300M+ verified B2B contacts across multiple industries\n- Advanced email finder and contact verification tools\n- Company data enrichment and firmographic insights\n- Supports outbound sales, marketing campaigns, and pipeline building\n- Intent data to identify high-potential prospects",
  },
  {
    keywords: ["prospector", "find prospects", "lead generation", "search prospects"],
    answer:
      "Cefer Prospector is the core prospect discovery tool. It lets you filter 300M+ verified contacts by job title, company size, location, revenue, industry, funding stage, and tech stack. AI-powered recommendations surface look-alike leads from your best-performing contacts. Results can be exported directly to HubSpot, Salesforce, Pipedrive, or downloaded as CSV.",
  },
  {
    keywords: ["data enrichment", "enrich", "missing data", "crm fields"],
    answer:
      "Data Enrichment automatically fills in missing contact and company fields in your CRM — including verified email, phone number, LinkedIn URL, seniority level, company size, revenue, tech stack, and more. This eliminates hours of manual research and keeps your CRM records accurate and complete.",
  },
  {
    keywords: ["email verification", "verify email", "bounce", "deliverability"],
    answer:
      "Cefer Email Verification runs a three-layer check on every email address: syntax validation, domain MX record check, and real-time SMTP handshake verification. This ensures high deliverability rates and reduces bounces. You can verify single emails or upload bulk lists for batch verification.",
  },
  {
    keywords: ["email finder", "find email", "find contact email"],
    answer:
      "Email Finder lets you discover the verified business email address of any professional when you have their name and company domain. The engine cross-references multiple data sources and validates the result in real time before returning it to you.",
  },
  {
    keywords: ["chrome extension", "browser", "linkedin"],
    answer:
      "The Cefer Chrome Extension works on top of LinkedIn, company websites, and any web page to instantly surface verified contact and company data. Click the extension icon to pull emails, phone numbers, job titles, and firmographic data — then push them directly into your CRM or Cefer lists without leaving your browser.",
  },
  {
    keywords: ["intent data", "buying signal", "in-market", "intent"],
    answer:
      "Intent Data monitors third-party signals — content consumption, keyword searches, review site visits — to identify companies actively researching solutions like yours. Cefer surfaces these high-intent companies in your Prospector dashboard, enabling you to reach out while they're in active buying mode.",
  },
  {
    keywords: ["technographics", "tech stack", "technology", "tools they use"],
    answer:
      "Cefer Technographics reveals the complete technology stack used by any company — CRM, marketing automation, analytics, hosting, and hundreds of other tool categories. Filter prospects by the tools they use to find perfect-fit buyers and craft hyper-relevant outreach.",
  },
  {
    keywords: ["pricing", "cost", "plan", "subscription"],
    answer:
      "Cefer offers flexible pricing plans for individuals, small teams, and enterprise organisations. All plans include access to the core Prospector and Email Finder. Higher tiers unlock bulk exports, API access, Data Enrichment, Intent Data, and Technographics. Visit the Pricing page or contact info@cefer.io for a custom quote.",
  },
  {
    keywords: ["api", "integration", "crm", "hubspot", "salesforce"],
    answer:
      "Cefer provides a REST API for custom data workflows. Native integrations include HubSpot, Salesforce, Pipedrive, Outreach, and Salesloft. You can push contacts, trigger enrichment, and access search results programmatically. Full API docs are available at the API Docs page.",
  },
];

function getAIAnswer(query: string): string {
  const q = query.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keywords.some((kw) => q.includes(kw))) {
      return entry.answer;
    }
  }
  return `No exact match found for "${query}". Try searching for topics like "What is Cefer", "Prospector", "Email Finder", "Intent Data", or "Pricing". You can also reach us at info@cefer.io for direct help.`;
}

// --- Skeleton loading ---
function SearchSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-md p-8 animate-pulse">
      {[80, 65, 75, 55, 70, 50].map((w, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 rounded-full mb-4"
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

// --- Render AI answer (supports **bold** markdown) ---
function AnswerText({ text }: { text: string }) {
  return (
    <div className="text-gray-700 text-sm leading-relaxed space-y-3">
      {text.split("\n\n").map((block, i) => {
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="list-disc list-inside space-y-1">
              {items.map((li, j) => (
                <li key={j}>{li.replace(/^- /, "")}</li>
              ))}
            </ul>
          );
        }
        // render **bold** inline
        const parts = block.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i}>
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j}>{part.slice(2, -2)}</strong>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

// --- FAQ item ---
function FAQItem({ question, answer, open, onToggle }: { question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={onToggle}
      >
        <span className={`text-sm font-medium transition-colors ${open ? "text-[#0e7bf5]" : "text-gray-800"} group-hover:text-[#0e7bf5]`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${open ? "bg-[#0e7bf5] border-[#0e7bf5] rotate-45" : "bg-white"}`}>
          <svg className={`w-3.5 h-3.5 ${open ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function HelpCenter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "result">("idle");
  const [answer, setAnswer] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const runSearch = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) {
      setStatus("idle");
      return;
    }
    setStatus("loading");
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setAnswer(getAIAnswer(trimmed));
      setStatus("result");
    }, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") runSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    setStatus("idle");
    setAnswer("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* Hero */}
      <section className="py-16 px-2">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[280px] flex flex-col items-center justify-center overflow-hidden">
            {/* Blobs */}
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                Welcome to the Cefer{" "}
                <span className="text-[#0e7bf5]">Help Center</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Find answers, explore features, and get support — everything you need in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="px-4 pb-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 bg-white rounded-full border border-gray-200 shadow-md px-5 py-3.5">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for articles..."
              className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
            {query && (
              <button onClick={handleClear} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <button
              onClick={() => runSearch(query)}
              className="flex-shrink-0"
              title="AI Search"
            >
              <svg className="w-6 h-6 text-[#0e7bf5]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Search results / skeleton / category cards */}
      <section className="px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          {status === "loading" && <SearchSkeleton />}

          {status === "result" && (
            <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-8 relative">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-[#0e7bf5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
                </svg>
                <span className="text-xs font-semibold text-[#0e7bf5] uppercase tracking-wider">AI Answer</span>
              </div>
              <AnswerText text={answer} />
              <button
                onClick={handleClear}
                className="mt-6 text-xs text-gray-400 hover:text-[#0e7bf5] transition-colors"
              >
                ← Back to Help Center
              </button>
            </div>
          )}

          {status === "idle" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  to={cat.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#0e7bf5] hover:shadow-md transition-all duration-200 group"
                >
                  <div className="group-hover:text-[#0e7bf5] transition-colors">{cat.icon}</div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#0e7bf5] text-center transition-colors">
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-2">
            Frequently Asked <span className="text-[#0e7bf5]">Questions</span>
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Common questions from Cefer users — answered.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters / Contact */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why It <span className="text-black">Matters</span>
          </h2>
          <p className="text-base font-semibold text-gray-800 mb-2">
            Still not finding what you need?
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Our Support team is here to help! Fill out our form to reach our team
          </p>
          <a
            href="mailto:info@cefer.io"
            className="text-[#0e7bf5] font-semibold hover:underline text-sm"
          >
            info@cefer.io
          </a>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@cefer.io"
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Email Support
            </a>
            <Link
              to="/prospector"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
