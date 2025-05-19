'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        
        <motion.div
          className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-blue-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <motion.div variants={fadeUp}>
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive Digital Solutions for Modern Businesses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                From web development to digital marketing, we offer end-to-end services to help your business thrive in the digital landscape.
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
                  className="bg-card border border-border/50 rounded-xl p-6"
                >
                  <div className="text-3xl font-bold mb-2">{stat.count}</div>
                  <div className="text-muted-foreground">{stat.title}</div>
                </motion.div>
              ))}
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}