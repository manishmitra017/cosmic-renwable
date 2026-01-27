'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const BatteryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const FireIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  </svg>
)

const SnowflakeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5.636 5.636l12.728 12.728M3 12h18M5.636 18.364L18.364 5.636M8 4l4 4 4-4M8 20l4-4 4 4M4 8l4 4-4 4M20 8l-4 4 4 4" />
  </svg>
)

const WrenchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

const RocketIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const DeviceIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const TrophyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
)

const ShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
)

const CurrencyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

export default function Services() {
  const serviceIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'Solar Batteries': BatteryIcon,
    'Solar Panels': SunIcon,
    'Hot Water Heat Pump': FireIcon,
    'HVAC Systems': SnowflakeIcon,
    'Servicing & Maintenance': WrenchIcon
  }

  const mainServices = [
    {
      id: 1,
      title: "Solar Batteries",
      description: "Store your solar energy and use it when you need it most. Our battery systems provide energy independence and backup power during outages.",
      features: [
        "10kWh to 20kWh capacity options",
        "Government rebate eligible systems",
        "10-year manufacturer warranty",
        "Smart energy management",
        "Seamless backup power",
        "Mobile app monitoring"
      ],
      image: "/batteryImage3.jpg",
      price: "Starting from $8,500",
      popular: true
    },
    {
      id: 2,
      title: "Solar Panels",
      description: "Premium solar panels that convert sunlight into clean electricity for your home. Tier 1 panels with 25-year performance warranty.",
      features: [
        "Tier 1 solar panels only",
        "25-year performance warranty",
        "High efficiency monocrystalline",
        "Weather resistant design",
        "Maximum energy production",
        "Professional installation"
      ],
      image: "/solarroof8.jpg",
      price: "Starting from $2,480"
    },
    {
      id: 3,
      title: "Hot Water Heat Pump",
      description: "Energy-efficient heating and cooling solutions that can reduce your energy costs by up to 50% compared to traditional systems.",
      features: [
        "Up to 50% energy savings",
        "Heating and cooling in one",
        "Government rebates available",
        "Quiet operation technology",
        "Smart thermostat included",
        "Professional installation"
      ],
      image: "/inverterimage2.jpg",
      price: "Starting from $4,200"
    },
    {
      id: 4,
      title: "HVAC Systems",
      description: "Complete climate control solutions designed for Australian conditions. Energy-efficient systems that keep you comfortable year-round.",
      features: [
        "Energy efficient operation",
        "Zoned climate control",
        "Air quality filtration",
        "Smart home integration",
        "Professional installation",
        "Ongoing maintenance support"
      ],
      image: "/solarroof10.jpg",
      price: "Starting from $3,500"
    },
    {
      id: 5,
      title: "Servicing & Maintenance",
      description: "Keep your solar and energy systems operating at peak performance with our comprehensive servicing and maintenance programs.",
      features: [
        "Annual system inspections",
        "Performance monitoring",
        "Panel cleaning services",
        "Component testing",
        "Warranty claim assistance",
        "Emergency repair services"
      ],
      image: "/solarroof11.jpg",
      price: "Starting from $299/year"
    }
  ]

  return (
    <div className="cosmic-bg">
      {/* Contact Banner */}
      <section className="py-3 sm:py-4 bg-gradient-to-r from-[#0072CE] via-[#005BB5] to-[#0072CE] relative overflow-hidden border-y border-[#FFE500]/20">
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFE500]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0072CE]/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <div className="text-white font-bold text-base md:text-xl flex items-center gap-2">
                <RocketIcon className="w-5 h-5 text-[#FFE500]" />
                <span className="text-gradient-solar">Australia&apos;s #1 Solar & Battery Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:1300090984"
                  className="bg-gradient-to-r from-[#FFE500] to-[#FFD700] text-[#0072CE] px-4 py-2 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(245,166,35,0.5)] transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                >
                  <PhoneIcon className="w-4 h-4" />
                  1300 09 09 84
                </a>
                <a
                  href="tel:+61422786100"
                  className="bg-gradient-to-r from-[#0072CE] to-[#0099cc] text-[#0072CE] px-4 py-2 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                >
                  <DeviceIcon className="w-4 h-4" />
                  +61 422 786 100
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0072CE]">
        <div className="absolute inset-0">
          <Image
            src="/solarroof2.jpg"
            alt="Solar and Energy Services"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0072CE]/80 via-[#0072CE]/50 to-[#0072CE]"></div>
          <div className="absolute inset-0 star-field opacity-40"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FFE500]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 left-10 w-48 h-48 bg-[#0072CE]/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#FFE500]/10 border border-[#FFE500]/30 px-4 py-2 rounded-full mb-6">
              <BoltIcon className="w-4 h-4 text-[#FFE500]" />
              <span className="text-[#FFE500] font-medium text-sm">Cosmic Renewable Energy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
              Complete Energy
              <span className="block text-gradient-solar">
                Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b0b0b0] mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              From solar batteries to heat pumps, we provide comprehensive energy solutions
              to power your home efficiently and sustainably.
            </p>
            <Link
              href="/quote"
              className="btn-solar px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-block"
            >
              Get Your Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Government Battery Rebate Highlight */}
      <section className="py-12 bg-gradient-to-r from-[#0072CE] via-[#005BB5] to-[#0072CE] relative overflow-hidden border-y border-[#FFE500]/20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Government Battery <span className="text-gradient-solar">Rebates Available</span>
            </h2>
            <p className="text-[#b0b0b0] max-w-2xl mx-auto">
              Save up to 30% on eligible battery systems through government rebate programs.
              We handle all paperwork and ensure you get maximum savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-[#0072CE] relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our <span className="text-gradient-solar">Services</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Comprehensive energy solutions designed to reduce your bills and environmental impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = serviceIcons[service.title] || BoltIcon
              return (
                <motion.div
                  key={service.id}
                  className={`relative group card-cosmic overflow-hidden ${service.popular ? 'ring-2 ring-[#FFE500]' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {service.popular && (
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-[#FFE500] to-[#FFD700] text-[#0072CE] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold z-10">
                      Most Popular
                    </div>
                  )}

                  <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0072CE] via-[#0072CE]/60 to-transparent flex items-center justify-center">
                      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-[#FFE500]" />
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{service.title}</h3>
                    </div>

                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient-solar mb-3 sm:mb-4">{service.price}</div>

                    <p className="text-[#b0b0b0] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckIcon className="w-4 h-4 text-[#FFE500] mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#e0e0e0] text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <Link
                        href="/quote"
                        className="w-full btn-solar px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-center block"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/contact"
                        className="w-full btn-energy px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Cosmic Renewable Energy */}
      <section className="py-20 bg-gradient-to-b from-[#0072CE] to-[#005BB5] relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose <span className="text-gradient-solar">Cosmic Renewable Energy?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '5000+ Installations',
                description: 'Trusted by thousands of satisfied customers across Australia',
                icon: TrophyIcon
              },
              {
                title: 'Safety First',
                description: 'Fully licensed, insured, and safety-certified installations',
                icon: ShieldIcon
              },
              {
                title: '5-Star Reviews',
                description: 'Consistently rated as the top energy installer in the region',
                icon: StarIcon
              },
              {
                title: 'Best Prices',
                description: 'Competitive pricing with transparent, no-hidden-fees quotes',
                icon: CurrencyIcon
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 glass rounded-xl border border-[#FFE500]/10 hover:border-[#FFE500]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFE500] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(245,166,35,0.3)]">
                  <feature.icon className="w-8 h-8 text-[#0072CE]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#b0b0b0] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-[#0072CE] relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our <span className="text-gradient-solar">Installation Process</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              We follow a systematic approach to ensure your energy system installation is completed
              efficiently and to the highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Site assessment and energy audit to determine your needs and potential savings"
              },
              {
                step: "2",
                title: "Custom Design",
                description: "Tailored system design optimized for your property, usage patterns, and budget"
              },
              {
                step: "3",
                title: "Professional Installation",
                description: "Expert installation by certified technicians with comprehensive quality assurance"
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Monitoring, maintenance, and support to maximize your system's performance and savings"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFE500] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(245,166,35,0.3)]">
                  <span className="text-2xl font-bold text-[#0072CE]">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-[#b0b0b0] leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0072CE] via-[#005BB5] to-[#0072CE] relative overflow-hidden border-t border-[#FFE500]/20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFE500]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0072CE]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your <span className="text-gradient-solar">Energy Future?</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how much you can save
              with our comprehensive energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="btn-solar px-8 py-4 rounded-lg text-lg font-semibold inline-block"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300090984"
                className="btn-energy px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
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
