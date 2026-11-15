import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Mono, Manrope, Playfair_Display } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Subhra Jyoti Mishra | Computational Astrophysics & Scientific ML",
  description: "Research and selected work by Subhra Jyoti Mishra in computational astrophysics, scientific machine learning, forecasting, and applied data science.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Subhra Jyoti Mishra | Computational Astrophysics & Scientific ML",
    description: "Computational astrophysics, scientific machine learning, forecasting, and applied data science.",
    type: "website",
    images: [{ url: "/images/subhra-jyoti.webp", width: 601, height: 800, alt: "Subhra Jyoti Mishra" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/subhra-jyoti.webp"] },
};

export const viewport: Viewport = { themeColor: "#090a0e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} ${mono.variable}`}>
        <a className="skip-link" href="#top">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
