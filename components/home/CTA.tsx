'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { buttonHover, fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { AnimatedHeading, SectionReveal } from '@/components/PageTransition';

export default function CTA() {
  const benefits = [
    'Full-spectrum IT expertise',
    'Certified and experienced team',
    'Proven results for global clients',
    'Modern, scalable, and secure solutions',
  ];

  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
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
      
      <div className="container relative mx-auto px-4">
        <SectionReveal className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div 
              variants={slideInLeft}
            >
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
                Ready to Build the Future?
              </span>
              
              <AnimatedHeading Tag="h2" className="text-3xl md:text-4xl font-bold mb-6">
                Let’s discuss how Wlopper can help you achieve your digital goals with innovative IT solutions.
              </AnimatedHeading>
              
              <p className="text-muted-foreground text-lg mb-8">
                Ready to elevate your digital presence? Our team of experts is here to help you 
                achieve your goals with customized solutions tailored to your business needs.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="p-0.5 rounded-full bg-primary/10 text-primary">
                      <Check size={16} />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
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
                    className="border border-border hover:border-primary rounded-full px-8 py-3 font-medium transition-all flex items-center justify-center gap-2 group"
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
            
            {/* Form */}
            <motion.div
              variants={slideInRight}
              className="bg-card border border-border/50 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project"
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-lg px-8 py-3 font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Request
                </motion.button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}