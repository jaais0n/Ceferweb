import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

export function Header() {
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const [showDataDropdown, setShowDataDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [allowTransition, setAllowTransition] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigationLockRef = useRef<boolean>(false);
  const displayTab = hoveredTab ?? activeTab;
  const headerRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);

  const platformItems = [
    { title: "Prospects", path: "/prospector" },
    { title: "Data Enrichment", path: "/data-enrichment" },
    { title: "Chrome Extension", path: "/chrome-extension" },
    { title: "API", path: "/api-docs" },
    { title: "Email Verification", path: "/email-verification" },
    { title: "Technographics", path: "/technographics" },
    { title: "Email Finder", path: "/email-finder" },
    { title: "Intent Data", path: "/intent-data" },
  ];

  const dataItems = [
    { title: "Data Points & Coverage", path: "/data-points-coverage" },
    { title: "Data Delivery & Access", path: "/data-delivery-access" },
    { title: "Data Quality", path: "/data-quality" },
  ];

  const resourceItems = [
    { title: "Blog", path: "/blog" },
    { title: "Case Studies", path: "/case-studies" },
    { title: "Help Centre", path: "/help" },
  ];

  const companyItems = [
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "Affiliate Program", path: "/affiliate" },
  ];

  const mobileGroups = [
    { label: "Platform", items: platformItems },
    { label: "Our Data", items: dataItems },
    { label: "Resources", items: resourceItems },
    { label: "Company", items: companyItems },
  ];

  const menuItems = ["Platform", "Our Data", "Resources", "Pricing", "Company"];

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const shouldEnableAutoHide = !isHomePage;
  const [isPlatformPage, setIsPlatformPage] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Sync active tab with current route
  useEffect(() => {
    const path = location.pathname || "/";
    const platformPaths = platformItems.map((p) => p.path);
    const ourDataPaths = dataItems.map((d) => d.path);
    setIsPlatformPage([...platformPaths, ...ourDataPaths].some((pp) => path.startsWith(pp)));
    const resourcePaths = resourceItems.map((r) => r.path);
    const companyPaths = [...companyItems.map((c) => c.path), "/careers", "/privacy", "/terms", "/do-not-sell"];
    const looksLikePlatform = platformPaths.some((pp) => path.startsWith(pp));
    const looksLikeData = ourDataPaths.some((pp) => path.startsWith(pp));
    const looksLikeResource = resourcePaths.some((pp) => path.startsWith(pp));
    const looksLikeCompany = companyPaths.some((pp) => path.startsWith(pp));

    if (path === "/") {
      setAllowTransition(false);
      setActiveTab("Platform");
    } else {
      setAllowTransition(false);

      if (looksLikePlatform) {
        setActiveTab("Platform");
      } else if (looksLikeData) {
        setActiveTab("Our Data");
      } else if (looksLikeResource) {
        setActiveTab("Resources");
      } else if (looksLikeCompany) {
        setActiveTab("Company");
      } else {
        setActiveTab("");
      }
    }

    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, [location.pathname]);

  useLayoutEffect(() => {
    wrapperRef.current = headerRef.current?.parentElement ?? null;
  }, [location.pathname]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (!shouldEnableAutoHide) {
      wrapper.style.transform = "";
      wrapper.style.transition = "";
      return;
    }

    wrapper.style.transition = "transform 0.3s ease";
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - lastScrollY.current) < 10) {
        return;
      }
      const browsingDown = currentScroll > lastScrollY.current;
      wrapper.style.transform = browsingDown ? "translateY(-100%)" : "translateY(0)";
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      wrapper.style.transform = "";
    };
  }, [shouldEnableAutoHide]);

  // Update indicator position on tab change and window resize
  useEffect(() => {
    updateIndicator(displayTab);

    const handleResize = () => updateIndicator(displayTab);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [displayTab]);

  const updateIndicator = (tabName: string) => {
    if (!tabName) return;
    const element = document.getElementById(`nav-${tabName.replace(/\s+/g, '-')}`);
    if (element && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      setIndicatorStyle({
        width: elementRect.width,
        transform: `translateX(${elementRect.left - navRect.left}px)`,
      });
    }
  };

  const handleMouseEnter = (item: string) => {
    if (navigationLockRef.current) return;
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }

    setHoveredTab(item);
    setAllowTransition(true);
    updateIndicator(item);

    setShowPlatformDropdown(false);
    setShowDataDropdown(false);
    setShowResourcesDropdown(false);
    setShowCompanyDropdown(false);

    if (item === "Platform") {
      setShowPlatformDropdown(true);
    } else if (item === "Our Data") {
      setShowDataDropdown(true);
    } else if (item === "Resources") {
      setShowResourcesDropdown(true);
    } else if (item === "Company") {
      setShowCompanyDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
      setShowPlatformDropdown(false);
      setShowDataDropdown(false);
      setShowResourcesDropdown(false);
      setShowCompanyDropdown(false);
    }, 220);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setShowPlatformDropdown(false);
    setShowDataDropdown(false);
    setShowResourcesDropdown(false);
    setShowCompanyDropdown(false);
    setHoveredTab(null);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`flex items-center justify-between mx-auto max-w-7xl w-full px-4 md:px-8 transition-all ${isPlatformPage ? "py-3" : "py-6"}`}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            try { (window as any).triggerLoading?.("/"); }
            catch {}
            window.location.href = "/";
          }}
        >
          <img src="/Ceferlogo.png" alt="Cefer Logo" className="object-contain shrink-0 h-14 w-auto cursor-pointer" />
        </a>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center gap-1 p-1 rounded-full relative bg-white shadow-sm border border-neutral-100"
        >
          <div
            className={`absolute bg-cefer-blue rounded-full pointer-events-none ${allowTransition ? "transition-all duration-300 ease-out" : ""} ${displayTab ? "opacity-100" : "opacity-0"}`}
            style={{ ...indicatorStyle, height: "44px", top: "4px", left: "4px" }}
          />
          {menuItems.map((item) => (
            <div
              key={item}
              id={`nav-${item.replace(/\s+/g, "-")}`}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer font-semibold z-10 relative transition-all ${allowTransition ? "duration-300 ease-out" : "duration-0"
                } ${displayTab === item ? "text-white" : isHomePage ? "text-black" : "text-zinc-600 hover:text-zinc-900"}`}>
                {item}
                {item !== "Pricing" && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                )}
              </div>
              {item === "Platform" && showPlatformDropdown && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50" style={{ animation: "fadeIn 0.2s ease-out forwards" }} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                  {platformItems.map((pi) => <Link key={pi.title} to={pi.path} onClick={() => { navigationLockRef.current = true; setActiveTab("Platform"); setTimeout(() => (navigationLockRef.current = false), 400); }} className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0e7bf5] transition-all duration-150 font-medium rounded-lg mx-2">{pi.title}</Link>)}
                </div>
              )}
              {item === "Our Data" && showDataDropdown && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50" style={{ animation: "fadeIn 0.2s ease-out forwards" }} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                  {dataItems.map((di) => <Link key={di.title} to={di.path} onClick={() => { navigationLockRef.current = true; setActiveTab("Our Data"); setTimeout(() => (navigationLockRef.current = false), 400); }} className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0e7bf5] transition-all duration-150 font-medium rounded-lg mx-2">{di.title}</Link>)}
                </div>
              )}
              {item === "Resources" && showResourcesDropdown && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50" style={{ animation: "fadeIn 0.2s ease-out forwards" }} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                  {resourceItems.map((ri) => <Link key={ri.title} to={ri.path} onClick={() => { navigationLockRef.current = true; setActiveTab("Resources"); setTimeout(() => (navigationLockRef.current = false), 400); }} className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0e7bf5] transition-all duration-150 font-medium rounded-lg mx-2">{ri.title}</Link>)}
                </div>
              )}
              {item === "Company" && showCompanyDropdown && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50" style={{ animation: "fadeIn 0.2s ease-out forwards" }} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                  {companyItems.map((ci) => <Link key={ci.title} to={ci.path} onClick={() => { navigationLockRef.current = true; setActiveTab("Company"); setTimeout(() => (navigationLockRef.current = false), 400); }} className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0e7bf5] transition-all duration-150 font-medium rounded-lg mx-2">{ci.title}</Link>)}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-6 text-base font-semibold tracking-tighter">
          <Link to="/signin" className="my-auto text-cefer-black hover:text-cefer-blue transition-colors">Sign In</Link>
          <div className="glow-heartbeat flex flex-col justify-center px-1.5 py-1.5 text-white bg-cefer-blue bg-opacity-10 rounded-[82px]">
            <div className="flex flex-col justify-center p-0.5 bg-cefer-blue bg-opacity-40 rounded-[82px]">
              <div className="flex flex-col justify-center px-1 py-1 bg-cefer-blue bg-opacity-60 rounded-[82px]">
            <Link to="/signup" className="px-7 py-3 bg-cefer-blue rounded-[82px] hover:bg-opacity-90 transition-opacity">Try Free</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="flex md:hidden w-11 h-11 flex-col items-center justify-center gap-[5px] rounded-xl bg-cefer-black"
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(3px)" }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm z-50 md:hidden flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Scrollable nav items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 pt-6 space-y-1">
          {mobileGroups.map((group) => (
            <div key={group.label}>
              <button
                className="w-full flex items-center justify-between px-4 py-3.5 font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#0e7bf5] transition-colors rounded-2xl"
                onClick={() => setMobileExpanded(mobileExpanded === group.label ? null : group.label)}
              >
                <span>{group.label}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-200 ${mobileExpanded === group.label ? "rotate-180" : ""}`}>
                  <path d="M3 5.5L8 10.5L13 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === group.label ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-4 pb-2 space-y-0.5">
                  {group.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:text-[#0e7bf5] hover:bg-blue-50 rounded-xl transition-colors font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e7bf5] opacity-60 shrink-0" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Pricing standalone */}
          <Link
            to="/pricing"
            className="w-full flex items-center justify-between px-4 py-3.5 font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#0e7bf5] transition-colors rounded-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Pricing</span>
            <div className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
