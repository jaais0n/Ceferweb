import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useHeroTrigger, useCountUp, useScrambleText } from "@/hooks/useHeroAnimation";

// ─── Animated value helpers ───────────────────────────────────────────────────

function AnimPct({ target, trigger }: { target: number; trigger: number }) {
  const v = useCountUp(target, 1200, trigger);
  return <>{v}%</>;
}

function AnimDollarM({ trigger }: { trigger: number }) {
  const v = useCountUp(1200, 1200, trigger);
  return <>${(v / 1000).toFixed(1)}M</>;
}

function AnimNum({ target, trigger }: { target: number; trigger: number }) {
  const v = useCountUp(target, 1300, trigger);
  return <>{v.toLocaleString()}</>;
}

function AnimText({ text, trigger }: { text: string; trigger: number }) {
  const s = useScrambleText(text, 900, trigger);
  return <>{s}</>;
}

// ─── Animated chart helpers ───────────────────────────────────────────────────

function AnimBar(
  { height, color, delay, trigger, className = "" }:
    { height: string; color: string; delay: number; trigger: number; className?: string }
) {
  const [grown, setGrown] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setGrown(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setGrown(true), delay);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [trigger, delay]);

  return (
    <div
      className={className}
      style={{
        height: grown ? height : "0px",
        backgroundColor: color,
        transition: grown
          ? "height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
          : "none",
        borderRadius: "2px",
      }}
    />
  );
}

function AnimProgressBar(
  { widthPct, delay, trigger }:
    { widthPct: string; delay: number; trigger: number }
) {
  const [filled, setFilled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setFilled(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setFilled(true), delay);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [trigger, delay]);

  return (
    <div className="h-2.5 bg-orange-50 rounded-full w-full overflow-hidden">
      <div
        className="h-full bg-orange-400 rounded-full"
        style={{
          width: filled ? widthPct : "0%",
          transition: filled
            ? "width 1s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
      />
    </div>
  );
}

function AnimCircle(
  { targetOffset, delay, trigger }:
    { targetOffset: number; delay: number; trigger: number }
) {
  const [drawn, setDrawn] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDrawn(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setDrawn(true), delay);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [trigger, delay]);

  return (
    <div className="w-8 h-8 relative flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="16" cy="16" r="14" stroke="#e5e7eb" strokeWidth="3" fill="none" />
        <circle
          cx="16" cy="16" r="14"
          stroke="#0E7BF5" strokeWidth="3" fill="none"
          strokeDasharray="88"
          strokeDashoffset={drawn ? targetOffset : 88}
          strokeLinecap="round"
          style={{
            transition: drawn
              ? "stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
        />
      </svg>
    </div>
  );
}

// ─── Slide-in card (React state + CSS transition) ─────────────────────────────

interface SlideCardProps {
  children: React.ReactNode;
  direction: "left" | "right";
  delay: number;
  trigger: number;
  wrapperClass?: string;
}

function SlideCard({ children, direction, delay, trigger, wrapperClass = "" }: SlideCardProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(true), delay + 60);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [trigger, delay]);

  const offset = direction === "left" ? "-50px" : "50px";

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0px) scale(1)"
          : `translateX(${offset}) scale(0.94)`,
        transition: visible
          ? "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)"
          : "none",
        willChange: "transform, opacity",
      }}
    >
      <div className={wrapperClass}>{children}</div>
    </div>
  );
}

// ─── Fade-in wrapper for blurred background cards ─────────────────────────────

function BgCard(
  { children, delay, trigger, targetOpacity, className }:
    { children: React.ReactNode; delay: number; trigger: number; targetOpacity: number; className: string }
) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(true), delay);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [trigger, delay]);

  return (
    <div
      className={className}
      style={{
        opacity: visible ? targetOpacity : 0,
        transform: visible ? "scale(1)" : "scale(0.85)",
        transition: visible
          ? "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)"
          : "none",
      }}
    >
      {children}
    </div>
  );
}

