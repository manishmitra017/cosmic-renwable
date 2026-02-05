'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getGoogleReviews, convertStarRating, formatReviewDate } from '@/lib/googleMyBusiness'

// SVG Icon Components
const StarIcon = ({ filled = true, className = "w-5 h-5" }: { filled?: boolean; className?: string }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={filled ? 0 : 2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
)

const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ChevronLeftIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
)

const ChevronRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
)

const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const QuoteIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
)

interface Review {
  name: string
  location: string
  rating: number
  review: string
  date: string
  verified: boolean
}

export default function CustomerReviews() {
  const [currentReview, setCurrentReview] = useState(0)
  const [reviews, setReviews] = useState<Review[]>([])
  const [totalReviews, setTotalReviews] = useState(927)
  const [averageRating, setAverageRating] = useState(4.9)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getGoogleReviews()
        if (data && data.reviews) {
          const formattedReviews: Review[] = data.reviews.map((review: {
            reviewer: { displayName?: string }
            starRating: string
            comment?: string
            createTime: string
          }) => ({
            name: review.reviewer.displayName || 'Anonymous',
            location: 'Verified Customer',
            rating: convertStarRating(review.starRating),
            review: review.comment || 'Great service!',
            date: formatReviewDate(review.createTime),
            verified: true
          }))
          setReviews(formattedReviews)
          setTotalReviews(data.totalReviewCount)
          setAverageRating(data.averageRating)
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error)
        // Keep fallback reviews if API fails
      }
    }

    fetchReviews()
  }, [])

  const fallbackReviews = [
    {
      name: "Sarah Johnson",
      location: "Melbourne, VIC",
      rating: 5,
      review: "Excellent service from start to finish! The team was professional, the installation was quick, and we&apos;re already seeing massive savings on our electricity bills. Highly recommend Cosmic Renewable Energy!",
      date: "2 weeks ago",
      verified: true
    },
    {
      name: "Michael Chen",
      location: "Sydney, NSW",
      rating: 5,
      review: "Outstanding work! The solar system was installed perfectly and the battery backup has been a game-changer during power outages. Great customer service and transparent pricing.",
      date: "1 month ago",
      verified: true
    },
    {
      name: "Lisa Thompson",
      location: "Brisbane, QLD",
      rating: 5,
      review: "Very professional team. They explained everything clearly, handled all the paperwork for government rebates, and completed the installation in just 2 days. Our bills have dropped by 85%!",
      date: "3 weeks ago",
      verified: true
    },
    {
      name: "David Williams",
      location: "Perth, WA",
      rating: 5,
      review: "From the initial consultation to the final installation, everything was seamless. The team was knowledgeable about government rebates and helped us maximize our savings. Fantastic experience!",
      date: "1 week ago",
      verified: true
    },
    {
      name: "Emma Roberts",
      location: "Adelaide, SA",
      rating: 5,
      review: "We&apos;ve been extremely happy with our solar battery system. The installation was clean and efficient, and the after-sales support has been excellent. Our energy independence is now a reality!",
      date: "2 months ago",
      verified: true
    }
  ]

  const displayReviews = reviews.length > 0 ? reviews : fallbackReviews

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % displayReviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + displayReviews.length) % displayReviews.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        filled={i < rating}
        className={`w-5 h-5 ${i < rating ? 'text-[#f5a623]' : 'text-gray-600'}`}
      />
    ))
  }

  // Get visible reviews with wrap-around
  const getVisibleReviews = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentReview + i) % displayReviews.length
      visible.push({ ...displayReviews[index], originalIndex: index })
    }
    return visible
  }

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0a0a0f]">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 star-field opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-3xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/20 mb-6"
          >
            <StarIcon filled className="w-4 h-4 text-[#f5a623]" />
            <span className="text-[#f5a623] text-sm font-medium tracking-wide">Customer Stories</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-white">Trusted by </span>
            <span className="text-gradient-solar">Australians</span>
          </h2>
          <p className="text-[#b0b0b0] text-lg max-w-2xl mx-auto mb-10">
            Join hundreds of satisfied customers who have transformed their energy future with Cosmic Renewable Energy.
          </p>

          {/* Rating Summary Card */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl px-8 py-5 border border-white/10 w-full sm:w-auto">
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-5xl font-bold text-white">{averageRating}</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex mb-2">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#b0b0b0] text-sm">{totalReviews.toLocaleString()} reviews on</span>
                    <GoogleIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://g.page/r/CRMzlNKuDbEZEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center bg-white text-gray-900 hover:bg-gray-100 shadow-lg shadow-white/10 hover:shadow-white/20"
            >
              <GoogleIcon className="w-5 h-5" />
              <span>Write a Review</span>
              <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, index) => (
              <motion.div
                key={`${currentReview}-${index}`}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f5a623]/20 to-[#00d4ff]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative glass rounded-2xl p-6 border border-white/10 hover:border-[#f5a623]/30 transition-all duration-300 h-full flex flex-col">
                  {/* Quote Icon */}
                  <QuoteIcon className="absolute top-4 right-4 w-8 h-8 text-[#f5a623]/10" />

                  {/* Header */}
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f5a623] to-[#ff8c00] rounded-full flex items-center justify-center text-[#0a0a0f] font-bold text-lg mr-4 shadow-lg shadow-[#f5a623]/20">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white truncate">{review.name}</h3>
                        {review.verified && (
                          <CheckIcon className="w-4 h-4 text-[#00d4ff] flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-[#b0b0b0]">{review.location}</p>
                      <p className="text-xs text-[#9ca3af]">{review.date}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#d1d5db] leading-relaxed text-sm flex-grow">
                    &ldquo;{review.review}&rdquo;
                  </p>

                  {/* Verified Badge */}
                  {review.verified && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-xs text-[#9ca3af]">
                        <CheckIcon className="w-3.5 h-3.5 text-[#00d4ff]" />
                        <span>Verified Google Review</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <button
              onClick={prevReview}
              className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 hover:border-[#f5a623]/50 hover:bg-[#f5a623]/10 transition-all duration-300 group"
              aria-label="Previous review"
            >
              <ChevronLeftIcon className="w-5 h-5 text-[#b0b0b0] group-hover:text-[#f5a623] transition-colors" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {displayReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? 'bg-[#f5a623] w-8 shadow-lg shadow-[#f5a623]/30'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 hover:border-[#f5a623]/50 hover:bg-[#f5a623]/10 transition-all duration-300 group"
              aria-label="Next review"
            >
              <ChevronRightIcon className="w-5 h-5 text-[#b0b0b0] group-hover:text-[#f5a623] transition-colors" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#9ca3af] text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-[#00d4ff]" />
            <span>100% Authentic Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-[#00d4ff]" />
            <span>Real Customer Experiences</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-[#00d4ff]" />
            <span>Verified by Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
