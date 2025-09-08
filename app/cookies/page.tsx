"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/home/CTA'

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
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Cookies Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              This policy explains what cookies are, how we use them, and how you can manage your preferences.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container relative z-10 mx-auto px-4 pb-16 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur shadow-xl rounded-2xl border border-border/50 p-6 md:p-8 space-y-6"
        >
          <p className="text-sm text-muted-foreground">Last updated: 2025-09-08</p>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">1. What Are Cookies?</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Cookies are small text files stored on your device by your browser. They help websites remember your actions and preferences over time (such as login, language, and other settings), and they enable analytics and security features.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li><span className="font-medium">Strictly necessary cookies</span>: Required for core site features (security, forms, navigation).</li>
              <li><span className="font-medium">Preference cookies</span>: Remember settings such as language and theme.</li>
              <li><span className="font-medium">Analytics cookies</span>: Help us understand site usage and improve performance.</li>
              <li><span className="font-medium">Marketing cookies</span>: Used to deliver relevant content and measure campaign effectiveness (only if enabled).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">3. How We Use Cookies</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We use cookies to keep you signed in, remember preferences, protect against fraud, measure how our site is used, and improve features. Where required by law, we request your consent before setting non-essential cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Managing Your Preferences</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              You can control and delete cookies in your browser settings. Most browsers allow you to block cookies or receive a warning before a cookie is stored. Disabling certain cookies may affect site functionality.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li>Clear existing cookies via your browser’s privacy settings.</li>
              <li>Block third-party cookies or all cookies if desired.</li>
              <li>Use private/incognito mode to limit cookie storage during a session.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Third‑Party Cookies</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Some cookies may be placed by third parties providing services such as analytics, video embeds, or payment processing. We do not control these cookies; please review the third parties’ policies for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Cookie lifetimes vary. Session cookies expire when you close your browser, while persistent cookies may remain for a set period unless you delete them earlier.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We may update this Cookies Policy from time to time. Changes take effect when posted on this page. Where appropriate, we will notify you of significant updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Questions about this Cookies Policy? Contact us at
              {" "}
              <a href="mailto:info@vidhyonix.com" className="text-sky-600 hover:underline">info@vidhyonix.com</a>.
            </p>
          </section>
        </motion.div>
      </main>

      <CTA />
      <Footer />
    </>
  )
}

export default page