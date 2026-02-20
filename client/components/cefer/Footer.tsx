import { Link } from "react-router-dom";

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

  const dataItems = [
    "Data Points & Coverage",
    "Data Delivery & Access",
    "Data Quality",
  ];

  const resourceItems = [
    "Blog",
    "Case Studies",
    "Help Center",
    "Careers",
  ];

  const companyItems = [
    "About",
    "Contact",
    "Affiliate Program",
    "Pricing",
  ];

  return (
    <footer className="flex flex-col items-center w-full bg-white border-t border-gray-200">
      <div className="flex flex-col w-full max-w-[1200px] px-6 py-6 md:py-16">
        {/* Top Section - Logo and Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-6 md:gap-12 pb-6 md:pb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img
                src="/Ceferlogo.png"
                alt="Cefer Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              The trusted B2B sales intelligence platform for modern teams
            </p>
            {/* Social Links */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-900">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="cefer-cta-social hover:opacity-70 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <img src="/LINKedin.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="cefer-cta-social hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                >
                  <img src="/FB.svg" alt="Facebook" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="cefer-cta-social hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  <img src="/insta.svg" alt="Instagram" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 md:mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/prospector" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Prospector
                </Link>
              </li>
              <li>
                <Link to="/data-enrichment" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Data Enrichment
                </Link>
              </li>
              <li>
                <Link to="/chrome-extension" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Chrome Extension
                </Link>
              </li>
              <li>
                <Link to="/api-docs" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  API Docs
                </Link>
              </li>
              <li>
                <Link to="/email-verification" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Email Verification
                </Link>
              </li>
              <li>
                <Link to="/technographics" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Technographics
                </Link>
              </li>
              <li>
                <Link to="/email-finder" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Email Finder
                </Link>
              </li>
              <li>
                <Link to="/intent-data" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Intent Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Data Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 md:mb-4">Our Data</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/data-points-coverage" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Data Points & Coverage
                </Link>
              </li>
              <li>
                <Link to="/data-delivery-access" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Data Delivery & Access
                </Link>
              </li>
              <li>
                <Link to="/data-quality" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                  Data Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 md:mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {resourceItems.map((item) => (
                <li key={item}>
                  {item === "Blog" ? (
                    <Link to="/blog" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </Link>
                  ) : item === "Case Studies" ? (
                    <Link to="/case-studies" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </Link>
                  ) : item === "Help Center" ? (
                    <Link to="/help" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </Link>
                  ) : item === "Careers" ? (
                    <Link to="/careers" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </Link>
                  ) : (
                    <a href="#" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 md:mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {companyItems.map((item) => (
                <li key={item}>
                  {item === "About" ? (
                    <Link to="/about" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </Link>
                  ) : item === "Contact" ? (
                    <Link to="/contact" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </Link>
                  ) : item === "Affiliate Program" ? (
                    <Link to="/affiliate" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </Link>
                  ) : item === "Pricing" ? (
                    <Link to="/demo" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </Link>
                  ) : (
                    <a href="#" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 md:pt-8 border-t border-gray-200 gap-2 md:gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Cefer.io. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
              Terms and Conditions
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/do-not-sell" className="text-gray-600 hover:text-[#0e7bf5] transition-colors">
              Do Not Sell My Personal Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
