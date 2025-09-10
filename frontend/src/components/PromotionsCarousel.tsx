'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const promotions = [
  {
    id: 1,
    image: '/promotions/IMG_2688.PNG',
    title: '30kW Battery Storage - Fully Installed $6999',
    subtitle: 'Solar Battery Storage System',
    description: 'Global leading PV & ESS provider with complete installation',
    cta: 'Claim This Offer',
    highlight: 'Sungrow - Clean power for all'
  },
  {
    id: 2,
    image: '/promotions/IMG_2689.JPG',
    title: 'Special Offer on Aircon - Save up to $8000',
    subtitle: 'Air Conditioning Systems',
    description: 'Get top-quality air conditioning systems with government rebates. Save up to 70% on energy costs!',
    cta: 'Buy It Now',
    highlight: 'For All Victorian Homeowners'
  },
  {
    id: 3,
    image: '/promotions/IMG_2721.PNG',
    title: 'Solar Panels from $1299 Onwards',
    subtitle: 'Switch to Clean Energy Today',
    description: 'Efficient solar panel solutions for your home with lower electricity bills and reduced carbon footprint',
    cta: 'Get Started',
    highlight: 'Renewable energy source that\'s sustainable'
  },
  {
    id: 4,
    image: '/promotions/IMG_2722.PNG',
    title: 'Solar Package Deals - 6.6kW to 13.2kW',
    subtitle: 'Premium Solar Packages',
    description: 'Choose from our most popular solar packages with Victorian rebates and interest-free loans available',
    cta: 'Select Your Plan',
    highlight: 'Most Popular: 10.12kW Package'
  },
  {
    id: 5,
    image: '/promotions/IMG_2723.PNG',
    title: 'Solar Battery Rebates - Claim Now',
    subtitle: 'Battery Storage Solutions',
    description: 'Get 10kW, 20kW, or 30kW battery storage with full installation. Clean energy council approved seller.',
    cta: 'Call For Details',
    highlight: 'Reduce your carbon footprint with exclusive financing options'
  }
]

export default function PromotionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🔥 Hot Deals & Special Promotions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Limited time offers on solar panels, battery storage, and air conditioning systems. 
            Save thousands with government rebates and our exclusive deals!
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0"
              >
                {/* Image Section */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                  <Image
                    src={promotions[currentIndex].image}
                    alt={promotions[currentIndex].title}
                    fill
                    className="object-contain bg-gradient-to-br from-green-50 to-emerald-50"
                    priority
                  />
                  {/* Highlight Badge */}
                  {promotions[currentIndex].highlight && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      {promotions[currentIndex].highlight}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="space-y-4">
                    <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      LIMITED TIME OFFER
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      {promotions[currentIndex].title}
                    </h3>
                    
                    <p className="text-lg text-green-600 font-semibold">
                      {promotions[currentIndex].subtitle}
                    </p>
                    
                    <p className="text-gray-600 text-lg">
                      {promotions[currentIndex].description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Professional Installation Included
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Government Rebates Applied
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        5 Year Warranty
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        CEC Approved Products
                      </li>
                    </ul>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Link 
                        href="/quote" 
                        className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-all duration-200 text-center shadow-xl transform hover:scale-105"
                      >
                        {promotions[currentIndex].cta}
                      </Link>
                      <a 
                        href="tel:1300090984" 
                        className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-600 hover:text-white transition-all duration-200 text-center"
                      >
                        📞 1300 09 09 84
                      </a>
                    </div>

                    {/* Urgency Message */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="text-yellow-800 font-semibold">
                        ⏰ Offer expires soon! Limited spots available for this month.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous promotion"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next promotion"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-200 ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-green-600 rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info Banner */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            🎯 Why Choose Cosmic Renewable Energy?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$8000</div>
              <div className="text-orange-100">Max Rebates</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5★</div>
              <div className="text-orange-100">Google Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}