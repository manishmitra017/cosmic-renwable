'use client'

import { useState } from 'react'
import { useGooglePlaces } from '@/hooks/useGooglePlaces'

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    property_type: '',
    roof_type: '',
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
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '7d4e4c8b-e886-49df-ba29-d859ddcc7e55')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('address', formData.address)
      formDataToSend.append('property_type', formData.property_type)
      formDataToSend.append('roof_type', formData.roof_type)
      formDataToSend.append('energy_usage', formData.energy_usage)
      formDataToSend.append('budget_range', formData.budget_range)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('subject', 'New Quote Request - Cosmic Renewable Energy')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your quote request! Our team will contact you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          property_type: '',
          roof_type: '',
          energy_usage: '',
          budget_range: '',
          message: ''
        })
      } else {
        setSubmitMessage('Sorry, there was an error submitting your request. Please try again.')
      }
    } catch {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Contact Banner */}
      <section className="py-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Solar Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a personalized quote for your solar installation. Our experts will design 
              a custom solution based on your specific needs and property requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-green-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Submit Your Details</h3>
                      <p className="text-gray-600 text-sm">
                        Fill out our comprehensive form with your property and energy requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Site Assessment</h3>
                      <p className="text-gray-600 text-sm">
                        Our experts will conduct a detailed assessment of your property.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Custom Quote</h3>
                      <p className="text-gray-600 text-sm">
                        Receive a personalized quote with system design and savings projections.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-green-600">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Installation</h3>
                      <p className="text-gray-600 text-sm">
                        Professional installation by our certified technicians.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                          placeholder="Start typing your property address..."
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="property_type" className="block text-sm font-medium text-gray-700 mb-2">
                          Property Type *
                        </label>
                        <select
                          id="property_type"
                          name="property_type"
                          required
                          value={formData.property_type}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                        >
                          <option value="">Select property type</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="roof_type" className="block text-sm font-medium text-gray-700 mb-2">
                          Roof Type *
                        </label>
                        <select
                          id="roof_type"
                          name="roof_type"
                          required
                          value={formData.roof_type}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                        >
                          <option value="">Select roof type</option>
                          <option value="tile">Tile</option>
                          <option value="metal">Metal/Colorbond</option>
                          <option value="flat">Flat</option>
                          <option value="slate">Slate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="energy_usage" className="block text-sm font-medium text-gray-700 mb-2">
                          Average Quarterly Electricity Bill
                        </label>
                        <select
                          id="energy_usage"
                          name="energy_usage"
                          value={formData.energy_usage}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                        >
                          <option value="">Select your bill range</option>
                          <option value="under-300">Under $300</option>
                          <option value="300-600">$300 - $600</option>
                          <option value="600-900">$600 - $900</option>
                          <option value="900-1200">$900 - $1,200</option>
                          <option value="over-1200">Over $1,200</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget_range" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget_range"
                          name="budget_range"
                          value={formData.budget_range}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-15k">$10,000 - $15,000</option>
                          <option value="15k-20k">$15,000 - $20,000</option>
                          <option value="over-20k">Over $20,000</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                        placeholder="Any additional information about your requirements..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting Request...' : 'Get My Free Quote'}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Get a Solar Quote?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Significant Savings</h3>
              <p className="text-gray-600">
                Most customers save 70-90% on their electricity bills with our solar solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Impact</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint and contribute to a cleaner, greener future.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Increase Property Value</h3>
              <p className="text-gray-600">
                Solar installations can increase your property value by up to $6,000 per kW installed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}