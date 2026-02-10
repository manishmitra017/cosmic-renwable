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

const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CurrencyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ExclamationIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const SunIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

export default function NSWBatteryRebateGuide2026() {
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
                NSW Homeowners: Your Complete 2026 Guide to{' '}
                <span className="text-[#fee000]">Battery Rebates &amp; Savings</span>
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Federal rebates are dropping fast and NSW electricity prices keep climbing &mdash; here&apos;s exactly how to stack every available incentive before it&apos;s too late
              </p>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span className="text-[#fee000]">February 2026</span>
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
                  src="/solarroof8.jpg"
                  alt="Solar panels and battery installation on NSW home"
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
                NSW households can <strong>stack federal and state battery incentives</strong> to save thousands on installation &mdash; but the federal STC multiplier drops from 8.4 to 6.8 in May 2026, meaning a 13.5kWh battery installed <strong>before May costs ~$900 less</strong> than one installed after. With NSW electricity bills averaging $1,800&ndash;$2,400/year, acting now delivers the best return.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why NSW Homeowners Are Paying Too Much for Electricity
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                New South Wales has some of the <strong className="text-[#333333]">highest electricity prices in Australia</strong>. The average NSW household is now paying between $1,800 and $2,400 per year on electricity alone &mdash; and that number is projected to rise further as ageing coal plants close and wholesale energy costs climb.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                If you&apos;re on a time-of-use tariff (most NSW households are), you&apos;re likely paying <strong className="text-[#333333]">40&ndash;55 cents per kWh during peak hours</strong> between 3pm and 9pm. That&apos;s exactly when your family gets home, turns on the air conditioning, cooks dinner, and runs the dishwasher. Without a battery, every kilowatt-hour of that usage comes straight from the grid at premium rates &mdash; even if your solar panels generated plenty of free energy earlier in the day.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The good news? There has never been a better combination of government incentives for NSW households to install a battery system. But the window for maximum savings is closing fast.
              </p>

              {/* Urgency Banner */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-10 flex items-start gap-4">
                <ExclamationIcon className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-700 mb-2">Rebate Reduction Alert &mdash; May 2026</h3>
                  <p className="text-red-600">
                    The federal STC factor drops from <strong>8.4 to 6.8</strong> on 1 May 2026. For a 13.5kWh battery, that means <strong>~$900 less in rebates</strong> if you wait. The STC system reduces every year until it phases out entirely &mdash; the savings you can lock in today won&apos;t be available tomorrow.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Every Rebate Available to NSW Homeowners in 2026
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                NSW residents are in a unique position: you can <strong className="text-[#333333]">stack both federal and state incentives</strong> to dramatically reduce the upfront cost of a battery. Here&apos;s the full breakdown:
              </p>

              {/* Rebate 1: Federal STCs */}
              <div className="bg-white p-6 mb-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                  <CurrencyIcon className="w-6 h-6 text-[#0073b9]" />
                  1. Federal Cheaper Home Batteries Program (STCs)
                </h3>
                <p className="text-[#444444] mb-4">
                  The federal government&apos;s $2.3 billion program provides an automatic ~30% discount on eligible battery systems through Small-scale Technology Certificates (STCs). Your installer claims these on your behalf &mdash; the discount is applied directly to your quote.
                </p>
                <div className="bg-[#efefef] rounded-lg p-4">
                  <p className="text-[#333333] font-semibold mb-2">STC Factor Timeline (per kWh of battery capacity):</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="py-2 pr-4 text-[#333333]">Period</th>
                          <th className="py-2 pr-4 text-[#333333]">STC Factor</th>
                          <th className="py-2 pr-4 text-[#333333]">Approx. Rebate (13.5kWh)</th>
                          <th className="py-2 text-[#333333]">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 pr-4 text-[#666666]">2025 (Jul&ndash;Dec)</td>
                          <td className="py-2 pr-4 text-[#666666]">9.3</td>
                          <td className="py-2 pr-4 text-[#666666]">~$5,000</td>
                          <td className="py-2 text-[#666666]">Expired</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-green-50">
                          <td className="py-2 pr-4 text-[#333333] font-semibold">Jan&ndash;Apr 2026</td>
                          <td className="py-2 pr-4 text-[#333333] font-semibold">8.4</td>
                          <td className="py-2 pr-4 text-[#333333] font-semibold">~$4,500</td>
                          <td className="py-2 text-green-700 font-semibold">Current &mdash; Act Now</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 pr-4 text-[#666666]">May&ndash;Dec 2026</td>
                          <td className="py-2 pr-4 text-[#666666]">6.8</td>
                          <td className="py-2 pr-4 text-[#666666]">~$3,600</td>
                          <td className="py-2 text-orange-600">Reduced</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Rebate 2: NSW State */}
              <div className="bg-white p-6 mb-10 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                  <BoltIcon className="w-6 h-6 text-[#0073b9]" />
                  2. NSW Household Energy Saving Upgrades Program
                </h3>
                <p className="text-[#444444] mb-4">
                  The NSW Government runs its own incentive program for household energy upgrades, including battery storage installations. This is <strong className="text-[#333333]">stackable with the federal STC rebate</strong> &mdash; meaning NSW residents effectively get a double discount that households in many other states cannot access.
                </p>
                <p className="text-[#444444]">
                  Eligibility and incentive amounts vary based on household circumstances. Contact us for a personalised assessment of what you qualify for.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Real Savings: What a Battery Does for a Typical NSW Home
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Let&apos;s look at the numbers for a typical NSW household with a <strong className="text-[#333333]">6.6kW solar system and a 13.5kWh battery</strong> &mdash; the most popular combination we install:
              </p>

              {/* NSW Solar Advantage */}
              <div className="bg-white p-6 mb-6 rounded-xl shadow-lg border-2 border-[#0073b9]">
                <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                  <SunIcon className="w-6 h-6 text-[#fee000]" />
                  Sydney&apos;s Solar Advantage
                </h3>
                <p className="text-[#444444] mb-4">
                  Sydney averages <strong className="text-[#333333]">5.7 peak sun hours per day</strong> &mdash; one of the highest solar irradiance levels of any major Australian city. A 6.6kW system in Sydney typically generates 24&ndash;28kWh daily, far more than most households use during daylight hours.
                </p>
                <p className="text-[#444444]">
                  Without a battery, that surplus energy gets exported to the grid for a meagre 3&ndash;6 cents per kWh feed-in tariff. With a battery, you <strong className="text-[#333333]">store it and use it during peak pricing at 40&ndash;55c/kWh</strong> &mdash; a value difference of up to 50 cents per kilowatt-hour.
                </p>
              </div>

              {/* Annual Savings Breakdown */}
              <div className="bg-[#efefef] rounded-xl p-6 mb-10">
                <h3 className="text-xl font-bold text-[#333333] mb-4">Annual Savings Breakdown &mdash; NSW Household</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-3 pr-4 text-[#333333]">Savings Source</th>
                        <th className="py-3 pr-4 text-[#333333]">Annual Value</th>
                        <th className="py-3 text-[#333333]">How It Works</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 pr-4 text-[#444444] font-semibold">Peak Rate Avoidance</td>
                        <td className="py-3 pr-4 text-[#333333] font-bold">$1,000&ndash;$1,400</td>
                        <td className="py-3 text-[#666666]">Battery discharges during 3pm&ndash;9pm peak, avoiding 40&ndash;55c/kWh grid rates</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 pr-4 text-[#444444] font-semibold">Solar Self-Consumption</td>
                        <td className="py-3 pr-4 text-[#333333] font-bold">$300&ndash;$500</td>
                        <td className="py-3 text-[#666666]">Store daytime solar excess instead of exporting at 3&ndash;6c/kWh feed-in</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 pr-4 text-[#444444] font-semibold">VPP Participation</td>
                        <td className="py-3 pr-4 text-[#333333] font-bold">$200&ndash;$500</td>
                        <td className="py-3 text-[#666666]">Earn credits by allowing your battery to support the grid during high-demand events</td>
                      </tr>
                      <tr className="bg-[#fee000]/30">
                        <td className="py-3 pr-4 text-[#083941] font-bold text-lg">Total Annual Savings</td>
                        <td className="py-3 pr-4 text-[#083941] font-bold text-lg">$1,500&ndash;$2,400</td>
                        <td className="py-3 text-[#083941] font-semibold">Combined battery + VPP savings per year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Cost of Waiting: How Rebates Are Shrinking
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The federal STC system was designed to decrease over time, pushing households to act sooner rather than later. Here&apos;s what waiting actually costs for a <strong className="text-[#333333]">13.5kWh battery system</strong>:
              </p>

              {/* Cost Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-500">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                    <span className="text-green-700 font-bold text-sm uppercase">Best Value &mdash; Install Before May 2026</span>
                  </div>
                  <div className="text-3xl font-bold text-[#083941] mb-2">~$4,500</div>
                  <div className="text-lg font-semibold text-[#333333] mb-3">Federal STC Rebate</div>
                  <ul className="space-y-2 text-[#444444] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      STC factor: 8.4 per kWh
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      Plus NSW state incentives (stackable)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      Lowest net out-of-pocket cost
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      Start saving on bills immediately
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-300">
                  <div className="flex items-center gap-2 mb-3">
                    <ClockIcon className="w-6 h-6 text-orange-500" />
                    <span className="text-orange-600 font-bold text-sm uppercase">After May 2026</span>
                  </div>
                  <div className="text-3xl font-bold text-[#083941] mb-2">~$3,600</div>
                  <div className="text-lg font-semibold text-[#333333] mb-3">Federal STC Rebate</div>
                  <ul className="space-y-2 text-[#444444] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">&#9888;</span>
                      STC factor drops to 6.8 per kWh
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">&#9888;</span>
                      ~$900 less in federal rebates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">&#9888;</span>
                      NSW electricity prices likely higher
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">&#9888;</span>
                      Installer demand spikes before deadlines
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Time-of-Use Pricing Makes Batteries Essential in NSW
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Most NSW households are on time-of-use tariffs, which charge dramatically different rates depending on when you use power. A battery lets you shift your energy usage to exploit these price differences:
              </p>

              {/* Time of Use Breakdown */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0073b9]">
                      <tr>
                        <th className="py-3 px-4 text-white font-semibold">Time Period</th>
                        <th className="py-3 px-4 text-white font-semibold">Typical Hours</th>
                        <th className="py-3 px-4 text-white font-semibold">Rate (c/kWh)</th>
                        <th className="py-3 px-4 text-white font-semibold">Battery Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-[#333333] font-semibold">Off-Peak</td>
                        <td className="py-3 px-4 text-[#666666]">10pm&ndash;7am</td>
                        <td className="py-3 px-4 text-green-600 font-bold">15&ndash;22c</td>
                        <td className="py-3 px-4 text-[#666666]">Charge from grid if solar didn&apos;t fill battery</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4 text-[#333333] font-semibold">Shoulder</td>
                        <td className="py-3 px-4 text-[#666666]">7am&ndash;3pm, 9pm&ndash;10pm</td>
                        <td className="py-3 px-4 text-[#333333] font-bold">25&ndash;35c</td>
                        <td className="py-3 px-4 text-[#666666]">Solar charges battery during the day</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="py-3 px-4 text-red-700 font-bold">Peak</td>
                        <td className="py-3 px-4 text-red-600 font-semibold">3pm&ndash;9pm</td>
                        <td className="py-3 px-4 text-red-600 font-bold">40&ndash;55c</td>
                        <td className="py-3 px-4 text-red-700 font-semibold">Battery discharges &mdash; maximum savings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                The maths is straightforward: a 13.5kWh battery cycling daily saves you the difference between peak rates (40&ndash;55c) and the cost of the solar energy you stored (effectively $0). Over a year, this peak-shifting alone can save <strong className="text-[#333333]">$1,000&ndash;$1,400</strong>.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                VPP Earnings: Turn Your Battery Into a Revenue Stream
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Virtual Power Plants (VPPs) aggregate thousands of home batteries to operate as a single, grid-stabilising power source. By enrolling your battery in a VPP program, you earn credits whenever the grid operator draws on your stored energy during high-demand events.
              </p>

              <div className="bg-[#efefef] rounded-xl p-6 mb-10">
                <h3 className="text-xl font-bold text-[#333333] mb-4">VPP Participation in NSW</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0073b9] mb-2">$200&ndash;$500</div>
                    <div className="text-[#444444] text-sm">Annual VPP earnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0073b9] mb-2">5&ndash;15</div>
                    <div className="text-[#444444] text-sm">Dispatch events per year (typical)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0073b9] mb-2">100%</div>
                    <div className="text-[#444444] text-sm">Voluntary &mdash; you control participation</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                5-Year Return on Investment
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Here&apos;s how the numbers stack up for a typical NSW household installing a <strong className="text-[#333333]">13.5kWh battery before May 2026</strong>:
              </p>

              {/* ROI Table */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#083941]">
                      <tr>
                        <th className="py-3 px-4 text-white font-semibold">Item</th>
                        <th className="py-3 px-4 text-white font-semibold text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-[#444444]">13.5kWh Battery System (installed)</td>
                        <td className="py-3 px-4 text-[#333333] font-semibold text-right">$14,000&ndash;$16,000</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-green-50">
                        <td className="py-3 px-4 text-green-700">Less: Federal STC Rebate (8.4 factor)</td>
                        <td className="py-3 px-4 text-green-700 font-semibold text-right">&minus;$4,500</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-green-50">
                        <td className="py-3 px-4 text-green-700">Less: NSW State Incentives</td>
                        <td className="py-3 px-4 text-green-700 font-semibold text-right">&minus;Varies</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-[#fee000]/20">
                        <td className="py-3 px-4 text-[#083941] font-bold">Estimated Net Cost</td>
                        <td className="py-3 px-4 text-[#083941] font-bold text-right">$8,500&ndash;$11,500</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-[#444444]">Annual Bill Savings + VPP</td>
                        <td className="py-3 px-4 text-[#333333] font-semibold text-right">$1,500&ndash;$2,400/yr</td>
                      </tr>
                      <tr className="bg-[#fee000]/30">
                        <td className="py-3 px-4 text-[#083941] font-bold text-lg">Payback Period</td>
                        <td className="py-3 px-4 text-[#083941] font-bold text-lg text-right">4&ndash;6 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                With battery warranties typically covering <strong className="text-[#333333]">10&ndash;15 years</strong>, you can expect <strong className="text-[#333333]">$10,000&ndash;$20,000+ in net savings</strong> over the battery&apos;s lifetime after the payback period. And with NSW electricity prices projected to keep rising as coal-fired generators exit the market, those annual savings are likely to increase year on year.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How to Maximise Your NSW Battery Rebate
              </h2>

              {/* Steps */}
              <div className="bg-white p-6 mb-10 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                  <BoltIcon className="w-6 h-6 text-[#0073b9]" />
                  Your Action Plan
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="text-[#333333]">Get a Free Quote Now</strong>
                      <p className="text-[#444444]">Request a personalised quote from Cosmic Renewable Energy. We&apos;ll assess your home, energy usage, and eligibility for both federal and NSW incentives.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong className="text-[#333333]">Lock In the 8.4 STC Factor</strong>
                      <p className="text-[#444444]">By committing before May 2026, you secure the higher rebate tier. We recommend starting the process by March to ensure installation is completed in time.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong className="text-[#333333]">We Handle All Paperwork</strong>
                      <p className="text-[#444444]">As a CEC-accredited installer, Cosmic Renewable Energy manages your STC claims, NSW incentive applications, and all grid connection paperwork. You don&apos;t need to fill in a single government form.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong className="text-[#333333]">Enrol in a VPP (Optional)</strong>
                      <p className="text-[#444444]">We&apos;ll help you join a Virtual Power Plant program to earn an additional $200&ndash;$500 per year. All modern batteries we install are VPP-ready.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">5</span>
                    <div>
                      <strong className="text-[#333333]">Start Saving From Day One</strong>
                      <p className="text-[#444444]">Your battery starts reducing your electricity bills from the moment it&apos;s switched on. Most NSW households see their first reduced bill within 4&ndash;6 weeks of installation.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why NSW Energy Prices Will Keep Rising
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Several structural factors are pushing NSW electricity prices upward:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-[#efefef] rounded-xl p-5">
                  <h4 className="font-bold text-[#333333] mb-2">Coal Plant Closures</h4>
                  <p className="text-[#444444] text-sm">NSW&apos;s remaining coal generators are ageing and scheduled for closure. As baseload capacity shrinks, wholesale prices tend to increase during transition periods.</p>
                </div>
                <div className="bg-[#efefef] rounded-xl p-5">
                  <h4 className="font-bold text-[#333333] mb-2">Grid Infrastructure Costs</h4>
                  <p className="text-[#444444] text-sm">Billions of dollars in transmission upgrades are being passed through to consumers. Network charges make up roughly 40&ndash;50% of your bill.</p>
                </div>
                <div className="bg-[#efefef] rounded-xl p-5">
                  <h4 className="font-bold text-[#333333] mb-2">Gas Price Volatility</h4>
                  <p className="text-[#444444] text-sm">Gas-fired peaker plants set the price during peak demand. International gas market volatility directly impacts NSW peak electricity rates.</p>
                </div>
                <div className="bg-[#efefef] rounded-xl p-5">
                  <h4 className="font-bold text-[#333333] mb-2">Growing Demand</h4>
                  <p className="text-[#444444] text-sm">Electrification of transport and heating is increasing total demand. More EVs and heat pumps mean more grid strain, especially during peak hours.</p>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                Every year you wait to install a battery is a year of paying premium electricity prices you didn&apos;t need to pay &mdash; and a year closer to lower rebates.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-[#fee000] rounded-2xl p-8 sm:p-12 text-center mt-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#083941] mb-4">
                NSW Homeowners: Lock In Your <span className="text-[#0073b9]">Maximum Battery Rebate</span>
              </h2>
              <p className="text-lg text-[#083941]/90 mb-4 max-w-2xl mx-auto">
                The 8.4 STC factor expires in May 2026. Every week you delay risks missing out on ~$900 in additional federal rebates for a 13.5kWh system.
              </p>
              <p className="text-[#083941]/80 mb-8 max-w-2xl mx-auto">
                Cosmic Renewable Energy is a CEC-accredited installer serving NSW homeowners. We handle all rebate paperwork, provide tier-one battery products, and offer free, no-obligation quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-[#0073b9] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#005a91] transition-colors"
                >
                  Get Free Quote
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <a
                  href="tel:1300090984"
                  className="bg-[#083941] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#062d33] transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call 1300 09 09 84
                </a>
              </div>
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
