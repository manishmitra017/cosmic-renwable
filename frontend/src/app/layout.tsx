import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solar Battery Systems Australia | Cosmic Renewable Energy | Government Rebates Available",
  description: "Australia's leading solar battery specialists. Save up to $8,000 with government rebates on premium solar battery systems. Free quotes, professional installation, 5-year warranty. Serving Melbourne, Sydney, Brisbane nationwide.",
  keywords: "solar battery Australia, solar battery installation cost, Tesla Powerwall 3 Australia, government battery rebate 2025, solar battery Melbourne Sydney Brisbane, home battery systems, LG Chem battery, BYD battery, solar energy storage, battery backup power, solar battery rebate NSW Victoria, Powerwall installation Australia, solar battery price, off grid solar battery, residential battery storage, solar battery financing, CEC approved battery installer",
  authors: [{ name: "Cosmic Renewable Energy" }],
  creator: "Cosmic Renewable Energy",
  publisher: "Cosmic Renewable Energy",
  robots: "index, follow",
  openGraph: {
    title: "Solar Battery Systems Australia | Government Rebates Up To $8,000",
    description: "Premium solar battery systems with professional installation across Australia. Government rebates available. Free consultation and 5-year warranty included.",
    url: "https://cosmicrenewableenergy.com.au",
    siteName: "Cosmic Renewable Energy",
    images: [
      {
        url: "/company-logo.png",
        width: 1200,
        height: 630,
        alt: "Cosmic Renewable Energy - Solar Battery Systems Australia",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Battery Systems Australia | Cosmic Renewable Energy",
    description: "Premium solar battery systems with government rebates up to $8,000. Professional installation across Australia.",
    creator: "@CosmicRenewable",
    images: ["/company-logo.png"],
  },
  icons: {
    icon: '/company-logo.png',
    shortcut: '/company-logo.png',
    apple: '/company-logo.png',
  },
  metadataBase: new URL('https://cosmicrenewableenergy.com.au'),
  alternates: {
    canonical: "https://cosmicrenewableenergy.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={`${inter.className} antialiased`}>
        <Script
          id="google-maps"
          strategy="lazyOnload"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        />
        <Header />
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
