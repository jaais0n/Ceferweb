"use client";

import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";
import { NavProgressBar } from "@/components/cefer/NavProgressBar";
import { PageTransition } from "@/components/cefer/PageTransition";
import { AnnouncementBar } from "@/components/cefer/AnnouncementBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavProgressBar />
      <AnnouncementBar />
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
