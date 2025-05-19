"use client";
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/Hero';
import CTA from '@/components/home/CTA';
import ServiceContent from '@/components/services/ServicesContent';

export default function Services() {
  return (
    <>
      <main>
        <Header />
        <ServicesHero />
        <ServiceContent/>
        <CTA />
        <Footer />
      </main>
    </>
  );
}