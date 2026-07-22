'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const initialSuggestions = [
  "📅 Book a consultation call",
  "💡 Tell me about Vidhyonix",
  "🎙️ What is SkillyTalk?",
  "🍔 How do AI agents help restaurants?",
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! My name is Vidyut from Vidhyonix. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(initialSuggestions);
  const [leadCaptured, setLeadCaptured] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Scan conversation for lead capture (Name, Email, details)
  useEffect(() => {
    if (leadCaptured || messages.length < 3) return;

    // Scan for email patterns in user messages
    const userMessages = messages.filter((m) => m.role === 'user');
    const fullConversationText = messages.map((m) => `${m.role}: ${m.content}`).join('\n');
    
    let foundEmail = '';
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

    for (const msg of userMessages) {
      const match = msg.content.match(emailRegex);
      if (match) {
        foundEmail = match[0];
        break;
      }
    }

    if (foundEmail) {
      // Collect lead details
      const userText = userMessages.map((m) => m.content).join(' | ');
      submitLead(foundEmail, userText);
    }
  }, [messages, leadCaptured]);

  const submitLead = async (email: string, details: string) => {
    setLeadCaptured(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'AI Chat Lead',
          company: 'AI Chatbot Integration',
          email: email,
          service: 'AI Chat Consultation',
          details: `Conversation Summary:\n${details}`,
        }),
      });
    } catch (err) {
      console.error('Failed to submit AI lead:', err);
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Update suggestions based on state
    if (text.toLowerCase().includes('book') || text.toLowerCase().includes('call') || text.toLowerCase().includes('demo')) {
      setSuggestions([
        "Here's my email: user@example.com",
        "Explain SkillyTalk first",
        "Restart chat"
      ]);
    } else {
      setSuggestions([]);
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      if (response.ok && data.response) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: "Sorry, I ran into an issue. Please try typing your query again." },
        ]);
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "I'm having trouble connecting right now. Please check your internet." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const selectSuggestion = (s: string) => {
    if (s === "Restart chat") {
      setMessages([
        {
          role: 'assistant',
          content: "Hi! My name is Vidyut from Vidhyonix. How can I assist you today?",
        },
      ]);
      setSuggestions(initialSuggestions);
      setLeadCaptured(false);
      return;
    }
    handleSend(s.replace(/^[^\s]+\s/, '')); // strip emojis from suggestion clicks
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-[#0a0a0f]/95 border border-white/10 shadow-2xl rounded-3xl w-80 sm:w-96 h-[480px] flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Bot size={20} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                    Vidyut AI <Sparkles size={12} className="text-brand-fuchsia" />
                  </h4>
                  <span className="text-[10px] text-brand-cyan font-semibold uppercase tracking-wider">Consultation Agent</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3 max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed",
                    msg.role === 'user'
                      ? "ml-auto bg-brand-violet/20 text-white rounded-tr-none border border-brand-violet/20"
                      : "bg-white/5 text-slate-200 rounded-tl-none border border-white/5"
                  )}
                >
                  {msg.role === 'assistant' && (
                    <Bot size={16} className="text-brand-cyan mt-1 shrink-0" />
                  )}
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[50%] bg-white/5 text-slate-400 rounded-2xl rounded-tl-none p-3 border border-white/5 items-center">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions list */}
            {suggestions.length > 0 && (
              <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-white/5 bg-black/10">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => selectSuggestion(s)}
                    className="text-[11px] font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-black/40 border-t border-white/10 flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-brand-cyan text-brand-dark rounded-xl hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-fuchsia rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300 z-50 relative group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {leadCaptured && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 text-white font-bold text-[10px] flex items-center justify-center border-2 border-[#0a0a0f]">
            <Check size={10} />
          </span>
        )}
      </button>
    </div>
  );
}
