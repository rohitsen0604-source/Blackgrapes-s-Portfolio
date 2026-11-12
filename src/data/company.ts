export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
  features: string[];
  technologies: string[];
  theme: "white" | "beige" | "charcoal";
}

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  client: string;
  category: "Web Development" | "Mobile Application" | "E-Commerce" | "Enterprise Solution";
  status: "CLIENT PROJECT" | "DEMO PROJECT";
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  liveUrl?: string;
  tags: string[];
  platform: "Web" | "iOS" | "Android" | "Cross-Platform";
  featured?: boolean;
}

export interface LiveDemoItem {
  id: string;
  num: string;
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
  badge: string;
  status: "LIVE OPERATIONAL" | "ACTIVE DEMO";
  verificationNote?: string;
}

export const COMPANY_DETAILS = {
  name: "BLACK GRAPES SOFTECH",
  tagline: "WE TURN AMBITIOUS IDEAS INTO DIGITAL REALITY.",
  supportingCopy:
    "Black Grapes Softech combines technology, creativity and engineering to build meaningful digital experiences and business solutions.",
  location: "INDORE, INDIA",
  aboutHeadline: "WE BELIEVE GREAT TECHNOLOGY SHOULD MAKE A REAL DIFFERENCE.",
  projectsHeadline: "SELECTED WORK. REAL-WORLD IMPACT.",
  demosHeadline: "EXPLORE OUR LIVE DEMOS.",
  demosSubheadline: "REAL PRODUCTS. WORKING EXPERIENCES.",
  demosDescription:
    "Explore our software demonstrations and experience the solutions developed by Black Grapes Softech.",
  contactHeadline: "LET'S BUILD SOMETHING THAT MATTERS.",
  aboutText:
    "Black Grapes Softech is a modern software engineering studio headquartered in Vijaynagar, Indore. Since our inception, we have helped enterprises, startups, and public institutions transform complex operational challenges into elegant, high-performing digital platforms.",
  vision:
    "To lead the future of software development through human-centered design, architectural precision, and enduring digital craft.",
  mission:
    "To build purposeful, scalable digital products that empower our clients to achieve measurable competitive advantage and operational efficiency.",
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
    { label: "Engineering Practice", value: "DECADE+" },
    { label: "Deployment Scope", value: "FULL-CYCLE" },
    { label: "Core Platforms", value: "WEB & MOBILE" },
    { label: "Project Leadership", value: "DIRECTOR-LED" },
  ],
  founders: [
    {
      name: "Mr. Arpit Jain",
      role: "Founder & Technical Director",
      bio: "Technical director leading software architecture, system engineering, and agile project execution with hands-on quality standards.",
    },
    {
      name: "Mrs. Deepika Jain",
      role: "Co-Founder & Creative Director",
      bio: "Creative director shaping user experience standards, digital interface design, and client operational partnerships.",
    },
  ],
  verifiedDomains: [
    "Industrial Manufacturing & Showcase",
    "Luxury E-Commerce Storefronts",
    "Mobile Application Ecosystems",
    "Fitness & Performance Platforms",
    "Education & Career Portals",
    "Direct Benefit & Public Systems",
    "Enterprise ERP & CRM Architectures",
    "Multi-Level Network Engines",
  ],
};

