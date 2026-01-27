'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// SVG Icon Components
const QuestionMarkCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
)

const ChevronDownIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

const ChevronRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const ChatBubbleLeftRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

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
    <div className="cosmic-bg">
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
              <QuestionMarkCircleIcon className="w-5 h-5 text-[#FFE500]" />
              <span className="text-[#FFE500] font-semibold text-sm">Got Questions?</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Frequently Asked <span className="text-gradient-solar">Questions</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Get answers to the most common questions about solar energy, installation,
              and our services. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-[#0072CE] to-[#0066BB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="card-cosmic overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/5"
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 text-[#FFE500] transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''}`}>
                      <ChevronDownIcon className="w-6 h-6" />
                    </span>
                  </button>
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 border-t border-white/10 pt-4">
                          <p className="text-[#b0b0b0] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0072CE] via-[#005BB5] to-[#0072CE] relative overflow-hidden border-t border-[#FFE500]/20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFE500]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0072CE]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#0072CE]/20">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-[#0072CE]" />
              <span className="text-[#0072CE] font-semibold text-sm">Need More Help?</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have <span className="text-gradient-energy">Questions?</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto mb-8">
              Our solar experts are here to help. Get personalized answers and professional
              guidance for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-solar px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Contact Our Experts
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/quote"
                className="btn-energy px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
