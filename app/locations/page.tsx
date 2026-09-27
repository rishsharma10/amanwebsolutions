import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { locationsData } from '@/lib/locationsData';
import { MapPin, ArrowRight, Sparkles, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development & IT Services in Tricity | Chandigarh, Mohali, Panchkula',
  description: 'Vidhyonix provides custom web development, business websites, SaaS platforms, and AI automation across Chandigarh, SAS Nagar Mohali, Panchkula, and the entire Tricity region.',
  alternates: {
    canonical: 'https://vidhyonix.com/locations',
  },
};

export default function LocationsIndexPage() {
  const locations = Object.values(locationsData);

  return (
    <main className="relative min-h-screen bg-brand-dark text-white overflow-hidden">
      <Header />

      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-brand-cyan" />
            <span>Tricity Regional Presence</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading leading-tight">
            Web Development & IT Solutions in Chandigarh Tricity
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg">
            We partner with ambitious business owners, healthcare practices, retailers, and tech startups across Chandigarh, SAS Nagar Mohali, and Panchkula to build high-converting digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="p-8 rounded-3xl bg-neutral-900/80 border border-white/10 hover:border-brand-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/30 text-brand-cyan">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white font-heading group-hover:text-brand-cyan transition-colors">
                      {loc.city}
                    </h2>
                    <span className="text-xs font-mono text-neutral-400">{loc.region}</span>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {loc.heroSubtitle}
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">High-Demand Services:</span>
                  <div className="flex flex-wrap gap-2">
                    {loc.localServices.slice(0, 3).map((s, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300"
                      >
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/locations/${loc.slug}`}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-sm flex items-center justify-center gap-2 group-hover:opacity-95 transition-all"
              >
                View {loc.city} Web Development Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
