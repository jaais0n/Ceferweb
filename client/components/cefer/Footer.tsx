import { Link } from "react-router-dom";
import { FooterColumn } from "./FooterColumn";

export function Footer() {
  const platformItems = [
    "Prospector",
    "Data Enrichment",
    "Chrome Extension",
    "API Docs",
    "Email Verification",
    "Technographics",
    "Email Finder",
    "Intent Data",
  ];

  return (
    <footer className="flex flex-col items-center w-full max-md:max-w-full">
      <div className="z-10 mt-24 w-full max-w-[1173px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[29%] max-md:ml-0 max-md:w-full">
            <div className="mt-9 max-md:mt-10">
              <Link to="/">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f16456912c2ea25e0e34c6e3b910b3851fd83055?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                  alt="Cefer Logo"
                  className="object-contain w-36 max-w-full aspect-[2.12]"
                />
              </Link>
              <div className="flex flex-col items-start pl-2 mt-1.5 w-full">
                <p className="self-stretch text-base font-semibold tracking-tighter text-zinc-900">
                  The trusted B2B sales intelligence platform for modern teams.
                </p>
                <h4 className="mt-2 text-sm font-semibold tracking-tighter text-zinc-900">
                  Follow Us
                </h4>
                <div className="flex gap-3.5 mt-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ab818ca2d00cbaf1114938d283a0a3e8464e0c6a?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                    alt="Social media"
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/70450d9d30e182ffca5dc9b49831dee653107684?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                    alt="Social media"
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/322c8350d11d5928238057e01af27b71d5809836?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                    alt="Social media"
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="ml-5 w-[71%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-3/12 max-md:ml-0 max-md:w-full">
                  <FooterColumn title="Platform" items={platformItems} />
                </div>
                <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <FooterColumn title="Our Data" items={platformItems} />
                </div>
                <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <FooterColumn title="Resources" items={platformItems} />
                </div>
                <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <FooterColumn title="Company" items={platformItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-between items-start self-stretch px-16 pt-28 pb-6 w-full text-xs font-semibold tracking-tight text-center text-zinc-900 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <p>© 2025 Cefer.io. All rights reserved.</p>
        <nav className="flex gap-10 max-md:max-w-full">
          <Link to="/terms" className="basis-auto text-neutral-400">
            <span style={{ color: "rgba(28,28,28,1)" }}>
              Terms and Conditions
            </span>
          </Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/do-not-sell" className="basis-auto">
            Do Not Sell My Personal Information
          </Link>
        </nav>
      </div>
    </footer>
  );
}
