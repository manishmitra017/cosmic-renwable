'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// SVG Icons
const SunIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const CurrencyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const BoltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const SparklesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const BatteryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h14a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm18 4v2" />
  </svg>
)

const LeafIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const MapPinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const tasmaniaAreas = [
  'Hobart', 'Battery Point', 'Sandy Bay', 'South Hobart', 'West Hobart', 'North Hobart',
  'Launceston', 'Riverside', 'Mowbray', 'Newstead', 'Trevallyn', 'Kings Meadows',
  'Devonport', 'East Devonport', 'Spreyton', 'Miandetta', 'Forth', 'Don',
  'Burnie', 'Somerset', 'Parklands', 'Shorewell Park', 'South Burnie', 'Cooee',
  'Kingston', 'Blackmans Bay', 'Howrah', 'Bellerive', 'Lindisfarne', 'Rosny',
  'Glenorchy', 'Moonah', 'Claremont', 'Lenah Valley', 'New Norfolk', 'Bridgewater'
]

export default function SolarBatteryTasmania() {
  return (
    <div className="cosmic-bg">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0f]">
        {/* Background Effects */}
        <div className="absolute inset-0 star-field opacity-40"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-[100px] animate-float-delayed"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#f5a623]/20">
              <LeafIcon className="w-5 h-5 text-[#f5a623]" />
              <span className="text-[#f5a623] font-semibold">Australia&apos;s Clean Energy State</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Solar Battery Installation</span>
              <br />
              <span className="text-gradient-solar">Tasmania</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tasmania&apos;s excellent solar potential and remote areas make battery storage ideal for energy independence. Join 600+ Tasmanian households already saving with Cosmic Renewable Energy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="btn-solar inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Get Your Free Tasmania Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="btn-energy inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <PhoneIcon className="w-5 h-5" />
                1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Tasmania Needs Batteries */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Tasmania Homes Need <span className="text-gradient-energy">Battery Storage</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tasmania&apos;s unique environment makes solar batteries a smart choice for homeowners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: LeafIcon,
                title: "Clean Energy State",
                description: "Tasmania has excellent solar potential year-round. Maximize renewable energy self-sufficiency",
                color: "text-[#f5a623]"
              },
              {
                icon: CurrencyIcon,
                title: "TAS Energy Costs",
                description: "Tasmanian electricity prices are 24-29c/kWh. Solar batteries reduce your energy bills significantly",
                color: "text-[#00d4ff]"
              },
              {
                icon: ShieldIcon,
                title: "Remote Area Security",
                description: "Tasmania's rural areas benefit from battery backup during weather events and outages",
                color: "text-[#f5a623]"
              },
              {
                icon: BoltIcon,
                title: "Energy Independence",
                description: "Reduce grid dependence and achieve energy independence for remote properties",
                color: "text-[#00d4ff]"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cosmic p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 mb-4 ${benefit.color}`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 bg-[#0a0a0f]">
        <div className="absolute inset-0 star-field opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tasmania Battery <span className="text-gradient-solar">Packages</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Competitive pricing for Tasmanian residents with full installation included
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center mb-6">
                <BatteryIcon className="w-12 h-12 text-[#00d4ff] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Essential</h3>
                <p className="text-gray-400 text-sm">Perfect for smaller Tasmanian homes</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">$5,500</span>
                <span className="text-gray-400 ml-2">installed</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['5kWh capacity', 'Single phase', '10-year warranty', 'Backup power ready', 'Full installation'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="btn-energy w-full text-center block py-3">
                Get Tasmania Quote
              </Link>
            </motion.div>

            {/* Standard Package - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative glass rounded-2xl p-8 border-2 border-[#f5a623]/50 transform md:scale-105 shadow-2xl shadow-[#f5a623]/10"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#f5a623] to-[#ff8c00] text-[#0a0a0f] px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <StarIcon className="w-4 h-4" />
                  MOST POPULAR
                </div>
              </div>
              <div className="text-center mb-6">
                <BatteryIcon className="w-12 h-12 text-[#f5a623] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                <p className="text-gray-400 text-sm">Ideal for average Tasmanian households</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">$9,400</span>
                <span className="text-gray-400 ml-2">installed</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['10kWh capacity', 'Single/Three phase', '10-year warranty', 'Full backup power', 'Modular expansion ready', 'Smart monitoring app'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckIcon className="w-5 h-5 text-[#f5a623] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="btn-solar w-full text-center block py-3">
                Get Tasmania Quote
              </Link>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center mb-6">
                <BatteryIcon className="w-12 h-12 text-[#00d4ff] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <p className="text-gray-400 text-sm">Maximum independence for larger homes</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">$14,700</span>
                <span className="text-gray-400 ml-2">installed</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['13.5kWh Tesla Powerwall', 'Three phase', '10-year warranty', 'Tesla app monitoring', 'Full home backup', 'Premium installation'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="btn-energy w-full text-center block py-3">
                Get Tasmania Quote
              </Link>
            </motion.div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            *Prices include installation. Final price depends on site assessment and system selection.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPinIcon className="w-6 h-6 text-[#f5a623]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Tasmania <span className="text-gradient-energy">Service Areas</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We install solar batteries across Tasmania - from Hobart to Launceston and beyond
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {tasmaniaAreas.map((area, index) => (
                <div
                  key={index}
                  className="text-center py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-gray-300 text-sm">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6 text-sm">
              Don&apos;t see your area? We service all Tasmania regions. <Link href="/contact" className="text-[#00d4ff] hover:underline">Contact us</Link> to confirm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0a0a0f]">
        <div className="absolute inset-0 star-field opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f5a623]/5 rounded-full blur-[150px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SparklesIcon className="w-12 h-12 text-[#f5a623] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Tasmania&apos;s <span className="text-gradient-solar">Clean Energy Future</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 600+ Tasmanian homeowners who have made the switch to solar battery storage. Achieve energy independence in Australia&apos;s clean energy state. Get your free, no-obligation quote today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="btn-solar inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Get Free Tasmania Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="btn-energy inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <PhoneIcon className="w-5 h-5" />
                Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
