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

const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ExclamationTriangleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
)

export default function MaximizeGovernmentBenefitsArticle() {
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
                <span className="glass px-3 py-1 rounded-full text-sm text-[#00d4ff] border border-[#00d4ff]/20">Guides</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                How Solar Households Can <span className="text-gradient-solar">Maximize Government Benefits</span> in 2025
              </h1>
              <p className="text-xl text-[#b0b0b0] mb-6">
                Complete guide to federal and state solar incentives, battery rebates, and how to stack multiple programs
              </p>
              <div className="flex items-center justify-center gap-4 text-[#b0b0b0]">
                <span>August 2025</span>
                <span className="text-[#f5a623]">|</span>
                <span>12 min read</span>
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
                  src="/solarroof8.jpg"
                  alt="Solar panels on Australian home - Government benefits guide"
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
                Key Takeaway
              </h2>
              <p className="text-[#b0b0b0] text-lg">
                In 2025, Australian households can access <strong className="text-white">multiple incentives</strong> for solar and batteries.
                By combining federal STC rebates with the new battery program and state-specific incentives, you can
                save <strong className="text-white">$6,000 - $10,000+</strong> on a solar and battery system.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none prose-invert">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Federal Government Programs
              </h2>

              <h3 className="text-xl font-bold text-white mb-4">
                1. Small-scale Renewable Energy Scheme (SRES) - Solar Panel Rebate
              </h3>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The SRES remains the backbone of Australia&apos;s solar incentive system. When you install a solar system
                under 100kW, you generate Small-scale Technology Certificates (STCs) which are typically redeemed as
                an <strong className="text-white">upfront discount</strong> on your installation.
              </p>

              <div className="card-cosmic p-6 mb-8 border border-[#00d4ff]/30">
                <h4 className="font-bold text-[#00d4ff] mb-3">2025 Solar Rebate Value</h4>
                <ul className="space-y-2 text-[#b0b0b0]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f5a623]">&#8226;</span>
                    <span>Average 6.6kW system: <strong className="text-white">~$2,400</strong> rebate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f5a623]">&#8226;</span>
                    <span>The rebate reduces each year until 2030 when SRES ends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f5a623]">&#8226;</span>
                    <span>Act sooner to maximize your savings</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                2. Cheaper Home Batteries Program - Battery Rebate
              </h3>

              <p className="text-[#b0b0b0] text-lg mb-6">
                From 1 July 2025, the Cheaper Home Batteries Program provides around <strong className="text-white">30% off</strong> the cost
                of installing a battery. This is delivered through the same STC mechanism, with the government funding
                additional certificates for battery installations.
              </p>

              <div className="card-cosmic p-6 mb-8 border border-[#f5a623]/30">
                <h4 className="font-bold text-[#f5a623] mb-3">Battery Rebate Value</h4>
                <ul className="space-y-2 text-[#b0b0b0]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff]">&#8226;</span>
                    <span>Up to <strong className="text-white">$372 per usable kWh</strong> (~$330 after admin fees)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff]">&#8226;</span>
                    <span>10-13.5kWh battery: <strong className="text-white">~$3,300 - $4,000</strong> savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff]">&#8226;</span>
                    <span>Can be combined with state battery incentives</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                3. Community Solar Banks Program
              </h3>

              <p className="text-[#b0b0b0] text-lg mb-8">
                For those who can&apos;t install their own solar (renters, apartment dwellers), the Community Solar Banks
                Program supports shared solar installations in apartment buildings and multi-unit dwellings, helping
                up to 25,000 households access solar benefits.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                State-by-State Incentives
              </h2>

              {/* State Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* NSW */}
                <div className="card-cosmic p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#00d4ff] rounded-full flex items-center justify-center text-white font-bold">
                      NSW
                    </div>
                    <h4 className="text-lg font-bold text-white">New South Wales</h4>
                  </div>
                  <ul className="space-y-3 text-[#b0b0b0]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Empowering Homes:</strong> Interest-free loans up to $14,000 for solar-battery (income under $180,000)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">VPP Incentive:</strong> Up to $1,500 for connecting to a Virtual Power Plant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ExclamationTriangleIcon className="w-5 h-5 text-[#f5a623] flex-shrink-0 mt-0.5" />
                      <span>Peak Demand Reduction Scheme ended June 2025</span>
                    </li>
                  </ul>
                </div>

                {/* Victoria */}
                <div className="card-cosmic p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#00d4ff]/80 rounded-full flex items-center justify-center text-white font-bold">
                      VIC
                    </div>
                    <h4 className="text-lg font-bold text-white">Victoria</h4>
                  </div>
                  <ul className="space-y-3 text-[#b0b0b0]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Solar Panel Rebate:</strong> Up to $1,400 for solar panels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Solar for Rentals:</strong> $1,400 rebate for landlords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Apartments:</strong> Up to $2,800 per apartment for shared solar</span>
                    </li>
                  </ul>
                </div>

                {/* South Australia */}
                <div className="card-cosmic p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      SA
                    </div>
                    <h4 className="text-lg font-bold text-white">South Australia</h4>
                  </div>
                  <ul className="space-y-3 text-[#b0b0b0]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Concession Swap:</strong> Trade 10 years of concessions for a 4.4kW solar system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">VPP Battery Rebate:</strong> Up to $2,050 for REPS-approved VPP connection</span>
                    </li>
                  </ul>
                </div>

                {/* ACT */}
                <div className="card-cosmic p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#f5a623] rounded-full flex items-center justify-center text-white font-bold">
                      ACT
                    </div>
                    <h4 className="text-lg font-bold text-white">ACT (Canberra)</h4>
                  </div>
                  <ul className="space-y-3 text-[#b0b0b0]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Pensioner Rebate:</strong> Up to 50% off solar (max $2,500)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Sustainable Household Scheme:</strong> Zero-interest loans $2,000 - $15,000 for solar, battery, EV chargers</span>
                    </li>
                  </ul>
                </div>

                {/* WA */}
                <div className="card-cosmic p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#f5a623] font-bold border border-[#f5a623]">
                      WA
                    </div>
                    <h4 className="text-lg font-bold text-white">Western Australia</h4>
                  </div>
                  <ul className="space-y-3 text-[#b0b0b0]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">DEBS Feed-in Tariff:</strong> Up to 10c/kWh (peak) for exported energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>Plus federal battery rebate available</span>
                    </li>
                  </ul>
                </div>

                {/* NT */}
                <div className="card-cosmic p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      NT
                    </div>
                    <h4 className="text-lg font-bold text-white">Northern Territory</h4>
                  </div>
                  <ul className="space-y-3 text-[#b0b0b0]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Highest STC Value:</strong> ~$2,200 off a 6.6kW system in Darwin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>Federal battery rebate (~30% off) available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                How to Stack Multiple Incentives
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The federal battery rebate was designed to be &quot;stackable&quot; with state programs. Here&apos;s how to maximize your savings:
              </p>

              <div className="card-cosmic p-8 mb-10 bg-gradient-to-r from-[#f5a623]/10 to-[#00d4ff]/10 border border-[#f5a623]/30">
                <h3 className="text-2xl font-bold mb-6 text-white">Example: Maximum Savings in Victoria</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span className="text-[#b0b0b0]">Federal Solar STC Rebate (6.6kW)</span>
                    <span className="font-bold text-white">~$2,400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span className="text-[#b0b0b0]">Victorian Solar Panel Rebate</span>
                    <span className="font-bold text-white">$1,400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span className="text-[#b0b0b0]">Federal Battery Rebate (13.5kWh)</span>
                    <span className="font-bold text-white">~$4,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-xl">
                    <span className="font-bold text-white">Total Potential Savings</span>
                    <span className="font-bold text-[#f5a623]">~$7,800+</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Tips to Maximize Your Benefits
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="card-cosmic p-6">
                  <div className="w-12 h-12 bg-[#f5a623]/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#f5a623] font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">Act in 2025</h4>
                  <p className="text-[#b0b0b0]">Both the solar STC rebate and battery rebate reduce each year. Acting now maximizes your savings before reductions kick in.</p>
                </div>

                <div className="card-cosmic p-6">
                  <div className="w-12 h-12 bg-[#f5a623]/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#f5a623] font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">Combine Solar + Battery</h4>
                  <p className="text-[#b0b0b0]">Installing both solar and battery together qualifies you for both rebate programs and is often more cost-effective than separate installations.</p>
                </div>

                <div className="card-cosmic p-6">
                  <div className="w-12 h-12 bg-[#f5a623]/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#f5a623] font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">Check State Programs</h4>
                  <p className="text-[#b0b0b0]">Research your state&apos;s specific incentives. Many can be stacked with federal programs for additional savings.</p>
                </div>

                <div className="card-cosmic p-6">
                  <div className="w-12 h-12 bg-[#f5a623]/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#f5a623] font-bold">4</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">Maximize Self-Consumption</h4>
                  <p className="text-[#b0b0b0]">Greater savings come from using your own solar power rather than exporting it. A battery helps you use more of what you generate.</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Why Act Now?
              </h2>

              <div className="card-cosmic p-6 mb-10 border border-[#f5a623]/30">
                <h4 className="font-bold text-[#f5a623] mb-4 flex items-center gap-2">
                  <ClockIcon className="w-6 h-6" />
                  Time-Sensitive Incentives
                </h4>
                <ul className="space-y-3 text-[#b0b0b0]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f5a623] font-bold">&#8226;</span>
                    <span>The SRES solar rebate <strong className="text-white">decreases annually</strong> and ends completely in 2030</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f5a623] font-bold">&#8226;</span>
                    <span>Battery rebate will decline faster from May 2026 (every 6 months instead of annually)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f5a623] font-bold">&#8226;</span>
                    <span>State programs frequently change or end (e.g., NSW PDRS ended June 2025)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f5a623] font-bold">&#8226;</span>
                    <span>Electricity prices continue to rise, making solar+battery more valuable over time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="card-cosmic p-8 sm:p-12 text-center mt-12 bg-gradient-to-r from-[#f5a623]/10 to-[#00d4ff]/10 border border-[#f5a623]/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Let Us Help You Maximize Your Savings
              </h2>
              <p className="text-lg text-[#b0b0b0] mb-8 max-w-2xl mx-auto">
                As experts in Australian solar incentives, we&apos;ll help you navigate all available rebates and ensure you
                get the maximum benefit. Free consultation, no obligation.
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
                For official government information about solar rebates and incentives:
              </p>
              <a
                href="https://www.energy.gov.au/solar/switch-solar-power/solar-households"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#f5a623] font-semibold transition-colors"
              >
                Visit Energy.gov.au
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
