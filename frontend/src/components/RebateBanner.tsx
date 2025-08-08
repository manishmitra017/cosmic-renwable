'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RebateBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 overflow-hidden relative">
      <motion.div
        className="whitespace-nowrap py-3 px-4"
        animate={{ x: [1200, -1200] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="inline-flex items-center space-x-8 text-white font-bold text-lg md:text-xl">
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
            📞 <span>CALL NOW 1300 09 09 84 - FREE ASSESSMENT</span> 📞
          </span>
          <span className="flex items-center space-x-2">
            🏆 <span>COSMIC RENEWABLE - AUSTRALIA'S SOLAR LEADERS</span> 🏆
          </span>
          <span className="flex items-center space-x-2">
            🎯 <span>UP TO 30% DISCOUNT FROM APPROVED RETAILERS</span> 🎯
          </span>
        </div>
      </motion.div>
      
      <Link 
        href="/quote" 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors z-10 shadow-lg animate-pulse"
      >
        GET REBATE NOW
      </Link>
    </div>
  )
}