function BgCards({ trigger }: { trigger: number }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden hidden lg:block" aria-hidden="true">
      <BgCard delay={100} trigger={trigger} targetOpacity={0.25}
        className="absolute top-[2%] left-[1%] bg-white p-3 rounded-xl shadow-sm transform -rotate-6 blur-[2px] w-[140px] border border-slate-50">
        <div className="flex justify-between items-start mb-1">
          <p className="text-[10px] font-medium text-neutral-500"><AnimText text="Leads" trigger={trigger} /></p>
          <span className="text-green-600 text-[9px] font-bold bg-green-100/50 px-1 py-0.5 rounded">+<AnimNum target={14} trigger={trigger} />%</span>
        </div>
        <div className="text-xl font-bold text-cefer-black"><AnimNum target={2450} trigger={trigger} /></div>
      </BgCard>

      <BgCard delay={250} trigger={trigger} targetOpacity={0.25}
        className="absolute bottom-[2%] left-[5%] bg-white p-3 rounded-xl shadow-sm transform rotate-3 blur-[2px] w-[150px] border border-slate-50">
        <div className="flex justify-between items-start mb-1">
          <p className="text-[10px] font-medium text-neutral-500"><AnimText text="Deals Closed" trigger={trigger} /></p>
          <span className="text-cefer-blue text-[9px] font-bold bg-cefer-blue/10 px-1 py-0.5 rounded">+<AnimNum target={82} trigger={trigger} /><span className="inline">.</span><AnimNum target={2} trigger={trigger} />%</span>
        </div>
        <div className="text-xl font-bold text-cefer-black"><AnimNum target={185} trigger={trigger} /></div>
      </BgCard>

      <BgCard delay={350} trigger={trigger} targetOpacity={0.15}
        className="absolute top-[15%] right-[20%] bg-white p-2 rounded-lg shadow-sm transform -rotate-2 blur-[2px] w-[100px] border border-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-100/40 flex items-center justify-center text-amber-500 text-[9px] font-bold">R</div>
          <div className="h-1 w-12 rounded-full overflow-hidden bg-neutral-100/20">
            <AnimBar height="4px" color="rgba(212,212,216,0.4)" delay={600} trigger={trigger} className="w-full rounded-full" />
          </div>
        </div>
      </BgCard>

      <BgCard delay={150} trigger={trigger} targetOpacity={0.25}
        className="absolute top-[2%] right-[1%] bg-white p-3 rounded-xl shadow-sm transform rotate-6 blur-[2px] w-[130px] border border-slate-50">
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-purple-100/40 flex items-center justify-center text-purple-500 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M2 12h20" /></svg>
          </div>
          <div className="text-lg font-bold text-cefer-black"><AnimPct target={450} trigger={trigger} /></div>
        </div>
      </BgCard>

      <BgCard delay={400} trigger={trigger} targetOpacity={0.20}
        className="absolute top-[45%] right-[2%] bg-white p-2 rounded-lg shadow-sm transform -rotate-12 blur-[3px] w-[110px] border border-slate-50">
        <div className="flex items-center justify-between pointer-events-none">
          <div className="w-6 h-6 rounded-full bg-cefer-blue/20"></div>
          <div className="w-6 h-3 rounded-full bg-green-50/40"></div>
        </div>
        <div className="mt-1 space-y-1">
          <div className="h-1 w-full rounded-full overflow-hidden bg-neutral-50/20">
            <AnimBar height="4px" color="rgba(244,244,245,0.4)" delay={800} trigger={trigger} className="w-full rounded-full" />
          </div>
        </div>
      </BgCard>

      <BgCard delay={300} trigger={trigger} targetOpacity={0.25}
        className="absolute bottom-[2%] right-[5%] bg-white p-3 rounded-xl shadow-sm transform -rotate-3 blur-[2px] w-[140px] border border-slate-50">
        <div className="flex justify-between items-start mb-1">
          <p className="text-[10px] font-medium text-neutral-500"><AnimText text="Conversion" trigger={trigger} /></p>
          <span className="text-orange-500 text-[9px] font-bold">+<AnimNum target={53} trigger={trigger} /><span>.</span><AnimNum target={3} trigger={trigger} />%</span>
        </div>
        <div className="flex items-end gap-1 h-6 mt-1 justify-between px-1">
          <AnimBar height="40%" color="rgba(253,186,116,0.4)" delay={500} trigger={trigger} className="w-2" />
          <AnimBar height="60%" color="rgba(253,186,116,0.4)" delay={600} trigger={trigger} className="w-2" />
          <AnimBar height="80%" color="rgba(251,146,60,0.4)" delay={700} trigger={trigger} className="w-2" />
          <AnimBar height="50%" color="rgba(253,186,116,0.4)" delay={800} trigger={trigger} className="w-2" />
          <AnimBar height="70%" color="rgba(251,146,60,0.4)" delay={900} trigger={trigger} className="w-2" />
        </div>
      </BgCard>

      <BgCard delay={500} trigger={trigger} targetOpacity={0.10}
        className="absolute bottom-[10%] right-[15%] bg-white p-2 rounded-lg shadow-sm transform rotate-12 blur-[3px] w-[90px] border border-slate-50">
        <div className="flex items-end gap-1 h-4">
          <AnimBar height="100%" color="rgba(228,228,231,0.4)" delay={700} trigger={trigger} className="w-1.5" />
          <AnimBar height="50%" color="rgba(228,228,231,0.4)" delay={800} trigger={trigger} className="w-1.5" />
          <AnimBar height="80%" color="rgba(228,228,231,0.4)" delay={900} trigger={trigger} className="w-1.5" />
        </div>
      </BgCard>

      <BgCard delay={200} trigger={trigger} targetOpacity={0.20}
        className="absolute top-[45%] left-[2%] bg-white p-2 rounded-lg shadow-sm transform -rotate-6 blur-[2px] w-[110px] border border-slate-50">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-6 h-6 rounded-full bg-indigo-50/40 flex items-center justify-center text-indigo-400 font-bold text-[10px]">+<AnimNum target={12} trigger={trigger} /></div>
          <div className="text-[10px] font-semibold text-zinc-500"><AnimText text="Signups" trigger={trigger} /></div>
        </div>
      </BgCard>

      <BgCard delay={450} trigger={trigger} targetOpacity={0.20}
        className="absolute bottom-[20%] right-[1%] bg-white p-3 rounded-xl shadow-sm transform rotate-6 blur-[3px] w-[120px] border border-slate-50">
        <div className="flex justify-between items-center mb-1">
          <div className="w-6 h-6 rounded-full bg-cefer-blue/20"></div>
          <span className="text-cefer-blue text-[9px] font-bold"><AnimNum target={8} trigger={trigger} /> <AnimText text="Booked" trigger={trigger} /></span>
        </div>
      </BgCard>

      <BgCard delay={300} trigger={trigger} targetOpacity={0.15}
        className="absolute top-[12%] left-[10%] bg-white p-2 rounded-lg shadow-sm transform rotate-2 blur-[2px] w-[100px] border border-slate-50">
        <p className="text-[9px] font-medium text-neutral-500 mb-0.5"><AnimText text="Churn" trigger={trigger} /></p>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-bold text-zinc-600">0.<AnimNum target={5} trigger={trigger} />%</span>
        </div>
      </BgCard>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function HeroSection() {
  const trigger = useHeroTrigger();

  return (
    <section className="relative w-full overflow-visible">

      {/* Blurred background decorative cards – animated */}
      <BgCards trigger={trigger} />

      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8 relative">

        {/* ── Animated Floating Cards – Left ── */}
        <div className="absolute left-[calc(50%_-_50vw)] top-[20%] hidden lg:flex flex-col gap-6 z-10 pointer-events-none select-none">
          <SlideCard direction="left" delay={0} trigger={trigger}
            wrapperClass="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 w-[170px] transform -rotate-6 -translate-x-4 border border-slate-100">
            <p className="text-xs font-medium text-neutral-400 mb-1">Activity</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold text-cefer-black tracking-tight">
                <AnimPct target={85} trigger={trigger} />
              </span>
              <div className="flex items-center text-green-500 text-[10px] font-bold bg-green-50 px-1.5 py-0.5 rounded-full">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5"><path d="M18 15l-6-6-6 6" /></svg>
                12%
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-10 mt-1">
              <AnimBar height="16px" color="#f3e8ff" delay={200} trigger={trigger} className="w-2.5" />
              <AnimBar height="24px" color="#e9d5ff" delay={300} trigger={trigger} className="w-2.5" />
              <AnimBar height="40px" color="#a855f7" delay={400} trigger={trigger} className="w-2.5 shadow-sm" />
              <AnimBar height="28px" color="#d8b4fe" delay={500} trigger={trigger} className="w-2.5" />
              <AnimBar height="20px" color="#e9d5ff" delay={600} trigger={trigger} className="w-2.5" />
            </div>
          </SlideCard>

          <SlideCard direction="left" delay={150} trigger={trigger}
            wrapperClass="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 w-[180px] transform rotate-3 translate-x-2 border border-slate-100">
            <p className="text-xs font-medium text-neutral-400 mb-1">Pipeline Value</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl font-extrabold text-cefer-black tracking-tight">
                <AnimDollarM trigger={trigger} />
              </span>
              <span className="text-green-500 text-[10px] font-bold bg-green-50 px-1.5 py-0.5 rounded-full">+8%</span>
            </div>
            <div className="flex items-end gap-1.5 h-8">
              <AnimBar height="20px" color="rgba(14,123,245,0.6)" delay={350} trigger={trigger} className="w-3" />
              <AnimBar height="28px" color="rgba(14,123,245,0.4)" delay={450} trigger={trigger} className="w-3" />
              <AnimBar height="32px" color="#0E7BF5" delay={550} trigger={trigger} className="w-3" />
              <AnimBar height="24px" color="rgba(14,123,245,0.3)" delay={650} trigger={trigger} className="w-3" />
            </div>
          </SlideCard>

          <SlideCard direction="left" delay={300} trigger={trigger}
            wrapperClass="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 w-[160px] transform rotate-6 translate-x-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-medium text-neutral-400">Verified</p>
                <p className="text-sm font-bold text-cefer-black">
                  <AnimNum target={850} trigger={trigger} /> <AnimText text="Emails" trigger={trigger} />
                </p>
              </div>
            </div>
          </SlideCard>
        </div>

        {/* ── Animated Floating Cards – Right ── */}
        <div className="absolute right-[calc(50%_-_50vw)] top-[10%] hidden lg:flex flex-col gap-4 z-10 pointer-events-none select-none">
          <SlideCard direction="right" delay={100} trigger={trigger}
            wrapperClass="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 w-[190px] transform rotate-3 translate-x-4 border border-slate-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium text-neutral-400 mb-1">Reach</p>
                <div className="text-3xl font-extrabold text-cefer-black tracking-tight">
                  <AnimNum target={122637} trigger={trigger} />
                </div>
                <p className="text-[10px] text-neutral-400 mt-0.5">From last 7 days</p>
              </div>
              <div className="flex items-center text-teal-500 text-[10px] font-bold bg-teal-50 px-2 py-1 rounded-md">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5"><path d="M18 15l-6-6-6 6" /></svg>
                21.4%
              </div>
            </div>
          </SlideCard>

          <SlideCard direction="right" delay={250} trigger={trigger}
            wrapperClass="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 w-[180px] transform -rotate-2 border border-slate-100">
            <p className="text-xs font-medium text-neutral-400 mb-1">Active Leads</p>
            <div className="flex justify-between items-end mb-2">
              <div className="text-3xl font-extrabold text-cefer-black tracking-tight">
                <AnimNum target={9350} trigger={trigger} />
              </div>
              <div className="flex items-center text-orange-500 text-xs font-bold mb-1">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5"><path d="M18 15l-6-6-6 6" /></svg>
                8.46%
              </div>
            </div>
            <AnimProgressBar widthPct="70%" delay={500} trigger={trigger} />
          </SlideCard>

          <SlideCard direction="right" delay={400} trigger={trigger}
            wrapperClass="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 w-[160px] transform rotate-3 -translate-x-4 border border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[10px] font-medium text-neutral-400">Response Rate</p>
              <span className="text-green-500 text-[10px] font-bold">+12%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-cefer-black">
                <AnimPct target={45} trigger={trigger} />
              </div>
              <AnimCircle targetOffset={48} delay={600} trigger={trigger} />
            </div>
          </SlideCard>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center max-w-[800px] mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cefer-black leading-[1.1]">
            Find, Contact &amp; Close Your
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mt-2">
            <span className="text-gradient-cefer pb-2">Ideal Clients</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 mt-6 max-w-[650px] mx-auto leading-relaxed">
            Tired of chasing dead leads? Cefer.io ensures every email and phone number is verified in real time — and you pay only for what works.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs font-bold text-cefer-black uppercase tracking-wide">
            <span className="flex items-center gap-1.5"><span className="text-[#F54C0E] text-sm">★</span> 300M+ Verified Contacts</span>
            <span className="flex items-center gap-1.5"><span className="text-[#F54C0E] text-sm">★</span> 3-Layer Validation</span>
            <span className="flex items-center gap-1.5"><span className="text-[#F54C0E] text-sm">★</span> Real-Time Intent Data</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/signup" className="inline-flex items-center justify-center px-8 py-3.5 text-white text-base font-semibold rounded-full cefer-cta cefer-cta-lg cefer-btn-primary">
              Try Cefer.io Free
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-cefer-black text-base font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors cefer-cta cefer-cta-lg">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Curved Arrow */}
        <div className="absolute right-[15%] bottom-[-270px] hidden lg:block pointer-events-none select-none z-20">
          <img src="/Arrow.svg" alt="Arrow pointing to dashboard" className="w-[390px] h-auto transform rotate-[12deg] opacity-80" />
        </div>
      </div>
    </section>
  );
}
