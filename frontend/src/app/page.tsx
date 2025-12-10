'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RebateBanner from '@/components/RebateBanner'
import CustomerReviews from '@/components/CustomerReviews'
import PromotionsCarousel from '@/components/PromotionsCarousel'
import CountdownBanner from '@/components/CountdownBanner'
import BestPriceGuarantee from '@/components/BestPriceGuarantee'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cosmic Renewable Energy",
    "description": "Australia's leading solar battery installation specialists. Premium solar battery systems with government rebates up to $8,000.",
    "url": "https://cosmicrenewableenergy.com.au",
    "telephone": "1300090984",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Galli Court",
      "addressLocality": "Hillside",
      "addressRegion": "Victoria",
      "postalCode": "3037",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.7299,
      "longitude": 144.7435
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00"
    ],
    "priceRange": "$$",
    "areaServed": "Australia",
    "serviceType": ["Solar Battery Installation", "Solar Panel Installation", "Hot Water Heat Pump", "HVAC Systems", "Solar Maintenance"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "927"
    },
    "sameAs": [
      "https://www.facebook.com/cosmicrenewableenergy",
      "https://www.instagram.com/cosmicrenewableenergy/",
      "https://x.com/CosmicRenewable",
      "https://www.linkedin.com/in/cosmic-renewable-energy-46899a379"
    ]
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Countdown Timer Banner */}
      <CountdownBanner />

      {/* Government Rebate Banner */}
      <RebateBanner />

      {/* Contact Banner */}
      <section className="py-3 sm:py-4 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mobile Layout */}
            <div className="flex flex-col items-center gap-2.5 sm:hidden">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span>🚀</span>
                <span>Australia's #1 Solar Experts</span>
              </div>
              <div className="flex items-center gap-2 w-full max-w-xs">
                <a
                  href="tel:1300090984"
                  className="flex-1 bg-white/95 backdrop-blur-sm text-orange-600 px-3 py-2.5 rounded-full font-bold text-xs shadow-lg flex items-center justify-center gap-1.5 hover:scale-105 transition-transform"
                >
                  <span>📞</span>
                  <span>1300 09 09 84</span>
                </a>
                <a
                  href="tel:+61422786100"
                  className="flex-1 bg-white/95 backdrop-blur-sm text-red-600 px-3 py-2.5 rounded-full font-bold text-xs shadow-lg flex items-center justify-center gap-1.5 hover:scale-105 transition-transform"
                >
                  <span>📱</span>
                  <span>+61 422 786 100</span>
                </a>
              </div>
              <div className="text-white/90 font-medium text-xs">
                Call Now for Instant Quote!
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6">
              <div className="text-white font-bold text-base md:text-xl flex items-center gap-2">
                <span>🚀</span>
                <span>Australia's #1 Solar & Battery Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:1300090984"
                  className="bg-white text-orange-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-orange-50 transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                >
                  📞 1300 09 09 84
                </a>
                <a
                  href="tel:+61422786100"
                  className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-red-50 transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                >
                  📱 +61 422 786 100
                </a>
              </div>
              <div className="text-white font-semibold text-sm md:text-base">
                Call Now for Instant Quote!
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="absolute inset-0">
          <Image
            src="/solarroof9.jpg"
            alt="Premium solar battery system installation on Australian home roof - Cosmic Renewable Energy"
            fill
            className="object-cover opacity-20"
            priority
          />
          {/* Enhanced gradient overlay for mobile readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-transparent to-emerald-100/80 sm:hidden"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-0">
          <div className="max-w-4xl">
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-green-800 mb-3 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Solar Battery Systems
              <span className="block text-green-600 text-xl sm:text-3xl md:text-4xl lg:text-6xl mt-1 sm:mt-2">
                Australia Wide Installation
              </span>
            </motion.h1>

            <motion.div
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-bold px-4 sm:px-6 py-2.5 sm:py-4 rounded-xl mb-3 sm:mb-6 inline-block shadow-lg shadow-green-600/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Starting from $2,480
            </motion.div>

            <motion.p
              className="text-sm sm:text-lg md:text-xl text-green-700 mb-5 sm:mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Australia's leading solar battery installation specialists. Save up to $8,000 with government rebates
              on premium home battery systems.
              <span className="hidden sm:inline"> Professional installation across Melbourne, Sydney, Brisbane and nationwide.</span>
            </motion.p>

            <motion.div
              className="flex flex-col gap-2.5 sm:gap-4 mb-6 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/quote"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 text-center block sm:inline-block shadow-xl shadow-green-600/30"
                >
                  Book Free Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="tel:1300090984"
                  className="w-full sm:w-auto border-2 border-green-600 text-green-600 bg-white/80 backdrop-blur-sm px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200 text-center block sm:inline-block"
                >
                  📞 Call Now: 1300 09 09 84
                </a>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 md:gap-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-6 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '5000+', label: 'Homes Powered' },
                { value: '5 Years', label: 'Warranty' },
                { value: '90%', label: 'Bill Reduction' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-2 sm:p-0">
                  <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-green-600">{stat.value}</div>
                  <div className="text-green-700 text-[10px] sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promotions Carousel */}
      <PromotionsCarousel />

      {/* Special Offer Banner */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 max-w-4xl mx-auto">
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  ⚡ EXCLUSIVE LIMITED TIME OFFER ⚡
                </h2>
                <p className="text-lg text-gray-600">
                  Don't miss out on our latest solar and battery package deals!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/survey1.png"
                    alt="Cosmic Renewable Energy Offer Survey 1"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/survey2.png"
                    alt="Cosmic Renewable Energy Offer Survey 2"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/quote" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-colors shadow-xl"
                >
                  Claim This Offer Now
                </Link>
                <a 
                  href="tel:1300090984" 
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-600 hover:text-white transition-colors"
                >
                  📞 Call for Details
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Battery Rebate Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solar Battery Rebates Australia - Save $8,000
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Take advantage of the $2.3 Billion Australian Government Home Battery Program. 
              Save up to $8,000 on premium solar battery systems with professional installation across Australia.
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
              <ul className="text-left text-green-100 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-300 font-bold mr-3">1.</span>
                  Choose from approved battery systems
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 font-bold mr-3">2.</span>
                  Get up to 30% government discount
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 font-bold mr-3">3.</span>
                  Professional installation included
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 font-bold mr-3">4.</span>
                  Start saving on energy bills immediately
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Carousel Section */}
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
              Comprehensive solar and energy solutions for your home and business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Solar Batteries',
                icon: '🔋',
                description: 'Store excess energy for use day and night',
                image: '/batteryImage3.jpg'
              },
              {
                title: 'Solar Panels',
                icon: '☀️',
                description: 'Premium solar panels for maximum efficiency',
                image: '/solarroof8.jpg'
              },
              {
                title: 'Hot Water Heat Pump',
                icon: '🌡️',
                description: 'Energy-efficient heating and cooling',
                image: '/inverterimage2.jpg'
              },
              {
                title: 'HVAC Systems',
                icon: '❄️',
                description: 'Climate control solutions',
                image: '/solarroof10.jpg'
              },
              {
                title: 'Servicing',
                icon: '🔧',
                description: 'Maintenance and support services',
                image: '/solarroof11.jpg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-600/80 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry Leading Battery Brands
            </h2>
            <p className="text-xl text-gray-600">
              We partner with the world's most trusted battery manufacturers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Tesla', logo: '🔋' },
              { name: 'Eveready', logo: '⚡' },
              { name: 'AlphaESS', logo: '🌟' },
              { name: 'Hive Energy', logo: '🏠' },
              { name: 'Ambrion', logo: '💎' }
            ].map((brand, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-2">{brand.logo}</div>
                <h3 className="font-semibold text-gray-900">{brand.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '5000+ Installations',
                description: 'Trusted by thousands of satisfied customers across Australia'
              },
              {
                title: 'Safety First',
                description: 'Fully licensed, insured, and safety-certified installations'
              },
              {
                title: '5-Star Reviews',
                description: 'Consistently rated as the top solar installer in the region'
              },
              {
                title: 'Best Prices',
                description: 'Competitive pricing with transparent, no-hidden-fees quotes'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-green-50 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Our Work Portfolio */}
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
              Our Completed Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the quality of our work across thousands of successful solar installations. 
              From residential rooftops to commercial systems, we deliver excellence every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                image: '/solarroof.jpg',
                title: 'Residential Solar Installation',
                description: '6.6kW system with premium panels',
                location: 'Melbourne, VIC'
              },
              {
                image: '/solarroof2.jpg',
                title: 'Large Scale Residential',
                description: '10kW system with battery storage',
                location: 'Sydney, NSW'
              },
              {
                image: '/solarroof3.jpg',
                title: 'Modern Home Solar',
                description: '8.8kW high-efficiency installation',
                location: 'Brisbane, QLD'
              },
              {
                image: '/solarroof4.jpg',
                title: 'Commercial Solar Project',
                description: '50kW commercial installation',
                location: 'Perth, WA'
              },
              {
                image: '/solarroof5.jpg',
                title: 'Tile Roof Installation',
                description: '7.2kW system with micro-inverters',
                location: 'Adelaide, SA'
              },
              {
                image: '/solarroof6.jpg',
                title: 'Multi-Story Installation',
                description: '12kW split-level system',
                location: 'Canberra, ACT'
              },
              {
                image: '/solarroof7.jpg',
                title: 'Warehouse Solar System',
                description: '100kW commercial installation',
                location: 'Gold Coast, QLD'
              },
              {
                image: '/solarroof8.jpg',
                title: 'Premium Residential',
                description: '9.9kW with battery backup',
                location: 'Newcastle, NSW'
              },
              {
                image: '/batteryImage1.jpg',
                title: 'Tesla Battery Installation',
                description: '13.5kWh Powerwall system',
                location: 'Geelong, VIC'
              },
              {
                image: '/batteryImage2.jpg',
                title: 'Home Battery Storage',
                description: '10kWh backup power system',
                location: 'Hobart, TAS'
              },
              {
                image: '/batteryImage3.jpg',
                title: 'Premium Battery Setup',
                description: '20kWh commercial storage',
                location: 'Darwin, NT'
              },
              {
                image: '/inverterImage1.jpg',
                title: 'Inverter Installation',
                description: 'Premium German inverters',
                location: 'Wollongong, NSW'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <div className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-1 sm:mb-2 inline-block">
                      Completed
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 line-clamp-2">{project.title}</h3>
                    <p className="text-green-200 text-sm line-clamp-1">{project.description}</p>
                    <p className="text-green-300 text-xs mt-1 line-clamp-1">📍 {project.location}</p>
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
            <div className="bg-green-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-gray-600 mb-6">
                Over 5,000 satisfied customers have trusted us with their solar installations. 
                Let us design the perfect system for your property.
              </p>
              <Link 
                href="/quote" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-block shadow-xl"
              >
                Get Your Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Showcase */}
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
              Why Solar Increases Your Property Value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solar installations don't just save you money on electricity bills - they significantly increase your property value and appeal to future buyers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {[
              {
                title: "Property Value Increase",
                percentage: "+15%",
                description: "Solar homes sell for an average of 15% more than comparable non-solar properties",
                image: "/solarroof3.jpg",
                features: [
                  "Immediate increase in home valuation",
                  "Higher resale value and faster sales",
                  "Attractive to environmentally conscious buyers",
                  "Premium market positioning"
                ]
              },
              {
                title: "Energy Bill Savings",
                percentage: "90%",
                description: "Reduce your electricity bills by up to 90% with our premium solar systems",
                image: "/solarroof5.jpg",
                features: [
                  "Immediate reduction in monthly bills",
                  "Protection against rising energy costs",
                  "Feed-in tariffs for excess power",
                  "Return on investment within 3-5 years"
                ]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-green-600 text-white text-4xl sm:text-5xl font-bold px-4 py-2 rounded-lg">
                      {benefit.percentage}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-green-200 text-lg">{benefit.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {benefit.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Environmental Impact",
                metric: "25 Tons",
                description: "CO2 reduced per year with average system",
                image: "/solarroof7.jpg",
                icon: "🌱"
              },
              {
                title: "Energy Independence",
                metric: "100%",
                description: "Self-sufficient during daylight hours",
                image: "/batteryImage2.jpg",
                icon: "⚡"
              },
              {
                title: "Government Incentives",
                metric: "$8,000",
                description: "Average rebates and incentives available",
                image: "/inverterImage1.jpg",
                icon: "💰"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-3xl font-bold text-green-300 mb-1">{item.metric}</div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-green-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 sm:p-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Start Increasing Your Property Value Today
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of homeowners who have increased their property value while saving on energy costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/quote" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-block shadow-xl"
                >
                  Get Free Property Assessment
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors inline-block"
                >
                  Calculate My Savings
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Solar News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest Solar News
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed with the latest developments in solar technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '$2.3 Billion Cheaper Home Batteries Program Now Live',
                description: 'Government launches massive battery rebate program offering up to 30% discounts on home battery systems.',
                image: '/batteryImage3.jpg',
                date: 'August 2025',
                link: 'https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries'
              },
              {
                title: 'How Solar Households Can Maximize Government Benefits',
                description: 'Complete guide to accessing federal and state solar incentives, rebates, and the new battery program.',
                image: '/solarroof8.jpg',
                date: 'August 2025',
                link: 'https://www.energy.gov.au/solar/switch-solar-power/solar-households'
              },
              {
                title: 'Battery Storage Revolution: 5kWh to 100kWh Systems Eligible',
                description: 'New program covers batteries from small residential to large commercial installations with CEC approval.',
                image: '/batteryImage2.jpg',
                date: 'August 2025',
                link: 'https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-green-600 font-medium mb-2">{article.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <a 
                    href={article.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get a personalized quote and discover how much you can save with solar and battery systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:1300090984" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                📞 Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}