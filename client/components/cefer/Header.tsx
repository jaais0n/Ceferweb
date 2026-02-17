import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center self-center w-full px-8 md:px-16 max-md:max-w-full">
      <Link to="/">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f16456912c2ea25e0e34c6e3b910b3851fd83055?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          alt="Cefer Logo"
          className="object-contain shrink-0 w-36 max-w-full aspect-[2.12]"
        />
      </Link>
      <nav className="flex items-center gap-1 p-1 bg-white shadow-sm rounded-full border border-neutral-100 hidden md:flex">
        <div className="flex items-center gap-2 px-5 py-2.5 bg-cefer-blue text-white rounded-full cursor-pointer font-semibold transition-transform hover:scale-105 hover:bg-cefer-blue/90">
          Platform
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 1L5 5L9 1" />
          </svg>
        </div>

        {["Our Data", "Resources", "Pricing", "Company"].map((item) => (
          <div key={item} className="flex items-center gap-1.5 px-4 py-2 text-zinc-600 hover:text-cefer-blue font-medium cursor-pointer transition-colors">
            {item}
            {item !== "Pricing" && (
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                <path d="M1 1L5 5L9 1" />
              </svg>
            )}
          </div>
        ))}
      </nav>
      <div className="flex items-center gap-6 text-base font-semibold tracking-tighter text-center">
        <Link to="/signin" className="my-auto text-cefer-black hover:text-cefer-blue transition-colors">Sign In</Link>
        <div className="flex flex-col justify-center px-1.5 py-1.5 text-white bg-cefer-blue bg-opacity-10 rounded-[82px]">
          <div className="flex flex-col justify-center p-0.5 bg-cefer-blue bg-opacity-40 rounded-[82px]">
            <div className="flex flex-col justify-center px-1 py-1 bg-cefer-blue bg-opacity-60 rounded-[82px]">
              <Link to="/signup" className="px-7 py-3 bg-cefer-blue rounded-[82px] max-md:px-5 hover:bg-opacity-90 transition-opacity">
                Try Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
