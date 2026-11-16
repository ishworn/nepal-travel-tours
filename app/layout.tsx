import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Nepal Trekking and Tour Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "TrekWithAmrit",
    "Nepal Trekking",
    "Everest Base Camp Trek",
    "Annapurna Base Camp",
    "Mardi Himal Trek",
    "Langtang Valley Trek",
    "Manaslu Circuit Trek",
    "Ghorepani Poon Hill",
    "Gokyo Lakes Trek",
    "Upper Mustang Trek",
    "Nepal Tour Packages",
    "Local Guide Nepal",
  ],
  authors: [{ name: "Amrit" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Nepal Trekking & Tours`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Nepal Himalayan Treks & Tours`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Nepal Trekking & Tours`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-white text-stone-900 selection:bg-orange-500 selection:text-white font-sans">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Floating WhatsApp Contact Button on every page */}
        <FloatingWhatsApp />

        {/* STRICT REQUIREMENT: Completely removed the footer section */}
      </body>
    </html>
  );
}
