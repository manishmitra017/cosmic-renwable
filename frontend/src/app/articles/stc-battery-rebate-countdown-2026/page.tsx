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

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ChartBarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const CurrencyDollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function STCBatteryRebateCountdownArticle() {
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
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white border border-white/30">Government Rebates</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Your Battery Rebate Is Shrinking Every 6 Months: <span className="text-[#fee000]">The STC Countdown Has Begun</span>
              </h1>
              <p className="text-xl text-white/90 mb-6">
                The federal government&apos;s expanded $7.2 billion battery program comes with a catch &mdash; rebates now decline faster and steeper than ever before
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
                  src="/batteryImage2.jpg"
                  alt="Home battery system installation - STC rebate countdown"
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
                Key Takeaway
              </h2>
              <p className="text-[#083941] text-lg">
                A 13.5kWh battery installed today earns you roughly <strong>$5,000 in STC rebates</strong>. Wait until
                the second half of 2028 and that same battery only earns <strong>$2,200</strong> &mdash; a loss of
                $2,800. <strong>From May 2026, the STC factor drops every 6 months instead of annually, and the rate
                of decline is steeper.</strong> The clock is ticking.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The $7.2 Billion Expansion &mdash; Good News With a Deadline
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                On 13 December 2025, the federal government announced a massive expansion of the Cheaper Home Batteries
                Program &mdash; from the original $2.3 billion to a staggering <strong className="text-[#333333]">$7.2 billion</strong>.
                That&apos;s an additional $4.9 billion earmarked to help Australian households store their solar energy
                and reduce reliance on the grid.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                But here&apos;s what many homeowners are missing: the expansion came bundled with a fundamental change to
                how rebates are calculated. The STC (Small-scale Technology Certificate) factor &mdash; the number that
                determines your discount &mdash; is now set to decline <strong className="text-[#333333]">more frequently</strong> and
                at a <strong className="text-[#333333]">higher rate</strong> than originally planned.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                In plain terms: every six months you delay, you lose hundreds &mdash; potentially thousands &mdash; of
                dollars in rebates that you&apos;ll never get back.
              </p>

              {/* Urgency Box */}
              <div className="bg-red-50 p-6 mb-10 border border-red-200 rounded-xl">
                <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                  <ClockIcon className="w-6 h-6" />
                  The May 2026 Cliff Edge
                </h3>
                <p className="text-red-700 text-lg">
                  From May 2026, three things happen simultaneously: the STC factor drops sharply from 8.4 to 6.8,
                  the decline schedule accelerates to every 6 months, and a new tiered system reduces rebates for
                  batteries larger than 14kWh. <strong>If you&apos;re considering a battery, the window before May 2026
                  offers the best value.</strong>
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How STCs Determine Your Rebate
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The federal battery rebate isn&apos;t a fixed dollar amount. It&apos;s calculated using STCs &mdash;
                Small-scale Technology Certificates. Here&apos;s the formula:
              </p>

              <div className="bg-[#efefef] p-6 mb-8 rounded-xl text-center">
                <p className="text-xl font-bold text-[#083941] mb-2">
                  Battery Capacity (kWh) x STC Factor = Number of STCs
                </p>
                <p className="text-xl font-bold text-[#083941]">
                  Number of STCs x Market Price (~$40 each) = Your Rebate
                </p>
              </div>

              <p className="text-[#444444] text-lg mb-6">
                In 2025, the STC factor is <strong className="text-[#333333]">9.3 STCs per kWh</strong>. This means
                for every kilowatt-hour of usable battery capacity, you receive 9.3 certificates. Each certificate
                trades at approximately $40 on the open market. Your installer claims these on your behalf and deducts
                the value from your upfront cost &mdash; equating to roughly a <strong className="text-[#333333]">30%
                discount</strong> on the battery price.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                But that 9.3 factor is already dropping. And from May 2026, the drops become steeper and more frequent.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The STC Factor Countdown: 2025 &ndash; 2030
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Subject to regulations being made, the proposed STC factor schedule shows a clear and accelerating
                decline. Here&apos;s what you&apos;re looking at:
              </p>

              {/* STC Factor Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0073b9] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ChartBarIcon className="w-6 h-6" />
                    STC Factor Timeline (Proposed)
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Period</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">STC Factor</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Rebate per kWh*</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">2025 (Current)</td>
                        <td className="p-4 text-right font-bold text-[#083941] text-lg">9.3</td>
                        <td className="p-4 text-right font-bold text-[#083941] text-lg">$372</td>
                        <td className="p-4 text-center"><span className="bg-[#fee000] text-[#083941] px-3 py-1 rounded-full text-sm font-semibold">Current Rate</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Jan &ndash; Apr 2026</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">8.4</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$336</td>
                        <td className="p-4 text-center"><span className="bg-[#0073b9]/10 px-3 py-1 rounded-full text-sm text-[#0073b9] border border-[#0073b9]/30">Upcoming</span></td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-4 font-semibold text-red-700">May &ndash; Dec 2026 *</td>
                        <td className="p-4 text-right font-bold text-red-700 text-lg">6.8</td>
                        <td className="p-4 text-right font-bold text-red-700">$272</td>
                        <td className="p-4 text-center"><span className="bg-red-100 px-3 py-1 rounded-full text-sm text-red-700 border border-red-300">New Rules</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2027 H1 (Jan &ndash; Jun)</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">5.7</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$228</td>
                        <td className="p-4 text-center text-[#666666]">&mdash;</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2027 H2 (Jul &ndash; Dec)</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">5.2</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$208</td>
                        <td className="p-4 text-center text-[#666666]">&mdash;</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2028 H1 (Jan &ndash; Jun)</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">4.6</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$184</td>
                        <td className="p-4 text-center text-[#666666]">&mdash;</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2028 H2 (Jul &ndash; Dec)</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">4.1</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$164</td>
                        <td className="p-4 text-center text-[#666666]">&mdash;</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2029 H1 (Jan &ndash; Jun)</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">3.6</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$144</td>
                        <td className="p-4 text-center text-[#666666]">&mdash;</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2029 H2 (Jul &ndash; Dec)</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">3.1</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$124</td>
                        <td className="p-4 text-center text-[#666666]">&mdash;</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2030 H1 (Jan &ndash; Jun)</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">2.6</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$104</td>
                        <td className="p-4 text-center text-[#666666]">&mdash;</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2030 H2 (Jul &ndash; Dec)</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">2.1</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">$84</td>
                        <td className="p-4 text-center text-[#666666]">&mdash;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  * Rebate per kWh calculated at STC market rate of ~$40 each. New tiered rebate system applies from May 2026 onwards.
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Real Dollar Impact: A 13.5kWh Battery Example
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Let&apos;s make this concrete. A popular 13.5kWh battery system &mdash; similar to a Tesla Powerwall 2
                or BYD HVS &mdash; shows the cost of waiting in stark terms:
              </p>

              {/* Dollar Impact Comparison */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#083941] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CurrencyDollarIcon className="w-6 h-6" />
                    Rebate Comparison: 13.5kWh Battery
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">When You Install</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">STC Factor</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">STCs Earned</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Rebate Value</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">You Lose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">Now (2025)</td>
                        <td className="p-4 text-right font-bold text-[#083941]">9.3</td>
                        <td className="p-4 text-right font-semibold text-[#083941]">~125</td>
                        <td className="p-4 text-right font-bold text-[#083941] text-lg">~$5,000</td>
                        <td className="p-4 text-right text-[#083941]">&mdash;</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Jan &ndash; Apr 2026</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">8.4</td>
                        <td className="p-4 text-right text-[#333333]">~113</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$4,536</td>
                        <td className="p-4 text-right text-red-600 font-semibold">-$464</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-4 font-semibold text-red-700">May &ndash; Dec 2026</td>
                        <td className="p-4 text-right font-bold text-red-700">6.8</td>
                        <td className="p-4 text-right text-red-700">~92</td>
                        <td className="p-4 text-right font-bold text-red-700">~$3,672</td>
                        <td className="p-4 text-right text-red-700 font-bold">-$1,328</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2027 H2</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">5.2</td>
                        <td className="p-4 text-right text-[#333333]">~70</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$2,808</td>
                        <td className="p-4 text-right text-red-600 font-semibold">-$2,192</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2028 H2</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">4.1</td>
                        <td className="p-4 text-right text-[#333333]">~55</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$2,200</td>
                        <td className="p-4 text-right text-red-600 font-bold">-$2,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-red-50 text-red-700 font-semibold text-center">
                  Waiting 2.5 years costs you $2,800 in lost rebates on this battery alone
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The New Tiered System: Larger Batteries Hit Hardest
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The declining STC factor is only half the story. From May 2026, the government is also introducing a
                tiered support structure that significantly reduces rebates for larger battery systems. This was designed
                to stretch the $7.2 billion budget further by discouraging oversized installations &mdash; average battery
                sizes had ballooned to 28kWh, well above the 10&ndash;12kWh typical a year ago.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Under the new tiered system, the STC factor is applied at different rates depending on the battery&apos;s
                usable capacity:
              </p>

              {/* Tiered System */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 text-center border-2 border-[#0073b9] rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-[#0073b9] mb-2">100%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Full STC Factor</div>
                  <div className="text-[#666666]">0 &ndash; 14 kWh</div>
                  <div className="mt-4 text-sm text-[#0073b9]">Maximum rebate applied to every kWh in this tier</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-[#fee000] rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-[#083941] mb-2">60%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Reduced STC Factor</div>
                  <div className="text-[#666666]">14 &ndash; 28 kWh</div>
                  <div className="mt-4 text-sm text-[#083941]">Significant reduction for mid-range capacity</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-red-500 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-red-500 mb-2">15%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Minimal STC Factor</div>
                  <div className="text-[#666666]">28 &ndash; 50 kWh</div>
                  <div className="mt-4 text-sm text-red-500">Dramatically reduced for large systems</div>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-6">
                Only the first <strong className="text-[#333333]">50 kWh of usable capacity</strong> is eligible for
                STCs under the program, and only <strong className="text-[#333333]">one battery system per premises</strong> can
                claim the rebate.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                For homeowners with standard-sized batteries (under 14kWh), the tiered system won&apos;t change your
                rebate calculation. But the declining STC factor still applies &mdash; and it&apos;s declining faster
                than ever.
              </p>

              {/* Before May 2026 vs After comparison */}
              <div className="bg-white p-6 mb-10 border border-[#0073b9] rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0073b9] mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  Before May 2026 vs. After: What Changes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#fee000]/10 p-4 rounded-lg border border-[#fee000]">
                    <h4 className="font-bold text-[#083941] mb-3">Before May 2026</h4>
                    <ul className="space-y-2 text-[#444444]">
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-[#0073b9] flex-shrink-0 mt-0.5" />
                        <span>STC factor at 8.4 (Jan&ndash;Apr 2026)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-[#0073b9] flex-shrink-0 mt-0.5" />
                        <span>No tiered system &mdash; full STC factor on all capacity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-[#0073b9] flex-shrink-0 mt-0.5" />
                        <span>Larger batteries get the same rate per kWh</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-700 mb-3">After May 2026</h4>
                    <ul className="space-y-2 text-[#444444]">
                      <li className="flex items-start gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>STC factor drops to 6.8 (and falling every 6 months)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Tiered system reduces rebates above 14kWh</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Capacity above 28kWh only receives 15% of STC factor</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why the Government Changed the Rules
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The original $2.3 billion budget was being consumed at an alarming rate. The program was on track to
                exhaust its four-year allocation in just one year, largely because households were installing batteries
                far larger than anticipated &mdash; averaging 28kWh rather than the expected 10&ndash;12kWh.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                The government&apos;s solution was twofold: inject an additional $4.9 billion to nearly triple the budget,
                while simultaneously redesigning the rebate structure to encourage appropriately-sized systems and maintain
                a roughly <strong className="text-[#333333]">30% discount</strong> as battery prices naturally decline.
              </p>

              <blockquote className="bg-[#efefef] p-6 mb-10 border-l-4 border-[#0073b9] italic text-[#444444] rounded-r-xl">
                <p className="mb-4">
                  &quot;The expanded program aims to see more than two million Australians install a battery by 2030 &mdash;
                  double the number initially predicted &mdash; delivering 40 gigawatt hours of additional storage
                  capacity to Australia&apos;s energy grid.&quot;
                </p>
                <cite className="text-[#0073b9] not-italic font-semibold">
                  &mdash; Department of Climate Change, Energy, the Environment and Water
                </cite>
              </blockquote>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How the Rebate Works in Practice
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                One of the best features of the STC system is its simplicity for homeowners. You don&apos;t need to fill
                out lengthy applications or wait for reimbursement. Your accredited installer claims the STCs on your
                behalf and <strong className="text-[#333333]">deducts the rebate directly from your purchase price</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                With each STC currently trading at approximately <strong className="text-[#333333]">$40 on the open
                market</strong>, the discount is applied at the point of sale. There&apos;s no means test, no income
                threshold, and the scheme is uncapped &mdash; meaning there&apos;s no limit on the number of subsidies available.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                5 Reasons Not to Wait
              </h2>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <span className="bg-[#0073b9] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">The STC factor is falling &mdash; fast</h4>
                    <p className="text-[#444444]">From 9.3 in 2025 to 6.8 in May 2026. That&apos;s a 27% drop in rebate value in under six months.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <span className="bg-[#0073b9] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">Six-monthly declines mean no &quot;safe&quot; waiting period</h4>
                    <p className="text-[#444444]">With drops every 6 months rather than annually, there&apos;s no extended window to &quot;wait and see.&quot;</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <span className="bg-[#0073b9] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">Electricity prices aren&apos;t falling</h4>
                    <p className="text-[#444444]">Every month without a battery is another month paying peak grid rates when your solar can&apos;t help you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <span className="bg-[#0073b9] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">The tiered system penalises larger batteries from May 2026</h4>
                    <p className="text-[#444444]">If you want a system larger than 14kWh, installing before May 2026 avoids the reduced tiers entirely.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <span className="bg-[#0073b9] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">Installer demand will surge before the deadline</h4>
                    <p className="text-[#444444]">As May 2026 approaches, expect a rush of installations. Booking early guarantees your spot and your rebate.</p>
                  </div>
                </div>
              </div>

              {/* Final Urgency Box */}
              <div className="bg-[#083941] p-6 mb-10 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <ClockIcon className="w-6 h-6 text-[#fee000]" />
                  <span className="text-[#fee000]">The Bottom Line</span>
                </h3>
                <p className="text-white/90 text-lg">
                  The Cheaper Home Batteries Program is the most generous battery rebate Australia has ever seen &mdash;
                  but it&apos;s designed to wind down. Every six-month period that passes takes a bigger bite out of your
                  potential savings. A 13.5kWh battery purchased today saves you approximately <strong className="text-[#fee000]">$5,000</strong>.
                  The same battery in late 2028 saves just <strong className="text-[#fee000]">$2,200</strong>. That&apos;s
                  $2,800 you&apos;ll never recover. The countdown has begun.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-[#fee000] p-8 sm:p-12 text-center mt-12 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#083941] mb-4">
                Lock In Your Maximum Rebate Before It Drops
              </h2>
              <p className="text-lg text-[#083941]/80 mb-8 max-w-2xl mx-auto">
                Cosmic Renewable Energy can help you navigate the STC rebate system and get your battery installed
                while the incentives are at their highest. Get a free, no-obligation quote today and find out exactly
                how much you could save.
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
