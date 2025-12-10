'use client'

import Link from 'next/link'

export default function RebateBanner() {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      {/* Desktop Scrolling Banner */}
      <div className="hidden md:block relative z-10">
        <div className="py-3 px-4">
          <div className="whitespace-nowrap animate-marquee">
            <div className="inline-flex items-center space-x-12 text-white font-bold text-lg">
              <span className="flex items-center space-x-2">
                🔥 <span>GOVERNMENT BATTERY REBATE PROGRAM LIVE NOW</span> 🔥
              </span>
              <span className="flex items-center space-x-2">
                💰 <span>SAVE UP TO $8,000 ON HOME BATTERY SYSTEMS</span> 💰
              </span>
              <span className="flex items-center space-x-2">
                ⚡ <span>$2.3 BILLION FEDERAL FUNDING AVAILABLE</span> ⚡
              </span>
              <span className="flex items-center space-x-2">
                📞 <span>CALL 1300 09 09 84 - FREE ASSESSMENT</span> 📞
              </span>
              <span className="flex items-center space-x-2">
                🏆 <span>COSMIC RENEWABLE - AUSTRALIA'S SOLAR LEADERS</span> 🏆
              </span>
            </div>
          </div>
        </div>

        {/* Button Row */}
        <div className="py-2.5 px-4 text-center border-t border-white/10 bg-black/10">
          <Link
            href="/quote"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm hover:from-yellow-300 hover:to-amber-400 transition-all shadow-lg shadow-yellow-500/30 hover:scale-105"
          >
            GET REBATE NOW
          </Link>
        </div>
      </div>

      {/* Mobile Static Banner - Redesigned */}
      <div className="block md:hidden py-3 px-4 relative z-10">
        <div className="flex flex-col items-center gap-2.5">
          {/* Main headline with gradient text effect */}
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-2">
              <span className="text-sm">🔥</span>
              <span className="text-white font-bold text-xs tracking-wide">LIVE NOW</span>
              <span className="text-sm">🔥</span>
            </div>
            <h3 className="text-white font-extrabold text-sm leading-tight">
              GOVERNMENT BATTERY REBATE
            </h3>
          </div>

          {/* Savings highlight */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-yellow-400/30">
            <span className="text-lg">💰</span>
            <span className="text-yellow-300 font-bold text-sm">SAVE UP TO $8,000</span>
          </div>

          {/* CTA Button */}
          <Link
            href="/quote"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>GET REBATE NOW</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
          animation-play-state: running;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}