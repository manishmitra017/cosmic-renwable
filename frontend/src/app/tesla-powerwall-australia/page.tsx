'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Script from 'next/script'

// SVG Icon Components
const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const BatteryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
)

const CurrencyDollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const DevicePhoneMobileIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default function TeslaPowerwallAustralia() {
  const features = [
    {
      icon: BatteryIcon,
      title: "13.5kWh Capacity",
      description: "Enough to power most homes through the night"
    },
    {
      icon: BoltIcon,
      title: "97.5% Efficiency",
      description: "Industry-leading round-trip efficiency"
    },
    {
      icon: ShieldCheckIcon,
      title: "10 Year Warranty",
      description: "Comprehensive coverage for peace of mind"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Tesla App Control",
      description: "Monitor and control from anywhere"
    },
    {
      icon: SunIcon,
      title: "Storm Watch",
      description: "Auto-charges before severe weather"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Time-Based Control",
      description: "Maximize savings with smart scheduling"
    }
  ]

  const benefits = [
    "Full home backup during power outages",
    "Integrated solar inverter (no separate unit needed)",
    "Sleek, compact wall-mounted design",
    "Works with existing solar systems",
    "Compatible with Tesla Solar Roof",
    "OTA updates for new features",
    "VPP ready for grid services income",
    "24/7 monitoring via Tesla app"
  ]

  return (
    <div className="bg-white">
      <Script
        id="tesla-powerwall-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Tesla Powerwall 3 Australia",
          "description": "Tesla Powerwall 3 home battery system with professional installation across Australia",
          "brand": "Tesla",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "AUD",
            "price": "12000",
            "availability": "https://schema.org/InStock"
          }
        }`}
      </Script>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-[#0073b9] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/30">
              <StarIcon className="w-5 h-5 text-[#fee000]" />
              <span className="text-white font-semibold text-sm">Premium Battery System</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Tesla Powerwall 3 <span className="text-[#fee000]">Australia</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Australia&apos;s most advanced home battery system. 13.5kWh capacity, integrated inverter,
              smartphone control. From $12,000 installed with government rebates up to $4,600.
            </p>

            <div className="bg-white/10 px-6 py-3 rounded-lg inline-block mb-8 border border-[#fee000]/30">
              <span className="font-bold text-lg text-[#fee000]">Government Rebate: Save $4,600</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Tesla Powerwall Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="bg-white text-[#0073b9] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Tesla Specialists
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-full mb-6">
              <BoltIcon className="w-5 h-5 text-[#0073b9]" />
              <span className="text-[#0073b9] font-semibold text-sm">Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#333333] mb-4">
              Why Choose <span className="text-[#0073b9]">Powerwall 3?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:border-[#0073b9]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0073b9]/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-[#0073b9]" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">{feature.title}</h3>
                <p className="text-[#666666]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-full mb-6">
              <ShieldCheckIcon className="w-5 h-5 text-[#0073b9]" />
              <span className="text-[#0073b9] font-semibold text-sm">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#333333] mb-4">
              What You <span className="text-[#0073b9]">Get</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-full mb-6">
                <CurrencyDollarIcon className="w-5 h-5 text-[#0073b9]" />
                <span className="text-[#0073b9] font-semibold text-sm">Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#333333] mb-4">
                Tesla Powerwall 3 <span className="text-[#0073b9]">Pricing</span>
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
              <div className="mb-6">
                <div className="text-[#666666] text-lg mb-2">Starting from</div>
                <div className="text-5xl md:text-6xl font-bold text-[#333333] mb-2">$12,000</div>
                <div className="text-[#0073b9] font-semibold">Fully installed with rebates</div>
              </div>

              <div className="bg-[#0073b9]/10 rounded-lg p-4 mb-6 inline-block border border-[#0073b9]/20">
                <div className="text-sm text-[#666666] mb-1">Government rebate saves you</div>
                <div className="text-2xl font-bold text-[#0073b9]">Up to $4,600</div>
              </div>

              <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
                Price includes professional CEC-certified installation, 10-year warranty,
                and full system configuration. Finance options available.
              </p>

              <Link
                href="/quote"
                className="bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Your Custom Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#fee000] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#083941] mb-6">
              Ready for <span className="text-[#0073b9]">Energy Independence?</span>
            </h2>
            <p className="text-xl text-[#083941]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of Australian households powered by Tesla Powerwall
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-[#0073b9] text-white hover:bg-[#005a91] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="bg-white text-[#083941] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
