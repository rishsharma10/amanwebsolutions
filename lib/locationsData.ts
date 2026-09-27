export interface LocationService {
  title: string;
  desc: string;
  iconName?: string;
}

export interface LocalPriceTier {
  name: string;
  idealFor: string;
  features: string[];
  timeline: string;
}

export interface LocationItem {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  localIntro: string;
  targetAudience: string;
  localServices: LocationService[];
  keyBenefits: { title: string; desc: string }[];
  priceTiers: LocalPriceTier[];
  localFaqs: { q: string; a: string }[];
  nearbyAreas: string[];
}

export const locationsData: Record<string, LocationItem> = {
  chandigarh: {
    slug: 'chandigarh',
    city: 'Chandigarh',
    region: 'Tricity, Punjab & Haryana',
    metaTitle: 'Web Designing & Development Company in Chandigarh | Vidhyonix',
    metaDescription: 'Vidhyonix is the top web designing and website development company in Chandigarh. We build custom business websites, e-commerce stores, SaaS apps, and AI solutions for Chandigarh businesses.',
    heroTitle: 'Web Designing & Website Development Company in Chandigarh',
    heroSubtitle: 'We empower Chandigarh businesses, startups, and enterprises with lightning-fast Next.js websites, custom web applications, AI automation, and high-converting digital platforms.',
    localIntro: 'From Rajiv Gandhi Chandigarh Technology Park (IT Park) to Sector 17, Sector 34 commercial hubs, and Elante area businesses, Vidhyonix delivers modern, SEO-optimized web solutions tailored for Chandigarh’s ambitious business community.',
    targetAudience: 'Local business owners, professional service providers, retail brands, healthcare clinics, and tech startups in Chandigarh looking to dominate local search and generate qualified inbound leads.',
    localServices: [
      {
        title: 'Custom Business Website Development',
        desc: 'Blisteringly fast, modern Next.js business websites built for maximum conversion, green Google Core Web Vitals, and top ranking on local Google searches.',
      },
      {
        title: 'E-Commerce Website Solutions',
        desc: 'Custom online stores with seamless payment gateway integration (Razorpay, Stripe, UPI), automated inventory sync, and high-speed mobile shopping UX.',
      },
      {
        title: 'SaaS MVP & Startup Engineering',
        desc: 'Turn your software idea into an investor-ready SaaS MVP in 4 to 8 weeks with scalable multi-tenant architecture and subscription billing.',
      },
      {
        title: 'AI Automation & Local Business Chatbots',
        desc: 'Automate customer support and appointment booking with 24/7 AI agents and WhatsApp chatbots trained on your business offerings.',
      },
      {
        title: 'Local SEO & Lead Generation Architecture',
        desc: 'Built-in local SEO schemas, lightning page speeds, and conversion-focused contact funnels engineered to capture local searchers in Chandigarh.',
      },
    ],
    keyBenefits: [
      {
        title: 'Local Tricity Presence & Support',
        desc: 'Direct consultation and continuous dedicated support right here in the Tricity area.',
      },
      {
        title: 'Zero WordPress Lag or Security Hacks',
        desc: 'We build with modern full-stack tech (Next.js, React, Node.js, PostgreSQL) that outperforms slow, vulnerable WordPress templates.',
      },
      {
        title: '100% IP & Code Ownership',
        desc: 'You retain full ownership of all source code, database architecture, and design assets without recurring seat licenses.',
      },
      {
        title: 'Local Google Search Optimization',
        desc: 'Every website includes high-intent structured schema tags, fast mobile rendering, and optimized local metadata to rank fast in Chandigarh.',
      },
    ],
    priceTiers: [
      {
        name: 'Starter Business Website',
        idealFor: 'Local service businesses, clinics, consultants, and SMBs looking for a professional digital storefront.',
        features: ['5 to 8 Custom Pages', 'Mobile Responsive & Modern UI', 'Local SEO & Google Schema Integration', 'WhatsApp & Direct Lead Forms', 'Sub-second Page Load Speed'],
        timeline: '1 to 2 Weeks',
      },
      {
        name: 'Growth E-Commerce / Custom App',
        idealFor: 'Retailers, D2C brands, and growing companies needing online ordering or client portals.',
        features: ['Full E-Commerce Product Catalog', 'Razorpay / Stripe / UPI Payments', 'Customer Account Portal', 'Inventory & Order Dashboard', 'Advanced Analytics & Tracking'],
        timeline: '3 to 5 Weeks',
      },
      {
        name: 'Enterprise / Custom SaaS MVP',
        idealFor: 'Tech startups, software ventures, and enterprises building specialized digital products.',
        features: ['Full-Stack Next.js + Node.js Architecture', 'Multi-tenant User Roles & Auth', 'Custom Database & API Endpoints', 'AI Agent / Chatbot Integration', 'Dedicated CI/CD Cloud Deployment'],
        timeline: '4 to 8 Weeks',
      },
    ],
    localFaqs: [
      {
        q: 'Why should a Chandigarh business choose custom Next.js development over WordPress?',
        a: 'Traditional WordPress templates are notoriously slow, bloated, and prone to security hacks. Our custom Next.js websites deliver instant sub-second load speeds, clean code that Google loves for local SEO ranking, and bulletproof security.',
      },
      {
        q: 'How long does it take to build a business website in Chandigarh?',
        a: 'A standard professional business website takes 1 to 2 weeks, while complex e-commerce stores or custom SaaS web apps take 3 to 6 weeks depending on requirements.',
      },
      {
        q: 'Can we meet face-to-face for project discussion in Chandigarh / Tricity?',
        a: 'Yes! Our team operates in the Tricity area (Mohali/Chandigarh). We are happy to arrange direct strategy calls or local in-person meetings to map out your requirements.',
      },
      {
        q: 'Will my website rank on Google for local searches in Chandigarh?',
        a: 'Yes. Every website we build includes local schema markup, optimized meta titles, semantic headings, fast mobile responsiveness, and sitemap registration to rank high for Chandigarh intent queries.',
      },
    ],
    nearbyAreas: ['Sector 17', 'Sector 34', 'IT Park Chandigarh', 'Manimajra', 'Sector 35', 'Sector 8', 'Elante Commercial Complex'],
  },

  mohali: {
    slug: 'mohali',
    city: 'Mohali (SAS Nagar)',
    region: 'Tricity, Punjab',
    metaTitle: 'Website Development & Web Designing Company in Mohali | Vidhyonix',
    metaDescription: 'Leading website development and web designing company in Mohali (SAS Nagar). We build custom business websites, mobile apps, SaaS platforms, and AI automation for Mohali companies.',
    heroTitle: 'Website Development & Web Designing Company in Mohali',
    heroSubtitle: 'Build a high-performance business website, custom web application, or AI-powered product with Mohali’s premier product engineering team.',
    localIntro: 'Located at the heart of Punjab’s IT and industrial expansion, from Sector 67 & Sector 74 IT City to Phase 8, Phase 9, and Phase 11 industrial areas in Mohali, Vidhyonix brings world-class software engineering directly to local growing businesses.',
    targetAudience: 'Software startups, IT companies, manufacturing firms, healthcare providers, and local business owners in SAS Nagar Mohali seeking superior digital performance.',
    localServices: [
      {
        title: 'Business Website & Portal Development',
        desc: 'High-converting custom websites designed to convert local Mohali website visitors into phone calls, inquiries, and paying clients.',
      },
      {
        title: 'Custom Software & ERP Development',
        desc: 'Tailored web platforms and internal operational dashboards that digitize manual workflows for manufacturing and service businesses in Mohali.',
      },
      {
        title: 'Mobile App Development (iOS & Android)',
        desc: 'Native-feel cross-platform mobile apps for field service, customer ordering, healthcare booking, and business operations.',
      },
      {
        title: 'AI Agent & WhatsApp Automation',
        desc: 'Automate incoming customer inquiries, lead qualification, and appointment reminders using custom AI voice & text agents.',
      },
      {
        title: 'Headless E-Commerce & Retail Stores',
        desc: 'Fast, secure online shopping experiences with automated invoice creation, payment gateway integration, and inventory sync.',
      },
    ],
    keyBenefits: [
      {
        title: 'Based in Tricity / Mohali Hub',
        desc: 'Fast communication, local accountability, and rapid deployment for Mohali-based enterprises and startups.',
      },
      {
        title: 'High-Conversion UX & SEO First',
        desc: 'Designed specifically to help Mohali businesses capture high-value clients across Google search and digital channels.',
      },
      {
        title: 'Scalable Engineering Standards',
        desc: 'Built using enterprise-grade tech stacks (TypeScript, Next.js, Node.js, AWS) so your software scales effortlessly as your business grows.',
      },
      {
        title: 'Transparent Local Pricing',
        desc: 'Clear upfront milestone pricing with zero hidden maintenance fees or surprise licensing costs.',
      },
    ],
    priceTiers: [
      {
        name: 'Professional Business Website',
        idealFor: 'Mohali businesses, factories, service hubs, and clinics needing strong Google presence.',
        features: ['5 to 10 Custom Designed Pages', 'High-Speed Mobile & Desktop UI', 'Local Google Maps & Schema Setup', 'Interactive Lead Forms & Click-to-Call', 'Complete Source Code Ownership'],
        timeline: '1 to 2 Weeks',
      },
      {
        name: 'Custom Web Portal / E-Commerce',
        idealFor: 'Manufacturers, distributors, and online stores wanting custom client or ordering portals.',
        features: ['Dynamic Product / Catalog Management', 'Secure Payment Gateway Integration', 'Customer Accounts & Order Tracking', 'Database Integration & Admin Panel', 'SEO & Speed Optimization'],
        timeline: '3 to 5 Weeks',
      },
      {
        name: 'SaaS MVP & AI Automation Platform',
        idealFor: 'IT startups and scaling ventures in Mohali IT City building propriety web apps.',
        features: ['Complete Next.js + Cloud Backend', 'Multi-tenant User Auth & Subscriptions', 'Custom AI Chatbot or Workflow Automation', 'API Integrations & Payment Triggers', 'Deployment on AWS / Vercel'],
        timeline: '4 to 8 Weeks',
      },
    ],
    localFaqs: [
      {
        q: 'Why should I hire a local Mohali web development agency like Vidhyonix?',
        a: 'Working with a local Tricity/Mohali team gives you face-to-face communication, shared time zones, clear accountability, and deep knowledge of the local commercial landscape, combined with global engineering standards.',
      },
      {
        q: 'Can you upgrade or redesign an existing slow website for a Mohali business?',
        a: 'Absolutely. We specialize in modernizing outdated, slow WordPress or Wix websites into lightning-fast Next.js web applications that rank higher on Google and convert more visitors.',
      },
      {
        q: 'Do you offer ongoing maintenance for websites in Mohali?',
        a: 'Yes, we provide flexible ongoing maintenance, cloud hosting management, monthly performance optimization, and content updates to keep your business running smoothly.',
      },
    ],
    nearbyAreas: ['IT City Mohali (Sector 82/83)', 'Phase 8 Mohali', 'Phase 9 Industrial Area', 'Phase 11', 'Sector 67', 'Sector 70', 'Kharar'],
  },

  panchkula: {
    slug: 'panchkula',
    city: 'Panchkula',
    region: 'Tricity, Haryana',
    metaTitle: 'Web Development & Custom Software Services in Panchkula | Vidhyonix',
    metaDescription: 'Looking for a reliable web development company in Panchkula? Vidhyonix creates business websites, e-commerce stores, and software solutions for Panchkula businesses.',
    heroTitle: 'Top Business Website & Software Development Company in Panchkula',
    heroSubtitle: 'Elevate your Panchkula business with high-performance web platforms, local SEO lead generation, e-commerce stores, and custom software engineered for growth.',
    localIntro: 'Serving businesses across Sector 5, Sector 11, Sector 20, MDC Sector 4, and the Industrial Area Phase 1 & 2 in Panchkula, Vidhyonix provides custom digital engineering that transforms local market presence.',
    targetAudience: 'Panchkula business owners, healthcare practices, real estate firms, educational institutes, and retail brands seeking digital dominance in Haryana & Tricity.',
    localServices: [
      {
        title: 'High-Converting Business Websites',
        desc: 'Sleek, responsive websites optimized to convert local Panchkula traffic into inquiries and appointments.',
      },
      {
        title: 'Local Service & Healthcare Web Portals',
        desc: 'Custom online appointment scheduling, service catalogs, and lead capture systems for Panchkula clinics & firms.',
      },
      {
        title: 'E-Commerce & Online Storefronts',
        desc: 'Sell products online across India with fast mobile checkout, automated shipping calculators, and Razorpay/UPI integration.',
      },
      {
        title: 'Custom Software & CRM Automation',
        desc: 'Streamline team operations, inventory management, and customer tracking with custom cloud-based tools.',
      },
      {
        title: 'AI Chatbots & 24/7 Customer Support',
        desc: 'Deploy AI agents on your website to answer visitor questions, capture phone numbers, and schedule meetings around the clock.',
      },
    ],
    keyBenefits: [
      {
        title: 'Tailored for Panchkula Commercial Market',
        desc: 'Designed specifically to capture Panchkula and Tricity search traffic.',
      },
      {
        title: 'Fast Mobile Performance',
        desc: 'Over 70% of local searches happen on mobile devices—our sites load instantly on 4G/5G connections.',
      },
      {
        title: 'Local SEO Included Standard',
        desc: 'Complete schema markup, meta titles, Google Search Console indexing, and local map pack readiness.',
      },
      {
        title: 'Dedicated Account Engineer',
        desc: 'Direct communication with software developers, not non-technical project managers.',
      },
    ],
    priceTiers: [
      {
        name: 'Panchkula Business Website',
        idealFor: 'Local businesses, clinics, institutes, and service agencies in Panchkula.',
        features: ['5 to 8 Custom Pages', 'Responsive Design & Fast Loading', 'Local SEO Schema Setup', 'WhatsApp / Call Lead Triggers', 'Free Hosting Setup & SSL'],
        timeline: '1 to 2 Weeks',
      },
      {
        name: 'E-Commerce & Online Store',
        idealFor: 'Local retailers, boutiques, and product brands expanding to nationwide online sales.',
        features: ['Product Catalog & Search Filters', 'Integrated Payment Gateway (UPI, Cards, Netbanking)', 'Order Management Dashboard', 'SEO Optimized Product Pages', 'Customer Review Module'],
        timeline: '3 to 4 Weeks',
      },
      {
        name: 'Custom Web App / Portal',
        idealFor: 'Companies requiring custom portals, booking platforms, or internal operations software.',
        features: ['Full Stack Architecture', 'User Accounts & Roles', 'Custom Workflows & Database', 'Third-Party API Integrations', 'Ongoing Tech Support'],
        timeline: '4 to 6 Weeks',
      },
    ],
    localFaqs: [
      {
        q: 'How does a new website help my Panchkula business get more customers?',
        a: 'When local residents search Google for services in Panchkula, a fast, SEO-optimized website with clear contact buttons ensures your business appears first and converts visitors into paying leads.',
      },
      {
        q: 'What is the cost of website development in Panchkula?',
        a: 'Our business website packages start with clear transparent tier pricing depending on page count and custom features, ensuring high ROI for Panchkula SMBs.',
      },
      {
        q: 'Do you help with domain name registration and hosting?',
        a: 'Yes, we take care of complete setup including domain registration, secure SSL certificates, ultra-fast cloud hosting, and professional business emails.',
      },
    ],
    nearbyAreas: ['Sector 5 Panchkula', 'Sector 11', 'Sector 20', 'MDC Sector 4', 'Industrial Area Phase 1 & 2', 'Pinjore', 'Kalka'],
  },

  tricity: {
    slug: 'tricity',
    city: 'Tricity (Chandigarh - Mohali - Panchkula)',
    region: 'Punjab & Haryana Region',
    metaTitle: 'Best Web Development & IT Company in Tricity | Chandigarh Mohali Panchkula',
    metaDescription: 'Vidhyonix is the leading web development, AI & software engineering company in Tricity. We build business websites, e-commerce stores, SaaS apps, and AI solutions.',
    heroTitle: 'The Premier IT, Web & AI Development Partner in Tricity',
    heroSubtitle: 'Connecting businesses across Chandigarh, Mohali, and Panchkula with modern digital engineering, custom software, AI automation, and high-converting web apps.',
    localIntro: 'As a unified commercial hub of over 2 million residents and thousands of businesses, the Tricity region (Chandigarh, SAS Nagar Mohali, Panchkula) demands world-class digital technology. Vidhyonix bridges local commercial proximity with enterprise software capability.',
    targetAudience: 'Growing enterprises, SMBs, retail groups, educational institutions, tech startups, and professional firms across the entire Chandigarh Tricity region.',
    localServices: [
      {
        title: 'Tricity Business Website Engineering',
        desc: 'High-speed Next.js business websites built for maximum organic visibility across Chandigarh, Mohali, and Panchkula.',
      },
      {
        title: 'Custom SaaS & Cloud Software Development',
        desc: 'Full-stack SaaS application development for startups and tech companies in the Tricity innovation corridor.',
      },
      {
        title: 'E-Commerce Platforms & D2C Technology',
        desc: 'Custom online stores engineered for fast mobile checkout, local payment processing, and high conversion rates.',
      },
      {
        title: 'AI Workflow Automation & Voice Agents',
        desc: 'Deploy custom AI chatbots, automated lead qualification, and telephony voice agents that operate 24/7.',
      },
      {
        title: 'Mobile App Development (iOS & Android)',
        desc: 'Scalable cross-platform mobile apps for customer retention, delivery tracking, healthcare, and service operations.',
      },
    ],
    keyBenefits: [
      {
        title: 'Unified Tricity Coverage',
        desc: 'Seamless service and direct face-to-face consultation across Chandigarh, Mohali, and Panchkula.',
      },
      {
        title: 'Proven Digital Growth Tech',
        desc: 'We engineer digital platforms using the exact tech stack (Next.js, React, TypeScript, Node.js) used by top tech companies globally.',
      },
      {
        title: 'High ROI & Conversion Focus',
        desc: 'We don’t just build visually stunning websites; we design user funnels specifically optimized to convert clicks into sales inquiries.',
      },
      {
        title: 'End-to-End Partnership',
        desc: 'From initial UI/UX wireframes to deployment, local SEO ranking, and cloud maintenance, we are your long-term technology partner.',
      },
    ],
    priceTiers: [
      {
        name: 'Tricity Business Website',
        idealFor: 'Local businesses looking for a dominant online presence across Chandigarh, Mohali & Panchkula.',
        features: ['Custom Next.js Frontend', 'Local SEO & Schema Optimization', 'Mobile Responsive UI', 'WhatsApp & Lead Forms', 'Green Core Web Vitals Score'],
        timeline: '1 to 2 Weeks',
      },
      {
        name: 'E-Commerce & Digital Portal',
        idealFor: 'Brands and distributors serving regional or nationwide online customers.',
        features: ['Full Online Store System', 'Payment Gateways & UPI', 'Order Management & Invoicing', 'Customer Accounts', 'Speed & Security Guarantee'],
        timeline: '3 to 5 Weeks',
      },
      {
        name: 'Enterprise Software & AI Platform',
        idealFor: 'Startups and corporations building custom web applications or AI products.',
        features: ['Full Stack Architecture', 'Multi-tenant User Roles', 'Custom API & DB Pipeline', 'AI Chatbot / Voice Integration', 'Dedicated DevOps & Hosting'],
        timeline: '4 to 8 Weeks',
      },
    ],
    localFaqs: [
      {
        q: 'Which areas in Tricity do you cover?',
        a: 'We cover the entire Tricity area, including Chandigarh (all sectors & IT Park), SAS Nagar Mohali (Phases 1-11, IT City, Sector 67-82), and Panchkula (Sectors 1-21, MDC, Industrial Area), as well as Zirakpur and Kharar.',
      },
      {
        q: 'How do I get started with a website or software project with Vidhyonix?',
        a: 'Simply fill out our contact form or call us directly. We will schedule a free 30-minute discovery consultation (online or in-person in Tricity) to discuss your goals and provide a clear quote.',
      },
      {
        q: 'What makes Vidhyonix different from traditional local web agencies in Tricity?',
        a: 'Most traditional agencies use slow, pre-built WordPress themes that lag and fail security audits. We engineer custom Next.js and full-stack software that loads under 1 second, ranks higher on Google, and is 100% custom-built for your business.',
      },
    ],
    nearbyAreas: ['Chandigarh', 'SAS Nagar Mohali', 'Panchkula', 'Zirakpur', 'Kharar', 'IT Park Chandigarh', 'IT City Mohali'],
  },
};
