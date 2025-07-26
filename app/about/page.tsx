'use client';
import React, { useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/Hero';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';
import Values from '@/components/about/Values';
import Journey from '@/components/about/Journey';
import Team from '@/components/about/Team';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const journeyRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const sections = [heroRef, valuesRef, journeyRef, teamRef, ctaRef];
    sections.forEach((ref, idx) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            delay: idx * 0.08,
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <main
        className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-fuchsia-50 dark:from-neutral-900 dark:via-blue-950 dark:to-fuchsia-950 overflow-hidden"
      >
        <Header />
        <div ref={heroRef}><AboutHero /></div>
        <div ref={valuesRef}><Values /></div>
        <div ref={journeyRef}><Journey /></div>
        <div ref={ctaRef}><CTA /></div>
        <Footer />
      </main>
    </>
  );
}