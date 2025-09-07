'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';

const milestones = [
  {
    year: '2018',
    title: 'Vidhyonix Founded',
    description: 'Our journey began with a vision to empower businesses through innovative technology and digital transformation.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad1)" /><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#f472b6"/></linearGradient></defs></svg>
    ),
  },
  {
    year: '2019',
    title: 'First Enterprise Project',
    description: 'Delivered our first large-scale web platform for a global client, setting new standards for quality and performance.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad2)" /><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#a21caf"/><stop offset="1" stopColor="#f472b6"/></linearGradient></defs></svg>
    ),
  },
  {
    year: '2021',
    title: 'Mobile & Cloud Expansion',
    description: 'Expanded our expertise to mobile app development and cloud solutions, helping clients scale globally.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad3)" /><path d="M16 12v4m0 4h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad3" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#a21caf"/></linearGradient></defs></svg>
    ),
  },
  {
    year: '2023',
    title: 'AI & DevOps Leadership',
    description: 'Launched advanced AI, DevOps, and automation services, driving innovation for our partners worldwide.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad4)" /><path d="M16 8l4 8h-8l4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad4" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
    ),
  },
];

export default function Journey() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* Light pink overlay for alternating section color */}
      <div className="absolute inset-0 bg-pink 100/30 dark:bg-fuchsia-900/40 pointer-events-none z-0" />
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
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Our Journey</h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-12 md:gap-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40, rotateY: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.8, type: 'spring' }}
              className="relative flex flex-col items-center text-center bg-transparent rounded-3xl p-0 shadow-none border-0 min-w-[260px] max-w-xs mx-auto group hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {/* Accent orb */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 opacity-30 blur-2xl z-10 pointer-events-none" />
              {/* Glassmorphism card */}
              <div className="rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-xl border-2 border-primary/20 p-8 flex flex-col gap-4 relative z-20 w-full">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 shadow-lg">{m.icon}</div>
                <div className="text-lg font-bold mb-1 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">{m.year}</div>
                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base mb-2 line-clamp-3">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}