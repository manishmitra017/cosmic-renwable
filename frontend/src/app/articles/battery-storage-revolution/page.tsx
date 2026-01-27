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

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const UserIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
)

const CheckBadgeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
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

const InformationCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
)

export default function BatteryStorageRevolutionArticle() {
  return (
    <div className="cosmic-bg">
      <article>
        {/* Header */}
        <header className="relative py-16 sm:py-24 bg-[#0072CE] overflow-hidden">
          {/* Star field background */}
          <div className="absolute inset-0 star-field opacity-40"></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0072CE]/10 rounded-full blur-[100px] animate-float-delayed"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Link href="/articles" className="text-[#b0b0b0] hover:text-[#0072CE] transition-colors flex items-center gap-2">
                  <ArrowLeftIcon className="w-4 h-4" />
                  Back to Articles
                </Link>
                <span className="text-[#b0b0b0]/50">|</span>
                <span className="glass px-3 py-1 rounded-full text-sm text-[#0072CE] border border-[#0072CE]/20">Industry News</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Battery Storage Revolution: <span className="text-gradient-solar">5kWh to 100kWh</span> Systems Now Eligible
              </h1>
              <p className="text-xl text-[#b0b0b0] mb-6">
                Understanding CEC approval requirements and which battery systems qualify for the federal rebate
              </p>
              <div className="flex items-center justify-center gap-4 text-[#b0b0b0]">
                <span>August 2025</span>
                <span className="text-[#FFE500]">|</span>
                <span>7 min read</span>
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
                  src="/batteryImage1.jpg"
                  alt="Battery storage systems - CEC approved products"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0072CE] to-transparent"></div>
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
            <div className="card-cosmic p-6 mb-10 border-l-4 border-[#FFE500]">
              <h2 className="text-xl font-bold text-[#FFE500] mb-3 flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                Key Takeaway
              </h2>
              <p className="text-[#b0b0b0] text-lg">
                The Cheaper Home Batteries Program covers a wide range of battery sizes from <strong className="text-white">5kWh to 100kWh</strong>,
                but only batteries on the <strong className="text-white">CEC approved product list</strong> and installed by accredited
                professionals qualify for the rebate.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none prose-invert">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Battery Size Requirements
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                The Cheaper Home Batteries Program applies to battery systems with a <strong className="text-white">nominal capacity between
                5kWh and 100kWh</strong>. The nominal capacity is the maximum amount of energy a battery can store at
                full charge - typically the capacity shown on the product label.
              </p>

              {/* Capacity Range Visual */}
              <div className="card-cosmic p-8 mb-10 bg-gradient-to-r from-[#FFE500]/10 to-[#0072CE]/10">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">Eligible Capacity Range</h3>
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#FFE500]">5kWh</div>
                    <div className="text-[#b0b0b0]">Minimum</div>
                  </div>
                  <div className="flex-1 mx-8 h-4 bg-white/10 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFE500] to-[#0072CE] rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#0072CE]">100kWh</div>
                    <div className="text-[#b0b0b0]">Maximum</div>
                  </div>
                </div>
                <p className="text-center text-[#b0b0b0] mt-6">
                  Rebate applies to the first 50kWh of usable capacity
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                Stacking Smaller Batteries
              </h3>

              <p className="text-[#b0b0b0] text-lg mb-8">
                If you have modular batteries, you can combine them to meet the minimum 5kWh threshold. When combining
                batteries as one system, the combined capacity needs to be at least 5kWh and not exceed 100kWh in
                nominal capacity.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                CEC Approval Requirements
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                To qualify for the rebate, both the battery and its inverter must appear on the
                <strong className="text-white"> Clean Energy Council&apos;s (CEC) approved product list</strong>. This ensures all installed
                equipment meets Australian safety and performance standards.
              </p>

              <div className="card-cosmic p-6 mb-10 border border-[#0072CE]/30">
                <h4 className="font-bold text-[#0072CE] mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="w-6 h-6" />
                  CEC Approval Ensures:
                </h4>
                <ul className="space-y-3 text-[#b0b0b0]">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                    <span>Batteries meet relevant Australian safety standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                    <span>Products are tested by IEC or JAS-ANZ accredited bodies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                    <span>Compliance with industry best practice requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                    <span>Only lithium-based batteries currently qualify</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Technical Requirements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="card-cosmic p-6">
                  <div className="w-12 h-12 bg-[#FFE500]/20 rounded-full flex items-center justify-center mb-4">
                    <BoltIcon className="w-6 h-6 text-[#FFE500]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">VPP Capability</h4>
                  <p className="text-[#b0b0b0]">On-grid batteries must be VPP (Virtual Power Plant) capable - able to connect to the internet and respond to external signals. You don&apos;t have to join a VPP, but the battery must be capable.</p>
                </div>

                <div className="card-cosmic p-6">
                  <div className="w-12 h-12 bg-[#FFE500]/20 rounded-full flex items-center justify-center mb-4">
                    <SunIcon className="w-6 h-6 text-[#FFE500]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Solar PV Required</h4>
                  <p className="text-[#b0b0b0]">Batteries must be installed with new or existing solar PV (up to 100kW). Standalone batteries without solar are not eligible for the rebate.</p>
                </div>

                <div className="card-cosmic p-6">
                  <div className="w-12 h-12 bg-[#FFE500]/20 rounded-full flex items-center justify-center mb-4">
                    <CheckBadgeIcon className="w-6 h-6 text-[#FFE500]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Safety Standards</h4>
                  <p className="text-[#b0b0b0]">Must comply with AS/NZS 5139:2019 and the Best Practice Guide: Battery Storage Equipment for safe installation.</p>
                </div>

                <div className="card-cosmic p-6">
                  <div className="w-12 h-12 bg-[#FFE500]/20 rounded-full flex items-center justify-center mb-4">
                    <UserIcon className="w-6 h-6 text-[#FFE500]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Accredited Installer</h4>
                  <p className="text-[#b0b0b0]">Installation must be carried out or supervised by a technician accredited by Solar Accreditation Australia (SAA).</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                What Qualifies and What Doesn&apos;t
              </h2>

              <div className="card-cosmic p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckIcon className="w-6 h-6 text-[#0072CE]" />
                      Eligible Systems
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">New CEC-approved lithium batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">On-grid systems (VPP capable)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">Off-grid systems (no VPP requirement)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">Residential, small business, community</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">Additions to existing solar systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <XIcon className="w-6 h-6 text-red-500" />
                      NOT Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">Electric vehicle (EV) batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">EV charging systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">Used or refurbished batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">Grid-only storage (no solar)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#b0b0b0]">Non-CEC approved products</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Popular CEC-Approved Batteries
              </h2>

              <p className="text-[#b0b0b0] text-lg mb-6">
                Here are some of the most popular battery brands and models that are CEC-approved and eligible for
                the rebate:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {['Tesla Powerwall', 'BYD Battery-Box', 'Enphase IQ', 'SolarEdge Home Battery', 'LG RESU', 'Sungrow SBR', 'Alpha ESS', 'Huawei LUNA'].map((brand) => (
                  <div key={brand} className="glass px-4 py-3 rounded-lg text-center border border-white/10">
                    <span className="text-white font-medium">{brand}</span>
                  </div>
                ))}
              </div>

              <div className="card-cosmic p-6 mb-10 border border-[#FFE500]/30">
                <h4 className="font-bold text-[#FFE500] mb-3 flex items-center gap-2">
                  <InformationCircleIcon className="w-6 h-6" />
                  Important Note
                </h4>
                <p className="text-[#b0b0b0]">
                  The CEC approved product list is regularly updated. Always verify that your chosen battery is on
                  the current list at the time of installation. We can help you select a compliant system that
                  qualifies for the full rebate.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Rebate Value by Battery Size
              </h2>

              <div className="card-cosmic overflow-hidden mb-10">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#FFE500]/20 to-[#0072CE]/20">
                    <tr>
                      <th className="text-left p-4 text-white">Battery Size</th>
                      <th className="text-right p-4 text-white">Estimated Rebate (2025)</th>
                      <th className="text-center p-4 text-white">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-4 font-medium text-white">5 kWh</td>
                      <td className="p-4 text-right font-bold text-[#FFE500]">~$1,650</td>
                      <td className="p-4 text-center text-[#b0b0b0]">Basic backup</td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="p-4 font-medium text-white">10 kWh</td>
                      <td className="p-4 text-right font-bold text-[#FFE500]">~$3,300</td>
                      <td className="p-4 text-center text-[#b0b0b0]">Average home</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">13.5 kWh</td>
                      <td className="p-4 text-right font-bold text-[#FFE500]">~$4,450</td>
                      <td className="p-4 text-center text-[#b0b0b0]">Tesla Powerwall</td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="p-4 font-medium text-white">20 kWh</td>
                      <td className="p-4 text-right font-bold text-[#FFE500]">~$6,600</td>
                      <td className="p-4 text-center text-[#b0b0b0]">Large home</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">30 kWh</td>
                      <td className="p-4 text-right font-bold text-[#FFE500]">~$9,900</td>
                      <td className="p-4 text-center text-[#b0b0b0]">Small business</td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="p-4 font-medium text-white">50 kWh+</td>
                      <td className="p-4 text-right font-bold text-[#FFE500]">~$16,500 (capped)</td>
                      <td className="p-4 text-center text-[#b0b0b0]">Commercial</td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-4 bg-white/5 text-sm text-[#b0b0b0]">
                  * Rebate capped at 50kWh usable capacity. Based on $330/kWh after admin fees.
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="card-cosmic p-8 sm:p-12 text-center mt-12 bg-gradient-to-r from-[#FFE500]/10 to-[#0072CE]/10 border border-[#FFE500]/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Not Sure If Your Battery Qualifies?
              </h2>
              <p className="text-lg text-[#b0b0b0] mb-8 max-w-2xl mx-auto">
                We only install CEC-approved battery systems with accredited technicians. Let us help you choose
                the right battery that qualifies for the maximum rebate.
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
                For official information about CEC approved products and battery requirements:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.cleanenergycouncil.org.au/industry-programs/products-program/batteries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0072CE] hover:text-[#FFE500] font-semibold transition-colors"
                >
                  CEC Approved Products
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://cer.gov.au/batteries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0072CE] hover:text-[#FFE500] font-semibold transition-colors"
                >
                  Clean Energy Regulator
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to Articles */}
            <div className="mt-8 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[#0072CE] hover:text-[#FFE500] font-semibold transition-colors"
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
