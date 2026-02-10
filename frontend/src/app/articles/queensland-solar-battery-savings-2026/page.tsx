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

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
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

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

export default function QueenslandSolarBatterySavingsArticle() {
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
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white border border-white/30">Industry News</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Queensland&apos;s Solar Goldmine: Why the <span className="text-[#fee000]">Sunshine State Needs Batteries</span> Now More Than Ever
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Queensland has the best solar conditions in Australia &mdash; but without a battery, most households are giving away their energy for almost nothing. Here&apos;s why the numbers demand action before May 2026.
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
                  src="/solarroof3.jpg"
                  alt="Solar panels on Queensland home generating maximum energy in the Sunshine State"
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
                Key Takeaway for Queensland Homeowners
              </h2>
              <p className="text-[#083941] text-lg">
                Queensland generates more solar energy per panel than anywhere else in Australia, but without a battery you&apos;re exporting power at 5&ndash;8c/kWh and buying it back at 35&ndash;50c/kWh at night. A battery boosts self-consumption from ~35% to <strong>70&ndash;90%</strong>, saving <strong>$1,200&ndash;$1,800 per year</strong>. Federal rebates drop significantly in May 2026 &mdash; costing you $820+ if you wait.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Australia&apos;s Best Solar &mdash; But Where Are the Batteries?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Queensland isn&apos;t called the Sunshine State for nothing. Brisbane averages 5.9 peak sun hours per day &mdash; significantly more than Melbourne (4.5) or Sydney (5.2). Head north to Townsville or Cairns and you&apos;re looking at 6.5+ peak sun hours, some of the highest solar irradiance figures on the planet.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                This means a standard 6.6kW solar system on a Queensland roof can generate <strong className="text-[#333333]">25&ndash;35 kWh of clean energy every single day</strong>. That&apos;s enough to power most households twice over. Yet despite this incredible solar resource, Queensland has one of the lowest battery uptake rates in the country. The result? Millions of dollars of free energy being exported to the grid for almost nothing.
              </p>

              {/* Solar Comparison Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0073b9] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <SunIcon className="w-6 h-6" />
                    Queensland Solar Advantage vs Other States
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Location</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Peak Sun Hours/Day</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Daily Output (6.6kW)</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Annual Output</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">North QLD (Townsville)</td>
                        <td className="p-4 text-right font-bold text-[#083941]">6.5+</td>
                        <td className="p-4 text-right font-bold text-[#083941]">~35 kWh</td>
                        <td className="p-4 text-right font-bold text-[#083941]">~12,700 kWh</td>
                      </tr>
                      <tr className="bg-[#fee000]/10">
                        <td className="p-4 font-semibold text-[#083941]">Brisbane / SE QLD</td>
                        <td className="p-4 text-right font-bold text-[#083941]">5.9</td>
                        <td className="p-4 text-right font-bold text-[#083941]">~30 kWh</td>
                        <td className="p-4 text-right font-bold text-[#083941]">~10,900 kWh</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Sydney, NSW</td>
                        <td className="p-4 text-right text-[#333333]">5.2</td>
                        <td className="p-4 text-right text-[#333333]">~26 kWh</td>
                        <td className="p-4 text-right text-[#333333]">~9,500 kWh</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Melbourne, VIC</td>
                        <td className="p-4 text-right text-[#333333]">4.5</td>
                        <td className="p-4 text-right text-[#333333]">~22 kWh</td>
                        <td className="p-4 text-right text-[#333333]">~8,100 kWh</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  Based on a 6.6kW system with north-facing panels. Actual output varies by roof orientation, shading, and panel efficiency.
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Feed-in Tariff Collapse: Why Solar Alone Isn&apos;t Enough Anymore
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                A decade ago, Queensland solar owners were paid generously for every kilowatt-hour they exported to the grid. Those days are long gone. Feed-in tariffs have collapsed across the state, with most retailers now offering just <strong className="text-[#333333]">5&ndash;8 cents per kWh</strong> for exported solar &mdash; and some as low as 3c/kWh.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Meanwhile, the electricity you buy from the grid at night costs <strong className="text-[#333333]">35&ndash;50 cents per kWh</strong> on time-of-use peak tariffs. That&apos;s a staggering gap. Without a battery, a typical QLD home with solar only self-consumes 30&ndash;40% of the energy it generates. The rest goes to the grid for pennies and you buy it back at night for dollars.
              </p>

              {/* The Problem Visualised */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 border-2 border-red-400 rounded-xl shadow-lg">
                  <div className="text-sm text-red-600 font-semibold mb-2">WITHOUT BATTERY</div>
                  <div className="text-4xl font-bold text-red-500 mb-2">30&ndash;40%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-3">Self-Consumption</div>
                  <ul className="text-sm text-[#666666] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#x2717;</span>
                      <span>Export 60&ndash;70% of solar at 5&ndash;8c/kWh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#x2717;</span>
                      <span>Buy grid power at 35&ndash;50c/kWh at night</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">&#x2717;</span>
                      <span>No blackout protection during storms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 border-2 border-green-500 rounded-xl shadow-lg">
                  <div className="text-sm text-green-600 font-semibold mb-2">WITH BATTERY</div>
                  <div className="text-4xl font-bold text-green-600 mb-2">70&ndash;90%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-3">Self-Consumption</div>
                  <ul className="text-sm text-[#666666] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#x2713;</span>
                      <span>Store surplus solar for evening use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#x2713;</span>
                      <span>Save $1,200&ndash;$1,800 per year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#x2713;</span>
                      <span>Backup power during QLD storm season</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                QLD Electricity Costs: Rising and Not Slowing Down
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The average Queensland household now spends between <strong className="text-[#333333]">$1,500 and $2,100 per year</strong> on electricity. Queensland offers both flat-rate and time-of-use tariff structures, and for households without solar and battery, both are becoming increasingly painful.
              </p>

              {/* TOU Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 text-center border-2 border-green-500 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">18&ndash;25c</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Off-Peak</div>
                  <div className="text-sm text-[#666666]">10pm &ndash; 7am</div>
                  <div className="text-sm text-[#666666]">Weekends &amp; holidays</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-[#fee000] rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#083941] mb-2">25&ndash;35c</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Shoulder</div>
                  <div className="text-sm text-[#666666]">7am &ndash; 4pm</div>
                  <div className="text-sm text-[#666666]">9pm &ndash; 10pm</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-red-500 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-red-500 mb-2">35&ndash;50c</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Peak</div>
                  <div className="text-sm text-[#666666]">4pm &ndash; 9pm weekdays</div>
                  <div className="text-sm text-red-500 font-semibold mt-2">When your family needs power most</div>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                A battery flips this equation entirely. Your panels generate power during the cheap shoulder period, the battery stores it, and you use your own stored solar during the expensive evening peak. Instead of paying 35&ndash;50c/kWh from the grid, you&apos;re drawing from your battery at effectively zero cost.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Federal Rebate Deadline: Why May 2026 Matters
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The Cheaper Home Batteries Program provides substantial discounts via Small-scale Technology Certificates (STCs). Right now, the STC multiplier sits at <strong className="text-[#333333]">9.3 STCs per kWh</strong> of battery capacity. But from May 2026, it drops to just 6.8 STCs per kWh. For a typical 13.5kWh battery, the difference is significant:
              </p>

              {/* Rebate Comparison Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#083941] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CurrencyDollarIcon className="w-6 h-6" />
                    Federal Battery Rebate: Before vs After May 2026
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Factor</th>
                        <th className="text-right p-4 font-semibold text-green-600">Before May 2026</th>
                        <th className="text-right p-4 font-semibold text-red-600">After May 2026</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">STC Multiplier</td>
                        <td className="p-4 text-right font-semibold text-green-600">9.3 STCs/kWh</td>
                        <td className="p-4 text-right text-red-600">6.8 STCs/kWh</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Total STCs (13.5kWh battery)</td>
                        <td className="p-4 text-right font-semibold text-green-600">~113 STCs</td>
                        <td className="p-4 text-right text-red-600">~92 STCs</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Discount at ~$40/STC</td>
                        <td className="p-4 text-right font-semibold text-green-600">~$4,500</td>
                        <td className="p-4 text-right text-red-600">~$3,680</td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-bold text-[#083941]">You Lose by Waiting</td>
                        <td className="p-4 text-right font-bold text-green-600">Maximum savings</td>
                        <td className="p-4 text-right font-bold text-red-600">$820 less discount</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  STC values fluctuate on the open market. $40/STC is a current estimate. Actual discount applied at point of sale.
                </div>
              </div>

              {/* Urgency Callout */}
              <div className="bg-white p-6 mb-10 border border-red-400 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  The $820 Question: Can You Afford to Wait?
                </h3>
                <p className="text-[#444444] mb-4">
                  That $820 rebate reduction is just the start. Every month without a battery also means you&apos;re losing $100&ndash;$150 in electricity savings you could have been keeping. Over a full year of delay, the combined cost of lower rebates plus lost savings adds up to <strong className="text-[#333333]">over $2,000</strong>.
                </p>
                <p className="text-[#444444]">
                  The STC multiplier will continue dropping every year until it reaches zero in 2030. There is no scenario where waiting gives you a better deal.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Queensland-Specific Incentives: Supercharged Solar for Renters
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Queensland also offers the <strong className="text-[#333333]">&quot;Supercharged Solar for Renters&quot;</strong> program, providing landlords with a <strong className="text-[#333333]">$3,500 rebate</strong> to install solar on rental properties. If you&apos;re a property investor with rental homes in Queensland, this is an exceptional opportunity to increase property value, attract quality tenants, and access government support before the program runs out.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Combined with the federal STC discount on batteries, Queensland landlords and homeowners have access to some of the most generous solar and battery incentives in the country right now. But as with all government programs, funding is limited and allocations are being consumed quickly.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Storm Season Protection: The Benefit You Can&apos;t Put a Price On
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Queensland faces increasing summer storms, cyclone threats, and grid outages. The 2024&ndash;25 storm season saw extended blackouts across South-East Queensland, leaving thousands of families without power for days. Traditional solar systems shut down during grid outages as a safety measure &mdash; meaning your panels are useless when you need them most.
              </p>

              {/* Blackout Protection Box */}
              <div className="bg-white p-6 mb-10 border border-[#0073b9] rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0073b9] mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="w-6 h-6" />
                  Battery Blackout Protection
                </h3>
                <ul className="space-y-4 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">1.</span>
                    <div>
                      <strong className="text-[#333333]">Automatic switchover.</strong> When the grid goes down, a battery system with backup capability seamlessly switches to stored power within milliseconds. Your lights stay on, your fridge keeps running, and your family stays comfortable.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">2.</span>
                    <div>
                      <strong className="text-[#333333]">Solar keeps charging.</strong> Unlike solar-only systems, a battery allows your panels to continue generating and charging the battery during a blackout, giving you days of backup power rather than hours.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">3.</span>
                    <div>
                      <strong className="text-[#333333]">Essential circuit protection.</strong> Modern battery systems can be configured to prioritise your most critical circuits &mdash; fridge, lights, internet, medical equipment &mdash; ensuring they run for as long as possible during extended outages.
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Real Savings: What a QLD Battery System Delivers
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Let&apos;s put the complete picture together for a typical Queensland household installing a 6.6kW solar + 13.5kWh battery system in early 2026:
              </p>

              {/* Savings Breakdown */}
              <div className="bg-[#efefef] p-6 rounded-xl mb-10">
                <h3 className="text-xl font-bold text-[#333333] mb-4">Complete QLD Solar + Battery Economics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Solar Only (6.6kW)</div>
                    <div className="text-3xl font-bold text-[#333333] mb-2">$800&ndash;$1,100<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">30&ndash;40% self-consumption</div>
                    <div className="text-sm text-[#666666]">Exporting most solar for 5&ndash;8c</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg border-2 border-[#0073b9]">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Solar + Battery (6.6kW + 13.5kWh)</div>
                    <div className="text-3xl font-bold text-[#0073b9] mb-2">$1,200&ndash;$1,800<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">70&ndash;90% self-consumption</div>
                    <div className="text-sm text-[#666666]">Plus blackout protection &amp; grid independence</div>
                  </div>
                </div>
                <div className="mt-6 bg-white p-5 rounded-lg border-2 border-[#fee000]">
                  <div className="text-sm text-[#083941] font-semibold mb-1">Federal STC Discount (Before May 2026)</div>
                  <div className="text-3xl font-bold text-[#083941] mb-2">~$4,500<span className="text-base font-normal text-[#666666]"> upfront discount</span></div>
                  <div className="text-sm text-[#666666]">Applied at point of sale &mdash; no waiting for rebate cheques</div>
                </div>
                <p className="text-sm text-[#666666] mt-4">
                  Savings based on average QLD household consumption of 5,000&ndash;7,000 kWh/year. Actual results depend on system size, household usage patterns, and electricity plan.
                </p>
              </div>

              {/* Quote Box */}
              <blockquote className="bg-[#efefef] p-6 mb-10 border-l-4 border-[#0073b9] italic text-[#444444] rounded-r-xl">
                <p className="mb-4">
                  &quot;Queensland homes with solar are sitting on a goldmine of cheap energy &mdash; but without storage, they&apos;re essentially giving it away. A battery turns that exported energy into real savings, real independence, and real protection against rising power costs.&quot;
                </p>
                <cite className="text-[#0073b9] not-italic font-semibold">
                  &mdash; Cosmic Renewable Energy, Industry Analysis 2026
                </cite>
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Bottom Line: Every Month Without a Battery Is Money Lost
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Queensland has the best solar conditions in Australia. Your panels are generating more energy than almost any other state. But without a battery, you&apos;re selling that energy for 5&ndash;8 cents and buying it back for 35&ndash;50 cents. You&apos;re paying some of the highest peak tariffs in the country while your solar sits idle every evening.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                The federal government&apos;s Cheaper Home Batteries Program is offering Queensland homeowners a discount of approximately <strong className="text-[#333333]">$4,500 on a 13.5kWh battery right now</strong>. After May 2026, that drops to around $3,680 &mdash; and it keeps falling every year after that until it hits zero.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Add in rising electricity costs, worsening storm seasons, and collapsing feed-in tariffs, and the case for acting now is overwhelming. <strong className="text-[#333333]">Every month you wait costs you money in lost savings and shrinking rebates.</strong> The best time to install a battery was yesterday. The second-best time is right now.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-[#fee000] p-8 sm:p-12 text-center mt-12 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#083941] mb-4">
                Lock In Your QLD Battery Savings Before May 2026
              </h2>
              <p className="text-lg text-[#083941]/80 mb-8 max-w-2xl mx-auto">
                Queensland&apos;s sunshine is your biggest asset &mdash; stop giving it away for free. Get a personalised quote from Cosmic Renewable Energy and find out exactly how much you&apos;ll save with a battery, including your full federal STC discount before the May reduction.
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
