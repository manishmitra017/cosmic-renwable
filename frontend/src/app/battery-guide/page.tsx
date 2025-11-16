'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BatteryGuide() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Battery 101: Complete Buyer's Guide
            </h1>
            <p className="text-xl text-blue-100">
              Everything you need to know about solar batteries - explained simply
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jargon Buster Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              🔤 Battery Jargon Buster
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              No more confusion! Here's what all those technical terms actually mean:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  term: "kWh (Kilowatt-hour)",
                  definition: "The amount of energy your battery can store. Think of it like the size of your fuel tank. A 10kWh battery can power a 1kW appliance for 10 hours."
                },
                {
                  term: "DoD (Depth of Discharge)",
                  definition: "How much of the battery's total capacity you can safely use. A 90% DoD on a 10kWh battery means you can use 9kWh before recharging."
                },
                {
                  term: "Round-Trip Efficiency",
                  definition: "How much energy you get back compared to what you put in. A 90% efficiency means you get 9kWh back for every 10kWh stored."
                },
                {
                  term: "Cycle Life",
                  definition: "How many times you can charge and discharge before capacity degrades. 6,000 cycles ≈ 16+ years of daily use."
                },
                {
                  term: "AC vs DC Coupling",
                  definition: "AC-coupled batteries work with existing solar systems. DC-coupled batteries are more efficient but usually need new solar installation."
                },
                {
                  term: "UPS (Uninterruptible Power Supply)",
                  definition: "Instant backup power during blackouts. No delay between power outage and battery takeover - like having a generator that starts instantly."
                },
                {
                  term: "LiFePO4 (Lithium Iron Phosphate)",
                  definition: "Safer battery chemistry than standard lithium-ion. No cobalt, more stable, longer-lasting, and won't overheat."
                },
                {
                  term: "EMS (Energy Management System)",
                  definition: "Smart software that decides when to store energy, use it, or send it to the grid based on your usage patterns and electricity rates."
                },
                {
                  term: "VPP (Virtual Power Plant)",
                  definition: "A network of batteries that work together to stabilize the grid. You might get paid for letting your battery help during peak demand."
                },
                {
                  term: "Peak/Off-Peak Rates",
                  definition: "Electricity costs more during peak times (usually 2-8pm). Batteries let you use stored cheap off-peak power during expensive peak times."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{item.term}</h3>
                  <p className="text-gray-700">{item.definition}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Batteries Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              ⚡ How Solar Batteries Actually Work
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">☀️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Solar Panels Generate Power</h3>
                    <p className="text-gray-700">
                      During the day, your solar panels convert sunlight into DC electricity. This power first goes to your home to run appliances.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔋</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Excess Power Gets Stored</h3>
                    <p className="text-gray-700">
                      Any extra solar power your home doesn't use immediately gets stored in your battery for later. This is when electricity is free!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Battery Powers Your Home at Night</h3>
                    <p className="text-gray-700">
                      When the sun goes down or on cloudy days, your battery automatically powers your home instead of drawing expensive grid electricity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Blackout Protection</h3>
                    <p className="text-gray-700">
                      If the grid goes down, your battery instantly takes over (with UPS feature) - keeping lights, fridge, and essential appliances running.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              ❓ Most Common Questions Answered
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "How much does a solar battery cost in Australia?",
                  answer: "With government rebates, battery systems start from around $4,000-$6,000 for a 5kWh system. A 10kWh system typically costs $8,000-$12,000 after rebates. The Cheaper Home Batteries program can reduce costs by up to $3,500."
                },
                {
                  question: "Will a battery save me money?",
                  answer: "Yes! Most households save 70-90% on electricity bills. If you're paying $500+/quarter for electricity, a battery typically pays for itself in 4-7 years, then provides 15+ years of free power."
                },
                {
                  question: "What size battery do I need?",
                  answer: "For an average household: 5kWh covers essentials (fridge, lights, TV), 10kWh powers most of your home, 13.5kWh+ provides full energy independence. Check your evening electricity usage (typically 5-8pm) to determine the right size."
                },
                {
                  question: "Can I add a battery to my existing solar system?",
                  answer: "Absolutely! AC-coupled batteries work with any existing solar system. We'll assess your current setup and recommend the best compatible battery."
                },
                {
                  question: "How long do solar batteries last?",
                  answer: "Quality batteries like Tesla Powerwall, Alpha ESS, and others last 10-15 years with warranties covering 10 years or 6,000-10,000 cycles. That's roughly 16+ years of daily use."
                },
                {
                  question: "Are solar batteries safe?",
                  answer: "Modern lithium batteries (especially LiFePO4 chemistry) are extremely safe. They have multiple safety features: thermal protection, overcharge prevention, and fire-resistant casings. We only install batteries meeting Australian safety standards."
                },
                {
                  question: "What happens during a blackout?",
                  answer: "With backup-enabled batteries, your home switches to battery power instantly (0.02 seconds with UPS). You won't even notice the power went out! Essential circuits stay powered for hours or days depending on battery size and usage."
                },
                {
                  question: "Can I go completely off-grid?",
                  answer: "Technically yes, but most people stay grid-connected for backup. A typical off-grid system needs 15-30kWh+ of batteries and 10kW+ solar. For most households, a grid-connected battery system is more cost-effective."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Solar Battery?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free personalized quote with government rebate calculations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block shadow-xl"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:1300090984"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              📞 Call 1300 09 09 84
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
