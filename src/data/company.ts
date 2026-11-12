export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: "Engineering" | "Design" | "Growth" | "Consulting";
  icon: string;
  image: string;
  features: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "Web Development" | "Mobile Application" | "E-Commerce" | "Enterprise Solution";
  type: "Completed Client Project" | "Concept Demonstration";
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  liveUrl?: string;
  tags: string[];
  platform: "Web" | "iOS" | "Android" | "Cross-Platform";
}

export const COMPANY_DETAILS = {
  name: "Black Grapes Softech",
  tagline: "Innovate. Integrate. Elevate.",
  subTagline: "Transforming Ideas Into Powerful Digital Experiences.",
  description:
    "From custom software and digital platforms to intelligent applications, Black Grapes Softech helps businesses transform ideas into scalable digital solutions.",
  aboutText:
    "Black Grapes Softech is an enterprise software development company based in Indore, India. With over 12 years of software engineering leadership, we design, develop, and deploy bespoke applications for startups, growing enterprises, and public-sector initiatives worldwide.",
  mission:
    "To provide exceptional software development services tailored to our clients' unique needs. We are dedicated to delivering cutting-edge, reliable digital solutions while fostering a culture of collaboration, growth, and continuous innovation.",
  vision:
    "To lead the way in software development, using innovation and creativity to shape the future of technology. We envision a world where every software solution we create empowers individuals, businesses, and communities to thrive.",
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
    { label: "Completed Projects", value: "250+" },
    { label: "Global Clients", value: "35+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years Experience", value: "12+" },
  ],
  founders: [
    {
      name: "Mr. Arpit Jain",
      role: "Founder & Technical Director",
      bio: "The driving technical force behind Black Grapes Softech. With deep expertise across full-cycle software architecture and agile methodologies, Arpit leads client engineering with high standards of performance and code quality.",
    },
    {
      name: "Mrs. Deepika Jain",
      role: "Co-Founder & Creative Director",
      bio: "Shapes creative vision, user experience standards, and operational growth. Deepika transforms complex operational challenges into intuitive digital products and enduring client relationships.",
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

// 11 Actual Services Required by the Master Specification
export const SERVICES: ServiceItem[] = [
  {
    id: "software-development",
    title: "Software Development",
    shortDesc:
      "Custom enterprise software, real estate management ERPs, restaurant operating systems, and automated workflow engines tailored to your business rules.",
    category: "Engineering",
    icon: "Code2",
    image: "/assets/Software.jpg",
    features: [
      "Custom Enterprise Software Architectures",
      "Real Estate & Brokerage Management ERP",
      "College & University Campus Management",
      "Role-Based Access Control & Secure DB",
    ],
    technologies: ["Node.js", "Python / Django", "TypeScript", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "website-design-development",
    title: "Website Design & Development",
    shortDesc:
      "Modern, ultra-fast, and SEO-optimized corporate web applications built with Next.js, React, and high-performance frontend frameworks.",
    category: "Engineering",
    icon: "Globe",
    image: "/assets/Website-Designing.jpg",
    features: [
      "Next.js & React Component Architectures",
      "Pixel-Perfect Mobile-First Responsive UI",
      "Technical SEO & Core Web Vitals Optimization",
      "Editorial Micro-Animations with Framer Motion",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc:
      "Native iOS, Android, and cross-platform Flutter/React Native mobile applications with smooth gesture controls and real-time synchronization.",
    category: "Engineering",
    icon: "Smartphone",
    image: "/assets/app.jpg",
    features: [
      "Native iOS (Swift & SwiftUI) Applications",
      "Native Android (Kotlin & Jetpack) Development",
      "Cross-Platform Apps with Flutter & React Native",
      "Push Notifications & In-App Payment Gateways",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "crm-software-development",
    title: "CRM Software Development",
    shortDesc:
      "Tailored Customer Relationship Management software that automates lead routing, client communication pipelines, and sales conversion analytics.",
    category: "Engineering",
    icon: "Users2",
    image: "/assets/crm-1.png",
    features: [
      "Lead Capture & Automated Scoring Funnels",
      "Multi-Channel Email & Telephony Integration",
      "Real-Time Sales Performance Dashboards",
      "Automated Quotation & Invoicing Workflows",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "SendGrid"],
  },
  {
    id: "mlm-software-development",
    title: "MLM Software Development",
    shortDesc:
      "Battle-tested Multi-Level Marketing software featuring automated commission engines, real-time genealogic trees, member e-wallets, and E-Pins.",
    category: "Engineering",
    icon: "Network",
    image: "/assets/mlm-software.png",
    features: [
      "Binary, Matrix, Unilevel & Generation Compensation",
      "Interactive Real-Time Genealogic Visual Tree",
      "E-Wallet System & Automated Payout Calculations",
      "E-Pin Generation & Member Pin Transfer Portals",
    ],
    technologies: ["PHP / Laravel", "Node.js", "MySQL", "Redis Queue"],
  },
  {
    id: "game-development",
    title: "Game Development",
    shortDesc:
      "Immersive 2D and 3D interactive mobile and web games with fluid physics mechanics, particle animations, and multiplayer networking.",
    category: "Engineering",
    icon: "Gamepad2",
    image: "/assets/Game-Development.jpg",
    features: [
      "2D & 3D Interactive Game Architecture",
      "Cross-Platform Mobile & WebGL Deployment",
      "Multiplayer Networking & Real-Time Sync",
      "In-App Purchases & Rewarded Monetization",
    ],
    technologies: ["Unity", "Unreal Engine", "C#", "WebGL", "Blender"],
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    shortDesc:
      "Corporate brand identity, vector logos, marketing collateral, pitch decks, and Figma UI/UX component design systems.",
    category: "Design",
    icon: "Palette",
    image: "/assets/Graphic-Design-Black-Grapes-Softech.jpg",
    features: [
      "Complete Brand Identity Guidelines & Logos",
      "Figma UI/UX Prototypes & Wireframes",
      "Marketing Collateral & Presentation Decks",
      "Product Packaging & Vector Illustrations",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDesc:
      "Data-driven search engine optimization (SEO), Google Ads, meta performance marketing, and conversion rate optimization campaigns.",
    category: "Growth",
    icon: "TrendingUp",
    image: "/assets/digital-marketing.jpg",
    features: [
      "Technical On-Page & Off-Page SEO",
      "Google Ads (Search & Performance Max)",
      "Social Media Marketing & Content Strategy",
      "Conversion Rate Optimization (CRO)",
    ],
    technologies: ["Google Analytics 4", "Search Console", "Meta Ads", "SEMrush"],
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    shortDesc:
      "High-converting single-store and multi-vendor online marketplaces with seamless payment gateways, automated inventory, and fast checkout.",
    category: "Engineering",
    icon: "ShoppingBag",
    image: "/assets/your-businesses.jpeg",
    features: [
      "Custom Headless E-Commerce Storefronts",
      "Multi-Vendor Marketplace Infrastructure",
      "Multiple Payment Gateways (Stripe, Razorpay, COD)",
      "Automated Shipping Logistics & Order Tracking",
    ],
    technologies: ["Next.js", "Shopify Storefront", "Node.js", "Razorpay"],
  },
  {
    id: "it-staffing",
    title: "IT Staffing Solutions",
    shortDesc:
      "Talent augmentation and dedicated software developers to scale your engineering team quickly without recruitment overhead.",
    category: "Consulting",
    icon: "UserCheck",
    image: "/assets/about-3.png",
    features: [
      "Dedicated Full-Time Developers (Next.js, Node, Flutter)",
      "Team Augmentation with 48-Hour Onboarding",
      "Direct Slack/Teams Integration & Daily Standups",
      "Flexible Monthly Scale-Up or Scale-Down",
    ],
    technologies: ["React", "Node.js", "Flutter", "QA Automation", "DevOps"],
  },
  {
    id: "tender-services",
    title: "Government & Private Tender Services",
    shortDesc:
      "Comprehensive tender identification, technical proposal drafting, documentation compliance, and bid management for public and commercial bids.",
    category: "Consulting",
    icon: "FileText",
    image: "/assets/Security-1.jpg",
    features: [
      "Tender Identification on GeM & CPP Portals",
      "Technical Proposal & BOQ Documentation",
      "Eligibility & EMD Compliance Verification",
      "Private Commercial RFP/RFQ Bidding Advisory",
    ],
    technologies: ["GeM Portal", "CPP Portal", "RFP Analysis", "Compliance"],
  },
];

// Verified Actual Projects from Official Reference
export const PROJECTS: ProjectItem[] = [
  {
    id: "borit",
    title: "BORIT Industrial Engineering",
    client: "BORIT International",
    category: "Web Development",
    type: "Completed Client Project",
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
  },
  {
    id: "blush-and-bloom",
    title: "Blush & Bloom Luxury Beauty",
    client: "Blush & Bloom Co.",
    category: "E-Commerce",
    type: "Completed Client Project",
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
  },
  {
    id: "aton-fitness",
    title: "Aton Fitness Performance Club",
    client: "Aton Fitness",
    category: "Web Development",
    type: "Completed Client Project",
    summary:
      "High-energy athletic gym web portal featuring member onboarding, interactive class timetables, and trainer portfolios.",
    challenge:
      "Designing a dark-themed visual interface embodying athletic energy that converted online visitors into gym trial bookings.",
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
    title: "ReadMore E-Reader & Audio Books",
    client: "ReadMore Media",
    category: "Mobile Application",
    type: "Completed Client Project",
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
    title: "DBT 24/7 Digital Banking & Transfers",
    client: "DBT Financial Services",
    category: "Mobile Application",
    type: "Completed Client Project",
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
  },
  {
    id: "beauty-counter",
    title: "Beauty Counter On-Demand Salon App",
    client: "Beauty Counter Services",
    category: "Mobile Application",
    type: "Completed Client Project",
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
    title: "Eduvacancy - Educator Recruitment",
    client: "Eduvacancy Network",
    category: "Mobile Application",
    type: "Completed Client Project",
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
    title: "HoneyliaEmart Hyperlocal Grocery",
    client: "Honeylia Retail",
    category: "Mobile Application",
    type: "Completed Client Project",
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
    title: "Jobberman Career & Talent Hub",
    client: "Jobberman Group",
    category: "Web Development",
    type: "Completed Client Project",
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
  },
  {
    id: "stavanger-parkering",
    title: "Stavanger Parkering Smart Mobility",
    client: "Stavanger Municipality Mobility",
    category: "Enterprise Solution",
    type: "Completed Client Project",
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
    title: "DC Shoes Global Digital Catalog",
    client: "DC Shoes Distribution",
    category: "E-Commerce",
    type: "Completed Client Project",
    summary:
      "High-impact digital footwear showcase and brand storytelling experience celebrating action sports culture.",
    challenge:
      "Designing a brand-aligned, high-energy product catalog reflecting skateboarding heritage while preserving fast load times.",
    solution:
      "Engineered an interactive product catalog with high-fidelity asset rendering, interactive 360 spin views, and localized retailer directory lookups.",
    results: [
      "Product showcase dwell time increased by 65%",
      "Store locator interactions surged by 80%",
    ],
    image: "/assets/DC-Shoes.png",
    tags: ["Footwear", "Brand Catalog", "High-Impact UI", "Interactive"],
    platform: "Web",
  },
  {
    id: "pikto",
    title: "Pikto Visual Design & Media Platform",
    client: "Pikto Inc.",
    category: "Web Development",
    type: "Completed Client Project",
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
