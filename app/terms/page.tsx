
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTA from '@/components/home/CTA'

const TermsPage = () => {
    return (
        <>
            <Header />
            <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
                {/* Animated background rings and blurry dots */}
                <motion.div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                    <motion.div
                        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-cyan/10 blur-[100px]"
                        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-violet/10 blur-[120px]"
                        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    />
                </motion.div>

                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-sm tracking-wide backdrop-blur-md">
                            LEGAL DOCUMENTATION
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 ai-gradient-text pb-2">
                            Terms of Service
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Please read these terms carefully before using our services. By accessing or using our website, you agree to be bound by these terms.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="container relative z-10 mx-auto px-4 pb-24 -mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 rounded-3xl space-y-12"
                >
                    <div className="flex items-center justify-between border-b border-white/5 pb-8">
                        <p className="text-sm text-slate-500 uppercase tracking-widest">Last updated: {new Date().toLocaleDateString()}</p>
                        <div className="h-2 w-24 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full" />
                    </div>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                            <span className="text-brand-cyan">01.</span> Acceptance of Terms
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                            <span className="text-brand-cyan">02.</span> Use License
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Vidhyonix's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="grid gap-3 pt-2">
                            {[
                                "Modify or copy the materials",
                                "Use the materials for any commercial purpose",
                                "Attempt to decompile or reverse engineer any software",
                                "Remove any copyright or other proprietary notations",
                                "Transfer the materials to another person"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-violet mt-2.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                            <span className="text-brand-cyan">03.</span> Project Deliverables
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            For all project-based work, specific terms regarding deliverables, timelines, and payment schedules will be outlined in a separate Statement of Work (SOW) or Master Services Agreement (MSA). In the event of a conflict between these Terms and a specific SOW, the SOW shall control.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                            <span className="text-brand-cyan">04.</span> Intellectual Property
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            All content, logos, graphics, and software on this website are the property of Vidhyonix or its content suppliers and protected by international copyright laws. Custom software developed for clients belongs to the client upon full payment, as specified in individual agreements.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                            <span className="text-brand-cyan">05.</span> Limitation of Liability
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            In no event shall Vidhyonix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vidhyonix's website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                            <span className="text-brand-cyan">06.</span> Governing Law
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <div className="border-t border-white/5 pt-8 mt-12">
                        <h3 className="text-lg font-bold text-white mb-2">Questions?</h3>
                        <p className="text-slate-400">
                            If you have any questions about these Terms, please contact us at <a href="mailto:info@vidhyonix.com" className="text-brand-cyan hover:underline">info@vidhyonix.com</a>.
                        </p>
                    </div>

                </motion.div>
            </main>

            <CTA />
            <Footer />
        </>
    )
}

export default TermsPage
