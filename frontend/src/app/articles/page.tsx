'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const articles = [
  {
    slug: 'federal-battery-rebate-changes-2025',
    title: 'Federal Battery Rebate Changes: $7.2 Billion Expansion with New Rules',
    description: 'The Australian Government has expanded the Cheaper Home Batteries Program from $2.3bn to $7.2bn, with new tiered rebates for larger batteries starting May 2026.',
    image: '/batteryImage3.jpg',
    date: 'December 2025',
    category: 'Government Rebates',
    featured: true
  }
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Banner */}
      <section className="py-3 sm:py-4 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hidden sm:flex items-center justify-center gap-4 md:gap-6">
              <div className="text-white font-bold text-base md:text-xl flex items-center gap-2">
                <span>Stay Informed on Solar & Battery News</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:1300090984"
                  className="bg-white text-orange-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-orange-50 transition-all shadow-lg flex items-center gap-2 hover:scale-105"
                >
                  Call 1300 09 09 84
                </a>
              </div>
            </div>
            <div className="sm:hidden text-white font-bold text-sm">
              Latest Solar & Battery Industry News
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6">
              Solar & Battery Articles
            </h1>
            <p className="text-lg sm:text-xl text-green-700 max-w-2xl mx-auto">
              Stay updated with the latest government rebates, industry news, and important changes
              affecting solar and battery installations in Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {articles.filter(a => a.featured).map((article, index) => (
        <section key={article.slug} className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
                  Featured Article
                </span>
              </div>
              <Link href={`/articles/${article.slug}`} className="block group">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-96">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-600/50 md:block hidden"></div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{article.category}</span>
                        <span className="text-green-200">{article.date}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 group-hover:text-green-200 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-green-100 text-lg mb-6">
                        {article.description}
                      </p>
                      <div className="flex items-center text-white font-semibold group-hover:gap-4 gap-2 transition-all">
                        Read Full Article
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-600">
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
                <Link href={`/articles/${article.slug}`} className="block group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-green-600 font-medium mb-2">{article.date}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                      <div className="flex items-center text-green-600 font-medium group-hover:gap-3 gap-1 transition-all">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
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
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Advantage of the Rebates?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Don't miss out on the government battery rebates. Contact us today for a free consultation
              and find out how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300090984"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
