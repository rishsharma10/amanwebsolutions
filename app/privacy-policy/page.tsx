"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/home/CTA'

const PrivacyPage = () => {
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
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains what data we collect, how we use it, and your rights in the digital ecosystem.
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
              <span className="text-brand-cyan">01.</span> Information We Collect
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We collect information to deliver and improve our services:
            </p>
            <ul className="grid gap-3 pt-2">
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Contact details</strong> (name, email, phone) when you reach out or request a quote.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Usage data</strong> (pages visited, device and browser info, approximate location) for analytics and performance.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Technical logs</strong> (IP address, request metadata) to maintain security and diagnose issues.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Cookies</strong> and similar technologies to remember preferences and measure effectiveness.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">02.</span> How We Use Information
            </h2>
            <ul className="grid gap-3 pt-2">
              {[
                "Provide, operate, and maintain our websites and services.",
                "Improve user experience, security, and performance.",
                "Communicate with you about inquiries, quotes, and project updates.",
                "Conduct analytics to understand usage patterns and enhance features.",
                "Comply with legal obligations and enforce agreements."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">03.</span> Sharing and Disclosure
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We do not sell your personal information. We may share limited data with:
            </p>
            <ul className="grid gap-3 pt-2">
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Service providers</strong> (e.g., hosting, analytics) under contractual confidentiality.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Legal authorities</strong> when required by law, regulation, or to protect rights and safety.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                <span><strong className="text-white">Business transfers</strong> (merger, acquisition) with appropriate safeguards.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">04.</span> Data Retention & Security
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We retain information only as long as necessary. We implement industry-standard safeguards including encryption in transit, access controls, and monitoring. No method of transmission or storage is 100% secure, but we prioritize the protection of your digital footprint.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
              <span className="text-brand-cyan">05.</span> Your Rights
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal information. Contact us to exercise these rights.
            </p>
          </section>

          <div className="border-t border-white/5 pt-8 mt-12">
            <h3 className="text-lg font-bold text-white mb-2">Privacy Concerns?</h3>
            <p className="text-slate-400">
              If you have questions about this Privacy Policy, please contact our Data Protection Officer at <a href="mailto:info@vidhyonix.com" className="text-brand-cyan hover:underline">info@vidhyonix.com</a>.
            </p>
          </div>
        </motion.div>
      </main>

      <CTA />
      <Footer />
    </>
  )
}

export default PrivacyPage