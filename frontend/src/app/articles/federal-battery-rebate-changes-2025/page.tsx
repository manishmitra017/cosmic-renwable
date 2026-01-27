'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const ArrowLeftIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
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

const ExclamationTriangleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
)

const DocumentTextIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const ChartBarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

export default function FederalBatteryRebateArticle() {
  return (
    <div className="cosmic-bg">
      <article>
        {/* Header */}
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
                <span className="glass px-3 py-1 rounded-full text-sm text-[#00d4ff] border border-[#00d4ff]/20">Government Rebates</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Federal Battery Rebate Changes: <span className="text-gradient-solar">$7.2 Billion Expansion</span> with New Rules for 2026
              </h1>
              <p className="text-xl text-[#b0b0b0] mb-6">
                Major changes to the Cheaper Home Batteries Program will affect how Australians access battery rebates from May 2026
              </p>
              <div className="flex items-center justify-center gap-4 text-[#b0b0b0]">
                <span>December 2025</span>
                <span className="text-[#f5a623]">|</span>
                <span>10 min read</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/batteryImage3.jpg"
                  alt="Home battery installation - Federal Battery Rebate"
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Key Takeaway Box */}
            <div className="card-cosmic p-6 mb-10 border-l-4 border-[#f5a623]">
              <h2 className="text-xl font-bold text-[#f5a623] mb-3 flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                Key Takeaway for Our Customers
              </h2>
              <p className="text-[#b0b0b0] text-lg">
                The federal government has massively expanded the battery rebate program to $7.2 billion, but new rules
                starting May 2026 will reduce rebates for larger batteries. <strong className="text-white">If you&apos;re considering a battery system
                larger than 14kWh, acting before May 2026 will maximise your rebate.</strong>
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none prose-invert">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                How Is The Federal Battery Rebate Changing?
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The federal government has earmarked an additional $4.9 billion for the Cheaper Home Batteries Program,
                while revamping it so incentives taper off for oversized home batteries that were rapidly depleting the
                scheme&apos;s budget.
              </p>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The original $2.3 billion budget has been massively expanded to <strong className="text-white">$7.2 billion over the next four years</strong>.
                The federal government expects this will see more than two million Australians install a battery by 2030
                – double the number initially predicted.
              </p>

              <p className="text-[#b0b0b0] text-lg mb-8">
                This is anticipated to deliver <strong className="text-white">40 gigawatt hours of additional storage capacity</strong> to Australia&apos;s energy grid.
              </p>

              {/* Important Changes Box */}
              <div className="card-cosmic p-6 mb-10 border border-[#f5a623]/30">
                <h3 className="text-xl font-bold text-[#f5a623] mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  Important Changes Coming May 2026
                </h3>
                <ul className="space-y-3 text-[#b0b0b0]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f5a623] font-bold mt-1">1.</span>
                    <span>Rebate will decline at a higher rate every <strong className="text-white">six months</strong>, instead of the annual reduction initially planned</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f5a623] font-bold mt-1">2.</span>
                    <span>The value of the rebate will be <strong className="text-white">significantly reduced for larger home battery systems</strong> under a new tiered system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f5a623] font-bold mt-1">3.</span>
                    <span>All these changes will only apply to home batteries installed from the <strong className="text-white">start of May 2026</strong></span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Why Is The Scheme Being Revamped?
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The federal battery rebate was on track to churn through its original allocated funding by mid-2026.
                The $2.3 billion budget was supposed to last across the four-year forward estimates period, but analysis
                found it was on track to run out in just one year.
              </p>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The Department of Climate Change, Energy, the Environment and Water claims the incentive has been reworked
                to align with declining battery costs, with the aim of maintaining roughly a <strong className="text-white">30% discount</strong> for battery systems.
              </p>

              <p className="text-[#b0b0b0] text-lg mb-8">
                Federal government officials did not foresee just how many large batteries would be installed under the scheme.
                Battery sizes averaged about 28kWh since October – well up on last year&apos;s typical install size of 10–12 kWh.
              </p>

              {/* Quote from Energy Minister */}
              <blockquote className="card-cosmic p-6 mb-10 border-l-4 border-[#00d4ff] italic text-[#b0b0b0]">
                <p className="mb-4">
                  &quot;We want more Aussie households to have access to batteries that are good for bills and good for the grid
                  – because it means more cheap, fast, safe solar energy is available in our homes night or day, when and
                  where it&apos;s needed.&quot;
                </p>
                <cite className="text-[#00d4ff] not-italic font-semibold">— Energy Minister Chris Bowen</cite>
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Rebate Values: Current and Future
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The Cheaper Home Batteries Program discount is provided through government purchases of Small-scale
                Technology Certificates (STCs). Subject to regulations being made, the STC factor will drop every
                six months instead of every year, and by a steeper amount.
              </p>

              {/* Rebate Value Table */}
              <div className="card-cosmic overflow-hidden mb-10">
                <div className="bg-gradient-to-r from-[#f5a623]/20 to-[#00d4ff]/20 p-4">
                  <h3 className="text-xl font-bold text-white">Estimated Rebate Value Per kWh</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="text-left p-4 font-semibold text-white">Period</th>
                        <th className="text-right p-4 font-semibold text-white">Rebate per kWh</th>
                        <th className="text-center p-4 font-semibold text-white">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr className="bg-[#f5a623]/10">
                        <td className="p-4 font-semibold text-[#f5a623]">Rest of 2025</td>
                        <td className="p-4 text-right font-bold text-[#f5a623] text-lg">$372</td>
                        <td className="p-4 text-center"><span className="bg-[#f5a623] text-black px-3 py-1 rounded-full text-sm font-semibold">Current</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#b0b0b0]">Jan - April 2026</td>
                        <td className="p-4 text-right font-semibold text-white">$336</td>
                        <td className="p-4 text-center"><span className="glass px-3 py-1 rounded-full text-sm text-[#00d4ff] border border-[#00d4ff]/30">Upcoming</span></td>
                      </tr>
                      <tr className="bg-[#f5a623]/5">
                        <td className="p-4 text-[#b0b0b0]">May - Dec 2026 *</td>
                        <td className="p-4 text-right font-semibold text-white">$272</td>
                        <td className="p-4 text-center"><span className="glass px-3 py-1 rounded-full text-sm text-[#f5a623] border border-[#f5a623]/30">New Rules Apply</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#b0b0b0]">Jan - June 2027</td>
                        <td className="p-4 text-right font-semibold text-white">$228</td>
                        <td className="p-4 text-center text-[#b0b0b0]">-</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="p-4 text-[#b0b0b0]">July - Dec 2027</td>
                        <td className="p-4 text-right font-semibold text-white">$208</td>
                        <td className="p-4 text-center text-[#b0b0b0]">-</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#b0b0b0]">Jan - June 2028</td>
                        <td className="p-4 text-right font-semibold text-white">$184</td>
                        <td className="p-4 text-center text-[#b0b0b0]">-</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="p-4 text-[#b0b0b0]">July - Dec 2028</td>
                        <td className="p-4 text-right font-semibold text-white">$164</td>
                        <td className="p-4 text-center text-[#b0b0b0]">-</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#b0b0b0]">Jan - June 2029</td>
                        <td className="p-4 text-right font-semibold text-white">$144</td>
                        <td className="p-4 text-center text-[#b0b0b0]">-</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="p-4 text-[#b0b0b0]">July - Dec 2029</td>
                        <td className="p-4 text-right font-semibold text-white">$124</td>
                        <td className="p-4 text-center text-[#b0b0b0]">-</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#b0b0b0]">Jan - June 2030</td>
                        <td className="p-4 text-right font-semibold text-white">$104</td>
                        <td className="p-4 text-center text-[#b0b0b0]">-</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="p-4 text-[#b0b0b0]">July - Dec 2030</td>
                        <td className="p-4 text-right font-semibold text-white">$84</td>
                        <td className="p-4 text-center text-[#b0b0b0]">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-white/5 text-sm text-[#b0b0b0]">
                  * New tiered rebate system applies from May 2026 onwards
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                New Tiered Rebate System for Larger Batteries
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The main reason the rebate was being used up quickly was due to households installing much larger home
                batteries than expected – and in many cases larger than homeowners actually need.
              </p>

              <p className="text-[#b0b0b0] text-lg mb-8">
                To rein this in and encourage households to install more appropriately sized batteries, the rebate will
                only fully apply to smaller systems, and taper down for larger capacity batteries:
              </p>

              {/* Tiered System */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="card-cosmic p-6 text-center border-2 border-[#00d4ff]">
                  <div className="text-4xl font-bold text-[#00d4ff] mb-2">100%</div>
                  <div className="text-lg font-semibold text-white mb-2">Full Rebate</div>
                  <div className="text-[#b0b0b0]">Up to 14 kWh</div>
                  <div className="mt-4 text-sm text-[#00d4ff]">STC factor applied at full rate</div>
                </div>
                <div className="card-cosmic p-6 text-center border-2 border-[#f5a623]">
                  <div className="text-4xl font-bold text-[#f5a623] mb-2">60%</div>
                  <div className="text-lg font-semibold text-white mb-2">Reduced Rebate</div>
                  <div className="text-[#b0b0b0]">14 kWh to 28 kWh</div>
                  <div className="mt-4 text-sm text-[#f5a623]">STC factor applied at 60%</div>
                </div>
                <div className="card-cosmic p-6 text-center border-2 border-red-500">
                  <div className="text-4xl font-bold text-red-500 mb-2">15%</div>
                  <div className="text-lg font-semibold text-white mb-2">Minimal Rebate</div>
                  <div className="text-[#b0b0b0]">28 kWh to 50 kWh</div>
                  <div className="mt-4 text-sm text-red-500">STC factor applied at 15%</div>
                </div>
              </div>

              <p className="text-[#b0b0b0] text-lg mb-8">
                This change will also come into force from the start of May 2026, subject to regulations being made.
                Batteries up to 100 kWh nominal capacity are still eligible under the Program, but STCs will only be
                provided for the first 50 kWh of usable capacity.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Current Eligibility Requirements
              </h2>

              <div className="card-cosmic p-6 mb-10">
                <h3 className="text-xl font-bold text-white mb-4">Who Can Apply</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]">Homes, small businesses, and community facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]">No means test – available regardless of income</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]">Rebates available per property (multiple properties eligible)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]">The scheme is uncapped – no limit on number of subsidies available</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4 mt-8">Technical Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]">Battery systems must have usable capacity of <strong className="text-white">5 kWh to 50 kWh</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]">Must be connected to new or existing rooftop solar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]">Installers must be accredited by Solar Accreditation Australia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b0b0b0]">Batteries must be on the Clean Energy Council-approved product list</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                How to Claim the Rebate
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-8">
                Homeowners don&apos;t actually need to do anything to claim the rebate – <strong className="text-white">installers will apply for it
                and deduct the value from the total system price</strong>. This makes the process seamless for customers.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Can You Stack State Rebates?
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-8">
                The federal government rebate was intended to be &quot;stackable&quot;, meaning other battery rebates from states
                and territories could potentially be claimed alongside it. However, eligibility for other support will
                depend on criteria that applies in those individual schemes.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Industry Response
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The Smart Energy Council noted that with changes not coming into place until May 2026, there was ample
                forewarning for industry and consumers. This ensures that installers and homeowners getting batteries
                in the next few months won&apos;t suddenly be copping a reduced rebate for jobs already booked in.
              </p>

              <blockquote className="card-cosmic p-6 mb-10 border-l-4 border-[#00d4ff] italic text-[#b0b0b0]">
                <p className="mb-4">
                  &quot;We are a responsible industry that believes in spreading the benefits of solar and batteries to as
                  many people as possible. If that means changes to the rebate we support that.&quot;
                </p>
                <cite className="text-[#00d4ff] not-italic font-semibold">— John Grimes, Smart Energy Council Chief Executive</cite>
              </blockquote>
            </div>

            {/* Call to Action */}
            <div className="card-cosmic p-8 sm:p-12 text-center mt-12 bg-gradient-to-r from-[#f5a623]/10 to-[#00d4ff]/10 border border-[#f5a623]/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Act Now to Maximise Your Rebate
              </h2>
              <p className="text-lg text-[#b0b0b0] mb-8 max-w-2xl mx-auto">
                With rebates declining over time and the new tiered system starting May 2026, now is the best time
                to take advantage of the federal battery rebate. Contact Cosmic Renewable Energy for a free consultation
                and quote.
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

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Related Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/battery-guide" className="flex items-center gap-4 p-4 card-cosmic hover:border-[#f5a623]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#f5a623]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <DocumentTextIcon className="w-6 h-6 text-[#f5a623]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Battery Guide</div>
                    <div className="text-sm text-[#b0b0b0]">Learn about home battery systems</div>
                  </div>
                </Link>
                <Link href="/battery-comparison" className="flex items-center gap-4 p-4 card-cosmic hover:border-[#f5a623]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#f5a623]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChartBarIcon className="w-6 h-6 text-[#f5a623]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Battery Comparison</div>
                    <div className="text-sm text-[#b0b0b0]">Compare battery systems and brands</div>
                  </div>
                </Link>
              </div>
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
