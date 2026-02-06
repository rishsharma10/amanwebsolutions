'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import { ArrowRight, Bot, PhoneCall, Users } from 'lucide-react';

const products = [
    {
        title: 'AI Calling Agent',
        description: 'Transform your sales process with our intelligent voice AI. Capable of handling thousands of simultaneous calls for lead generation, qualification, and follow-ups with human-like natural conversation.',
        features: ['Full CRM Lead Generation', 'Natural Voice Synthesis', 'Sentiment Analysis', 'Automated Qualification'],
        icon: <PhoneCall className="w-6 h-6" />,
        image: '/images/ai-calling.png',
        gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
        detailsValues: { value: '10k+', label: 'Daily Calls' }
    },
    {
        title: 'SkillyTalk Interview',
        description: 'Revolutionize hiring with our AI-powered interview platform. Conduct structured video interviews, analyze candidate responses, and rank top talent automatically with deep behavioral insights.',
        features: ['Automated Hiring Funnel', 'Candidate Ranking', 'CRM Integration', 'Behavioral Analysis'],
        icon: <Users className="w-6 h-6" />,
        image: '/images/ai-interview.png',
        gradient: 'from-fuchsia-500 via-purple-500 to-violet-500',
        detailsValues: { value: '85%', label: 'Time Saved' }
    },
    {
        title: 'Intelligent Spt Chatbot',
        description: 'Provide 24/7 instant support with a chatbot that understands context. Beyond simple FAQs, it handles complex queries, resolves issues, and seamlessly escalates to human agents when needed.',
        features: ['24/7 Availability', 'Smart Context Awareness', 'Multi-channel Support', 'Instant Resolution'],
        icon: <Bot className="w-6 h-6" />,
        image: '/images/ai-chatbot.png',
        gradient: 'from-pink-500 via-rose-500 to-red-500',
        detailsValues: { value: '24/7', label: 'Availability' }
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
