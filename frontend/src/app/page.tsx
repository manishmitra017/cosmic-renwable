'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import RebateBanner from '@/components/RebateBanner'
import CustomerReviews from '@/components/CustomerReviews'
import PromotionsCarousel from '@/components/PromotionsCarousel'
import CountdownBanner from '@/components/CountdownBanner'
import Script from 'next/script'

// SVG Icon Components
const RocketIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const DeviceIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const BatteryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const FireIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
)

const SnowflakeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5.636 5.636l12.728 12.728M3 12h18M5.636 18.364L18.364 5.636M8 4l4 4 4-4M8 20l4-4 4 4M4 8l4 4-4 4M20 8l-4 4 4 4" />
  </svg>
)

const WrenchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
)

const HomeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const GemIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const ShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const CurrencyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const LeafIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
  </svg>
)

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cosmic Renewable Energy",
    "description": "Australia's leading solar battery installation specialists. Premium solar battery systems with government rebates up to $8,000.",
    "url": "https://cosmicrenewableenergy.com.au",
    "telephone": "1300090984",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Galli Court",
      "addressLocality": "Hillside",
      "addressRegion": "Victoria",
      "postalCode": "3037",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.7299,
      "longitude": 144.7435
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00"
    ],
    "priceRange": "$$",
    "areaServed": "Australia",
    "serviceType": ["Solar Battery Installation", "Solar Panel Installation", "Hot Water Heat Pump", "HVAC Systems", "Solar Maintenance"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "927"
    },
    "sameAs": [
      "https://www.facebook.com/cosmicrenewableenergy",
      "https://www.instagram.com/cosmicrenewableenergy/",
      "https://x.com/CosmicRenewable",
      "https://www.linkedin.com/in/cosmic-renewable-energy-46899a379"
    ]
  }

  // Lightbox state for project images
  const [lightboxImage, setLightboxImage] = useState<{image: string, title: string} | null>(null)

  return (
    <div className="bg-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>

      {/* Countdown Timer Banner */}
      <CountdownBanner />

      {/* Government Rebate Banner */}
      <RebateBanner />

      {/* Contact Banner */}
      <section className="py-3 sm:py-4 bg-[#fee000] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mobile Layout */}
            <div className="flex flex-col items-center gap-2.5 sm:hidden">
              <div className="flex items-center gap-2 text-[#083941] font-bold text-sm">
                <RocketIcon className="w-4 h-4 text-[#0073b9]" />
                <span>Australia&apos;s #1 Solar Experts</span>
              </div>
              <div className="flex items-center gap-2 w-full max-w-xs">
                <a
                  href="tel:1300090984"
                  className="flex-1 bg-[#0073b9] text-white px-3 py-2.5 rounded-full font-bold text-xs shadow-lg flex items-center justify-center gap-1.5 hover:bg-[#005a91] hover:scale-105 transition-all"
                >
                  <PhoneIcon className="w-3.5 h-3.5" />
                  <span>1300 09 09 84</span>
                </a>
                <a
                  href="tel:+61422786100"
                  className="flex-1 bg-white text-[#0073b9] px-3 py-2.5 rounded-full font-bold text-xs shadow-lg flex items-center justify-center gap-1.5 hover:bg-gray-100 hover:scale-105 transition-all border border-[#0073b9]"
                >
                  <DeviceIcon className="w-3.5 h-3.5" />
                  <span>+61 422 786 100</span>
                </a>
              </div>
              <div className="text-[#083941] font-medium text-xs">
                Call Now for Instant Quote!
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6">
              <div className="text-[#083941] font-bold text-base md:text-xl flex items-center gap-2">
                <RocketIcon className="w-5 h-5 text-[#0073b9]" />
                <span>Australia&apos;s #1 Solar & Battery Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:1300090984"
                  className="bg-[#0073b9] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#005a91] transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                >
                  <PhoneIcon className="w-4 h-4" />
                  1300 09 09 84
                </a>
                <a
                  href="tel:+61422786100"
                  className="bg-white text-[#0073b9] px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 hover:scale-105 border border-[#0073b9]"
                >
                  <DeviceIcon className="w-4 h-4" />
                  +61 422 786 100
                </a>
              </div>
              <div className="text-[#083941] font-semibold text-sm md:text-base">
                Call Now for Instant Quote!
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-[#0073b9]">
        {/* Background with image overlay */}
        <div className="absolute inset-0">
          <Image
            src="/solarroof9.jpg"
            alt="Premium solar battery system installation on Australian home roof - Cosmic Renewable Energy"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0073b9]/90 via-[#0073b9]/70 to-[#0073b9]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-0">
          <div className="max-w-4xl">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BoltIcon className="w-4 h-4 text-[#fee000]" />
              <span className="text-white font-medium text-sm">Cosmic Renewable Energy</span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-3 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Solar Battery Systems
              <span className="block text-[#fee000] text-xl sm:text-3xl md:text-4xl lg:text-6xl mt-1 sm:mt-2">
                Australia Wide Installation
              </span>
            </motion.h1>

            <motion.div
              className="bg-[#fee000] text-[#083941] text-base sm:text-xl md:text-2xl lg:text-3xl font-bold px-4 sm:px-6 py-2.5 sm:py-4 rounded-xl mb-3 sm:mb-6 inline-block shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Starting from $2,480
            </motion.div>

            <motion.p
              className="text-sm sm:text-lg md:text-xl text-white/90 mb-5 sm:mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Australia&apos;s leading solar battery installation specialists. Save up to $8,000 with government rebates
              on premium home battery systems.
              <span className="hidden sm:inline"> Professional installation across Melbourne, Sydney, Brisbane and nationwide.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 mb-6 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/quote"
                  className="w-full sm:w-auto bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-bold text-center block sm:inline-block shadow-lg transition-all"
                >
                  Book Free Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="tel:1300090984"
                  className="w-full sm:w-auto bg-white text-[#0073b9] hover:bg-gray-100 px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-bold text-center block sm:inline-block flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Now: 1300 09 09 84
                </a>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 md:gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '5000+', label: 'Homes Powered' },
                { value: '10 Years', label: 'Warranty' },
                { value: '90%', label: 'Bill Reduction' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-2 sm:p-0">
                  <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#fee000]">{stat.value}</div>
                  <div className="text-white/80 text-[10px] sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promotions Carousel */}
      <PromotionsCarousel />

      {/* Special Offer Banner */}
      <section className="py-12 bg-[#efefef] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 max-w-4xl mx-auto border border-gray-200">
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#333333] mb-2 flex items-center justify-center gap-3">
                  <BoltIcon className="w-8 h-8 text-[#0073b9]" />
                  <span className="text-[#0073b9]">EXCLUSIVE LIMITED TIME OFFER</span>
                  <BoltIcon className="w-8 h-8 text-[#0073b9]" />
                </h2>
                <p className="text-lg text-[#666666]">
                  Don&apos;t miss out on our latest solar and battery package deals!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image
                    src="/survey1.png"
                    alt="Cosmic Renewable Energy Offer Survey 1"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image
                    src="/survey2.png"
                    alt="Cosmic Renewable Energy Offer Survey 2"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all"
                >
                  Claim This Offer Now
                </Link>
                <a
                  href="tel:1300090984"
                  className="bg-[#0073b9] text-white hover:bg-[#005a91] px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call for Details
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Battery Rebate Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6">
              Solar Battery Rebates Australia - <span className="text-[#0073b9]">Save $8,000</span>
            </h2>
            <p className="text-xl text-[#666666] mb-8 max-w-3xl mx-auto">
              Take advantage of the $2.3 Billion Australian Government Home Battery Program.
              Save up to $8,000 on premium solar battery systems with professional installation across Australia.
            </p>
            <div className="bg-[#efefef] rounded-xl p-8 max-w-2xl mx-auto border border-gray-200">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">How It Works</h3>
              <ul className="text-left text-[#444444] space-y-3">
                <li className="flex items-start">
                  <span className="text-[#0073b9] font-bold mr-3 text-xl">1.</span>
                  Choose from approved battery systems
                </li>
                <li className="flex items-start">
                  <span className="text-[#0073b9] font-bold mr-3 text-xl">2.</span>
                  Get up to 30% government discount
                </li>
                <li className="flex items-start">
                  <span className="text-[#0073b9] font-bold mr-3 text-xl">3.</span>
                  Professional installation included
                </li>
                <li className="flex items-start">
                  <span className="text-[#0073b9] font-bold mr-3 text-xl">4.</span>
                  Start saving on energy bills immediately
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-[#efefef] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6">
              Our <span className="text-[#0073b9]">Services</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Comprehensive solar and energy solutions for your home and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Solar Batteries',
                icon: BatteryIcon,
                description: 'Store excess energy for use day and night',
                image: '/batteryImage3.jpg'
              },
              {
                title: 'Solar Panels',
                icon: SunIcon,
                description: 'Premium solar panels for maximum efficiency',
                image: '/solarroof8.jpg'
              },
              {
                title: 'Hot Water Heat Pump',
                icon: FireIcon,
                description: 'Energy-efficient heating and cooling',
                image: '/inverterimage2.jpg'
              },
              {
                title: 'HVAC Systems',
                icon: SnowflakeIcon,
                description: 'Climate control solutions',
                image: '/solarroof10.jpg'
              },
              {
                title: 'Servicing',
                icon: WrenchIcon,
                description: 'Maintenance and support services',
                image: '/solarroof11.jpg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0073b9]/80 via-[#0073b9]/40 to-transparent flex items-center justify-center">
                    <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#333333] mb-2">{service.title}</h3>
                  <p className="text-[#666666] text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#333333] mb-6">
              Industry Leading <span className="text-[#0073b9]">Battery Brands</span>
            </h2>
            <p className="text-xl text-[#666666]">
              We partner with the world&apos;s most trusted battery manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Tesla', icon: BatteryIcon },
              { name: 'Eveready', icon: BoltIcon },
              { name: 'AlphaESS', icon: StarIcon },
              { name: 'Hive Energy', icon: HomeIcon },
              { name: 'Ambrion', icon: GemIcon }
            ].map((brand, index) => (
              <motion.div
                key={index}
                className="bg-[#efefef] rounded-lg p-6 text-center border border-gray-200 hover:border-[#0073b9] hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-[#0073b9] rounded-full flex items-center justify-center">
                  <brand.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#333333]">{brand.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0073b9] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose <span className="text-[#fee000]">Cosmic Renewable Energy?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '5000+ Installations',
                description: 'Trusted by thousands of satisfied customers across Australia',
                icon: HomeIcon
              },
              {
                title: 'Safety First',
                description: 'Fully licensed, insured, and safety-certified installations',
                icon: ShieldIcon
              },
              {
                title: '5-Star Reviews',
                description: 'Consistently rated as the top solar installer in the region',
                icon: StarIcon
              },
              {
                title: 'Best Prices',
                description: 'Competitive pricing with transparent, no-hidden-fees quotes',
                icon: CurrencyIcon
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#fee000] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-[#083941]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Our Work Portfolio */}
      <section className="py-20 bg-[#efefef] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6">
              Our <span className="text-[#0073b9]">Completed Projects</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              See the quality of our work across thousands of successful solar installations.
              From residential rooftops to commercial systems, we deliver excellence every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                image: '/solarroof.jpg',
                title: 'Residential Solar Installation',
                description: '6.6kW system with premium panels',
                location: 'Melbourne, VIC'
              },
              {
                image: '/solarroof2.jpg',
                title: 'Large Scale Residential',
                description: '10kW system with battery storage',
                location: 'Sydney, NSW'
              },
              {
                image: '/solarroof3.jpg',
                title: 'Modern Home Solar',
                description: '8.8kW high-efficiency installation',
                location: 'Brisbane, QLD'
              },
              {
                image: '/solarroof4.jpg',
                title: 'Commercial Solar Project',
                description: '50kW commercial installation',
                location: 'Perth, WA'
              },
              {
                image: '/solarroof5.jpg',
                title: 'Tile Roof Installation',
                description: '7.2kW system with micro-inverters',
                location: 'Adelaide, SA'
              },
              {
                image: '/solarroof6.jpg',
                title: 'Multi-Story Installation',
                description: '12kW split-level system',
                location: 'Canberra, ACT'
              },
              {
                image: '/solarroof7.jpg',
                title: 'Warehouse Solar System',
                description: '100kW commercial installation',
                location: 'Gold Coast, QLD'
              },
              {
                image: '/solarroof8.jpg',
                title: 'Premium Residential',
                description: '9.9kW with battery backup',
                location: 'Newcastle, NSW'
              },
              {
                image: '/batteryImage1.jpg',
                title: 'Tesla Battery Installation',
                description: '13.5kWh Powerwall system',
                location: 'Geelong, VIC'
              },
              {
                image: '/batteryImage2.jpg',
                title: 'Home Battery Storage',
                description: '10kWh backup power system',
                location: 'Hobart, TAS'
              },
              {
                image: '/batteryImage3.jpg',
                title: 'Premium Battery Setup',
                description: '20kWh commercial storage',
                location: 'Darwin, NT'
              },
              {
                image: '/inverterImage1.jpg',
                title: 'Inverter Installation',
                description: 'Premium German inverters',
                location: 'Wollongong, NSW'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setLightboxImage({ image: project.image, title: project.title })}
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <div className="bg-[#fee000] text-[#083941] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-1 sm:mb-2 inline-block">
                      Completed
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 line-clamp-2">{project.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-1">{project.description}</p>
                    <p className="text-[#fee000] text-xs mt-1 line-clamp-1 flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3" />
                      {project.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-[#666666] mb-6">
                Over 5,000 satisfied customers have trusted us with their solar installations.
                Let us design the perfect system for your property.
              </p>
              <Link
                href="/quote"
                className="bg-[#0073b9] text-white hover:bg-[#005a91] px-8 py-4 rounded-lg text-lg font-semibold inline-block shadow-lg transition-all"
              >
                Get Your Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Showcase */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6">
              Why Solar Increases Your <span className="text-[#0073b9]">Property Value</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Solar installations don&apos;t just save you money on electricity bills - they significantly increase your property value and appeal to future buyers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {[
              {
                title: "Property Value Increase",
                percentage: "+15%",
                description: "Solar homes sell for an average of 15% more than comparable non-solar properties",
                image: "/solarroof3.jpg",
                features: [
                  "Immediate increase in home valuation",
                  "Higher resale value and faster sales",
                  "Attractive to environmentally conscious buyers",
                  "Premium market positioning"
                ]
              },
              {
                title: "Energy Bill Savings",
                percentage: "90%",
                description: "Reduce your electricity bills by up to 90% with our premium solar systems",
                image: "/solarroof5.jpg",
                features: [
                  "Immediate reduction in monthly bills",
                  "Protection against rising energy costs",
                  "Feed-in tariffs for excess power",
                  "Return on investment within 3-5 years"
                ]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-gray-200 shadow-lg">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-[#fee000] text-[#083941] text-4xl sm:text-5xl font-bold px-4 py-2 rounded-lg shadow-lg">
                      {benefit.percentage}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-white/90 text-lg">{benefit.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {benefit.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#0073b9] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-[#444444]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Environmental Impact",
                metric: "25 Tons",
                description: "CO2 reduced per year with average system",
                image: "/solarroof7.jpg",
                icon: LeafIcon
              },
              {
                title: "Energy Independence",
                metric: "100%",
                description: "Self-sufficient during daylight hours",
                image: "/batteryImage2.jpg",
                icon: BoltIcon
              },
              {
                title: "Government Incentives",
                metric: "$8,000",
                description: "Average rebates and incentives available",
                image: "/inverterImage1.jpg",
                icon: CurrencyIcon
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-[#0073b9] rounded-full flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-3xl font-bold text-[#fee000] mb-1">{item.metric}</div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#0073b9] rounded-2xl p-8 sm:p-12">
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Start Increasing Your Property Value Today
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of homeowners who have increased their property value while saving on energy costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] px-8 py-4 rounded-lg text-lg font-semibold inline-block shadow-lg transition-all"
                >
                  Get Free Property Assessment
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-[#0073b9] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold inline-block shadow-lg transition-all"
                >
                  Calculate My Savings
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Solar News / Articles */}
      <section id="solar-news" className="py-16 bg-[#efefef] relative overflow-hidden scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#333333] mb-6">
              Latest <span className="text-[#0073b9]">Solar News</span>
            </h2>
            <p className="text-xl text-[#666666]">
              Stay informed with the latest developments in solar technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: '$2.3 Billion Cheaper Home Batteries Program Now Live',
                description: 'Government launches massive battery rebate program offering up to 30% discounts on home battery systems.',
                image: '/batteryImage3.jpg',
                date: 'August 2025',
                link: '/articles/cheaper-home-batteries-program'
              },
              {
                title: 'How Solar Households Can Maximize Government Benefits',
                description: 'Complete guide to accessing federal and state solar incentives, rebates, and the new battery program.',
                image: '/solarroof8.jpg',
                date: 'August 2025',
                link: '/articles/maximize-government-benefits'
              },
              {
                title: 'Battery Storage Revolution: 5kWh to 100kWh Systems Eligible',
                description: 'New program covers batteries from small residential to large commercial installations with CEC approval.',
                image: '/batteryImage2.jpg',
                date: 'August 2025',
                link: '/articles/battery-storage-revolution'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#0073b9] font-medium mb-2">{article.date}</div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-3">{article.title}</h3>
                  <p className="text-[#666666] mb-4">{article.description}</p>
                  <Link
                    href={article.link}
                    className="text-[#0073b9] font-medium hover:text-[#005a91] transition-colors flex items-center gap-2"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Articles Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/articles"
              className="inline-flex items-center gap-3 bg-[#0073b9] text-white hover:bg-[#005a91] px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all"
            >
              <span>View All Articles</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#fee000] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#083941] mb-6">
              Ready to Start Your <span className="text-[#0073b9]">Solar Journey?</span>
            </h2>
            <p className="text-xl text-[#083941]/80 mb-8 max-w-2xl mx-auto">
              Get a personalized quote and discover how much you can save with solar and battery systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-[#0073b9] text-white hover:bg-[#005a91] px-8 py-4 rounded-lg text-lg font-semibold inline-block shadow-lg transition-all"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300090984"
                className="bg-white text-[#0073b9] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <PhoneIcon className="w-5 h-5" />
                Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal for Project Images */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image container */}
            <motion.div
              className="relative w-full max-w-5xl max-h-[85vh] aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <h3 className="text-xl font-bold text-white">{lightboxImage.title}</h3>
              </div>
            </motion.div>

            {/* Click hint */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              Click anywhere to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
