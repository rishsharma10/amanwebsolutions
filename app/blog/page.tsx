"use client";

import * as React from "react";
import Head from "next/head";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Link from 'next/link';
import CTA from "@/components/home/CTA";
import { useState } from 'react';

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Understanding the Basics of Web Development",
    excerpt:
      "Explore the foundational technologies of web development, including HTML, CSS, and JavaScript, and how they work together to build modern websites.",
    date: "2025-05-01",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Responsive Design: Crafting Mobile-Friendly Websites",
    excerpt:
      "Learn the principles of responsive design to ensure your websites look great on all devices, from desktops to smartphones.",
    date: "2025-05-02",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Getting Started with React for Web Applications",
    excerpt:
      "Discover how to build dynamic and interactive user interfaces using React, a popular JavaScript library for web development.",
    date: "2025-05-03",
    image:
      "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Next.js: Building Server-Side Rendered React Apps",
    excerpt:
      "Learn how to leverage Next.js to create performant, server-rendered React applications with ease.",
    date: "2025-05-04",
    image:
      "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Styling Web Applications with CSS Modules",
    excerpt:
      "Understand how to use CSS Modules to write modular and maintainable CSS for your web projects.",
    date: "2025-05-05",
    image:
      "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Introduction to Mobile App Development",
    excerpt:
      "Get started with mobile app development by learning about the different platforms and tools available for building mobile applications.",
    date: "2025-05-06",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Building Cross-Platform Apps with React Native",
    excerpt:
      "Explore how React Native allows you to build mobile applications for both iOS and Android using a single codebase.",
    date: "2025-05-07",
    image:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Integrating RESTful APIs into Your Web Applications",
    excerpt:
      "Learn how to connect your web applications to external services and data sources using RESTful APIs.",
    date: "2025-05-08",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Deploying Web Applications with Vercel",
    excerpt:
      "Understand how to deploy your web applications quickly and efficiently using Vercel’s platform.",
    date: "2025-05-09",
    image:
      "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Optimizing Web Performance for Better User Experience",
    excerpt:
      "Discover techniques to enhance the performance of your web applications, leading to faster load times and improved user satisfaction.",
    date: "2025-05-10",
    image:
      "https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Understanding Progressive Web Apps (PWAs)",
    excerpt:
      "Learn about Progressive Web Apps and how they combine the best of web and mobile apps to deliver a seamless user experience.",
    date: "2025-05-11",
    image:
      "https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Implementing Authentication in Web Applications",
    excerpt:
      "Explore various methods for adding user authentication to your web applications to secure user data and manage access.",
    date: "2025-05-12",
    image:
      "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

type BlogModalState = {
  open: boolean;
  post?: BlogPost;
};

export default function Home() {
  const [modal, setModal] = useState<BlogModalState>({ open: false });

  return (
    <>
      <Head>
        <title>Vidyonix Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-transparent">
        {/* Animated background rings and blurry dots */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-400/20 blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-400/20 blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 opacity-20"
              style={{
                width: `${32 + i * 10}px`,
                height: `${32 + i * 10}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 12}%`,
                filter: 'blur(8px)',
              }}
              animate={{
                y: [0, 20 + i * 5, 0],
                x: [0, -10 + i * 3, 0],
              }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
            />
          ))}
        </motion.div>
        <main className="container relative z-10 mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Latest Insights from Vidyonix
          </h1>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.7, type: 'spring' }}
                className="relative flex flex-col rounded-3xl bg-white/95 dark:bg-neutral-100/95 shadow-xl hover:shadow-2xl overflow-hidden group hover:scale-[1.03] transition-transform duration-300 max-w-xl mx-auto"
                style={{ minWidth: 340, minHeight: 320 }}
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="relative z-10 flex-1 flex flex-col p-4 gap-1">
                  <h2 className="text-lg font-bold mb-1 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-800 text-sm mb-1">{post.excerpt}</p>
                  <time className="text-xs text-muted-foreground mb-1">{new Date(post.date).toLocaleDateString()}</time>
                  <button
                    onClick={() => setModal({ open: true, post })}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-pink-500 transition-colors focus:outline-none"
                  >
                    Read More <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </section>
          {/* Blog Modal */}
          {modal.open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-2xl font-bold focus:outline-none"
                  onClick={() => setModal({ open: false })}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                  {modal.post?.title}
                </h2>
                <img src={modal.post?.image} alt={modal.post?.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <p className="text-gray-700 dark:text-gray-200 text-base mb-4">{modal.post?.excerpt}</p>
                <p className="text-gray-600 dark:text-gray-300 text-base">Full article content coming soon.</p>
              </div>
            </div>
          )}
        </main>
      </section>
        <CTA/>
      <Footer />
      <style jsx>{`
        .container {
          padding: 2rem;
          max-width: 1200px;
          margin: auto;
        }

        .heading {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
        }

        .posts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .image-container {
          background-color: #eee;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-bottom: 1px solid #ddd;
        }

        .content {
          padding: 1rem;
        }

        .card h2 {
          font-size: 1.3rem;
          margin: 0 0 0.5rem;
        }

        .card p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 0.5rem;
        }

        .card time {
          font-size: 0.85rem;
          color: #888;
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
