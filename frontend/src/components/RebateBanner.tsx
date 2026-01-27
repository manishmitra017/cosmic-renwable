'use client'

import Link from 'next/link'

// SVG Icons
const FlameIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 23c-3.866 0-7-3.134-7-7 0-1.966.813-4.247 2.417-6.778.418-.659.863-1.304 1.333-1.934.67-.899 1.388-1.76 2.15-2.582.287-.309.58-.613.878-.911l.222-.218.222.218c.298.298.591.602.878.911.762.822 1.48 1.683 2.15 2.582.47.63.915 1.275 1.333 1.934C18.187 11.753 19 14.034 19 16c0 3.866-3.134 7-7 7zm0-2c2.761 0 5-2.239 5-5 0-1.426-.607-3.299-1.806-5.286-.354-.585-.736-1.157-1.14-1.711-.437-.598-.906-1.178-1.404-1.738-.155-.174-.312-.347-.472-.518-.16.171-.317.344-.472.518-.498.56-.967 1.14-1.404 1.738-.404.554-.786 1.126-1.14 1.711C9.607 12.701 9 14.574 9 16c0 2.761 2.239 5 5 5z"/>
  </svg>
)

const CurrencyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const TrophyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14M5 3v4c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V3M5 3H3m16 0h2M12 11v4m-4 6h8a2 2 0 002-2v-1H6v1a2 2 0 002 2z" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function RebateBanner() {
  const bannerItems = [
    { icon: BoltIcon, text: 'Solar Batteries from $2,880', color: 'text-[#0072CE]' },
    { icon: BoltIcon, text: 'Cheapest Solar Battery Guaranteed', color: 'text-[#0072CE]' },
    { icon: BoltIcon, text: "Australia's Cheaper Home Batteries", color: 'text-[#0072CE]' },
    { icon: PhoneIcon, text: 'CALL 1300 09 09 84', color: 'text-[#0072CE]' },
  ]

  return (
    <div className="relative overflow-hidden" style={{ background: '#FFE500' }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/50 via-transparent to-[#FFD700]/50" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0072CE]/30 to-transparent" />

      {/* Desktop Scrolling Banner */}
      <div className="hidden md:block relative z-10">
        <div className="py-3 px-4 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <div className="inline-flex items-center space-x-12">
              {bannerItems.map((item, index) => (
                <span key={index} className="flex items-center space-x-2 text-[#0072CE] font-bold text-lg">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.text}</span>
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {bannerItems.map((item, index) => (
                <span key={`dup-${index}`} className="flex items-center space-x-2 text-[#0072CE] font-bold text-lg">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Static Banner */}
      <div className="block md:hidden py-3 px-4 relative z-10">
        <div className="flex items-center justify-center gap-4 overflow-x-auto">
          <div className="flex items-center gap-2 text-[#0072CE] font-bold text-sm whitespace-nowrap">
            <BoltIcon className="w-4 h-4" />
            <span>Solar Batteries from $2,880</span>
          </div>
          <div className="flex items-center gap-2 text-[#0072CE] font-bold text-sm whitespace-nowrap">
            <BoltIcon className="w-4 h-4" />
            <span>Cheapest Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0072CE]/20" />

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          animation-play-state: running;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
