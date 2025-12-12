'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useGooglePlaces } from '@/hooks/useGooglePlaces'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    serviceInterest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handlePlaceSelect = (place: { formatted_address?: string }) => {
    if (place.formatted_address) {
      setFormData({
        ...formData,
        suburb: place.formatted_address
      })
    }
  }

  const suburbInputRef = useGooglePlaces(handlePlaceSelect)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('https://hh6yv1miw1.execute-api.ap-southeast-2.amazonaws.com/prod/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.suburb,
          service_interest: formData.serviceInterest,
          message: formData.message
        })
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.')
        setFormData({ name: '', email: '', phone: '', suburb: '', serviceInterest: '', message: '' })
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
      }
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Contact Banner */}
      <section className="py-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <div className="text-white font-bold text-lg sm:text-xl">
                🚀 Australia's #1 Solar & Battery Experts
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a 
                  href="tel:1300090984"
                  className="bg-white text-orange-600 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-orange-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  📞 1300 09 09 84
                </a>
                <a 
                  href="tel:+61422786100"
                  className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-red-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  📱 +61 422 786 100
                </a>
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">
                Call Now for Instant Quote!
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="absolute inset-0">
          <Image
            src="/solarroof6.jpg"
            alt="Contact Cosmic Renewable Energy"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-green-700 leading-relaxed">
              Ready to start your solar journey? Get in touch with Australia's trusted solar experts 
              for a free consultation and personalized energy solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <motion.div 
              className="text-center p-4 sm:p-6 bg-green-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white text-lg sm:text-2xl">📞</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Call Now</h3>
              <a href="tel:1300090984" className="block text-lg sm:text-2xl font-bold text-green-600 mb-1 hover:text-green-700">1300 09 09 84</a>
              <a href="tel:+61422786100" className="block text-base sm:text-lg font-bold text-red-600 mb-2 hover:text-red-700">+61 422 786 100</a>
              <p className="text-gray-600 text-xs sm:text-sm">Mon-Fri: 8am-6pm | Sat: 9am-4pm</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-green-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-green-600 font-semibold mb-2">info@cosmicrenewableenergy.com.au</p>
              <p className="text-gray-600 text-sm">24/7 email support</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-green-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">12 Galli Court<br/>Hillside, Victoria 3037</p>
              <p className="text-gray-600 text-sm">Free on-site consultations Australia-wide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Get Your Free Quote</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of satisfied customers who have made the switch to clean, renewable energy. 
                Our team of certified solar experts is ready to design the perfect system for your needs.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">2000+ Happy Customers</h3>
                    <p className="text-gray-600">Trusted by families and businesses across Australia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">10+ Years Experience</h3>
                    <p className="text-gray-600">CEC-accredited professionals with proven expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">5-Year Warranty</h3>
                    <p className="text-gray-600">Comprehensive workmanship guarantee included</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Government Rebates</h3>
                    <p className="text-gray-600">We handle all paperwork for maximum savings</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Free Consultation Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>Complete energy audit</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>Custom system design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>Accurate pricing quote</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>Rebate calculations</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
                <p className="text-gray-600">Fill out the form below and we'll contact you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base text-gray-900"
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      ref={suburbInputRef}
                      type="text"
                      id="suburb"
                      name="suburb"
                      required
                      value={formData.suburb}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                      placeholder="Start typing your address..."
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select a service</option>
                      <option value="solar-panels">Solar Panels</option>
                      <option value="solar-batteries">Solar Batteries</option>
                      <option value="heat-pumps">Hot Water Heat Pump</option>
                      <option value="hvac-systems">HVAC Systems</option>
                      <option value="maintenance">Servicing & Maintenance</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                    placeholder="Tell us about your energy needs, roof details, current electricity bills, or any questions..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
                </button>
                
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-3">Or call us now for immediate assistance</p>
                <a 
                  href="tel:1300267642" 
                  className="bg-green-100 text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-200 transition-colors inline-block"
                >
                  1300 COSMIC
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Visit our office or schedule a free on-site consultation anywhere in Australia.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">12 Galli Court<br/>Hillside, Victoria 3037</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">🕐</span>
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 4:00 PM<br/>Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:1300090984" className="text-green-600 hover:text-green-700 font-semibold">1300 09 09 84</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@cosmicrenewableenergy.com.au" className="text-green-600 hover:text-green-700">info@cosmicrenewableenergy.com.au</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2!2d144.7435!3d-37.7299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s12%20Galli%20Ct%2C%20Hillside%20VIC%203037%2C%20Australia!5e0!3m2!1sen!2sau!4v1691234567890!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cosmic Renewable Energy Location - 12 Galli Court Hillside"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Areas Across Australia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide solar and energy solutions to customers across all major Australian cities and regions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            {[
              'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra',
              'Gold Coast', 'Newcastle', 'Wollongong', 'Geelong', 'Hobart', 'Darwin'
            ].map((city, index) => (
              <motion.div
                key={city}
                className="p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{city}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about solar energy and our services.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you install my solar system?",
                  answer: "Most residential installations are completed within 1-3 days. We'll provide you with a detailed timeline during your free consultation, including any necessary approvals and grid connection processes."
                },
                {
                  question: "What government rebates am I eligible for?",
                  answer: "There are various federal and state rebates available, including the Small-scale Renewable Energy Scheme and state-specific battery rebates. We handle all paperwork and ensure you receive maximum benefits."
                },
                {
                  question: "How much money will I save with solar?",
                  answer: "Savings depend on your energy usage, system size, and location. Most customers see 70-90% reduction in electricity bills. We provide detailed savings projections during your consultation."
                },
                {
                  question: "Do you offer financing options?",
                  answer: "Yes, we offer flexible financing solutions to make solar accessible. Our team can discuss various payment plans and financing options that suit your budget during your consultation."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Saving with Solar?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Don't wait - government rebates are available now. Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:1300267642" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                Call 1300 COSMIC
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}