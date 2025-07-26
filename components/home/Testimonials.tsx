'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatedHeading, SectionReveal } from '@/components/PageTransition';
import { APP_NAME } from '../layout/Footer';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'Emily Carter',
      role: 'CTO, FinSight',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: `${APP_NAME}’s cloud and backend expertise enabled us to launch a secure, scalable platform ahead of schedule. Their team is proactive and highly skilled.`,
      rating: 5,
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Product Lead, ShopEase',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: `The ${APP_NAME} team delivered our mobile app with flawless execution and outstanding support. We saw a 30% increase in user engagement.`,
      rating: 5,
    },
    {
      id: 3,
      name: 'Linda Zhang',
      role: 'Head of IT, HealthSync',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote: `Their DevOps and automation skills transformed our deployment pipeline and reduced our costs. ${APP_NAME} is a true technology partner.`,
      rating: 5,
    },
    {
      id: 4,
      name: 'Michael Smith',
      role: 'CEO, BrandBoost',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      quote: `${APP_NAME}’s CMS and eCommerce solutions gave us the flexibility and performance we needed to grow globally. Highly recommended.`,
      rating: 5,
    },
    {
      id: 5,
      name: 'Sofia Rossi',
      role: 'CMO, MarketReach',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      quote: 'Their marketing automation platform helped us streamline campaigns and improve lead generation. The results exceeded our expectations.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Lucas Müller',
      role: 'Founder, VividBrand',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      quote: `${APP_NAME}’s branding suite made it easy to launch a cohesive, professional identity for our startup. The process was smooth and creative.`,
      rating: 5,
    },
  ];
  
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };
  
  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex]);
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
            What Our Clients Say
          </span>
          <AnimatedHeading Tag="h2" className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Trusted by Industry Leaders Worldwide
          </AnimatedHeading>
          <p className="text-muted-foreground text-lg">
            {`Discover how ${APP_NAME} empowers organizations to achieve their digital goals through innovation, reliability, and partnership.`}
          </p>
        </SectionReveal>
        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => {
                handlePrev();
                resetInterval();
              }}
              className="p-3 rounded-full bg-background border border-border/50 shadow-sm hover:shadow-md transition-all text-foreground hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => {
                handleNext();
                resetInterval();
              }}
              className="p-3 rounded-full bg-background border border-border/50 shadow-sm hover:shadow-md transition-all text-foreground hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="relative overflow-hidden px-4 py-8">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group bg-white dark:bg-card border border-border/50 rounded-xl shadow-md hover:shadow-xl transition-all p-8"
              >
                {/* Image */}
                <motion.div 
                  className="relative rounded-full overflow-hidden w-24 h-24 md:w-48 md:h-48 border-4 border-background shadow-lg flex-shrink-0 group-hover:border-primary transition-all"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  {/* Colored accent ring */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    <Quote size={20} className="text-white" />
                  </div>
                </motion.div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col items-center md:items-start">
                    <motion.div 
                      className="mb-4 text-primary"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {/* Large quote icon for desktop */}
                      <Quote size={32} className="hidden md:block text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" />
                    </motion.div>
                    <motion.blockquote 
                      className="text-lg md:text-xl font-medium mb-6 text-center md:text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      "{testimonials[activeIndex].quote}"
                    </motion.blockquote>
                    <motion.div 
                      className="flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div>
                        <h4 className="text-lg font-semibold">{testimonials[activeIndex].name}</h4>
                        <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                      </div>
                      <div className="hidden md:block w-px h-10 bg-border mx-2"></div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                  resetInterval();
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}