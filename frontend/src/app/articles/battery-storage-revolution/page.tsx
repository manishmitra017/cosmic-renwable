'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BatteryStorageRevolutionArticle() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Banner */}
      <section className="py-3 sm:py-4 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6">
              <div className="text-white font-bold text-base md:text-xl flex items-center gap-2">
                <span>Find Out If Your Battery Qualifies</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:1300090984"
                  className="bg-white text-orange-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-orange-50 transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                >
                  Call 1300 09 09 84
                </a>
              </div>
            </div>
            <div className="sm:hidden text-white font-bold text-sm">
              Call 1300 09 09 84 for Battery Advice
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Header */}
      <article>
        <header className="relative py-12 sm:py-20 bg-gradient-to-br from-green-600 to-emerald-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Link href="/articles" className="text-green-200 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Articles
                </Link>
                <span className="text-green-300">|</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Industry News</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Battery Storage Revolution: 5kWh to 100kWh Systems Now Eligible
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Understanding CEC approval requirements and which battery systems qualify for the federal rebate
              </p>
              <div className="flex items-center justify-center gap-4 text-green-200">
                <span>August 2025</span>
                <span>|</span>
                <span>7 min read</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/batteryImage1.jpg"
                  alt="Battery storage systems - CEC approved products"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Key Takeaway Box */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl mb-10">
              <h2 className="text-xl font-bold text-green-800 mb-3">Key Takeaway</h2>
              <p className="text-green-700 text-lg">
                The Cheaper Home Batteries Program covers a wide range of battery sizes from <strong>5kWh to 100kWh</strong>,
                but only batteries on the <strong>CEC approved product list</strong> and installed by accredited
                professionals qualify for the rebate.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Battery Size Requirements
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The Cheaper Home Batteries Program applies to battery systems with a <strong>nominal capacity between
                5kWh and 100kWh</strong>. The nominal capacity is the maximum amount of energy a battery can store at
                full charge - typically the capacity shown on the product label.
              </p>

              {/* Capacity Range Visual */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white mb-10">
                <h3 className="text-2xl font-bold mb-6 text-center">Eligible Capacity Range</h3>
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold">5kWh</div>
                    <div className="text-green-100">Minimum</div>
                  </div>
                  <div className="flex-1 mx-8 h-4 bg-white/30 rounded-full relative">
                    <div className="absolute inset-0 bg-white rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">100kWh</div>
                    <div className="text-green-100">Maximum</div>
                  </div>
                </div>
                <p className="text-center text-green-100 mt-6">
                  Rebate applies to the first 50kWh of usable capacity
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Stacking Smaller Batteries
              </h3>

              <p className="text-gray-700 text-lg mb-8">
                If you have modular batteries, you can combine them to meet the minimum 5kWh threshold. When combining
                batteries as one system, the combined capacity needs to be at least 5kWh and not exceed 100kWh in
                nominal capacity.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                CEC Approval Requirements
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                To qualify for the rebate, both the battery and its inverter must appear on the
                <strong> Clean Energy Council's (CEC) approved product list</strong>. This ensures all installed
                equipment meets Australian safety and performance standards.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
                <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  CEC Approval Ensures:
                </h4>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">&#10003;</span>
                    <span>Batteries meet relevant Australian safety standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">&#10003;</span>
                    <span>Products are tested by IEC or JAS-ANZ accredited bodies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">&#10003;</span>
                    <span>Compliance with industry best practice requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">&#10003;</span>
                    <span>Only lithium-based batteries currently qualify</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Technical Requirements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">VPP Capability</h4>
                  <p className="text-gray-600">On-grid batteries must be VPP (Virtual Power Plant) capable - able to connect to the internet and respond to external signals. You don't have to join a VPP, but the battery must be capable.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Solar PV Required</h4>
                  <p className="text-gray-600">Batteries must be installed with new or existing solar PV (up to 100kW). Standalone batteries without solar are not eligible for the rebate.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Safety Standards</h4>
                  <p className="text-gray-600">Must comply with AS/NZS 5139:2019 and the Best Practice Guide: Battery Storage Equipment for safe installation.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Accredited Installer</h4>
                  <p className="text-gray-600">Installation must be carried out or supervised by a technician accredited by Solar Accreditation Australia (SAA).</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                What Qualifies and What Doesn't
              </h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Eligible Systems
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">New CEC-approved lithium batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">On-grid systems (VPP capable)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">Off-grid systems (no VPP requirement)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">Residential, small business, community</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">Additions to existing solar systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      NOT Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Electric vehicle (EV) batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">EV charging systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Used or refurbished batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Grid-only storage (no solar)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Non-CEC approved products</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Popular CEC-Approved Batteries
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                Here are some of the most popular battery brands and models that are CEC-approved and eligible for
                the rebate:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {['Tesla Powerwall', 'BYD Battery-Box', 'Enphase IQ', 'SolarEdge Home Battery', 'LG RESU', 'Sungrow SBR', 'Alpha ESS', 'Huawei LUNA'].map((brand) => (
                  <div key={brand} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                    <span className="text-gray-900 font-medium">{brand}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Important Note
                </h4>
                <p className="text-amber-800">
                  The CEC approved product list is regularly updated. Always verify that your chosen battery is on
                  the current list at the time of installation. We can help you select a compliant system that
                  qualifies for the full rebate.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Rebate Value by Battery Size
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-10">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="text-left p-4">Battery Size</th>
                      <th className="text-right p-4">Estimated Rebate (2025)</th>
                      <th className="text-center p-4">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-medium">5 kWh</td>
                      <td className="p-4 text-right font-bold text-green-600">~$1,650</td>
                      <td className="p-4 text-center text-gray-600">Basic backup</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium">10 kWh</td>
                      <td className="p-4 text-right font-bold text-green-600">~$3,300</td>
                      <td className="p-4 text-center text-gray-600">Average home</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">13.5 kWh</td>
                      <td className="p-4 text-right font-bold text-green-600">~$4,450</td>
                      <td className="p-4 text-center text-gray-600">Tesla Powerwall</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium">20 kWh</td>
                      <td className="p-4 text-right font-bold text-green-600">~$6,600</td>
                      <td className="p-4 text-center text-gray-600">Large home</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">30 kWh</td>
                      <td className="p-4 text-right font-bold text-green-600">~$9,900</td>
                      <td className="p-4 text-center text-gray-600">Small business</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-medium">50 kWh+</td>
                      <td className="p-4 text-right font-bold text-green-600">~$16,500 (capped)</td>
                      <td className="p-4 text-center text-gray-600">Commercial</td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-4 bg-gray-50 text-sm text-gray-600">
                  * Rebate capped at 50kWh usable capacity. Based on $330/kWh after admin fees.
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 sm:p-12 text-center text-white mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Not Sure If Your Battery Qualifies?
              </h2>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                We only install CEC-approved battery systems with accredited technicians. Let us help you choose
                the right battery that qualifies for the maximum rebate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:1300090984"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
                >
                  Call 1300 09 09 84
                </a>
              </div>
            </div>

            {/* More Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Information</h3>
              <p className="text-gray-600 mb-4">
                For official information about CEC approved products and battery requirements:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.cleanenergycouncil.org.au/industry-programs/products-program/batteries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  CEC Approved Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://cer.gov.au/batteries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  Clean Energy Regulator
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Back to Articles */}
            <div className="mt-8 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}
