import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/Hero';
import ProjectEstimator from '@/components/shared/ProjectEstimator';
// import ContactForm from '@/components/contact/ContactForm';
// import Locations from '@/components/contact/Locations';
// import FAQ from '@/components/contact/FAQ';

export default function Contact() {
  return (
    <>
      <main className="bg-brand-dark">
        <Header />
        <ContactHero />
        
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <ProjectEstimator />
          </div>
        </section>

        {/* <ContactForm /> */}
        {/* <Locations /> */}
        {/* <FAQ /> */}
        <Footer />
      </main>
    </>
  );
}