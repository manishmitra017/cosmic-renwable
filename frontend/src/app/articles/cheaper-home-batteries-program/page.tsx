'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const ArrowLeftIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const BoltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

export default function CheaperHomeBatteriesArticle() {
  return (
    <div className="bg-white">
      {/* Article Header */}
      <article>
        <header className="relative py-16 sm:py-24 bg-[#0073b9] overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Link href="/articles" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowLeftIcon className="w-4 h-4" />
                  Back to Articles
                </Link>
                <span className="text-white/50">|</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white border border-white/30">Government Rebates</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                $2.3 Billion Cheaper Home Batteries Program:{' '}
                <span className="text-[#fee000]">Complete Guide</span>
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Everything you need to know about Australia&apos;s landmark battery rebate program offering 30% off home batteries
              </p>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span className="text-[#fee000]">August 2025</span>
                <span>|</span>
                <span>8 min read</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Key Takeaway Box */}
            <div className="bg-[#fee000] border-l-4 border-[#083941] p-6 rounded-r-xl mb-10">
              <h2 className="text-xl font-bold text-[#083941] mb-3">Key Takeaway</h2>
              <p className="text-[#083941] text-lg">
                The Cheaper Home Batteries Program provides approximately <strong>30% off the upfront cost</strong> of
                eligible battery systems (5-100kWh). The discount is applied automatically at checkout by your installer
                - you don&apos;t need to apply separately.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What Is The Cheaper Home Batteries Program?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The Cheaper Home Batteries Program is a landmark Australian Government initiative that launched on
                <strong className="text-[#333333]"> 1 July 2025</strong>. It provides around a 30% discount on the upfront cost of installing
                eligible small-scale battery systems connected to new or existing rooftop solar.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The program aims to make home batteries more accessible for Australian households, small businesses,
                and community organisations by reducing the barrier of high upfront costs.
              </p>

              {/* How It Works */}
              <div className="bg-white p-6 mb-10 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                  <BoltIcon className="w-6 h-6 text-[#0073b9]" />
                  How It Works
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="text-[#333333]">Choose Your Battery</strong>
                      <p className="text-[#444444]">Select an eligible battery system (5kWh - 100kWh) from our range of CEC-approved products.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong className="text-[#333333]">Get Your Quote</strong>
                      <p className="text-[#444444]">We provide a quote with the rebate already deducted - you see the discounted price upfront.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong className="text-[#333333]">Professional Installation</strong>
                      <p className="text-[#444444]">Our SAA-accredited installers complete the installation to all required standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong className="text-[#333333]">We Handle The Paperwork</strong>
                      <p className="text-[#444444]">We manage all the STC paperwork and government claims - you don&apos;t need to do anything.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Much Can You Save?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The rebate provides approximately <strong className="text-[#333333]">$372 per kWh of usable battery capacity</strong> in 2025
                (around $330 after administrative fees). This translates to roughly 30% off the upfront cost.
              </p>

              {/* Savings Examples */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border-2 border-[#0073b9]">
                  <div className="text-3xl font-bold text-[#0073b9] mb-2">~$3,300</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">10kWh Battery</div>
                  <div className="text-[#666666] text-sm">Typical home backup system</div>
                </div>
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border-2 border-[#fee000]">
                  <div className="text-3xl font-bold text-[#083941] mb-2">~$4,000</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">11.5kWh Battery</div>
                  <div className="text-[#666666] text-sm">Tesla Powerwall size</div>
                </div>
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border-2 border-[#0073b9]">
                  <div className="text-3xl font-bold text-[#0073b9] mb-2">~$5,000</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">13.5kWh Battery</div>
                  <div className="text-[#666666] text-sm">Premium home storage</div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Eligibility Requirements
              </h2>

              <div className="bg-[#efefef] rounded-xl p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                      <CheckIcon className="w-6 h-6 text-[#0073b9]" />
                      What&apos;s Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#0073b9] mt-1">&#10003;</span>
                        <span className="text-[#444444]">Battery systems 5kWh - 100kWh nominal capacity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0073b9] mt-1">&#10003;</span>
                        <span className="text-[#444444]">New batteries with new or existing solar PV</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0073b9] mt-1">&#10003;</span>
                        <span className="text-[#444444]">Homes, small businesses, and community facilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0073b9] mt-1">&#10003;</span>
                        <span className="text-[#444444]">Both on-grid and off-grid systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0073b9] mt-1">&#10003;</span>
                        <span className="text-[#444444]">CEC-approved battery products</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                      <XIcon className="w-6 h-6 text-red-500" />
                      What&apos;s NOT Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Batteries installed without solar PV</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Systems certified before 1 July 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Used or refurbished batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Electric vehicle batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Second battery at same premises (if first was rebated)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Technical Requirements
              </h2>

              <div className="bg-white p-6 mb-10 border-2 border-[#0073b9] rounded-xl">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]"><strong className="text-[#333333]">VPP Capable:</strong> On-grid batteries must be capable of Virtual Power Plant integration (able to connect to the internet)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]"><strong className="text-[#333333]">CEC Approved:</strong> Battery and inverter must be on the Clean Energy Council approved product list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]"><strong className="text-[#333333]">Accredited Installer:</strong> Installation must be done by a Solar Accreditation Australia (SAA) accredited installer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]"><strong className="text-[#333333]">Safety Standards:</strong> Must comply with AS/NZS 5139:2019 and the Best Practice Guide for Battery Storage</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Annual Bill Savings
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Beyond the upfront rebate, a home battery can deliver significant ongoing savings on your electricity bills:
              </p>

              <div className="bg-[#fee000] rounded-xl p-8 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#083941] mb-2">$700 - $1,600</div>
                    <div className="text-[#083941]">Total annual electricity savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#083941] mb-2">$300 - $900</div>
                    <div className="text-[#083941]">Savings directly from battery</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                No Means Test Required
              </h2>

              <p className="text-[#444444] text-lg mb-8">
                Unlike some state programs, the Cheaper Home Batteries Program has <strong className="text-[#333333]">no means test</strong>.
                All eligible Australian households, regardless of income, can access the rebate. There&apos;s also no limit
                on the number of subsidies available - the scheme is uncapped.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-[#0073b9] rounded-2xl p-8 sm:p-12 text-center mt-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Ready to Get Your <span className="text-[#fee000]">30% Battery Discount?</span>
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                As a CEC-accredited installer, Cosmic Renewable Energy can help you access the full rebate.
                We handle all the paperwork - you just enjoy the savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-[#fee000] text-[#083941] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#e5ca00] transition-colors"
                >
                  Get Free Quote
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <a
                  href="tel:1300090984"
                  className="bg-white text-[#0073b9] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call 1300 09 09 84
                </a>
              </div>
            </div>

            {/* More Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-[#333333] mb-4">More Information</h3>
              <p className="text-[#666666] mb-4">
                For official government information about the Cheaper Home Batteries Program:
              </p>
              <a
                href="https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0073b9] hover:text-[#005a91] font-semibold transition-colors"
              >
                Visit DCCEEW Official Page
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Back to Articles */}
            <div className="mt-8 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[#0073b9] hover:text-[#005a91] font-semibold transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                Back to All Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}
