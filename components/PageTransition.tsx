'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Page transition wrapper
export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isFirstMount, setIsFirstMount] = useState(true);

  // Skip animation on first mount to prevent initial page load animation
  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={isFirstMount ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0]
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Section reveal animation for scroll-based animations
export function SectionReveal({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Text animation for headings
export function AnimatedHeading({ 
  children,
  Tag = "h2",
  className = "",
  delay = 0
}: { 
  children: string;
  Tag?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}) {
  const words = children.split(" ");
  
  return (
    <Tag className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.08, delayChildren: delay }}
        aria-hidden="true"
        className="flex flex-wrap"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-2 overflow-hidden"
            variants={{
              visible: { },
              hidden: { }
            }}
          >
            <motion.span
              className="inline-block"
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 40, opacity: 0 }
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {word}
            </motion.span>
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}