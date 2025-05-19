"use client";
import React from 'react';

const services = [
  {
    title: 'Web Development',
    description:
      'We craft high-performance, SEO-friendly websites using React, Next.js, and modern backends. Our focus is on speed, accessibility, and maintainable architecture.',
    icon: '🌐',
  },
  {
    title: 'App Development',
    description:
      'From concept to code, we build intuitive cross-platform mobile apps using Flutter and React Native with full backend integration.',
    icon: '📱',
  },
  {
    title: 'SEO & Analytics',
    description:
      'Get found on Google with technical SEO, schema, performance audits, and real-time analytics to measure what matters.',
    icon: '🔍',
  },
  {
    title: 'Digital Marketing',
    description:
      'Grow your reach with targeted ad campaigns, funnel optimization, and engagement-driven content marketing strategies.',
    icon: '📣',
  },
  {
    title: 'Branding',
    description:
      'We help you build an unforgettable identity with logo design, brand voice, typography, and visual systems that resonate.',
    icon: '🎨',
  },
  {
    title: 'Content Creation',
    description:
      'From blogs to reels, we produce content that builds trust, educates your audience, and drives conversions across platforms.',
    icon: '✍️',
  },
];

export default function ServiceContent() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Our Services</h1>
        <p className="text-lg mb-12 animate-fade-in delay-150 max-w-3xl mx-auto">
          We blend creativity and code to deliver tailored digital solutions — whether you're a startup or scaling enterprise.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative bg-white/90 text-gray-900 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-2xl hover:scale-[1.03] transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="text-5xl mb-4 transition-transform group-hover:rotate-6">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-3 text-indigo-700">{service.title}</h2>
              <p className="text-sm text-gray-700">{service.description}</p>

              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-400 to-pink-500 opacity-20 blur-lg z-[-1]" />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
