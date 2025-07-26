'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionReveal } from '@/components/PageTransition';

export default function ContactHero() {
  const servicesList = [
    'Web Development',
    'App Development',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'CMS & eCommerce',
    'UI/UX Design',
    'Branding & Identity',
    'Digital Marketing',
    'Other',
  ];
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-gradient-to-br from-sky-50 via-fuchsia-50 to-pink-50 dark:from-neutral-900 dark:via-blue-950 dark:to-fuchsia-950">
      {/* Animated background rings and blurry dots */}
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
              width: `${32 + i * 10}px`,
              height: `${32 + i * 10}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 12}%`,
              filter: 'blur(8px)',
            }}
            animate={{
              y: [0, 20 + i * 5, 0],
              x: [0, -10 + i * 3, 0],
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
          />
        ))}
        {/* More animated dots and 3D rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i + 10}
            className="absolute rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 opacity-20"
            style={{
              width: `${60 + i * 32}px`,
              height: `${60 + i * 32}px`,
              left: `${5 + i * 14}%`,
              top: `${10 + i * 13}%`,
              filter: 'blur(12px)',
            }}
            animate={{
              scale: [1, 1.12, 1],
              rotate: [0, 360, 0],
            }}
            transition={{ duration: 18 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
          />
        ))}
        {[...Array(2)].map((_, i) => (
          <motion.svg
            key={i + 20}
            width={320 + i * 120}
            height={320 + i * 120}
            viewBox="0 0 320 320"
            fill="none"
            className="absolute opacity-20"
            style={{
              left: i === 0 ? '-80px' : '70%',
              top: i === 0 ? '60%' : '-60px',
              zIndex: 0,
            }}
            animate={{ rotate: [0, 360, 0] }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: 'linear', delay: i }}
          >
            <ellipse cx="160" cy="160" rx="150" ry="80" stroke="url(#ring-gradient-contact)" strokeWidth="8" />
            <defs>
              <linearGradient id="ring-gradient-contact" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="0.5" stopColor="#a21caf" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </motion.svg>
        ))}
        {/* Strong blur overlay for premium effect */}
        <div className="absolute inset-0 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-2xl z-10" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideInLeft} initial="hidden" animate="visible">
            <SectionReveal>
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-gradient-to-r from-sky-100 via-fuchsia-100 to-pink-100 text-primary border border-primary/20 font-medium text-sm backdrop-blur">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Connect with Vidyonix
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 font-medium">
                Ready to build something extraordinary? Reach out to our team and discover how we can help you achieve your digital ambitions with innovative IT solutions.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: 'Email',
                    content: 'hello@vidyonix.com',
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: 'Phone',
                    content: '+1 (555) 123-4567',
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Address',
                    content: '123 Innovation Drive, Tech Park, San Francisco, CA 94107',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="flex items-start gap-4 shadow-lg p-4 rounded-lg"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-sky-100 via-fuchsia-100 to-pink-100 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </motion.div>

          <motion.div 
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="bg-white/95 dark:bg-neutral-900/90 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 items-center"
          >
            <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Send Us a Message</h2>
            <form className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2 lg:col-span-1">
                <label className="block text-sm font-medium text-primary">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-sky-50 via-fuchsia-50 to-pink-50 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 text-gray-900 dark:text-white font-medium"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2 lg:col-span-1">
                <label className="block text-sm font-medium text-primary">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-sky-50 via-fuchsia-50 to-pink-50 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 text-gray-900 dark:text-white font-medium"
                  placeholder="Your company name"
                />
              </div>
              <div className="flex flex-col gap-2 lg:col-span-1">
                <label className="block text-sm font-medium text-primary">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-sky-50 via-fuchsia-50 to-pink-50 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 text-gray-900 dark:text-white font-medium"
                  placeholder="Your email"
                />
              </div>
              <div className="flex flex-col gap-2 lg:col-span-1">
                <label className="block text-sm font-medium text-primary">Service</label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-sky-50 via-fuchsia-50 to-pink-50 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 text-gray-900 dark:text-white font-medium"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  {servicesList.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 lg:col-span-2">
                <label className="block text-sm font-medium text-primary">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-sky-50 via-fuchsia-50 to-pink-50 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 text-gray-900 dark:text-white font-medium resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white rounded-full px-8 py-3 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 mt-2 lg:col-span-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}