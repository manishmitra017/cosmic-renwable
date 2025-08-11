import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: "Solar Battery Installation Australia | Home Battery Systems | $8,000 Rebates",
  description: "Premium solar battery installation across Australia. Tesla Powerwall, LG Chem, BYD batteries. Government rebates up to $8,000. Free quotes Melbourne, Sydney, Brisbane. CEC approved installers.",
  keywords: "solar battery Australia, solar battery installation, home battery systems, Tesla Powerwall Australia, LG Chem battery, solar energy storage, government rebates solar battery, solar battery cost, battery backup system",
  openGraph: {
    title: "Solar Battery Installation Australia | $8,000 Government Rebates",
    description: "Professional solar battery installation across Australia. Premium brands, government rebates, 5-year warranty. Free consultation available.",
  },
}

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

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="absolute inset-0">
          <Image
            src="/batteryImage1.jpg"
            alt="Professional solar battery installation Australia - home energy storage system"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Solar Battery Installation
              <span className="block text-blue-600">
                Australia Wide Service
              </span>
            </h1>
            
            <p className="text-xl text-blue-800 mb-8 leading-relaxed">
              Premium solar battery systems with government rebates up to $8,000. Professional installation 
              across Melbourne, Sydney, Brisbane, Perth, Adelaide and all Australian cities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-xl text-center"
              >
                Get Free Solar Battery Quote
              </Link>
              <a 
                href="tel:1300090984" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                📞 Call Solar Battery Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Battery Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Solar Battery Systems in Australia?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Independence</h3>
              <p className="text-gray-600">Store solar energy during the day and use it at night. Reduce reliance on the grid with home battery storage systems.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Government Rebates</h3>
              <p className="text-gray-600">Access up to $8,000 in Australian government rebates for solar battery installations. We handle all paperwork.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Backup Power</h3>
              <p className="text-gray-600">Keep your home powered during blackouts with reliable solar battery backup systems for Australian homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Battery Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Premium Solar Battery Brands We Install
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tesla Powerwall Australia</h3>
              <p className="text-gray-600 mb-4">Industry-leading lithium-ion solar battery with 13.5kWh capacity. Perfect for Australian homes with solar panels.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ 10-year warranty</li>
                <li>✓ Smartphone app control</li>
                <li>✓ Backup power capability</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">LG Chem Solar Battery</h3>
              <p className="text-gray-600 mb-4">Reliable Korean-made solar battery systems with excellent performance in Australian climate conditions.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ 10-year product warranty</li>
                <li>✓ High energy density</li>
                <li>✓ Proven reliability</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">BYD Battery Box</h3>
              <p className="text-gray-600 mb-4">Modular solar battery system that can be expanded as your energy storage needs grow.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Modular design</li>
                <li>✓ Long cycle life</li>
                <li>✓ Australian certified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Solar Battery Installation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Australian families saving money with solar battery systems. 
            Government rebates available now - don't miss out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Free Solar Battery Quote
            </Link>
            <a 
              href="tel:1300090984" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Solar Battery Specialists
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}