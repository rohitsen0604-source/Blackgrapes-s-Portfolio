"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Database, Smartphone, Cloud, Palette, Terminal, Sparkles } from "lucide-react";

interface TechGroup {
  id: string;
  name: string;
  icon: React.ReactNode;
  technologies: {
    name: string;
    description: string;
    level: string;
  }[];
}

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const techGroups: TechGroup[] = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layers className="w-4 h-4" />,
      technologies: [
        { name: "React.js", description: "Modern component-based client applications", level: "Production Master" },
        { name: "Next.js", description: "SSR, SSG & Server Components web architecture", level: "Core Architecture" },
        { name: "TypeScript", description: "Strict type-safe enterprise codebases", level: "Standard Default" },
        { name: "Tailwind CSS", description: "Utility-first design systems and micro-animations", level: "Design System" },
        { name: "Vue.js", description: "Progressive reactive web interfaces", level: "Supported" },
        { name: "Framer Motion / GSAP", description: "High-performance editorial motion design", level: "Interactive" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Terminal className="w-4 h-4" />,
      technologies: [
        { name: "Node.js", description: "High-concurrency microservices and APIs", level: "Core Architecture" },
        { name: "Python / Django", description: "Scalable data processing and secure backends", level: "Enterprise" },
        { name: "PHP / Laravel", description: "Rapid web applications, MLM engines & ERPs", level: "Battle-Tested" },
        { name: "Express.js", description: "Lightweight high-speed RESTful services", level: "Production" },
        { name: "Java / Spring Boot", description: "Enterprise transaction systems", level: "Enterprise" },
        { name: "GraphQL & REST", description: "Optimized network contract architectures", level: "Standard" },
      ],
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: <Smartphone className="w-4 h-4" />,
      technologies: [
        { name: "Flutter", description: "Cross-platform mobile apps for iOS & Android", level: "Core Framework" },
        { name: "React Native", description: "Native-performance JavaScript mobile apps", level: "Core Framework" },
        { name: "Swift / SwiftUI", description: "Native iOS applications for App Store", level: "Native iOS" },
        { name: "Kotlin / Jetpack", description: "Native Android apps for Google Play Store", level: "Native Android" },
        { name: "Firebase", description: "Push notifications, real-time sync & auth", level: "Mobile Cloud" },
      ],
    },
    {
      id: "database",
      name: "Databases",
      icon: <Database className="w-4 h-4" />,
      technologies: [
        { name: "PostgreSQL", description: "ACID-compliant relational enterprise store", level: "Primary DB" },
        { name: "MySQL / MariaDB", description: "High-reliability relational data management", level: "Core DB" },
        { name: "MongoDB", description: "Flexible document-based storage for quick scale", level: "NoSQL" },
        { name: "Redis", description: "In-memory caching and high-speed job queues", level: "Cache & Queue" },
        { name: "Supabase", description: "Postgres backend with real-time webhooks", level: "Modern Stack" },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <Cloud className="w-4 h-4" />,
      technologies: [
        { name: "Amazon Web Services (AWS)", description: "EC2, S3, RDS, Lambda serverless infrastructure", level: "Enterprise Cloud" },
        { name: "Docker & Containers", description: "Reproducible containerized application environments", level: "DevOps Standard" },
        { name: "CI / CD Pipelines", description: "Automated testing, linting and zero-downtime deployment", level: "Continuous Delivery" },
        { name: "Nginx & Reverse Proxies", description: "Load balancing, SSL termination & rate limiting", level: "Infrastructure" },
        { name: "Vercel & Netlify", description: "Global edge network hosting for modern frontends", level: "Edge Hosting" },
      ],
    },
    {
      id: "design",
      name: "Design & UI",
      icon: <Palette className="w-4 h-4" />,
      technologies: [
        { name: "Figma", description: "High-fidelity UI/UX design & collaborative prototypes", level: "Primary Tool" },
        { name: "Adobe Illustrator", description: "Vector identity, logo marks & typography systems", level: "Brand Assets" },
        { name: "Adobe Photoshop", description: "Visual editing, compositing & asset optimization", level: "Asset Creative" },
        { name: "Design Tokens & Systems", description: "Scalable component libraries and style guides", level: "Methodology" },
      ],
    },
  ];

  const currentGroup = techGroups.find((g) => g.id === activeTab) || techGroups[0];

  return (
    <section className="py-24 relative overflow-hidden bg-obsidian-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Verified Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
            Our Technology <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-muted-grey text-base sm:text-lg mt-4 leading-relaxed">
            Battle-tested frameworks, modern languages, and cloud architectures chosen for enterprise stability, speed, and maintainability.
          </p>

          {/* Group Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {techGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === group.id
                    ? "bg-purple-electric text-obsidian shadow-lg shadow-purple-electric/30 font-bold"
                    : "glass-panel text-muted-light hover:text-soft-white hover:border-purple-electric/40"
                }`}
              >
                {group.icon}
                <span>{group.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tech Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentGroup.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/60 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-soft-white group-hover:text-purple-electric transition-colors">
                  {tech.name}
                </h4>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-grape/80 text-purple-accent border border-purple-electric/30">
                  {tech.level}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
