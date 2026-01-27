'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Custom SVG Icons
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const BoltIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const BatteryIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h14a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2zm16 3h2M7 12h4" />
  </svg>
)

// Social Icons
const socialIcons = [
  {
    href: 'https://www.facebook.com/cosmicrenewableenergy',
    icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    label: 'Facebook'
  },
  {
    href: 'https://www.instagram.com/cosmicrenewableenergy/',
    icon: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z',
    label: 'Instagram'
  },
  {
    href: 'https://x.com/CosmicRenewable',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    label: 'X'
  },
  {
    href: 'https://www.linkedin.com/in/cosmic-renewable-energy-46899a379',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    label: 'LinkedIn'
  }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/solar-battery', label: 'Solar Batteries' },
    { href: '/about', label: 'About' },
    { href: '/why-solar', label: 'Why Solar' },
    { href: '/articles', label: 'Articles' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Premium Top Bar */}
      <div
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'md:h-0 md:overflow-hidden md:opacity-0'
            : 'opacity-100'
        }`}
        style={{ background: 'linear-gradient(90deg, #0072CE 0%, #005BB5 50%, #0072CE 100%)' }}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FFE500] to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="tel:1300090984"
              className="flex items-center gap-2 text-[#FFE500] hover:text-[#FFEE00] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#FFE500]/10 flex items-center justify-center group-hover:bg-[#FFE500]/20 transition-colors">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm hidden sm:block">1300 09 09 84</span>
            </a>
            <div className="hidden md:flex items-center gap-2 text-gray-400">
              <ClockIcon className="w-4 h-4" />
              <span className="text-sm">Mon-Sat: 8AM-6PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:block text-sm text-white/80">
              Australia&apos;s Premium <span className="text-[#FFE500]">Solar Battery</span> Specialists
            </span>
            <div className="flex items-center gap-2">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#FFE500]/20 flex items-center justify-center text-gray-400 hover:text-[#FFE500] transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'top-14 md:top-0 shadow-lg'
            : 'top-14 md:top-10 shadow-md'
        }`}
      >
        {/* Glass background with gradient border */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-95'
          }`}
          style={{
            background: 'rgba(0, 114, 206, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFE500]/30 to-transparent" />

        <nav className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Logo container with dark background to blend white edges */}
                <div className="relative h-12 lg:h-14 w-12 lg:w-14 rounded-xl overflow-hidden bg-gradient-to-br from-[#0066BB] to-[#0072CE] border border-[#FFE500]/20 flex items-center justify-center">
                  <Image
                    src="/company-logo.png"
                    alt="Cosmic Renewable Energy"
                    width={56}
                    height={56}
                    className="h-10 lg:h-12 w-auto object-contain mix-blend-lighten"
                    priority
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#FFE500]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="whitespace-nowrap">
                <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-tight">
                  Cosmic <span className="text-gradient-solar">Renewable</span> Energy
                </h1>
                <p className="text-[10px] sm:text-xs text-[#FFE500]/80 font-medium hidden sm:block">
                  The Solar Energy Pioneers
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-8 xl:mx-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-gray-300 hover:text-white font-medium text-sm transition-colors group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFE500] to-[#0072CE] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              {/* Phone - Desktop */}
              <a
                href="tel:1300090984"
                className="hidden xl:flex items-center gap-3 text-gray-300 hover:text-white transition-colors group whitespace-nowrap"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#0072CE]/20 to-[#0072CE]/5 border border-[#0072CE]/30 flex items-center justify-center group-hover:border-[#0072CE]/50 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-[#0072CE]" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Call Now</p>
                  <p className="text-sm font-bold text-white whitespace-nowrap">1300 09 09 84</p>
                </div>
              </a>

              {/* Quote Button */}
              <Link
                href="/quote"
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold rounded-full whitespace-nowrap flex-shrink-0 bg-[#FFE500] text-[#0072CE] hover:bg-[#FFD700] hover:shadow-lg hover:shadow-[#FFE500]/30 transition-all"
              >
                <BoltIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Free Quote</span>
                <span className="sm:hidden">Quote</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden relative overflow-hidden"
              style={{
                background: 'rgba(0, 114, 206, 0.98)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all group"
                    >
                      <span>{link.label}</span>
                      <ChevronIcon className="w-4 h-4 text-gray-600 group-hover:text-[#FFE500] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
                  <a
                    href="tel:1300090984"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFE500] to-[#FFD700] text-[#0072CE] px-4 py-3.5 rounded-xl font-bold shadow-lg shadow-[#FFE500]/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Call: 1300 09 09 84</span>
                  </a>

                  <Link
                    href="/quote"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0072CE] to-[#0088F0] text-[#0072CE] px-4 py-3.5 rounded-xl font-bold shadow-lg shadow-[#0072CE]/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <BatteryIcon className="w-5 h-5" />
                    <span>Get Battery Quote</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-[112px] md:h-16 lg:h-20' : 'h-[112px] md:h-24 lg:h-28'}`} />
    </>
  )
}
