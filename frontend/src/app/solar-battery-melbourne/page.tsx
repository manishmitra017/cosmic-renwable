import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Solar Battery Installation Melbourne | Tesla Powerwall Melbourne | $8,000 Rebates",
  description: "Professional solar battery installation Melbourne. Tesla Powerwall 3, LG Chem, BYD batteries. Victorian government rebates up to $8,000. CEC approved installers Melbourne metro.",
  keywords: "solar battery Melbourne, Tesla Powerwall Melbourne, solar battery installation Melbourne, Melbourne solar battery rebate, home battery systems Melbourne, solar energy storage Melbourne",
}

export default function SolarBatteryMelbourne() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solar Battery Installation Melbourne",
    "description": "Professional solar battery installation services in Melbourne with government rebates up to $8,000",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cosmic Renewable Energy",
      "areaServed": "Melbourne, Victoria, Australia"
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne",
      "containedIn": "Victoria, Australia"
    }
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Solar Battery Installation Melbourne
            </h1>
            <p className="text-xl text-blue-800 mb-8">
              Melbourne's trusted solar battery specialists. Tesla Powerwall, LG Chem, and BYD battery systems 
              with Victorian government rebates up to $8,000. Professional installation across Melbourne metro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Melbourne Solar Battery Quote
              </Link>
              <a 
                href="tel:1300090984" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call Melbourne Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Melbourne Solar Battery Installation Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'Melbourne CBD', 'South Yarra', 'Richmond', 'Prahran',
              'St Kilda', 'Brighton', 'Caulfield', 'Glen Waverley',
              'Box Hill', 'Camberwell', 'Hawthorn', 'Kew',
              'Doncaster', 'Ringwood', 'Frankston', 'Dandenong'
            ].map((suburb) => (
              <div key={suburb} className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">{suburb}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}