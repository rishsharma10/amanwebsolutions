'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';

export default function Values() {
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace emerging technologies and creative thinking to deliver solutions that set new industry standards.',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad1)" /><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#f472b6"/></linearGradient></defs></svg>
      ),
      color: 'from-sky-400 via-fuchsia-400 to-pink-400',
    },
    {
      title: 'Integrity',
      description: 'We act with honesty, transparency, and accountability in every client relationship and project.',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad2)" /><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#a21caf"/><stop offset="1" stopColor="#f472b6"/></linearGradient></defs></svg>
      ),
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      title: 'Collaboration',
      description: 'We believe the best results come from working closely with our clients and each other as one team.',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad3)" /><path d="M16 12v4m0 4h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad3" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#a21caf"/></linearGradient></defs></svg>
      ),
      color: 'from-sky-400 to-fuchsia-500',
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in every solution, exceeding expectations at every step.',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad4)" /><path d="M16 8l4 8h-8l4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad4" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6"/><stop offset="1" stopColor="#38bdf8"/></linearGradient></defs></svg>
      ),
      color: 'from-pink-400 to-sky-400',
    },
    {
      title: 'Customer Focus',
      description: 'We put our clients at the center of everything we do, building lasting partnerships and delivering real value.',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad5)" /><path d="M16 12a4 4 0 100 8 4 4 0 000-8z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad5" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6"/><stop offset="1" stopColor="#a21caf"/></linearGradient></defs></svg>
      ),
      color: 'from-pink-400 to-fuchsia-600',
    },
    {
      title: 'Growth Mindset',
      description: 'We continuously learn, adapt, and improve to stay ahead in a rapidly evolving digital world.',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="url(#grad6)" /><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="grad6" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#a21caf"/></linearGradient></defs></svg>
      ),
      color: 'from-sky-400 to-fuchsia-600',
    },
  ];

  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* Animated background rings and blurry dots */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-40/20 blur-[100px]"
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
                    initial={{ opacity: 0, y: 40, rotateY: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.7, type: 'spring' }}
              className={`relative flex flex-col items-center text-center rounded-3xl p-0 bg-transparent shadow-none border-0 group hover:scale-105 hover:shadow-2xl transition-all duration-300`}
              style={{ minHeight: 340 }}
            >
              {/* Accent orb */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-400 to-pink-400 opacity-30 blur-2xl z-10 pointer-events-none" />
              {/* Glassmorphism card */}
              <div className="rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-xl border-2 border-primary/20 p-10 flex flex-col gap-4 relative z-20 w-full">
                <div className={`mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${v.color} shadow-lg`}>{v.icon}</div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">{v.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base mb-2 line-clamp-3">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}