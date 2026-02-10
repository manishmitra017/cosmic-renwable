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

const CurrencyDollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

export default function WesternAustraliaSolarBatteryGuideArticle() {
  return (
    <div className="bg-white">
      <article>
        {/* Header */}
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
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white border border-white/30">Guides</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Western Australia Solar Battery Guide: Perth Homeowners Are Leaving <span className="text-[#fee000]">Thousands on the Table</span>
              </h1>
              <p className="text-xl text-white/90 mb-6">
                WA&apos;s rock-bottom feed-in tariffs and solar curtailment mean most Perth solar owners are giving away their energy for almost nothing. Here&apos;s how to fix that &mdash; before federal rebates drop in May 2026.
              </p>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span>February 2026</span>
                <span className="text-[#fee000]">|</span>
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
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/solarroof5.jpg"
                  alt="Solar panels and battery storage on a Perth home in Western Australia"
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
            <div className="bg-[#fee000] p-6 mb-10 border-l-4 border-[#083941] rounded-r-xl">
              <h2 className="text-xl font-bold text-[#083941] mb-3 flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                Key Takeaway for Perth Homeowners
              </h2>
              <p className="text-[#083941] text-lg">
                WA&apos;s Distributed Energy Buyback Scheme pays you just <strong>2.25c/kWh</strong> for off-peak solar exports &mdash; meaning you&apos;re essentially giving your solar energy away for free. A battery lets you store and use that energy yourself, saving <strong>$1,200&ndash;$1,800 per year</strong>. With federal STC rebates dropping from May 2026, early 2026 is the best time to act.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                WA&apos;s Solar Paradox: Best Sunshine, Worst Returns
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Perth averages <strong className="text-[#333333]">5.8 peak sun hours per day</strong> &mdash; the highest of any Australian capital city. Western Australia has some of the best solar conditions on the planet. And yet, tens of thousands of WA homeowners with solar panels are barely benefiting from all that sunshine.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The reason? WA&apos;s electricity market is fundamentally different from the rest of Australia. Operating on the South West Interconnected System (SWIS) &mdash; completely separate from the National Electricity Market &mdash; WA has its own rules, its own dominant retailer in Synergy, and critically, its own feed-in tariff scheme that pays solar owners next to nothing for exported energy.
              </p>

              {/* DEBS Feed-in Tariff Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0073b9] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CurrencyDollarIcon className="w-6 h-6" />
                    WA Distributed Energy Buyback Scheme (DEBS) Rates
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Period</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Export Rate</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Grid Buy Rate</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">You Lose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">Peak (3pm&ndash;9pm)</td>
                        <td className="p-4 text-right text-[#333333]">10c/kWh</td>
                        <td className="p-4 text-right text-[#333333]">~30c/kWh</td>
                        <td className="p-4 text-center text-red-600 font-semibold">20c/kWh</td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">Off-Peak (all other times)</td>
                        <td className="p-4 text-right font-bold text-red-600">2.25c/kWh</td>
                        <td className="p-4 text-right font-bold text-[#083941]">~30c/kWh</td>
                        <td className="p-4 text-center text-red-600 font-bold">~28c/kWh</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  Most solar generation occurs during off-peak DEBS hours (9am&ndash;3pm), meaning the vast majority of your exports earn just 2.25c/kWh.
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                Let that sink in. Your solar panels generate most of their energy between 9am and 3pm &mdash; which falls entirely within the off-peak DEBS window. That means every kilowatt-hour you export to the grid earns you <strong className="text-[#333333]">2.25 cents</strong>. Meanwhile, when you buy that same energy back from Synergy in the evening, you&apos;re paying around <strong className="text-[#333333]">30 cents per kWh</strong>. That&apos;s a 13:1 ratio working against you.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Solar Curtailment Problem
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                It gets worse. WA has a unique &quot;solar curtailment&quot; issue that doesn&apos;t affect most eastern states homeowners. During periods of high rooftop solar generation &mdash; typically sunny midday hours &mdash; Synergy and Western Power can actively <strong className="text-[#333333]">limit or switch off your solar exports</strong> to protect grid stability on the SWIS.
              </p>

              {/* Curtailment Warning Box */}
              <div className="bg-white p-6 mb-10 border border-[#0073b9] rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0073b9] mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  What Solar Curtailment Means for You
                </h3>
                <ul className="space-y-4 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">1.</span>
                    <div>
                      <strong className="text-[#333333]">Your panels get throttled.</strong> Even on perfect sunny days, your inverter may be instructed to reduce output. You paid for a 6.6kW system but it might only produce 3&ndash;4kW during curtailment events.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">2.</span>
                    <div>
                      <strong className="text-[#333333]">You&apos;re losing free energy.</strong> Energy your panels could be generating is simply wasted. Without a battery to absorb the excess, that potential saving disappears into thin air.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">3.</span>
                    <div>
                      <strong className="text-[#333333]">Curtailment is increasing.</strong> As more WA households install solar, the grid saturation problem worsens. The frequency and duration of curtailment events are expected to grow &mdash; making batteries even more critical.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">4.</span>
                    <div>
                      <strong className="text-[#333333]">A battery solves the problem entirely.</strong> Instead of exporting into a curtailed grid for 2.25c/kWh (or nothing at all), a battery stores your excess solar for evening use when grid power costs 30c/kWh.
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Battery Advantage: Real Numbers for Perth Homes
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                A battery transforms the economics of solar in WA. Instead of exporting energy for almost nothing, you store it and use it when electricity is expensive. Here&apos;s what that looks like in practice:
              </p>

              {/* Savings Breakdown */}
              <div className="bg-[#efefef] p-6 rounded-xl mb-10">
                <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                  <SunIcon className="w-6 h-6" />
                  Perth Household Energy Savings Comparison
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg">
                    <div className="text-sm text-[#666666] font-semibold mb-1">No Solar</div>
                    <div className="text-3xl font-bold text-red-500 mb-2">$1,600&ndash;$2,200<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">100% grid dependent</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Solar Only (6.6kW)</div>
                    <div className="text-3xl font-bold text-[#333333] mb-2">$800&ndash;$1,100<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">30&ndash;40% self-consumption</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg border-2 border-[#0073b9]">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Solar + Battery (6.6kW + 13.5kWh)</div>
                    <div className="text-3xl font-bold text-[#0073b9] mb-2">$1,200&ndash;$1,800<span className="text-base font-normal text-[#666666]">/year saved</span></div>
                    <div className="text-sm text-green-600 font-semibold">70&ndash;85% self-consumption</div>
                  </div>
                </div>
                <p className="text-sm text-[#666666] mt-4">
                  Based on average Perth household consumption of ~4,800 kWh/year with Synergy tariffs. Battery enables dramatically higher self-consumption, eliminating reliance on low DEBS export rates.
                </p>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                The difference is stark. Without a battery, a solar-only home in Perth typically self-consumes just 30&ndash;40% of the energy it generates. The rest gets exported for 2.25c/kWh. With a battery, self-consumption jumps to <strong className="text-[#333333]">70&ndash;85%</strong>, and your annual savings increase to <strong className="text-[#333333]">$1,200&ndash;$1,800</strong>. In WA&apos;s unique energy market, a battery isn&apos;t a luxury &mdash; it&apos;s the difference between a mediocre and an excellent return on your solar investment.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Federal Rebates Are Dropping &mdash; Here&apos;s What&apos;s at Stake
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                WA doesn&apos;t have a state-level battery rebate like Victoria&apos;s Solar Homes program. However, the federal Cheaper Home Batteries Program applies Australia-wide, providing approximately a <strong className="text-[#333333]">30% discount</strong> on battery systems through Small-scale Technology Certificates (STCs). But these incentives are on a countdown.
              </p>

              {/* STC Rebate Timeline Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#083941] p-4">
                  <h3 className="text-xl font-bold text-white">Federal Battery Rebate Timeline for WA Homeowners</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Period</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">STC Rate</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Discount on 13.5kWh Battery</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">Jan&ndash;Apr 2026</td>
                        <td className="p-4 text-right font-bold text-green-600">8.4</td>
                        <td className="p-4 text-right font-bold text-green-600">~$4,500</td>
                        <td className="p-4 text-center"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Available Now</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">May&ndash;Dec 2026</td>
                        <td className="p-4 text-right text-[#333333]">6.8</td>
                        <td className="p-4 text-right text-[#333333]">~$3,650</td>
                        <td className="p-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">Reduced</span></td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2027</td>
                        <td className="p-4 text-right text-[#333333]">Lower still</td>
                        <td className="p-4 text-right text-[#666666]">~$2,800&ndash;$3,100</td>
                        <td className="p-4 text-center"><span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">Declining</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2031</td>
                        <td className="p-4 text-right text-red-600">0</td>
                        <td className="p-4 text-right text-red-600">$0</td>
                        <td className="p-4 text-center"><span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">Programme Ends</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  STC values are applied as a point-of-sale discount by your installer. The discount shown is approximate and based on current STC market prices for a 13.5kWh battery system.
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                The numbers are clear: ordering a battery before May 2026 saves you approximately <strong className="text-[#333333]">$850 more</strong> in federal rebates compared to waiting just a few months. And the gap only widens with each passing year. By 2031, the STC programme ends entirely and no federal discount will be available.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Perth&apos;s Extreme Summers: Batteries as Backup
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                There&apos;s another compelling reason for WA homeowners to invest in battery storage that goes beyond bill savings. Perth summers are getting hotter, and extreme heat events are becoming more frequent. During heatwaves, the SWIS grid comes under enormous strain as air conditioning demand surges.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                A home battery provides <strong className="text-[#333333]">backup power during grid outages</strong> &mdash; keeping your lights on, your fridge running, and critically, your air conditioning operating during dangerous heat events. For families with young children, elderly members, or anyone with health concerns, this isn&apos;t just about saving money &mdash; it&apos;s about safety and peace of mind.
              </p>

              {/* WA-Specific Advantages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 text-center border-2 border-[#fee000] rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#083941] mb-2">5.8hrs</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Peak Sun Hours</div>
                  <div className="text-sm text-[#666666]">Perth leads all capital cities</div>
                  <div className="text-sm text-[#0073b9] font-semibold mt-2">Maximum solar generation</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-[#0073b9] rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#0073b9] mb-2">70&ndash;85%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Self-Consumption</div>
                  <div className="text-sm text-[#666666]">With solar + battery</div>
                  <div className="text-sm text-[#0073b9] font-semibold mt-2">Vs 30&ndash;40% solar only</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-green-500 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">$4,500</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Federal Discount</div>
                  <div className="text-sm text-[#666666]">On 13.5kWh battery (early 2026)</div>
                  <div className="text-sm text-red-500 font-semibold mt-2">Drops from May 2026</div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The True Cost of Waiting in WA
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Some Perth homeowners are tempted to wait, hoping battery prices will drop further. But every month of waiting has a real, measurable cost in WA&apos;s unique energy market:
              </p>

              {/* Cost of Waiting Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#083941] p-4">
                  <h3 className="text-xl font-bold text-white">The True Cost of Delaying Battery Installation</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Factor</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Install Now (Early 2026)</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Wait Until Late 2026</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Wait Until 2027</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">Federal STC Discount</td>
                        <td className="p-4 text-right font-semibold text-green-600">~$4,500</td>
                        <td className="p-4 text-right text-[#666666]">~$3,650</td>
                        <td className="p-4 text-right text-[#666666]">~$2,800&ndash;$3,100</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Energy savings lost (vs. exporting at 2.25c)</td>
                        <td className="p-4 text-right font-semibold text-green-600">$0</td>
                        <td className="p-4 text-right text-red-600">-$600&ndash;$900</td>
                        <td className="p-4 text-right text-red-600">-$1,200&ndash;$1,800</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Curtailment losses avoided</td>
                        <td className="p-4 text-right font-semibold text-green-600">Immediately</td>
                        <td className="p-4 text-right text-[#666666]">6+ months wasted</td>
                        <td className="p-4 text-right text-[#666666]">12+ months wasted</td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-bold text-[#083941]">Total Cost of Waiting</td>
                        <td className="p-4 text-right font-bold text-green-600">Best Value</td>
                        <td className="p-4 text-right font-bold text-red-600">~$1,750 worse off</td>
                        <td className="p-4 text-right font-bold text-red-600">~$3,600 worse off</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  Based on a 6.6kW solar + 13.5kWh battery system for a typical Perth household. Energy savings assume current Synergy tariffs and DEBS rates.
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                In Western Australia, the maths is even more compelling than other states. With feed-in tariffs this low and curtailment growing, <strong className="text-[#333333]">every day without a battery is a day you&apos;re paying full grid price for energy your panels could have stored for free</strong>. Waiting six months costs roughly $1,750. Waiting a full year costs over $3,600.
              </p>

              {/* Quote Box */}
              <blockquote className="bg-[#efefef] p-6 mb-10 border-l-4 border-[#0073b9] italic text-[#444444] rounded-r-xl">
                <p className="mb-4">
                  &quot;Western Australia&apos;s combination of exceptional solar resources and extremely low feed-in tariffs creates the strongest economic case for home battery storage anywhere in Australia. For WA homeowners with existing solar, adding a battery is the single most impactful energy investment they can make.&quot;
                </p>
                <cite className="text-[#0073b9] not-italic font-semibold">
                  &mdash; Clean Energy Council, Distributed Energy Resources Report 2025
                </cite>
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What Perth Homeowners Should Do Right Now
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Whether you already have solar or you&apos;re considering a complete solar + battery system, the steps are the same:
              </p>

              <div className="bg-white p-6 mb-10 border border-[#0073b9] rounded-xl shadow-lg">
                <ul className="space-y-4 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">1.</span>
                    <div>
                      <strong className="text-[#333333]">Get a quote before May 2026.</strong> Lock in the higher STC rate of 8.4 (worth ~$4,500 on a 13.5kWh battery) before it drops to 6.8 from May.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">2.</span>
                    <div>
                      <strong className="text-[#333333]">Size your battery for maximum self-consumption.</strong> In WA&apos;s market, the goal is to use as much of your own solar as possible. A 13.5kWh battery suits most Perth households with 6.6kW solar.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">3.</span>
                    <div>
                      <strong className="text-[#333333]">Check HEES eligibility.</strong> WA&apos;s Household Energy Efficiency Scheme may provide additional support for eligible households.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">4.</span>
                    <div>
                      <strong className="text-[#333333]">Choose an installer who understands WA.</strong> The SWIS operates differently from the NEM. You need an installer who understands Synergy&apos;s requirements, Western Power&apos;s connection rules, and WA&apos;s curtailment landscape. Cosmic Renewable Energy specialises in WA solar and battery installations.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-[#fee000] p-8 sm:p-12 text-center mt-12 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#083941] mb-4">
                Stop Giving Your Solar Energy Away for 2.25c
              </h2>
              <p className="text-lg text-[#083941]/80 mb-8 max-w-2xl mx-auto">
                WA&apos;s rock-bottom feed-in tariffs mean every day without a battery is money lost. Federal rebates drop from May 2026 &mdash; get your free, no-obligation quote from Cosmic Renewable Energy today and find out exactly how much you could save.
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
                  className="bg-[#083941] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#083941]/90 transition-colors"
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
