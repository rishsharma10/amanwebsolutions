'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function NeuralCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for the cursor follow effect
  const cursorX = useSpring(0, { damping: 25, stiffness: 200, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 200, mass: 0.5 });
  
  const outerX = useSpring(0, { damping: 20, stiffness: 100, mass: 1 });
  const outerY = useSpring(0, { damping: 20, stiffness: 100, mass: 1 });

  useEffect(() => {
    // Only show custom cursor on desktop devices that actually use a mouse
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 6); // offset by half width (12px / 2)
      cursorY.set(e.clientY - 6);
      outerX.set(e.clientX - 24); // offset by half width (48px / 2)
      outerY.set(e.clientY - 24);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, outerX, outerY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-cyan rounded-full pointer-events-none z-[100] mix-blend-screen shadow-[0_0_10px_#22d3ee]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-brand-cyan/50 pointer-events-none z-[99]"
        style={{
          x: outerX,
          y: outerY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(34, 211, 238, 0.8)' : 'rgba(34, 211, 238, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
}
