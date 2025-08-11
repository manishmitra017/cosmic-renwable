import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Solar Battery Installation Sydney | Tesla Powerwall Sydney | NSW Government Rebates",
  description: "Professional solar battery installation Sydney. Tesla Powerwall 3, LG Chem batteries. NSW government rebates available. CEC approved installers Sydney metro and Greater Sydney.",
  keywords: "solar battery Sydney, Tesla Powerwall Sydney, solar battery installation Sydney, Sydney solar battery rebate, home battery systems Sydney, NSW battery rebate",
}

export default function SolarBatterySydney() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solar Battery Installation Sydney",
    "provider": {
      "@type": "LocalBusiness", 
      "name": "Cosmic Renewable Energy",
      "areaServed": "Sydney, NSW, Australia"
    }
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Solar Battery Installation Sydney
            </h1>
            <p className="text-xl text-blue-800 mb-8">
              Sydney's premier solar battery installation specialists. Tesla Powerwall, LG Chem battery systems 
              with NSW government rebates. Professional installation across Greater Sydney.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Sydney Solar Battery Quote
              </Link>
              <a 
                href="tel:1300090984" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call Sydney Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}