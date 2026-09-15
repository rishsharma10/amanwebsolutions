export interface IndustryData {
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  industryProblem: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  aiOpportunities: { title: string; desc: string }[];
  automationOpportunities: { title: string; desc: string }[];
  softwareOpportunities: { title: string; desc: string }[];
  integrations: string[];
  techStack: string[];
  caseStudy: {
    title: string;
    clientName: string;
    problem: string;
    solution: string;
    impact: string;
    link?: string;
  };
  faqs: { q: string; a: string }[];
}

export const industriesData: Record<string, IndustryData> = {
  // ==================== 1. RETAIL & COMMERCE ====================
  'retail': {
    slug: 'retail',
    title: 'Retail & Consumer Goods Technology',
    heroHeadline: 'High-Performance Software & AI Engineering for Modern Retail',
    heroSubheadline: 'We build fast digital storefronts, real-time inventory synchronization systems, AI product discovery, and omnichannel commerce platforms.',
    industryProblem: 'Retail brands struggle with disconnected channels: inventory counts drift between brick-and-mortar stores and ecommerce sites, legacy storefronts load too slowly for mobile shoppers, and customers encounter frustrating search experiences.',
    challenges: [
      { title: 'Fragmented Channel Silos', desc: 'In-store point of sale and online carts operate on disparate databases, leading to stockouts and painful manual reconciliations.' },
      { title: 'Sluggish Storefront Speed', desc: 'Every 100ms of latency degrades mobile conversion rates and drives frustrated shoppers to larger marketplace competitors.' },
      { title: 'Generic Discovery Experience', desc: 'Basic keyword search fails to understand conversational buyer intent, typos, and nuanced product attributes.' }
    ],
    solutions: [
      { title: 'Unified Omnichannel Architecture', desc: 'Centralize product catalogs, inventory buffers, and order routing across physical stores, mobile apps, and online marketplaces.' },
      { title: 'Edge-Rendered Storefronts', desc: 'Engineered with Next.js and headless commerce APIs for sub-second product page loads worldwide.' },
      { title: 'Semantic AI Search & Recommendations', desc: 'Vector-powered catalog search and personalized product carousels based on real browsing behavior.' }
    ],
    aiOpportunities: [
      { title: 'Vector-Based Semantic Search', desc: 'Allow shoppers to search using natural descriptions and find visually or contextually similar items.' },
      { title: 'Automated Catalog Enrichment', desc: 'Generate SEO-optimized product titles, descriptions, and attribute tags automatically for thousands of incoming SKUs.' },
      { title: 'Intelligent Demand Forecasting', desc: 'Analyze historical sales velocity, seasonality, and promotional trends to prevent stockouts before peak shopping periods.' }
    ],
    automationOpportunities: [
      { title: 'Real-Time Inventory Reconciliation', desc: 'Automatically adjust available stock counts across Shopify, Amazon, and POS registers upon each confirmed checkout.' },
      { title: 'Multi-Warehouse Order Routing', desc: 'Route customer orders to the closest fulfillment facility holding complete inventory to minimize shipping transit times.' },
      { title: 'Automated Post-Purchase Tracking', desc: 'Send real-time carrier tracking updates, delivery notifications, and automated feedback requests.' }
    ],
    softwareOpportunities: [
      { title: 'Custom B2B Wholesale Portals', desc: 'Support tiered volume pricing, customer contract terms, and purchase order requests on a dedicated portal.' },
      { title: 'Interactive 3D Product Customizers', desc: 'Enable shoppers to configure colors, textures, and dimensions in real time using WebGL/Three.js.' }
    ],
    integrations: ['Shopify Plus', 'Stripe', 'Algolia', 'Klaviyo', 'NetSuite ERP', 'Square POS', 'ShipStation'],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    caseStudy: {
      title: 'Headless Commerce Replatform & 3D Visualizer',
      clientName: 'Madam Jan',
      problem: 'A premium lifestyle and homeware brand needed an immersive, fast digital flagship capable of displaying bespoke artisanal finishes without sacrificing mobile speed.',
      solution: 'We engineered a custom Shopify Store 2.0 experience integrating interactive Three.js 3D visualizers and modular Liquid sections for internal marketing control.',
      impact: 'Significantly elevated brand positioning, reduced catalog load times, and simplified day-to-day merchandizing updates.',
      link: '/case-studies/madam-jan'
    },
    faqs: [
      { q: 'Can you integrate our existing physical POS system with our online store?', a: 'Yes. We build bidirectional synchronization connectors that tie into Square, Lightspeed, Clover, and custom POS systems to maintain single-source-of-truth inventory.' },
      { q: 'Do you work with existing Shopify stores or only new builds?', a: 'We handle both: full greenfield builds and performance overhauls of existing, established Shopify or custom storefronts.' }
    ]
  },

  // ==================== 2. HEALTHCARE & WELLNESS ====================
  'healthcare': {
    slug: 'healthcare',
    title: 'Healthcare & Wellness Technology',
    heroHeadline: 'Secure Digital Systems & Patient Workflows for Healthcare Providers',
    heroSubheadline: 'We engineer patient portals, automated intake workflows, clinical scheduling systems, and practice management software designed for security and reliability.',
    industryProblem: 'Medical practices and wellness clinics are overwhelmed by manual administrative tasks: high call volumes for routine appointments, missing intake forms, and disconnected patient records that waste staff time.',
    challenges: [
      { title: 'Severe Administrative Overload', desc: 'Front-desk coordinators spend the majority of their day answering repetitive phone inquiries and manually scheduling visits.' },
      { title: 'High Appointment No-Show Rates', desc: 'Without automated multi-channel reminders and frictionless digital rescheduling, clinics face costly idle chair time.' },
      { title: 'Fragmented Patient Communications', desc: 'Records, patient messages, and intake documents remain scattered across email, paper files, and legacy software.' }
    ],
    solutions: [
      { title: '24/7 Digital Patient Portals', desc: 'Intuitive web applications where patients view appointments, submit intake paperwork, and communicate securely.' },
      { title: 'Intelligent Voice & Chat Triage', desc: 'AI-assisted voice and conversational agents that answer routine clinic inquiries and schedule appointments automatically.' },
      { title: 'Automated Multi-Channel Reminders', desc: 'Contextual SMS and email notification sequences that reduce missed appointments and facilitate rapid rescheduling.' }
    ],
    aiOpportunities: [
      { title: 'Conversational Appointment Scheduling', desc: 'Patients can speak or type in natural language to find open appointment slots matching their doctor preference.' },
      { title: 'Intake Form Document Extraction', desc: 'Automatically parse patient insurance cards and prior medical summaries to pre-fill clinic intake charts.' },
      { title: 'Post-Visit Follow-Up Intelligence', desc: 'Automate wellness check-in prompts and triage patient recovery concerns for clinician review.' }
    ],
    automationOpportunities: [
      { title: 'Automated Calendar Availability Sync', desc: 'Sync doctor availability in real time across multiple clinics and prevent double-booking.' },
      { title: 'Digital Intake & Consent Routing', desc: 'Collect digital signatures on required consent forms before patients arrive at the office.' }
    ],
    softwareOpportunities: [
      { title: 'Custom Practice Management Portals', desc: 'Unified clinician dashboards displaying daily queues, treatment notes, and billing statuses.' },
      { title: 'Wellness Program & Subscription Platforms', desc: 'Membership portals for holistic wellness providers supporting class bookings and recurring billing.' }
    ],
    integrations: ['Twilio Telephony', 'Stripe', 'Google Calendar API', 'PostgreSQL', 'SendGrid', 'Custom EMR APIs'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    caseStudy: {
      title: 'Digital Wellness & Mindfulness Platform',
      clientName: 'Pali Yoga',
      problem: 'A boutique wellness and yoga community needed a serene, fast digital home to manage schedules, student registrations, and community updates.',
      solution: 'We architected a clean, accessible web application featuring dynamic class timetables, intuitive instructor profiles, and automated registration confirmations.',
      impact: 'Eliminated manual booking friction, giving instructors and community members a seamless digital scheduling experience.',
      link: '/case-studies/pali-yoga'
    },
    faqs: [
      { q: 'How do you approach healthcare data privacy and security?', a: 'We strictly employ role-based access control (RBAC), end-to-end data encryption in transit and at rest, secure environment variables, and zero retention of unnecessary personal health details.' },
      { q: 'Can your software integrate with our existing clinic management software?', a: 'Yes. We engineer secure API bridges and webhook endpoints that communicate with your existing scheduling and billing software.' }
    ]
  },

  // ==================== 3. RECRUITMENT & HR TECH ====================
  'recruitment': {
    slug: 'recruitment',
    title: 'Recruitment & HR Technology',
    heroHeadline: 'AI-Assisted Candidate Screening & Hiring Workflow Platforms',
    heroSubheadline: 'We build intelligent applicant tracking systems, asynchronous video assessment platforms, and automated hiring workflows that help teams hire faster.',
    industryProblem: 'Talent acquisition teams receive hundreds of unqualified applications per opening, leading to recruiter burnout, delayed hiring cycles, and frustrated candidates left waiting in silence.',
    challenges: [
      { title: 'Unmanageable Resume Volumes', desc: 'Recruiters spend hours manually reading unqualified CVs instead of engaging with high-probability candidates.' },
      { title: 'Inconsistent Early-Stage Screening', desc: 'Phone screens vary dramatically between interviewers, introducing subjective bias and inconsistent evaluations.' },
      { title: 'Slow Time-to-Offer', desc: 'Multi-week scheduling delays cause top talent to accept competing offers before interviews conclude.' }
    ],
    solutions: [
      { title: 'Automated Candidate Assessment Portals', desc: 'Structured asynchronous evaluation platforms where candidates complete role-relevant assessments at their convenience.' },
      { title: 'Intelligent Resume Parsing & Matching', desc: 'Extract key competencies, career milestones, and certifications to surface top applicants objectively.' },
      { title: 'Collaborative Hiring Dashboards', desc: 'Centralize scorecards, candidate video responses, and interviewer feedback in a single transparent dashboard.' }
    ],
    aiOpportunities: [
      { title: 'Structured Asynchronous AI Interviews', desc: 'AI-driven interview agents ask targeted follow-up questions based on candidate responses.' },
      { title: 'Objective Competency Scoring', desc: 'Evaluate candidate submissions against clear rubrics, generating concise diagnostic summaries for hiring managers.' },
      { title: 'Job Description Optimization', desc: 'Analyze job postings to eliminate ambiguous requirements and attract qualified talent pools.' }
    ],
    automationOpportunities: [
      { title: 'Instant Interview Scheduling', desc: 'Qualified candidates receive automated calendar links matching all panel interviewers availability.' },
      { title: 'Continuous Status Updates', desc: 'Keep applicants informed at every stage with automated, empathetic email notifications.' }
    ],
    softwareOpportunities: [
      { title: 'Bespoke Applicant Tracking Systems (ATS)', desc: 'Custom pipeline stages, custom evaluation rubrics, and direct integration into internal Slack/HRIS.' }
    ],
    integrations: ['Greenhouse API', 'Lever', 'Workday', 'OpenAI API', 'Twilio', 'Stripe', 'Google Workspace'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS S3'],
    caseStudy: {
      title: 'Automated AI Candidate Interview Platform',
      clientName: 'SkillyTalk AI',
      problem: 'Companies needed a scalable method to conduct fair, consistent first-round interviews across global applicant pools without exhausting recruiter calendars.',
      solution: 'We engineered SkillyTalk AI: an end-to-end platform with interactive interview simulation, automated scoring rubrics, and hiring team dashboards.',
      impact: 'Dramatically compressed screening time from days to minutes while providing candidates a modern, flexible interview experience.',
      link: '/case-studies/skillytalk-ai'
    },
    faqs: [
      { q: 'How does AI screening prevent algorithmic bias in hiring?', a: 'Our systems focus strictly on structured, verifiable competencies matching pre-defined rubrics. We do not use black-box sentiment or demographic profiling, keeping the final decision strictly in human hands.' }
    ]
  },

  // ==================== 4. RESTAURANTS & HOSPITALITY ====================
  'restaurants': {
    slug: 'restaurants',
    title: 'Restaurants & Hospitality Solutions',
    heroHeadline: 'Direct Ordering Engines & Operational Systems for Hospitality',
    heroSubheadline: 'We build direct online ordering platforms, table reservation systems, digital menu visualizers, and kitchen operations software that protect restaurant margins.',
    industryProblem: 'Third-party delivery apps charge 25%–35% commissions that erase restaurant profit margins, while fragmented reservation tools prevent owners from owning their direct customer relationships.',
    challenges: [
      { title: 'Crippling Delivery Commissions', desc: 'Third-party marketplaces capture customer contact details and siphon off a massive portion of each transaction.' },
      { title: 'Peak-Hour Phone Chaos', desc: 'Staff struggle to balance cooking and serving guests while the phone rings continuously for reservations and takeout orders.' },
      { title: 'Disconnected Kitchen Workflow', desc: 'Online orders print on separate thermal slips, creating kitchen bottlenecks and order errors during dinner rush.' }
    ],
    solutions: [
      { title: 'Direct First-Party Ordering Storefronts', desc: 'Mobile-first ordering websites with zero marketplace commissions and direct payment processing.' },
      { title: 'Automated Voice Reservation Lines', desc: 'AI voice agents answer calls instantly, record table bookings, note dietary preferences, and confirm via SMS.' },
      { title: 'Kitchen Display & Dispatch Integrations', desc: 'Consolidate incoming orders into a unified kitchen display system with accurate preparation timers.' }
    ],
    aiOpportunities: [
      { title: 'Voice AI Phone Booking Assistant', desc: 'Handles peak phone calls, verifies open table slots, and sends instant calendar invitations.' },
      { title: 'Dynamic Kitchen Prep Pacing', desc: 'Estimates kitchen preparation times based on current ticket volume and adjusts delivery quote windows automatically.' }
    ],
    automationOpportunities: [
      { title: 'Automated SMS Order Status Tracking', desc: 'Notify guests automatically when their order is received, cooking, and ready for pickup.' },
      { title: 'Direct Guest Loyalty Re-Engagement', desc: 'Trigger personalized return offers to past direct ordering guests based on dining frequency.' }
    ],
    softwareOpportunities: [
      { title: 'Bespoke Multi-Location Menu Management', desc: 'Update prices, 86 sold-out ingredients, and launch seasonal specials across all locations in one click.' }
    ],
    integrations: ['Stripe', 'Twilio Telephony', 'Square POS', 'Toast POS', 'Google Maps API'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    caseStudy: {
      title: 'Direct Consumer Food Platform',
      clientName: 'Abundish',
      problem: 'A culinary brand wanted to launch a direct-to-consumer meal delivery service without being dependent on high-fee third-party food aggregator apps.',
      solution: 'We engineered a mobile-first direct ordering platform featuring weekly menu subscriptions, ingredient dietary filters, and automated dispatch routing.',
      impact: 'Empowered the brand to retain 100% of customer order margins and build direct relationships with recurring diners.',
      link: '/case-studies/abundish'
    },
    faqs: [
      { q: 'Can direct online orders print automatically in our kitchen?', a: 'Yes. We integrate directly with receipt printers (Epson/Star Micronics) and Kitchen Display Systems (KDS) via webhooks.' }
    ]
  },

  // ==================== 5. REAL ESTATE & PROPERTY ====================
  'real-estate': {
    slug: 'real-estate',
    title: 'Real Estate & Property Management Software',
    heroHeadline: 'Intelligent Property Portals & Automated Leasing Workflows',
    heroSubheadline: 'We build high-converting property listing portals, automated tenant leasing workflows, maintenance ticket systems, and investor reporting dashboards.',
    industryProblem: 'Real estate agencies and property managers lose high-value buyer and tenant inquiries due to slow response times, outdated listing pages, and paper-heavy leasing workflows.',
    challenges: [
      { title: 'Slow Lead Response Times', desc: 'Prospective buyers inquire across multiple platforms; delays of more than a few minutes dramatically reduce tour bookings.' },
      { title: 'Manual Lease Administration', desc: 'Collecting proof of income, tenant credit checks, and lease agreements through email is slow and prone to errors.' },
      { title: 'Unintuitive Listing Showcases', desc: 'Static photo grids fail to convey architectural scale, neighborhood amenities, and floor plan layouts.' }
    ],
    solutions: [
      { title: 'High-Converting Real Estate Portals', desc: 'Fast, map-integrated listing websites with neighborhood data, interactive floorplans, and instant tour booking.' },
      { title: 'Automated Leasing & Tenant Onboarding', desc: 'Digital tenant intake pipelines that collect documents, run background checks, and generate leases for digital signing.' },
      { title: 'Centralized Maintenance & Operations Portals', desc: 'Tenants submit repair tickets with photos, while managers assign contractors and track work progress.' }
    ],
    aiOpportunities: [
      { title: '24/7 AI Property Tour Coordinator', desc: 'Answer listing-specific inquiries (pet policies, HOA fees, parking) and book property viewings into agent calendars.' },
      { title: 'Automated Listing Copy Generation', desc: 'Transform architectural specs and feature checklists into engaging, compliant real estate descriptions.' }
    ],
    automationOpportunities: [
      { title: 'MLS & Syndication Data Synchronization', desc: 'Automatically sync active, pending, and sold listings across local MLS feeds and your custom web portal.' },
      { title: 'Automated Lease Renewal Sequences', desc: 'Trigger personalized lease renewal offers and digital agreements 90 days before lease expiration.' }
    ],
    softwareOpportunities: [
      { title: 'Investor Financial Portals', desc: 'Secure dashboards where property investors review rent rolls, capitalization rates, and distribution distributions.' }
    ],
    integrations: ['Mapbox API', 'DocuSign API', 'Stripe ACH', 'Twilio', 'PostgreSQL', 'AWS S3'],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    caseStudy: {
      title: 'Student Living & Accommodation Portal',
      clientName: 'Sasco Student Living',
      problem: 'A premium student housing provider needed a modern digital portal to display furnished room types, manage booking inquiries, and streamline lease paperwork.',
      solution: 'We engineered an interactive housing platform featuring virtual room explorations, transparent amenity lists, and an integrated reservation workflow.',
      impact: 'Accelerated lease turnaround cycles and provided prospective residents with a seamless digital reservation process.',
      link: '/case-studies/sasco-student-living'
    },
    faqs: [
      { q: 'Can your portal sync directly with our MLS feed?', a: 'Yes. We implement automated RESO Web API and RETS connectors to keep your property listings synchronized with regional real estate boards.' }
    ]
  },

  // ==================== 6. MANUFACTURING & INDUSTRIAL ====================
  'manufacturing': {
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial Engineering',
    heroHeadline: 'Custom B2B Portals & Digital Operational Systems for Industry',
    heroSubheadline: 'We build custom B2B wholesale portals, product configurators, inventory tracking software, and supply chain automation tools for manufacturers.',
    industryProblem: 'Industrial manufacturers rely on legacy desktop software, paper purchase orders, and endless email chains to manage custom orders, leading to production delays and quoting errors.',
    challenges: [
      { title: 'Complex Custom Product Quoting', desc: 'Configuring custom dimensions, materials, and tolerances requires days of back-and-forth between sales and engineering.' },
      { title: 'Legacy ERP Disconnect', desc: 'Valuable production data remains locked in on-premise ERPs inaccessible to field sales representatives and customers.' },
      { title: 'Manual Supply Chain Tracking', desc: 'Raw material procurement and assembly schedules lack real-time digital visibility across departments.' }
    ],
    solutions: [
      { title: 'Interactive B2B Product Configurators', desc: 'Web-based configurators that enforce engineering constraints, calculate live costs, and generate CAD/PDF spec sheets.' },
      { title: 'Modern Cloud-Connected B2B Portals', desc: 'Secure client ordering portals with tiered contract pricing, re-ordering shortcuts, and production tracking.' },
      { title: 'Automated ERP & Inventory Bridges', desc: 'Bi-directional data pipelines synchronizing orders, bills of materials (BOM), and fulfillment statuses in real time.' }
    ],
    aiOpportunities: [
      { title: 'Automated Technical RFP Parsing', desc: 'Extract bill-of-material line items and technical specifications from vendor RFPs to draft quoting estimates.' },
      { title: 'Supply Chain Anomaly Detection', desc: 'Identify early supplier shipment delays and predict component lead-time variances before assembly begins.' }
    ],
    automationOpportunities: [
      { title: 'Automated PO Verification & Entry', desc: 'Verify incoming PDF purchase orders against contractual pricing and insert verified records into production queues.' },
      { title: 'Real-Time Milestone Notifications', desc: 'Notify clients automatically as their custom order moves through fabrication, powder coating, and dispatch.' }
    ],
    softwareOpportunities: [
      { title: 'Custom Maintenance Runbook Portals', desc: 'Digitized equipment manuals with interactive troubleshooting trees and QR-code parts ordering.' }
    ],
    integrations: ['SAP API', 'Oracle NetSuite', 'PostgreSQL', 'Stripe Invoicing', 'AWS S3', 'DocuSign'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    caseStudy: {
      title: 'Luxury Architecture & Material Showcase',
      clientName: 'Evitavonni',
      problem: 'An artisanal luxury couture and design house required an exacting digital presence to showcase bespoke craftsmanship to global architects and interior designers.',
      solution: 'We engineered an editorial digital platform with fluid transitions, high-resolution material inspect tools, and curated architectural lookbooks.',
      impact: 'Elevated international prestige and streamlined trade inquiries from global design studios.',
      link: '/case-studies/evitavonni'
    },
    faqs: [
      { q: 'Can your software handle custom B2B pricing agreements?', a: 'Yes. We architect custom pricing engines supporting tiered volume tiers, account-specific discounts, and formal quote approval workflows.' }
    ]
  },

  // ==================== 7. EDUCATION & EDTECH ====================
  'education': {
    slug: 'education',
    title: 'Education & EdTech Solutions',
    heroHeadline: 'Engaging Learning Management & Skill Assessment Platforms',
    heroSubheadline: 'We engineer interactive learning platforms, automated student evaluation systems, cohort community portals, and live classroom software.',
    industryProblem: 'Traditional learning platforms are clunky, disengaging, and burdened by manual grading that slows student feedback and limits educator scale.',
    challenges: [
      { title: 'Low Student Completion Rates', desc: 'Passive video-only learning platforms suffer from low course completion and minimal student interaction.' },
      { title: 'Manual Assessment Overhead', desc: 'Educators spend countless hours grading standardized assignments instead of mentoring students.' },
      { title: 'Fragmented Learning Data', desc: 'Student progress, attendance, and quiz outcomes are trapped across incompatible classroom tools.' }
    ],
    solutions: [
      { title: 'Interactive Learning Experience Portals', desc: 'Gamified web platforms with real-time code sandboxes, interactive quizzes, and cohort forums.' },
      { title: 'Automated Skill & Coding Assessments', desc: 'Instant code execution and concept evaluation that delivers immediate formative feedback to learners.' },
      { title: 'Comprehensive Instructor Analytics', desc: 'Real-time dashboards highlighting struggling learners, drop-off points, and topic comprehension scores.' }
    ],
    aiOpportunities: [
      { title: 'Adaptive Learning Path Generation', desc: 'Tailor quiz difficulty and suggest supplementary learning resources based on individual concept mastery.' },
      { title: '24/7 AI Teaching Assistant', desc: 'Provide students instant hints, conceptual explanations, and debugging support outside classroom hours.' }
    ],
    automationOpportunities: [
      { title: 'Automated Certificate Issuance', desc: 'Generate verified, cryptographically signed digital certificates upon passing course requirements.' },
      { title: 'Student Milestone Reminders', desc: 'Contextual notifications encouraging students to complete assignments before deadlines.' }
    ],
    softwareOpportunities: [
      { title: 'Cohort-Based Course Infrastructure', desc: 'Manage live sessions, breakout rooms, peer review assignments, and group projects in one place.' }
    ],
    integrations: ['Stripe Billing', 'Zoom / WebRTC', 'PostgreSQL', 'SendGrid', 'Vimeo / Mux Video'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    caseStudy: {
      title: 'Automated Assessment & Skill Evaluation Engine',
      clientName: 'SkillyTalk Learning',
      problem: 'Educational institutions needed a way to conduct objective, automated skills assessments at scale with immediate feedback.',
      solution: 'We engineered an adaptive evaluation engine supporting automated scoring rubrics, code syntax evaluation, and structured performance feedback.',
      impact: 'Enabled rapid assessment of thousands of student submissions while giving instructors deep cohort analytics.',
      link: '/case-studies/skillytalk-ai'
    },
    faqs: [
      { q: 'Can you integrate with existing LMS platforms via LTI?', a: 'Yes. We support standard Learning Tools Interoperability (LTI) specifications to embed our custom assessment modules into Canvas, Blackboard, or Moodle.' }
    ]
  },

  // ==================== 8. STARTUPS & HIGH-GROWTH TECH ====================
  'startups': {
    slug: 'startups',
    title: 'Startups & Venture-Backed Teams',
    heroHeadline: 'Rapid MVP Engineering & Scalable SaaS Architecture for Startups',
    heroSubheadline: 'We partner with ambitious founders to turn product visions into market-ready SaaS applications, AI tools, and scalable platforms in 4 to 8 weeks.',
    industryProblem: 'Early-stage founders face a brutal tradeoff: build too slowly with junior teams and run out of capital, or hire low-cost agencies that produce disposable code requiring an immediate rewrite.',
    challenges: [
      { title: 'High Burn Rate & Slow Velocity', desc: 'Months spent in development without customer validation quickly drain angel and seed investments.' },
      { title: 'Technical Debt from Agency Hacks', desc: 'No-code wrappers and poorly structured code collapse under first real user traffic and fail institutional due diligence.' },
      { title: 'Lack of Senior Architectural Direction', desc: 'First-time founders frequently over-engineer unnecessary features while missing core security and billing requirements.' }
    ],
    solutions: [
      { title: 'Focused 4–8 Week MVP Delivery', desc: 'We isolate the core value loop and engineer a production-ready product fast enough to test customer willingness to pay.' },
      { title: 'Production-Grade TypeScript Foundations', desc: 'Clean, modular Next.js and relational database architectures that pass investor technical due diligence.' },
      { title: 'Turnkey SaaS Infrastructure', desc: 'Authentication, Stripe subscription billing, team workspaces, and product telemetry built in from day one.' }
    ],
    aiOpportunities: [
      { title: 'Proprietary AI Feature Implementation', desc: 'Equip your startup with specialized RAG pipelines, fine-tuned adapters, and deterministic agent workflows.' },
      { title: 'Semantic Product Search & Filtering', desc: 'Deliver consumer-grade search experiences that differentiate your platform from incumbents.' }
    ],
    automationOpportunities: [
      { title: 'Automated Product Telemetry & Alerts', desc: 'Instrument user activation funnels with real-time Slack alerts on high-intent user milestones.' },
      { title: 'Self-Service Customer Onboarding', desc: 'Interactive step-by-step product walkthroughs that guide new signups to their first aha moment.' }
    ],
    softwareOpportunities: [
      { title: 'Scalable Multi-Tenant Foundations', desc: 'Database row-level security ensuring tenant isolation, preparing your product for enterprise customer audits.' }
    ],
    integrations: ['Stripe Billing', 'Supabase / PostgreSQL', 'OpenAI API', 'Vercel', 'PostHog / Mixpanel', 'Resend'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    caseStudy: {
      title: 'Full-Cycle Startup MVP Launch',
      clientName: 'SkillyTalk Platform',
      problem: 'Founders had a clear vision for AI-assisted talent evaluations but needed a senior technical partner to design and ship the production SaaS platform.',
      solution: 'We engineered the multi-tenant web application, video recording pipeline, AI evaluation algorithms, and Stripe billing lifecycle in an agile 6-week sprint.',
      impact: 'Successfully launched to live business customers and demonstrated strong technical defensibility.',
      link: '/case-studies/skillytalk-ai'
    },
    faqs: [
      { q: 'Who owns the intellectual property and codebase?', a: 'You retain 100% ownership of the repository, design assets, and architecture from day one.' },
      { q: 'Can you help us after the MVP launches?', a: 'Yes. We continue partnering with founders through subsequent funding rounds, feature expansions, and infrastructure scaling.' }
    ]
  }
};
