'use client'

import Link from 'next/link'

export default function RebateBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 overflow-hidden relative">
      {/* Desktop Scrolling Banner */}
      <div className="hidden md:block">
        <div className="py-3 px-4">
          <div 
            className="whitespace-nowrap animate-scroll"
            style={{
              animation: 'scroll 15s linear infinite'
            }}
          >
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
        <div className="py-2 px-4 text-center border-t border-blue-500/30">
          <Link 
            href="/quote" 
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors shadow-lg animate-pulse"
          >
            GET REBATE NOW
          </Link>
        </div>
      </div>

      {/* Mobile Static Banner */}
      <div className="block md:hidden py-4 px-4 text-center">
        <div className="space-y-2">
          <div className="text-white font-bold text-sm">
            🔥 GOVERNMENT BATTERY REBATE LIVE NOW 🔥
          </div>
          <div className="text-yellow-300 font-bold text-xs">
            💰 SAVE UP TO $8,000 ON BATTERIES 💰
          </div>
          <div className="pt-2">
            <Link 
              href="/quote" 
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-xs hover:bg-yellow-300 transition-colors shadow-lg animate-pulse"
            >
              GET REBATE NOW
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}