'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Calendar, FileText } from 'lucide-react';
import Link from 'next/link';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-brand-dark border border-white/10 shadow-2xl rounded-2xl p-4 w-72 overflow-hidden"
          >
            <div className="mb-4 pb-3 border-b border-white/10">
              <h4 className="text-white font-bold mb-1">Get in touch</h4>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Typically responds within 1 business day
              </p>
            </div>

            <div className="space-y-2">
              <Link href="https://wa.me/918770283188" target="_blank" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="bg-[#25D366]/20 text-[#25D366] p-2 rounded-lg group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle size={18} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">WhatsApp Chat</span>
              </Link>

              <Link href="/contact" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="bg-brand-cyan/20 text-brand-cyan p-2 rounded-lg group-hover:bg-brand-cyan group-hover:text-brand-dark transition-colors">
                  <FileText size={18} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Contact Form</span>
              </Link>

              <Link href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="bg-brand-fuchsia/20 text-brand-fuchsia p-2 rounded-lg group-hover:bg-brand-fuchsia group-hover:text-white transition-colors">
                  <Calendar size={18} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Book Calendly (Coming Soon)</span>
              </Link>

              <a href="tel:+918770283188" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="bg-white/10 text-slate-300 p-2 rounded-lg group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Call Us</span>
              </a>

              <a href="mailto:vidhyonixitsolutions@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="bg-white/10 text-slate-300 p-2 rounded-lg group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Email Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
