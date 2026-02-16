import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<Placeholder />} />
          <Route path="/signup" element={<Placeholder />} />
          <Route path="/terms" element={<Placeholder />} />
          <Route path="/privacy" element={<Placeholder />} />
          <Route path="/do-not-sell" element={<Placeholder />} />
          <Route path="/prospector" element={<Placeholder />} />
          <Route path="/data-enrichment" element={<Placeholder />} />
          <Route path="/chrome-extension" element={<Placeholder />} />
          <Route path="/api-docs" element={<Placeholder />} />
          <Route path="/email-verification" element={<Placeholder />} />
          <Route path="/technographics" element={<Placeholder />} />
          <Route path="/email-finder" element={<Placeholder />} />
          <Route path="/intent-data" element={<Placeholder />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
