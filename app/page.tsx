'use client'

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <main className="relative overflow-x-hidden bg-gradient-to-br from-sky-50 via-fuchsia-50 to-pink-50 dark:from-neutral-900 dark:via-blue-950 dark:to-fuchsia-950">
        {/* Animated blurry dots and moving elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Large blue dot top left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-400/20 blur-[100px] animate-pulse" />
          {/* Large fuchsia dot bottom right */}
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-400/20 blur-[120px] animate-pulse" />
          {/* Animated moving dots */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 opacity-20"
              style={{
                width: `${32 + i * 10}px`,
                height: `${32 + i * 10}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 12}%`,
                filter: 'blur(8px)',
                animation: `moveDot${i} 12s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
        <Header />
        <Hero />
        {/* Blurred gradient overlay to blend Hero into next section */}
        <div className="relative z-10 -mt-16 h-24 w-full pointer-events-none">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-white/60 to-pink-50 dark:via-blue-950/60 dark:to-fuchsia-950/80 blur-2xl" />
        </div>
        <Services />
        <Stats />
        <Projects />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
      <style jsx global>{`
        @keyframes moveDot0 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(40px) scale(1.08); }
        }
        @keyframes moveDot1 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.12); }
        }
        @keyframes moveDot2 {
          0% { transform: translateX(0) scale(1); }
          100% { transform: translateX(30px) scale(1.05); }
        }
        @keyframes moveDot3 {
          0% { transform: translateX(0) scale(1); }
          100% { transform: translateX(-30px) scale(1.1); }
        }
        @keyframes moveDot4 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(20px) scale(1.07); }
        }
      `}</style>
    </>
  );
}