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
    <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)' }}>
      {/* Star field background */}
      <div className="absolute inset-0 star-field opacity-30" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f5a623]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00d4ff]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#f5a623]/10 rounded-full blur-[80px]" />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/50 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 backdrop-blur-sm">
            <CalendarIcon className="w-4 h-4 text-[#f5a623]" />
            <span className="text-[#f5a623] text-xs sm:text-sm font-semibold tracking-wide uppercase">Deadline Approaching</span>
          </div>

          {/* Main message */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight font-display">
              <span className="text-white">Solar Battery Rebate </span>
              <span className="text-gradient-solar">reduces on 1 May 2026</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto">
              Don&apos;t miss your highest rebate! Install before the deadline.
            </p>
          </div>

          {/* Countdown timer */}
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-4">
              <ClockIcon className="w-4 h-4 text-[#00d4ff]" />
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
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f5a623]/30 to-[#00d4ff]/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />

                  {/* Card */}
                  <div className="relative glass rounded-xl px-4 py-3 sm:px-5 sm:py-4 min-w-[70px] sm:min-w-[80px] border border-white/10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-none font-display">
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#f5a623] to-[#ff8c00] rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#f5a623] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 text-[#0a0a0f] font-bold text-sm sm:text-base">
              <LockIcon className="w-5 h-5" />
              <span>Lock in My Rebate</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />
    </div>
  )
}
