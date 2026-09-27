'use client';

import React from 'react';
import Link from 'next/link';
import { LocationItem } from '@/lib/locationsData';
import { 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Code2, 
  Globe2, 
  MessageSquare, 
  Clock, 
  Layers,
  ChevronDown
} from 'lucide-react';

interface Props {
  location: LocationItem;
}

export default function LocationDetail({ location }: Props) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative text-white overflow-hidden pt-24 pb-20">
      {/* Background Lighting & FX */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-purple/20 via-brand-cyan/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-brand-cyan animate-pulse" />
              <span>Serving {location.city} & {location.region}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              {location.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-sans max-w-2xl">
              {location.heroSubtitle}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-sm leading-relaxed">
              <span className="font-semibold text-brand-cyan">Local Reach Focus: </span>
              {location.localIntro}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-base shadow-lg shadow-brand-purple/25 hover:opacity-95 transition-all duration-300 group"
              >
                Get Free Website Consultation in {location.city}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base transition-all"
              >
                View Packages & Pricing
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-neutral-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-cyan" />
                <span>Sub-Second Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-brand-purple" />
                <span>Local SEO Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>100% IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-yellow-400" />
                <span>No WP Lag</span>
              </div>
            </div>
          </div>

          {/* Hero Form / Quick Quote Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-md relative">
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-brand-cyan text-black font-bold text-xs uppercase tracking-wider shadow">
                Tricity Special
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Request Free Strategy Call</h3>
              <p className="text-sm text-neutral-400 mb-6">
                Discuss your business website or software project with our engineers in {location.city}.
              </p>

              <form action="/contact" method="GET" className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-cyan text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Phone Number / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-cyan text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-brand-cyan text-sm">
                    <option value="business-website">Business Website Development</option>
                    <option value="ecommerce">E-Commerce Online Store</option>
                    <option value="saas-custom-software">SaaS / Custom Software App</option>
                    <option value="ai-automation">AI Chatbot & Automation</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-sm shadow-md hover:opacity-95 transition-all"
                >
                  Book Free Consultation
                </button>
                <p className="text-xs text-neutral-500 text-center">
                  ⚡ Response within 2 hours in {location.city}. No pushy sales pitches.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES FOR LOCATION */}
      <section className="py-16 bg-neutral-950/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading mb-4">
              Digital & Software Development Services in {location.city}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              High-impact solutions tailored to help {location.city} companies dominate local search, automate operational overhead, and capture more leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.localServices.map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-brand-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-brand-purple group-hover:text-brand-cyan transition-colors"
                >
                  Inquire for {location.city}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US IN TRICITY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">Why Vidhyonix</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              Why Business Owners in {location.city} Partner With Us
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              We aren’t another generic WordPress agency. We build bespoke Next.js and full-stack software that gives your business an unfair advantage on search engines and customer conversion.
            </p>
            <div className="pt-4 space-y-4">
              {location.keyBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-brand-cyan shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{b.title}</h4>
                    <p className="text-sm text-neutral-400">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            <div className="absolute top-4 right-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Engineered for Speed
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">
              Next.js Custom Code vs Traditional WordPress
            </h3>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4 font-semibold text-neutral-300">Feature</div>
                <div className="col-span-4 font-bold text-brand-cyan">Vidhyonix (Next.js)</div>
                <div className="col-span-4 font-semibold text-neutral-500">Traditional WP</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4 font-medium text-neutral-300">Page Load Time</div>
                <div className="col-span-4 font-bold text-green-400">0.4s - 0.8s (Instant)</div>
                <div className="col-span-4 text-red-400">3.5s - 8.0s (Laggy)</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4 font-medium text-neutral-300">Google Core Vitals</div>
                <div className="col-span-4 font-bold text-green-400">Score 95 - 100</div>
                <div className="col-span-4 text-yellow-500">Score 40 - 65</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4 font-medium text-neutral-300">Security</div>
                <div className="col-span-4 font-bold text-green-400">Zero WP Vulnerabilities</div>
                <div className="col-span-4 text-red-400">Plugin Hack Risk</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4 font-medium text-neutral-300">Local SEO Schema</div>
                <div className="col-span-4 font-bold text-green-400">Built-In JSON-LD</div>
                <div className="col-span-4 text-neutral-400">Requires Heavy Plugins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & PACKAGES SECTION */}
      <section id="pricing" className="py-20 bg-neutral-950/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest">Transparent Packages</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading mt-2 mb-4">
              Website & Software Development Packages for {location.city}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              No hidden fees, no seat subscriptions. Clear milestones and total ownership of your digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {location.priceTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                  idx === 0 
                    ? 'bg-neutral-900/80 border-white/10' 
                    : idx === 1 
                      ? 'bg-gradient-to-b from-brand-purple/20 to-neutral-900 border-brand-purple/50 shadow-xl shadow-brand-purple/20 scale-105' 
                      : 'bg-neutral-900/80 border-white/10'
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white text-xs font-bold uppercase tracking-wider">
                    Most Popular in {location.city}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-2">{tier.name}</h3>
                  <p className="text-xs text-neutral-400 mb-6">{tier.idealFor}</p>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan mb-6 p-2 rounded-lg bg-white/5 border border-white/5">
                    <Clock className="w-4 h-4" />
                    <span>Estimated Timeline: {tier.timeline}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all ${
                    idx === 1
                      ? 'bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-lg hover:opacity-95'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  Get Exact Quote for {location.city}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS NEARBY */}
      <section className="py-12 bg-neutral-900/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-sm font-semibold text-neutral-400 mb-4 uppercase tracking-wider">
            Serving Hubs & Sectors in {location.city} & Tricity Region
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {location.nearbyAreas.map((area, aIdx) => (
              <span
                key={aIdx}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Frequently Asked Questions ({location.city})
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Everything you need to know about getting your website built in {location.city}.
          </p>
        </div>

        <div className="space-y-4">
          {location.localFaqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-neutral-900/80 border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-white focus:outline-none"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-cyan transition-transform duration-300 shrink-0 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-brand-purple/30 via-neutral-900 to-brand-cyan/20 border border-white/15 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
              Ready to Grow Your Business in {location.city}?
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg">
              Let’s build a fast, high-converting website or software application that drives organic leads and customers to your business.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-base shadow-xl hover:opacity-95 transition-all"
              >
                Schedule Free Tricity Strategy Call
              </Link>
              <a
                href="tel:+918770283188"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-base transition-all"
              >
                Call Developer Directly: +91 8770283188
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
