"use client";

import * as React from "react";
import Head from "next/head";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <section className="relative min-h-screen flex items-center pt-32">
        <main className="container">
          <h1 className="heading">Web & App Development Blog</h1>
          <section className="posts">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AspectRatio.Root ratio={16 / 9} className="image-container">
                  <img src={post.image} alt={post.title} className="image" />
                </AspectRatio.Root>
                <div className="content">
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <time>{post.date}</time>
                </div>
              </article>
            ))}
          </section>
        </main>
      </section>
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
