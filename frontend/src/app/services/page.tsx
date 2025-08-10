'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Services() {
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
      icon: "🔋",
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
      icon: "☀️",
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
      icon: "🌡️",
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
      icon: "❄️",
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
      icon: "🔧",
      image: "/solarroof11.jpg",
      price: "Starting from $299/year"
    }
  ]

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
            src="/solarroof2.jpg"
            alt="Solar and Energy Services"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight">
              Complete Energy
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-green-700 mb-6 sm:mb-8 leading-relaxed">
              From solar batteries to heat pumps, we provide comprehensive energy solutions 
              to power your home efficiently and sustainably.
            </p>
            <Link 
              href="/quote" 
              className="w-full sm:w-auto bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors text-center block sm:inline-block shadow-xl"
            >
              Get Your Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Government Battery Rebate Highlight */}
      <section className="py-12 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Government Battery Rebates Available
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Save up to 30% on eligible battery systems through government rebate programs. 
              We handle all paperwork and ensure you get maximum savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions designed to reduce your bills and environmental impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${service.popular ? 'ring-2 ring-green-500' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {service.popular && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold z-10">
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
                  <div className="absolute inset-0 bg-green-600/80 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl lg:text-5xl">{service.icon}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 mb-3 sm:mb-4">{service.price}</div>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                  
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-green-500 font-bold mr-2 sm:mr-3 mt-1 text-sm">✓</span>
                        <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <Link 
                      href="/quote" 
                      className="w-full bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-700 transition-colors text-center block"
                    >
                      Get Quote
                    </Link>
                    <Link 
                      href="/contact" 
                      className="w-full border-2 border-green-600 text-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-600 hover:text-white transition-colors text-center block"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cosmic Renewable Energy */}
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
              Why Choose Cosmic Renewable Energy?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '5000+ Installations',
                description: 'Trusted by thousands of satisfied customers across Australia',
                icon: '🏆'
              },
              {
                title: 'Safety First',
                description: 'Fully licensed, insured, and safety-certified installations',
                icon: '🛡️'
              },
              {
                title: '5-Star Reviews',
                description: 'Consistently rated as the top energy installer in the region',
                icon: '⭐'
              },
              {
                title: 'Best Prices',
                description: 'Competitive pricing with transparent, no-hidden-fees quotes',
                icon: '💰'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
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
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Energy Future?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how much you can save 
              with our comprehensive energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                Call 1300 COSMIC
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}