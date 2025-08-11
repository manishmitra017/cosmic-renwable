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
        <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
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
          
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center space-x-6">
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
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-2 mr-4">
                <a href="https://www.facebook.com/cosmicrenewableenergy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors p-1">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/cosmicrenewableenergy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors p-1">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.826-1.297C3.321 14.498 2.5 13.15 2.5 11.5s.821-2.998 2.123-4.191C5.946 6.012 7.097 5.522 8.394 5.522s2.448.49 3.826 1.297C13.522 8.012 14.343 9.36 14.343 11.01s-.821 2.998-2.123 4.191c-1.378 1.297-2.529 1.787-3.771 1.787z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://x.com/CosmicRenewable" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors p-1">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/cosmic-renewable-energy-46899a379" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors p-1">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
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
                
                {/* Mobile Social Media Links */}
                <div className="flex justify-center space-x-6 py-4 border-t border-gray-200 mt-4">
                  <a href="https://www.facebook.com/cosmicrenewableenergy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/cosmicrenewableenergy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.826-1.297C3.321 14.498 2.5 13.15 2.5 11.5s.821-2.998 2.123-4.191C5.946 6.012 7.097 5.522 8.394 5.522s2.448.49 3.826 1.297C13.522 8.012 14.343 9.36 14.343 11.01s-.821 2.998-2.123 4.191c-1.378 1.297-2.529 1.787-3.771 1.787z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://x.com/CosmicRenewable" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                    <span className="sr-only">X (Twitter)</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/cosmic-renewable-energy-46899a379" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  )
}