import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Tesla Powerwall 3 Australia | Installation Cost $12,000 | Government Rebates $4,600",
  description: "Tesla Powerwall 3 installation Australia. 13.5kWh capacity, $12,000-$15,000 installed. Government rebates up to $4,600. Professional CEC certified installers nationwide.",
  keywords: "Tesla Powerwall 3 Australia, Tesla Powerwall installation cost, Tesla Powerwall rebate Australia, Powerwall 3 price Australia, Tesla battery installation, home battery Tesla",
}

export default function TeslaPowerwallAustralia() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tesla Powerwall 3 Australia",
    "description": "Tesla Powerwall 3 home battery system with professional installation across Australia",
    "brand": "Tesla",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AUD", 
      "price": "12000",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tesla Powerwall 3 Australia
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Australia's most advanced home battery system. 13.5kWh capacity, integrated inverter, 
              smartphone control. From $12,000 installed with government rebates up to $4,600.
            </p>
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg inline-block mb-8">
              <span className="font-bold text-lg">Government Rebate: Save $4,600</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Get Tesla Powerwall Quote
              </Link>
              <a 
                href="tel:1300090984" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Call Tesla Specialists
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}