'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatedHeading, SectionReveal } from '@/components/PageTransition';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechVision',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'Working with ScaleoX transformed our digital presence completely. Their strategic approach and technical expertise delivered results that exceeded our expectations. The team understood our vision perfectly.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, Innovate Inc',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'We\'ve worked with several agencies before, but ScaleoX stands out for their creativity, reliability, and results-driven approach. They\'ve become an essential partner for our digital marketing initiatives.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Founder, Bloom E-commerce',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote: 'The e-commerce platform ScaleoX built for us increased our conversion rates by 37% within just two months. Their attention to detail and focus on user experience made all the difference.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Patel',
      role: 'CTO, FinTech Solutions',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      quote: 'ScaleoX delivered a complex web application that perfectly aligned with our requirements. Their technical expertise and project management ensured a smooth development process from start to finish.',
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
            Testimonials
          </span>
          <AnimatedHeading Tag="h2" className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </AnimatedHeading>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear what our clients have to say about working with us
            and the results we've delivered for their businesses.
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
                className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
              >
                {/* Image */}
                <motion.div 
                  className="relative rounded-full overflow-hidden w-24 h-24 md:w-48 md:h-48 border-4 border-background shadow-lg flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
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
                      <Quote size={32} />
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