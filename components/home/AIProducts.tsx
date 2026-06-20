'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import { ArrowRight, Bot, PhoneCall, Users } from 'lucide-react';

const products = [
    {
        title: 'AI Voice Agents (Call Center Automation)',
        description: 'Reduce operational costs by 40% while handling infinite call volume. Our intelligent voice agents instantly qualify leads and book appointments directly into your CRM without human intervention.',
        features: ['Zero Hold Times', 'Instant Lead Qualification', 'Native CRM Integration', 'Human-like Natural Voice'],
        icon: <PhoneCall className="w-6 h-6" />,
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
        gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
        detailsValues: { value: '40%', label: 'Cost Reduction' }
    },
    {
        title: 'SkillyTalk: AI Recruitment Platform',
        description: 'Cut your time-to-hire by 85%. SkillyTalk autonomously conducts first-round video interviews, analyzes candidate behavior, and delivers a ranked shortlist of top talent to your dashboard.',
        features: ['Automated Screening', 'Unbiased Candidate Ranking', 'Deep Behavioral Analysis', 'Instant Shortlisting'],
        icon: <Users className="w-6 h-6" />,
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
        gradient: 'from-fuchsia-500 via-purple-500 to-violet-500',
        detailsValues: { value: '85%', label: 'Faster Hiring' }
    },
    {
        title: 'Intelligent Support Chatbot',
        description: 'Boost customer satisfaction while lowering support ticket volume. Our context-aware chatbot handles complex queries 24/7, resolving 70% of issues instantly without escalating to your team.',
        features: ['24/7 Instant Resolution', 'Context & Memory Awareness', 'Multi-channel Omnichannel', 'Seamless Human Handoff'],
        icon: <Bot className="w-6 h-6" />,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
        gradient: 'from-pink-500 via-rose-500 to-red-500',
        detailsValues: { value: '70%', label: 'Tickets Deflected' }
    }
];

export default function AIProducts() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-fuchsia/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 mb-4 rounded-full bg-white/5 text-brand-cyan border border-brand-cyan/20 font-medium text-sm backdrop-blur">
                        Our AI Suite
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                        Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia">AI Products</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Experience the future of business automation with our flagship AI solutions designed to scale your operations and enhance engagement.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            <div className="w-full lg:w-1/2">
                                <motion.div variants={fadeUp} className="relative group">
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`} />
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm">
                                        <div className="aspect-video relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute bottom-6 left-6 z-20">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${product.gradient} bg-opacity-20`}>
                                                        {product.icon}
                                                    </div>
                                                    <span className="text-white font-bold text-lg">{product.title}</span>
                                                </div>
                                                <div className="text-brand-cyan font-mono text-xl">{product.detailsValues.value} <span className="text-gray-400 text-sm ml-1">{product.detailsValues.label}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <motion.div variants={fadeUp} className="space-y-6">
                                    <h3 className="text-3xl font-heading font-bold text-white">{product.title}</h3>
                                    <p className="text-lg text-gray-400 leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        {product.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
                                                <span className="text-gray-300 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8">
                                        <a
                                            href={`https://wa.me/918770283188?text=${encodeURIComponent(`Hi, I am interested in ${product.title}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group px-6 py-3 rounded-full bg-gradient-to-r ${product.gradient} text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 w-fit`}
                                        >
                                            Explore Solution
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
