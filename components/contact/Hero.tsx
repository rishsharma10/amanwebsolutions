'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionReveal } from '@/components/PageTransition';
import React, { useState } from 'react';

export default function ContactHero() {
  const servicesList = [
    'Web Development',
    'App Development',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'CMS & eCommerce',
    'UI/UX Design',
    'Branding & Identity',
    'Digital Marketing',
    'SkillyTalk Interview',
    'Other',
  ];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const to = 'info@vidhyonix.com';
    const subject = `New Inquiry: ${formData.name} — ${formData.service || 'General'}`;
    const body = [
      'New contact request via website:',
      '',
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Email: ${formData.email}`,
      `Service: ${formData.service}`,
      '',
      'Project Details:',
      formData.details,
    ].join('\n');

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');

    // Fallback to default mail client if Gmail is unavailable
    setTimeout(() => {
      const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }, 500);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Animated background rings and blurry dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow orbs matching homepage */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-fuchsia/5 rounded-full blur-[150px]" />
      </div>

      <motion.div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-cyan/10 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-fuchsia/10 blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={slideInLeft} initial="hidden" animate="visible">
            <SectionReveal>
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/5 text-brand-cyan border border-brand-cyan/20 font-medium text-sm backdrop-blur">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-white">
                Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia">Vidhyonix</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 font-medium font-sans">
                Ready to build something extraordinary? Reach out to our team and discover how we can help you achieve your digital ambitions with innovative IT solutions.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: 'Email',
                    content: 'info@vidhyonix.com',
                    link: 'mailto:info@vidhyonix.com'
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: 'Phone',
                    content: '+91 8770283188',
                    link: 'tel:+918770283188'
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Address',
                    content: 'Chandigarh, India',
                    link: null
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="flex items-start gap-4 p-4 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-brand-start to-brand-end text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-gray-400 hover:text-brand-cyan transition-colors">{item.content}</a>
                      ) : (
                        <p className="text-gray-400">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="glass-morphism rounded-3xl p-8 md:p-10 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold mb-2 text-white">Send Us a Message</h2>
            <form className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-cyan/50 focus:outline-none focus:ring-1 focus:ring-brand-cyan/50 text-white placeholder-gray-500 transition-all font-sans"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-300">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-cyan/50 focus:outline-none focus:ring-1 focus:ring-brand-cyan/50 text-white placeholder-gray-500 transition-all font-sans"
                  placeholder="Your company name"
                />
              </div>
              <div className="flex flex-col gap-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-cyan/50 focus:outline-none focus:ring-1 focus:ring-brand-cyan/50 text-white placeholder-gray-500 transition-all font-sans"
                  placeholder="Your email"
                />
              </div>
              <div className="flex flex-col gap-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-300">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-cyan/50 focus:outline-none focus:ring-1 focus:ring-brand-cyan/50 text-white placeholder-gray-500 transition-all font-sans appearance-none"
                >
                  <option value="" disabled className="bg-neutral-900">Select a service</option>
                  {servicesList.map((service) => (
                    <option key={service} value={service} className="bg-neutral-900">{service}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-300">Project Details</label>
                <textarea
                  rows={4}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-brand-cyan/50 focus:outline-none focus:ring-1 focus:ring-brand-cyan/50 text-white placeholder-gray-500 transition-all font-sans resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia text-white rounded-full px-8 py-3 font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.02] transition-all duration-300 mt-2 lg:col-span-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}