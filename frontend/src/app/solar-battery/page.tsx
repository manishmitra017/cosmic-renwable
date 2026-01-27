import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Solar Battery Installation Australia | Home Battery Systems | $8,000 Rebates",
  description: "Premium solar battery installation across Australia. Tesla Powerwall, LG Chem, BYD batteries. Government rebates up to $8,000. Free quotes Melbourne, Sydney, Brisbane. CEC approved installers.",
  keywords: "solar battery Australia, solar battery installation, home battery systems, Tesla Powerwall Australia, LG Chem battery, solar energy storage, government rebates solar battery, solar battery cost, battery backup system",
  openGraph: {
    title: "Solar Battery Installation Australia | $8,000 Government Rebates",
    description: "Professional solar battery installation across Australia. Premium brands, government rebates, 5-year warranty. Free consultation available.",
  },
}

// SVG Icon Components
const BatteryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h14a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm18 4v2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11v2m3-2v2m3-2v2" />
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

const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

export default function SolarBattery() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Solar Battery Systems Australia",
    "description": "Premium solar battery installation services across Australia with government rebates up to $8,000",
    "brand": {
      "@type": "Brand",
      "name": "Cosmic Renewable Energy"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AUD",
      "price": "2480",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Cosmic Renewable Energy"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "927"
    }
  }

  const benefits = [
    {
      icon: BatteryIcon,
      title: 'Energy Independence',
      description: 'Store solar energy during the day and use it at night. Reduce reliance on the grid with home battery storage systems.',
      color: 'text-[#00d4ff]',
      bgColor: 'bg-[#00d4ff]/10',
      borderColor: 'border-[#00d4ff]/20'
    },
    {
      icon: CurrencyIcon,
      title: 'Government Rebates',
      description: 'Access up to $8,000 in Australian government rebates for solar battery installations. We handle all paperwork.',
      color: 'text-[#f5a623]',
      bgColor: 'bg-[#f5a623]/10',
      borderColor: 'border-[#f5a623]/20'
    },
    {
      icon: BoltIcon,
      title: 'Backup Power',
      description: 'Keep your home powered during blackouts with reliable solar battery backup systems for Australian homes.',
      color: 'text-[#00d4ff]',
      bgColor: 'bg-[#00d4ff]/10',
      borderColor: 'border-[#00d4ff]/20'
    }
  ]

  const brands = [
    {
      name: 'Tesla Powerwall Australia',
      description: 'Industry-leading lithium-ion solar battery with 13.5kWh capacity. Perfect for Australian homes with solar panels.',
      features: ['10-year warranty', 'Smartphone app control', 'Backup power capability']
    },
    {
      name: 'LG Chem Solar Battery',
      description: 'Reliable Korean-made solar battery systems with excellent performance in Australian climate conditions.',
      features: ['10-year product warranty', 'High energy density', 'Proven reliability']
    },
    {
      name: 'BYD Battery Box',
      description: 'Modular solar battery system that can be expanded as your energy storage needs grow.',
      features: ['Modular design', 'Long cycle life', 'Australian certified']
    }
  ]

  return (
    <div className="cosmic-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0f]">
        {/* Background Effects */}
        <div className="absolute inset-0 star-field opacity-40"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-[100px] animate-float-delayed"></div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/batteryImage1.jpg"
            alt="Professional solar battery installation Australia - home energy storage system"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#f5a623]/30 mb-6">
              <SparklesIcon className="w-4 h-4 text-[#f5a623]" />
              <span className="text-[#f5a623] text-sm font-semibold">$8,000 REBATES AVAILABLE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight font-display">
              <span className="text-white">Solar Battery Installation</span>
              <span className="block text-gradient-solar">
                Australia Wide Service
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Premium solar battery systems with government rebates up to $8,000. Professional installation
              across Melbourne, Sydney, Brisbane, Perth, Adelaide and all Australian cities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="btn-solar inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl"
              >
                Get Free Solar Battery Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="btn-energy inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Solar Battery Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Battery Benefits */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 star-field opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-[80px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Why Choose Solar Battery Systems in{' '}
              <span className="text-gradient-solar">Australia?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the benefits of home battery storage and why thousands of Australians are making the switch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`card-cosmic p-8 rounded-2xl border ${benefit.borderColor} hover:border-opacity-50 transition-all duration-300 group`}
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Battery Brands */}
      <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 star-field opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Premium Solar Battery Brands{' '}
              <span className="text-gradient-energy">We Install</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We partner with the world&apos;s leading battery manufacturers to deliver reliable, high-performance energy storage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-[#f5a623]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#f5a623]/10 rounded-lg flex items-center justify-center">
                    <ShieldIcon className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                </div>
                <p className="text-gray-400 mb-6">{brand.description}</p>
                <ul className="space-y-3">
                  {brand.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckIcon className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5a623]/20 via-[#1a1a2e] to-[#00d4ff]/20"></div>
        <div className="absolute inset-0 star-field opacity-30"></div>

        {/* Animated Orbs */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-[#f5a623]/20 rounded-full blur-[60px] animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-[#00d4ff]/20 rounded-full blur-[80px] animate-float-delayed"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Ready for Solar Battery{' '}
            <span className="text-gradient-solar">Installation?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of Australian families saving money with solar battery systems.
            Government rebates available now - don&apos;t miss out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="btn-solar inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl shadow-[#f5a623]/20 hover:shadow-[#f5a623]/40 transition-all"
            >
              Get Free Solar Battery Quote
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <a
              href="tel:1300090984"
              className="btn-energy inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-lg font-bold"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Solar Battery Specialists
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
