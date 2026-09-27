import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You for Reaching Out | Vidhyonix',
  description: 'Thank you for contacting Vidhyonix. Our engineering team has received your message and will respond within 2 hours.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-brand-dark text-white overflow-hidden flex flex-col justify-between">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center my-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/80 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="w-20 h-20 rounded-2xl bg-brand-purple/20 border border-brand-purple/40 text-brand-cyan flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 animate-bounce" />
          </div>

          <span className="text-brand-cyan text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            Message Received
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading mb-4">
            Thank You for Reaching Out!
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our engineering team in Tricity (Mohali/Chandigarh) has received your request. We will review your project requirements and respond within <span className="text-brand-cyan font-bold">2 business hours</span>.
          </p>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left space-y-3 mb-8 text-sm">
            <div className="flex items-center gap-3 text-neutral-300">
              <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>Direct Email: vidhyonixitsolutions@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>Direct Call / WhatsApp: +91 8770283188</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-sm shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              Return to Homepage
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-sm transition-all"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
