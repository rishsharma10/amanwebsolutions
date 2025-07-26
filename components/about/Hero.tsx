'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';
import { APP_NAME } from '../layout/Footer';

export default function AboutHero() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideInLeft} initial="hidden" animate="visible">
            <SectionReveal>
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
                About {APP_NAME}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your Trusted Partner for End-to-End IT Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {`${APP_NAME} empowers organizations to innovate and scale with confidence. Our team delivers world-class web, mobile, backend, and cloud solutions using the latest technologies. We are committed to building secure, scalable, and future-ready digital products for businesses worldwide.`}
              </p>
            </SectionReveal>
          </motion.div>

          <motion.div 
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt={`${APP_NAME} Team Collaboration`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <motion.div 
              className="absolute -bottom-6 -right-6 bg-card border border-border/50 rounded-lg p-6 shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver innovative, reliable, and scalable IT solutions that drive business success and digital transformation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}