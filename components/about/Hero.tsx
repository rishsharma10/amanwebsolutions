'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5"></div>
        
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-blue-500/10 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-purple-500/10 blur-[120px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideInLeft} initial="hidden" animate="visible">
            <SectionReveal>
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We Create Digital Solutions That Drive Growth
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                With over a decade of experience, we've helped hundreds of businesses transform their digital presence and achieve remarkable growth.
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
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
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
                To empower businesses with innovative digital solutions that drive sustainable growth and success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}