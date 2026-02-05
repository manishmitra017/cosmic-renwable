'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// SVG Icon Components
const ScaleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const XMarkIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

const QuestionMarkCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

export default function BatteryComparison() {
  const batteries = [
    {
      name: "Tesla Powerwall 3",
      price: "From $13,990",
      capacity: "13.5kWh",
      warranty: "10 years",
      efficiency: "97.5%",
      backup: "Yes - Full Home",
      pros: ["Premium brand", "Tesla app", "Sleek design", "Best efficiency"],
      cons: ["Higher upfront cost", "Limited availability"],
      bestFor: "Premium buyers wanting the best technology and Tesla ecosystem integration"
    },
    {
      name: "Alpha ESS",
      price: "From $8,490",
      capacity: "10kWh (expandable)",
      warranty: "10 years",
      efficiency: "95%",
      backup: "Yes - UPS capable",
      pros: ["Great value", "Modular design", "LiFePO4 chemistry", "VPP ready"],
      cons: ["Less brand recognition"],
      bestFor: "Value-conscious buyers wanting reliable, expandable systems"
    },
    {
      name: "Sungrow",
      price: "From $9,200",
      capacity: "9.6-12.8kWh",
      warranty: "10 years",
      efficiency: "95%",
      backup: "Yes",
      pros: ["Proven reliability", "Good warranty", "Multiple sizes"],
      cons: ["Heavier unit"],
      bestFor: "Households wanting established brand with proven track record"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-[#0073b9] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <ScaleIcon className="w-5 h-5 text-[#fee000]" />
              <span className="text-[#fee000] font-semibold text-sm">Side-by-Side Comparison</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
              Solar Battery <span className="text-[#fee000]">Comparison</span> <span className="text-[#fee000]">2025</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Compare top solar battery brands side-by-side
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 sm:py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Cards */}
          <div className="block lg:hidden space-y-6">
            {batteries.map((battery, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#0073b9] p-4 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-white">{battery.name}</h3>
                  <div className="text-2xl font-bold mt-2 text-[#fee000]">{battery.price}</div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-[#666666]">Capacity:</span>
                    <span className="text-[#333333]">{battery.capacity}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-[#666666]">Warranty:</span>
                    <span className="text-[#333333]">{battery.warranty}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-[#666666]">Efficiency:</span>
                    <span className="text-[#333333]">{battery.efficiency}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-[#666666]">Backup:</span>
                    <span className="text-[#333333]">{battery.backup}</span>
                  </div>

                  <div className="pt-3">
                    <p className="font-semibold text-[#0073b9] mb-2">Pros:</p>
                    <ul className="text-sm space-y-1">
                      {battery.pros.map((pro, i) => (
                        <li key={i} className="flex items-start text-[#444444]">
                          <CheckIcon className="w-4 h-4 text-[#0073b9] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <p className="font-semibold text-red-500 mb-2">Cons:</p>
                    <ul className="text-sm space-y-1">
                      {battery.cons.map((con, i) => (
                        <li key={i} className="flex items-start text-[#444444]">
                          <XMarkIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="font-semibold text-sm mb-1 text-[#0073b9]">Best For:</p>
                    <p className="text-sm text-[#444444]">{battery.bestFor}</p>
                  </div>

                  <Link
                    href="/quote"
                    className="block w-full bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] text-center px-6 py-3 rounded-lg font-semibold mt-4 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Table */}
          <div className="hidden lg:block overflow-x-auto">
            <motion.table
              className="w-full bg-white rounded-xl shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <thead>
                <tr className="bg-[#0073b9]">
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  {batteries.map((battery, index) => (
                    <th key={index} className="px-6 py-4 text-center text-white font-semibold">{battery.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#666666]">Price (After Rebates)</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center font-bold text-[#0073b9] text-xl">{battery.price}</td>
                  ))}
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold text-[#666666]">Capacity</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center text-[#333333]">{battery.capacity}</td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#666666]">Warranty</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center text-[#333333]">{battery.warranty}</td>
                  ))}
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold text-[#666666]">Round-Trip Efficiency</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center text-[#333333]">{battery.efficiency}</td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#666666]">Backup Power</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center text-[#333333]">{battery.backup}</td>
                  ))}
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold text-[#666666] align-top">Pros</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4">
                      <ul className="text-sm space-y-1">
                        {battery.pros.map((pro, i) => (
                          <li key={i} className="flex items-start text-[#444444]">
                            <CheckIcon className="w-4 h-4 text-[#0073b9] mr-2 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#666666] align-top">Cons</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4">
                      <ul className="text-sm space-y-1">
                        {battery.cons.map((con, i) => (
                          <li key={i} className="flex items-start text-[#444444]">
                            <XMarkIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold text-[#666666] align-top">Best For</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-[#444444]">{battery.bestFor}</td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"></td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center">
                      <Link
                        href="/quote"
                        className="inline-block bg-[#fee000] text-[#083941] hover:bg-[#e5ca00] px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Get Quote
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-[#fee000] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#083941]/10 px-4 py-2 rounded-full mb-6">
              <QuestionMarkCircleIcon className="w-5 h-5 text-[#083941]" />
              <span className="text-[#083941] font-semibold text-sm">Need Help Deciding?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#083941] mb-4 sm:mb-6">
              Not Sure Which Battery is <span className="text-[#0073b9]">Right for You?</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#083941]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get expert advice and a personalized recommendation based on your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-[#083941] text-white hover:bg-[#0a4a54] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors"
              >
                Get Free Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="bg-[#0073b9] text-white hover:bg-[#005a91] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
