'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Solar Battery Comparison 2025
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100">
              Compare top solar battery brands side-by-side
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-16 bg-white">
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
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
                  <h3 className="text-2xl font-bold">{battery.name}</h3>
                  <div className="text-2xl font-bold mt-2">{battery.price}</div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Capacity:</span>
                    <span>{battery.capacity}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Warranty:</span>
                    <span>{battery.warranty}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Efficiency:</span>
                    <span>{battery.efficiency}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Backup:</span>
                    <span>{battery.backup}</span>
                  </div>

                  <div className="pt-3">
                    <p className="font-semibold text-green-600 mb-2">Pros:</p>
                    <ul className="text-sm space-y-1">
                      {battery.pros.map((pro, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <p className="font-semibold text-red-600 mb-2">Cons:</p>
                    <ul className="text-sm space-y-1">
                      {battery.cons.map((con, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-600 mr-2">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 bg-blue-50 rounded-lg p-3">
                    <p className="font-semibold text-sm mb-1">Best For:</p>
                    <p className="text-sm text-gray-700">{battery.bestFor}</p>
                  </div>

                  <Link
                    href="/quote"
                    className="block w-full bg-indigo-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mt-4"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left">Feature</th>
                  {batteries.map((battery, index) => (
                    <th key={index} className="px-6 py-4 text-center">{battery.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Price (After Rebates)</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center font-bold text-green-600 text-xl">{battery.price}</td>
                  ))}
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-4 font-semibold">Capacity</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center">{battery.capacity}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Warranty</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center">{battery.warranty}</td>
                  ))}
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-4 font-semibold">Round-Trip Efficiency</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center">{battery.efficiency}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Backup Power</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center">{battery.backup}</td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold align-top">Pros</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4">
                      <ul className="text-sm space-y-1">
                        {battery.pros.map((pro, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold align-top">Cons</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4">
                      <ul className="text-sm space-y-1">
                        {battery.cons.map((con, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-600 mr-2">✗</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 font-semibold align-top">Best For</td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-sm">{battery.bestFor}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  {batteries.map((battery, index) => (
                    <td key={index} className="px-6 py-4 text-center">
                      <Link
                        href="/quote"
                        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                      >
                        Get Quote
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Not Sure Which Battery is Right for You?
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get expert advice and a personalized recommendation based on your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-50 transition-colors shadow-xl"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:1300090984"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              📞 1300 09 09 84
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
