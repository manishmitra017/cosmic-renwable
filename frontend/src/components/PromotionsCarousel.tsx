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
    <section className="py-10 sm:py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">
            🔥 Hot Deals & Special Promotions
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Limited time offers on solar panels, battery storage, and air conditioning systems.
            <span className="hidden sm:inline"> Save thousands with government rebates and our exclusive deals!</span>
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl bg-white">
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
                <div className="relative h-[280px] sm:h-[400px] lg:h-[600px]">
                  <Image
                    src={promotions[currentIndex].image}
                    alt={promotions[currentIndex].title}
                    fill
                    className="object-contain bg-gradient-to-br from-green-50 to-emerald-50"
                    priority
                  />
                  {/* Highlight Badge */}
                  {promotions[currentIndex].highlight && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-red-500 text-white px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse max-w-[200px] sm:max-w-none truncate">
                      {promotions[currentIndex].highlight}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                      LIMITED TIME OFFER
                    </div>

                    <h3 className="text-lg sm:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {promotions[currentIndex].title}
                    </h3>

                    <p className="text-sm sm:text-lg text-green-600 font-semibold">
                      {promotions[currentIndex].subtitle}
                    </p>

                    <p className="text-gray-600 text-sm sm:text-lg hidden sm:block">
                      {promotions[currentIndex].description}
                    </p>

                    {/* Features List - Condensed on mobile */}
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Professional Installation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Government Rebates Applied
                      </li>
                      <li className="hidden sm:flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        5 Year Warranty
                      </li>
                      <li className="hidden sm:flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        CEC Approved Products
                      </li>
                    </ul>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 pt-3 sm:pt-6">
                      <Link
                        href="/quote"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-lg font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 text-center shadow-xl shadow-green-600/30 hover:scale-105"
                      >
                        {promotions[currentIndex].cta}
                      </Link>
                      <a
                        href="tel:1300090984"
                        className="border-2 border-green-600 text-green-600 px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-lg font-bold hover:bg-green-600 hover:text-white transition-all duration-200 text-center"
                      >
                        📞 1300 09 09 84
                      </a>
                    </div>

                    {/* Urgency Message */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded">
                      <p className="text-yellow-800 font-semibold text-xs sm:text-base">
                        ⏰ Offer expires soon! Limited spots available.
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
            className="absolute left-2 sm:left-4 top-[140px] sm:top-1/2 sm:-translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous promotion"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-[140px] sm:top-1/2 sm:-translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next promotion"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-200 ${
                  index === currentIndex
                    ? 'w-8 sm:w-12 h-2 sm:h-3 bg-green-600 rounded-full'
                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info Banner */}
        <motion.div
          className="mt-8 sm:mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
            🎯 Why Choose Cosmic Renewable Energy?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-3xl font-bold">5000+</div>
              <div className="text-orange-100 text-xs sm:text-base">Happy Customers</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-bold">10+</div>
              <div className="text-orange-100 text-xs sm:text-base">Years Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-bold">$8000</div>
              <div className="text-orange-100 text-xs sm:text-base">Max Rebates</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-bold">5★</div>
              <div className="text-orange-100 text-xs sm:text-base">Google Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}