'use client';

import { motion } from 'framer-motion';

const techItems = [
  'Next.js', 'React', 'Node.js', 'TypeScript', 'Python', 'Django', 
  'AWS', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 
  'GraphQL', 'Tailwind CSS', 'OpenAI', 'TensorFlow', 'React Native', 'Flutter'
];

export default function TechStack() {
  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase">
          Powered by Industry-Leading Technologies
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group w-full bg-black/50 py-4">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 group-hover:pause">
          {[...techItems, ...techItems, ...techItems].map((tech, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
