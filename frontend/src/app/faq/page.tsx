'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "How much can I save with solar panels?",
      answer: "Savings vary based on your energy usage, system size, and location. Most customers see 70-90% reduction in their electricity bills. A typical household can save $1,200-$2,500 per year. Our experts will provide you with a detailed savings projection during your consultation."
    },
    {
      question: "How long does solar installation take?",
      answer: "Most residential installations are completed in 1-3 days, depending on system size and complexity. The entire process from initial consultation to grid connection typically takes 4-8 weeks, including permits and approvals."
    },
    {
      question: "What rebates and incentives are available?",
      answer: "Various government rebates and incentives are available, including the Small-scale Renewable Energy Scheme (SRES) and state-specific programs. We help navigate these programs and ensure you receive all eligible benefits, which can reduce your system cost by $3,000-$5,000."
    },
    {
      question: "How long do solar panels last?",
      answer: "Quality solar panels typically last 25-30 years or more. Most panels come with a 25-year performance warranty guaranteeing 80-85% output after 25 years. Our systems are built to provide reliable performance for decades."
    },
    {
      question: "Do solar panels work on cloudy days?",
      answer: "Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 10-25% of peak output). Modern panels are designed to capture diffused sunlight and can still produce meaningful energy even in overcast conditions."
    },
    {
      question: "What happens if there's a power outage?",
      answer: "Standard grid-tied systems shut down during outages for safety reasons. However, if you have a battery storage system, you can continue using stored solar energy during outages. We offer battery solutions for customers who want backup power capability."
    },
    {
      question: "How much maintenance do solar panels require?",
      answer: "Solar panels require minimal maintenance. Regular cleaning (2-4 times per year) and annual inspections are typically sufficient. We offer maintenance packages and monitoring services to ensure optimal performance throughout the system's life."
    },
    {
      question: "Will solar panels work with my roof type?",
      answer: "Solar panels can be installed on most roof types including tile, metal, and flat roofs. Our engineers assess each roof individually to determine the best mounting solution. Age and condition of the roof are more important factors than roof type."
    },
    {
      question: "How much roof space do I need?",
      answer: "A typical residential system requires 20-40 square meters of unshaded roof space. The exact space needed depends on panel efficiency and your energy requirements. Our site assessment will determine the optimal layout for your roof."
    },
    {
      question: "What warranties are included?",
      answer: "Our installations include comprehensive warranties: 25-year panel performance warranty, 10-15 year equipment warranty, and 5-year workmanship guarantee. We stand behind our work and provide ongoing support throughout the warranty period."
    },
    {
      question: "Can I expand my system later?",
      answer: "Yes, most systems can be expanded if you have additional roof space and electrical capacity. We design systems with future expansion in mind when possible. However, it's more cost-effective to install the full system initially."
    },
    {
      question: "How do I monitor my system's performance?",
      answer: "All our systems include monitoring capabilities that allow you to track energy production via smartphone app or web portal. You can see real-time and historical performance data, helping you understand your energy generation and savings."
    }
  ]

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about solar energy, installation, 
              and our services. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-green-600">
                      {openItems.includes(index) ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solar experts are here to help. Get personalized answers and professional 
              guidance for your specific situation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center"
            >
              Contact Our Experts
            </a>
            <a 
              href="/quote" 
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}