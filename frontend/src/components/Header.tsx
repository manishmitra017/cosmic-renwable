'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/company-logo.png"
                alt="Cosmic Renewable Energy"
                width={80}
                height={80}
                className="w-auto h-14 sm:h-16 lg:h-20"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-lg lg:text-xl font-bold text-gray-800">
                  Cosmic Renewable Energy
                </span>
                <span className="text-xs text-gray-600 hidden sm:block">
                  The Solar Energy Pioneers
                </span>
              </div>
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/why-solar', label: 'Why Solar' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact' }
              ].map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/quote" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
              <Link 
                href="/services" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/why-solar" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Why Solar
              </Link>
              <Link 
                href="/faq" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/quote" 
                className="block bg-green-600 text-white px-3 py-3 rounded-md text-base font-medium hover:bg-green-700 transition-colors mx-3 my-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
              <div className="px-3 py-2 space-y-2">
                <a 
                  href="tel:1300090984" 
                  className="block bg-orange-100 text-orange-600 px-3 py-2 rounded-md text-center font-semibold hover:bg-orange-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  📞 1300 09 09 84
                </a>
                <a 
                  href="tel:+61422786100" 
                  className="block bg-red-100 text-red-600 px-3 py-2 rounded-md text-center font-semibold hover:bg-red-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  📱 +61 422 786 100
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  )
}