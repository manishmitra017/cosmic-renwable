'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CheaperHomeBatteriesArticle() {
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
                <span>Get Your 30% Battery Discount Today</span>
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
              Call 1300 09 09 84 for Battery Rebate
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
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Government Rebates</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                $2.3 Billion Cheaper Home Batteries Program: Complete Guide
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Everything you need to know about Australia's landmark battery rebate program offering 30% off home batteries
              </p>
              <div className="flex items-center justify-center gap-4 text-green-200">
                <span>August 2025</span>
                <span>|</span>
                <span>8 min read</span>
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
                  src="/batteryImage2.jpg"
                  alt="Home battery system - Cheaper Home Batteries Program"
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
                The Cheaper Home Batteries Program provides approximately <strong>30% off the upfront cost</strong> of
                eligible battery systems (5-100kWh). The discount is applied automatically at checkout by your installer
                - you don't need to apply separately.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                What Is The Cheaper Home Batteries Program?
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The Cheaper Home Batteries Program is a landmark Australian Government initiative that launched on
                <strong> 1 July 2025</strong>. It provides around a 30% discount on the upfront cost of installing
                eligible small-scale battery systems connected to new or existing rooftop solar.
              </p>

              <p className="text-gray-700 text-lg mb-8">
                The program aims to make home batteries more accessible for Australian households, small businesses,
                and community organisations by reducing the barrier of high upfront costs.
              </p>

              {/* How It Works */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  How It Works
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="text-gray-900">Choose Your Battery</strong>
                      <p className="text-gray-600">Select an eligible battery system (5kWh - 100kWh) from our range of CEC-approved products.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong className="text-gray-900">Get Your Quote</strong>
                      <p className="text-gray-600">We provide a quote with the rebate already deducted - you see the discounted price upfront.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong className="text-gray-900">Professional Installation</strong>
                      <p className="text-gray-600">Our SAA-accredited installers complete the installation to all required standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong className="text-gray-900">We Handle The Paperwork</strong>
                      <p className="text-gray-600">We manage all the STC paperwork and government claims - you don't need to do anything.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                How Much Can You Save?
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The rebate provides approximately <strong>$372 per kWh of usable battery capacity</strong> in 2025
                (around $330 after administrative fees). This translates to roughly 30% off the upfront cost.
              </p>

              {/* Savings Examples */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">~$3,300</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">10kWh Battery</div>
                  <div className="text-gray-600 text-sm">Typical home backup system</div>
                </div>
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">~$4,000</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">11.5kWh Battery</div>
                  <div className="text-gray-600 text-sm">Tesla Powerwall size</div>
                </div>
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">~$5,000</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">13.5kWh Battery</div>
                  <div className="text-gray-600 text-sm">Premium home storage</div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Eligibility Requirements
              </h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      What's Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">Battery systems 5kWh - 100kWh nominal capacity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">New batteries with new or existing solar PV</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">Homes, small businesses, and community facilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">Both on-grid and off-grid systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">&#10003;</span>
                        <span className="text-gray-700">CEC-approved battery products</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      What's NOT Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Batteries installed without solar PV</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Systems certified before 1 July 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Used or refurbished batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Electric vehicle batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1">&#10007;</span>
                        <span className="text-gray-700">Second battery at same premises (if first was rebated)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Technical Requirements
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>VPP Capable:</strong> On-grid batteries must be capable of Virtual Power Plant integration (able to connect to the internet)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>CEC Approved:</strong> Battery and inverter must be on the Clean Energy Council approved product list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>Accredited Installer:</strong> Installation must be done by a Solar Accreditation Australia (SAA) accredited installer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>Safety Standards:</strong> Must comply with AS/NZS 5139:2019 and the Best Practice Guide for Battery Storage</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Annual Bill Savings
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                Beyond the upfront rebate, a home battery can deliver significant ongoing savings on your electricity bills:
              </p>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">$700 - $1,600</div>
                    <div className="text-green-100">Total annual electricity savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">$300 - $900</div>
                    <div className="text-green-100">Savings directly from battery</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                No Means Test Required
              </h2>

              <p className="text-gray-700 text-lg mb-8">
                Unlike some state programs, the Cheaper Home Batteries Program has <strong>no means test</strong>.
                All eligible Australian households, regardless of income, can access the rebate. There's also no limit
                on the number of subsidies available - the scheme is uncapped.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 sm:p-12 text-center text-white mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Get Your 30% Battery Discount?
              </h2>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                As a CEC-accredited installer, Cosmic Renewable Energy can help you access the full rebate.
                We handle all the paperwork - you just enjoy the savings.
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
                For official government information about the Cheaper Home Batteries Program:
              </p>
              <a
                href="https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
              >
                Visit DCCEEW Official Page
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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
