import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/Hero';
// import ContactForm from '@/components/contact/ContactForm';
// import Locations from '@/components/contact/Locations';
// import FAQ from '@/components/contact/FAQ';

export default function Contact() {
  return (
    <>
      <main>
        <Header />
        <ContactHero />
        {/* <ContactForm /> */}
        {/* <Locations /> */}
        {/* <FAQ /> */}
        <Footer />
      </main>
    </>
  );
}