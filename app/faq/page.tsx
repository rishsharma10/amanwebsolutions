"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/home/CTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What services do you provide?',
    a: 'We design and develop web and mobile applications, build backend APIs, implement DevOps and CI/CD, and manage cloud infrastructure across AWS, Azure, and GCP.'
  },
  {
    q: 'How do you choose the technology stack?',
    a: 'We select frameworks based on the product goals, team expertise, scalability needs, and time-to-market. Common stacks include Next.js/React on the frontend and Node.js/NestJS on the backend.'
  },
  {
    q: 'What is a typical project timeline?',
    a: 'Discovery and design take 1–3 weeks, an MVP usually takes 6–10 weeks depending on scope, and subsequent iterations follow a 2-week sprint cadence.'
  },
  {
    q: 'How do you handle security and compliance?',
    a: 'We follow OWASP best practices, apply secure coding guidelines, enforce least-privilege access, and can support SOC2-ready workflows with audit logs, backups, and encryption in transit and at rest.'
  },
  {
    q: 'Do you offer maintenance and support?',
    a: 'Yes. We provide ongoing maintenance, performance monitoring, uptime SLAs, and feature iteration packages tailored to your roadmap.'
  },
  {
    q: 'Who owns the IP and source code?',
    a: 'You own 100% of the IP and source code upon project completion and final payment unless otherwise agreed in the contract.'
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
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              Find quick answers to common questions about our process, technology, security, and how we partner to deliver results.
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
          className="max-w-3xl mx-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur shadow-xl rounded-2xl border border-border/50 p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-base md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-200">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </main>

      <CTA />
      <Footer />
    </>
  )
}

export default page