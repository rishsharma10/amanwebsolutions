export interface IndustryData {
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  caseStudy: {
    title: string;
    problem: string;
    solution: string;
    impact: string;
  };
  faqs: { q: string; a: string }[];
}

export const industriesData: Record<string, IndustryData> = {
  'healthcare': {
    slug: 'healthcare',
    title: 'Healthcare AI & Software Solutions',
    heroHeadline: 'Transforming Healthcare with AI-Driven Engineering',
    heroSubheadline: 'We build HIPAA-compliant telemedicine platforms, predictive diagnostics, and automated patient management systems for modern healthcare providers.',
    challenges: [
      { title: 'Data Silos', desc: 'Patient records are often scattered across disparate EMR systems.' },
      { title: 'High Administrative Burden', desc: 'Staff spend excessive time on billing and appointment scheduling.' },
      { title: 'Predictive Diagnostics', desc: 'Lack of tooling to predict patient risks before they escalate.' }
    ],
    solutions: [
      { title: 'Unified Health Portals', desc: 'Custom platforms that centralize patient data securely.' },
      { title: 'AI Scheduling Agents', desc: 'Automated booking systems that reduce no-shows by 40%.' },
      { title: 'Machine Learning Models', desc: 'AI algorithms to assist doctors in early diagnosis.' }
    ],
    caseStudy: {
      title: 'Automating Patient Triage & Appointment Scheduling',
      problem: 'A mid-sized clinic network was losing 30% of their operational hours to manual appointment booking and patient follow-ups, leading to high staff burnout and patient dissatisfaction.',
      solution: 'We engineered a HIPAA-compliant AI voice and chat agent integrated directly into their EMR system to handle inbound queries, schedule appointments, and perform automated follow-ups.',
      impact: 'Reduced administrative workload by 45%, decreased appointment no-shows by 38%, and saved the clinic over $120,000 annually in operational costs.'
    },
    faqs: [
      { q: 'Are your solutions HIPAA compliant?', a: 'Yes, we follow strict data encryption and compliance standards for all healthcare applications.' },
      { q: 'Can you integrate with Epic or Cerner?', a: 'Absolutely, we specialize in HL7 and FHIR integrations with existing EMRs.' }
    ]
  },
  'finance': {
    slug: 'finance',
    title: 'FinTech & Banking AI Solutions',
    heroHeadline: 'Secure, Scalable FinTech Engineering',
    heroSubheadline: 'From AI-powered fraud detection to custom neo-banking platforms, we engineer financial software that scales securely.',
    challenges: [
      { title: 'Fraud & Security', desc: 'Financial institutions face constant threats of sophisticated cyber attacks.' },
      { title: 'Legacy Systems', desc: 'Core banking systems are outdated and slow to innovate.' },
      { title: 'Customer Experience', desc: 'Users demand instant, seamless digital banking experiences.' }
    ],
    solutions: [
      { title: 'AI Fraud Detection', desc: 'Real-time transaction monitoring using machine learning.' },
      { title: 'FinTech App Development', desc: 'Modern iOS and Android banking applications.' },
      { title: 'Automated Underwriting', desc: 'AI models that assess credit risk in seconds.' }
    ],
    caseStudy: {
      title: 'Real-Time AI Fraud Detection for a Neo-Bank',
      problem: 'A rapidly growing FinTech startup was experiencing a 15% increase in fraudulent transactions, leading to high chargeback rates and compliance warnings.',
      solution: 'We deployed a custom machine learning model that analyzes transactional metadata in real-time, instantly flagging anomalies and blocking high-risk transfers.',
      impact: 'Reduced fraudulent transactions by 92%, saving the company millions in potential losses while maintaining a 99.9% false-positive accuracy rate.'
    },
    faqs: [
      { q: 'Do you follow PCI-DSS compliance?', a: 'Yes, our architectures are built to meet strict financial regulatory standards.' },
      { q: 'Can you build blockchain solutions?', a: 'Yes, we develop smart contracts and DeFi applications.' }
    ]
  },
  'saas': {
    slug: 'saas',
    title: 'SaaS Development & AI Integration',
    heroHeadline: 'Build and Scale Profitable SaaS Products',
    heroSubheadline: 'We help founders build robust SaaS architectures and integrate AI features that command higher ARR and reduce churn.',
    challenges: [
      { title: 'Time to Market', desc: 'Founders need to launch quickly to validate their ideas.' },
      { title: 'Multi-tenant Architecture', desc: 'Designing secure databases for thousands of isolated users.' },
      { title: 'AI Differentiation', desc: 'Standing out in a crowded market without AI is difficult.' }
    ],
    solutions: [
      { title: 'Rapid MVP Development', desc: 'Launch a scalable SaaS product in 6-10 weeks.' },
      { title: 'Cloud-Native Architecture', desc: 'Microservices built on AWS/GCP for infinite scalability.' },
      { title: 'Generative AI Features', desc: 'Embed LLMs directly into your product to automate workflows.' }
    ],
    caseStudy: {
      title: 'Scaling an AI-Powered Recruitment SaaS (SkillyTalk)',
      problem: 'Recruiters were spending countless hours manually screening candidates, and existing video interview platforms lacked intelligent, unbiased evaluation metrics.',
      solution: 'We architected and launched SkillyTalk, integrating advanced Speech-to-Text and LLMs to autonomously conduct and grade technical and behavioral interviews.',
      impact: 'SkillyTalk now processes thousands of interviews concurrently, reducing enterprise time-to-hire by 60% and entirely eliminating early-stage human bias.'
    },
    faqs: [
      { q: 'Do you help with product strategy?', a: 'Yes, we provide end-to-end consulting from UI/UX to cloud deployment.' },
      { q: 'Who owns the IP?', a: 'You own 100% of the Intellectual Property (IP) and source code.' }
    ]
  },
  'education': {
    slug: 'education',
    title: 'EdTech & E-Learning Platforms',
    heroHeadline: 'Powering the Future of Digital Education',
    heroSubheadline: 'We build scalable learning management systems (LMS), virtual classrooms, and AI-driven personalized learning paths.',
    challenges: [
      { title: 'Student Engagement', desc: 'Remote learning often leads to decreased student participation.' },
      { title: 'Scalability', desc: 'Platforms crash during peak exam times or massive enrollments.' },
      { title: 'Content Management', desc: 'Difficulties in organizing and delivering multimedia courses.' }
    ],
    solutions: [
      { title: 'Custom LMS Development', desc: 'Bespoke learning platforms built for high concurrency.' },
      { title: 'AI Tutors', desc: 'Personalized AI assistants that help students 24/7.' },
      { title: 'Interactive Virtual Classrooms', desc: 'Real-time video, whiteboard, and collaboration tools.' }
    ],
    caseStudy: {
      title: 'AI-Powered Personalized Learning Path Engine',
      problem: 'An online coding bootcamp struggled with high dropout rates because students with different experience levels were forced into the same rigid curriculum pace.',
      solution: 'We built an adaptive learning engine that uses AI to analyze quiz results and coding patterns, dynamically restructuring the curriculum for each individual student.',
      impact: 'Course completion rates increased by 45%, and student satisfaction scores rose to an all-time high, driving a 30% increase in referral sign-ups.'
    },
    faqs: [
      { q: 'Can you integrate with existing university systems?', a: 'Yes, we integrate with SIS, ERPs, and SSO providers.' },
      { q: 'Do you build mobile apps for learning?', a: 'Absolutely, we build native and cross-platform apps for iOS and Android.' }
    ]
  },
  'hr': {
    slug: 'hr',
    title: 'HR Tech & Recruitment Software',
    heroHeadline: 'Automate Talent Acquisition & Management',
    heroSubheadline: 'From intelligent ATS platforms to AI-driven interviewing systems, we build software that scales your HR operations.',
    challenges: [
      { title: 'Screening Bottlenecks', desc: 'Recruiters spend too much time manually reading resumes.' },
      { title: 'Interview Bias', desc: 'Human interviews are prone to unconscious bias.' },
      { title: 'Employee Retention', desc: 'Lack of data to predict employee churn.' }
    ],
    solutions: [
      { title: 'AI Screening Tools', desc: 'Automatically parse and rank resumes against job descriptions.' },
      { title: 'Automated Interviews', desc: 'Platforms like SkillyTalk that conduct initial candidate assessments.' },
      { title: 'HR Analytics Dashboards', desc: 'Predictive analytics for workforce management.' }
    ],
    caseStudy: {
      title: 'Automated High-Volume Candidate Screening',
      problem: 'An enterprise staffing agency was overwhelmed by receiving over 10,000 resumes per month, creating a massive backlog and causing them to lose top talent to faster competitors.',
      solution: 'We developed an AI-driven resume parser that extracts skills, standardizes experience, and scores candidates against job requisitions within seconds of submission.',
      impact: 'Time-to-shortlist dropped from 7 days to 2 minutes. Recruiters reclaimed 60% of their day, allowing them to focus entirely on closing top-tier candidates.'
    },
    faqs: [
      { q: 'Can you build custom ATS solutions?', a: 'Yes, we build end-to-end Applicant Tracking Systems.' },
      { q: 'Is AI hiring biased?', a: 'We design our models specifically to ignore demographic data and focus purely on skills.' }
    ]
  },
  'real-estate': {
    slug: 'real-estate',
    title: 'PropTech & Real Estate Solutions',
    heroHeadline: 'Digital Transformation for Real Estate',
    heroSubheadline: 'We engineer property management platforms, virtual tour integrations, and AI-driven valuation models.',
    challenges: [
      { title: 'Inefficient Property Management', desc: 'Manual tracking of rent, maintenance, and tenants.' },
      { title: 'Lead Qualification', desc: 'Agents waste time on unqualified leads.' },
      { title: 'Market Volatility', desc: 'Difficulty in pricing properties accurately.' }
    ],
    solutions: [
      { title: 'Property Management Systems', desc: 'Centralized dashboards for landlords and property managers.' },
      { title: 'AI Chatbots', desc: 'Qualify leads automatically 24/7 before handing to agents.' },
      { title: 'Predictive Valuation', desc: 'Machine learning models to predict property values based on market trends.' }
    ],
    caseStudy: {
      title: 'Smart Property Valuation & Lead Scoring',
      problem: 'A national real estate brokerage had thousands of website visitors but their agents were wasting hours daily calling unverified and low-intent leads.',
      solution: 'We implemented an AI lead-scoring bot that engages visitors, gathers their requirements, and provides instant, hyper-accurate property valuations based on real-time market data.',
      impact: 'Lead conversion rates jumped by 300%. Agents now only talk to pre-qualified buyers, drastically increasing overall firm revenue.'
    },
    faqs: [
      { q: 'Do you integrate with MLS?', a: 'Yes, we build custom IDX/MLS integrations for property listings.' },
      { q: 'Can you build tenant mobile apps?', a: 'Yes, for rent payments, maintenance requests, and community features.' }
    ]
  },
  'retail': {
    slug: 'retail',
    title: 'Omnichannel Retail Technology',
    heroHeadline: 'Bridge the Gap Between In-Store and Online',
    heroSubheadline: 'We build POS integrations, inventory management systems, and personalized shopping experiences.',
    challenges: [
      { title: 'Inventory Syncing', desc: 'Discrepancies between physical store inventory and online storefronts.' },
      { title: 'Customer Loyalty', desc: 'Generic shopping experiences lead to low repeat purchase rates.' },
      { title: 'Supply Chain Blind Spots', desc: 'Inability to track goods from warehouse to shelf.' }
    ],
    solutions: [
      { title: 'Unified Commerce Platforms', desc: 'Real-time sync across all sales channels.' },
      { title: 'AI Recommendation Engines', desc: 'Personalized product suggestions increasing AOV by 20%.' },
      { title: 'Smart POS Systems', desc: 'Custom Point of Sale software tailored to your workflow.' }
    ],
    caseStudy: {
      title: 'Unified Inventory & Omnichannel POS System',
      problem: 'A growing fashion retailer with 15 physical locations was constantly overselling items online because their legacy POS did not sync in real-time with their web store.',
      solution: 'We engineered a custom cloud-based middleware that instantly syncs inventory levels across their POS, e-commerce platform, and warehouse scanners.',
      impact: 'Overselling incidents were completely eliminated (0%), and online order fulfillment speed improved by 40%, directly boosting customer retention.'
    },
    faqs: [
      { q: 'Can you integrate with Shopify or Magento?', a: 'Yes, we build custom headless commerce solutions and apps for major platforms.' },
      { q: 'Do you build loyalty programs?', a: 'Yes, from simple points systems to complex tiered digital wallets.' }
    ]
  },
  'manufacturing': {
    slug: 'manufacturing',
    title: 'Industry 4.0 & Manufacturing Software',
    heroHeadline: 'Smart Manufacturing Engineering',
    heroSubheadline: 'We develop IoT dashboards, predictive maintenance models, and custom ERP solutions for the factory floor.',
    challenges: [
      { title: 'Unplanned Downtime', desc: 'Equipment failures halt production and cost millions.' },
      { title: 'Quality Control', desc: 'Manual inspections are slow and prone to human error.' },
      { title: 'Siloed Data', desc: 'Machines, inventory, and sales data exist in separate systems.' }
    ],
    solutions: [
      { title: 'Predictive Maintenance AI', desc: 'Analyze sensor data to predict machine failures before they happen.' },
      { title: 'Computer Vision QC', desc: 'Automated visual inspection of manufactured goods.' },
      { title: 'Custom ERP', desc: 'End-to-end resource planning connecting the shop floor to the top floor.' }
    ],
    caseStudy: {
      title: 'IoT-Powered Predictive Maintenance Pipeline',
      problem: 'An automotive parts manufacturer was suffering from unexpected assembly line breakdowns, costing them upwards of $50,000 per hour in lost production time.',
      solution: 'We installed custom IoT sensors on critical machinery and built a machine learning dashboard that detects microscopic vibrational anomalies days before a failure occurs.',
      impact: 'Unplanned downtime was reduced by 85%. The maintenance team now operates on a predictive schedule, saving the company millions annually.'
    },
    faqs: [
      { q: 'Can you integrate with our existing PLCs?', a: 'Yes, we build middleware to aggregate data from legacy industrial equipment.' },
      { q: 'Do you provide cloud infrastructure setup?', a: 'Yes, we architect secure industrial IoT environments on AWS and Azure.' }
    ]
  },
  'logistics': {
    slug: 'logistics',
    title: 'Logistics & Supply Chain Software',
    heroHeadline: 'Optimize Your Supply Chain with AI',
    heroSubheadline: 'We build fleet management software, route optimization algorithms, and real-time tracking systems.',
    challenges: [
      { title: 'Route Inefficiencies', desc: 'Suboptimal routing increases fuel costs and delivery times.' },
      { title: 'Visibility', desc: 'Lack of real-time tracking for high-value shipments.' },
      { title: 'Warehouse Management', desc: 'Manual sorting and tracking slows down fulfillment.' }
    ],
    solutions: [
      { title: 'AI Route Optimization', desc: 'Dynamic routing algorithms that adapt to traffic and weather.' },
      { title: 'Fleet Management Dashboards', desc: 'Real-time telemetry, driver behavior, and maintenance tracking.' },
      { title: 'Automated WMS', desc: 'Warehouse Management Systems integrated with barcode/RFID scanners.' }
    ],
    caseStudy: {
      title: 'Dynamic AI Fleet Routing & Telemetry Dashboard',
      problem: 'A national delivery service was struggling with rising fuel costs and missed delivery windows due to static routing protocols that could not account for live traffic and weather.',
      solution: 'We developed a dynamic AI routing algorithm connected to a custom driver app and management dashboard. The system continuously recalculates the most efficient paths in real-time.',
      impact: 'Fuel consumption dropped by 18%, on-time delivery rates soared to 98%, and dispatchers were able to manage 3x more vehicles simultaneously.'
    },
    faqs: [
      { q: 'Do you build driver mobile apps?', a: 'Yes, custom applications for dispatch, proof of delivery, and navigation.' },
      { q: 'Can you integrate with ELD devices?', a: 'Yes, we pull telemetry data directly from Electronic Logging Devices.' }
    ]
  },
  'e-commerce': {
    slug: 'e-commerce',
    title: 'Advanced E-Commerce Development',
    heroHeadline: 'High-Performance Headless E-Commerce',
    heroSubheadline: 'We build lightning-fast, high-converting digital storefronts for enterprise retailers and ambitious D2C brands.',
    challenges: [
      { title: 'Slow Load Times', desc: 'Monolithic platforms cause slow page loads, hurting conversions.' },
      { title: 'Platform Limitations', desc: 'Off-the-shelf themes restrict custom UX and business logic.' },
      { title: 'Cart Abandonment', desc: 'Friction in the checkout process leads to lost sales.' }
    ],
    solutions: [
      { title: 'Headless Commerce architectures', desc: 'Next.js storefronts connected to Shopify/BigCommerce APIs.' },
      { title: 'AI Search & Discovery', desc: 'Semantic search that understands natural language queries.' },
      { title: 'Custom Checkout Flows', desc: 'Optimized, one-click checkout experiences tailored to your audience.' }
    ],
    caseStudy: {
      title: 'Headless Migration for a 9-Figure D2C Brand',
      problem: 'A massive D2C brand hit the architectural limits of their traditional Shopify theme. Page load times exceeded 4 seconds, severely cannibalizing their mobile ad conversions.',
      solution: 'We decoupled their frontend, migrating them to a blazing-fast Headless Next.js architecture while keeping Shopify as the backend commerce engine. We also integrated AI semantic search.',
      impact: 'Mobile page load times dropped to under 800ms. The faster, highly-optimized UX drove a 22% increase in overall conversion rate within the first month.'
    },
    faqs: [
      { q: 'Why headless over a standard Shopify theme?', a: 'Headless allows for sub-second page loads, limitless design flexibility, and better SEO.' },
      { q: 'Do you handle payment gateway integration?', a: 'Yes, Stripe, PayPal, Braintree, and custom regional gateways.' }
    ]
  }
};
