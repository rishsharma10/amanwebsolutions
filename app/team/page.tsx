"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/home/CTA'
import Link from 'next/link'
import profile from '@/app/assets/logo/logoname.png'

type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
  linkedin?: string
}

const team: TeamMember[] = [
  {
    name: 'Isha Patel',
    role: 'Frontend Engineer',
    image: profile.src,
    bio: 'Crafts performant, accessible UIs with React, Next.js, and modern tooling.'
  },
  {
    name: 'Rohit Kumar',
    role: 'Backend Engineer',
    image: profile.src,
    bio: 'Designs secure, scalable APIs and data pipelines with Node.js and SQL/NoSQL.'
  },
  {
    name: 'Simran Kaur',
    role: 'Shopify Developer',
    image: profile.src,
    bio: 'Builds high-converting Shopify storefronts, themes, and custom apps.'
  },
  {
    name: 'Arvind Nair',
    role: 'WordPress Developer',
    image: profile.src,
    bio: 'Delivers fast, secure WordPress sites with custom themes and plugins.'
  },
  {
    name: 'Vikas Gupta',
    role: 'Mobile Developer',
    image: profile.src,
    bio: 'Creates smooth iOS/Android apps with React Native and native integrations.'
  },
  {
    name: 'Ananya Singh',
    role: 'SEO Specialist',
    image: profile.src,
    bio: 'Improves organic reach with technical SEO, on-page optimization, and content strategy.'
  }
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
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 opacity-20"
              style={{
                width: `${28 + i * 8}px`,
                height: `${28 + i * 8}px`,
                left: `${12 + i * 16}%`,
                top: `${24 + i * 10}%`,
                filter: 'blur(8px)',
              }}
              animate={{ y: [0, 20 + i * 5, 0], x: [0, -10 + i * 3, 0] }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
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
              Team
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Meet the People Behind the Product
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              A multidisciplinary team delivering reliable, scalable, and delightful software.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container relative z-10 mx-auto px-4 pb-16 -mt-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1 + index * 0.06, duration: 0.7, type: 'spring' }}
              className="relative flex flex-col items-center text-center rounded-3xl bg-white/95 dark:bg-neutral-100/95 shadow-xl hover:shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 max-w-xl mx-auto p-6"
              style={{ minWidth: 320, minHeight: 360 }}
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg -mt-2">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-bold bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                {member.name}
              </h3>
              <div className="text-sm text-gray-600">{member.role}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-800 max-w-xs">{member.bio}</p>
              <div className="mt-3">
                {member.linkedin && (
                  <Link href={member.linkedin} target="_blank" className="text-sky-600 hover:text-pink-500 text-sm font-semibold">LinkedIn</Link>
                )}
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