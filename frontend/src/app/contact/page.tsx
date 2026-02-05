'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useGooglePlaces } from '@/hooks/useGooglePlaces'
import { trackEvent } from '@/components/GoogleAnalytics'

// SVG Icon Components
const RocketIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const DevicePhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const EnvelopeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const TrophyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const CurrencyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const SparklesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
)

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
        // Track successful contact form submission in GA4
        trackEvent('form_submit', 'Contact', formData.serviceInterest || 'General Inquiry')
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
    <div className="bg-white">
      {/* Contact Banner */}
      <section className="py-4 bg-[#fee000] relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <div className="flex items-center gap-2 text-[#083941] font-bold text-lg sm:text-xl">
                <RocketIcon className="w-5 h-5" />
                <span>Australia&apos;s #1 Solar &amp; Battery Experts</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a
                  href="tel:1300090984"
                  className="bg-[#0073b9] text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-[#005a91] transition-colors shadow-lg flex items-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4" />
                  1300 09 09 84
                </a>
                <a
                  href="tel:+61422786100"
                  className="bg-white text-[#0073b9] px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
                >
                  <DevicePhoneIcon className="w-4 h-4" />
                  +61 422 786 100
                </a>
              </div>
              <div className="text-[#083941] font-semibold text-sm sm:text-base">
                Call Now for Instant Quote!
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0073b9]">
        <div className="absolute inset-0">
          <Image
            src="/solarroof6.jpg"
            alt="Contact Cosmic Renewable Energy"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0073b9]/80 via-[#0073b9]/60 to-[#0073b9]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
            >
              <SparklesIcon className="w-4 h-4 text-[#fee000]" />
              <span className="text-white text-sm font-medium tracking-wide">Get In Touch</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6 leading-tight">
              <span className="text-white">Contact </span>
              <span className="text-[#fee000]">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Ready to start your solar journey? Get in touch with Australia&apos;s trusted solar experts
              for a free consultation and personalized energy solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              className="text-center p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#0073b9] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <PhoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-2">Call Now</h3>
              <a href="tel:1300090984" className="block text-lg sm:text-2xl font-bold text-[#0073b9] mb-1 hover:text-[#005a91] transition-colors">1300 09 09 84</a>
              <a href="tel:+61422786100" className="block text-base sm:text-lg font-bold text-[#0073b9] mb-2 hover:text-[#005a91] transition-colors">+61 422 786 100</a>
              <p className="text-[#666666] text-xs sm:text-sm">Mon-Fri: 8am-6pm | Sat: 9am-4pm</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-[#fee000] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <EnvelopeIcon className="w-8 h-8 text-[#083941]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Email Us</h3>
              <p className="text-[#0073b9] font-semibold mb-2">info@cosmicrenewableenergy.com.au</p>
              <p className="text-[#666666] text-sm">24/7 email support</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#0073b9] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Visit Us</h3>
              <p className="text-[#666666] mb-2">12 Galli Court<br />Hillside, Victoria 3037</p>
              <p className="text-[#666666] text-sm">Free on-site consultations Australia-wide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#efefef] relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#333333] mb-4 sm:mb-6">
                Get Your <span className="text-[#0073b9]">Free Quote</span>
              </h2>
              <p className="text-lg text-[#666666] mb-8">
                Join thousands of satisfied customers who have made the switch to clean, renewable energy.
                Our team of certified solar experts is ready to design the perfect system for your needs.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: TrophyIcon, title: '2000+ Happy Customers', desc: 'Trusted by families and businesses across Australia', colorClass: 'text-[#0073b9]' },
                  { icon: BoltIcon, title: '10+ Years Experience', desc: 'CEC-accredited professionals with proven expertise', colorClass: 'text-[#0073b9]' },
                  { icon: ShieldCheckIcon, title: '5-Year Warranty', desc: 'Comprehensive workmanship guarantee included', colorClass: 'text-[#0073b9]' },
                  { icon: CurrencyIcon, title: 'Government Rebates', desc: 'We handle all paperwork for maximum savings', colorClass: 'text-[#0073b9]' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm group-hover:border-[#0073b9]/30 transition-colors">
                      <item.icon className={`w-5 h-5 ${item.colorClass}`} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#333333]">{item.title}</h3>
                      <p className="text-[#666666]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#0073b9]/20 shadow-lg">
                <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-[#0073b9]" />
                  Free Consultation Includes:
                </h3>
                <ul className="space-y-3">
                  {['Complete energy audit', 'Custom system design', 'Accurate pricing quote', 'Rebate calculations'].map((item, index) => (
                    <li key={index} className="flex items-center text-[#666666]">
                      <CheckIcon className="w-5 h-5 text-[#0073b9] mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">Get Started Today</h3>
                  <p className="text-[#666666]">Fill out the form below and we&apos;ll contact you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#efefef] border border-gray-200 rounded-xl text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#0073b9] focus:ring-1 focus:ring-[#0073b9] transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#333333] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#efefef] border border-gray-200 rounded-xl text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#0073b9] focus:ring-1 focus:ring-[#0073b9] transition-all"
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#efefef] border border-gray-200 rounded-xl text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#0073b9] focus:ring-1 focus:ring-[#0073b9] transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="suburb" className="block text-sm font-medium text-[#333333] mb-1">
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
                        className="w-full px-4 py-3 bg-[#efefef] border border-gray-200 rounded-xl text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#0073b9] focus:ring-1 focus:ring-[#0073b9] transition-all"
                        placeholder="Start typing your address..."
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-medium text-[#333333] mb-1">
                        Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#efefef] border border-gray-200 rounded-xl text-[#333333] focus:outline-none focus:border-[#0073b9] focus:ring-1 focus:ring-[#0073b9] transition-all"
                      >
                        <option value="" className="bg-white">Select a service</option>
                        <option value="solar-panels" className="bg-white">Solar Panels</option>
                        <option value="solar-batteries" className="bg-white">Solar Batteries</option>
                        <option value="heat-pumps" className="bg-white">Hot Water Heat Pump</option>
                        <option value="hvac-systems" className="bg-white">HVAC Systems</option>
                        <option value="maintenance" className="bg-white">Servicing &amp; Maintenance</option>
                        <option value="consultation" className="bg-white">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#efefef] border border-gray-200 rounded-xl text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#0073b9] focus:ring-1 focus:ring-[#0073b9] transition-all resize-none"
                      placeholder="Tell us about your energy needs, roof details, current electricity bills, or any questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#fee000] text-[#083941] px-6 py-4 rounded-xl text-lg font-semibold hover:bg-[#e5ca00] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get My Free Quote
                        <ArrowRightIcon className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {submitMessage && (
                    <div className={`p-4 rounded-xl ${submitMessage.includes('Thank you')
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                      {submitMessage}
                    </div>
                  )}
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-[#666666] mb-3">Or call us now for immediate assistance</p>
                  <a
                    href="tel:1300267642"
                    className="inline-flex items-center gap-2 bg-[#efefef] px-6 py-2 rounded-full font-semibold text-[#0073b9] border border-gray-200 hover:bg-[#0073b9] hover:text-white transition-all"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    1300 COSMIC
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#333333] mb-6">
              Find Our <span className="text-[#0073b9]">Location</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto mb-8">
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
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-[#333333] mb-6">Our Office</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPinIcon, title: 'Address', content: '12 Galli Court\nHillside, Victoria 3037' },
                    { icon: ClockIcon, title: 'Business Hours', content: 'Mon-Fri: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed' },
                    { icon: PhoneIcon, title: 'Phone', content: '1300 09 09 84', isLink: true, href: 'tel:1300090984' },
                    { icon: EnvelopeIcon, title: 'Email', content: 'info@cosmicrenewableenergy.com.au', isLink: true, href: 'mailto:info@cosmicrenewableenergy.com.au' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-[#efefef] rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#0073b9]" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-[#333333]">{item.title}</p>
                        {item.isLink ? (
                          <a href={item.href} className="text-[#0073b9] hover:text-[#005a91] transition-colors whitespace-pre-line">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-[#666666] whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
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
      <section className="py-16 bg-[#efefef] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#333333] mb-6">
              Service Areas Across <span className="text-[#0073b9]">Australia</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
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
                className="p-3 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-[#0073b9]/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                <h3 className="font-semibold text-[#666666] group-hover:text-[#0073b9] transition-colors text-sm sm:text-base">{city}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white relative">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#333333] mb-6">
              Frequently Asked <span className="text-[#0073b9]">Questions</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Get answers to the most common questions about solar energy and our services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
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
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-[#0073b9]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-[#333333] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#666666] leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0073b9] relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              Ready to Start Saving with <span className="text-[#fee000]">Solar</span>?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait - government rebates are available now. Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 bg-[#fee000] text-[#083941] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#e5ca00] transition-all duration-300 shadow-lg"
              >
                Get Free Quote
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:1300267642"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#0073b9] transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                Call 1300 COSMIC
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
