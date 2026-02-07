'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const RocketIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const TrophyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
)

const HeartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
)

const LightBulbIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const BatteryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const CurrencyDollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const UserGroupIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
)

const ChartBarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const BuildingOfficeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)

export default function About() {
  const values = [
    {
      title: 'Quality First',
      icon: TrophyIcon,
      description: 'We use only premium components and maintain the highest installation standards, backed by comprehensive warranties.'
    },
    {
      title: 'Customer Focus',
      icon: HeartIcon,
      description: 'Every project is tailored to your specific needs, with ongoing support throughout your solar journey.'
    },
    {
      title: 'Innovation',
      icon: LightBulbIcon,
      description: 'We stay at the forefront of solar technology to deliver the most efficient and reliable systems.'
    }
  ]

  const features = [
    {
      title: 'Expert Installation',
      icon: BoltIcon,
      description: 'CEC-accredited professionals with years of experience in premium solar installations.',
      features: ['Clean Energy Council Certified', 'Fully Insured & Licensed', 'Safety-First Approach']
    },
    {
      title: 'Premium Products',
      icon: BatteryIcon,
      description: 'We partner with industry-leading manufacturers to provide the highest quality components.',
      features: ['Tier 1 Solar Panels', 'Premium Battery Systems', 'German Engineering']
    },
    {
      title: 'Comprehensive Warranty',
      icon: ShieldCheckIcon,
      description: '10-year workmanship warranty with ongoing support and maintenance services.',
      features: ['10-Year Workmanship', '25-Year Panel Warranty', '10-Year Battery Warranty']
    },
    {
      title: 'Transparent Pricing',
      icon: CurrencyDollarIcon,
      description: 'No hidden fees, no surprises. Clear, upfront pricing with detailed quotations.',
      features: ['Fixed Price Quotes', 'No Hidden Costs', 'Government Rebate Assistance']
    },
    {
      title: 'Local Support',
      icon: UserGroupIcon,
      description: 'Australian-owned and operated with local support teams across the country.',
      features: ['Australian Owned', 'Local Support Teams', 'Community Focused']
    },
    {
      title: 'Proven Results',
      icon: ChartBarIcon,
      description: 'Track record of delivering exceptional results with thousands of satisfied customers.',
      features: ['5000+ Installations', '5-Star Customer Rating', 'Proven ROI Results']
    }
  ]

  const projects = [
    { image: '/solarroof.jpg', title: 'Residential Install', size: '6.6kW' },
    { image: '/solarroof2.jpg', title: 'Premium System', size: '10kW' },
    { image: '/solarroof3.jpg', title: 'Modern Home', size: '8.8kW' },
    { image: '/solarroof4.jpg', title: 'Commercial', size: '50kW' },
    { image: '/solarroof5.jpg', title: 'Tile Roof', size: '7.2kW' },
    { image: '/solarroof6.jpg', title: 'Multi-Level', size: '12kW' },
    { image: '/solarroof7.jpg', title: 'Warehouse', size: '100kW' },
    { image: '/solarroof8.jpg', title: 'Premium Home', size: '9.9kW' },
    { image: '/solarroof9.jpg', title: 'Family Home', size: '8.5kW' },
    { image: '/solarroof10.jpg', title: 'Suburban Install', size: '7.8kW' },
    { image: '/solarroof11.jpg', title: 'Rooftop System', size: '11kW' },
    { image: '/batteryImage1.jpg', title: 'Battery Storage', size: '13.5kWh' }
  ]

  const certifications = [
    { name: 'Clean Energy Council', abbr: 'CEC', description: 'Accredited Installer' },
    { name: 'NETCC', abbr: 'NETCC', description: 'Approved Retailer' },
    { name: 'ISO Certified', abbr: 'ISO', description: 'Quality Management' },
    { name: 'Electrical Work Board', abbr: 'EWB', description: 'Licensed Electrical' }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0073b9]">
        <div className="absolute inset-0">
          <Image
            src="/solarroof6.jpg"
            alt="Cosmic Renewable Energy Team"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0073b9]/80 via-[#0073b9]/60 to-[#0073b9]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <BuildingOfficeIcon className="w-5 h-5 text-[#fee000]" />
              <span className="text-white font-semibold text-sm">About Us</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
              About <span className="text-[#fee000]">Cosmic</span>
              <span className="block text-white">
                Renewable Energy
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              Australia&apos;s trusted solar and battery specialists, dedicated to powering homes
              and businesses with clean, renewable energy solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4 sm:mb-6">
                Leading <span className="text-[#0073b9]">Solar</span> Innovation
              </h2>
              <p className="text-base sm:text-lg text-[#666666] mb-4 sm:mb-6 leading-relaxed">
                With over 10 years of experience in the renewable energy sector, Cosmic Renewable Energy
                has established itself as one of Australia&apos;s most trusted solar and battery installation companies.
              </p>
              <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
                We&apos;ve helped over 5,000 Australian families and businesses achieve energy independence
                through our premium solar panel and battery storage solutions, backed by industry-leading warranties
                and exceptional customer service.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center bg-[#efefef] rounded-xl p-4 sm:p-6 border border-gray-200">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0073b9] mb-1 sm:mb-2">10+</div>
                  <div className="text-[#666666] text-sm sm:text-base">Years Experience</div>
                </div>
                <div className="text-center bg-[#efefef] rounded-xl p-4 sm:p-6 border border-gray-200">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0073b9] mb-1 sm:mb-2">5000+</div>
                  <div className="text-[#666666] text-sm sm:text-base">Happy Customers</div>
                </div>
              </div>

              <Link
                href="/quote"
                className="w-full sm:w-auto bg-[#fee000] text-[#083941] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold text-center block sm:inline-block hover:bg-[#e5ca00] transition-all"
              >
                Get Your Quote Today
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <div className="h-64 rounded-lg overflow-hidden flex items-center justify-center bg-[#efefef]">
                  <Image
                    src="/company-logo.png"
                    alt="Cosmic Renewable Energy Company Logo"
                    width={200}
                    height={200}
                    className="object-contain max-h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-[#efefef] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Our Mission & <span className="text-[#0073b9]">Values</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              We&apos;re committed to making clean energy accessible, affordable, and reliable for all Australians.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-[#0073b9]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#0073b9]/30">
                  <value.icon className="w-8 h-8 text-[#0073b9]" />
                </div>
                <h3 className="text-2xl font-bold text-[#333333] mb-4">{value.title}</h3>
                <p className="text-[#666666] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cosmic Renewable Energy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Why Choose <span className="text-[#0073b9]">Cosmic</span> Renewable Energy?
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              We combine industry expertise with exceptional customer service to deliver
              solar solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:border-[#0073b9]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#fee000]/20 rounded-full flex items-center justify-center mb-6 border border-[#fee000]/50">
                  <feature.icon className="w-8 h-8 text-[#0073b9]" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-3">{feature.title}</h3>
                <p className="text-[#666666] mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-[#666666]">
                      <CheckIcon className="w-4 h-4 text-[#0073b9] mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-20 bg-[#efefef] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Our Quality Work <span className="text-[#0073b9]">Speaks for Itself</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Every installation is a testament to our commitment to quality, precision, and customer satisfaction.
              Browse our portfolio of successful projects across Australia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0073b9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xs sm:text-sm font-semibold line-clamp-1">{project.title}</h3>
                    <p className="text-xs text-[#fee000]">{project.size} System</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0073b9] mb-2">5000+</div>
                  <div className="text-[#666666]">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0073b9] mb-2">100%</div>
                  <div className="text-[#666666]">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0073b9] mb-2">10+</div>
                  <div className="text-[#666666]">Years Experience</div>
                </div>
              </div>
              <p className="text-[#666666] text-center">
                Every project is completed to the highest standards with ongoing support and monitoring.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-16 bg-[#0073b9] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Certifications & <span className="text-[#fee000]">Accreditations</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We maintain the highest industry standards through continuous training and certification.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-lg p-6 text-center border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="h-16 bg-[#fee000] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#083941] font-bold text-xl">{cert.abbr}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{cert.name}</h3>
                <p className="text-white/70 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0073b9]/10 px-4 py-2 rounded-full mb-6 border border-[#0073b9]/20">
              <RocketIcon className="w-5 h-5 text-[#0073b9]" />
              <span className="text-[#0073b9] font-semibold text-sm">Get Started Today</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Ready to Work with Australia&apos;s <span className="text-[#0073b9]">Solar Experts?</span>
            </h2>
            <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">
              Experience the difference of working with a trusted solar energy partner.
              Get your personalized quote today and start saving.
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
                className="bg-[#0073b9] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#005a91] transition-all"
              >
                <PhoneIcon className="w-5 h-5" />
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
