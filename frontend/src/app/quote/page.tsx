'use client'

import { useState } from 'react'
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

const DevicePhoneMobileIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const DocumentTextIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const CurrencyDollarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const GlobeAltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const HomeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const ClipboardDocumentCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
  </svg>
)

const MagnifyingGlassIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
)

const WrenchScrewdriverIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    property_type: '',
    roof_type: '',
    storey_type: '',
    meter_phase: '',
    energy_usage: '',
    budget_range: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handlePlaceSelect = (place: { formatted_address?: string }) => {
    if (place.formatted_address) {
      setFormData({
        ...formData,
        address: place.formatted_address
      })
    }
  }

  const addressInputRef = useGooglePlaces(handlePlaceSelect)

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
      const response = await fetch('https://hh6yv1miw1.execute-api.ap-southeast-2.amazonaws.com/prod/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          property_type: formData.property_type,
          roof_type: formData.roof_type,
          storey_type: formData.storey_type,
          meter_phase: formData.meter_phase,
          energy_usage: formData.energy_usage,
          budget_range: formData.budget_range,
          message: formData.message
        })
      })

      if (response.ok) {
        // Track successful quote form submission in GA4 (primary conversion)
        trackEvent('generate_lead', 'Quote', formData.property_type || 'Unknown')
        setSubmitMessage('Thank you for your quote request! Our team will contact you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          property_type: '',
          roof_type: '',
          storey_type: '',
          meter_phase: '',
          energy_usage: '',
          budget_range: '',
          message: ''
        })
      } else {
        const errorData = await response.json().catch(() => ({}))
        setSubmitMessage(errorData.error || 'Sorry, there was an error submitting your request. Please try again.')
      }
    } catch {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const steps = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'Submit Your Details',
      description: 'Fill out our comprehensive form with your property and energy requirements.'
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Site Assessment',
      description: 'Our experts will conduct a detailed assessment of your property.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Custom Quote',
      description: 'Receive a personalized quote with system design and savings projections.'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Installation',
      description: 'Professional installation by our certified technicians.'
    }
  ]

  const benefits = [
    {
      icon: CurrencyDollarIcon,
      title: 'Significant Savings',
      description: 'Most customers save 70-90% on their electricity bills with our solar solutions.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Environmental Impact',
      description: 'Reduce your carbon footprint and contribute to a cleaner, greener future.'
    },
    {
      icon: HomeIcon,
      title: 'Increase Property Value',
      description: 'Solar installations can increase your property value by up to $6,000 per kW installed.'
    }
  ]

  return (
    <div className="cosmic-bg">
      {/* Contact Banner */}
      <section className="py-4 bg-gradient-to-r from-[#FFE500] to-[#ff6b35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <div className="text-white font-bold text-lg sm:text-xl flex items-center gap-2">
                <RocketIcon className="w-5 h-5" />
                Australia&apos;s #1 Solar & Battery Experts
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a
                  href="tel:1300090984"
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4" />
                  1300 09 09 84
                </a>
                <a
                  href="tel:+61422786100"
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2"
                >
                  <DevicePhoneMobileIcon className="w-4 h-4" />
                  +61 422 786 100
                </a>
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">
                Call Now for Instant Quote!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#0072CE] overflow-hidden">
        {/* Star field background */}
        <div className="absolute inset-0 star-field opacity-40"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0072CE]/10 rounded-full blur-[100px] animate-float-delayed"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#FFE500]/20">
              <DocumentTextIcon className="w-5 h-5 text-[#FFE500]" />
              <span className="text-[#FFE500] font-semibold text-sm">Free No-Obligation Quote</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Get Your Free <span className="text-gradient-solar">Solar Quote</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Get a personalized quote for your solar installation. Our experts will design
              a custom solution based on your specific needs and property requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-b from-[#0072CE] to-[#0066BB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* What to Expect */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">What to Expect</h2>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#FFE500]/20 rounded-full flex items-center justify-center mr-4">
                        <step.icon className="w-5 h-5 text-[#FFE500]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                        <p className="text-[#b0b0b0] text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-cosmic p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white placeholder-white/40 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white placeholder-white/40 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white placeholder-white/40 transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Property Address *
                        </label>
                        <input
                          ref={addressInputRef}
                          type="text"
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white placeholder-white/40 transition-colors"
                          placeholder="Start typing your property address..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="property_type" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Property Type *
                        </label>
                        <select
                          id="property_type"
                          name="property_type"
                          required
                          value={formData.property_type}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white transition-colors"
                        >
                          <option value="" className="bg-[#005BB5]">Select property type</option>
                          <option value="house" className="bg-[#005BB5]">House</option>
                          <option value="apartment" className="bg-[#005BB5]">Apartment</option>
                          <option value="townhouse" className="bg-[#005BB5]">Townhouse</option>
                          <option value="commercial" className="bg-[#005BB5]">Commercial</option>
                          <option value="industrial" className="bg-[#005BB5]">Industrial</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="roof_type" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Roof Type *
                        </label>
                        <select
                          id="roof_type"
                          name="roof_type"
                          required
                          value={formData.roof_type}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white transition-colors"
                        >
                          <option value="" className="bg-[#005BB5]">Select roof type</option>
                          <option value="tile" className="bg-[#005BB5]">Tile</option>
                          <option value="metal" className="bg-[#005BB5]">Metal/Colorbond</option>
                          <option value="flat" className="bg-[#005BB5]">Flat</option>
                          <option value="slate" className="bg-[#005BB5]">Slate</option>
                          <option value="other" className="bg-[#005BB5]">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="storey_type" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Storey Type *
                        </label>
                        <select
                          id="storey_type"
                          name="storey_type"
                          required
                          value={formData.storey_type}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white transition-colors"
                        >
                          <option value="" className="bg-[#005BB5]">Select storey type</option>
                          <option value="single" className="bg-[#005BB5]">Single Storey</option>
                          <option value="double" className="bg-[#005BB5]">Double Storey</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="meter_phase" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Meter Phase *
                        </label>
                        <select
                          id="meter_phase"
                          name="meter_phase"
                          required
                          value={formData.meter_phase}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white transition-colors"
                        >
                          <option value="" className="bg-[#005BB5]">Select meter phase</option>
                          <option value="single" className="bg-[#005BB5]">Single Phase Meter</option>
                          <option value="three" className="bg-[#005BB5]">Three Phase Meter</option>
                          <option value="unknown" className="bg-[#005BB5]">Don&apos;t know</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="energy_usage" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Average Quarterly Electricity Bill
                        </label>
                        <select
                          id="energy_usage"
                          name="energy_usage"
                          value={formData.energy_usage}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white transition-colors"
                        >
                          <option value="" className="bg-[#005BB5]">Select your bill range</option>
                          <option value="under-300" className="bg-[#005BB5]">Under $300</option>
                          <option value="300-600" className="bg-[#005BB5]">$300 - $600</option>
                          <option value="600-900" className="bg-[#005BB5]">$600 - $900</option>
                          <option value="900-1200" className="bg-[#005BB5]">$900 - $1,200</option>
                          <option value="over-1200" className="bg-[#005BB5]">Over $1,200</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget_range" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget_range"
                          name="budget_range"
                          value={formData.budget_range}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white transition-colors"
                        >
                          <option value="" className="bg-[#005BB5]">Select budget range</option>
                          <option value="under-5k" className="bg-[#005BB5]">Under $5,000</option>
                          <option value="5k-10k" className="bg-[#005BB5]">$5,000 - $10,000</option>
                          <option value="10k-15k" className="bg-[#005BB5]">$10,000 - $15,000</option>
                          <option value="15k-20k" className="bg-[#005BB5]">$15,000 - $20,000</option>
                          <option value="over-20k" className="bg-[#005BB5]">Over $20,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#b0b0b0] mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#FFE500]/50 focus:border-[#FFE500]/50 text-white placeholder-white/40 transition-colors resize-none"
                        placeholder="Any additional information about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-solar px-6 py-4 rounded-lg text-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting Request...' : 'Get My Free Quote'}
                    </button>

                    {submitMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg ${
                          submitMessage.includes('Thank you')
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}
                      >
                        {submitMessage}
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-[#0066BB] to-[#0072CE] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0072CE]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FFE500]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Get a <span className="text-gradient-energy">Solar Quote?</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card-cosmic p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#0072CE]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#0072CE]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-[#b0b0b0]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
