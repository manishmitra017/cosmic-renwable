'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

export default function ProductShowcase() {
  return (
    <section className="py-8 sm:py-12 bg-[#083941]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#fee000]/30 bg-[#fee000]/10 mb-3">
            <StarIcon className="w-4 h-4 text-[#fee000]" />
            <span className="text-[#fee000] text-sm font-semibold tracking-wide uppercase">Featured Products</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
            Premium Battery Brands We <span className="text-[#fee000]">Trust</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* FoxESS Banner - Top Selling */}
          <motion.div
            className="group rounded-2xl overflow-hidden border-2 border-[#fee000]/40 shadow-2xl bg-[#0a2e35] flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[280px] sm:h-[340px] overflow-hidden">
              <Image
                src="/banners/foxess.jpeg"
                alt="FoxESS Battery Storage System - Top Selling Product at Cosmic Renewable Energy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Top Selling Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-[#fee000] text-[#083941] px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5">
                  <StarIcon className="w-4 h-4" />
                  TOP SELLING
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">FoxESS Battery Systems</h3>
              <p className="text-white/70 text-sm sm:text-base mb-4">
                Our top-selling battery brand. Trusted by thousands of Australian homeowners for reliable energy storage.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <Link
                  href="/quote"
                  className="bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] px-5 py-2.5 rounded-lg text-sm font-bold text-center transition-all inline-flex items-center justify-center gap-2"
                >
                  Get a Quote
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a
                  href="tel:1300090984"
                  className="bg-white/10 text-white hover:bg-white/20 px-5 py-2.5 rounded-lg text-sm font-bold text-center transition-all inline-flex items-center justify-center gap-2 border border-white/20"
                >
                  <PhoneIcon className="w-4 h-4" />
                  1300 09 09 84
                </a>
                <a
                  href="tel:+610422786100"
                  className="bg-white/10 text-white hover:bg-white/20 px-5 py-2.5 rounded-lg text-sm font-bold text-center transition-all inline-flex items-center justify-center gap-2 border border-white/20"
                >
                  <PhoneIcon className="w-4 h-4" />
                  +61 422 786 100
                </a>
              </div>
            </div>
          </motion.div>

          {/* GoodWe Banner - Coming Soon */}
          <motion.div
            className="group rounded-2xl overflow-hidden border-2 border-[#0073b9]/40 shadow-2xl bg-[#0a2e35] flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[280px] sm:h-[340px] overflow-hidden bg-white">
              <Image
                src="/banners/goodwe-all-in-one.png"
                alt="GoodWe ESA All-in-One Three-Phase Energy Storage System - Coming Soon to Cosmic Renewable Energy"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500 p-4"
              />
              {/* Coming Soon Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-[#0073b9] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  COMING SOON
                </div>
              </div>
              {/* CEC Approved Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white/90 text-[#0073b9] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border border-[#0073b9]/20">
                  CEC APPROVED
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">GoodWe ESA All-in-One</h3>
              <p className="text-white/70 text-sm sm:text-base mb-4">
                Three-phase energy storage system. 5-108kWh capacity. Whole-home backup with ultra-fast switching.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <Link
                  href="/articles/goodwe-esa-three-phase-all-in-one-energy-storage"
                  className="bg-[#0073b9] text-white hover:bg-[#005a91] px-5 py-2.5 rounded-lg text-sm font-bold text-center transition-all inline-flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a
                  href="tel:1300090984"
                  className="bg-white/10 text-white hover:bg-white/20 px-5 py-2.5 rounded-lg text-sm font-bold text-center transition-all inline-flex items-center justify-center gap-2 border border-white/20"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Register Interest
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
