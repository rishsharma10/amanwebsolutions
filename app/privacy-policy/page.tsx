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
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains what data we collect, how we use it, and your rights.
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
            <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              We collect information to deliver and improve our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li><span className="font-medium">Contact details</span> (name, email, phone) when you reach out or request a quote.</li>
              <li><span className="font-medium">Usage data</span> (pages visited, device and browser info, approximate location) for analytics and performance.</li>
              <li><span className="font-medium">Technical logs</span> (IP address, request metadata) to maintain security and diagnose issues.</li>
              <li><span className="font-medium">Cookies</span> and similar technologies to remember preferences and measure effectiveness. You can control cookies in your browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li>Provide, operate, and maintain our websites and services.</li>
              <li>Improve user experience, security, and performance.</li>
              <li>Communicate with you about inquiries, quotes, and project updates.</li>
              <li>Conduct analytics to understand usage patterns and enhance features.</li>
              <li>Comply with legal obligations and enforce agreements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">3. Sharing and Disclosure</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              We do not sell your personal information. We may share limited data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li>With <span className="font-medium">service providers</span> (e.g., hosting, analytics) under contractual confidentiality.</li>
              <li>For <span className="font-medium">legal reasons</span> when required by law, regulation, or to protect rights and safety.</li>
              <li>During <span className="font-medium">business transfers</span> (merger, acquisition) with appropriate safeguards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We retain information only as long as necessary for the purposes outlined in this policy, to comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Security</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We implement industry-standard safeguards including encryption in transit, access controls, and monitoring. No method of transmission or storage is 100% secure; we continuously improve our protections.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">6. International Transfers</h2>
            <p className="text-gray-700 dark:text-gray-200">
              If data is processed outside your country, we use appropriate safeguards and contractual protections to ensure an adequate level of privacy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li>Access, correct, or delete personal information.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Data portability where applicable.</li>
              <li>Withdraw consent for optional processing (e.g., marketing) at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child provided information, please contact us to remove it.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">9. Third‑Party Links</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Our site may contain links to external websites. We are not responsible for the privacy practices of third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">10. Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We may update this policy from time to time. Changes take effect when posted on this page. Significant updates will be communicated where appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-200">
              If you have questions or requests related to this Privacy Policy, contact us at
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