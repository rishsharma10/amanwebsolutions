'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { buttonHover, fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { AnimatedHeading, SectionReveal } from '@/components/PageTransition';
import { APP_NAME } from '../layout/Footer';

export default function CTA() {
  const benefits = [
    'Full-spectrum IT expertise',
    'Certified and experienced team',
    'Proven results for global clients',
    'Modern, scalable, and secure solutions',
  ];

  return (
    <section className="py-20 md:py-32 overflow-hidden relative min-h-[60vh] flex items-center justify-center">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="CTA Background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
      </div>
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

      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center min-h-[40vh] text-center">
        <SectionReveal className="max-w-3xl mx-auto">
          <motion.div variants={slideInLeft} initial="hidden" animate="visible" className="w-full">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/20 text-white border border-white/30 font-medium text-sm backdrop-blur">
              Ready to Build the Future?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500">
                {APP_NAME}
              </span>
              <span className="block text-white">Your IT Innovation Partner</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-medium drop-shadow">
              Let’s discuss how our team can help you achieve your digital goals with innovative IT solutions tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white rounded-full px-8 py-3 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={buttonHover}
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="bg-white/90 text-primary rounded-full px-8 py-3 font-bold shadow-lg hover:bg-pink-100 hover:text-pink-600 transition-all flex items-center justify-center gap-2 group"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={buttonHover}
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}