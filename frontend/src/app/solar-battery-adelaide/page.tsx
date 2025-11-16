'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SolarBatteryAdelaide() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0">
          <Image
            src="/batteryImage1.jpg"
            alt="Solar Battery Installation Adelaide"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Solar Battery Installation Adelaide
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8">
              SA's #1 Choice for Solar Battery Systems | Government Rebates Up to $3,000
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-xl"
              >
                Get Free Adelaide Quote
              </Link>
              <a
                href="tel:1300090984"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                📞 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adelaide-Specific Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Adelaide Homes Need Solar Batteries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Solar Conditions</h3>
              <p className="text-gray-600">
                Adelaide enjoys excellent year-round sunshine with low rainfall - ideal conditions for maximizing solar battery efficiency.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SA Energy Costs</h3>
              <p className="text-gray-600">
                South Australia has the highest electricity prices in Australia (35-40c/kWh). Batteries provide massive savings.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grid Stability</h3>
              <p className="text-gray-600">
                Adelaide's grid experiences occasional strain during heatwaves. Battery backup ensures continuous power supply.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Adelaide Pricing */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Adelaide Solar Battery Pricing (After Rebates)
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              South Australian residents can access up to $3,000 in government rebates
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">From $5,100</div>
                  <p className="text-gray-600 mb-6">5kWh Battery System</p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">5kWh usable capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">10-year warranty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Backup power ready</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Full installation included</span>
                    </li>
                  </ul>
                  <Link href="/quote" className="block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Get Adelaide Quote
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-8 shadow-2xl transform scale-105">
                <div className="text-center">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Standard</h3>
                  <div className="text-4xl font-bold mb-2">From $8,900</div>
                  <p className="text-blue-100 mb-6">10kWh Battery System</p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">✓</span>
                      <span>10kWh usable capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">✓</span>
                      <span>10-year warranty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">✓</span>
                      <span>Full backup power</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">✓</span>
                      <span>Modular expansion ready</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">✓</span>
                      <span>Smart monitoring app</span>
                    </li>
                  </ul>
                  <Link href="/quote" className="block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                    Get Adelaide Quote
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">From $14,100</div>
                  <p className="text-gray-600 mb-6">13.5kWh Tesla Powerwall</p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">13.5kWh capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">10-year warranty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Tesla app monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Premium installation</span>
                    </li>
                  </ul>
                  <Link href="/quote" className="block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Get Adelaide Quote
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-8">
              *Prices include installation and SA rebates. Final price depends on site assessment and system selection.
            </p>
          </div>
        </div>
      </section>

      {/* Adelaide Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Adelaide Suburbs We Service
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Professional solar battery installation across Greater Adelaide
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Adelaide CBD', 'North Adelaide', 'Norwood', 'Kent Town', 'Walkerville', 'Prospect',
              'Glenelg', 'Brighton', 'Seacliff', 'Hallet Cove', 'Marino', 'Christies Beach',
              'Mawson Lakes', 'Salisbury', 'Parafield', 'Elizabeth', 'Munno Para', 'Smithfield',
              'Marion', 'Mitchell Park', 'Clovelly Park', 'Edwardstown', 'Plympton', 'Camden Park',
              'Modbury', 'Tea Tree Gully', 'Hope Valley', 'Banksia Park', 'Greenwith', 'Golden Grove',
              'Morphett Vale', 'Aberfoyle Park', 'Flagstaff Hill', 'McLaren Vale', 'Willunga', 'Aldinga'
            ].map((suburb, index) => (
              <motion.div
                key={suburb}
                className="bg-green-50 rounded-lg p-3 text-center hover:bg-green-100 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <span className="text-gray-800 font-medium text-sm">{suburb}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            Don't see your suburb? We service all Greater Adelaide areas. <Link href="/contact" className="text-green-600 font-semibold hover:underline">Contact us</Link> to confirm.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save on Adelaide Electricity Bills?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join 1500+ Adelaide households already saving with solar batteries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors shadow-xl"
            >
              Get Free Adelaide Quote
            </Link>
            <a
              href="tel:1300090984"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              📞 1300 09 09 84
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
