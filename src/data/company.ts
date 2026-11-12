export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: "Engineering" | "Design" | "Growth" | "Consulting";
  icon: string;
  image: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  businessValue: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Web Development" | "Mobile Application" | "Enterprise Solution" | "E-Commerce";
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  liveUrl?: string;
  verified: boolean;
  tags: string[];
  featured: boolean;
  platform: "Web" | "iOS" | "Android" | "Cross-Platform";
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  targetAudience: string;
  badge: string;
  icon: string;
  modules: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  useCases: string[];
  icon: string;
  metrics: string;
}

export const COMPANY_DETAILS = {
  name: "Black Grapes Softech",
  tagline: "Innovate. Integrate. Elevate.",
  subTagline: "Transforming Ideas Into Powerful Digital Experiences.",
  description:
    "From custom software and digital platforms to intelligent enterprise applications, Black Grapes Softech helps businesses transform ideas into scalable, secure, and future-ready digital solutions.",
  mission:
    "To provide exceptional software development services tailored to our clients' unique business needs. We are dedicated to delivering top-notch, cutting-edge solutions while fostering a culture of collaboration, growth, and continuous innovation.",
  vision:
    "To lead the way in software development, using innovation and creativity to shape the future of technology. We envision a world where every software solution we create empowers individuals, businesses, and communities to thrive and excel.",
  address: {
    line1: "252-F/H Scheme No 54",
    area: "Vijaynagar",
    city: "Indore",
    pincode: "452010",
    state: "Madhya Pradesh",
    country: "India",
    full: "252-F/H Scheme No 54, Vijaynagar, Indore - 452010, Madhya Pradesh, India.",
  },
  contact: {
    primaryEmail: "info@blackgrapessoftech.com",
    directorEmail: "blackgrapes.arpitjain@gmail.com",
    managementEmail: "blackgrapes.deepikajain@gmail.com",
    phone1: "+91 7470997884",
    phone2: "+91 6262414463",
    whatsappNumber: "917470997884",
    whatsappLink: "https://wa.me/917470997884?text=Hello%20Black%20Grapes%20Softech%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  },
  stats: [
    { label: "Client Projects Delivered", value: "250+" },
    { label: "Global Clients", value: "35+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years of Engineering Experience", value: "12+" },
  ],
  founders: [
    {
      name: "Mr. Arpit Jain",
      role: "Founder & Technical Director",
      bio: "The driving force behind Black Grapes Softech's engineering culture and technological vision. With deep experience in full-cycle enterprise architecture, Arpit leads client solutions with precision and innovative software engineering.",
    },
    {
      name: "Mrs. Deepika Jain",
      role: "Co-Founder & Creative Director",
      bio: "Shaping company culture, creative execution, and operational excellence. Deepika envisions transformative opportunities where others see constraints, steering strategic growth and customer-centric digital products.",
    },
  ],
  verifiedClients: [
    "Connexo",
    "Japan Grabs",
    "Tangence",
    "Draftwise",
    "Pienso",
    "Propenseai",
    "Qualiti",
    "Lionize",
    "Readygg",
    "Hilabs",
    "Prolegis",
    "Mindmate",
    "Haefele Software",
    "ManekTech",
    "Navi",
    "IT Trust",
    "Tryqit (Pty) Ltd",
    "Bermont Digital",
    "Webtonic Solutions",
    "Rocketsoft",
    "Obsidian North",
    "CubeZoo",
    "Ltech Dev",
    "Synthesis",
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    shortDesc:
      "End-to-end custom software solutions engineered for scalability, high throughput, and enterprise-grade security.",
    fullDesc:
      "Welcome to software development where technology meets innovation. Black Grapes Softech delivers bespoke enterprise software, workflow automation, and custom ERP systems. With seasoned software designers and architects, we utilize modern tools to ensure that your software not only looks visually compelling but performs exceptionally well under high loads.",
    category: "Engineering",
    icon: "Code2",
    image: "/assets/Software.jpg",
    features: [
      "Custom Enterprise Software Engineering",
      "Real Estate Management & Brokerage Systems",
      "College & University Campus ERPs",
      "Restaurant Management & Cloud Kitchen POS",
      "Automated Business Workflow Engines",
      "API Integrations & Third-Party Connectors",
    ],
    deliverables: [
      "Modular Architecture Design",
      "Role-Based Access Control (RBAC)",
      "Automated CI/CD Pipelines",
      "High Availability Database Configuration",
      "Comprehensive API Documentation",
    ],
    technologies: ["Node.js", "Python / Django", "TypeScript", "React", "PostgreSQL", "Docker", "AWS"],
    businessValue:
      "Streamlines company operations, reduces manual operational bottlenecks by up to 60%, and guarantees seamless cross-departmental coordination.",
  },
  {
    id: "website-design-development",
    slug: "website-design-development",
    title: "Website Designing & Development",
    shortDesc:
      "Modern, fast, and SEO-optimized digital web applications built with cutting-edge frontend frameworks.",
    fullDesc:
      "A strong web presence is the cornerstone of any modern business. Black Grapes Softech crafts custom, lightning-fast web applications and corporate websites that captivate audiences, reinforce brand credibility, and convert visitors into loyal clients. We adhere to the highest standards of accessibility, mobile responsiveness, and Core Web Vitals.",
    category: "Engineering",
    icon: "Globe",
    image: "/assets/Website-Designing.jpg",
    features: [
      "Custom Next.js & React Frontend Architectures",
      "Responsive & Fluid Mobile-First UI/UX",
      "Headless CMS & Dynamic Content Modeling",
      "Core Web Vitals & Technical SEO Optimization",
      "Interactive Animations & Micro-Interactions",
      "Enterprise Grade Web Security & SSL Hardening",
    ],
    deliverables: [
      "Pixel-perfect Responsive Web App",
      "Clean TypeScript / React Codebase",
      "Structured SEO Schema & OpenGraph Setup",
      "Cross-browser Tested Builds",
      "Admin Dashboard for Content Control",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion", "Vercel"],
    businessValue:
      "Enhances brand authority, decreases bounce rates, and delivers an internationally competitive digital presence.",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc:
      "Native iOS, Android, and cross-platform mobile apps engineered for fluid performance and intuitive touch UX.",
    fullDesc:
      "In a mobile-first digital economy, apps are the direct gateway to customer engagement. Black Grapes Softech engineers intuitive, feature-rich iOS and Android applications. From native Swift and Kotlin applications to versatile Flutter and React Native cross-platform frameworks, we deliver seamless mobile experiences.",
    category: "Engineering",
    icon: "Smartphone",
    image: "/assets/app.jpg",
    features: [
      "Native iOS (Swift & SwiftUI) Engineering",
      "Native Android (Kotlin & Jetpack) Development",
      "Cross-Platform Apps with Flutter & React Native",
      "Real-Time Push Notifications & Live Tracking",
      "In-App Purchases & Secure Payment Gateways",
      "Offline-First Caching & Data Syncing",
    ],
    deliverables: [
      "App Store & Google Play Store Submission Assistance",
      "Production-ready IPA & APK/AAB Builds",
      "Scalable Mobile Backend APIs",
      "Analytics & Crash Reporting Integration",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Node.js", "REST / GraphQL"],
    businessValue:
      "Direct retention channel, engaging push communication, and instant access to customer touchpoints anywhere, anytime.",
  },
  {
    id: "crm-software-development",
    slug: "crm-software-development",
    title: "CRM Software Development",
    shortDesc:
      "Tailor-made Customer Relationship Management platforms that automate lead tracking and customer pipelines.",
    fullDesc:
      "Off-the-shelf CRM systems frequently come with unnecessary complexity and rigid workflows that don't fit your operational structure. Black Grapes Softech designs custom CRM software that matches your sales funnel, automates client communications, and tracks conversion metrics accurately.",
    category: "Engineering",
    icon: "Users2",
    image: "/assets/crm-1.png",
    features: [
      "Custom Lead Ingestion & Qualification Workflows",
      "Automated Multi-Channel Communication Triggers",
      "Sales Representative Performance Tracking",
      "Real-Time Executive Analytics Dashboards",
      "Document Generation & Contract Management",
      "Seamless Integration with Email & VoIP Telephony",
    ],
    deliverables: [
      "Tailored CRM Cloud Instance",
      "Data Migration from Legacy Systems",
      "Custom KPI Reporting Widgets",
      "Team Onboarding & Video Documentation",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Twilio / SendGrid", "Docker"],
    businessValue:
      "Eliminates lead slippage, boosts sales team productivity by 40%, and provides clear visibility into organizational pipeline health.",
  },
  {
    id: "mlm-software-development",
    slug: "mlm-software-development",
    title: "MLM Software Development",
    shortDesc:
      "Specialized multi-level marketing platforms supporting Binary, Matrix, Board, and Generation compensation plans.",
    fullDesc:
      "Black Grapes Softech is an acknowledged pioneer in MLM software engineering. Our battle-tested MLM platforms are designed to process complex multi-tier commission calculations, tree visualizations, payout schedules, and member e-wallets with zero mathematical error and top-tier transactional security.",
    category: "Engineering",
    icon: "Network",
    image: "/assets/mlm-software.png",
    features: [
      "Binary, Matrix, Board, Unilevel & Generation Compensation Plans",
      "Real-Time Dynamic Genealogic Tree Visualization",
      "Automated E-Wallet, Payouts & Commission Engine",
      "Multi-Currency & Cryptocurrency Payment Gateways",
      "E-Pin Generation & Member Pin Transfer Portals",
      "Fraud Prevention & Anomaly Detection Filters",
    ],
    deliverables: [
      "Comprehensive Administrator Management Panel",
      "Member Self-Service Dashboard & Genealogic Tree",
      "Real-Time Financial Ledger & Auditing Module",
      "Automated Tax (TDS/GST) Deduction Support",
    ],
    technologies: ["PHP / Laravel", "Node.js", "MySQL / MariaDB", "Redis Queue", "Vue / React"],
    businessValue:
      "Provides reliable, automated commission distribution without manual disputes, handling thousands of concurrent members effortlessly.",
  },
  {
    id: "game-development",
    slug: "game-development",
    title: "Game Development",
    shortDesc:
      "Engaging 2D/3D games, casual mobile titles, and interactive multiplayer gaming experiences.",
    fullDesc:
      "Our creative and engineering studios develop immersive gaming experiences for mobile and web platforms. From conceptual art and gameplay mechanics to physics simulation and multi-player networking, Black Grapes Softech delivers high-retention interactive games.",
    category: "Engineering",
    icon: "Gamepad2",
    image: "/assets/Game-Development.jpg",
    features: [
      "2D & 3D Interactive Game Architecture",
      "Multiplayer Networking & Real-Time Syncing",
      "Physics-based Game Mechanics & Particle Effects",
      "Monetization: In-App Purchases, Rewarded Ads, Season Passes",
      "Cross-Platform Deployment (iOS, Android, WebGL)",
      "Audio Scoring & Custom Sound Design",
    ],
    deliverables: [
      "Fully Compiled Game Packages",
      "Asset Pipelines & Source Code",
      "Leaderboards & Social Sharing Connectors",
      "Anti-Cheat & Secure Server Logic",
    ],
    technologies: ["Unity", "Unreal Engine", "WebGL", "C#", "Blender", "Photon Engine"],
    businessValue:
      "Creates viral user acquisition, deep customer engagement, and high daily active user (DAU) retention.",
  },
  {
    id: "graphic-designing",
    slug: "graphic-designing",
    title: "Graphic Designing & Brand Identity",
    shortDesc:
      "Corporate brand guidelines, vector logos, marketing collateral, and UI design systems.",
    fullDesc:
      "Visual identity is the emotional voice of your enterprise. Black Grapes Softech's design team crafts memorable, timeless visual identities that resonate across print and digital media. We ensure brand consistency through detailed design systems and high-fidelity collateral.",
    category: "Design",
    icon: "Palette",
    image: "/assets/Graphic-Design-Black-Grapes-Softech.jpg",
    features: [
      "Comprehensive Corporate Identity & Brand Books",
      "Vector Logo Creation & Symbol Mark Design",
      "Marketing Collateral: Brochures, Pitch Decks, Annual Reports",
      "Digital Advertising Banners & Social Media Kits",
      "Product Packaging & 3D Mockup Visualizations",
      "Figma UI Component Design Systems",
    ],
    deliverables: [
      "Master Vector Assets (SVG, EPS, AI, PDF)",
      "Color Palette Specifications & Typography Rules",
      "Exported Social Media & Print-Ready Files",
      "Usage Guideline Manual for Internal Teams",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "Blender"],
    businessValue:
      "Builds immediate trust, distinguishes your business from competitors, and elevates brand equity in client eyes.",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    shortDesc:
      "Data-driven SEO, Google Ads, social media strategy, and conversion rate optimization campaigns.",
    fullDesc:
      "Having a brilliant digital product is only half the battle; reaching the right audience is what drives revenue. Black Grapes Softech's digital growth specialists employ data-driven search engine optimization, paid ad campaigns, and content strategies that generate verified inquiries and boost ROI.",
    category: "Growth",
    icon: "TrendingUp",
    image: "/assets/digital-marketing.jpg",
    features: [
      "Technical & On-Page Search Engine Optimization (SEO)",
      "Google Ads (Search, Display, Performance Max) Campaigns",
      "Social Media Marketing & Brand Community Building",
      "Content Strategy & Authority Link Building",
      "Conversion Rate Optimization (CRO) & Funnel Audits",
      "Comprehensive Monthly Analytics & ROI Reporting",
    ],
    deliverables: [
      "SEO Keyword Strategy & Technical Audit",
      "High-Converting Ad Creatives & Copy",
      "Custom Campaign Tracking via GA4 & Tag Manager",
      "Fortnightly Performance Review Calls",
    ],
    technologies: ["Google Analytics 4", "Search Console", "Meta Business Suite", "SEMrush", "Tag Manager"],
    businessValue:
      "Provides measurable customer acquisition channels, lower cost-per-lead, and long-term organic search authority.",
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    shortDesc:
      "Robust single-store and multi-vendor e-commerce marketplaces with automated order routing and checkout.",
    fullDesc:
      "From boutique consumer brands to complex multi-vendor marketplaces, Black Grapes Softech builds high-conversion e-commerce engines. We implement seamless payment gateways, automated inventory management, localized taxes, and high-speed checkout flows.",
    category: "Engineering",
    icon: "ShoppingBag",
    image: "/assets/your-businesses.jpeg",
    features: [
      "Custom Headless E-Commerce & Shopify/WooCommerce Engineering",
      "Multi-Vendor Marketplace Infrastructure with Vendor Portals",
      "Multiple Payment Gateways (Razorpay, Stripe, PayPal, COD)",
      "Automated Shipping Integrations & Real-Time Tracking",
      "Faceted Product Filtering & Elastic Search Integration",
      "Abandoned Cart Recovery & Loyalty Reward Programs",
    ],
    deliverables: [
      "Live E-Commerce Platform Ready for Sales",
      "Secure Admin Inventory & Order Management Hub",
      "Automated Customer Invoice & SMS/Email Notifications",
      "PCI-DSS Compliant Payment Integrations",
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Node.js", "Stripe / Razorpay", "Tailwind CSS"],
    businessValue:
      "Maximizes average order value, minimizes cart abandonment, and scales seamlessly during festive traffic surges.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "borit",
    slug: "borit",
    title: "BORIT Industrial Engineering",
    client: "BORIT International",
    category: "Web Development",
    summary:
      "Enterprise digital portal and engineering showcase for an international manufacturing & precision technology manufacturer.",
    challenge:
      "The client needed an internationally competitive, multi-lingual digital platform to present complex precision manufacturing solutions to global industrial partners.",
    solution:
      "Designed and developed a responsive, ultra-fast web platform highlighting precision engineering specifications, certifications, and direct RFQ (Request for Quote) flows.",
    results: [
      "Global inquiries increased by 45%",
      "Page load speed optimized to under 1.2s globally",
      "Seamless responsive presentation across industrial tablet devices",
    ],
    image: "/assets/borit.jpg",
    liveUrl: "https://www.borit.com",
    verified: true,
    tags: ["Enterprise Web", "Industrial", "Next.js", "Responsive UI"],
    featured: true,
    platform: "Web",
  },
  {
    id: "blush-and-bloom",
    slug: "blush-and-bloom",
    title: "Blush & Bloom Luxury Beauty",
    client: "Blush & Bloom Co.",
    category: "E-Commerce",
    summary:
      "Luxury organic cosmetics and skincare e-commerce storefront with streamlined checkout and product storytelling.",
    challenge:
      "Creating a high-end editorial shopping experience that balanced large high-resolution cosmetic photography with fast mobile checkout.",
    solution:
      "Built a tailored e-commerce experience with rich visual merchandising, custom ingredient transparency filters, and one-click localized payments.",
    results: [
      "Checkout conversion rate increased by 38%",
      "Cart abandonment dropped by 24%",
      "Full mobile performance score of 95+ on Google PageSpeed",
    ],
    image: "/assets/BlushOBloom.png",
    liveUrl: "https://blushandbloom.co.in",
    verified: true,
    tags: ["E-Commerce", "Beauty", "Payment Gateway", "Mobile-First"],
    featured: true,
    platform: "Web",
  },
  {
    id: "aton-fitness",
    slug: "aton-fitness",
    title: "Aton Fitness Performance Club",
    client: "Aton Fitness",
    category: "Web Development",
    summary:
      "Dynamic athletic gym and wellness web portal featuring member onboarding, class schedules, and trainer portfolios.",
    challenge:
      "Aton Fitness required an energetic, dark-mode visual interface that embodied intensity and motivated potential members to book trial sessions.",
    solution:
      "Engineered an impactful web experience with bold typography, high-contrast imagery, interactive class timetables, and instant trial booking.",
    results: [
      "Membership trial bookings doubled within the first quarter",
      "Over 60% of members accessed daily class schedules via mobile",
    ],
    image: "/assets/atonfitness.in_.png",
    liveUrl: "https://atonfitness.in",
    verified: true,
    tags: ["Fitness", "Dynamic UI", "Lead Generation", "Class Booking"],
    featured: true,
    platform: "Web",
  },
  {
    id: "readmore",
    slug: "readmore",
    title: "ReadMore E-Reader & Audio Books",
    client: "ReadMore Media",
    category: "Mobile Application",
    summary:
      "Native iOS reading and audiobook listening application with customizable typography, dark mode, and offline synchronization.",
    challenge:
      "Architecting an iOS app capable of handling large offline digital libraries, seamless audio narration syncing, and smooth page curl animations without draining battery.",
    solution:
      "Developed a native Swift iOS app leveraging CoreData for local caching, background audio streaming, and personalized reading ergonomics.",
    results: [
      "4.8/5 App Store customer satisfaction rating",
      "Over 100,000 active reading hours recorded in year one",
    ],
    image: "/assets/ReadMore.jpg",
    verified: true,
    tags: ["iOS Native", "Swift", "CoreData", "Audiobook Engine"],
    featured: true,
    platform: "iOS",
  },
  {
    id: "dbt-24-7",
    slug: "dbt-24-7",
    title: "DBT 24/7 Digital Banking & Transfers",
    client: "DBT Financial Services",
    category: "Mobile Application",
    summary:
      "Secure iOS mobile banking and direct-benefit transaction management application with multi-factor biometric authentication.",
    challenge:
      "Strict regulatory compliance, bank-grade encryption, and real-time transaction reconciliation for round-the-clock digital payments.",
    solution:
      "Architected a hardened iOS fintech application featuring FaceID/TouchID security, end-to-end encrypted payload transfers, and instant push transaction alerts.",
    results: [
      "Zero security incidents across millions in processed transfers",
      "Average transaction completion time reduced to under 3 seconds",
    ],
    image: "/assets/DBT247.png",
    verified: true,
    tags: ["Fintech", "iOS", "Biometrics", "High-Security"],
    featured: true,
    platform: "iOS",
  },
  {
    id: "beauty-counter",
    slug: "beauty-counter",
    title: "Beauty Counter On-Demand Salon App",
    client: "Beauty Counter Services",
    category: "Mobile Application",
    summary:
      "On-demand personal grooming and salon booking app connecting verified beauticians with residential clients in real-time.",
    challenge:
      "Real-time GPS dispatching, schedule conflict resolution, and variable pricing based on stylist tier and client location.",
    solution:
      "Engineered an intuitive dual-interface iOS mobile app (client app + beautician app) with integrated scheduling calendar and digital payment escrow.",
    results: [
      "Processed over 15,000 on-demand appointments in the launch year",
      "Average user booking time under 60 seconds",
    ],
    image: "/assets/Beautycounter.png",
    verified: true,
    tags: ["On-Demand", "iOS App", "Geolocation", "Booking System"],
    featured: true,
    platform: "iOS",
  },
  {
    id: "eduvacancy",
    slug: "eduvacancy",
    title: "Eduvacancy - Educator Recruitment",
    client: "Eduvacancy Network",
    category: "Mobile Application",
    summary:
      "Pan-India educator job marketplace and recruitment app connecting schools, colleges, and coaching institutes with verified faculty.",
    challenge:
      "Connecting thousands of educational institutions with qualified teachers across diverse subjects, locations, and salary brackets.",
    solution:
      "Engineered an Android mobile application with resume parsing, video introduction uploads, instant school interview scheduling, and salary matching.",
    results: [
      "Over 50,000 registered teachers across India",
      "Reduced school hiring cycles from 45 days to under 12 days",
    ],
    image: "/assets/Android-App-Eduvacancy.png",
    verified: true,
    tags: ["Android", "EdTech", "Job Portal", "Kotlin"],
    featured: true,
    platform: "Android",
  },
  {
    id: "honeylia-emart",
    slug: "honeylia-emart",
    title: "HoneyliaEmart Hyperlocal Grocery",
    client: "Honeylia Retail",
    category: "Mobile Application",
    summary:
      "High-speed hyperlocal grocery and household goods delivery application with real-time delivery rider tracking.",
    challenge:
      "Handling thousands of inventory SKUs with variable weight pricing, quick-delivery dispatch logic, and real-time delivery rider routing.",
    solution:
      "Built an Android e-commerce application with barcode inventory sync, instant cart calculations, and live GPS rider tracking.",
    results: [
      "99.4% on-time delivery rate under 30 minutes",
      "Over 20,000 monthly orders fulfilled smoothly",
    ],
    image: "/assets/HoneyliaEmart.png",
    verified: true,
    tags: ["Android", "Hyperlocal", "Live GPS", "Quick Commerce"],
    featured: true,
    platform: "Android",
  },
  {
    id: "jobberman",
    slug: "jobberman",
    title: "Jobberman Career & Talent Hub",
    client: "Jobberman Group",
    category: "Web Development",
    summary:
      "High-scale recruitment, career development, and candidate assessment digital platform serving enterprise employers.",
    challenge:
      "Massive traffic concurrency, complex automated candidate matching algorithms, and enterprise HR applicant tracking system (ATS) integrations.",
    solution:
      "Optimized front-end components, candidate assessment flows, and responsive employer dashboards to support high-throughput candidate submissions.",
    results: [
      "Handles millions of monthly pageviews seamlessly",
      "Employer candidate shortlisting time cut by half",
    ],
    image: "/assets/JObberman.jpg",
    liveUrl: "https://www.jobberman.com",
    verified: true,
    tags: ["Enterprise Web", "Recruitment", "High Scale", "Job Board"],
    featured: false,
    platform: "Web",
  },
  {
    id: "stavanger-parkering",
    slug: "stavanger-parkering",
    title: "Stavanger Parkering Smart Mobility",
    client: "Stavanger Municipality Mobility",
    category: "Enterprise Solution",
    summary:
      "Municipal smart parking management system providing real-time sensor occupancy updates, digital permits, and automated ticket validation.",
    challenge:
      "Integrating disparate IoT parking sensors across urban parking garages and providing public drivers with real-time slot availability.",
    solution:
      "Constructed a high-reliability municipal portal and operator console with live parking slot visualization and automated license plate recognition (ALPR) support.",
    results: [
      "Urban parking congestion reduced by 22% in peak hours",
      "99.98% platform uptime for public transit commuters",
    ],
    image: "/assets/StavangerParkering.jpg",
    verified: true,
    tags: ["Smart City", "IoT Integration", "Mobility", "Enterprise"],
    featured: false,
    platform: "Cross-Platform",
  },
  {
    id: "dc-shoes",
    slug: "dc-shoes",
    title: "DC Shoes Global Digital Catalog",
    client: "DC Shoes Distribution",
    category: "E-Commerce",
    summary:
      "High-impact digital footwear showcase and brand storytelling experience celebrating action sports culture.",
    challenge:
      "Designing a brand-aligned, high-energy product catalog that reflects the skateboarding heritage of the brand while preserving lightning-fast load times.",
    solution:
      "Engineered an interactive product catalog with high-fidelity asset rendering, interactive 360 spin views, and localized retailer directory lookups.",
    results: [
      "Product showcase dwell time increased by 65%",
      "Store locator interactions surged by 80%",
    ],
    image: "/assets/DC-Shoes.png",
    verified: true,
    tags: ["Footwear", "Brand Catalog", "High-Impact UI", "Interactive"],
    featured: false,
    platform: "Web",
  },
  {
    id: "pikto",
    slug: "pikto",
    title: "Pikto Visual Design & Media Platform",
    client: "Pikto Inc.",
    category: "Web Development",
    summary:
      "Modern graphic asset marketplace and visual media showcase for designers, agencies, and content creators.",
    challenge:
      "Serving high-resolution vector and photographic media assets with instant previews, rights licensing, and watermark previews.",
    solution:
      "Delivered a performant web platform featuring dynamic image resizing on the fly, instantaneous keyword search, and secure digital asset downloads.",
    results: [
      "Sub-second asset search responses across millions of media files",
      "Integrated licensing subscription engine with zero friction",
    ],
    image: "/assets/pikto.com_.png",
    liveUrl: "https://pikto.com",
    verified: true,
    tags: ["Media Platform", "Asset Management", "Search Engine", "Web App"],
    featured: false,
    platform: "Web",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "ready-made-mlm-software",
    slug: "ready-made-mlm-software",
    title: "Ready-Made MLM Software Suite",
    tagline: "Enterprise Multi-Tier Compensation & Genealogic Engine",
    description:
      "A complete, battle-tested Multi-Level Marketing solution with automated payout algorithms, genealogic tree visualization, member e-wallets, and comprehensive administrative governance.",
    features: [
      "Pre-configured Binary, Matrix, Unilevel, and Hybrid compensation plans",
      "Real-time dynamic genealogic visual tree with instant zoom & drill-down",
      "Automated e-wallet payouts, TDS/GST deduction, and bank transfers",
      "Integrated E-Pin generation, tracking, and tamper-proof security",
      "Multi-lingual & multi-currency support with crypto payment options",
    ],
    targetAudience: "Direct Selling Enterprises, MLM Startups, Network Marketing Firms",
    badge: "Enterprise Ready",
    icon: "Network",
    modules: ["Genealogy Engine", "E-Wallet Portal", "Commission Calculator", "Admin Audit Ledger"],
  },
  {
    id: "real-estate-crm-system",
    slug: "real-estate-crm-system",
    title: "Real Estate Management & Brokerage ERP",
    tagline: "End-to-End Property Inventory, Lead Distribution & Sales Engine",
    description:
      "Specialized real estate operating software tailored for property developers, brokerage firms, and commercial leasing agents to manage property inventories, client site visits, and booking workflows.",
    features: [
      "Interactive property unit inventory matrix with real-time sold/reserved status",
      "Automated buyer lead round-robin distribution to sales executives",
      "Site-visit scheduling and client feedback logging via mobile",
      "Automated payment milestone schedule generation and client payment receipts",
      "Broker & channel partner commission tracking and payout approval flows",
    ],
    targetAudience: "Real Estate Developers, Property Brokerage Networks, Asset Managers",
    badge: "Industry Proven",
    icon: "Building2",
    modules: ["Unit Inventory Matrix", "Lead Distribution", "Payment Milestones", "Channel Partner Hub"],
  },
  {
    id: "multivendor-ecommerce-suite",
    slug: "multivendor-ecommerce-suite",
    title: "Omnichannel Multi-Vendor E-Commerce",
    tagline: "Scalable Marketplace Engine for Multi-Seller Commerce",
    description:
      "Turnkey multi-vendor marketplace platform enabling thousands of independent sellers to list products, fulfill orders, and receive automated payout disbursements.",
    features: [
      "Independent vendor management dashboards with product catalog upload",
      "Automated split payments and merchant commission deductions",
      "Integrated shipping logistics calculator and tracking barcode generation",
      "Faceted elastic product search with custom variant matrices",
      "Customer review moderation and automated fraud risk scores",
    ],
    targetAudience: "Marketplace Operators, Retail Consortia, D2C Aggregators",
    badge: "High Scale",
    icon: "ShoppingBag",
    modules: ["Vendor Console", "Split-Payout Gateway", "Shipping Engine", "Customer Mobile Web App"],
  },
  {
    id: "campus-erp-software",
    slug: "campus-erp-software",
    title: "College & University Campus ERP",
    tagline: "Comprehensive Academic Governance & Student Information System",
    description:
      "All-in-one educational institute operating system managing student admissions, timetable generation, examination grading, fee collection, and digital library records.",
    features: [
      "Online student admission application & document verification portal",
      "Automated semester timetable generation and faculty workload balancing",
      "Exam mark entry, automated grade point calculation, and transcript printing",
      "Fee installment management with online payment gateway and SMS receipts",
      "Hostel room allocation and transport bus route management",
    ],
    targetAudience: "Universities, Engineering Colleges, Higher Education Institutes",
    badge: "Education Suite",
    icon: "GraduationCap",
    modules: ["Admissions Portal", "Exam & Grading Engine", "Fee Collection Hub", "Faculty Allocation"],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant telemedicine platforms, electronic health records (EHR), and patient appointment scheduling systems that streamline clinical care.",
    useCases: ["Telemedicine Apps", "Hospital Management Systems", "Patient Portals", "Pharmacy Inventory"],
    icon: "Activity",
    metrics: "Reduced patient waiting times by 40%",
  },
  {
    id: "ecommerce-retail",
    slug: "ecommerce-retail",
    title: "E-Commerce & Retail",
    description:
      "High-speed shopping experiences, multi-vendor marketplaces, and omnichannel point-of-sale systems built for extreme scalability during holiday peaks.",
    useCases: ["D2C Brand Storefronts", "B2B Wholesale Portals", "Inventory Automation", "Loyalty Programs"],
    icon: "ShoppingBag",
    metrics: "Up to 35% improvement in checkout conversion",
  },
  {
    id: "transportation-logistics",
    slug: "transportation-logistics",
    title: "Taxi & Transportation Fleet",
    description:
      "On-demand ride hailing engines, dispatch dashboards, GPS fleet tracking, and automated driver payout reconciliation systems.",
    useCases: ["Fleet Tracking Systems", "On-Demand Cab Dispatch", "Route Optimization", "Driver Wallets"],
    icon: "Truck",
    metrics: "Optimized route planning saving 20% fuel overhead",
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate & Infrastructure",
    description:
      "Interactive 3D property tours, lead distribution algorithms, unit booking matrices, and channel partner commission portals.",
    useCases: ["Property Portals", "Broker CRM Systems", "Lease Management", "Virtual 3D Showcases"],
    icon: "Building2",
    metrics: "Accelerated property sales velocity by 50%",
  },
  {
    id: "education",
    slug: "education",
    title: "Education & EdTech",
    description:
      "Scalable learning management systems (LMS), live video classrooms, educator hiring marketplaces, and college ERP applications.",
    useCases: ["Interactive LMS Platforms", "Faculty Job Portals", "Campus ERPs", "Online Exam Suites"],
    icon: "GraduationCap",
    metrics: "Empowered 100,000+ students and educators",
  },
  {
    id: "food-delivery",
    slug: "food-delivery",
    title: "Food Delivery & Cloud Kitchens",
    description:
      "Hyperlocal restaurant ordering apps, kitchen display systems (KDS), delivery rider dispatch, and menu matrix management.",
    useCases: ["Restaurant Ordering Apps", "Cloud Kitchen POS", "Delivery Rider Tracking", "Menu Management"],
    icon: "Utensils",
    metrics: "Under 30-minute average order delivery cycles",
  },
  {
    id: "home-services",
    slug: "home-services",
    title: "Home Services & On-Demand",
    description:
      "Turnkey on-demand technician dispatch, cleaning, maintenance, and salon-at-home booking applications with verified vendor checks.",
    useCases: ["Salon-at-Home Apps", "Electrician & Plumber Dispatch", "House Cleaning Booking", "Service Escrow"],
    icon: "Home",
    metrics: "Over 50,000 home bookings facilitated",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Black Grapes Softech transformed our complex precision manufacturing capabilities into a modern, internationally competitive digital platform. Their attention to detail and technical execution is exceptional.",
    author: "Industrial Director",
    company: "BORIT Engineering",
    location: "International",
    project: "Enterprise Web Architecture",
  },
  {
    quote:
      "Our mobile app for educators required flawless handling of tens of thousands of simultaneous users across India. The team at Black Grapes delivered on time, with rock-solid stability and great communication.",
    author: "Operations Lead",
    company: "Eduvacancy",
    location: "India",
    project: "Android Mobile Platform",
  },
  {
    quote:
      "The custom MLM software developed by Black Grapes Softech handled our complex genealogic tree and payout schedules with 100% accuracy from day one. Their domain expertise is unmatched.",
    author: "Managing Director",
    company: "Direct Network Solutions",
    location: "India",
    project: "MLM Enterprise System",
  },
  {
    quote:
      "From UI/UX design to high-converting Shopify & Next.js execution, Black Grapes helped us launch Blush & Bloom with a luxury aesthetic that our customers praise every day.",
    author: "Brand Founder",
    company: "Blush & Bloom",
    location: "India",
    project: "Luxury E-Commerce Platform",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Client-Focused Solutions",
    description:
      "We design software around your unique business workflows rather than forcing you into rigid templates. Every line of code is purposeful and tailored to your growth.",
    icon: "HeartHandshake",
  },
  {
    title: "Security-Conscious Development",
    description:
      "Enterprise security is integrated into our engineering DNA: role-based access control, encrypted payloads, OWASP compliance, and tamper-proof financial ledgers.",
    icon: "ShieldCheck",
  },
  {
    title: "Rigorous Quality Assurance",
    description:
      "Comprehensive multi-device testing, automated regression checks, and performance benchmarks ensure your product launches without regressions or downtime.",
    icon: "CheckCircle2",
  },
  {
    title: "Collaborative Relationships",
    description:
      "We act as long-term technology partners rather than transactional contractors. Transparent sprint reviews, direct communication, and shared success metrics.",
    icon: "Users",
  },
  {
    title: "Dedicated Technical Support",
    description:
      "Continuous post-launch maintenance, cloud infrastructure monitoring, and timely updates to keep your systems operating at peak performance 24/7.",
    icon: "Clock",
  },
  {
    title: "Proven Architecture & Scalability",
    description:
      "Engineered with modern microservices, clean code principles, and cloud-native standards ready to scale from hundreds to millions of transactions.",
    icon: "Cpu",
  },
];
