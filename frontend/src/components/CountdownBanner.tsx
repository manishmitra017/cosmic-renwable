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
    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-6 sm:py-8 relative overflow-hidden">
      {/* Background pattern - enhanced for mobile */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30"></div>
      </div>

      {/* Animated wave pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center gap-5 sm:gap-6">
          {/* Main message */}
          <div className="text-center w-full">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
              <span className="block sm:inline">Solar Battery Rebate</span>{' '}
              <span className="text-yellow-300 block sm:inline">reduces on 1 Jan 2026</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-blue-100 max-w-xl mx-auto">
              Don't miss your highest rebate! Install before the deadline.
            </p>
          </div>

          {/* Countdown timer - redesigned for mobile */}
          <div className="w-full text-center">
            <div className="text-[10px] sm:text-xs font-semibold text-blue-200 mb-3 uppercase tracking-wider">
              Time left until rebate reduces
            </div>
            <div className="flex gap-2 sm:gap-3 justify-center">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: String(timeLeft.hours).padStart(2, '0'), label: 'Hours' },
                { value: String(timeLeft.minutes).padStart(2, '0'), label: 'Mins' },
                { value: String(timeLeft.seconds).padStart(2, '0'), label: 'Secs' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm text-blue-900 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[70px] shadow-lg shadow-blue-900/30 border border-white/20"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-none">{item.value}</div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-blue-600 mt-1 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - enhanced for mobile */}
          <Link
            href="/quote"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 flex items-center gap-2 text-sm sm:text-base hover:scale-105 active:scale-100"
          >
            <span className="text-lg">🔒</span>
            <span>Lock in My Rebate</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
