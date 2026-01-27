'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// SVG Icon Components
const BookOpenIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const BatteryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
)

const MoonIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const QuestionMarkCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const LanguageIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
  </svg>
)

export default function BatteryGuide() {
  const jargonTerms = [
    {
      term: "kWh (Kilowatt-hour)",
      definition: "The amount of energy your battery can store. Think of it like the size of your fuel tank. A 10kWh battery can power a 1kW appliance for 10 hours."
    },
    {
      term: "DoD (Depth of Discharge)",
      definition: "How much of the battery&apos;s total capacity you can safely use. A 90% DoD on a 10kWh battery means you can use 9kWh before recharging."
    },
    {
      term: "Round-Trip Efficiency",
      definition: "How much energy you get back compared to what you put in. A 90% efficiency means you get 9kWh back for every 10kWh stored."
    },
    {
      term: "Cycle Life",
      definition: "How many times you can charge and discharge before capacity degrades. 6,000 cycles = 16+ years of daily use."
    },
    {
      term: "AC vs DC Coupling",
      definition: "AC-coupled batteries work with existing solar systems. DC-coupled batteries are more efficient but usually need new solar installation."
    },
    {
      term: "UPS (Uninterruptible Power Supply)",
      definition: "Instant backup power during blackouts. No delay between power outage and battery takeover - like having a generator that starts instantly."
    },
    {
      term: "LiFePO4 (Lithium Iron Phosphate)",
      definition: "Safer battery chemistry than standard lithium-ion. No cobalt, more stable, longer-lasting, and won&apos;t overheat."
    },
    {
      term: "EMS (Energy Management System)",
      definition: "Smart software that decides when to store energy, use it, or send it to the grid based on your usage patterns and electricity rates."
    },
    {
      term: "VPP (Virtual Power Plant)",
      definition: "A network of batteries that work together to stabilize the grid. You might get paid for letting your battery help during peak demand."
    },
    {
      term: "Peak/Off-Peak Rates",
      definition: "Electricity costs more during peak times (usually 2-8pm). Batteries let you use stored cheap off-peak power during expensive peak times."
    }
  ]

  const howItWorks = [
    {
      icon: SunIcon,
      title: "1. Solar Panels Generate Power",
      description: "During the day, your solar panels convert sunlight into DC electricity. This power first goes to your home to run appliances.",
      bgColor: "bg-[#FFE500]/20",
      iconColor: "text-[#FFE500]"
    },
    {
      icon: BatteryIcon,
      title: "2. Excess Power Gets Stored",
      description: "Any extra solar power your home doesn&apos;t use immediately gets stored in your battery for later. This is when electricity is free!",
      bgColor: "bg-[#0072CE]/20",
      iconColor: "text-[#0072CE]"
    },
    {
      icon: MoonIcon,
      title: "3. Battery Powers Your Home at Night",
      description: "When the sun goes down or on cloudy days, your battery automatically powers your home instead of drawing expensive grid electricity.",
      bgColor: "bg-purple-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: ShieldCheckIcon,
      title: "4. Blackout Protection",
      description: "If the grid goes down, your battery instantly takes over (with UPS feature) - keeping lights, fridge, and essential appliances running.",
      bgColor: "bg-green-500/20",
      iconColor: "text-green-400"
    }
  ]

  const faqs = [
    {
      question: "How much does a solar battery cost in Australia?",
      answer: "With government rebates, battery systems start from around $4,000-$6,000 for a 5kWh system. A 10kWh system typically costs $8,000-$12,000 after rebates. The Cheaper Home Batteries program can reduce costs by up to $3,500."
    },
    {
      question: "Will a battery save me money?",
      answer: "Yes! Most households save 70-90% on electricity bills. If you&apos;re paying $500+/quarter for electricity, a battery typically pays for itself in 4-7 years, then provides 15+ years of free power."
    },
    {
      question: "What size battery do I need?",
      answer: "For an average household: 5kWh covers essentials (fridge, lights, TV), 10kWh powers most of your home, 13.5kWh+ provides full energy independence. Check your evening electricity usage (typically 5-8pm) to determine the right size."
    },
    {
      question: "Can I add a battery to my existing solar system?",
      answer: "Absolutely! AC-coupled batteries work with any existing solar system. We&apos;ll assess your current setup and recommend the best compatible battery."
    },
    {
      question: "How long do solar batteries last?",
      answer: "Quality batteries like Tesla Powerwall, Alpha ESS, and others last 10-15 years with warranties covering 10 years or 6,000-10,000 cycles. That&apos;s roughly 16+ years of daily use."
    },
    {
      question: "Are solar batteries safe?",
      answer: "Modern lithium batteries (especially LiFePO4 chemistry) are extremely safe. They have multiple safety features: thermal protection, overcharge prevention, and fire-resistant casings. We only install batteries meeting Australian safety standards."
    },
    {
      question: "What happens during a blackout?",
      answer: "With backup-enabled batteries, your home switches to battery power instantly (0.02 seconds with UPS). You won&apos;t even notice the power went out! Essential circuits stay powered for hours or days depending on battery size and usage."
    },
    {
      question: "Can I go completely off-grid?",
      answer: "Technically yes, but most people stay grid-connected for backup. A typical off-grid system needs 15-30kWh+ of batteries and 10kW+ solar. For most households, a grid-connected battery system is more cost-effective."
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
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#FFE500]/20">
              <BookOpenIcon className="w-5 h-5 text-[#FFE500]" />
              <span className="text-[#FFE500] font-semibold text-sm">Complete Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Solar Battery 101: <span className="text-gradient-solar">Complete Buyer&apos;s Guide</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Everything you need to know about solar batteries - explained simply
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jargon Buster Section */}
      <section className="py-16 bg-gradient-to-b from-[#0072CE] to-[#0066BB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#0072CE]/20">
                <LanguageIcon className="w-5 h-5 text-[#0072CE]" />
                <span className="text-[#0072CE] font-semibold text-sm">Terminology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Battery <span className="text-gradient-energy">Jargon Buster</span>
              </h2>
              <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
                No more confusion! Here&apos;s what all those technical terms actually mean:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jargonTerms.map((item, index) => (
                <motion.div
                  key={index}
                  className="card-cosmic p-6 hover:border-[#FFE500]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h3 className="text-xl font-bold text-[#FFE500] mb-3">{item.term}</h3>
                  <p className="text-[#b0b0b0] leading-relaxed">{item.definition}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Batteries Work Section */}
      <section className="py-16 bg-[#0072CE] relative overflow-hidden">
        <div className="absolute inset-0 star-field opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#FFE500]/20">
                <BoltIcon className="w-5 h-5 text-[#FFE500]" />
                <span className="text-[#FFE500] font-semibold text-sm">How It Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                How Solar Batteries <span className="text-gradient-solar">Actually Work</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  className="card-cosmic p-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${step.bgColor}`}
                    >
                      <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-[#b0b0b0] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-gradient-to-b from-[#0072CE] to-[#0066BB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#0072CE]/20">
                <QuestionMarkCircleIcon className="w-5 h-5 text-[#0072CE]" />
                <span className="text-[#0072CE] font-semibold text-sm">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Most Common <span className="text-gradient-energy">Questions Answered</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="card-cosmic p-6 hover:border-[#FFE500]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-[#b0b0b0] leading-relaxed">{faq.answer}</p>
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#FFE500]/20">
              <BoltIcon className="w-5 h-5 text-[#FFE500]" />
              <span className="text-[#FFE500] font-semibold text-sm">Get Started</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Get Your <span className="text-gradient-solar">Solar Battery?</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] mb-8 max-w-2xl mx-auto">
              Get a free personalized quote with government rebate calculations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="btn-solar px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="btn-energy px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
