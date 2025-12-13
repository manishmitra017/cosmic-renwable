'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MaximizeGovernmentBenefitsArticle() {
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
                <span>Maximize Your Solar Savings Today</span>
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
              Call 1300 09 09 84 for Expert Advice
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
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Guides</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                How Solar Households Can Maximize Government Benefits in 2025
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Complete guide to federal and state solar incentives, battery rebates, and how to stack multiple programs
              </p>
              <div className="flex items-center justify-center gap-4 text-green-200">
                <span>August 2025</span>
                <span>|</span>
                <span>12 min read</span>
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
                  src="/solarroof8.jpg"
                  alt="Solar panels on Australian home - Government benefits guide"
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
                In 2025, Australian households can access <strong>multiple incentives</strong> for solar and batteries.
                By combining federal STC rebates with the new battery program and state-specific incentives, you can
                save <strong>$6,000 - $10,000+</strong> on a solar and battery system.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Federal Government Programs
              </h2>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Small-scale Renewable Energy Scheme (SRES) - Solar Panel Rebate
              </h3>

              <p className="text-gray-700 text-lg mb-6">
                The SRES remains the backbone of Australia's solar incentive system. When you install a solar system
                under 100kW, you generate Small-scale Technology Certificates (STCs) which are typically redeemed as
                an <strong>upfront discount</strong> on your installation.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-3">2025 Solar Rebate Value</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>&#8226; Average 6.6kW system: <strong>~$2,400</strong> rebate</li>
                  <li>&#8226; The rebate reduces each year until 2030 when SRES ends</li>
                  <li>&#8226; Act sooner to maximize your savings</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. Cheaper Home Batteries Program - Battery Rebate
              </h3>

              <p className="text-gray-700 text-lg mb-6">
                From 1 July 2025, the Cheaper Home Batteries Program provides around <strong>30% off</strong> the cost
                of installing a battery. This is delivered through the same STC mechanism, with the government funding
                additional certificates for battery installations.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-green-900 mb-3">Battery Rebate Value</h4>
                <ul className="space-y-2 text-green-800">
                  <li>&#8226; Up to <strong>$372 per usable kWh</strong> (~$330 after admin fees)</li>
                  <li>&#8226; 10-13.5kWh battery: <strong>~$3,300 - $4,000</strong> savings</li>
                  <li>&#8226; Can be combined with state battery incentives</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. Community Solar Banks Program
              </h3>

              <p className="text-gray-700 text-lg mb-8">
                For those who can't install their own solar (renters, apartment dwellers), the Community Solar Banks
                Program supports shared solar installations in apartment buildings and multi-unit dwellings, helping
                up to 25,000 households access solar benefits.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                State-by-State Incentives
              </h2>

              {/* State Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* NSW */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      NSW
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">New South Wales</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>Empowering Homes:</strong> Interest-free loans up to $14,000 for solar-battery (income under $180,000)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>VPP Incentive:</strong> Up to $1,500 for connecting to a Virtual Power Plant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">&#9888;</span>
                      <span>Peak Demand Reduction Scheme ended June 2025</span>
                    </li>
                  </ul>
                </div>

                {/* Victoria */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                      VIC
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Victoria</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>Solar Panel Rebate:</strong> Up to $1,400 for solar panels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>Solar for Rentals:</strong> $1,400 rebate for landlords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>Apartments:</strong> Up to $2,800 per apartment for shared solar</span>
                    </li>
                  </ul>
                </div>

                {/* South Australia */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      SA
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">South Australia</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>Concession Swap:</strong> Trade 10 years of concessions for a 4.4kW solar system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>VPP Battery Rebate:</strong> Up to $2,050 for REPS-approved VPP connection</span>
                    </li>
                  </ul>
                </div>

                {/* ACT */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                      ACT
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">ACT (Canberra)</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>Pensioner Rebate:</strong> Up to 50% off solar (max $2,500)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>Sustainable Household Scheme:</strong> Zero-interest loans $2,000 - $15,000 for solar, battery, EV chargers</span>
                    </li>
                  </ul>
                </div>

                {/* WA */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-yellow-400 font-bold">
                      WA
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Western Australia</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>DEBS Feed-in Tariff:</strong> Up to 10c/kWh (peak) for exported energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span>Plus federal battery rebate available</span>
                    </li>
                  </ul>
                </div>

                {/* NT */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      NT
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Northern Territory</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span><strong>Highest STC Value:</strong> ~$2,200 off a 6.6kW system in Darwin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">&#10003;</span>
                      <span>Federal battery rebate (~30% off) available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                How to Stack Multiple Incentives
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The federal battery rebate was designed to be "stackable" with state programs. Here's how to maximize your savings:
              </p>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white mb-10">
                <h3 className="text-2xl font-bold mb-6">Example: Maximum Savings in Victoria</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/30 pb-3">
                    <span>Federal Solar STC Rebate (6.6kW)</span>
                    <span className="font-bold">~$2,400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/30 pb-3">
                    <span>Victorian Solar Panel Rebate</span>
                    <span className="font-bold">$1,400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/30 pb-3">
                    <span>Federal Battery Rebate (13.5kWh)</span>
                    <span className="font-bold">~$4,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-xl">
                    <span className="font-bold">Total Potential Savings</span>
                    <span className="font-bold text-yellow-300">~$7,800+</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Tips to Maximize Your Benefits
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Act in 2025</h4>
                  <p className="text-gray-600">Both the solar STC rebate and battery rebate reduce each year. Acting now maximizes your savings before reductions kick in.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Combine Solar + Battery</h4>
                  <p className="text-gray-600">Installing both solar and battery together qualifies you for both rebate programs and is often more cost-effective than separate installations.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Check State Programs</h4>
                  <p className="text-gray-600">Research your state's specific incentives. Many can be stacked with federal programs for additional savings.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">4</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Maximize Self-Consumption</h4>
                  <p className="text-gray-600">Greater savings come from using your own solar power rather than exporting it. A battery helps you use more of what you generate.</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Why Act Now?
              </h2>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
                <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Time-Sensitive Incentives
                </h4>
                <ul className="space-y-3 text-amber-900">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">&#8226;</span>
                    <span>The SRES solar rebate <strong>decreases annually</strong> and ends completely in 2030</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">&#8226;</span>
                    <span>Battery rebate will decline faster from May 2026 (every 6 months instead of annually)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">&#8226;</span>
                    <span>State programs frequently change or end (e.g., NSW PDRS ended June 2025)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">&#8226;</span>
                    <span>Electricity prices continue to rise, making solar+battery more valuable over time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 sm:p-12 text-center text-white mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Let Us Help You Maximize Your Savings
              </h2>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                As experts in Australian solar incentives, we'll help you navigate all available rebates and ensure you
                get the maximum benefit. Free consultation, no obligation.
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
                For official government information about solar rebates and incentives:
              </p>
              <a
                href="https://www.energy.gov.au/solar/switch-solar-power/solar-households"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
              >
                Visit Energy.gov.au
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
