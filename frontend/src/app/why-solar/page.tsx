'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WhySolar() {
  return (
    <div>
      {/* Contact Banner */}
      <section className="py-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <div className="text-white font-bold text-lg sm:text-xl">
                🚀 Australia's #1 Solar & Battery Experts
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a 
                  href="tel:1300090984"
                  className="bg-white text-orange-600 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-orange-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  📞 1300 09 09 84
                </a>
                <a 
                  href="tel:+61422786100"
                  className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-red-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  📱 +61 422 786 100
                </a>
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">
                Call Now for Instant Quote!
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section with Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="relative">
              <Image
                src="/solarroof7.jpg"
                alt="Solar Energy Benefits"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-green-900/80"></div>
            </div>
            <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/20"
              >
                <span className="text-yellow-300 mr-2">⚡</span>
                <span className="text-sm font-medium">Clean Energy Revolution</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Why Solar?
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Why Now?
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-green-100 mb-8 leading-relaxed"
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
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 text-center shadow-xl"
                >
                  Calculate My Savings
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 text-center"
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
              {[
                {
                  icon: '💰',
                  title: 'Save $2,000+ Annually',
                  description: 'Average household savings on electricity bills',
                  color: 'from-green-400 to-emerald-500'
                },
                {
                  icon: '🏠',
                  title: 'Increase Property Value',
                  description: 'Add $6,000+ per kW to your home value',
                  color: 'from-blue-400 to-cyan-500'
                },
                {
                  icon: '🌱',
                  title: 'Reduce Carbon Footprint',
                  description: 'Equivalent to planting 2,500 trees per system',
                  color: 'from-emerald-400 to-teal-500'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-green-100">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dramatic Cost Savings
              </h2>
              <p className="text-lg text-gray-900 mb-6 leading-relaxed">
                Solar energy can dramatically reduce or even eliminate your electricity bills. 
                With rising energy costs, solar provides predictable, stable energy costs for decades.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-900">Save 70-90% on electricity bills</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-900">Typical payback period of 4-7 years</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-900">25+ years of free electricity after payback</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-900">Protection against rising energy costs</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/solarroof4.jpg"
                  alt="Solar installation showing cost savings"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-green-600 text-white text-2xl font-bold px-4 py-2 rounded-lg mb-2 inline-block">
                    90% Savings
                  </div>
                  <h3 className="text-xl font-semibold">Dramatic Cost Reduction</h3>
                  <p className="text-green-200 text-sm">Real customer installation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Environmental Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Solar energy is clean, renewable, and helps reduce greenhouse gas emissions. 
                By choosing solar, you're making a positive impact on the environment.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Zero emissions during operation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Reduces dependence on fossil fuels</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Average system prevents 100,000+ lbs CO₂ over lifetime</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Equivalent to planting 2,500 trees</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/solarroof6.jpg"
                    alt="Environmental impact of solar installation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="bg-green-600 text-white text-2xl font-bold px-4 py-2 rounded-lg mb-2 inline-block">
                      Zero Emissions
                    </div>
                    <h3 className="text-xl font-semibold">Environmental Protection</h3>
                    <p className="text-green-200 text-sm">Clean energy installation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Increase Property Value
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Solar installations consistently increase property values. Studies show that 
                homes with solar panels sell faster and for higher prices than comparable homes without solar.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Average increase of $6,000 per kW installed</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Homes sell 20% faster than non-solar homes</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Property tax exemptions in many areas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>Appeal to environmentally conscious buyers</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/solarroof9.jpg"
                  alt="Solar installation increasing property value"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-green-600 text-white text-2xl font-bold px-4 py-2 rounded-lg mb-2 inline-block">
                    +$15,000 Value
                  </div>
                  <h3 className="text-xl font-semibold">Property Enhancement</h3>
                  <p className="text-green-200 text-sm">Premium home upgrade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Solar Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Energy Independence</h3>
              <p className="text-gray-600">
                Generate your own electricity and reduce dependence on the grid and volatile energy prices.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Low Maintenance</h3>
              <p className="text-gray-600">
                Solar panels require minimal maintenance with no moving parts and 25+ year lifespans.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Technology</h3>
              <p className="text-gray-600">
                Decades of proven performance with continuously improving efficiency and reliability.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Government Incentives</h3>
              <p className="text-gray-600">
                Take advantage of rebates, tax credits, and feed-in tariffs to reduce installation costs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Monitoring</h3>
              <p className="text-gray-600">
                Real-time monitoring helps optimize performance and identify issues quickly.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Battery Storage Options</h3>
              <p className="text-gray-600">
                Store excess energy for use during peak hours or power outages for complete energy security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Solar Energy Myths vs Facts
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Myth: Solar doesn't work in cloudy weather</h3>
                <p className="text-red-700">
                  Many people believe solar panels are ineffective on cloudy days.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Fact: Solar works in all weather conditions</h3>
                <p className="text-green-700">
                  Solar panels generate electricity from daylight, not just direct sunlight, and work efficiently even on cloudy days.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Myth: Solar panels are too expensive</h3>
                <p className="text-red-700">
                  Solar is often perceived as an expensive investment with poor returns.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Fact: Solar pays for itself in 4-7 years</h3>
                <p className="text-green-700">
                  With government incentives and falling prices, solar provides excellent ROI and 20+ years of free electricity.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Myth: Solar panels require constant maintenance</h3>
                <p className="text-red-700">
                  Some believe solar systems need frequent repairs and maintenance.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Fact: Solar panels are virtually maintenance-free</h3>
                <p className="text-green-700">
                  Solar panels have no moving parts and require only periodic cleaning and annual inspections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make the Switch to Solar?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are saving money and helping the environment 
            with clean solar energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}