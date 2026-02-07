"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/home/CTA'

const CookiesPage = () => {
  return (
    <>
      <Header />
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
        {/* Animated background rings and blurry dots */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-cyan/10 blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-violet/10 blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-sm tracking-wide backdrop-blur-md">
              LEGAL DOCUMENTATION
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 ai-gradient-text pb-2">
              Cookie Architecture
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              This policy explains how we use cookies and similar technologies to recognize you when you visit our website, and your rights to control our use of them.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container relative z-10 mx-auto px-4 pb-24 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 rounded-3xl space-y-12"
        >
          <div className="flex items-center justify-between border-b border-white/5 pb-8">
            <p className="text-sm text-slate-500 uppercase tracking-widest">Last updated: 2025-09-08</p>
            <div className="h-2 w-24 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">01.</span> What Are Cookies?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">02.</span> Types of Cookies We Use
            </h2>
            <ul className="grid gap-3 pt-2">
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Strictly necessary cookies</strong>: Required for core site features (security, forms, navigation).</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Preference cookies</strong>: Remember settings such as language and theme.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Analytics cookies</strong>: Help us understand site usage and improve performance.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Marketing cookies</strong>: Used to deliver relevant content and measure campaign effectiveness (only if enabled).</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">03.</span> How We Use Cookies
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We use cookies to keep you signed in, remember preferences, protect against fraud, measure how our site is used, and improve features. Where required by law, we request your consent before setting non-essential cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">04.</span> Managing Your Preferences
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              You can control and delete cookies in your browser settings. Most browsers allow you to block cookies or receive a warning before a cookie is stored.
            </p>
            <ul className="grid gap-3">
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span>Clear existing cookies via your browser’s privacy settings.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span>Block third-party cookies or all cookies if desired.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span>Use private/incognito mode to limit cookie storage during a session.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">05.</span> Changes to This Policy
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We may update this Cookies Policy from time to time. Changes take effect when posted on this page. Where appropriate, we will notify you of significant updates.
            </p>
          </section>

          <div className="border-t border-white/5 pt-8 mt-12">
            <h3 className="text-lg font-bold text-white mb-2">Questions?</h3>
            <p className="text-slate-400">
              If you have any questions about our use of cookies, please contact us at <a href="mailto:info@vidhyonix.com" className="text-brand-cyan hover:underline">info@vidhyonix.com</a>.
            </p>
          </div>
        </motion.div>
      </main>

      <CTA />
      <Footer />
    </>
  )
}

export default CookiesPage