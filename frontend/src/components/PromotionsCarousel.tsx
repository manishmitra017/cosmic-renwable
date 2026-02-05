'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// SVG Icons
const FlameIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 23c-3.866 0-7-3.134-7-7 0-1.966.813-4.247 2.417-6.778.418-.659.863-1.304 1.333-1.934.67-.899 1.388-1.76 2.15-2.582.287-.309.58-.613.878-.911l.222-.218.222.218c.298.298.591.602.878.911.762.822 1.48 1.683 2.15 2.582.47.63.915 1.275 1.333 1.934C18.187 11.753 19 14.034 19 16c0 3.866-3.134 7-7 7zm0-2c2.761 0 5-2.239 5-5 0-1.426-.607-3.299-1.806-5.286-.354-.585-.736-1.157-1.14-1.711-.437-.598-.906-1.178-1.404-1.738-.155-.174-.312-.347-.472-.518-.16.171-.317.344-.472.518-.498.56-.967 1.14-1.404 1.738-.404.554-.786 1.126-1.14 1.711C9.607 12.701 9 14.574 9 16c0 2.761 2.239 5 5 5z"/>
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const ChevronLeftIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)

const TargetIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6a6 6 0 100 12 6 6 0 000-12zM12 10a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
)

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
    }, 5000)

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
    <section className="py-10 sm:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)' }}>
      {/* Star field background */}
      <div className="absolute inset-0 star-field opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f5a623]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 mb-4">
            <FlameIcon className="w-4 h-4 text-[#f5a623]" />
            <span className="text-[#f5a623] text-sm font-semibold tracking-wide uppercase">Limited Time Offers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6 font-display">
            Hot Deals & <span className="text-gradient-solar">Special Promotions</span>
          </h2>
          <p className="text-sm sm:text-xl text-[#b0b0b0] max-w-3xl mx-auto">
            Limited time offers on solar panels, battery storage, and air conditioning systems.
            <span className="hidden sm:inline"> Save thousands with government rebates and our exclusive deals!</span>
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl glass border border-white/10">
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
                <div className="relative h-[280px] sm:h-[400px] lg:h-[600px] bg-[#0a0a0f]">
                  <Image
                    src={promotions[currentIndex].image}
                    alt={promotions[currentIndex].title}
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Highlight Badge */}
                  {promotions[currentIndex].highlight && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-[#f5a623] to-[#ff8c00] text-[#0a0a0f] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg max-w-[200px] sm:max-w-none truncate">
                      {promotions[currentIndex].highlight}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f]">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 text-[#00d4ff] text-xs sm:text-sm font-semibold">
                      <ClockIcon className="w-4 h-4" />
                      LIMITED TIME OFFER
                    </div>

                    <h3 className="text-lg sm:text-2xl lg:text-4xl font-bold text-white leading-tight font-display">
                      {promotions[currentIndex].title}
                    </h3>

                    <p className="text-sm sm:text-lg text-[#f5a623] font-semibold">
                      {promotions[currentIndex].subtitle}
                    </p>

                    <p className="text-[#b0b0b0] text-sm sm:text-lg hidden sm:block">
                      {promotions[currentIndex].description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-1.5 sm:space-y-2 text-[#e0e0e0] text-sm sm:text-base">
                      <li className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-[#00d4ff] mr-2 flex-shrink-0" />
                        Professional Installation
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-[#00d4ff] mr-2 flex-shrink-0" />
                        Government Rebates Applied
                      </li>
                      <li className="hidden sm:flex items-center">
                        <CheckIcon className="w-5 h-5 text-[#00d4ff] mr-2 flex-shrink-0" />
                        5 Year Warranty
                      </li>
                      <li className="hidden sm:flex items-center">
                        <CheckIcon className="w-5 h-5 text-[#00d4ff] mr-2 flex-shrink-0" />
                        CEC Approved Products
                      </li>
                    </ul>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 pt-3 sm:pt-6">
                      <Link
                        href="/quote"
                        className="btn-solar px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-lg font-bold text-center hover:scale-105 transition-transform"
                      >
                        {promotions[currentIndex].cta}
                      </Link>
                      <a
                        href="tel:1300090984"
                        className="btn-energy px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-lg font-bold text-center flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                      >
                        <PhoneIcon className="w-5 h-5" />
                        1300 09 09 84
                      </a>
                    </div>

                    {/* Urgency Message */}
                    <div className="glass border border-[#f5a623]/20 p-3 sm:p-4 rounded-xl">
                      <p className="text-[#f5a623] font-semibold text-xs sm:text-base flex items-center gap-2">
                        <ClockIcon className="w-4 h-4 flex-shrink-0" />
                        Offer expires soon! Limited spots available.
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
            className="absolute left-2 sm:left-4 top-[140px] sm:top-1/2 sm:-translate-y-1/2 glass hover:bg-white/10 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10 border border-white/10"
            aria-label="Previous promotion"
          >
            <ChevronLeftIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-[140px] sm:top-1/2 sm:-translate-y-1/2 glass hover:bg-white/10 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 z-10 border border-white/10"
            aria-label="Next promotion"
          >
            <ChevronRightIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-200 ${
                  index === currentIndex
                    ? 'w-8 sm:w-12 h-2 sm:h-3 bg-gradient-to-r from-[#f5a623] to-[#ff8c00] rounded-full'
                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/30 rounded-full hover:bg-white/50'
                }`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div
          className="mt-8 sm:mt-12 glass rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center flex items-center justify-center gap-2 font-display">
            <TargetIcon className="w-6 h-6 text-[#f5a623]" />
            Why Choose <span className="text-gradient-solar">Cosmic Renewable Energy?</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { value: '5000+', label: 'Happy Customers' },
              { value: '10+', label: 'Years Experience' },
              { value: '$8000', label: 'Max Rebates' },
              { value: '5', label: 'Google Reviews', showStar: true }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-4 border border-white/5">
                <div className="text-xl sm:text-3xl font-bold text-gradient-solar flex items-center justify-center gap-1">
                  {stat.value}
                  {stat.showStar && <StarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#f5a623]" />}
                </div>
                <div className="text-[#b0b0b0] text-xs sm:text-base mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
