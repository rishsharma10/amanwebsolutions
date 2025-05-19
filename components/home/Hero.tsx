'use client';

import { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, slideInRight, slideInLeft } from '@/lib/animations';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);
  const { scrollY } = useViewportScroll();
  
  // Parallax effect values
  const parallaxBg = useTransform(scrollY, [0, 400], [0, 100]);
  const parallaxText = useTransform(scrollY, [0, 300], [0, -50]);
  const parallaxButton = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-800/10 dark:from-blue-900/30 dark:to-purple-900/30"
          style={{ y: parallaxBg }}
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-blue-500/20 dark:bg-blue-500/10 blur-[100px]"
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
          className="absolute bottom-1/4 left-[5%] w-80 h-80 rounded-full bg-purple-500/20 dark:bg-purple-500/10 blur-[120px]"
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

      {/* Content */}
      <div className="container relative mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div style={{ y: parallaxText, opacity }} className="z-10">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
                Innovative Digital Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Digital Presence</span> With Us
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              We craft exceptional digital experiences that help businesses grow. 
              Our cutting-edge solutions drive results and transform visions into reality.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              style={{ y: parallaxButton }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/portfolio">
                <motion.button
                  className="border border-border hover:border-primary rounded-full px-8 py-3 font-medium transition-all flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Our Work</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden flex items-center justify-center bg-muted text-xs"
                  >
                    <img 
                      src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`} 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold">Trusted by 2,000+ clients</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span>4.9/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Animation */}
          <motion.div
            className="relative z-10 flex justify-center lg:justify-end"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-[80px] opacity-20 dark:opacity-30"></div>
              
              {/* Dashboard Preview Image */}
              <motion.div 
                className="relative bg-card border border-border/50 rounded-xl shadow-lg overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/8439089/pexels-photo-8439089.jpeg" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Project Analytics Dashboard</h3>
                  <p className="text-muted-foreground text-sm">
                    Real-time performance tracking and insights for all your digital projects.
                  </p>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-card border border-border/50 rounded-lg shadow-lg p-4 w-40"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Conversion Rate</span>
                </div>
                <div className="text-xl font-bold">+27.4%</div>
                <div className="text-xs text-green-500 flex items-center gap-1 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>3.2% from last week</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-lg shadow-lg p-4 w-36"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-sm font-medium mb-1">New Clients</div>
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full border-2 border-card overflow-hidden"
                      >
                        <img 
                          src={`https://randomuser.me/api/portraits/men/${i + 15}.jpg`} 
                          alt="Client" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                    +5
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-border flex items-center justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}