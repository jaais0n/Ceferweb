"use client";

import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnnouncementBar } from "@/components/cefer/AnnouncementBar";
import { Loading } from "@/components/cefer/Loading";
import { NavProgressBar } from "@/components/cefer/NavProgressBar";

// Deferred — not visible/needed on first paint
const Toaster = dynamic(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = dynamic(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <NavProgressBar />
        <AnnouncementBar />
        <Loading />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
