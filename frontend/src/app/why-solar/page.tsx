'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const CurrencyDollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const HomeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const GlobeAltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const LockClosedIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
)

const WrenchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  </svg>
)

const AdjustmentsHorizontalIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
)

const BriefcaseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
)

const ChartBarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const BatteryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const XMarkIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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

export default function WhySolar() {
  const heroStats = [
    {
      icon: CurrencyDollarIcon,
      title: 'Save $2,000+ Annually',
      description: 'Average household savings on electricity bills',
      color: 'bg-[#fee000]',
      textColor: 'text-[#083941]'
    },
    {
      icon: HomeIcon,
      title: 'Increase Property Value',
      description: 'Add $6,000+ per kW to your home value',
      color: 'bg-[#0073b9]',
      textColor: 'text-white'
    },
    {
      icon: GlobeAltIcon,
      title: 'Reduce Carbon Footprint',
      description: 'Equivalent to planting 2,500 trees per system',
      color: 'bg-[#fee000]',
      textColor: 'text-[#083941]'
    }
  ]

  const additionalBenefits = [
    {
      icon: LockClosedIcon,
      title: 'Energy Independence',
      description: 'Generate your own electricity and reduce dependence on the grid and volatile energy prices.'
    },
    {
      icon: WrenchIcon,
      title: 'Low Maintenance',
      description: 'Solar panels require minimal maintenance with no moving parts and 25+ year lifespans.'
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Proven Technology',
      description: 'Decades of proven performance with continuously improving efficiency and reliability.'
    },
    {
      icon: BriefcaseIcon,
      title: 'Government Incentives',
      description: 'Take advantage of rebates, tax credits, and feed-in tariffs to reduce installation costs.'
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring helps optimize performance and identify issues quickly.'
    },
    {
      icon: BatteryIcon,
      title: 'Battery Storage Options',
      description: 'Store excess energy for use during peak hours or power outages for complete energy security.'
    }
  ]

  const myths = [
    {
      myth: "Solar doesn't work in cloudy weather",
      fact: "Solar panels generate electricity from daylight, not just direct sunlight, and work efficiently even on cloudy days."
    },
    {
      myth: "Solar panels are too expensive",
      fact: "With government incentives and falling prices, solar provides excellent ROI and 20+ years of free electricity."
    },
    {
      myth: "Solar panels require constant maintenance",
      fact: "Solar panels have no moving parts and require only periodic cleaning and annual inspections."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0073b9]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/solarroof7.jpg"
            alt="Solar Energy Benefits"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0073b9]/80 via-[#0073b9]/60 to-[#0073b9]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <BoltIcon className="w-5 h-5 text-[#fee000]" />
                <span className="text-white font-semibold text-sm">Clean Energy Revolution</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Why <span className="text-[#fee000]">Solar?</span>
                <span className="block text-white">Why Now?</span>
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Join millions of Australians who have already made the switch to clean,
                renewable solar energy. Save money, increase property value, and help create
                a sustainable future.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link
                  href="/quote"
                  className="bg-[#fee000] text-[#083941] px-8 py-4 rounded-lg text-lg font-semibold text-center inline-flex items-center justify-center gap-2 hover:bg-[#e5ca00] transition-all"
                >
                  Calculate My Savings
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-[#0073b9] px-8 py-4 rounded-lg text-lg font-semibold text-center hover:bg-gray-100 transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Benefits Cards */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroStats.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#333333] mb-2">{benefit.title}</h3>
                      <p className="text-[#666666]">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                Dramatic <span className="text-[#0073b9]">Cost Savings</span>
              </h2>
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Solar energy can dramatically reduce or even eliminate your electricity bills.
                With rising energy costs, solar provides predictable, stable energy costs for decades.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Save 70-90% on electricity bills',
                  'Typical payback period of 4-7 years',
                  '25+ years of free electricity after payback',
                  'Protection against rising energy costs'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-[#0073b9] mr-3 flex-shrink-0" />
                    <span className="text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/solarroof4.jpg"
                  alt="Solar installation showing cost savings"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0073b9] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-[#fee000] text-[#083941] text-2xl font-bold px-4 py-2 rounded-lg mb-2 inline-block">
                    90% Savings
                  </div>
                  <h3 className="text-xl font-semibold">Dramatic Cost Reduction</h3>
                  <p className="text-white/80 text-sm">Real customer installation</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                Environmental <span className="text-[#0073b9]">Benefits</span>
              </h2>
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Solar energy is clean, renewable, and helps reduce greenhouse gas emissions.
                By choosing solar, you&apos;re making a positive impact on the environment.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Zero emissions during operation',
                  'Reduces dependence on fossil fuels',
                  'Average system prevents 100,000+ lbs CO2 over lifetime',
                  'Equivalent to planting 2,500 trees'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-[#0073b9] mr-3 flex-shrink-0" />
                    <span className="text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/solarroof6.jpg"
                  alt="Environmental impact of solar installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0073b9] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-[#fee000] text-[#083941] text-2xl font-bold px-4 py-2 rounded-lg mb-2 inline-block">
                    Zero Emissions
                  </div>
                  <h3 className="text-xl font-semibold">Environmental Protection</h3>
                  <p className="text-white/80 text-sm">Clean energy installation</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                Increase <span className="text-[#0073b9]">Property Value</span>
              </h2>
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Solar installations consistently increase property values. Studies show that
                homes with solar panels sell faster and for higher prices than comparable homes without solar.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Average increase of $6,000 per kW installed',
                  'Homes sell 20% faster than non-solar homes',
                  'Property tax exemptions in many areas',
                  'Appeal to environmentally conscious buyers'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-[#0073b9] mr-3 flex-shrink-0" />
                    <span className="text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/solarroof9.jpg"
                  alt="Solar installation increasing property value"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0073b9] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-[#fee000] text-[#083941] text-2xl font-bold px-4 py-2 rounded-lg mb-2 inline-block">
                    +$15,000 Value
                  </div>
                  <h3 className="text-xl font-semibold">Property Enhancement</h3>
                  <p className="text-white/80 text-sm">Premium home upgrade</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-[#efefef] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Additional <span className="text-[#0073b9]">Solar Benefits</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#0073b9]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#0073b9]/30">
                  <benefit.icon className="w-8 h-8 text-[#0073b9]" />
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">{benefit.title}</h3>
                <p className="text-[#666666]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Solar Energy <span className="text-red-500">Myths</span> vs <span className="text-[#0073b9]">Facts</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {myths.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <div className="flex items-start gap-3">
                    <XMarkIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-600 mb-2">Myth</h3>
                      <p className="text-[#666666]">{item.myth}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#0073b9] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#0073b9] mb-2">Fact</h3>
                      <p className="text-[#666666]">{item.fact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0073b9] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <SunIcon className="w-5 h-5 text-[#fee000]" />
              <span className="text-white font-semibold text-sm">Start Your Solar Journey</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make the Switch to <span className="text-[#fee000]">Solar?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who are saving money and helping the environment
              with clean solar energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-[#fee000] text-[#083941] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#e5ca00] transition-all"
              >
                Get Free Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#0073b9] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
              >
                <PhoneIcon className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
