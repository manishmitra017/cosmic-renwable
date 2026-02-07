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
      answer: "Our installations include comprehensive warranties: 25-year panel performance warranty, 10-15 year equipment warranty, and 10-year workmanship warranty. We stand behind our work and provide ongoing support throughout the warranty period."
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#0073b9] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0073b9] via-[#0073b9]/90 to-[#0073b9]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <QuestionMarkCircleIcon className="w-5 h-5 text-[#fee000]" />
              <span className="text-white font-semibold text-sm">Got Questions?</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Frequently Asked <span className="text-[#fee000]">Questions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get answers to the most common questions about solar energy, installation,
              and our services. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#efefef] transition-colors focus:outline-none focus:bg-[#efefef]"
                  >
                    <span className="text-lg font-semibold text-[#333333] pr-4">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 text-[#0073b9] transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''}`}>
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
                        <div className="px-6 pb-5 border-t border-gray-200 pt-4">
                          <p className="text-[#666666] leading-relaxed">
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
      <section className="py-16 bg-[#efefef] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0073b9]/10 px-4 py-2 rounded-full mb-6 border border-[#0073b9]/20">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-[#0073b9]" />
              <span className="text-[#0073b9] font-semibold text-sm">Need More Help?</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Still Have <span className="text-[#0073b9]">Questions?</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto mb-8">
              Our solar experts are here to help. Get personalized answers and professional
              guidance for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#fee000] text-[#083941] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#e5ca00] transition-all"
              >
                Contact Our Experts
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/quote"
                className="bg-[#0073b9] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#005a91] transition-all"
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
