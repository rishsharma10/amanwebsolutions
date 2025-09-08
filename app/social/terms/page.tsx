'use client'

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
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              Please read these Terms carefully. By accessing or using our services, you agree to be bound by them.
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
            <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-200">
              By accessing or using our website and services, you agree to these Terms & Conditions and our Privacy and Cookies Policies. If you do not agree, please discontinue use.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">2. Services</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We provide software consulting and development services including web, mobile, backend, cloud, and related professional services. Specific deliverables, timelines, and fees are defined in project agreements or statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">3. Accounts & Responsibility</h2>
            <p className="text-gray-700 dark:text-gray-200">
              You are responsible for maintaining the confidentiality of any account credentials and for all activities under your account. Notify us immediately of any unauthorized use or security incident.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Fees & Payment</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Fees, invoicing, and payment schedules are defined in the relevant agreement. Late payments may incur charges and may suspend delivery until resolved.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Unless otherwise agreed in writing, you own the final deliverables and IP upon full payment. We retain ownership of pre‑existing materials, tools, and know‑how used during delivery, licensed for use with the deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Confidentiality</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Both parties agree to keep confidential information private and use it only for the purpose of performing under these Terms or a related agreement, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Third‑Party Services</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Our services may integrate third‑party tools and platforms subject to their terms. We are not responsible for third‑party content, policies, or availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Warranties & Disclaimers</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Services are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non‑infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">9. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-200">
              To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from or related to your use of the services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">10. Indemnification</h2>
            <p className="text-gray-700 dark:text-gray-200">
              You agree to indemnify and hold us harmless from claims, damages, liabilities, and expenses arising from your use of the services or breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">11. Termination</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We may suspend or terminate access to services for breach or unlawful use. Provisions that by their nature should survive termination will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">12. Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-200">
              These Terms are governed by applicable laws of your and our operating jurisdictions, without regard to conflict of law principles. Disputes will be resolved in competent courts of the applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">13. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We may update these Terms from time to time. Changes take effect when posted on this page. Continued use after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Contact & Support</h2>
            <p className="text-gray-700 dark:text-gray-200">
              For questions about these Terms or for support, please contact us at
              {' '}
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