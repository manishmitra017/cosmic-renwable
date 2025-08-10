'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getGoogleReviews, convertStarRating, formatReviewDate } from '@/lib/googleMyBusiness'

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
      review: "Excellent service from start to finish! The team was professional, the installation was quick, and we're already seeing massive savings on our electricity bills. Highly recommend Cosmic Renewable Energy!",
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
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500">Our Happy</span>{' '}
            <span className="text-gray-800">Customers</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-xl px-6 py-4 shadow-xl border border-gray-100 w-full sm:w-auto">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-4xl font-bold text-gray-900">{averageRating}</span>
                <div className="flex flex-col">
                  <div className="flex mb-1">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-gray-700 font-medium">{totalReviews} reviews on </span>
                    <span className="font-bold text-blue-600">Google</span>
                  </div>
                </div>
              </div>
            </div>
            <a 
              href="https://g.page/r/CRMzlNKuDbEZEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto text-center"
            >
              Review us on Google
            </a>
          </div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayReviews.slice(currentReview, currentReview + 3).concat(
              currentReview + 3 > displayReviews.length ? displayReviews.slice(0, (currentReview + 3) % displayReviews.length) : []
            ).slice(0, 3).map((review, index) => (
              <motion.div
                key={`${currentReview}-${index}`}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-semibold text-gray-900 mr-2">{review.name}</h3>
                      {review.verified && (
                        <span className="text-blue-500 text-sm">✓</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{review.location}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{review.review}"
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-600 text-xl">‹</span>
            </button>
            
            <div className="flex gap-2">
              {displayReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentReview ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-600 text-xl">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}