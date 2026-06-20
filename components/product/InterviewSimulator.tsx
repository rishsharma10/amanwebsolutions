'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, BrainCircuit, Activity } from 'lucide-react';

const conversation = [
  { id: 1, role: 'ai', text: "Welcome. Let's discuss your technical background. Could you explain a recent project where you had to scale a system to handle high traffic?", time: 1000 },
  { id: 2, role: 'user', text: "Certainly. In my last role, our Node.js microservice was crashing during peak hours. I implemented Redis caching and horizontal pod autoscaling in Kubernetes. This stabilized the system and reduced latency by 60%.", time: 5000 },
  { id: 3, role: 'ai', text: "Impressive. When implementing Redis caching, how did you handle cache invalidation to ensure data consistency across distributed nodes?", time: 11000 },
  { id: 4, role: 'user', text: "I used a hybrid approach. For highly volatile data, I set short TTLs. For critical master data, we used a pub/sub mechanism where the database emit an event on update, triggering cache invalidation across all nodes.", time: 16000 }
];

export default function InterviewSimulator() {
  const [messages, setMessages] = useState<typeof conversation>([]);
  const [score, setScore] = useState(65);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    // Initial typing indicator
    timeouts.push(setTimeout(() => setIsTyping(true), 0));

    conversation.forEach((msg) => {
      // Show typing indicator a bit before the message appears
      timeouts.push(setTimeout(() => setIsTyping(true), msg.time - 800));
      
      timeouts.push(setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, msg]);
        
        // Increase score realistically when user gives good answers
        if (msg.role === 'user') {
          if (msg.id === 2) setScore(78);
          if (msg.id === 4) setScore(94);
        }
      }, msg.time));
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] relative">
      {/* Top Bar */}
      <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm font-medium text-slate-400 ml-4 flex items-center gap-2">
            <Bot size={16} className="text-brand-cyan" />
            Live AI Evaluation
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Live Score</div>
            <div className="flex items-center gap-2 text-brand-cyan font-bold">
              <Activity size={14} />
              {score}/100
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-6 h-[400px] overflow-y-auto space-y-6 flex flex-col relative bg-gradient-to-b from-transparent to-brand-cyan/5">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${
                msg.role === 'ai' 
                  ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30' 
                  : 'bg-brand-fuchsia/20 text-brand-fuchsia border border-brand-fuchsia/30'
              }`}>
                {msg.role === 'ai' ? <BrainCircuit size={20} /> : <User size={20} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'ai'
                  ? 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'
                  : 'bg-brand-fuchsia/10 border border-brand-fuchsia/20 text-white rounded-tr-none'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-4 max-w-[80%]"
            >
               <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 flex items-center justify-center shrink-0 shadow-lg">
                <BrainCircuit size={20} />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none flex items-center gap-1.5 w-16">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 rounded-full bg-brand-cyan"></motion.div>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 rounded-full bg-brand-cyan"></motion.div>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 rounded-full bg-brand-cyan"></motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
