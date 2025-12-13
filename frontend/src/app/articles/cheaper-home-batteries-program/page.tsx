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
    <div className="cosmic-bg">
      {/* Article Header */}
      <article>
        <header className="relative py-16 sm:py-24 bg-[#0a0a0f] overflow-hidden">
          {/* Star field background */}
          <div className="absolute inset-0 star-field opacity-40"></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-[100px] animate-float-delayed"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Link href="/articles" className="text-[#b0b0b0] hover:text-[#00d4ff] transition-colors flex items-center gap-2">
                  <ArrowLeftIcon className="w-4 h-4" />
                  Back to Articles
                </Link>
                <span className="text-[#b0b0b0]/50">|</span>
                <span className="glass px-3 py-1 rounded-full text-sm text-[#f5a623] border border-[#f5a623]/20">Government Rebates</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                $2.3 Billion Cheaper Home Batteries Program:{' '}
                <span className="text-gradient-solar">Complete Guide</span>
              </h1>
              <p className="text-xl text-[#b0b0b0] mb-6">
                Everything you need to know about Australia&apos;s landmark battery rebate program offering 30% off home batteries
              </p>
              <div className="flex items-center justify-center gap-4 text-[#b0b0b0]">
                <span className="text-[#f5a623]">August 2025</span>
                <span>|</span>
                <span>8 min read</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/batteryImage2.jpg"
                  alt="Home battery system - Cheaper Home Batteries Program"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-[#0a0a0f]">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Key Takeaway Box */}
            <div className="glass border-l-4 border-[#f5a623] p-6 rounded-r-xl mb-10">
              <h2 className="text-xl font-bold text-[#f5a623] mb-3">Key Takeaway</h2>
              <p className="text-[#b0b0b0] text-lg">
                The Cheaper Home Batteries Program provides approximately <strong className="text-white">30% off the upfront cost</strong> of
                eligible battery systems (5-100kWh). The discount is applied automatically at checkout by your installer
                - you don&apos;t need to apply separately.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                What Is The Cheaper Home Batteries Program?
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The Cheaper Home Batteries Program is a landmark Australian Government initiative that launched on
                <strong className="text-white"> 1 July 2025</strong>. It provides around a 30% discount on the upfront cost of installing
                eligible small-scale battery systems connected to new or existing rooftop solar.
              </p>

              <p className="text-[#b0b0b0] text-lg mb-8">
                The program aims to make home batteries more accessible for Australian households, small businesses,
                and community organisations by reducing the barrier of high upfront costs.
              </p>

              {/* How It Works */}
              <div className="card-cosmic p-6 mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BoltIcon className="w-6 h-6 text-[#f5a623]" />
                  How It Works
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#f5a623] to-[#ff8c00] text-[#0a0a0f] rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="text-white">Choose Your Battery</strong>
                      <p className="text-[#b0b0b0]">Select an eligible battery system (5kWh - 100kWh) from our range of CEC-approved products.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#f5a623] to-[#ff8c00] text-[#0a0a0f] rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong className="text-white">Get Your Quote</strong>
                      <p className="text-[#b0b0b0]">We provide a quote with the rebate already deducted - you see the discounted price upfront.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#f5a623] to-[#ff8c00] text-[#0a0a0f] rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong className="text-white">Professional Installation</strong>
                      <p className="text-[#b0b0b0]">Our SAA-accredited installers complete the installation to all required standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#f5a623] to-[#ff8c00] text-[#0a0a0f] rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong className="text-white">We Handle The Paperwork</strong>
                      <p className="text-[#b0b0b0]">We manage all the STC paperwork and government claims - you don&apos;t need to do anything.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                How Much Can You Save?
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The rebate provides approximately <strong className="text-white">$372 per kWh of usable battery capacity</strong> in 2025
                (around $330 after administrative fees). This translates to roughly 30% off the upfront cost.
              </p>

              {/* Savings Examples */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="card-cosmic p-6 text-center border-[#f5a623]/30">
                  <div className="text-3xl font-bold text-[#f5a623] mb-2">~$3,300</div>
                  <div className="text-lg font-semibold text-white mb-2">10kWh Battery</div>
                  <div className="text-[#b0b0b0] text-sm">Typical home backup system</div>
                </div>
                <div className="card-cosmic p-6 text-center border-[#00d4ff]/30">
                  <div className="text-3xl font-bold text-[#00d4ff] mb-2">~$4,000</div>
                  <div className="text-lg font-semibold text-white mb-2">11.5kWh Battery</div>
                  <div className="text-[#b0b0b0] text-sm">Tesla Powerwall size</div>
                </div>
                <div className="card-cosmic p-6 text-center border-[#f5a623]/30">
                  <div className="text-3xl font-bold text-[#f5a623] mb-2">~$5,000</div>
                  <div className="text-lg font-semibold text-white mb-2">13.5kWh Battery</div>
                  <div className="text-[#b0b0b0] text-sm">Premium home storage</div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Eligibility Requirements
              </h2>

              <div className="glass rounded-xl p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckIcon className="w-6 h-6 text-[#00d4ff]" />
                      What&apos;s Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#00d4ff] mt-1">✓</span>
                        <span className="text-[#b0b0b0]">Battery systems 5kWh - 100kWh nominal capacity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#00d4ff] mt-1">✓</span>
                        <span className="text-[#b0b0b0]">New batteries with new or existing solar PV</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#00d4ff] mt-1">✓</span>
                        <span className="text-[#b0b0b0]">Homes, small businesses, and community facilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#00d4ff] mt-1">✓</span>
                        <span className="text-[#b0b0b0]">Both on-grid and off-grid systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#00d4ff] mt-1">✓</span>
                        <span className="text-[#b0b0b0]">CEC-approved battery products</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <XIcon className="w-6 h-6 text-red-500" />
                      What&apos;s NOT Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-[#b0b0b0]">Batteries installed without solar PV</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-[#b0b0b0]">Systems certified before 1 July 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-[#b0b0b0]">Used or refurbished batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-[#b0b0b0]">Electric vehicle batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-[#b0b0b0]">Second battery at same premises (if first was rebated)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Technical Requirements
              </h2>

              <div className="card-cosmic p-6 mb-10 border-[#00d4ff]/20">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]"><strong className="text-white">VPP Capable:</strong> On-grid batteries must be capable of Virtual Power Plant integration (able to connect to the internet)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]"><strong className="text-white">CEC Approved:</strong> Battery and inverter must be on the Clean Energy Council approved product list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]"><strong className="text-white">Accredited Installer:</strong> Installation must be done by a Solar Accreditation Australia (SAA) accredited installer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]"><strong className="text-white">Safety Standards:</strong> Must comply with AS/NZS 5139:2019 and the Best Practice Guide for Battery Storage</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Annual Bill Savings
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                Beyond the upfront rebate, a home battery can deliver significant ongoing savings on your electricity bills:
              </p>

              <div className="bg-gradient-to-r from-[#f5a623]/20 to-[#00d4ff]/20 rounded-xl p-8 mb-10 border border-[#f5a623]/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#f5a623] mb-2">$700 - $1,600</div>
                    <div className="text-[#b0b0b0]">Total annual electricity savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00d4ff] mb-2">$300 - $900</div>
                    <div className="text-[#b0b0b0]">Savings directly from battery</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                No Means Test Required
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-8">
                Unlike some state programs, the Cheaper Home Batteries Program has <strong className="text-white">no means test</strong>.
                All eligible Australian households, regardless of income, can access the rebate. There&apos;s also no limit
                on the number of subsidies available - the scheme is uncapped.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-8 sm:p-12 text-center mt-12 border border-[#f5a623]/20">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Ready to Get Your <span className="text-gradient-solar">30% Battery Discount?</span>
              </h2>
              <p className="text-lg text-[#b0b0b0] mb-8 max-w-2xl mx-auto">
                As a CEC-accredited installer, Cosmic Renewable Energy can help you access the full rebate.
                We handle all the paperwork - you just enjoy the savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="btn-solar px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <a
                  href="tel:1300090984"
                  className="btn-energy px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call 1300 09 09 84
                </a>
              </div>
            </div>

            {/* More Information */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">More Information</h3>
              <p className="text-[#b0b0b0] mb-4">
                For official government information about the Cheaper Home Batteries Program:
              </p>
              <a
                href="https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#f5a623] font-semibold transition-colors"
              >
                Visit DCCEEW Official Page
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Back to Articles */}
            <div className="mt-8 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#f5a623] font-semibold transition-colors"
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
