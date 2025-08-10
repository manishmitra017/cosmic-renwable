'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RebateBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 py-3 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <div className="text-white font-bold text-sm md:text-lg">
              🔥 GOVERNMENT BATTERY REBATE PROGRAM LIVE NOW 🔥
            </div>
            <div className="text-yellow-300 font-bold text-xs md:text-base">
              💰 SAVE UP TO $8,000 ON HOME BATTERY SYSTEMS 💰
            </div>
            <div className="text-white font-bold text-xs md:text-sm">
              📞 CALL 1300 09 09 84 - FREE ASSESSMENT
            </div>
          </div>
          
          <Link 
            href="/quote" 
            className="bg-yellow-400 text-blue-900 px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-yellow-300 transition-colors shadow-lg animate-pulse whitespace-nowrap"
          >
            GET REBATE NOW
          </Link>
        </div>
      </div>
    </div>
  )
}