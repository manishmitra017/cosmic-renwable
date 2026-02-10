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

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export default function AustraliaSolarBatteryRebateGuideArticle() {
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
                The Complete 2026 Australian Solar Battery Rebate Guide:{' '}
                <span className="text-[#fee000]">Every State, Every Dollar, Every Deadline</span>
              </h1>
              <p className="text-xl text-white/90 mb-6">
                From the $7.2 billion federal program to state-specific incentives &mdash; this is the definitive guide to maximising your battery rebate in 2026
              </p>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span className="text-[#fee000]">February 2026</span>
                <span>|</span>
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
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/batteryImage3.jpg"
                  alt="Home battery system installation - Australian solar battery rebate guide 2026"
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
                The federal Cheaper Home Batteries Program has been expanded to <strong>$7.2 billion</strong>, but the STC rebate factor drops
                from 8.4 to 6.8 in May 2026 &mdash; and a new tiered system slashes rebates for batteries over 14kWh.
                Combined with state programs winding down across the country, <strong>every month you wait costs you real money</strong>.
                This guide shows you exactly what&apos;s available in your state right now.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-[#444444] text-lg mb-6">
                If you&apos;re an Australian homeowner with solar panels &mdash; or thinking about getting them &mdash; 2026 is
                shaping up to be the most critical year for battery decisions. The federal government has tripled its
                commitment to home batteries, but the fine print reveals a clear message: <strong className="text-[#333333]">act
                sooner, save more</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                We&apos;ve compiled every federal and state incentive into one definitive guide. Whether you&apos;re in
                Melbourne, Sydney, Brisbane, Adelaide, Perth, or regional Australia &mdash; this is everything you need
                to know to maximise your rebate before the deadlines hit.
              </p>

              {/* ===== FEDERAL SECTION ===== */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Federal: The Cheaper Home Batteries Program ($7.2 Billion)
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                In December 2025, the federal government announced a massive expansion of the Cheaper Home Batteries
                Program &mdash; from the original <strong className="text-[#333333]">$2.3 billion to $7.2 billion</strong> over
                the forward estimates. The target? Two million Australian homes with battery storage by 2030, delivering
                40 GWh of distributed energy storage to the grid.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                The program works through Small-scale Technology Certificates (STCs). Your installer claims the STCs on
                your behalf and deducts the value directly from your quote &mdash; meaning you see the discounted price
                upfront with no paperwork to manage yourself.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The discount currently sits at approximately <strong className="text-[#333333]">30% off the upfront cost</strong> of
                eligible battery systems between 5 and 100 kWh nominal capacity. But that percentage is shrinking every
                six months &mdash; and a major new tiering rule kicks in from May 2026.
              </p>

              {/* STC Factor Timeline Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0073b9] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ClockIcon className="w-6 h-6" />
                    STC Factor Timeline &mdash; The Rebate Is Shrinking
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Period</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">STC Factor</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Est. Rebate / kWh</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">2025 (Jul &ndash; Dec)</td>
                        <td className="p-4 text-center font-bold text-[#333333]">9.3</td>
                        <td className="p-4 text-right font-bold text-[#333333]">~$372</td>
                        <td className="p-4 text-center text-[#666666]">Expired</td>
                      </tr>
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">Jan &ndash; Apr 2026</td>
                        <td className="p-4 text-center font-bold text-[#083941]">8.4</td>
                        <td className="p-4 text-right font-bold text-[#083941] text-lg">~$336</td>
                        <td className="p-4 text-center"><span className="bg-[#fee000] text-[#083941] px-3 py-1 rounded-full text-sm font-semibold">Current</span></td>
                      </tr>
                      <tr className="bg-[#fee000]/10">
                        <td className="p-4 text-[#444444]">May &ndash; Dec 2026 *</td>
                        <td className="p-4 text-center font-bold text-[#333333]">6.8</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$272</td>
                        <td className="p-4 text-center"><span className="bg-[#fee000]/20 px-3 py-1 rounded-full text-sm text-[#083941] border border-[#083941]/30">New Tiers Apply</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Jan &ndash; Jun 2027</td>
                        <td className="p-4 text-center font-bold text-[#333333]">5.7</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$228</td>
                        <td className="p-4 text-center text-[#666666]">&ndash;</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Jul &ndash; Dec 2027</td>
                        <td className="p-4 text-center font-bold text-[#333333]">5.2</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$208</td>
                        <td className="p-4 text-center text-[#666666]">&ndash;</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2028+</td>
                        <td className="p-4 text-center font-bold text-[#333333]">Declining</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">Declining</td>
                        <td className="p-4 text-center text-[#666666]">&ndash;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  * New tiered rebate system applies from May 2026 onwards. STC factors decline every six months.
                </div>
              </div>

              {/* Urgency Callout */}
              <div className="bg-white p-6 mb-10 border border-red-500 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  Critical: New Tiered System from May 2026
                </h3>
                <p className="text-[#444444] mb-4">
                  From May 2026, the rebate will no longer apply equally across all battery capacities. A new tiered
                  structure dramatically reduces the incentive for larger systems:
                </p>
              </div>

              {/* Tiered System Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 text-center border-2 border-[#0073b9] rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-[#0073b9] mb-2">100%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Full Rebate</div>
                  <div className="text-[#666666]">0 &ndash; 14 kWh</div>
                  <div className="mt-4 text-sm text-[#0073b9]">STC factor applied at full rate</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-[#fee000] rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-[#083941] mb-2">60%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Reduced Rebate</div>
                  <div className="text-[#666666]">14 &ndash; 28 kWh</div>
                  <div className="mt-4 text-sm text-[#083941]">STC factor applied at 60%</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-red-500 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-red-500 mb-2">15%</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Minimal Rebate</div>
                  <div className="text-[#666666]">28 &ndash; 50 kWh</div>
                  <div className="mt-4 text-sm text-red-500">STC factor applied at just 15%</div>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-6">
                Only the first <strong className="text-[#333333]">50 kWh of usable capacity</strong> is eligible for STCs,
                and only <strong className="text-[#333333]">one battery per premises</strong> qualifies. Your battery must
                be CEC approved and installed by an SAA-accredited installer.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                What does this mean in practice? If you&apos;re planning a 13.5 kWh system, install before May and you
                get the full rebate at the 8.4 STC factor. Wait until May and your rebate drops to the 6.8 factor &mdash;
                but at least you&apos;re still in the 100% tier. Planning a 20 kWh+ system? <strong className="text-[#333333]">The
                difference could be $2,000&ndash;$4,000 in lost rebates.</strong>
              </p>

              {/* Federal Eligibility */}
              <div className="bg-[#efefef] rounded-xl p-6 mb-10">
                <h3 className="text-xl font-bold text-[#333333] mb-4">Federal Program Eligibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]">Battery systems 5 kWh &ndash; 100 kWh nominal capacity (STCs on first 50 kWh usable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]">Must be connected to new or existing rooftop solar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]">CEC-approved battery products only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]">Installed by SAA-accredited installer (like Cosmic Renewable Energy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]">No means test &mdash; available to all households regardless of income</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]">One battery per premises &mdash; scheme is uncapped nationally</span>
                  </li>
                </ul>
              </div>

              {/* ===== STATE BY STATE ===== */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6 flex items-center gap-3">
                <MapPinIcon className="w-8 h-8 text-[#0073b9]" />
                State-by-State Breakdown
              </h2>

              <p className="text-[#444444] text-lg mb-8">
                Every Australian household gets the federal STC discount automatically. But what&apos;s available on top
                of that depends entirely on your state. Here&apos;s the full picture for 2026.
              </p>

              {/* ===== VICTORIA ===== */}
              <div className="bg-white p-6 mb-8 border-2 border-[#0073b9] rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0073b9] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">VIC</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333]">Victoria</h3>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-700 font-semibold text-sm flex items-center gap-2">
                    <ExclamationTriangleIcon className="w-5 h-5" />
                    Solar Victoria Battery Loan Program &mdash; CLOSED (no longer accepting applications)
                  </p>
                </div>

                <p className="text-[#444444] mb-4">
                  Victoria&apos;s once-generous battery loan scheme is now closed to new applicants. That leaves the
                  <strong className="text-[#333333]"> federal STC discount as the primary incentive</strong> for Victorian
                  households &mdash; making it more important than ever to act while the STC factor is still at 8.4.
                </p>

                <p className="text-[#444444] mb-4">
                  Victorian households are feeling the pain more than most. Electricity prices have surged over
                  <strong className="text-[#333333]"> 50% since 2021</strong>, with the average household now paying
                  between <strong className="text-[#333333]">$1,800 and $2,200 per year</strong> on electricity alone.
                  That&apos;s the sharpest price growth of any state, and it&apos;s exactly why battery storage makes
                  such compelling financial sense in Victoria.
                </p>

                <div className="bg-[#efefef] rounded-lg p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-[#666666]">Avg. Annual Bill</div>
                      <div className="text-lg font-bold text-[#333333]">$1,800 &ndash; $2,200</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">State Battery Rebate</div>
                      <div className="text-lg font-bold text-red-600">Closed</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">Federal STCs</div>
                      <div className="text-lg font-bold text-[#0073b9]">Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== NSW ===== */}
              <div className="bg-white p-6 mb-8 border-2 border-[#0073b9] rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0073b9] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">NSW</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333]">New South Wales</h3>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-green-700 font-semibold text-sm flex items-center gap-2">
                    <CheckIcon className="w-5 h-5" />
                    Household Energy Saving Upgrades &mdash; Battery installation incentives AVAILABLE
                  </p>
                </div>

                <p className="text-[#444444] mb-4">
                  NSW households have a real advantage in 2026. The <strong className="text-[#333333]">Household Energy
                  Saving Upgrades program</strong> offers incentives for battery installation that can be
                  <strong className="text-[#333333]"> stacked with federal STCs</strong> &mdash; meaning NSW residents
                  can potentially access the deepest total discount of any state.
                </p>

                <p className="text-[#444444] mb-4">
                  With the average NSW household paying between <strong className="text-[#333333]">$1,800 and $2,400 per
                  year</strong> on electricity, the payback period for a battery system with stacked rebates can be as
                  short as 5&ndash;7 years &mdash; and that&apos;s before factoring in continued electricity price rises.
                </p>

                <div className="bg-[#efefef] rounded-lg p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-[#666666]">Avg. Annual Bill</div>
                      <div className="text-lg font-bold text-[#333333]">$1,800 &ndash; $2,400</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">State Incentive</div>
                      <div className="text-lg font-bold text-green-600">Available</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">Federal STCs</div>
                      <div className="text-lg font-bold text-[#0073b9]">Stackable</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== QUEENSLAND ===== */}
              <div className="bg-white p-6 mb-8 border-2 border-[#0073b9] rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0073b9] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">QLD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333]">Queensland</h3>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-green-700 font-semibold text-sm flex items-center gap-2">
                    <SunIcon className="w-5 h-5" />
                    Supercharged Solar for Renters &mdash; $3,500 for landlords installing solar/battery
                  </p>
                </div>

                <p className="text-[#444444] mb-4">
                  Queensland has the best solar conditions in Australia, and the state government is leaning into that
                  advantage. The <strong className="text-[#333333]">Supercharged Solar for Renters</strong> program provides
                  landlords with up to <strong className="text-[#333333]">$3,500</strong> toward solar and battery
                  installation on rental properties &mdash; a unique incentive that benefits tenants through lower bills.
                </p>

                <p className="text-[#444444] mb-4">
                  For homeowners, the federal STC discount remains the primary rebate. Queensland households typically pay
                  between <strong className="text-[#333333]">$1,500 and $2,100 per year</strong> on electricity &mdash; lower
                  than the southern states thanks to abundant solar generation. A battery lets you capture more of that
                  solar energy instead of exporting it for minimal feed-in tariff returns.
                </p>

                <div className="bg-[#efefef] rounded-lg p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-[#666666]">Avg. Annual Bill</div>
                      <div className="text-lg font-bold text-[#333333]">$1,500 &ndash; $2,100</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">State Incentive</div>
                      <div className="text-lg font-bold text-green-600">$3,500 (Renters)</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">Federal STCs</div>
                      <div className="text-lg font-bold text-[#0073b9]">Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== SOUTH AUSTRALIA ===== */}
              <div className="bg-white p-6 mb-8 border-2 border-[#0073b9] rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0073b9] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">SA</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333]">South Australia</h3>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-700 font-semibold text-sm flex items-center gap-2">
                    <ExclamationTriangleIcon className="w-5 h-5" />
                    Home Battery Scheme &mdash; ENDED (federal STCs only)
                  </p>
                </div>

                <p className="text-[#444444] mb-4">
                  South Australia&apos;s pioneering Home Battery Scheme has ended, leaving federal STCs as the sole rebate
                  mechanism. But SA households have the strongest financial case for batteries of any state &mdash; they
                  face the <strong className="text-[#333333]">highest electricity prices in the country</strong> at
                  <strong className="text-[#333333]"> $2,000 to $2,600 per year</strong>.
                </p>

                <p className="text-[#444444] mb-4">
                  The silver lining? South Australia is the national pioneer of Virtual Power Plants (VPPs). By enrolling
                  your battery in a VPP program, you can earn an additional <strong className="text-[#333333]">$300 to $800
                  per year</strong> by allowing your battery to support the grid during peak demand. This dramatically
                  improves the payback period and turns your battery into a genuine income-generating asset.
                </p>

                <div className="bg-[#efefef] rounded-lg p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-[#666666]">Avg. Annual Bill</div>
                      <div className="text-lg font-bold text-red-600">$2,000 &ndash; $2,600</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">VPP Earnings</div>
                      <div className="text-lg font-bold text-green-600">$300 &ndash; $800/yr</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">Federal STCs</div>
                      <div className="text-lg font-bold text-[#0073b9]">Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== WESTERN AUSTRALIA ===== */}
              <div className="bg-white p-6 mb-10 border-2 border-[#0073b9] rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0073b9] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">WA</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333]">Western Australia</h3>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-yellow-700 font-semibold text-sm flex items-center gap-2">
                    <ExclamationTriangleIcon className="w-5 h-5" />
                    DEBS feed-in tariffs extremely low &mdash; batteries now essential for solar value
                  </p>
                </div>

                <p className="text-[#444444] mb-4">
                  Western Australia presents a unique case. The Distributed Energy Buyback Scheme (DEBS) offers
                  just <strong className="text-[#333333]">2.25 cents per kWh during off-peak hours</strong> for exported
                  solar &mdash; making it virtually worthless to send your solar energy back to the grid. Combined with
                  increasing solar curtailment issues in WA, a battery isn&apos;t just nice to have &mdash; it&apos;s
                  <strong className="text-[#333333]"> essential for getting real value from your solar panels</strong>.
                </p>

                <p className="text-[#444444] mb-4">
                  With average household bills of <strong className="text-[#333333]">$1,600 to $2,200 per year</strong> and
                  federal STCs providing the main rebate, WA homeowners who install a battery can shift from exporting
                  solar for pennies to self-consuming it during expensive evening peak periods &mdash; a swing that can
                  save hundreds annually.
                </p>

                <div className="bg-[#efefef] rounded-lg p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-[#666666]">Avg. Annual Bill</div>
                      <div className="text-lg font-bold text-[#333333]">$1,600 &ndash; $2,200</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">DEBS Off-Peak Rate</div>
                      <div className="text-lg font-bold text-red-600">2.25c/kWh</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">Federal STCs</div>
                      <div className="text-lg font-bold text-[#0073b9]">Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== STATE COMPARISON TABLE ===== */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                State-by-State Comparison at a Glance
              </h2>

              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#083941] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CurrencyDollarIcon className="w-6 h-6 text-[#fee000]" />
                    2026 Battery Rebate Summary by State
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">State</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Federal STCs</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">State Incentive</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Avg. Annual Bill</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Urgency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 font-semibold text-[#333333]">VIC</td>
                        <td className="p-4 text-center"><span className="text-[#0073b9] font-semibold">~30% off</span></td>
                        <td className="p-4 text-center"><span className="text-red-600 font-semibold">Closed</span></td>
                        <td className="p-4 text-right text-[#444444]">$1,800 &ndash; $2,200</td>
                        <td className="p-4 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">HIGH</span></td>
                      </tr>
                      <tr className="bg-[#fee000]/10">
                        <td className="p-4 font-semibold text-[#333333]">NSW</td>
                        <td className="p-4 text-center"><span className="text-[#0073b9] font-semibold">~30% off</span></td>
                        <td className="p-4 text-center"><span className="text-green-600 font-semibold">Stackable</span></td>
                        <td className="p-4 text-right text-[#444444]">$1,800 &ndash; $2,400</td>
                        <td className="p-4 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">HIGH</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#333333]">QLD</td>
                        <td className="p-4 text-center"><span className="text-[#0073b9] font-semibold">~30% off</span></td>
                        <td className="p-4 text-center"><span className="text-green-600 font-semibold">$3,500 (Renters)</span></td>
                        <td className="p-4 text-right text-[#444444]">$1,500 &ndash; $2,100</td>
                        <td className="p-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold">MEDIUM</span></td>
                      </tr>
                      <tr className="bg-[#fee000]/10">
                        <td className="p-4 font-semibold text-[#333333]">SA</td>
                        <td className="p-4 text-center"><span className="text-[#0073b9] font-semibold">~30% off</span></td>
                        <td className="p-4 text-center"><span className="text-red-600 font-semibold">Ended</span></td>
                        <td className="p-4 text-right text-[#444444]">$2,000 &ndash; $2,600</td>
                        <td className="p-4 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">HIGH</span></td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#333333]">WA</td>
                        <td className="p-4 text-center"><span className="text-[#0073b9] font-semibold">~30% off</span></td>
                        <td className="p-4 text-center"><span className="text-red-600 font-semibold">Federal Only</span></td>
                        <td className="p-4 text-right text-[#444444]">$1,600 &ndash; $2,200</td>
                        <td className="p-4 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">HIGH</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ===== WHY EVERY MONTH MATTERS ===== */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why Every Month You Wait Costs You Money
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Let&apos;s put concrete numbers to the declining rebate. Consider a typical 13.5 kWh battery system:
              </p>

              {/* Delay Cost Examples */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0073b9] p-4">
                  <h3 className="text-xl font-bold text-white">Cost of Delay: 13.5 kWh Battery Example</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Install Period</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Est. Total Rebate</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Lost vs. Today</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-[#fee000]/20">
                        <td className="p-4 font-semibold text-[#083941]">Now (Jan &ndash; Apr 2026)</td>
                        <td className="p-4 text-right font-bold text-[#083941] text-lg">~$4,536</td>
                        <td className="p-4 text-right font-bold text-green-600">&mdash;</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">May &ndash; Dec 2026</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$3,672</td>
                        <td className="p-4 text-right font-semibold text-red-600">-$864</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">H1 2027</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$3,078</td>
                        <td className="p-4 text-right font-semibold text-red-600">-$1,458</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">H2 2027</td>
                        <td className="p-4 text-right font-semibold text-[#333333]">~$2,808</td>
                        <td className="p-4 text-right font-semibold text-red-600">-$1,728</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#fee000]/10 text-sm text-[#083941] font-semibold">
                  Waiting just 4 months past April could cost you $864+ in lost rebates on a standard battery system.
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-6">
                For larger systems, the numbers are even more dramatic. A 20 kWh battery installed before May 2026 receives
                the full STC rate on every kilowatt-hour. After May, only the first 14 kWh gets 100% &mdash; the remaining
                6 kWh drops to just 60% of an already-lower STC factor. The rebate loss on a 20 kWh system could exceed
                <strong className="text-[#333333]"> $2,500 by mid-2026</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                And it&apos;s not just the rebates declining. Every month without a battery means another month of paying
                full grid prices during expensive evening peaks, another month of exporting solar for minimal feed-in
                returns, and another month of exposure to the electricity price increases that show no sign of stopping.
              </p>

              {/* ===== WHAT MAKES A GOOD BATTERY ===== */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How to Choose the Right Battery Size
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                With the new tiered system, right-sizing your battery is more important than ever. Here&apos;s what we
                recommend based on typical Australian household consumption:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border border-gray-200">
                  <div className="text-3xl font-bold text-[#0073b9] mb-2">10 &ndash; 14 kWh</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Standard Home</div>
                  <div className="text-[#666666] text-sm mb-3">2&ndash;3 person household</div>
                  <div className="bg-[#0073b9]/10 rounded-lg p-2 text-sm text-[#0073b9] font-semibold">Full 100% rebate tier</div>
                </div>
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border-2 border-[#fee000]">
                  <div className="text-3xl font-bold text-[#083941] mb-2">14 &ndash; 20 kWh</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Larger Home</div>
                  <div className="text-[#666666] text-sm mb-3">4&ndash;5 person household with EV</div>
                  <div className="bg-[#fee000]/20 rounded-lg p-2 text-sm text-[#083941] font-semibold">Install before May 2026!</div>
                </div>
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border border-gray-200">
                  <div className="text-3xl font-bold text-[#333333] mb-2">20+ kWh</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">Premium / Off-Grid</div>
                  <div className="text-[#666666] text-sm mb-3">Energy independence goal</div>
                  <div className="bg-red-50 rounded-lg p-2 text-sm text-red-600 font-semibold">Act NOW &mdash; biggest savings loss</div>
                </div>
              </div>

              {/* ===== VPP OPPORTUNITY ===== */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Bonus Income: Virtual Power Plant Earnings
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Regardless of which state you&apos;re in, enrolling your battery in a Virtual Power Plant (VPP) program
                can earn you <strong className="text-[#333333]">$300 to $800+ per year</strong> in additional income. Your
                battery occasionally exports stored energy to the grid during peak demand events, and you&apos;re paid a
                premium rate for it.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                South Australia leads the country in VPP participation, but programs are now available across all major
                states. When you factor VPP earnings into the battery economics, payback periods shorten dramatically
                &mdash; in some cases to just <strong className="text-[#333333]">4&ndash;6 years</strong>.
              </p>

              {/* ===== HOW COSMIC HELPS ===== */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Cosmic Renewable Energy Maximises Your Savings
              </h2>

              <div className="bg-white p-6 mb-10 rounded-xl shadow-lg border border-gray-200">
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="text-[#333333]">Free Consultation &amp; Custom Sizing</strong>
                      <p className="text-[#444444]">We analyse your energy bills, solar generation, and consumption patterns to recommend the optimal battery size for your home &mdash; ensuring you land in the right rebate tier.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong className="text-[#333333]">Rebate Pre-Applied on Your Quote</strong>
                      <p className="text-[#444444]">We deduct the full STC rebate and any applicable state incentives directly from your quote. You see the final discounted price upfront with no hidden costs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong className="text-[#333333]">SAA-Accredited Installation</strong>
                      <p className="text-[#444444]">All our installers are Solar Accreditation Australia accredited &mdash; a requirement for the federal rebate. We use only CEC-approved products.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong className="text-[#333333]">We Handle All Paperwork</strong>
                      <p className="text-[#444444]">STC claims, state program applications, grid connection forms &mdash; we manage every piece of documentation so you don&apos;t have to.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0073b9] text-white rounded-full flex items-center justify-center font-bold">5</span>
                    <div>
                      <strong className="text-[#333333]">VPP Setup &amp; Ongoing Support</strong>
                      <p className="text-[#444444]">We help you enrol in the best VPP program for your area, maximising your ongoing returns from battery ownership.</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* ===== FINAL URGENCY ===== */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Bottom Line: 2026 Is the Year to Act
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Here&apos;s what the data tells us unequivocally:
              </p>

              <div className="bg-[#fee000] rounded-xl p-8 mb-10">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <BoltIcon className="w-6 h-6 text-[#083941] flex-shrink-0 mt-0.5" />
                    <span className="text-[#083941] text-lg"><strong>Federal rebates are declining every six months</strong> &mdash; the STC factor drops from 8.4 to 6.8 in May 2026, then to 5.7 in early 2027</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BoltIcon className="w-6 h-6 text-[#083941] flex-shrink-0 mt-0.5" />
                    <span className="text-[#083941] text-lg"><strong>State programs are closing</strong> &mdash; Victoria&apos;s battery loan is gone, SA&apos;s scheme has ended, and remaining programs have no guaranteed extension</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BoltIcon className="w-6 h-6 text-[#083941] flex-shrink-0 mt-0.5" />
                    <span className="text-[#083941] text-lg"><strong>Electricity prices keep rising</strong> &mdash; every quarter without a battery means higher bills you can&apos;t recover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BoltIcon className="w-6 h-6 text-[#083941] flex-shrink-0 mt-0.5" />
                    <span className="text-[#083941] text-lg"><strong>New tiered rules punish delay</strong> &mdash; larger batteries face drastically reduced rebates from May 2026</span>
                  </li>
                </ul>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                Whether you&apos;re in Victoria dealing with 50%+ price surges, in South Australia paying the nation&apos;s
                highest electricity bills, in WA watching solar exports earn you barely 2 cents, or anywhere else in
                Australia &mdash; the mathematics of battery storage have never been more compelling. And they&apos;ll never
                be this good again. The best time to install a battery was six months ago. The second-best time is
                <strong className="text-[#333333]"> right now, before the May 2026 deadline</strong>.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-[#0073b9] rounded-2xl p-8 sm:p-12 text-center mt-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Lock In Your <span className="text-[#fee000]">Maximum Rebate</span> Before May 2026
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                As a CEC-accredited installer, Cosmic Renewable Energy handles everything &mdash; from rebate claims
                to professional installation. Get your free quote today and see exactly how much you&apos;ll save
                in your state.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-[#fee000] text-[#083941] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#e5ca00] transition-colors"
                >
                  Get Free Quote
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <a
                  href="tel:1300090984"
                  className="bg-white text-[#0073b9] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
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
