'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-transparent">
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

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <motion.div variants={fadeUp}>
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-gradient-to-r from-sky-100 via-fuchsia-100 to-pink-100 text-primary border border-primary/20 font-medium text-sm backdrop-blur">
                End-to-End IT Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Empowering Innovation & Business Growth
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto font-medium">
                From web and app development to AI, cloud, and eCommerce, Vidyonix delivers the technology expertise you need to succeed in a digital-first world. Partner with us for scalable, secure, and future-ready solutions.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                { title: 'Web Development', count: '200+' },
                { title: 'Happy Clients', count: '500+' },
                { title: 'Team Experts', count: '50+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white/90 dark:bg-neutral-100/90 rounded-2xl p-7 shadow-xl flex flex-col items-center"
                >
                  <div className="text-3xl font-bold mb-2 text-gradient bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">{stat.count}</div>
                  <div className="text-gray-700 dark:text-gray-800 font-medium">{stat.title}</div>
                </motion.div>
              ))}
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}