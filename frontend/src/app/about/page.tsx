'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="absolute inset-0">
          <Image
            src="/solarroof6.jpg"
            alt="Cosmic Renewable Energy Team"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight">
              About Cosmic
              <span className="block text-green-600">
                Renewable Energy
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-green-700 leading-relaxed">
              Australia's trusted solar and battery specialists, dedicated to powering homes 
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Leading Solar Innovation
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                With over 10 years of experience in the renewable energy sector, Cosmic Renewable Energy 
                has established itself as one of Australia's most trusted solar and battery installation companies.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                We've helped over 5,000 Australian families and businesses achieve energy independence 
                through our premium solar panel and battery storage solutions, backed by industry-leading warranties 
                and exceptional customer service.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center bg-green-50 rounded-lg p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">10+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Years Experience</div>
                </div>
                <div className="text-center bg-green-50 rounded-lg p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">5000+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Happy Customers</div>
                </div>
              </div>

              <Link 
                href="/quote" 
                className="w-full sm:w-auto bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors text-center block sm:inline-block"
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
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="h-64 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making clean energy accessible, affordable, and reliable for all Australians.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                icon: '🏆',
                description: 'We use only premium components and maintain the highest installation standards, backed by comprehensive warranties.'
              },
              {
                title: 'Customer Focus',
                icon: '❤️',
                description: 'Every project is tailored to your specific needs, with ongoing support throughout your solar journey.'
              },
              {
                title: 'Innovation',
                icon: '💡',
                description: 'We stay at the forefront of solar technology to deliver the most efficient and reliable systems.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Cosmic Renewable Energy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with exceptional customer service to deliver 
              solar solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Installation',
                icon: '⚡',
                description: 'CEC-accredited professionals with years of experience in premium solar installations.',
                features: ['Clean Energy Council Certified', 'Fully Insured & Licensed', 'Safety-First Approach']
              },
              {
                title: 'Premium Products',
                icon: '🔋',
                description: 'We partner with industry-leading manufacturers to provide the highest quality components.',
                features: ['Tier 1 Solar Panels', 'Premium Battery Systems', 'German Engineering']
              },
              {
                title: 'Comprehensive Warranty',
                icon: '🛡️',
                description: '5-year workmanship warranty with ongoing support and maintenance services.',
                features: ['5-Year Workmanship', '25-Year Panel Warranty', '10-Year Battery Warranty']
              },
              {
                title: 'Transparent Pricing',
                icon: '💰',
                description: 'No hidden fees, no surprises. Clear, upfront pricing with detailed quotations.',
                features: ['Fixed Price Quotes', 'No Hidden Costs', 'Government Rebate Assistance']
              },
              {
                title: 'Local Support',
                icon: '🤝',
                description: 'Australian-owned and operated with local support teams across the country.',
                features: ['Australian Owned', 'Local Support Teams', 'Community Focused']
              },
              {
                title: 'Proven Results',
                icon: '📈',
                description: 'Track record of delivering exceptional results with thousands of satisfied customers.',
                features: ['5000+ Installations', '5-Star Customer Rating', 'Proven ROI Results']
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-600 font-bold mr-2">✓</span>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Quality Work Speaks for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every installation is a testament to our commitment to quality, precision, and customer satisfaction. 
              Browse our portfolio of successful projects across Australia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
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
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xs sm:text-sm font-semibold line-clamp-1">{project.title}</h3>
                    <p className="text-xs text-green-300">{project.size} System</p>
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
            <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-700">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
              </div>
              <p className="text-gray-600 text-center">
                Every project is completed to the highest standards with ongoing support and monitoring.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We maintain the highest industry standards through continuous training and certification.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Clean Energy Council', abbr: 'CEC', description: 'Accredited Installer' },
              { name: 'NETCC', abbr: 'NETCC', description: 'Approved Retailer' },
              { name: 'ISO Certified', abbr: 'ISO', description: 'Quality Management' },
              { name: 'Electrical Work Board', abbr: 'EWB', description: 'Licensed Electrical' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">{cert.abbr}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{cert.name}</h3>
                <p className="text-green-100 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work with Australia's Solar Experts?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with a trusted solar energy partner. 
              Get your personalized quote today and start saving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors inline-block"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}