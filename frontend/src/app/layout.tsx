import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmic Renewable Energy - Solar Solutions",
  description: "Leading provider of solar energy solutions for homes and businesses. Professional installation, consultation, and ongoing support.",
  icons: {
    icon: '/company-logo.png',
    shortcut: '/company-logo.png',
    apple: '/company-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        ></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16 sm:pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
