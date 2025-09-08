"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/home/CTA'
import Link from 'next/link'

type CaseStudy = {
  title: string
  summary: string
  image: string
  industry: string
  tech: string[]
  impact: string
}

const studies: CaseStudy[] = [
  {
    title: 'E‑commerce Replatform with Next.js',
    summary: 'Migrated legacy storefront to a headless Next.js stack with edge caching and optimized product search.',
    image: 'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    industry: 'Retail',
    tech: ['Next.js', 'Node.js', 'Redis', 'Vercel'],
    impact: '+38% conversion, -52% TTFB'
  },
  {
    title: 'FinTech Mobile App Acceleration',
    summary: 'Built a secure React Native app with biometric auth, real-time notifications, and offline-first design.',
    image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    industry: 'Finance',
    tech: ['React Native', 'NestJS', 'PostgreSQL', 'AWS'],
    impact: '99.95% uptime, 2.1s median load'
  },
  {
    title: 'SaaS Analytics Platform',
    summary: 'Delivered a multi-tenant analytics dashboard with role-based access and column-level security.',
    image: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    industry: 'SaaS',
    tech: ['Next.js', 'NestJS', 'ClickHouse', 'Tailwind'],
    impact: 'Sub‑second queries on 1B+ rows'
  },
  {
    title: 'Healthcare Patient Portal',
    summary: 'Implemented HIPAA-conscious portal with secure messaging, scheduling, and consent workflows.',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    industry: 'Healthcare',
    tech: ['Next.js', 'Keycloak', 'MongoDB', 'Kubernetes'],
    impact: '-30% support tickets, +22% retention'
  },
  {
    title: 'Logistics Route Optimization',
    summary: 'Built dispatch tooling with geocoding, ETA prediction, and automated route recompute.',
    image: 'https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    industry: 'Logistics',
    tech: ['Next.js', 'FastAPI', 'PostGIS', 'RabbitMQ'],
    impact: '-18% fuel costs, -25% delivery time variance'
  },
  {
    title: 'EdTech Live Classroom',
    summary: 'Low-latency classroom with recording, quizzes, and analytics for cohort-based courses.',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    industry: 'Education',
    tech: ['Next.js', 'WebRTC', 'Redis', 'Prisma'],
    impact: '+41% session time, 4.8★ CSAT'
  },
]

const page = () => {
  return (
    <>
      <Header />
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
        {/* Animated background rings and blurry dots (aligned with other pages) */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-400/20 blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-400/20 blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 opacity-20"
              style={{
                width: `${28 + i * 10}px`,
                height: `${28 + i * 10}px`,
                left: `${10 + i * 15}%`,
                top: `${18 + i * 12}%`,
                filter: 'blur(8px)',
              }}
              animate={{ y: [0, 20 + i * 5, 0], x: [0, -10 + i * 3, 0] }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/80 text-primary border border-primary/20 font-semibold text-sm tracking-wide shadow-md backdrop-blur">
              Work
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              Real outcomes from real projects. Explore how we ship scalable products that move the metrics that matter.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container relative z-10 mx-auto px-4 pb-16 -mt-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {studies.map((cs, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.06, duration: 0.7, type: 'spring' }}
              viewport={{ once: true, margin: '-80px' }}
              className="relative flex flex-col rounded-3xl bg-white/95 dark:bg-neutral-100/95 shadow-xl hover:shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 max-w-xl mx-auto"
              style={{ minWidth: 340, minHeight: 360 }}
            >
              <div className="relative w-full h-44 overflow-hidden">
                <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 shadow">{cs.industry}</span>
                </div>
              </div>
              <div className="relative z-10 flex-1 flex flex-col p-5 gap-2">
                <h2 className="text-lg font-bold mb-1 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                  {cs.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-800 text-sm mb-1">{cs.summary}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {cs.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                  ))}
                </div>
                <div className="mt-3 text-sm font-semibold text-sky-700">{cs.impact}</div>
                <div className="mt-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-pink-500 transition-colors">
                    Discuss a similar project
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      <CTA />
      <Footer />
    </>
  )
}

export default page