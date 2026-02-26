import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../client/global.css";
import { Providers } from "./providers";
import { AppShell } from "./shell";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cefer - B2B Sales Intelligence Platform",
  description:
    "Find verified contacts, enrich your CRM, and close more deals with Cefer's B2B data platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="preload" href="/Ceferlogo.png" as="image" />
      </head>
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
