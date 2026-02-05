'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// SVG Icons
const SunIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const CurrencyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const BoltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const SparklesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const BatteryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h14a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm18 4v2" />
  </svg>
)

const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const MapPinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const GiftIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
)

const adelaideSuburbs = [
  'Adelaide CBD', 'North Adelaide', 'Norwood', 'Kent Town', 'Walkerville', 'Prospect',
  'Glenelg', 'Brighton', 'Seacliff', 'Hallet Cove', 'Marino', 'Christies Beach',
  'Mawson Lakes', 'Salisbury', 'Parafield', 'Elizabeth', 'Munno Para', 'Smithfield',
  'Marion', 'Mitchell Park', 'Clovelly Park', 'Edwardstown', 'Plympton', 'Camden Park',
  'Modbury', 'Tea Tree Gully', 'Hope Valley', 'Banksia Park', 'Greenwith', 'Golden Grove',
  'Morphett Vale', 'Aberfoyle Park', 'Flagstaff Hill', 'McLaren Vale', 'Willunga', 'Aldinga'
]

export default function SolarBatteryAdelaide() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0073b9]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <GiftIcon className="w-5 h-5 text-[#fee000]" />
              <span className="text-[#fee000] font-semibold">SA Government Rebates Up to $3,000</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Solar Battery Installation</span>
              <br />
              <span className="text-[#fee000]">Adelaide, SA</span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              South Australia has Australia&apos;s highest electricity prices. Battery storage is essential for Adelaide homeowners. Join 1,500+ SA households already saving with Cosmic Renewable Energy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] inline-flex items-center gap-2 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Your Free Adelaide Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="bg-white text-[#0073b9] hover:bg-gray-100 inline-flex items-center gap-2 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Adelaide Needs Batteries */}
      <section className="relative py-20 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
              Why Adelaide Homes Need <span className="text-[#0073b9]">Battery Storage</span>
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              South Australia&apos;s energy landscape makes solar batteries a necessity for Adelaide homeowners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: SunIcon,
                title: "Premium Solar Conditions",
                description: "Adelaide enjoys excellent year-round sunshine with low rainfall - ideal for solar battery efficiency",
                color: "text-[#0073b9]"
              },
              {
                icon: CurrencyIcon,
                title: "Highest Power Prices",
                description: "SA has Australia's highest electricity prices (35-40c/kWh). Batteries provide massive savings",
                color: "text-[#0073b9]"
              },
              {
                icon: BoltIcon,
                title: "Grid Stability",
                description: "Adelaide's grid experiences strain during heatwaves. Battery backup ensures continuous power",
                color: "text-[#0073b9]"
              },
              {
                icon: GiftIcon,
                title: "$3,000 SA Rebate",
                description: "South Australian residents can access up to $3,000 in government battery rebates",
                color: "text-[#0073b9]"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#0073b9]/10 mb-4 ${benefit.color}`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">{benefit.title}</h3>
                <p className="text-[#666666] text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
              Adelaide Battery <span className="text-[#0073b9]">Packages</span>
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Prices include SA government rebates up to $3,000 with full installation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
            >
              <div className="text-center mb-6">
                <BatteryIcon className="w-12 h-12 text-[#0073b9] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#333333] mb-2">Essential</h3>
                <p className="text-[#666666] text-sm">Perfect for smaller Adelaide homes</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#333333]">$5,100</span>
                <span className="text-[#666666] ml-2">after rebate</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['5kWh capacity', 'Single phase', '10-year warranty', 'Backup power ready', 'Full installation'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#444444]">
                    <CheckIcon className="w-5 h-5 text-[#0073b9] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="bg-[#0073b9] text-white hover:bg-[#005a91] w-full text-center block py-3 rounded-lg font-semibold transition-colors">
                Get Adelaide Quote
              </Link>
            </motion.div>

            {/* Standard Package - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white rounded-xl shadow-xl border-2 border-[#0073b9] p-8 transform md:scale-105"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-[#0073b9] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <StarIcon className="w-4 h-4" />
                  MOST POPULAR
                </div>
              </div>
              <div className="text-center mb-6">
                <BatteryIcon className="w-12 h-12 text-[#0073b9] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#333333] mb-2">Standard</h3>
                <p className="text-[#666666] text-sm">Ideal for average Adelaide households</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#333333]">$8,900</span>
                <span className="text-[#666666] ml-2">after rebate</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['10kWh capacity', 'Single/Three phase', '10-year warranty', 'Full backup power', 'Modular expansion ready', 'Smart monitoring app'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#444444]">
                    <CheckIcon className="w-5 h-5 text-[#0073b9] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] w-full text-center block py-3 rounded-lg font-semibold transition-colors">
                Get Adelaide Quote
              </Link>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
            >
              <div className="text-center mb-6">
                <BatteryIcon className="w-12 h-12 text-[#0073b9] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#333333] mb-2">Premium</h3>
                <p className="text-[#666666] text-sm">Maximum independence for larger homes</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#333333]">$14,100</span>
                <span className="text-[#666666] ml-2">after rebate</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['13.5kWh Tesla Powerwall', 'Three phase', '10-year warranty', 'Tesla app monitoring', 'Full home backup', 'Premium installation'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#444444]">
                    <CheckIcon className="w-5 h-5 text-[#0073b9] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="bg-[#0073b9] text-white hover:bg-[#005a91] w-full text-center block py-3 rounded-lg font-semibold transition-colors">
                Get Adelaide Quote
              </Link>
            </motion.div>
          </div>

          <p className="text-center text-[#666666] mt-8 text-sm">
            *Prices include installation and SA rebates. Final price depends on site assessment and system selection.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative py-20 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPinIcon className="w-6 h-6 text-[#0073b9]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#333333]">
                Adelaide <span className="text-[#0073b9]">Service Areas</span>
              </h2>
            </div>
            <p className="text-[#666666] max-w-2xl mx-auto">
              We install solar batteries across the entire Adelaide metropolitan area and surrounding regions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {adelaideSuburbs.map((suburb, index) => (
                <div
                  key={index}
                  className="text-center py-2 px-3 rounded-lg bg-[#efefef] hover:bg-[#e0e0e0] transition-colors"
                >
                  <span className="text-[#444444] text-sm">{suburb}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-[#666666] mt-6 text-sm">
              Don&apos;t see your suburb? We service all Greater Adelaide areas. <Link href="/contact" className="text-[#0073b9] hover:underline">Contact us</Link> to confirm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#fee000]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SparklesIcon className="w-12 h-12 text-[#083941] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#083941] mb-4">
              Ready to Beat Adelaide&apos;s <span className="text-[#0073b9]">High Power Prices</span>?
            </h2>
            <p className="text-xl text-[#083941]/80 mb-8">
              Join 1,500+ Adelaide homeowners who have made the switch to solar battery storage. Get your free, no-obligation quote today and claim your $3,000 rebate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="bg-[#0073b9] text-white hover:bg-[#005a91] inline-flex items-center gap-2 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Free Adelaide Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="bg-[#083941] text-white hover:bg-[#062d33] inline-flex items-center gap-2 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
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
