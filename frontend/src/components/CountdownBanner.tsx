'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// SVG Icons
const LockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const CalendarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-05-01T00:00:00').getTime()

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
    <div className="relative overflow-hidden bg-[#0073b9]">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
            <CalendarIcon className="w-4 h-4 text-[#fee000]" />
            <span className="text-[#fee000] text-xs sm:text-sm font-semibold tracking-wide uppercase">Deadline Approaching</span>
          </div>

          {/* Main message */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight font-display">
              <span className="text-white">Solar Battery Rebate </span>
              <span className="text-[#fee000]">reduces on 1 May 2026</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto">
              Don&apos;t miss your highest rebate! Install before the deadline.
            </p>
          </div>

          {/* Countdown timer */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-center gap-2 text-white/80 mb-4">
              <ClockIcon className="w-4 h-4 text-[#fee000]" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Time Left Until Rebate Reduces</span>
            </div>
            <div className="flex gap-3 sm:gap-4 justify-center">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: String(timeLeft.hours).padStart(2, '0'), label: 'Hours' },
                { value: String(timeLeft.minutes).padStart(2, '0'), label: 'Mins' },
                { value: String(timeLeft.seconds).padStart(2, '0'), label: 'Secs' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-5 sm:py-4 min-w-[70px] sm:min-w-[80px] border border-white/20">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-none font-display">
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-white/70 mt-1 uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/quote"
            className="group relative inline-flex items-center gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#fee000] rounded-xl" />
            <div className="absolute inset-0 bg-[#e5ca00] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 text-[#083941] font-bold text-sm sm:text-base">
              <LockIcon className="w-5 h-5" />
              <span>Lock in My Rebate</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
