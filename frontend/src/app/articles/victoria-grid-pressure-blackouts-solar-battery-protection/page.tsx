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

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function VictoriaGridPressureArticle() {
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
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white border border-white/30">Energy Security</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Victoria&apos;s Grid Under <span className="text-[#fee000]">Pressure</span>: How Solar + Battery Protects Your Home
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Coal closures, extreme weather, and ageing infrastructure are pushing Victoria&apos;s power grid to the limit. Here&apos;s why energy independence matters more than ever.
              </p>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span>February 2026</span>
                <span className="text-[#fee000]">|</span>
                <span>9 min read</span>
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
                  alt="Solar battery system providing home energy security during grid outages"
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
                Key Takeaway for Victorian Homeowners
              </h2>
              <p className="text-[#083941] text-lg">
                Victoria faces growing grid reliability risks from coal closures, extreme weather, and infrastructure delays.
                A solar + battery system with backup capability <strong>keeps your lights on during blackouts and protects you
                from extreme price spikes</strong> that occur when the grid is under stress.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What&apos;s Happening to Victoria&apos;s Power Grid?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Victoria is in the midst of the biggest transformation of its electricity system since the grid was first
                built. The coal-fired power stations that have reliably supplied the state for decades are reaching the end
                of their life, and the transition to renewable energy &mdash; while essential &mdash; is creating a period of
                significant vulnerability.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The Australian Energy Market Operator (AEMO) has repeatedly warned that Victoria faces <strong className="text-[#333333]">
                reliability gaps</strong> in the coming years, with the risk of supply shortfalls during extreme heat events
                and unexpected plant outages.
              </p>

              {/* Coal Closure Timeline */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#083941] p-4">
                  <h3 className="text-xl font-bold text-white">Victoria&apos;s Coal Closure Timeline</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 flex-shrink-0 text-center">
                      <div className="text-2xl font-bold text-red-600">2028</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#333333]">Yallourn Power Station Closes</h4>
                      <p className="text-[#666666]">1,480 MW of baseload capacity removed from Victoria&apos;s grid. Brought forward from original 2032 closure date.</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-20 flex-shrink-0 text-center">
                      <div className="text-2xl font-bold text-orange-600">2030s</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#333333]">Loy Yang A &amp; B Under Pressure</h4>
                      <p className="text-[#666666]">Combined 3,210 MW of capacity facing reliability issues and accelerated closure discussions. Unplanned outages have become more frequent.</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-20 flex-shrink-0 text-center">
                      <div className="text-2xl font-bold text-[#0073b9]">Total</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#333333]">4,000+ MW of Baseload Power at Risk</h4>
                      <p className="text-[#666666]">This represents a massive share of Victoria&apos;s generation capacity that must be replaced with new infrastructure &mdash; much of which is delayed.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Extreme Weather Is Making It Worse
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Victoria&apos;s climate is becoming more volatile, with increasingly severe heatwaves and storms placing
                enormous strain on the power grid from both sides &mdash; driving up demand while damaging infrastructure.
              </p>

              {/* Weather Events */}
              <div className="bg-white p-6 mb-10 border border-red-400 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  Recent Grid Stress Events in Victoria
                </h3>
                <ul className="space-y-4 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">2023</span>
                    <div>
                      <strong className="text-[#333333]">October storms leave 500,000+ homes without power.</strong> Some areas
                      experienced outages lasting 5-7 days. Ageing above-ground powerlines were devastated by storm damage.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">2024</span>
                    <div>
                      <strong className="text-[#333333]">Summer heatwaves trigger Lack of Reserve notices.</strong> AEMO warned
                      of potential supply shortfalls across Victoria during extreme heat events. Wholesale prices spiked above
                      $10,000/MWh during evening peaks.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">2025</span>
                    <div>
                      <strong className="text-[#333333]">Continued heatwave stress and coal plant outages.</strong> Unplanned
                      outages at Loy Yang A removed significant generation capacity during critical summer periods, pushing the
                      grid to its limits.
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Infrastructure Delays Are Extending the Risk
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The new transmission lines and renewable energy projects designed to replace coal are facing significant
                delays and cost blowouts:
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-[#444444] text-lg">
                  <ExclamationTriangleIcon className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div><strong className="text-[#333333]">VNI West interconnector</strong> (Victoria-NSW): Route controversies and regulatory delays have pushed the timeline out.</div>
                </li>
                <li className="flex items-start gap-3 text-[#444444] text-lg">
                  <ExclamationTriangleIcon className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div><strong className="text-[#333333]">Marinus Link</strong> (Victoria-Tasmania): Extended timeline for this critical interconnector.</div>
                </li>
                <li className="flex items-start gap-3 text-[#444444] text-lg">
                  <ExclamationTriangleIcon className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div><strong className="text-[#333333]">Western Renewables Link</strong>: Delays reported on this key transmission project connecting renewable energy zones to Melbourne.</div>
                </li>
              </ul>

              <p className="text-[#444444] text-lg mb-8">
                These delays mean the gap between coal closing and replacement infrastructure being ready is widening. During
                this gap, Victorians are increasingly exposed to supply disruptions and price volatility.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Solar + Battery Protects Your Home
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                A solar + battery system with backup capability provides genuine energy independence, protecting your household
                from both the physical risks of blackouts and the financial risks of price spikes.
              </p>

              {/* Protection Benefits */}
              <div className="bg-white p-6 mb-10 border border-[#0073b9] rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0073b9] mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="w-6 h-6" />
                  Your Energy Security Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#333333]">Blackout protection.</strong>
                      <span className="text-[#444444]"> When the grid goes down, your battery automatically kicks in to keep your essential appliances running &mdash; lights, fridge, internet, medical equipment.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#333333]">Price spike immunity.</strong>
                      <span className="text-[#444444]"> During grid stress events when wholesale prices can exceed $15,000/MWh, you&apos;re using your own stored solar &mdash; completely unaffected.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#333333]">Storm resilience.</strong>
                      <span className="text-[#444444]"> Even if powerlines in your area are damaged, a solar + battery system can continue to power your home using the solar panels on your roof.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#333333]">Heatwave safety.</strong>
                      <span className="text-[#444444]"> Keep your air conditioning running during extreme heat events, even if the grid is struggling. This is a genuine health and safety benefit for vulnerable household members.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#333333]">Daily bill savings.</strong>
                      <span className="text-[#444444]"> Even when the grid is working normally, your battery saves you money every single day by shifting solar energy to expensive peak periods.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Real Numbers: What a Battery Means During a Blackout
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                During the October 2023 storms, some Victorian families were without power for up to a week. Here&apos;s what
                a battery system means in practical terms:
              </p>

              {/* Battery During Blackout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 border-2 border-red-400 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-red-600 mb-4">Without Battery</h4>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      <span>No power &mdash; complete blackout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      <span>Food spoilage (fridge/freezer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      <span>No heating/cooling in extreme weather</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      <span>No internet or communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">&#10005;</span>
                      <span>Medical equipment at risk</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 border-2 border-[#0073b9] rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-[#0073b9] mb-4">With Solar + Battery</h4>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Essential circuits stay powered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Fridge and freezer keep running</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Climate control maintained</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Internet router and devices charged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Solar recharges battery each day</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                With a 13.5kWh battery and solar panels, a household can typically maintain essential power for
                <strong className="text-[#333333]"> 1-3 days</strong> even without any solar generation. With solar recharging
                the battery each day, a well-managed household can ride out extended outages indefinitely.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Window to Prepare Is Now
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The convergence of grid reliability risks, declining rebates, and affordable battery technology creates a
                clear window of opportunity. Here&apos;s why acting in 2026 matters:
              </p>

              <div className="bg-[#efefef] p-6 rounded-xl mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Victorian Battery Rebate</div>
                    <div className="text-2xl font-bold text-[#333333]">$2,950</div>
                    <div className="text-sm text-red-600 mt-1">Limited allocations remaining</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Federal STC Discount</div>
                    <div className="text-2xl font-bold text-[#333333]">~$2,500</div>
                    <div className="text-sm text-red-600 mt-1">Reduces every year to 2031</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-sm text-[#0073b9] font-semibold mb-1">Battery Rebate (Federal)</div>
                    <div className="text-2xl font-bold text-[#333333]">$336/kWh</div>
                    <div className="text-sm text-red-600 mt-1">Drops to $272 from May 2026</div>
                  </div>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                Every summer that passes without a battery is a summer where your family is exposed to blackout risk. Every
                month you wait is a month of declining rebates and lost electricity savings. The grid challenges facing Victoria
                are not going away &mdash; they&apos;re intensifying. <strong className="text-[#333333]">The smartest time to
                prepare is before you need it.</strong>
              </p>

              {/* Quote Box */}
              <blockquote className="bg-[#efefef] p-6 mb-10 border-l-4 border-[#0073b9] italic text-[#444444] rounded-r-xl">
                <p className="mb-4">
                  &quot;The customers who are most grateful for their battery systems are the ones who&apos;ve been through a
                  blackout since installing. When the neighbours are in the dark and you still have power, lights, and
                  internet &mdash; that&apos;s when you realise the true value of energy independence.&quot;
                </p>
                <cite className="text-[#0073b9] not-italic font-semibold">
                  &mdash; Solar Battery Group Customer Feedback
                </cite>
              </blockquote>
            </div>

            {/* Call to Action */}
            <div className="bg-[#fee000] p-8 sm:p-12 text-center mt-12 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#083941] mb-4">
                Protect Your Home Before the Next Blackout
              </h2>
              <p className="text-lg text-[#083941]/80 mb-8 max-w-2xl mx-auto">
                Don&apos;t wait for the next storm or heatwave to wish you had a battery. Get a free quote today and take
                control of your home&apos;s energy security.
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
