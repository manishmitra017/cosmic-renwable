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

const CheckCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function SouthAustraliaBatteryVPPArticle() {
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
                South Australia&apos;s Battery Revolution: How SA Households Are <span className="text-[#fee000]">Earning Money</span> from Their Solar
              </h1>
              <p className="text-xl text-white/90 mb-6">
                SA has Australia&apos;s highest electricity prices and lowest feed-in tariffs. But savvy homeowners are turning their solar into a money-making machine with batteries and Virtual Power Plants.
              </p>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span>February 2026</span>
                <span className="text-[#fee000]">|</span>
                <span>8 min read</span>
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
                  src="/batteryImage1.jpg"
                  alt="Home battery system in South Australia powering household and earning money through VPP"
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
                Key Takeaway for SA Homeowners
              </h2>
              <p className="text-[#083941] text-lg">
                South Australia has the highest electricity prices in Australia &mdash; up to <strong>$2,600/year</strong> per household &mdash; yet feed-in tariffs have collapsed to just 3-7c/kWh. Without a battery, SA solar homes waste 50-70% of the energy they generate. With a battery and VPP enrolment, you can save <strong>$1,500-$2,200/year</strong> on bills <em>plus</em> earn <strong>$300-$800/year</strong> from VPP participation. Federal rebates are dropping from May 2026 &mdash; act now.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                SA&apos;s Energy Paradox: World-Leading Solar, Nation-Leading Prices
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                South Australia sits at the centre of one of the most extraordinary energy paradoxes in the world. The state generates over <strong className="text-[#333333]">70% of its electricity from renewables</strong> &mdash; a figure most countries can only dream of. Roughly 40% of SA homes already have rooftop solar, the highest residential solar penetration on the planet.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                And yet, South Australian households pay the <strong className="text-[#333333]">highest electricity prices in Australia</strong>, with the average family spending between $2,000 and $2,600 per year. How is this possible? And more importantly &mdash; what can you do about it?
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The answer lies in a fundamental mismatch: SA&apos;s grid has enormous solar generation during the day (when nobody needs it) and massive demand in the evening (when the sun has set). Without storage, this imbalance drives wholesale prices to extremes &mdash; negative during the day, sky-high at night. And it&apos;s your bill that pays the difference.
              </p>

              {/* Price Comparison Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0073b9] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CurrencyDollarIcon className="w-6 h-6" />
                    SA Electricity Costs vs. National Average
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Metric</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">South Australia</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">National Average</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Difference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">Average Annual Bill</td>
                        <td className="p-4 text-right font-bold text-red-600">$2,000-$2,600</td>
                        <td className="p-4 text-right text-[#333333]">$1,500-$1,800</td>
                        <td className="p-4 text-center text-red-600 font-semibold">+35-45%</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Usage Rate (Peak)</td>
                        <td className="p-4 text-right font-bold text-red-600">40-55c/kWh</td>
                        <td className="p-4 text-right text-[#333333]">32-42c/kWh</td>
                        <td className="p-4 text-center text-red-600 font-semibold">+25-30%</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Feed-in Tariff</td>
                        <td className="p-4 text-right font-bold text-red-600">3-7c/kWh</td>
                        <td className="p-4 text-right text-[#333333]">4-10c/kWh</td>
                        <td className="p-4 text-center text-red-600 font-semibold">Lowest</td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-bold text-[#083941]">Solar Penetration</td>
                        <td className="p-4 text-right font-bold text-[#0073b9]">~40% of homes</td>
                        <td className="p-4 text-right text-[#333333]">~30% of homes</td>
                        <td className="p-4 text-center text-[#0073b9] font-bold">World #1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  Based on AER Default Market Offer and SA Default Market Offer 2025-26 data. Actual rates vary by retailer and plan.
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Feed-in Tariff Collapse: Why Exporting Solar Is Almost Worthless
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                If you installed solar in SA a few years ago, you might remember feed-in tariffs of 15-20 cents per kWh. Those days are long gone. Today, SA feed-in tariffs sit at just <strong className="text-[#333333]">3-7 cents per kWh</strong> &mdash; the lowest in the country.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                Here&apos;s what that means in practice: you&apos;re generating clean solar energy worth 40-55 cents per kWh (that&apos;s what you&apos;d pay to buy it from the grid at peak), but you&apos;re selling it back for just 5 cents. You&apos;re losing <strong className="text-[#333333]">up to 90% of the value</strong> of every kilowatt-hour you export.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Without a battery, a typical SA solar home wastes <strong className="text-[#333333]">50-70% of its solar generation</strong> by exporting it for pennies during the day, then buying the same energy back at peak prices in the evening. It&apos;s like growing your own vegetables, giving them away for free, then buying them back at the supermarket for full price.
              </p>

              {/* Urgency Callout */}
              <div className="bg-white p-6 mb-10 border border-red-500 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  Every Day Without a Battery Is Costing You Money
                </h3>
                <ul className="space-y-3 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1 flex-shrink-0">&#x2717;</span>
                    <span>You&apos;re <strong className="text-[#333333]">exporting solar for 3-7c/kWh</strong> during the day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1 flex-shrink-0">&#x2717;</span>
                    <span>You&apos;re <strong className="text-[#333333]">buying it back at 40-55c/kWh</strong> in the evening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1 flex-shrink-0">&#x2717;</span>
                    <span>You&apos;re <strong className="text-[#333333]">wasting 50-70% of your solar generation</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1 flex-shrink-0">&#x2717;</span>
                    <span>You&apos;re <strong className="text-[#333333]">missing out on $300-$800/year</strong> in VPP income</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Battery + VPP Solution: Save Thousands AND Earn Income
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                A home battery flips the equation entirely. Instead of exporting solar for pennies, your battery stores that energy and releases it when you need it most &mdash; during the expensive evening peak. But in South Australia, a battery can do something even more powerful: <strong className="text-[#333333]">earn you money through a Virtual Power Plant (VPP)</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                South Australia is the birthplace of the modern VPP. Tesla&apos;s Hornsdale Power Reserve &mdash; the &quot;Big Battery&quot; &mdash; proved the concept at grid scale. Now, SA Power Networks and multiple energy retailers run residential VPP programs that pay you to share a small portion of your battery&apos;s capacity during grid stress events, typically SA&apos;s extreme summer heat waves.
              </p>

              {/* VPP Value Breakdown */}
              <div className="bg-[#efefef] p-6 rounded-xl mb-10">
                <h3 className="text-xl font-bold text-[#333333] mb-4">Total Annual Value: Battery + VPP in SA</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Bill Savings (Self-Consumption)</div>
                    <div className="text-3xl font-bold text-[#333333] mb-2">$1,500-$2,200<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">Using stored solar instead of grid power</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">VPP Income</div>
                    <div className="text-3xl font-bold text-[#333333] mb-2">$300-$800<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">Grid support payments &amp; energy trading</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg border-2 border-[#0073b9]">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Total Annual Value</div>
                    <div className="text-3xl font-bold text-[#0073b9] mb-2">Up to $3,000<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">Combined savings + income</div>
                  </div>
                </div>
                <p className="text-sm text-[#666666] mt-4">
                  Based on a 13.5kWh battery with VPP enrolment. VPP income varies by provider, grid conditions, and number of events. Bill savings depend on household consumption and electricity plan.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How VPPs Work &mdash; And Why SA Is the Best Place for Them
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                A Virtual Power Plant connects hundreds or thousands of home batteries into a coordinated network. When the grid is under stress &mdash; typically during extreme heat events that SA experiences every summer &mdash; the VPP operator can draw small amounts of energy from each battery to stabilise the grid. In return, you get paid.
              </p>

              {/* How VPP Works Steps */}
              <div className="bg-white p-6 mb-10 border border-[#0073b9] rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0073b9] mb-4 flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6" />
                  How You Earn Money from Your Battery
                </h3>
                <ul className="space-y-4 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">1.</span>
                    <div>
                      <strong className="text-[#333333]">Your battery charges from solar during the day.</strong> Free energy from your roof fills your battery while you&apos;re at work.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">2.</span>
                    <div>
                      <strong className="text-[#333333]">You use stored energy during the evening peak.</strong> Instead of paying 40-55c/kWh from the grid, you use your own solar &mdash; saving $1,500-$2,200/year.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">3.</span>
                    <div>
                      <strong className="text-[#333333]">During grid stress events, your VPP shares a portion of battery capacity.</strong> This typically happens during SA&apos;s extreme heat days when air-conditioning demand spikes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">4.</span>
                    <div>
                      <strong className="text-[#333333]">You get paid for the energy you share.</strong> VPP payments of $300-$800/year are credited to your account automatically, on top of your bill savings.
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                South Australia&apos;s unique energy profile &mdash; extreme renewable generation, volatile grid conditions, summer heat extremes &mdash; makes it the single best place in Australia for VPP participation. SA&apos;s grid volatility is your opportunity.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Federal Rebates Are Dropping &mdash; The Clock Is Ticking
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                South Australia&apos;s old Home Battery Scheme has ended, but the federal <strong className="text-[#333333]">Cheaper Home Batteries Program</strong> now provides significant discounts through Small-scale Technology Certificates (STCs). For a 13.5kWh battery installed in early 2026, this means approximately <strong className="text-[#333333]">$4,500 in upfront savings</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                But here&apos;s the critical detail most people miss: <strong className="text-[#333333]">STC rates are declining every six months</strong>, and each drop permanently reduces the discount you can access.
              </p>

              {/* STC Rate Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#083941] p-4">
                  <h3 className="text-xl font-bold text-white">Federal Battery STC Discount Schedule</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Period</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">STC Rate</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Est. Discount (13.5kWh)</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">2025 (Full Year)</td>
                        <td className="p-4 text-right text-[#333333]">9.3/kWh</td>
                        <td className="p-4 text-right font-semibold text-green-600">~$5,000</td>
                        <td className="p-4 text-center text-[#666666]">Expired</td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">Jan &ndash; Apr 2026</td>
                        <td className="p-4 text-right font-bold text-[#083941]">8.4/kWh</td>
                        <td className="p-4 text-right font-bold text-green-600">~$4,500</td>
                        <td className="p-4 text-center text-green-600 font-bold">Current &mdash; Act Now</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">May &ndash; Oct 2026</td>
                        <td className="p-4 text-right text-[#333333]">6.8/kWh</td>
                        <td className="p-4 text-right text-[#666666]">~$3,650</td>
                        <td className="p-4 text-center text-red-600 font-semibold">-$850 less</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Nov 2026 &ndash; Apr 2027</td>
                        <td className="p-4 text-right text-[#333333]">Declining further</td>
                        <td className="p-4 text-right text-[#666666]">~$3,000</td>
                        <td className="p-4 text-center text-red-600 font-semibold">-$1,500 less</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2027 and beyond</td>
                        <td className="p-4 text-right text-[#333333]">Continuing decline</td>
                        <td className="p-4 text-right text-red-600">Significantly reduced</td>
                        <td className="p-4 text-center text-red-600 font-semibold">Diminishing rapidly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  STC values based on Cheaper Home Batteries Program schedule. Actual discount depends on battery capacity, STC spot price, and installation date. Figures are estimates.
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Blackout Protection: Your Insurance Against SA&apos;s Extreme Heat
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                South Australians remember the 2016 statewide blackout all too well. While grid reliability has improved, SA&apos;s extreme summer heat events continue to push the network to its limits. When temperatures hit 40&deg;C+ and every air conditioner in Adelaide runs at full blast, the grid strains under enormous demand.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                A home battery provides <strong className="text-[#333333]">automatic blackout protection</strong>. When the grid goes down, your battery kicks in within milliseconds, keeping your lights on, your fridge running, and your family safe. With SA&apos;s increasingly volatile grid driven by renewable intermittency, a battery isn&apos;t just a financial investment &mdash; it&apos;s peace of mind.
              </p>

              {/* With vs Without Battery Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 border-2 border-red-400 rounded-xl shadow-lg">
                  <div className="text-lg font-bold text-red-600 mb-4">SA Solar Home WITHOUT Battery</div>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1 flex-shrink-0">&#x2717;</span>
                      <span>Wastes 50-70% of solar generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1 flex-shrink-0">&#x2717;</span>
                      <span>Exports solar for 3-7c/kWh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1 flex-shrink-0">&#x2717;</span>
                      <span>Buys grid power at 40-55c/kWh at peak</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1 flex-shrink-0">&#x2717;</span>
                      <span>No VPP income ($0/year)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1 flex-shrink-0">&#x2717;</span>
                      <span>Vulnerable to blackouts in extreme heat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1 flex-shrink-0">&#x2717;</span>
                      <span>Still paying $1,200-$1,800/year on bills</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 border-2 border-[#0073b9] rounded-xl shadow-lg">
                  <div className="text-lg font-bold text-[#0073b9] mb-4">SA Solar Home WITH Battery + VPP</div>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">&#x2713;</span>
                      <span>Uses 80-90% of solar generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">&#x2713;</span>
                      <span>Stores solar for evening peak use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">&#x2713;</span>
                      <span>Saves $1,500-$2,200/year on electricity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">&#x2713;</span>
                      <span>Earns $300-$800/year from VPP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">&#x2713;</span>
                      <span>Automatic blackout protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">&#x2713;</span>
                      <span>Total value up to $3,000/year</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Real Numbers: What a Battery Costs and What It Returns
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Let&apos;s lay out the actual economics for an SA household installing a 13.5kWh battery in early 2026:
              </p>

              {/* Investment Summary */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0073b9] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CurrencyDollarIcon className="w-6 h-6" />
                    SA Battery Investment Summary (Early 2026)
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Item</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">13.5kWh Battery (Installed)</td>
                        <td className="p-4 text-right text-[#333333]">~$12,000-$14,000</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Less: Federal STC Discount (Jan-Apr 2026)</td>
                        <td className="p-4 text-right font-semibold text-green-600">-~$4,500</td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-bold text-[#083941]">Your Out-of-Pocket Cost</td>
                        <td className="p-4 text-right font-bold text-[#083941]">~$7,500-$9,500</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Annual Bill Savings</td>
                        <td className="p-4 text-right font-semibold text-green-600">$1,500-$2,200/year</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Annual VPP Income</td>
                        <td className="p-4 text-right font-semibold text-green-600">$300-$800/year</td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-bold text-[#083941]">Total Annual Value</td>
                        <td className="p-4 text-right font-bold text-[#0073b9]">$1,800-$3,000/year</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-[#333333]">Estimated Payback Period</td>
                        <td className="p-4 text-right font-bold text-[#0073b9]">3-5 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  Figures are estimates based on typical SA household consumption, current battery pricing, and early 2026 STC rates. Actual results vary by household, system configuration, and energy plan.
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                After the payback period, your battery continues delivering $1,800-$3,000 in annual value for 10-15 more years. Over a battery&apos;s lifetime, that&apos;s <strong className="text-[#333333]">$20,000-$40,000 in total value</strong> from an investment of under $10,000.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why SA Households Can&apos;t Afford to Wait
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The window for maximum value is closing. Here&apos;s what changes if you delay:
              </p>

              <div className="bg-white p-6 mb-10 border border-[#0073b9] rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0073b9] mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  What Waiting Costs You
                </h3>
                <ul className="space-y-4 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">1.</span>
                    <div>
                      <strong className="text-[#333333]">STC discount drops $850+ from May 2026.</strong> The rate falls from 8.4/kWh to 6.8/kWh in May, and drops further every six months after. Every delay permanently reduces your rebate.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">2.</span>
                    <div>
                      <strong className="text-[#333333]">You lose $150-$250 per month in bill savings.</strong> That&apos;s $1,800-$3,000 per year in value you&apos;re leaving on the table by not having a battery.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">3.</span>
                    <div>
                      <strong className="text-[#333333]">You miss another summer of VPP income.</strong> SA&apos;s summer grid stress events are when VPP participants earn the most. Missing the 2026-27 summer means forgoing hundreds in potential income.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0073b9] font-bold mt-1 flex-shrink-0">4.</span>
                    <div>
                      <strong className="text-[#333333]">SA electricity prices are not coming down.</strong> With continued grid volatility and renewable intermittency, SA&apos;s wholesale prices remain among the most volatile in the NEM. Your bills will keep rising.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quote Box */}
              <blockquote className="bg-[#efefef] p-6 mb-10 border-l-4 border-[#0073b9] italic text-[#444444] rounded-r-xl">
                <p className="mb-4">
                  &quot;South Australia has proven that home batteries aren&apos;t just about saving on bills &mdash; they&apos;re income-generating assets. With VPP programs now well-established and federal rebates still available, SA homeowners have the strongest economic case for battery storage anywhere in Australia.&quot;
                </p>
                <cite className="text-[#0073b9] not-italic font-semibold">
                  &mdash; Smart Energy Council, 2025 Battery Storage Report
                </cite>
              </blockquote>
            </div>

            {/* Call to Action */}
            <div className="bg-[#fee000] p-8 sm:p-12 text-center mt-12 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#083941] mb-4">
                Turn Your Solar into a Money-Making Machine
              </h2>
              <p className="text-lg text-[#083941]/80 mb-8 max-w-2xl mx-auto">
                SA households are paying Australia&apos;s highest electricity prices while exporting solar for pennies. A battery + VPP can deliver up to $3,000/year in value &mdash; and federal rebates drop from May 2026. Get your free, no-obligation quote from Cosmic Renewable Energy today.
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
