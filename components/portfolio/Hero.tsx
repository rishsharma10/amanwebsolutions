'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { SectionReveal } from '@/components/PageTransition';

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
              style={{
                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.15)`,
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <motion.div variants={fadeUp}>
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Showcasing Our Creative Excellence
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore our diverse portfolio of successful projects that demonstrate our expertise in creating impactful digital solutions.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="aspect-square rounded-xl overflow-hidden"
                >
                  <img 
                    src={`https://images.pexels.com/photos/${3182812 + i}/pexels-photo-${3182812 + i}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                    alt={`Portfolio ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}