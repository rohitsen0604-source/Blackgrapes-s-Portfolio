"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  Target,
  Zap,
  Quote,
  X,
  Send,
  Layers,
  Cpu,
  Globe,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import {
  COMPANY_DETAILS,
  SERVICES,
  PROJECTS,
  ServiceItem,
  ProjectItem,
} from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export default function SinglePagePortfolio() {
  // Projects filtering state
  const [activeProjectCategory, setActiveProjectCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Services modal state
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Contact Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Software Development",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const projectCategories = [
    "All",
    "Web Development",
    "Mobile Application",
    "E-Commerce",
    "Enterprise Solution",
  ];

  const filteredProjects =
    activeProjectCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeProjectCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 800);
  };

  const getFormWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Black Grapes Softech Team!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nService: ${formData.service}\nRequirement: ${formData.message}`
    );
    return `https://wa.me/${COMPANY_DETAILS.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="relative overflow-hidden bg-obsidian text-soft-white">
      {/* =========================================================================
          SECTION 1: HOME (HERO)
         ========================================================================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-rich/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-grape/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-electric/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-electric/30 mb-8 shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-electric"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-soft-white">
              Enterprise Software &amp; Digital Platforms
            </span>
            <span className="text-xs bg-purple-rich/50 text-purple-electric px-2.5 py-0.5 rounded-full font-medium hidden sm:inline">
              Indore &bull; Global Delivery
            </span>
          </motion.div>

          {/* Master Tagline Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-soft-white mb-6"
          >
            Innovate. <span className="text-gradient">Integrate.</span> Elevate.
          </motion.h1>

          {/* Supporting Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-purple-accent/90 max-w-4xl mx-auto mb-6"
          >
            {COMPANY_DETAILS.subTagline}
          </motion.h2>

          {/* Short Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-muted-grey max-w-3xl mx-auto leading-relaxed mb-10"
          >
            {COMPANY_DETAILS.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-soft-white bg-gradient-to-r from-purple-rich via-purple-electric to-purple-rich bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-xl shadow-purple-900/50 hover:shadow-purple-electric/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-soft-white glass-panel border border-purple-electric/30 hover:border-purple-electric hover:bg-grape/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-medium text-purple-accent glass-panel border border-purple-electric/20 hover:border-purple-electric hover:bg-grape/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>View Client Projects</span>
            </a>
          </motion.div>

          {/* Stats Cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {COMPANY_DETAILS.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel border border-purple-electric/20 hover:border-purple-electric/40 transition-all duration-300 text-left"
              >
                <div className="text-2xl sm:text-4xl font-extrabold text-soft-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-grey mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT
         ========================================================================= */}
      <section id="about" className="py-24 relative overflow-hidden bg-obsidian-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Company Overview &amp; Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
              About <span className="text-gradient">Black Grapes Softech</span>
            </h2>
            <p className="text-muted-grey text-base sm:text-lg mt-4 leading-relaxed">
              {COMPANY_DETAILS.aboutText}
            </p>
          </div>

          {/* Vision & Mission Split Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-br from-grape/30 to-obsidian-200">
              <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric mb-6 border border-purple-electric/40">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-soft-white mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
                {COMPANY_DETAILS.vision}
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-br from-grape/30 to-obsidian-200">
              <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric mb-6 border border-purple-electric/40">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-soft-white mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
                {COMPANY_DETAILS.mission}
              </p>
            </div>
          </div>

          {/* Founders Spotlight (Arpit Jain & Deepika Jain) */}
          <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/30 shadow-2xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Authentic Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden border border-purple-electric/40 shadow-xl">
                  <Image
                    src="/assets/the-founders.jpeg"
                    alt="Mr. Arpit Jain and Mrs. Deepika Jain - Founders of Black Grapes Softech"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[11px] font-bold text-purple-electric uppercase tracking-wider block mb-1">
                      Founding Leadership
                    </span>
                    <h4 className="text-lg font-bold text-soft-white">
                      Mr. Arpit Jain &amp; Mrs. Deepika Jain
                    </h4>
                    <span className="text-xs text-muted-grey">
                      Black Grapes Softech, Indore
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-purple-electric font-bold">
                  <Quote className="w-4 h-4" />
                  Executive Leadership
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-soft-white">
                  Meet the Founders
                </h3>
                <p className="text-sm sm:text-base text-muted-grey leading-relaxed italic">
                  &ldquo;Behind Black Grapes Softech stand two visionary leaders with an unquenchable passion for innovation. Meet our founder, Arpit Jain, the driving force behind our software development journey. With a wealth of experience and a knack for staying ahead of the curve, he has pioneered cutting-edge solutions that have redefined the industry. Deepika Jain doesn&apos;t just see challenges; she envisions opportunities. Her boundless creativity has shaped our company&apos;s culture of relentless innovation.&rdquo;
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-obsidian-100 border border-purple-electric/20">
                    <h5 className="font-bold text-soft-white text-base">Mr. Arpit Jain</h5>
                    <div className="text-xs text-purple-electric font-semibold">Founder &amp; Technical Director</div>
                    <p className="text-xs text-muted-grey mt-2 leading-relaxed">
                      Leads software architecture, technical governance, and high-performance engineering standards.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-obsidian-100 border border-purple-electric/20">
                    <h5 className="font-bold text-soft-white text-base">Mrs. Deepika Jain</h5>
                    <div className="text-xs text-purple-electric font-semibold">Co-Founder &amp; Creative Director</div>
                    <p className="text-xs text-muted-grey mt-2 leading-relaxed">
                      Shapes product design vision, client relationships, and organizational development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Trust Strip */}
          <div className="text-center">
            <span className="text-xs uppercase tracking-wider text-muted-light font-semibold block mb-4">
              Trusted by 35+ Enterprise Partners Worldwide
            </span>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
              {COMPANY_DETAILS.verifiedClients.slice(0, 14).map((client, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl glass-panel text-xs font-semibold text-muted-light border border-purple-electric/15"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SERVICES
         ========================================================================= */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-rich/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
              <Layers className="w-3.5 h-3.5" />
              Verified Enterprise Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
              Our Core <span className="text-gradient">Services Portfolio</span>
            </h2>
            <p className="text-muted-grey text-base sm:text-lg mt-4 leading-relaxed">
              Preserving Black Grapes Softech&apos;s genuine service catalog with modern architecture, secure frameworks, and scalable cloud deployment.
            </p>
          </div>

          {/* 11 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/70 hover:-translate-y-1"
              >
                <div>
                  {/* Visual Header Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-obsidian-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                    
                    {/* Category */}
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-obsidian-950/80 text-purple-electric border border-purple-electric/30 backdrop-blur-md">
                      {service.category}
                    </span>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-purple-rich/80 backdrop-blur-md border border-purple-electric/40 flex items-center justify-center text-soft-white shadow-lg">
                      <DynamicIcon name={service.icon} className="w-5 h-5 text-soft-white" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-soft-white group-hover:text-purple-electric transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-grey mt-2.5 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Feature Bullets */}
                    <div className="mt-4 pt-4 border-t border-purple-900/30 space-y-2">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-muted-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-electric shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-grape/60 text-muted-light border border-purple-electric/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action: Interactive Details Modal */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 rounded-xl glass-panel border border-purple-electric/25 group-hover:border-purple-electric group-hover:bg-purple-rich/20 text-xs font-semibold text-soft-white flex items-center justify-center gap-2 transition-all"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-electric group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PROJECTS
         ========================================================================= */}
      <section id="projects" className="py-24 relative overflow-hidden bg-obsidian-200/40">
        {/* Ambient glow */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-rich/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Verified Client Showcase
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
                Featured Client <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-muted-grey text-base mt-2 max-w-xl">
                Authentic projects identified from the company reference, clearly distinguished with completed client badges and verified technology stacks.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeProjectCategory === cat
                      ? "bg-purple-electric text-obsidian shadow-lg shadow-purple-electric/30 font-bold"
                      : "glass-panel text-muted-light hover:text-soft-white hover:border-purple-electric/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/70 hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-obsidian-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

                    {/* Platform Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-obsidian-950/85 backdrop-blur-md text-soft-white border border-purple-electric/30">
                      {project.platform === "Web" ? (
                        <Globe className="w-3.5 h-3.5 text-purple-electric" />
                      ) : (
                        <Smartphone className="w-3.5 h-3.5 text-purple-electric" />
                      )}
                      <span>{project.platform}</span>
                    </div>

                    {/* Prominent Verification Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-950/80 text-green-300 border border-green-500/40 backdrop-blur-md">
                      <ShieldCheck className="w-3 h-3 text-green-400" />
                      <span>{project.type}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <div className="text-xs font-semibold text-purple-electric uppercase tracking-wider mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-soft-white group-hover:text-purple-electric transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-grey mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-grape/60 text-muted-light border border-purple-electric/20 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 rounded-xl glass-panel border border-purple-electric/25 group-hover:border-purple-electric group-hover:bg-purple-rich/20 text-xs font-semibold text-soft-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-electric" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl glass-panel border border-purple-electric/25 hover:border-purple-electric hover:bg-grape/50 text-muted-light hover:text-soft-white transition-colors"
                      title={`Visit ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONTACT
         ========================================================================= */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-purple-rich/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Official Contact Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Get In Touch
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight leading-tight">
                  Start Your <span className="text-gradient">Next Project</span>
                </h2>
                <p className="text-muted-grey text-base mt-4 leading-relaxed">
                  Connect directly with our software directors in Indore. We analyze your requirements and provide an architectural roadmap, cost projection, and timeline.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                {/* WhatsApp Quick Discussion */}
                <a
                  href={COMPANY_DETAILS.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl glass-panel border border-green-500/30 hover:border-green-500/60 bg-green-950/20 flex items-center gap-4 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-900/50 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-soft-white group-hover:text-green-300 transition-colors">
                      Chat Directly on WhatsApp
                    </div>
                    <div className="text-xs text-green-400/80 mt-0.5">
                      +91 7470997884 &bull; Instant Response
                    </div>
                  </div>
                </a>

                {/* Direct Phone Numbers */}
                <div className="p-5 rounded-2xl glass-panel border border-purple-electric/20 space-y-2">
                  <div className="flex items-center gap-3 text-soft-white text-sm font-bold">
                    <Phone className="w-4 h-4 text-purple-electric" />
                    <span>Official Call Lines</span>
                  </div>
                  <div className="pl-7 flex flex-wrap gap-4 text-xs font-medium">
                    <a
                      href={`tel:${COMPANY_DETAILS.contact.phone1}`}
                      className="text-muted-light hover:text-purple-electric transition-colors"
                    >
                      {COMPANY_DETAILS.contact.phone1}
                    </a>
                    <span className="text-muted-dark">|</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.contact.phone2}`}
                      className="text-muted-light hover:text-purple-electric transition-colors"
                    >
                      {COMPANY_DETAILS.contact.phone2}
                    </a>
                  </div>
                </div>

                {/* Official Emails */}
                <div className="p-5 rounded-2xl glass-panel border border-purple-electric/20 space-y-2">
                  <div className="flex items-center gap-3 text-soft-white text-sm font-bold">
                    <Mail className="w-4 h-4 text-purple-electric" />
                    <span>Official Email Addresses</span>
                  </div>
                  <div className="pl-7 flex flex-col gap-1.5 text-xs">
                    <a
                      href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`}
                      className="text-muted-light hover:text-purple-electric transition-colors font-medium"
                    >
                      {COMPANY_DETAILS.contact.primaryEmail}
                    </a>
                    <a
                      href={`mailto:${COMPANY_DETAILS.contact.directorEmail}`}
                      className="text-muted-grey hover:text-purple-electric transition-colors"
                    >
                      {COMPANY_DETAILS.contact.directorEmail} (Director)
                    </a>
                    <a
                      href={`mailto:${COMPANY_DETAILS.contact.managementEmail}`}
                      className="text-muted-grey hover:text-purple-electric transition-colors"
                    >
                      {COMPANY_DETAILS.contact.managementEmail} (Management)
                    </a>
                  </div>
                </div>

                {/* Indore Physical Location */}
                <div className="p-5 rounded-2xl glass-panel border border-purple-electric/20 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-electric shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-soft-white">
                      Corporate Headquarters
                    </div>
                    <p className="text-xs text-muted-grey mt-1 leading-relaxed">
                      {COMPANY_DETAILS.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Working Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/30 shadow-2xl relative">
                <h3 className="text-2xl font-bold text-soft-white mb-2">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-muted-grey mb-8">
                  Fill in your details below and our team will get in touch with you within 24 hours.
                </p>

                {formStatus === "success" ? (
                  <div className="p-8 rounded-2xl bg-grape/40 border border-purple-electric/50 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto border border-green-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-soft-white">
                      Inquiry Received!
                    </h4>
                    <p className="text-sm text-muted-light max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Our directors at Black Grapes Softech will review your inquiry for <strong>{formData.service}</strong> and respond shortly.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getFormWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-xs flex items-center gap-2 hover:bg-green-500 transition-colors shadow-lg"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Continue via WhatsApp</span>
                      </a>
                      <button
                        onClick={() => {
                          setFormStatus("idle");
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            service: "Software Development",
                            message: "",
                          });
                        }}
                        className="px-5 py-3 rounded-xl glass-panel text-xs text-soft-white hover:bg-grape/60 transition-colors"
                      >
                        Submit Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rohit Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white placeholder-muted-dark outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rohit@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white placeholder-muted-dark outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white placeholder-muted-dark outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white outline-none transition-all"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title} className="bg-obsidian-950 text-soft-white">
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                        Project Description *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project requirements, expected timeline, and goals..."
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white placeholder-muted-dark outline-none transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-soft-white bg-gradient-to-r from-purple-rich to-purple-electric hover:from-purple-electric hover:to-purple-rich transition-all duration-300 shadow-xl shadow-purple-900/40 flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {formStatus === "submitting" ? (
                          <span>Sending Inquiry...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <a
                        href={COMPANY_DETAILS.contact.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-4 rounded-xl glass-panel border border-green-500/30 text-green-400 hover:bg-green-950/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Or WhatsApp Directly</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE PROJECT CASE STUDY MODAL (QUICK-VIEW)
         ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-purple-electric/40 bg-obsidian-950 p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-grape/60 text-muted-light hover:text-soft-white hover:bg-purple-rich transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-6 border border-purple-electric/25">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-green-950/80 text-green-300 border border-green-500/40 backdrop-blur-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                  <span>{selectedProject.type}</span>
                </div>
              </div>

              <div className="text-xs uppercase tracking-wider text-purple-electric font-bold mb-1">
                {selectedProject.category} &bull; Client: {selectedProject.client}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-soft-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-muted-grey mb-6 leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-obsidian-100 border border-purple-electric/20 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-electric">
                    The Challenge
                  </div>
                  <p className="text-xs text-muted-grey leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-100 border border-purple-electric/20 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-electric">
                    The Solution
                  </div>
                  <p className="text-xs text-muted-grey leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-electric mb-2">
                  Key Results &amp; Impact
                </div>
                <div className="space-y-1.5">
                  {selectedProject.results.map((r, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-xs text-muted-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-electric shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-purple-900/40">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-grape/80 text-xs text-purple-accent border border-purple-electric/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold flex items-center gap-2"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          INTERACTIVE SERVICE DETAILS MODAL
         ========================================================================= */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-purple-electric/40 bg-obsidian-950 p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-grape/60 text-muted-light hover:text-soft-white hover:bg-purple-rich transition-colors"
                aria-label="Close Service Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40">
                  <DynamicIcon name={selectedService.icon} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-purple-electric font-bold">
                    {selectedService.category} Division
                  </span>
                  <h3 className="text-2xl font-bold text-soft-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-muted-grey leading-relaxed mb-6">
                {selectedService.shortDesc}
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-electric">
                  Core Architectural Capabilities
                </div>
                <div className="space-y-2">
                  {selectedService.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-light">
                      <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-electric mb-2">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-grape text-xs font-semibold text-soft-white border border-purple-electric/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedService(null);
                    setFormData({ ...formData, service: selectedService.title });
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold flex items-center gap-2"
                >
                  <span>Inquire for {selectedService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xs text-muted-grey hover:text-soft-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
