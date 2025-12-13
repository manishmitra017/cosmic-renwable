'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FederalBatteryRebateArticle() {
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
                <span>Questions About the Battery Rebate?</span>
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
              Call 1300 09 09 84 for Battery Rebate Info
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
                Federal Battery Rebate Changes: $7.2 Billion Expansion with New Rules for 2026
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Major changes to the Cheaper Home Batteries Program will affect how Australians access battery rebates from May 2026
              </p>
              <div className="flex items-center justify-center gap-4 text-green-200">
                <span>December 2025</span>
                <span>|</span>
                <span>10 min read</span>
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
                  src="/batteryImage3.jpg"
                  alt="Home battery installation - Federal Battery Rebate"
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
              <h2 className="text-xl font-bold text-green-800 mb-3">Key Takeaway for Our Customers</h2>
              <p className="text-green-700 text-lg">
                The federal government has massively expanded the battery rebate program to $7.2 billion, but new rules
                starting May 2026 will reduce rebates for larger batteries. <strong>If you're considering a battery system
                larger than 14kWh, acting before May 2026 will maximise your rebate.</strong>
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                How Is The Federal Battery Rebate Changing?
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The federal government has earmarked an additional $4.9 billion for the Cheaper Home Batteries Program,
                while revamping it so incentives taper off for oversized home batteries that were rapidly depleting the
                scheme's budget.
              </p>

              <p className="text-gray-700 text-lg mb-6">
                The original $2.3 billion budget has been massively expanded to <strong>$7.2 billion over the next four years</strong>.
                The federal government expects this will see more than two million Australians install a battery by 2030
                – double the number initially predicted.
              </p>

              <p className="text-gray-700 text-lg mb-8">
                This is anticipated to deliver <strong>40 gigawatt hours of additional storage capacity</strong> to Australia's energy grid.
              </p>

              {/* Important Changes Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
                <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Important Changes Coming May 2026
                </h3>
                <ul className="space-y-3 text-amber-900">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">1.</span>
                    <span>Rebate will decline at a higher rate every <strong>six months</strong>, instead of the annual reduction initially planned</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">2.</span>
                    <span>The value of the rebate will be <strong>significantly reduced for larger home battery systems</strong> under a new tiered system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">3.</span>
                    <span>All these changes will only apply to home batteries installed from the <strong>start of May 2026</strong></span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Why Is The Scheme Being Revamped?
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The federal battery rebate was on track to churn through its original allocated funding by mid-2026.
                The $2.3 billion budget was supposed to last across the four-year forward estimates period, but analysis
                found it was on track to run out in just one year.
              </p>

              <p className="text-gray-700 text-lg mb-6">
                The Department of Climate Change, Energy, the Environment and Water claims the incentive has been reworked
                to align with declining battery costs, with the aim of maintaining roughly a <strong>30% discount</strong> for battery systems.
              </p>

              <p className="text-gray-700 text-lg mb-8">
                Federal government officials did not foresee just how many large batteries would be installed under the scheme.
                Battery sizes averaged about 28kWh since October – well up on last year's typical install size of 10–12 kWh.
              </p>

              {/* Quote from Energy Minister */}
              <blockquote className="bg-gray-100 border-l-4 border-green-600 p-6 rounded-r-xl mb-10 italic text-gray-700">
                <p className="mb-4">
                  "We want more Aussie households to have access to batteries that are good for bills and good for the grid
                  – because it means more cheap, fast, safe solar energy is available in our homes night or day, when and
                  where it's needed."
                </p>
                <cite className="text-gray-600 not-italic font-semibold">— Energy Minister Chris Bowen</cite>
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Rebate Values: Current and Future
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The Cheaper Home Batteries Program discount is provided through government purchases of Small-scale
                Technology Certificates (STCs). Subject to regulations being made, the STC factor will drop every
                six months instead of every year, and by a steeper amount.
              </p>

              {/* Rebate Value Table */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-10">
                <div className="bg-green-600 text-white p-4">
                  <h3 className="text-xl font-bold">Estimated Rebate Value Per kWh</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-gray-900">Period</th>
                        <th className="text-right p-4 font-semibold text-gray-900">Rebate per kWh</th>
                        <th className="text-center p-4 font-semibold text-gray-900">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-green-50">
                        <td className="p-4 font-semibold text-green-800">Rest of 2025</td>
                        <td className="p-4 text-right font-bold text-green-600 text-lg">$372</td>
                        <td className="p-4 text-center"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Current</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-700">Jan - April 2026</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$336</td>
                        <td className="p-4 text-center"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Upcoming</span></td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="p-4 text-gray-700">May - Dec 2026 *</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$272</td>
                        <td className="p-4 text-center"><span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">New Rules Apply</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-700">Jan - June 2027</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$228</td>
                        <td className="p-4 text-center">-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 text-gray-700">July - Dec 2027</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$208</td>
                        <td className="p-4 text-center">-</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-700">Jan - June 2028</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$184</td>
                        <td className="p-4 text-center">-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 text-gray-700">July - Dec 2028</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$164</td>
                        <td className="p-4 text-center">-</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-700">Jan - June 2029</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$144</td>
                        <td className="p-4 text-center">-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 text-gray-700">July - Dec 2029</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$124</td>
                        <td className="p-4 text-center">-</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-700">Jan - June 2030</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$104</td>
                        <td className="p-4 text-center">-</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 text-gray-700">July - Dec 2030</td>
                        <td className="p-4 text-right font-semibold text-gray-900">$84</td>
                        <td className="p-4 text-center">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-gray-50 text-sm text-gray-600">
                  * New tiered rebate system applies from May 2026 onwards
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                New Tiered Rebate System for Larger Batteries
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The main reason the rebate was being used up quickly was due to households installing much larger home
                batteries than expected – and in many cases larger than homeowners actually need.
              </p>

              <p className="text-gray-700 text-lg mb-8">
                To rein this in and encourage households to install more appropriately sized batteries, the rebate will
                only fully apply to smaller systems, and taper down for larger capacity batteries:
              </p>

              {/* Tiered System */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Full Rebate</div>
                  <div className="text-gray-600">Up to 14 kWh</div>
                  <div className="mt-4 text-sm text-green-700">STC factor applied at full rate</div>
                </div>
                <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">60%</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Reduced Rebate</div>
                  <div className="text-gray-600">14 kWh to 28 kWh</div>
                  <div className="mt-4 text-sm text-amber-700">STC factor applied at 60%</div>
                </div>
                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">15%</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Minimal Rebate</div>
                  <div className="text-gray-600">28 kWh to 50 kWh</div>
                  <div className="mt-4 text-sm text-red-700">STC factor applied at 15%</div>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-8">
                This change will also come into force from the start of May 2026, subject to regulations being made.
                Batteries up to 100 kWh nominal capacity are still eligible under the Program, but STCs will only be
                provided for the first 50 kWh of usable capacity.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Current Eligibility Requirements
              </h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Who Can Apply</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Homes, small businesses, and community facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No means test – available regardless of income</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Rebates available per property (multiple properties eligible)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">The scheme is uncapped – no limit on number of subsidies available</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Technical Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Battery systems must have usable capacity of <strong>5 kWh to 50 kWh</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Must be connected to new or existing rooftop solar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Installers must be accredited by Solar Accreditation Australia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Batteries must be on the Clean Energy Council-approved product list</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                How to Claim the Rebate
              </h2>

              <p className="text-gray-700 text-lg mb-8">
                Homeowners don't actually need to do anything to claim the rebate – <strong>installers will apply for it
                and deduct the value from the total system price</strong>. This makes the process seamless for customers.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Can You Stack State Rebates?
              </h2>

              <p className="text-gray-700 text-lg mb-8">
                The federal government rebate was intended to be "stackable", meaning other battery rebates from states
                and territories could potentially be claimed alongside it. However, eligibility for other support will
                depend on criteria that applies in those individual schemes.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Industry Response
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                The Smart Energy Council noted that with changes not coming into place until May 2026, there was ample
                forewarning for industry and consumers. This ensures that installers and homeowners getting batteries
                in the next few months won't suddenly be copping a reduced rebate for jobs already booked in.
              </p>

              <blockquote className="bg-gray-100 border-l-4 border-green-600 p-6 rounded-r-xl mb-10 italic text-gray-700">
                <p className="mb-4">
                  "We are a responsible industry that believes in spreading the benefits of solar and batteries to as
                  many people as possible. If that means changes to the rebate we support that."
                </p>
                <cite className="text-gray-600 not-italic font-semibold">— John Grimes, Smart Energy Council Chief Executive</cite>
              </blockquote>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 sm:p-12 text-center text-white mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Act Now to Maximise Your Rebate
              </h2>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                With rebates declining over time and the new tiered system starting May 2026, now is the best time
                to take advantage of the federal battery rebate. Contact Cosmic Renewable Energy for a free consultation
                and quote.
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

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/battery-guide" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Battery Guide</div>
                    <div className="text-sm text-gray-600">Learn about home battery systems</div>
                  </div>
                </Link>
                <Link href="/battery-comparison" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Battery Comparison</div>
                    <div className="text-sm text-gray-600">Compare battery systems and brands</div>
                  </div>
                </Link>
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
