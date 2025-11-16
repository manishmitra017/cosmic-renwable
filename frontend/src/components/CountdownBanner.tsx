'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-4">
          {/* Main message */}
          <div className="text-center w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Solar Battery Rebate <span className="text-yellow-300">reduces on 1 Jan 2026</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-100">
              Don't miss your highest rebate! Install before the deadline.
            </p>
          </div>

          {/* Countdown timer */}
          <div className="w-full text-center">
            <div className="text-xs sm:text-sm font-medium text-blue-200 mb-2">Time left until rebate reduces</div>
            <div className="flex gap-1.5 sm:gap-2 justify-center">
              <div className="bg-white text-blue-900 rounded-lg px-2 py-2 sm:px-3 sm:py-2 min-w-[50px] sm:min-w-[60px]">
                <div className="text-2xl sm:text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-[10px] sm:text-xs font-medium">Days</div>
              </div>
              <div className="bg-white text-blue-900 rounded-lg px-2 py-2 sm:px-3 sm:py-2 min-w-[50px] sm:min-w-[60px]">
                <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs font-medium">Hours</div>
              </div>
              <div className="bg-white text-blue-900 rounded-lg px-2 py-2 sm:px-3 sm:py-2 min-w-[50px] sm:min-w-[60px]">
                <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs font-medium">Minutes</div>
              </div>
              <div className="bg-white text-blue-900 rounded-lg px-2 py-2 sm:px-3 sm:py-2 min-w-[50px] sm:min-w-[60px]">
                <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs font-medium">Seconds</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/quote"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors shadow-lg flex items-center gap-2 text-sm sm:text-base"
          >
            <span>🔒</span>
            <span>Lock in My Rebate</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
