'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
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

export default function SolarBatterySydney() {
  const suburbs = [
    'Sydney CBD', 'North Sydney', 'Chatswood', 'Manly', 'Mosman', 'Neutral Bay',
    'Parramatta', 'Ryde', 'Epping', 'Macquarie Park', 'Castle Hill', 'Baulkham Hills',
    'Bondi', 'Randwick', 'Coogee', 'Maroubra', 'Cronulla', 'Sutherland',
    'Liverpool', 'Bankstown', 'Cabramatta', 'Fairfield', 'Campbelltown', 'Penrith',
    'Blacktown', 'Mount Druitt', 'Seven Hills', 'Kellyville', 'Rouse Hill', 'The Ponds',
    'Hurstville', 'Kogarah', 'Miranda', 'Rockdale', 'Sans Souci', 'Brighton-le-Sands'
  ]

  return (
    <div className="cosmic-bg">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0072CE]">
        <div className="absolute inset-0 star-field opacity-40"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0072CE]/10 rounded-full blur-[100px] animate-float-delayed"></div>

        <div className="absolute inset-0">
          <Image
            src="/batteryImage1.jpg"
            alt="Solar Battery Installation Sydney"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0072CE] via-[#0072CE]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FFE500]/30 mb-6">
              <SparklesIcon className="w-4 h-4 text-[#FFE500]" />
              <span className="text-[#FFE500] text-sm font-semibold">NSW&apos;S #1 CHOICE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight font-display">
              <span className="text-white">Solar Battery Installation</span>
              <span className="block text-gradient-solar">Sydney</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Government Rebates Up to <span className="text-[#FFE500] font-bold">$2,400</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="btn-solar inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl"
              >
                Get Free Sydney Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="btn-energy inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold"
              >
                <PhoneIcon className="w-5 h-5" />
                1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sydney-Specific Benefits */}
      <section className="py-20 bg-gradient-to-b from-[#0072CE] to-[#005BB5] relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Why Sydney Homes Need{' '}
              <span className="text-gradient-solar">Solar Batteries</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card-cosmic p-8 rounded-2xl border border-[#FFE500]/20 hover:border-[#FFE500]/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-[#FFE500]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <SunIcon className="w-8 h-8 text-[#FFE500]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Abundant Sunshine</h3>
              <p className="text-gray-400">
                Sydney averages 340+ sunny days per year - perfect for maximizing solar energy storage and savings.
              </p>
            </motion.div>

            <motion.div
              className="card-cosmic p-8 rounded-2xl border border-[#0072CE]/20 hover:border-[#0072CE]/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-[#0072CE]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CurrencyIcon className="w-8 h-8 text-[#0072CE]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">NSW Energy Costs</h3>
              <p className="text-gray-400">
                NSW electricity prices are 28-33c/kWh. A battery saves thousands by using stored solar power instead of expensive grid electricity.
              </p>
            </motion.div>

            <motion.div
              className="card-cosmic p-8 rounded-2xl border border-[#FFE500]/20 hover:border-[#FFE500]/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#FFE500]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BoltIcon className="w-8 h-8 text-[#FFE500]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Blackout Protection</h3>
              <p className="text-gray-400">
                Sydney&apos;s extreme weather and grid strain cause outages. Battery backup keeps your home powered 24/7.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sydney Pricing */}
      <section className="py-20 bg-[#0072CE] relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-30"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FFE500]/5 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Sydney Solar Battery{' '}
                <span className="text-gradient-energy">Pricing</span>
              </h2>
              <p className="text-xl text-gray-400">
                NSW residents can access up to <span className="text-[#FFE500] font-semibold">$2,400</span> in government rebates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-8 border border-white/10 hover:border-[#0072CE]/30 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
                  <div className="text-4xl font-bold text-[#0072CE] mb-2">From $5,200</div>
                  <p className="text-gray-400 mb-6">5kWh Battery System</p>
                  <ul className="text-left space-y-3 mb-8">
                    {['5kWh usable capacity', '10-year warranty', 'Backup power ready', 'Full installation included'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="btn-energy w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold">
                    Get Sydney Quote
                  </Link>
                </div>
              </div>

              <div className="relative glass rounded-2xl p-8 border-2 border-[#FFE500]/50 transform md:scale-105 shadow-2xl shadow-[#FFE500]/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#FFE500] to-[#FFD700] text-[#0072CE] px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <StarIcon className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 mt-2">Standard</h3>
                  <div className="text-4xl font-bold text-[#FFE500] mb-2">From $8,700</div>
                  <p className="text-gray-400 mb-6">10kWh Battery System</p>
                  <ul className="text-left space-y-3 mb-8">
                    {['10kWh usable capacity', '10-year warranty', 'Full backup power', 'Modular expansion ready', 'Smart monitoring app'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#FFE500] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="btn-solar w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold">
                    Get Sydney Quote
                  </Link>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border border-white/10 hover:border-[#0072CE]/30 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
                  <div className="text-4xl font-bold text-[#0072CE] mb-2">From $14,200</div>
                  <p className="text-gray-400 mb-6">13.5kWh Tesla Powerwall</p>
                  <ul className="text-left space-y-3 mb-8">
                    {['13.5kWh capacity', '10-year warranty', 'Tesla app monitoring', 'Premium installation'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#0072CE] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote" className="btn-energy w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold">
                    Get Sydney Quote
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8 text-sm">
              *Prices include installation and NSW rebates. Final price depends on site assessment and system selection.
            </p>
          </div>
        </div>
      </section>

      {/* Sydney Service Areas */}
      <section className="py-20 bg-gradient-to-b from-[#0072CE] to-[#005BB5] relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Sydney Suburbs{' '}
              <span className="text-gradient-solar">We Service</span>
            </h2>
            <p className="text-xl text-gray-400">
              Professional solar battery installation across Greater Sydney
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {suburbs.map((suburb, index) => (
              <motion.div
                key={suburb}
                className="glass rounded-lg p-3 text-center border border-white/5 hover:border-[#FFE500]/30 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <span className="text-gray-300 font-medium text-sm">{suburb}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Don&apos;t see your suburb? We service all Greater Sydney areas.{' '}
            <Link href="/contact" className="text-[#FFE500] font-semibold hover:underline">Contact us</Link> to confirm.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFE500]/20 via-[#005BB5] to-[#0072CE]/20"></div>
        <div className="absolute inset-0 star-field opacity-30"></div>
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-[#FFE500]/20 rounded-full blur-[60px] animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-[#0072CE]/20 rounded-full blur-[80px] animate-float-delayed"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Ready to Save on Sydney{' '}
            <span className="text-gradient-solar">Electricity Bills?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 3000+ Sydney households already saving with solar batteries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="btn-solar inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl shadow-[#FFE500]/20"
            >
              Get Free Sydney Quote
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <a
              href="tel:1300090984"
              className="btn-energy inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-lg font-bold"
            >
              <PhoneIcon className="w-5 h-5" />
              1300 09 09 84
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
