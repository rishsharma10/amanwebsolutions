export interface CaseStudyItem {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  industrySlug: string;
  liveUrl?: string;
  heroImage: string;
  summary: string;
  problem: string;
  goals: string[];
  challenges: string[];
  solution: string;
  architecture: string;
  features: { title: string; desc: string }[];
  techStack: string[];
  implementation: string;
  outcomes: string[];
  relatedServices: { slug: string; title: string }[];
  ctaHeading: string;
  ctaSubheading: string;
}

export const caseStudiesData: Record<string, CaseStudyItem> = {
  'madam-jan': {
    slug: 'madam-jan',
    title: 'Interactive 3D Storefront & Custom Shopify Architecture',
    clientName: 'Madam Jan',
    industry: 'Retail & Homeware',
    industrySlug: 'retail',
    liveUrl: 'https://madamjanindia.com/',
    heroImage: 'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary: 'A design-forward homeware brand required a digital flagship capable of translating the physical tactile quality of handcrafted goods into an immersive online shopping experience without sacrificing mobile responsiveness.',
    problem: 'Standard off-the-shelf ecommerce templates flattened the distinct character of artisanal homeware. Static photography failed to communicate material finishes and proportions, while bloated third-party customizer plugins degraded page load speed.',
    goals: [
      'Showcase tactile textures and dimensions through lightweight 3D product previews.',
      'Achieve sub-second catalog navigation and fluid mobile browsing.',
      'Provide the internal merchandising team with modular control over promotions and seasonal stories in Shopify.'
    ],
    challenges: [
      'Rendering interactive 3D WebGL assets on constrained mobile devices without consuming excessive memory.',
      'Maintaining clean theme code without accumulating sluggish third-party app dependencies.'
    ],
    solution: 'We engineered a bespoke Shopify Online Store 2.0 theme integrated with an optimized Three.js 3D model viewer. We replaced monolithic app plugins with lightweight native Liquid sections and custom client-side state management for cart operations.',
    architecture: 'Custom Shopify Liquid theme utilizing modern ES modules for interactive 3D asset instantiation, combined with responsive image srcsets and pre-cached variant selectors.',
    features: [
      { title: 'Interactive 3D Visualizer', desc: 'Shoppers rotate and examine products in real time with realistic lighting and texture maps.' },
      { title: 'Dynamic Bundle Builder', desc: 'Custom bundling logic that allows customers to curate matching dinnerware sets with automatic tier discounts.' },
      { title: 'Frictionless Slide-Out Cart', desc: 'Instant cart updates with automated free-shipping threshold meters and one-click checkout.' }
    ],
    techStack: ['Shopify Liquid', 'Three.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Shopify Storefront API'],
    implementation: 'Over a 6-week development cycle, we optimized 3D glTF models down to under 1.5MB each, implemented responsive lazy loading, and built 18 custom theme sections in Shopify Theme Customizer.',
    outcomes: [
      'Elevated brand prestige, establishing the digital store as a high-end design destination.',
      'Substantially reduced page weight and eliminated mobile interaction lag.',
      'Empowered the client marketing team to launch new campaigns in minutes without developer intervention.'
    ],
    relatedServices: [
      { slug: 'shopify-development', title: 'Custom Shopify Development' },
      { slug: 'ecommerce-development', title: 'Ecommerce Technology' },
      { slug: 'web-development', title: 'Web Application Development' }
    ],
    ctaHeading: 'Ready to build a standout ecommerce experience?',
    ctaSubheading: 'Let us engineer a custom storefront that highlights your product craftsmanship.'
  },

  'evitavonni': {
    slug: 'evitavonni',
    title: 'Artisanal Luxury Digital Showcase & Architecture Lookbook',
    clientName: 'Evitavonni',
    industry: 'Manufacturing & Luxury Design',
    industrySlug: 'manufacturing',
    liveUrl: 'https://www.evitavonni.com/',
    heroImage: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary: 'An international luxury couture and architectural fabric house needed an editorial digital platform to connect global interior architects with bespoke textile collections.',
    problem: 'The previous website was clunky and difficult to navigate on mobile devices. High-resolution fabric details appeared pixelated or caused severe page freezing, hindering trade partnerships with design studios.',
    goals: [
      'Deliver fluid, magazine-grade visual storytelling with high-fidelity textile zoom.',
      'Streamline sample request workflows for verified commercial interior designers.',
      'Ensure flawless performance across desktop workstations, tablets, and mobile devices.'
    ],
    challenges: [
      'Displaying hundreds of ultra-high-resolution textile images without slowing initial page render.',
      'Crafting delicate typography and layout hierarchies that reflect heritage luxury aesthetics.'
    ],
    solution: 'We engineered a high-performance web experience utilizing hardware-accelerated animations (GSAP), adaptive image delivery, and a dedicated B2B trade swatch request portal.',
    architecture: 'Component-driven frontend architecture with dynamic responsive image pipelines, lazy asset loading, and serverless form dispatch.',
    features: [
      { title: 'High-Fidelity Fabric Zoom', desc: 'Inspect thread weaves and artisanal textures down to microscopic detail with zero lag.' },
      { title: 'Curated Collection Lookbooks', desc: 'Immersive editorial layouts pairing architectural photography with material swatches.' },
      { title: 'Trade Designer Swatch Portal', desc: 'Streamlined sample request pipeline integrated directly with the showroom distribution team.' }
    ],
    techStack: ['React', 'Next.js', 'GSAP', 'TypeScript', 'Tailwind CSS', 'AWS S3'],
    implementation: 'We developed custom image optimization pipelines using modern WebP formats, configured smooth scroll orchestrations, and designed a distraction-free editorial interface.',
    outcomes: [
      'Successfully revitalized the brand’s global digital presence across luxury architectural markets.',
      'Significantly accelerated sample inquiry turnaround times between showrooms and designers.',
      'Delivered seamless browsing across ultra-wide desktop monitors and mobile devices.'
    ],
    relatedServices: [
      { slug: 'web-development', title: 'Web Application Development' },
      { slug: 'custom-software-development', title: 'Custom Software Development' }
    ],
    ctaHeading: 'Need an exacting digital presence for your brand?',
    ctaSubheading: 'We engineer digital platforms that balance breathtaking aesthetics with engineering discipline.'
  },

  'skillytalk-ai': {
    slug: 'skillytalk-ai',
    title: 'AI Candidate Interview Simulation & Assessment Platform',
    clientName: 'SkillyTalk AI',
    industry: 'Recruitment & HR Tech',
    industrySlug: 'recruitment',
    liveUrl: 'https://aiinterview.skillytalk.com/',
    heroImage: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary: 'An AI-powered SaaS platform that automates first-round talent evaluations through structured, asynchronous video interviews and objective rubric scoring.',
    problem: 'Recruitment teams spend hundreds of hours conducting repetitive initial screening calls. Inconsistent interview questions and scheduling delays created hiring bottlenecks and allowed top talent to drop off.',
    goals: [
      'Enable candidates to complete structured, timed assessments asynchronously from any browser.',
      'Deliver automated competency scoring and diagnostic transcripts to hiring managers.',
      'Provide enterprise recruitment teams with collaborative pipeline dashboards.'
    ],
    challenges: [
      'Handling real-time browser video recording and audio streaming reliably across diverse internet bandwidth conditions.',
      'Engineering deterministic scoring rubrics that evaluate genuine domain competence without hallucinations.'
    ],
    solution: 'We engineered the full-stack SkillyTalk platform from scratch: browser WebRTC video capture, secure cloud transcoding, LLM-driven structured response evaluation, and a real-time recruiter review dashboard.',
    architecture: 'Next.js full-stack platform backed by PostgreSQL with Row-Level Security, AWS S3 video chunking, WebRTC capture, and worker queues for asynchronous LLM evaluation.',
    features: [
      { title: 'Browser Video & Audio Recording', desc: 'Reliable in-browser recording with automatic camera/mic diagnostics and low-bandwidth fallback.' },
      { title: 'AI Competency Scoring Engine', desc: 'Evaluates candidate answers against job-specific rubrics, generating concise summaries and key takeaways.' },
      { title: 'Collaborative Recruiter Dashboard', desc: 'Team review workflows with shared comments, candidate ranking, and exportable PDF summaries.' }
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'AWS S3', 'OpenAI API', 'Stripe'],
    implementation: 'Delivered in an agile 8-week sprint covering system architecture, candidate assessment simulator, video ingestion pipelines, and multi-tenant recruiter workspaces.',
    outcomes: [
      'Compressed candidate screening turnaround from days down to instant reviewable digests.',
      'Provided candidates the flexibility to interview outside traditional business hours.',
      'Equipped hiring managers with verifiable, objective evaluation criteria.'
    ],
    relatedServices: [
      { slug: 'ai-development', title: 'Custom AI Development' },
      { slug: 'saas-development', title: 'SaaS Platform Development' },
      { slug: 'ai-agents', title: 'AI Agent Development' }
    ],
    ctaHeading: 'Looking to build an innovative AI product or SaaS?',
    ctaSubheading: 'We partner with founders to turn complex AI workflows into reliable, scalable software.'
  },

  'pali-yoga': {
    slug: 'pali-yoga',
    title: 'Digital Wellness & Mindfulness Community Platform',
    clientName: 'Pali Yoga',
    industry: 'Healthcare & Wellness',
    industrySlug: 'healthcare',
    liveUrl: 'https://pali.yoga/',
    heroImage: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary: 'A boutique wellness and yoga studio required a calming, accessible digital space to manage daily class schedules, instructor profiles, and student registrations.',
    problem: 'The studio relied on disorganized social media posts and manual WhatsApp messages for class schedules, leading to confused students, missed spots, and high administrative friction for instructors.',
    goals: [
      'Create a serene, high-performance web platform reflecting the studio’s mindful ethos.',
      'Automate daily and weekly class schedules with live teacher availability.',
      'Enable students to reserve spots quickly on mobile devices.'
    ],
    challenges: [
      'Designing an interface that feels calm, spacious, and uncluttered while displaying dense timetable schedules.',
      'Ensuring instant page rendering for mobile users checking morning schedules on the go.'
    ],
    solution: 'We designed and engineered a custom web platform with intuitive timetable filters (by instructor, style, and time of day), smooth mobile navigation, and automated session notifications.',
    architecture: 'Clean frontend architecture paired with responsive caching, semantic HTML, and structured LocalBusiness and Event schema markup for organic local visibility.',
    features: [
      { title: 'Interactive Timetable Matrix', desc: 'Filter classes by discipline, intensity, and instructor with one tap.' },
      { title: 'Instructor Story Profiles', desc: 'Dedicated pages detailing teacher backgrounds, certifications, and teaching philosophies.' },
      { title: 'One-Tap Mobile Reservation', desc: 'Frictionless booking workflow connected directly to the studio coordinator.' }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    implementation: 'We prioritized accessibility, serene earth-tone palettes, and instant mobile load times, delivering the complete platform in 4 weeks.',
    outcomes: [
      'Eliminated manual schedule messaging, centralizing all community bookings on the web.',
      'Significantly improved local search visibility for wellness seekers in the area.',
      'Provided students with a calming, trustworthy digital booking experience.'
    ],
    relatedServices: [
      { slug: 'web-development', title: 'Web Application Development' },
      { slug: 'custom-software-development', title: 'Custom Software Development' }
    ],
    ctaHeading: 'Need a digital platform for your wellness or service business?',
    ctaSubheading: 'Let us build a customer-first web experience that simplifies your operations.'
  },

  'sasco-student-living': {
    slug: 'sasco-student-living',
    title: 'Student Housing & Residential Lease Management Portal',
    clientName: 'Sasco Student Living',
    industry: 'Real Estate & Property',
    industrySlug: 'real-estate',
    heroImage: 'https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary: 'A premium student accommodation operator needed a modern web portal to showcase furnished housing options, streamline virtual tours, and collect residential applications.',
    problem: 'Prospective students and parents struggled to evaluate room layouts and amenities through static PDF brochures. High seasonal application volumes created email inbox gridlock for leasing staff.',
    goals: [
      'Showcase diverse room categories with transparent pricing and included utility breakdowns.',
      'Enable students to book viewing appointments and submit preliminary leasing applications online.',
      'Reduce leasing staff administrative overhead during peak back-to-school intake windows.'
    ],
    challenges: [
      'Managing high-traffic spikes during university acceptance windows without server downtime.',
      'Presenting complex room tier pricing and academic-term lease structures clearly.'
    ],
    solution: 'We engineered a responsive residential portal featuring comprehensive room visualizers, neighborhood maps, an automated application intake pipeline, and integrated calendar booking.',
    architecture: 'Next.js App Router architecture deployed on resilient cloud infrastructure with automated database backups and rate-limited form submissions.',
    features: [
      { title: 'Room Category Explorer', desc: 'Filter housing by private ensuite, shared studio, lease term, and floor level.' },
      { title: 'Digital Lease Application', desc: 'Multi-step student intake capturing academic proofs, guarantor details, and move-in dates.' },
      { title: 'Automated Viewing Scheduler', desc: 'Syncs student viewing appointments directly into building manager calendars.' }
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'SendGrid'],
    implementation: 'Delivered an intuitive, mobile-optimized experience with clear CTAs, transparent FAQs, and automated confirmation emails for all applicant inquiries.',
    outcomes: [
      'Streamlined student intake, eliminating hundreds of back-and-forth emails during peak season.',
      'Provided parents and students transparent information regarding security and facilities.',
      'Maximized seasonal occupancy through fast digital application turnarounds.'
    ],
    relatedServices: [
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'web-development', title: 'Web Application Development' }
    ],
    ctaHeading: 'Ready to modernize your property or leasing operations?',
    ctaSubheading: 'We build custom portals that simplify customer onboarding and save staff time.'
  },

  'abundish': {
    slug: 'abundish',
    title: 'Direct-to-Consumer Culinary Ordering & Dispatch Engine',
    clientName: 'Abundish',
    industry: 'Restaurants & Hospitality',
    industrySlug: 'restaurants',
    heroImage: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    summary: 'A fresh culinary brand created a direct-to-consumer digital ordering channel to bypass heavy third-party aggregator commissions and own their guest relationships.',
    problem: 'Third-party delivery platforms took 30% of each order and withheld guest contact information, preventing repeat marketing and squeezing food margins.',
    goals: [
      'Build a mobile-first direct ordering website with zero commission fees.',
      'Integrate seamless payment processing and real-time order tracking.',
      'Automate kitchen order ticket generation and driver dispatch notifications.'
    ],
    challenges: [
      'Minimizing ordering friction on smartphones so hungry diners complete checkout in under 60 seconds.',
      'Accurately pacing kitchen order volume during dinner peaks.'
    ],
    solution: 'We engineered a blisteringly fast direct ordering web application featuring optimistic cart updates, Google Pay/Apple Pay integration, and automated webhook dispatch to the kitchen.',
    architecture: 'Next.js frontend communicating with a lightweight Node.js API that processes orders, charges cards via Stripe, and triggers SMS updates via Twilio.',
    features: [
      { title: 'Lightning-Fast Mobile Ordering', desc: 'Browse dishes with dietary tags (vegan, gluten-free) and customize sides with immediate cart feedback.' },
      { title: 'One-Touch Mobile Payments', desc: 'Instant checkout supporting Apple Pay, Google Pay, and saved cards.' },
      { title: 'Real-Time Order Telemetry', desc: 'Customers track prep status from order placed to kitchen cooking to driver dispatch.' }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Stripe', 'Twilio', 'PostgreSQL'],
    implementation: 'Built and deployed within 5 weeks, including automated receipt printing integration and live driver notification alerts.',
    outcomes: [
      'Successfully captured direct customer orders, keeping 100% of dish revenue inside the business.',
      'Built a direct database of loyal, recurring customers for weekly email promotions.',
      'Delivered a polished ordering experience superior to cluttered food aggregator apps.'
    ],
    relatedServices: [
      { slug: 'ecommerce-development', title: 'Ecommerce Technology' },
      { slug: 'web-development', title: 'Web Application Development' },
      { slug: 'custom-software-development', title: 'Custom Software Development' }
    ],
    ctaHeading: 'Want to launch a direct ordering or commerce channel?',
    ctaSubheading: 'Let us build a high-performance system that protects your business margins.'
  }
};