// 11 Actual Services with Alternating Editorial Themes
export const SERVICES: ServiceItem[] = [
  {
    id: "software-development",
    num: "01",
    title: "Software Development",
    shortDesc:
      "Custom enterprise software, real estate management ERPs, restaurant operating systems, and automated business engines built for scale.",
    icon: "Code2",
    image: "/assets/Software.jpg",
    features: [
      "Custom Enterprise Architectures",
      "Real Estate & Brokerage ERP Systems",
      "Campus & University Management",
      "Role-Based Access & Data Security",
    ],
    technologies: ["Node.js", "Python / Django", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    theme: "charcoal", // Featured dark card
  },
  {
    id: "website-design-development",
    num: "02",
    title: "Website Design & Development",
    shortDesc:
      "Modern, ultra-fast corporate web applications crafted with Next.js, React, and Swiss-inspired editorial typography.",
    icon: "Globe",
    image: "/assets/Website-Designing.jpg",
    features: [
      "Next.js App Router & SSR Primitives",
      "Fluid Responsive Typography & Layouts",
      "Core Web Vitals & Technical SEO",
      "Framer Motion Micro-Interactions",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    theme: "white",
  },
  {
    id: "mobile-app-development",
    num: "03",
    title: "Mobile Application Development",
    shortDesc:
      "Native iOS (Swift), Android (Kotlin), and cross-platform Flutter/React Native mobile applications with smooth touch ergonomics.",
    icon: "Smartphone",
    image: "/assets/app.jpg",
    features: [
      "Native iOS (Swift & SwiftUI) Engineering",
      "Native Android (Kotlin & Jetpack)",
      "Cross-Platform Flutter & React Native",
      "Real-Time Sync & In-App Purchases",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    theme: "beige",
  },
  {
    id: "crm-software-development",
    num: "04",
    title: "CRM Software Development",
    shortDesc:
      "Bespoke Customer Relationship Management platforms designed to automate sales pipelines, lead routing, and customer communications.",
    icon: "Users2",
    image: "/assets/crm-1.png",
    features: [
      "Lead Capture & Qualification Funnels",
      "Multi-Channel Telephony & Email Sync",
      "Real-Time Executive Dashboards",
      "Automated Contract & Invoice Generation",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "SendGrid"],
    theme: "white",
  },
  {
    id: "mlm-software-development",
    num: "05",
    title: "MLM Software Development",
    shortDesc:
      "Battle-tested Multi-Level Marketing software featuring automated commission engines, interactive genealogic trees, and secure member e-wallets.",
    icon: "Network",
    image: "/assets/mlm-software.png",
    features: [
      "Binary, Matrix, Unilevel & Hybrid Plans",
      "Real-Time Dynamic Genealogic Visual Tree",
      "Automated Payouts & Commission Engine",
      "E-Pin Generation & Transfer Security",
    ],
    technologies: ["PHP / Laravel", "Node.js", "MySQL", "Redis Queue"],
    theme: "charcoal", // Featured dark card
  },
  {
    id: "game-development",
    num: "06",
    title: "Game Development",
    shortDesc:
      "Engaging 2D and 3D interactive mobile and web games with fluid physics mechanics, particle animations, and multiplayer networking.",
    icon: "Gamepad2",
    image: "/assets/Game-Development.jpg",
    features: [
      "2D & 3D Interactive Game Engineering",
      "Cross-Platform Mobile & WebGL Games",
      "Multiplayer Networking & Real-Time Sync",
      "In-App Purchases & Rewarded Ads",
    ],
    technologies: ["Unity", "Unreal Engine", "C#", "WebGL", "Blender"],
    theme: "white",
  },
  {
    id: "graphic-designing",
    num: "07",
    title: "Graphic Designing",
    shortDesc:
      "Corporate visual identity, typography systems, vector logos, marketing collateral, pitch decks, and Figma UI component libraries.",
    icon: "Palette",
    image: "/assets/Graphic-Design-Black-Grapes-Softech.jpg",
    features: [
      "Complete Brand Identity Guidelines",
      "Figma UI/UX Component Design Systems",
      "Marketing Collateral & Pitch Decks",
      "Product Packaging & Vector Assets",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign"],
    theme: "beige",
  },
  {
    id: "digital-marketing",
    num: "08",
    title: "Digital Marketing",
    shortDesc:
      "Data-driven technical SEO, Google Search & Display campaigns, meta performance marketing, and conversion rate optimization.",
    icon: "TrendingUp",
    image: "/assets/digital-marketing.jpg",
    features: [
      "Technical On-Page & Off-Page SEO",
      "Google Ads (Search & Performance Max)",
      "Social Media Growth Strategy",
      "Funnel Conversion Rate Optimization (CRO)",
    ],
    technologies: ["Google Analytics 4", "Search Console", "Meta Ads", "SEMrush"],
    theme: "white",
  },
  {
    id: "ecommerce-solutions",
    num: "09",
    title: "E-Commerce Solutions",
    shortDesc:
      "High-converting single-store and multi-vendor online marketplaces with seamless payment gateways, automated inventory, and fast checkout.",
    icon: "ShoppingBag",
    image: "/assets/your-businesses.jpeg",
    features: [
      "Custom Headless E-Commerce Storefronts",
      "Multi-Vendor Marketplace Infrastructure",
      "Integrated Payment Gateways (Razorpay, Stripe)",
      "Automated Shipping Logistics & Tracking",
    ],
    technologies: ["Next.js", "Shopify Storefront", "Node.js", "Razorpay"],
    theme: "beige",
  },
  {
    id: "it-staffing",
    num: "10",
    title: "IT Staffing Solutions",
    shortDesc:
      "Talent augmentation and dedicated software engineers to scale your development teams quickly with 48-hour onboarding.",
    icon: "UserCheck",
    image: "/assets/about-3.png",
    features: [
      "Dedicated Engineers (Next.js, Node, Flutter)",
      "48-Hour Talent Onboarding Process",
      "Direct Slack / Teams Integration & Standups",
      "Elastic Scale Without Recruitment Overhead",
    ],
    technologies: ["React", "Node.js", "Flutter", "QA Automation", "DevOps"],
    theme: "white",
  },
  {
    id: "tender-services",
    num: "11",
    title: "Government & Private Tender Services",
    shortDesc:
      "End-to-end tender discovery, technical proposal drafting, documentation compliance, and bid management on public and corporate portals.",
    icon: "FileText",
    image: "/assets/Security-1.jpg",
    features: [
      "Tender Identification on GeM & CPP Portals",
      "Technical Proposal & BOQ Drafting",
      "Eligibility & EMD Compliance Verification",
      "Corporate RFP / RFQ Negotiation Advisory",
    ],
    technologies: ["GeM Portal", "CPP Portal", "RFP Analysis", "Compliance"],
    theme: "charcoal", // Featured dark card
  },
];

// Premier Live Demo Systems & Verified Client Deliveries
export const PROJECTS: ProjectItem[] = [
  {
    id: "time-management-system",
    num: "01",
    title: "Time Management System",
    client: "Enterprise Operational Utility",
    category: "Management Systems",
    status: "LIVE DEMO",
    isLiveDemo: true,
    demoUrl: "https://timemangementsystem.onrender.com",
    liveUrl: "https://timemangementsystem.onrender.com",
    summary:
      "A web-based project time management solution designed to organize project activities, monitor progress, manage time allocation and support reporting.",
    challenge:
      "Managing distributed project deliverables, tracking hours across new, in-progress, and closed tasks, and calculating accurate time allocation reports.",
    solution:
      "Architected a responsive PHP & MySQL tracking engine with date-range filters, project status counters, and automated duration report generation.",
    results: [
      "Structured time-tracking across active, in-progress and closed projects",
      "Unified date-range reporting and total time allocation metrics",
      "Instant responsive dashboard with zero bloat",
    ],
    image: "/images/projects/time-management-cover.png",
    isAiArtwork: true,
    artworkNotice: "Illustrative conceptual cover artwork representing application features",
    tags: ["PHP", "MySQL", "Time Tracking", "Project Management", "Bootstrap"],
    platform: "Web",
    featured: true,
  },
  {
    id: "veterinary-appointment-system",
    num: "02",
    title: "Online Veterinary Appointment System",
    client: "Pet Care & Veterinary Clinic",
    category: "Management Systems",
    status: "LIVE DEMO",
    isLiveDemo: true,
    demoUrl: "https://multi-vendor-grocery-management-system.onrender.com",
    liveUrl: "https://multi-vendor-grocery-management-system.onrender.com",
    summary:
      "A multi-role veterinary clinic management platform designed to organize pet appointments, client records, vendor supplies, and central administration.",
    challenge:
      "Coordinating multi-tier role access between pet clients, veterinary service vendors, and clinic administrators with appointment slot reservation.",
    solution:
      "Built a modular PHP portal featuring dedicated Client, Vendor, and Admin login portals, appointment booking workflows, and pet care product catalogs.",
    results: [
      "Multi-role authentication for clients, vendors, and clinic administrators",
      "Automated appointment booking and schedule conflict prevention",
      "Integrated veterinary healthcare and supplies catalog",
    ],
    image: "/images/projects/veterinary-appointment-cover.png",
    isAiArtwork: true,
    artworkNotice: "Illustrative conceptual cover artwork representing application features",
    tags: ["PHP", "MySQL", "Clinic Management", "Multi-Role Portal", "Web App"],
    platform: "Web",
    featured: true,
  },
  {
    id: "survey-management-system",
    num: "03",
    title: "Survey Management System",
    client: "Feedback & Research Platform",
    category: "Web Applications",
    status: "LIVE DEMO",
    isLiveDemo: true,
    demoUrl: "https://surveymangementsystem.onrender.com",
    liveUrl: "https://surveymangementsystem.onrender.com",
    summary:
      "A centralized survey management platform designed to organize surveys, collect participant responses, and support structured feedback analysis.",
    challenge:
      "Capturing structured audience feedback with flexible form schemas, secure response collection, and administrator data export.",
    solution:
      "Engineered an online survey engine featuring dynamic questionnaire configuration, respondent data capture, and administrative analytical summaries.",
    results: [
      "Dynamic survey creation and question configuration",
      "Centralized response collection database with export capability",
      "Clean authentication flow for survey administrators",
    ],
    image: "/images/projects/survey-management-cover.png",
    isAiArtwork: true,
    artworkNotice: "Illustrative conceptual cover artwork representing application features",
    tags: ["PHP", "MySQL", "Survey Engine", "Form Builder", "Web App"],
    platform: "Web",
    featured: true,
  },
  {
    id: "college-website",
    num: "04",
    title: "College Institutional Website",
    client: "Higher Education Portal",
    category: "Education",
    status: "LIVE DEMO",
    isLiveDemo: true,
    demoUrl: "https://collage-website-hyu2.onrender.com",
    liveUrl: "https://collage-website-hyu2.onrender.com",
    summary:
      "A modern educational website experience designed to present institutional information, academic offerings, campus updates and essential student resources.",
    challenge:
      "Presenting academic programs, department news, faculty information, and prospective student admissions in an accessible, fast-loading portal.",
    solution:
      "Developed a clean educational web portal featuring structured academic program directories, campus updates, and direct admissions contact channels.",
    results: [
      "Accessible presentation of academic offerings and campus information",
      "Responsive layout tailored for prospective students on mobile & desktop",
      "Direct admissions contact and communication inquiries",
    ],
    image: "/images/projects/college-website-cover.png",
    isAiArtwork: true,
    artworkNotice: "Illustrative conceptual cover artwork representing application features",
    tags: ["Education", "PHP", "Responsive Web", "Campus Portal"],
    platform: "Web",
    featured: true,
  },
  {
    id: "borit",
    num: "05",
    title: "BORIT Industrial Engineering",
    client: "BORIT International",
    category: "Web Applications",
    status: "CLIENT PROJECT",
    summary:
      "Global corporate web platform and engineering showcase for an international manufacturing precision technology leader.",
    challenge:
      "Developing a high-performance, multi-lingual digital platform to present complex industrial engineering specifications to enterprise buyers worldwide.",
    solution:
      "Architected an ultra-fast, responsive web portal highlighting precision manufacturing, industrial certifications, and streamlined quotation inquiries.",
    results: [
      "Global client inquiries increased by 45%",
      "Sub-1.2s page load performance worldwide",
    ],
    image: "/assets/borit.jpg",
    liveUrl: "https://www.borit.com",
    tags: ["Enterprise Web", "Industrial", "Responsive UI", "Next.js"],
    platform: "Web",
    featured: true,
  },
  {
    id: "blush-and-bloom",
    num: "06",
    title: "Blush & Bloom Luxury Beauty",
    client: "Blush & Bloom Co.",
    category: "E-Commerce",
    status: "CLIENT PROJECT",
    summary:
      "Luxury organic cosmetics and skincare e-commerce storefront with streamlined mobile checkout and rich product storytelling.",
    challenge:
      "Balancing high-resolution cosmetic editorial photography with fast mobile checkout speeds and localized payment processing.",
    solution:
      "Delivered a luxury e-commerce experience with transparent ingredient showcases, customer beauty reviews, and one-click payment flows.",
    results: [
      "Checkout conversion rate increased by 38%",
      "Mobile PageSpeed score of 95+",
    ],
    image: "/assets/BlushOBloom.png",
    liveUrl: "https://blushandbloom.co.in",
    tags: ["E-Commerce", "Luxury Beauty", "Razorpay", "Mobile-First"],
    platform: "Web",
    featured: true,
  },
  {
    id: "aton-fitness",
    num: "07",
    title: "Aton Fitness Performance Club",
    client: "Aton Fitness",
    category: "Web Applications",
    status: "CLIENT PROJECT",
    summary:
      "High-energy athletic gym web portal featuring member onboarding, interactive class timetables, and trainer portfolios.",
    challenge:
      "Designing a visual interface embodying athletic energy that converted online visitors into gym trial bookings.",
    solution:
      "Engineered an impactful web portal with schedule filters, direct trainer booking, and instant WhatsApp membership inquiries.",
    results: [
      "Membership trial requests doubled in 3 months",
      "Over 60% of members access class schedules on mobile",
    ],
    image: "/assets/atonfitness.in_.png",
    liveUrl: "https://atonfitness.in",
    tags: ["Fitness", "Dynamic UI", "Lead Generation", "Booking System"],
    platform: "Web",
  },
  {
    id: "readmore",
    num: "08",
    title: "ReadMore E-Reader & Audio Books",
    client: "ReadMore Media",
    category: "Mobile Application",
    status: "CLIENT PROJECT",
    summary:
      "Native iOS reading and audiobook listening application with personalized typography, dark mode, and offline synchronization.",
    challenge:
      "Handling large offline digital libraries, synchronized audio narration, and smooth page transitions with zero battery drain.",
    solution:
      "Engineered a native Swift iOS app leveraging CoreData for local caching and high-efficiency background audio streaming.",
    results: [
      "4.8/5 rating on Apple App Store",
      "Over 100,000 active reading hours recorded",
    ],
    image: "/assets/ReadMore.jpg",
    tags: ["iOS Native", "Swift", "CoreData", "Audiobook Engine"],
    platform: "iOS",
  },
  {
    id: "dbt-24-7",
    num: "09",
    title: "DBT 24/7 Digital Banking & Transfers",
    client: "DBT Financial Services",
    category: "Mobile Application",
    status: "CLIENT PROJECT",
    summary:
      "Secure iOS mobile banking and direct-benefit transaction management application with biometric authentication.",
    challenge:
      "Strict regulatory compliance, bank-grade encryption, and real-time transaction reconciliation round the clock.",
    solution:
      "Built a hardened iOS application with FaceID/TouchID security, end-to-end encrypted payloads, and real-time push transaction alerts.",
    results: [
      "Zero security incidents across processed transfers",
      "Average transaction time under 3 seconds",
    ],
    image: "/assets/DBT247.png",
    tags: ["Fintech", "iOS", "Biometrics", "High Security"],
    platform: "iOS",
    featured: true,
  },
  {
    id: "beauty-counter",
    num: "10",
    title: "Beauty Counter On-Demand Salon App",
    client: "Beauty Counter Services",
    category: "Mobile Application",
    status: "CLIENT PROJECT",
    summary:
      "On-demand personal grooming and salon booking app connecting verified stylists with clients in real-time.",
    challenge:
      "Real-time GPS dispatching, schedule conflict resolution, and dynamic pricing based on stylist tier and client location.",
    solution:
      "Built a dual-interface iOS mobile app (customer app + stylist app) with integrated scheduling calendar and secure payment escrow.",
    results: [
      "Processed over 15,000 on-demand appointments",
      "Average user booking completed in under 60 seconds",
    ],
    image: "/assets/Beautycounter.png",
    tags: ["On-Demand", "iOS App", "Geolocation", "Booking System"],
    platform: "iOS",
  },
  {
    id: "eduvacancy",
    num: "11",
    title: "Eduvacancy - Educator Recruitment",
    client: "Eduvacancy Network",
    category: "Education",
    status: "CLIENT PROJECT",
    summary:
      "Pan-India educator job marketplace and recruitment app connecting schools and colleges with verified teachers.",
    challenge:
      "Connecting thousands of schools with qualified teachers across diverse subjects, locations, and salary brackets.",
    solution:
      "Engineered an Android mobile app with resume parsing, video introduction uploads, instant school interview scheduling, and salary matching.",
    results: [
      "Over 50,000 registered teachers across India",
      "Reduced school hiring cycles from 45 to 12 days",
    ],
    image: "/assets/Android-App-Eduvacancy.png",
    tags: ["Android", "EdTech", "Job Portal", "Kotlin"],
    platform: "Android",
  },
  {
    id: "honeylia-emart",
    num: "12",
    title: "HoneyliaEmart Hyperlocal Grocery",
    client: "Honeylia Retail",
    category: "E-Commerce",
    status: "CLIENT PROJECT",
    summary:
      "High-speed hyperlocal grocery and household goods delivery application with real-time delivery rider tracking.",
    challenge:
      "Handling thousands of inventory SKUs with variable weight pricing, quick dispatch logic, and live rider routing.",
    solution:
      "Built an Android e-commerce application with barcode inventory sync, instant cart calculations, and live GPS rider tracking.",
    results: [
      "99.4% on-time delivery rate under 30 minutes",
      "Over 20,000 monthly orders fulfilled smoothly",
    ],
    image: "/assets/HoneyliaEmart.png",
    tags: ["Android", "Hyperlocal", "Live GPS", "Quick Commerce"],
    platform: "Android",
  },
  {
    id: "jobberman",
    num: "13",
    title: "Jobberman Career & Talent Hub",
    client: "Jobberman Group",
    category: "Web Applications",
    status: "CLIENT PROJECT",
    summary:
      "High-scale recruitment, career development, and candidate assessment digital platform serving enterprise employers.",
    challenge:
      "Massive traffic concurrency, automated candidate matching algorithms, and enterprise HR applicant tracking system (ATS) integrations.",
    solution:
      "Optimized front-end components, candidate assessment flows, and responsive employer dashboards to support high-throughput candidate submissions.",
    results: [
      "Handles millions of monthly pageviews seamlessly",
      "Employer candidate shortlisting time cut by half",
    ],
    image: "/assets/JObberman.jpg",
    liveUrl: "https://www.jobberman.com",
    tags: ["Enterprise Web", "Recruitment", "High Scale", "Job Board"],
    platform: "Web",
    featured: true,
  },
  {
    id: "stavanger-parkering",
    num: "14",
    title: "Stavanger Parkering Smart Mobility",
    client: "Stavanger Municipality Mobility",
    category: "Enterprise Solution",
    status: "CLIENT PROJECT",
    summary:
      "Municipal smart parking management system providing real-time sensor occupancy updates, digital permits, and ticket validation.",
    challenge:
      "Integrating disparate IoT parking sensors across urban parking garages and providing public drivers with real-time slot availability.",
    solution:
      "Constructed a high-reliability municipal portal with live parking slot visualization and automated license plate recognition (ALPR) support.",
    results: [
      "Urban parking congestion reduced by 22% in peak hours",
      "99.98% platform uptime for transit commuters",
    ],
    image: "/assets/StavangerParkering.jpg",
    tags: ["Smart City", "IoT Integration", "Mobility", "Enterprise"],
    platform: "Cross-Platform",
  },
  {
    id: "dc-shoes",
    num: "15",
    title: "DC Shoes Global Digital Catalog",
    client: "DC Shoes Distribution",
    category: "E-Commerce",
    status: "DEMO PROJECT",
    summary:
      "High-impact digital footwear showcase and brand storytelling experience celebrating action sports culture.",
    challenge:
      "Designing a brand-aligned, high-energy product catalog reflecting action sports culture while preserving fast load times.",
    solution:
      "Engineered an interactive product catalog with high-fidelity asset rendering, interactive 360 spin views, and localized retailer directory lookups.",
    results: [
      "Product showcase dwell time increased by 65%",
      "Interactive 3D model render pipeline",
    ],
    image: "/assets/DC-Shoes.png",
    tags: ["Footwear", "Brand Catalog", "High-Impact UI", "Interactive"],
    platform: "Web",
  },
  {
    id: "pikto",
    num: "16",
    title: "Pikto Visual Design & Media Platform",
    client: "Pikto Inc.",
    category: "Web Applications",
    status: "CLIENT PROJECT",
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
    tags: ["Media Platform", "Asset Management", "Search Engine", "Web App"],
    platform: "Web",
  },
];
