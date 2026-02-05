'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const NewspaperIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
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

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const articles = [
  {
    slug: 'federal-battery-rebate-changes-2025',
    title: 'Federal Battery Rebate Changes: $7.2 Billion Expansion with New Rules',
    description: 'The Australian Government has expanded the Cheaper Home Batteries Program from $2.3bn to $7.2bn, with new tiered rebates for larger batteries starting May 2026.',
    image: '/batteryImage3.jpg',
    date: 'December 2025',
    category: 'Government Rebates',
    featured: true
  },
  {
    slug: 'cheaper-home-batteries-program',
    title: '$2.3 Billion Cheaper Home Batteries Program Now Live',
    description: 'Government launches massive battery rebate program offering up to 30% discounts on home battery systems. Learn how to take advantage of this unprecedented opportunity.',
    image: '/batteryImage2.jpg',
    date: 'August 2025',
    category: 'Government Rebates',
    featured: false
  },
  {
    slug: 'maximize-government-benefits',
    title: 'How Solar Households Can Maximize Government Benefits',
    description: 'Complete guide to accessing federal and state solar incentives, rebates, and the new battery program. Everything you need to know to get the best value.',
    image: '/solarroof8.jpg',
    date: 'August 2025',
    category: 'Guides',
    featured: false
  },
  {
    slug: 'battery-storage-revolution',
    title: 'Battery Storage Revolution: 5kWh to 100kWh Systems Eligible',
    description: 'New program covers batteries from small residential to large commercial installations with CEC approval. Find out if your system qualifies.',
    image: '/batteryImage1.jpg',
    date: 'August 2025',
    category: 'Industry News',
    featured: false
  }
]

export default function ArticlesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0073b9]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0073b9] via-[#0073b9]/90 to-[#0073b9]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <NewspaperIcon className="w-5 h-5 text-[#fee000]" />
              <span className="text-white font-semibold text-sm">Solar & Battery News</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Latest <span className="text-[#fee000]">Articles</span> &{' '}
              <span className="text-white">Updates</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Stay informed with the latest government rebates, industry news, and important changes
              affecting solar and battery installations in Australia.
            </p>

            <a
              href="tel:1300090984"
              className="inline-flex items-center gap-2 bg-[#fee000] text-[#083941] px-6 py-3 rounded-lg font-semibold hover:bg-[#e5ca00] transition-all"
            >
              <PhoneIcon className="w-5 h-5" />
              Call 1300 09 09 84
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {articles.filter(a => a.featured).map((article) => (
        <section key={article.slug} className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 bg-[#fee000]/20 px-4 py-2 rounded-full border border-[#fee000]/30">
                  <StarIcon className="w-4 h-4 text-[#0073b9]" />
                  <span className="text-[#0073b9] font-semibold text-sm">Featured Article</span>
                </span>
              </div>

              <Link href={`/articles/${article.slug}`} className="block group">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:border-[#0073b9]/40 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-96">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80 md:block hidden"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent md:hidden"></div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#0073b9]/10 px-3 py-1 rounded-full text-sm text-[#0073b9] border border-[#0073b9]/20">{article.category}</span>
                        <span className="text-[#666666]">{article.date}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 group-hover:text-[#0073b9] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-[#666666] text-lg mb-6">
                        {article.description}
                      </p>
                      <div className="flex items-center text-[#0073b9] font-semibold group-hover:gap-4 gap-2 transition-all">
                        Read Full Article
                        <ArrowRightIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* All Articles Grid */}
      <section className="py-16 bg-[#efefef] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#333333] mb-4">
              All <span className="text-[#0073b9]">Articles</span>
            </h2>
            <p className="text-xl text-[#666666]">
              Important updates for Australian solar and battery customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={`/articles/${article.slug}`} className="block group h-full">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:border-[#0073b9]/30 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-[#0073b9] border border-[#0073b9]/20">
                          {article.category}
                        </span>
                      </div>
                      {article.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-[#fee000] px-2 py-1 rounded-full">
                            <StarIcon className="w-4 h-4 text-[#083941]" />
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-sm text-[#0073b9] font-medium mb-2">{article.date}</div>
                      <h3 className="text-xl font-semibold text-[#333333] mb-3 group-hover:text-[#0073b9] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-[#666666] mb-4 line-clamp-3 flex-1">{article.description}</p>
                      <div className="flex items-center text-[#0073b9] font-medium group-hover:gap-3 gap-1 transition-all">
                        Read More
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0073b9] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <BoltIcon className="w-5 h-5 text-[#fee000]" />
              <span className="text-white font-semibold text-sm">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Take Advantage of the{' '}
              <span className="text-[#fee000]">Rebates?</span>
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don&apos;t miss out on the government battery rebates. Contact us today for a free consultation
              and find out how much you can save.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-[#fee000] text-[#083941] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#e5ca00] transition-all"
              >
                Get Free Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="bg-white text-[#0073b9] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
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
