import { Link } from "react-router-dom";
import { FooterColumn } from "./FooterColumn";

export function Footer() {
  const dataItems = [
    "B2B Database",
    "Verified Emails",
    "Direct Dials",
    "Intent Data",
    "Technographics",
  ];

  const resourceItems = [
    "Help Center",
    "API Documentation",
    "Pricing",
    "Contact Sales",
    "Blog",
  ];

  const companyItems = [
    "About Us",
    "Partners",
    "Careers",
    "Legal",
    "Trust & Security",
  ];

  const platformItems = [
    "Prospector",
    "Data Enrichment",
    "Chrome Extension",
    "CRM Sync",
    "Email Verification",
  ];

  return (
    <footer className="flex flex-col items-center w-full px-10 pb-12 bg-zinc-50/50">
      <div className="z-10 mt-24 w-full max-w-[1200px] max-md:mt-10">
        <div className="flex gap-10 max-md:flex-col justify-between">
          <div className="w-[30%] max-md:w-full">
            <div className="max-md:mt-10">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-cefer-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
                <span className="text-2xl font-bold tracking-tighter text-cefer-black">Cefer.io</span>
              </Link>
              <div className="flex flex-col items-start mt-6 w-full">
                <p className="text-base font-medium leading-relaxed text-zinc-500 max-w-[280px]">
                  The trusted B2B sales intelligence platform for modern revenue teams.
                </p>
                <div className="flex gap-4 mt-8">
                  <div className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-cefer-blue hover:border-cefer-blue cursor-pointer transition-all">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-cefer-blue hover:border-cefer-blue cursor-pointer transition-all">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-12 max-md:flex-wrap justify-between w-full lg:w-[65%]">
            <FooterColumn title="Platform" items={platformItems} />
            <FooterColumn title="Our Data" items={dataItems} />
            <FooterColumn title="Resources" items={resourceItems} />
            <FooterColumn title="Company" items={companyItems} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] border-t border-zinc-200 mt-20 pt-8 flex flex-wrap gap-5 justify-between items-center text-sm font-medium text-zinc-500">
        <p>© 2026 Cefer.io. All rights reserved.</p>
        <nav className="flex gap-8">
          <Link to="/terms" className="hover:text-cefer-blue transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-cefer-blue transition-colors">Privacy</Link>
          <Link to="/do-not-sell" className="hover:text-cefer-blue transition-colors">Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
