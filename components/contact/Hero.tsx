'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionReveal } from '@/components/PageTransition';

export default function ContactHero() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideInLeft} initial="hidden" animate="visible">
            <SectionReveal>
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear about it. Get in touch with us and let's create something amazing together.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: 'Email',
                    content: 'hello@scaleox.com',
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
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
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
            className="bg-card border border-border/50 rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground rounded-lg px-8 py-3 font-medium shadow-md hover:shadow-lg transition-all"
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