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

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

export default function FeedInTariffsCollapsingArticle() {
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
                Feed-in Tariffs Are <span className="text-[#fee000]">Collapsing</span> in Victoria: Why Every Solar Home Needs a Battery
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Victorian solar feed-in tariffs have plummeted from 60c/kWh to under 5c/kWh. Without a battery, your solar panels are leaving money on the table.
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
                  alt="Solar panels on roof - feed-in tariff changes affecting Victorian homeowners"
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
                Key Takeaway for Solar Homeowners
              </h2>
              <p className="text-[#083941] text-lg">
                If you have solar panels without a battery, you&apos;re exporting electricity worth just 3-5 cents per kWh,
                then buying it back at 35-55 cents during the evening. <strong>A battery bridges that gap, turning every
                stored kilowatt-hour into 30-50 cents of value.</strong>
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Dramatic Collapse of Victorian Feed-in Tariffs
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                When solar first became popular in Victoria, homeowners were paid generously for the electricity they
                exported to the grid. The premium feed-in tariff was an incredible <strong className="text-[#333333]">60 cents
                per kilowatt-hour</strong> &mdash; more than you were paying for grid electricity. Those days are long gone.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Today, the minimum feed-in tariff set by the Essential Services Commission has fallen to just a few cents
                per kWh, and many retailers are offering even less. This fundamentally changes the economics of solar &mdash;
                and makes battery storage essential for any Victorian household that wants to get real value from their panels.
              </p>

              {/* FiT Timeline */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0073b9] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <SunIcon className="w-6 h-6" />
                    Victorian Feed-in Tariff Timeline
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Period</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Feed-in Rate</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">2009-2011 (Premium FiT)</td>
                        <td className="p-4 text-right font-bold text-green-600">60.0c/kWh</td>
                        <td className="p-4 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Excellent</span></td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2012-2016 (Transitional FiT)</td>
                        <td className="p-4 text-right font-semibold text-green-600">25.0c/kWh</td>
                        <td className="p-4 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Good</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2021-22</td>
                        <td className="p-4 text-right text-[#333333]">6.7c/kWh</td>
                        <td className="p-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">Fair</span></td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2022-23</td>
                        <td className="p-4 text-right text-[#333333]">5.2c/kWh</td>
                        <td className="p-4 text-center"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Low</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2023-24</td>
                        <td className="p-4 text-right text-[#333333]">4.6c/kWh</td>
                        <td className="p-4 text-center"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Low</span></td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">2025-26</td>
                        <td className="p-4 text-right font-bold text-red-600">3-5c/kWh</td>
                        <td className="p-4 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">Near Zero</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  Minimum FiT rates set by the Essential Services Commission. Actual retailer rates may vary.
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why Feed-in Tariffs Keep Falling
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The reason is simple supply and demand. Victoria now has over 700,000 rooftop solar installations, and they
                all generate the most electricity at the same time &mdash; the middle of the day. This flood of solar energy
                has pushed wholesale electricity prices during daytime hours close to zero, and sometimes even into negative
                territory.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                When the grid doesn&apos;t need your exported solar power, it&apos;s not worth much. This is known as the
                &quot;duck curve&quot; effect, and it&apos;s only getting worse as more solar is installed. The trend is
                unambiguous: <strong className="text-[#333333]">feed-in tariffs are heading toward zero</strong>.
              </p>

              {/* Warning Box */}
              <div className="bg-white p-6 mb-10 border border-red-400 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  Export Charges Are Coming
                </h3>
                <p className="text-[#444444] mb-4">
                  It gets worse. The Australian Energy Market Commission has approved a framework allowing electricity
                  networks to charge solar owners for exporting power to the grid during peak solar periods. This means
                  you could soon be <strong className="text-[#333333]">paying to export</strong> the solar energy your
                  panels generate.
                </p>
                <p className="text-[#444444]">
                  Victorian distribution networks (Powercor, CitiPower, Jemena, AusNet, and United Energy) are progressively
                  implementing these two-way pricing frameworks. A battery shields you from export charges by storing your
                  excess solar for your own use.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Battery Advantage: Turning 5c Into 50c
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Here&apos;s where a home battery transforms the solar equation. Without a battery, your options for excess
                solar power are limited: use it or export it for a few cents. With a battery, you store that cheap daytime
                solar and use it when grid electricity is at its most expensive.
              </p>

              {/* Value Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 border-2 border-red-400 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-red-600 mb-3">Without Battery</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[#444444]">Export 1 kWh to grid</span>
                      <span className="font-bold text-red-600">+3-5c</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#444444]">Buy 1 kWh at peak</span>
                      <span className="font-bold text-red-600">-38-55c</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                      <span className="font-semibold text-[#333333]">Net loss per kWh</span>
                      <span className="font-bold text-red-600">-33-50c</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-[#0073b9] rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-[#0073b9] mb-3">With Battery</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[#444444]">Store 1 kWh (free solar)</span>
                      <span className="font-bold text-[#0073b9]">$0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#444444]">Use at peak (avoid buying)</span>
                      <span className="font-bold text-green-600">+38-55c saved</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                      <span className="font-semibold text-[#333333]">Net value per kWh</span>
                      <span className="font-bold text-green-600">+38-55c</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                For a typical 13.5kWh battery that cycles daily, that translates to <strong className="text-[#333333]">$5 to $7.50
                per day in value</strong>, or <strong className="text-[#333333]">$1,800 to $2,700 per year</strong>. Compare that to
                exporting the same energy for just $0.40 to $0.70 per day.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Already Have Solar? Adding a Battery Is Easier Than You Think
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                If you already have solar panels on your roof, you&apos;re halfway there. Modern battery systems like the
                Tesla Powerwall 3 and BYD Battery-Box can be retrofitted to existing solar installations, often with minimal
                additional wiring.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                And the timing couldn&apos;t be better. Battery prices have dropped significantly in recent years thanks to
                lithium iron phosphate (LFP) technology, which offers longer life, better safety, and lower cost than
                previous battery chemistries. A 13.5kWh battery system now costs approximately <strong className="text-[#333333]">$10,000-$13,000
                installed, or $7,000-$10,000 after the Victorian battery rebate</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                With payback periods now sitting at <strong className="text-[#333333]">4-6 years</strong> for battery additions
                and battery warranties of 10-15 years, you&apos;re looking at a decade or more of pure savings after the
                system pays for itself.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Virtual Power Plants: An Extra Revenue Stream
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Battery owners in Victoria can also participate in Virtual Power Plant (VPP) programs, which pay you for
                allowing your battery to support the grid during high-demand events. Programs from Tesla, AGL, Origin, and
                others can earn battery owners an additional <strong className="text-[#333333]">$200 to $1,000+ per year</strong> in
                bill credits, further accelerating payback.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                As Victoria&apos;s grid faces more pressure from coal closures and extreme weather, the value of VPP
                participation is expected to increase significantly over the coming years.
              </p>

              {/* Quote Box */}
              <blockquote className="bg-[#efefef] p-6 mb-10 border-l-4 border-[#0073b9] italic text-[#444444] rounded-r-xl">
                <p className="mb-4">
                  &quot;The shift from solar export to self-consumption is the single biggest change in the residential
                  energy market. Homeowners who add batteries now are positioning themselves on the right side of this
                  transition, while those who delay are watching their solar investment deliver diminishing returns every year.&quot;
                </p>
                <cite className="text-[#0073b9] not-italic font-semibold">
                  &mdash; Australian Energy Market Operator, 2025 System Plan
                </cite>
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Don&apos;t Wait Until Feed-in Tariffs Hit Zero
              </h2>

              <p className="text-[#444444] text-lg mb-8">
                Every month you wait without a battery, you&apos;re exporting valuable solar energy for almost nothing, then
                paying premium prices to buy electricity back in the evening. The maths is simple: <strong className="text-[#333333]">a
                battery pays for itself, and the current combination of low battery prices, government rebates, and high
                electricity prices makes right now the optimal time to act</strong>.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-[#fee000] p-8 sm:p-12 text-center mt-12 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#083941] mb-4">
                Make Your Solar Panels Work Harder
              </h2>
              <p className="text-lg text-[#083941]/80 mb-8 max-w-2xl mx-auto">
                Whether you need a new solar + battery system or want to add a battery to your existing solar panels, we can
                help. Get a free quote and see exactly how much value a battery adds to your home.
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
