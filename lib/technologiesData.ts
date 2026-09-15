export interface TechnologyItem {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  heroDescription: string;
  whatItIs: string;
  whenToUse: string[];
  whyChooseIt: { title: string; desc: string }[];
  vidhyonixCapabilities: string[];
  architectureHighlights: { title: string; desc: string }[];
  relevantServices: { slug: string; title: string }[];
  relatedCaseStudies: { slug: string; title: string; clientName: string }[];
  faqs: { q: string; a: string }[];
}

export const technologiesData: Record<string, TechnologyItem> = {
  'nextjs': {
    slug: 'nextjs',
    name: 'Next.js',
    category: 'Frontend & Full-Stack Framework',
    tagline: 'The Enterprise React Framework for Production Web Applications',
    heroDescription: 'We build high-performance, SEO-dominant web applications, SaaS platforms, and headless ecommerce storefronts with Next.js App Router and server-side rendering.',
    whatItIs: 'Next.js is a production-grade React framework created by Vercel that combines server-side rendering (SSR), static site generation (SSG), incremental static regeneration (ISR), and API routes into a single unified architecture.',
    whenToUse: [
      'Commercial marketing websites requiring top-tier Core Web Vitals and aggressive organic search indexing.',
      'SaaS applications that demand fast initial load times, authenticated server layouts, and low-latency API execution.',
      'Headless ecommerce storefronts that need sub-second product page transitions and edge caching.',
      'Data-dense customer portals with real-time server actions and streaming hydration.'
    ],
    whyChooseIt: [
      { title: 'Zero-JS Server Components by Default', desc: 'React Server Components render on the server and transmit zero unnecessary client-side JavaScript, slashing bundle size.' },
      { title: 'Supreme Technical SEO Capabilities', desc: 'Search engine bots receive complete, crawlable HTML with dynamic Open Graph metadata and structured JSON-LD schemas instantly.' },
      { title: 'Incremental Static Regeneration (ISR)', desc: 'Update millions of static pages in the background without having to rebuild the entire application.' }
    ],
    vidhyonixCapabilities: [
      'Next.js 13/14 App Router migration and architecture',
      'Server Actions and optimistic mutation patterns',
      'Edge middleware for authentication and multi-tenant routing',
      'Performance profiling for 95+ Lighthouse scores',
      'Hybrid SSG/SSR catalog rendering with edge caching'
    ],
    architectureHighlights: [
      { title: 'App Router Layouts', desc: 'Nested layouts preserve UI state across routes without costly full-page re-renders.' },
      { title: 'Streaming with Suspense', desc: 'Stream UI parts progressively as data resolves, delivering instant visual feedback.' }
    ],
    relevantServices: [
      { slug: 'web-development', title: 'Web Application Development' },
      { slug: 'nextjs-ecommerce', title: 'Next.js Ecommerce Development' },
      { slug: 'saas-development', title: 'SaaS Platform Development' }
    ],
    relatedCaseStudies: [
      { slug: 'skillytalk-ai', title: 'AI Candidate Assessment Platform', clientName: 'SkillyTalk AI' },
      { slug: 'abundish', title: 'Direct Ordering Platform', clientName: 'Abundish' }
    ],
    faqs: [
      { q: 'Why does Vidhyonix choose Next.js over standard Single-Page React (CRA/Vite)?', a: 'Single-Page React apps download large client JavaScript bundles before displaying content, hurting initial load speed and SEO crawlability. Next.js delivers pre-rendered HTML immediately, providing instant perceived performance and guaranteed indexing.' }
    ]
  },

  'react': {
    slug: 'react',
    name: 'React',
    category: 'UI Component Library & Architecture',
    tagline: 'Declarative, Component-Driven User Interfaces for Web and Mobile',
    heroDescription: 'We engineer responsive, accessible, and scalable design systems and interactive web applications utilizing modern React principles.',
    whatItIs: 'React is an open-source declarative JavaScript library maintained by Meta and the open-source community for building modular, state-driven user interfaces.',
    whenToUse: [
      'Complex, state-heavy dashboards requiring real-time updates and interactive charts.',
      'Design systems and component libraries shared across multiple internal applications.',
      'Cross-platform applications sharing component logic with React Native for iOS and Android.',
      'Interactive configurators, canvas tools, and multi-step customer qualification funnels.'
    ],
    whyChooseIt: [
      { title: 'Predictable Declarative State', desc: 'UI updates automatically and efficiently in response to underlying data changes.' },
      { title: 'Vast Ecosystem & Tooling', desc: 'Unmatched ecosystem of production-hardened libraries for animation, form validation, and data visualization.' },
      { title: 'Modular Component Architecture', desc: 'Encapsulate UI, styling, and behavior into reusable primitives that accelerate team development.' }
    ],
    vidhyonixCapabilities: [
      'Accessible UI component development (WCAG 2.1 AA)',
      'Custom React hook architecture for complex business logic',
      'State management orchestration (Zustand, TanStack Query, Redux)',
      'High-framerate micro-animations with Framer Motion',
      'React Native cross-platform mobile synchronization'
    ],
    architectureHighlights: [
      { title: 'Strict Typing with TypeScript', desc: 'Every component prop, event handler, and state hook is fully typed to eliminate runtime errors.' },
      { title: 'Memoization & Rendering Optimization', desc: 'Targeted use of useMemo and useCallback to prevent unnecessary recalculations in data-dense tables.' }
    ],
    relevantServices: [
      { slug: 'web-development', title: 'Web Application Development' },
      { slug: 'mobile-app-development', title: 'Mobile App Development' },
      { slug: 'saas-development', title: 'SaaS Platform Development' }
    ],
    relatedCaseStudies: [
      { slug: 'evitavonni', title: 'Luxury Architectural Digital Showcase', clientName: 'Evitavonni' },
      { slug: 'skillytalk-ai', title: 'Interactive Video Assessment Simulator', clientName: 'SkillyTalk AI' }
    ],
    faqs: [
      { q: 'How do you ensure React applications stay fast as they grow?', a: 'We enforce strict code splitting via dynamic imports, utilize efficient server components, minimize heavy third-party bundles, and implement virtualized lists for rendering large datasets.' }
    ]
  },

  'nodejs': {
    slug: 'nodejs',
    name: 'Node.js',
    category: 'Backend Runtime & Microservices',
    tagline: 'Asynchronous, Event-Driven Backend Architecture for High Concurrency',
    heroDescription: 'We build low-latency REST and GraphQL APIs, real-time WebSocket pipelines, and automated background worker microservices using Node.js and TypeScript.',
    whatItIs: 'Node.js is an open-source, cross-platform JavaScript runtime built on Chrome\'s V8 engine that uses an event-driven, non-blocking I/O model to execute JavaScript on the server.',
    whenToUse: [
      'Real-time communication engines (chatbots, live notifications, WebSockets).',
      'High-throughput API gateways and microservices handling concurrent network I/O.',
      'Event-driven data processing pipelines that consume webhooks from third-party services.',
      'Server-side rendering and full-stack TypeScript backend services.'
    ],
    whyChooseIt: [
      { title: 'Non-Blocking Asynchronous I/O', desc: 'Handles thousands of concurrent database and network requests on a single thread with minimal RAM consumption.' },
      { title: 'Single Language Across the Stack', desc: 'Share schemas, types, and validation logic between frontend and backend codebases, reducing context switching.' },
      { title: 'Unmatched Package Ecosystem', desc: 'Access to the world’s largest package repository (npm) for rapid prototyping and verified integration clients.' }
    ],
    vidhyonixCapabilities: [
      'Production Express, NestJS, and Fastify server engineering',
      'Reliable message queue workers (BullMQ, RabbitMQ, AWS SQS)',
      'Database integration with Prisma, Drizzle, and raw PostgreSQL pooling',
      'Secure JWT/OAuth2 authentication and role-based permissions',
      'Containerized Docker microservice deployment on AWS ECS/Kubernetes'
    ],
    architectureHighlights: [
      { title: 'Connection Pooling & Caching', desc: 'Keep database query latency under 10ms with aggressive Redis caching and managed pooling.' },
      { title: 'Graceful Error Recovery', desc: 'Process lifecycle handling ensuring zero lost transactions during server redeployment.' }
    ],
    relevantServices: [
      { slug: 'api-development', title: 'API & Microservices Development' },
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'ecommerce-automation', title: 'Ecommerce Automation' }
    ],
    relatedCaseStudies: [
      { slug: 'skillytalk-ai', title: 'Asynchronous Video Transcoding Pipeline', clientName: 'SkillyTalk AI' },
      { slug: 'abundish', title: 'Real-Time Order Routing API', clientName: 'Abundish' }
    ],
    faqs: [
      { q: 'Is Node.js fast enough for heavy enterprise workloads?', a: 'Yes. For I/O-intensive workloads—such as APIs, database transactions, and microservices—Node.js ranks among the fastest runtimes in the world. For CPU-bound mathematical operations, we offload to specialized Python or Go microservices.' }
    ]
  },

  'typescript': {
    slug: 'typescript',
    name: 'TypeScript',
    category: 'Language & Type System',
    tagline: 'Enterprise-Grade Type Safety for Reliable, Maintainable Software',
    heroDescription: 'We write 100% strict TypeScript across the entire stack, eliminating entire classes of runtime bugs and building software that scales seamlessly with your team.',
    whatItIs: 'TypeScript is a strongly typed programming language developed by Microsoft that builds on JavaScript by adding static type definitions.',
    whenToUse: [
      'Any mission-critical software codebase intended to last and evolve over years.',
      'Complex domain platforms with intricate data models, financial transactions, or user roles.',
      'Multi-developer teams requiring clear code contracts and automated refactoring confidence.',
      'Shared data contracts between backend APIs and frontend web/mobile clients.'
    ],
    whyChooseIt: [
      { title: 'Catches Errors at Compile Time', desc: 'Identifies typos, null pointers, and schema mismatches during development before code ever touches production.' },
      { title: 'Self-Documenting Code Contracts', desc: 'Developers understand exact object structures and function signatures instantly through IDE intellisense.' },
      { title: 'Fearless Code Refactoring', desc: 'Rename database fields or re-architect core modules with automated compiler guarantees that nothing broke.' }
    ],
    vidhyonixCapabilities: [
      'Strict type-safety configurations across all client and server repositories',
      'End-to-end schema validation using Zod and tRPC',
      'Automated OpenAPI and database schema type generation',
      'Advanced generics and utility types for complex domain models',
      'Zero "any" type discipline for bulletproof predictability'
    ],
    architectureHighlights: [
      { title: 'Runtime Schema Validation with Zod', desc: 'Validate external user input and API responses against strict TypeScript schemas at runtime.' }
    ],
    relevantServices: [
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'saas-development', title: 'SaaS Platform Development' },
      { slug: 'web-development', title: 'Web Application Development' }
    ],
    relatedCaseStudies: [
      { slug: 'skillytalk-ai', title: 'Multi-Tenant SaaS Platform', clientName: 'SkillyTalk AI' }
    ],
    faqs: [
      { q: 'Does using TypeScript slow down development speed?', a: 'Initially, writing types takes a small fraction of time. However, it saves countless hours of tedious manual debugging and prevents breaking changes, resulting in significantly faster overall product delivery.' }
    ]
  },

  'python': {
    slug: 'python',
    name: 'Python',
    category: 'AI, Machine Learning & Data Engineering',
    tagline: 'The Standard Language of Modern Artificial Intelligence and Data Science',
    heroDescription: 'We engineer custom machine learning pipelines, LLM orchestration engines, predictive analytics models, and high-speed data extraction tools in Python.',
    whatItIs: 'Python is a versatile, high-level programming language renowned for its readable syntax and its preeminent ecosystem of machine learning, scientific computing, and artificial intelligence libraries.',
    whenToUse: [
      'Custom AI model training, fine-tuning, and embedding generation.',
      'Retrieval-Augmented Generation (RAG) pipelines and vector database integration.',
      'Complex mathematical forecasting, financial modeling, and algorithmic scoring.',
      'Document parsing, OCR extraction, and automated data scraping pipelines.'
    ],
    whyChooseIt: [
      { title: 'The Gold Standard AI Ecosystem', desc: 'Direct native integration with PyTorch, TensorFlow, Hugging Face, LangChain, and LlamaIndex.' },
      { title: 'High-Performance Asynchronous APIs', desc: 'Frameworks like FastAPI deliver asynchronous performance rivaling Node.js while maintaining Python’s ML power.' },
      { title: 'Rapid Iteration & Mathematical Depth', desc: 'Unmatched tooling for data manipulation (Pandas, NumPy) and statistical verification.' }
    ],
    vidhyonixCapabilities: [
      'Production FastAPI and asynchronous microservice architecture',
      'RAG pipeline development with LangChain, LlamaIndex, and pgvector',
      'Custom LLM agent orchestration with LangGraph and CrewAI',
      'Model containerization and deployment on AWS SageMaker and ECS',
      'Data extraction, document parsing, and automated pipeline monitoring'
    ],
    architectureHighlights: [
      { title: 'Asynchronous Vector Pipeline', desc: 'Ingest and chunk thousands of documents concurrently with asynchronous embedding generation.' }
    ],
    relevantServices: [
      { slug: 'ai-development', title: 'Custom AI Development' },
      { slug: 'ai-agents', title: 'AI Agent Development' },
      { slug: 'voice-ai', title: 'Voice AI & Conversational Telephony' }
    ],
    relatedCaseStudies: [
      { slug: 'skillytalk-ai', title: 'AI Candidate Evaluation Engine', clientName: 'SkillyTalk AI' }
    ],
    faqs: [
      { q: 'How does Vidhyonix deploy Python AI models to handle high web traffic?', a: 'We encapsulate Python models in containerized FastAPI microservices managed by Kubernetes or AWS ECS with GPU/CPU auto-scaling, placing them behind high-speed Redis queues for reliable asynchronous throughput.' }
    ]
  },

  'aws': {
    slug: 'aws',
    name: 'Amazon Web Services (AWS)',
    category: 'Cloud Infrastructure & Enterprise Hosting',
    tagline: 'Reliable, Globally Distributed Cloud Infrastructure for Mission-Critical Systems',
    heroDescription: 'We design, provision, and maintain secure, auto-scaling cloud architectures on AWS using Infrastructure-as-Code (Terraform) and container orchestration.',
    whatItIs: 'Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from global data centers.',
    whenToUse: [
      'Mission-critical enterprise software requiring 99.99% uptime and multi-availability-zone failovers.',
      'High-throughput web applications with unpredictable seasonal or flash traffic surges.',
      'Secure storage of sensitive user assets, video streams, and multi-terabyte databases.',
      'Serverless event-driven architectures with automated pay-per-execution scaling.'
    ],
    whyChooseIt: [
      { title: 'Global Availability & Reliability', desc: 'Deploy services across multi-region edge locations and redundant availability zones.' },
      { title: 'Granular Enterprise Security (IAM)', desc: 'Bank-grade identity policies, private VPC perimeters, and encrypted storage at rest and in transit.' },
      { title: 'Pay-for-Value Scalability', desc: 'Auto-scale computing power up during peak business hours and down overnight to minimize infrastructure costs.' }
    ],
    vidhyonixCapabilities: [
      'Automated Infrastructure as Code (IaC) with Terraform',
      'Container orchestration with Amazon ECS and EKS (Kubernetes)',
      'Serverless event-driven pipelines with AWS Lambda and EventBridge',
      'Relational database architecture with Amazon Aurora and RDS PostgreSQL',
      'Cloud cost optimization and architectural well-architected audits'
    ],
    architectureHighlights: [
      { title: 'VPC Multi-AZ Isolation', desc: 'Public load balancers route to private subnets with strict security groups and zero direct internet exposure.' }
    ],
    relevantServices: [
      { slug: 'cloud-development', title: 'Cloud Architecture & DevOps' },
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'saas-development', title: 'SaaS Platform Development' }
    ],
    relatedCaseStudies: [
      { slug: 'skillytalk-ai', title: 'Cloud Video Ingestion Architecture', clientName: 'SkillyTalk AI' }
    ],
    faqs: [
      { q: 'Can you help audit and reduce our existing AWS monthly bill?', a: 'Yes. We conduct thorough FinOps audits, identifying idle resources, unattached EBS volumes, over-provisioned instances, and opportunities for Savings Plans or spot compute.' }
    ]
  }
};
