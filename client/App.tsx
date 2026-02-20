import "./global.css";

import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Loading } from "@/components/cefer/Loading";
import { AnnouncementBar } from "@/components/cefer/AnnouncementBar";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

// Lazy-load all secondary pages for code-splitting
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const Prospects = lazy(() => import("./pages/Prospects"));
const DataEnrichment = lazy(() => import("./pages/DataEnrichment"));
const ChromeExtension = lazy(() => import("./pages/ChromeExtension"));
const API = lazy(() => import("./pages/API"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
const Technographics = lazy(() => import("./pages/Technographics"));
const EmailFinder = lazy(() => import("./pages/EmailFinder"));
const IntentData = lazy(() => import("./pages/IntentData"));
const DataPointsCoverage = lazy(() => import("./pages/DataPointsCoverage"));
const DataDeliveryAccess = lazy(() => import("./pages/DataDeliveryAccess"));
const DataQuality = lazy(() => import("./pages/DataQuality"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const Blog = lazy(() => import("./pages/Blog"));
const Careers = lazy(() => import("./pages/Careers"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const DoNotSell = lazy(() => import("./pages/DoNotSell"));

/** Scroll to top on every route navigations */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnnouncementBar />
            <Loading />
            <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/demo" element={<Placeholder />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/do-not-sell" element={<DoNotSell />} />
              <Route path="/prospector" element={<Prospects />} />
              <Route path="/data-enrichment" element={<DataEnrichment />} />
              <Route path="/chrome-extension" element={<ChromeExtension />} />
              <Route path="/api-docs" element={<API />} />
              <Route path="/email-verification" element={<EmailVerification />} />
              <Route path="/technographics" element={<Technographics />} />
              <Route path="/email-finder" element={<EmailFinder />} />
              <Route path="/intent-data" element={<IntentData />} />
              <Route path="/data-points-coverage" element={<DataPointsCoverage />} />
              <Route path="/data-delivery-access" element={<DataDeliveryAccess />} />
              <Route path="/data-quality" element={<DataQuality />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
