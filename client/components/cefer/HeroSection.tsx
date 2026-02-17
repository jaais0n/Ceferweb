import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-visible">
      {/* Blurred Background Cards - Added for Depth & z-0 (behind everything) - Clean Layout (Safe Zones) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden hidden lg:block" aria-hidden="true">
        {/* Top Left (Extreme Corner) - Leads (Subtle) */}
        <div className="absolute top-[2%] left-[1%] bg-white p-3 rounded-xl shadow-sm transform -rotate-6 opacity-25 blur-[2px] w-[140px] border border-slate-50">
          <div className="flex justify-between items-start mb-1">
            <p className="text-[10px] font-medium text-neutral-500">Leads</p>
            <span className="text-green-600 text-[9px] font-bold bg-green-100/50 px-1 py-0.5 rounded">+14%</span>
          </div>
          <div className="text-xl font-bold text-cefer-black">2,450</div>
        </div>

        {/* Bottom Left (Safe) - Deals (Subtle) */}
        <div className="absolute bottom-[2%] left-[5%] bg-white p-3 rounded-xl shadow-sm transform rotate-3 opacity-25 blur-[2px] w-[150px] border border-slate-50">
          <div className="flex justify-between items-start mb-1">
            <p className="text-[10px] font-medium text-neutral-500">Deals Closed</p>
            <span className="text-cefer-blue text-[9px] font-bold bg-cefer-blue/10 px-1 py-0.5 rounded">+8.2%</span>
          </div>
          <div className="text-xl font-bold text-cefer-black">185</div>
        </div>

        {/* Top Right (moved from Center) - Referrals (Tiny) */}
        <div className="absolute top-[15%] right-[20%] bg-white p-2 rounded-lg shadow-sm transform -rotate-2 opacity-15 blur-[2px] w-[100px] border border-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-amber-100/40 flex items-center justify-center text-amber-500 text-[9px] font-bold">R</div>
            <div className="h-1 w-12 bg-neutral-200/40 rounded-full"></div>
          </div>
        </div>

        {/* Top Right (Extreme Corner - Away from Reach) - ROI (Subtle) */}
        <div className="absolute top-[2%] right-[1%] bg-white p-3 rounded-xl shadow-sm transform rotate-6 opacity-25 blur-[2px] w-[130px] border border-slate-50">
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-purple-100/40 flex items-center justify-center text-purple-500 mb-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M2 12h20" /></svg>
            </div>
            <div className="text-lg font-bold text-cefer-black">450%</div>
          </div>
        </div>

        {/* Center Right (Safe Zone) - Emails (Tiny) */}
        <div className="absolute top-[45%] right-[2%] bg-white p-2 rounded-lg shadow-sm transform -rotate-12 opacity-20 blur-[3px] w-[110px] border border-slate-50">
          <div className="flex items-center justify-between pointer-events-none">
            <div className="w-6 h-6 rounded-full bg-cefer-blue/20"></div>
            <div className="w-6 h-3 rounded-full bg-green-50/40"></div>
          </div>
          <div className="mt-1 space-y-1">
            <div className="h-1 w-full bg-neutral-100/40 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Right (Safe) - Conversion (Subtle) */}
        <div className="absolute bottom-[2%] right-[5%] bg-white p-3 rounded-xl shadow-sm transform -rotate-3 opacity-25 blur-[2px] w-[140px] border border-slate-50">
          <div className="flex justify-between items-start mb-1">
            <p className="text-[10px] font-medium text-neutral-500">Conversion</p>
            <span className="text-orange-500 text-[9px] font-bold">+5.3%</span>
          </div>
          <div className="flex items-end gap-1 h-6 mt-1 justify-between px-1">
            <div className="w-2 h-[40%] bg-orange-200/40 rounded-sm"></div>
            <div className="w-2 h-[60%] bg-orange-300/40 rounded-sm"></div>
            <div className="w-2 h-[80%] bg-orange-400/40 rounded-sm"></div>
            <div className="w-2 h-[50%] bg-orange-300/40 rounded-sm"></div>
            <div className="w-2 h-[70%] bg-orange-400/40 rounded-sm"></div>
          </div>
        </div>

        {/* Bottom Right (moved from Center) - Growth (Tiny) */}
        <div className="absolute bottom-[10%] right-[15%] bg-white p-2 rounded-lg shadow-sm transform rotate-12 opacity-10 blur-[3px] w-[90px] border border-slate-50">
          <div className="flex items-end gap-1 h-4">
            <div className="w-1.5 h-full bg-zinc-200/40 rounded-sm"></div>
            <div className="w-1.5 h-[50%] bg-zinc-200/40 rounded-sm"></div>
            <div className="w-1.5 h-[80%] bg-zinc-200/40 rounded-sm"></div>
          </div>
        </div>

        {/* Center Left (Safe Zone) - Signups (Tiny) */}
        <div className="absolute top-[45%] left-[2%] bg-white p-2 rounded-lg shadow-sm transform -rotate-6 opacity-20 blur-[2px] w-[110px] border border-slate-50">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-6 h-6 rounded-full bg-indigo-50/40 flex items-center justify-center text-indigo-400 font-bold text-[10px]">+12</div>
            <div className="text-[10px] font-semibold text-zinc-500">Signups</div>
          </div>
        </div>

        {/* Far Bottom Right (Extreme Corner) - Meetings (Tiny) */}
        <div className="absolute bottom-[20%] right-[1%] bg-white p-3 rounded-xl shadow-sm transform rotate-6 opacity-20 blur-[3px] w-[120px] border border-slate-50">
          <div className="flex justify-between items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-cefer-blue/20"></div>
            <span className="text-cefer-blue text-[9px] font-bold">8 Booked</span>
          </div>
        </div>

        {/* Top Left (moved from Center) - Churn (Tiny) */}
        <div className="absolute top-[12%] left-[10%] bg-white p-2 rounded-lg shadow-sm transform rotate-2 opacity-15 blur-[2px] w-[100px] border border-slate-50">
          <p className="text-[9px] font-medium text-neutral-500 mb-0.5">Churn</p>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-zinc-600">0.5%</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8 relative">
        {/* Floating cards - Left side */}
        <div className="absolute left-[calc(50%_-_50vw)] top-[20%] hidden lg:block z-0 pointer-events-none select-none">
          {/* Activity card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 w-[170px] mb-6 transform -rotate-6 -translate-x-4 border border-slate-50">
            <p className="text-xs font-medium text-neutral-400 mb-1">Activity</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold text-cefer-black tracking-tight">85%</span>
              <div className="flex items-center text-green-500 text-[10px] font-bold bg-green-50 px-1.5 py-0.5 rounded-full">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                12%
              </div>
            </div>
            {/* Purple bar chart */}
            <div className="flex items-end gap-1.5 h-10 mt-1">
              <div className="w-2.5 h-4 bg-purple-100 rounded-sm"></div>
              <div className="w-2.5 h-6 bg-purple-200 rounded-sm"></div>
              <div className="w-2.5 h-full bg-purple-500 rounded-sm shadow-sm"></div>
              <div className="w-2.5 h-7 bg-purple-300 rounded-sm"></div>
              <div className="w-2.5 h-5 bg-purple-200 rounded-sm"></div>
            </div>
          </div>
          {/* Pipeline Value card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 w-[180px] transform rotate-3 translate-x-2 border border-slate-50">
            <p className="text-xs font-medium text-neutral-400 mb-1">Pipeline Value</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl font-extrabold text-cefer-black tracking-tight">$1.2M</span>
              <span className="text-green-500 text-[10px] font-bold bg-green-50 px-1.5 py-0.5 rounded-full">+8%</span>
            </div>
            {/* Mini chart */}
            <div className="flex items-end gap-1.5 h-8">
              <div className="w-3 h-5 bg-cefer-blue rounded-sm opacity-60"></div>
              <div className="w-3 h-7 bg-cefer-blue rounded-sm opacity-40"></div>
              <div className="w-3 h-full bg-cefer-blue rounded-sm"></div>
              <div className="w-3 h-6 bg-cefer-blue rounded-sm opacity-30"></div>
            </div>
          </div>
          {/* Verified Emails card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 w-[160px] transform rotate-6 translate-x-8 translate-y-32 border border-slate-50 relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-medium text-neutral-400">Verified</p>
                <p className="text-sm font-bold text-cefer-black">850 Emails</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating cards - Right side */}
        <div className="absolute right-[calc(50%_-_50vw)] top-[10%] hidden lg:block z-0 pointer-events-none select-none">
          {/* Reach card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 w-[190px] mb-4 transform rotate-3 translate-x-4 border border-slate-50">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium text-neutral-400 mb-1">Reach</p>
                <div className="text-3xl font-extrabold text-cefer-black tracking-tight">122,637</div>
                <p className="text-[10px] text-neutral-400 mt-0.5">From last 7 days</p>
              </div>
              <div className="flex items-center text-teal-500 text-[10px] font-bold bg-teal-50 px-2 py-1 rounded-md">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                21.4%
              </div>
            </div>
          </div>
          {/* Leads card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 w-[180px] transform -rotate-2 border border-slate-50">
            <p className="text-xs font-medium text-neutral-400 mb-1">Active Leads</p>
            <div className="flex justify-between items-end mb-2">
              <div className="text-3xl font-extrabold text-cefer-black tracking-tight">9,350</div>
              <div className="flex items-center text-orange-500 text-xs font-bold mb-1">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                8.46%
              </div>
            </div>
            {/* Orange Progress bar */}
            <div className="h-2.5 bg-orange-50 rounded-full w-full overflow-hidden">
              <div className="h-full bg-orange-400 w-[70%] rounded-full"></div>
            </div>
          </div>
          {/* Response Rate card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 w-[160px] transform rotate-3 translate-y-8 -translate-x-4 border border-slate-50">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[10px] font-medium text-neutral-400">Response Rate</p>
              <span className="text-green-500 text-[10px] font-bold">+12%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-cefer-black">45%</div>
              <div className="w-8 h-8 relative flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="16" cy="16" r="14" stroke="#e5e7eb" strokeWidth="3" fill="none" />
                  <circle cx="16" cy="16" r="14" stroke="#0E7BF5" strokeWidth="3" fill="none" strokeDasharray="88" strokeDashoffset="48" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>



        {/* Main Hero Content */}
        <div className="relative z-10 text-center max-w-[800px] mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cefer-black leading-[1.1]">
            Find, Contact & Close Your
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mt-2">
            <span className="text-gradient-cefer pb-2">Ideal Clients</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 mt-6 max-w-[650px] mx-auto leading-relaxed">
            Cefer helps B2B teams find and connect with verified
            decision-makers globally — faster, smarter, and more reliably
            than ever.
          </p>

          {/* Stats badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs font-bold text-cefer-black uppercase tracking-wide">
            <span className="flex items-center gap-1.5">
              <span className="text-[#F54C0E] text-sm">★</span> 300M+ Verified Contacts
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#F54C0E] text-sm">★</span> 3-Layer Validation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#F54C0E] text-sm">★</span> Real-Time Intent Data
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-cefer-blue text-white text-base font-semibold rounded-full hover:bg-cefer-blue/90 transition-all shadow-lg shadow-cefer-blue/20 hover:scale-105"
            >
              Try Cefer.io Free
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-cefer-black text-base font-semibold rounded-full border-2 border-zinc-300 hover:border-zinc-400 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>


        {/* Curved Arrow to Dashboard */}
        {/* Curved Arrow to Dashboard */}
        <div className="absolute right-[15%] bottom-[-270px] hidden lg:block pointer-events-none select-none z-20">
          <img
            src="/Arrow.svg"
            alt="Arrow pointing to dashboard"
            className="w-[390px] h-auto transform rotate-[12deg] opacity-80"
          />
        </div>
      </div>
    </section >
  );
}
