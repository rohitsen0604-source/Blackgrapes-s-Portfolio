"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  Target,
  Zap,
  X,
  Send,
  ChevronRight,
  Award,
  Layers,
  Sparkles,
  Code2,
} from "lucide-react";
import {
  COMPANY_DETAILS,
  SERVICES,
  PROJECTS,
  LIVE_DEMOS,
  ServiceItem,
  ProjectItem,
  LiveDemoItem,
} from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export default function ModernBrutalistPortfolio() {
  // Projects filtering state
  const [activeProjectCategory, setActiveProjectCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Services modal state
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Keyboard accessibility and body scroll lock for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setSelectedService(null);
      }
    };

    if (selectedProject || selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, selectedService]);

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
    "Web Applications",
    "Mobile Application",
    "E-Commerce",
    "Enterprise Solution",
    "Education",
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
    }, 600);
  };

  const getFormWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Black Grapes Softech Team!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nService: ${formData.service}\nRequirement: ${formData.message}`
    );
    return `https://wa.me/${COMPANY_DETAILS.contact.whatsappNumber}?text=${text}`;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 75;
      window.scrollTo({
        top: offsetTop > 0 ? offsetTop : 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-[#F1F0EC] text-[#111111]">
      {/* =========================================================================
          SECTION 1: HOME (REFINED MODERN BRUTALIST HERO)
         ========================================================================= */}
      <section
        id="home"
        className="relative min-h-[92vh] flex flex-col justify-between pt-24 xs:pt-28 sm:pt-32 pb-10 sm:pb-16 px-3.5 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-[#F1F0EC]"
      >
        <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
          {/* Top Metadata Stamp with Verified Practice Info */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pb-4 sm:pb-6 mb-6 sm:mb-10 border-b border-[#E5E5E5] text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#666666]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF6B35] animate-pulse shrink-0"></span>
              <span className="font-bold text-[#111111]">[01 // IDENTITY]</span>
              <span>&bull;</span>
              <span className="font-bold text-[#111111] truncate">{COMPANY_DETAILS.name}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[#FF6B35] font-bold">ESTABLISHED PRACTICE</span>
              <span>&bull;</span>
              <span className="font-bold text-[#111111]">{COMPANY_DETAILS.location}</span>
            </div>
          </div>

          {/* Main Hero Asymmetric Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
            {/* Oversized Brutalist Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <h1 className="text-[2.1rem] xs:text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] xl:text-[5.5rem] font-heading font-extrabold tracking-tight sm:tracking-[-0.03em] leading-[1.04] sm:leading-[0.98] text-[#111111] uppercase break-words">
                WE TURN AMBITIOUS IDEAS INTO{" "}
                <span className="text-[#FF6B35] underline decoration-[#111111] decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">
                  DIGITAL REALITY.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy & Action Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 flex flex-col justify-end space-y-5 sm:space-y-7"
            >
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-[#444444] leading-relaxed font-sans max-w-xl">
                {COMPANY_DETAILS.supportingCopy}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 min-h-[48px] rounded-none bg-[#FF6B35] hover:bg-[#E55A27] text-white font-mono text-xs uppercase tracking-wider font-extrabold transition-all shadow-[3px_3px_0px_#111111] sm:shadow-[4px_4px_0px_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 min-h-[48px] rounded-none bg-white hover:bg-[#111111] hover:text-white text-[#111111] border-2 border-[#111111] font-mono text-xs uppercase tracking-wider font-extrabold transition-all shadow-[3px_3px_0px_#111111] sm:shadow-[4px_4px_0px_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  <span>LET&apos;S TALK</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Audited Engineering Pillars (Authentic, Non-Numeric Milestones) */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#E5E5E5] grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {COMPANY_DETAILS.stats.map((stat, idx) => (
              <div key={idx} className="p-3.5 sm:p-5 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#111111] tracking-tight uppercase break-words leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666666] mt-1.5 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Delivered Architectural Domains */}
        <div className="max-w-7xl mx-auto w-full pt-6 sm:pt-10 mt-6 sm:mt-8 border-t border-[#E5E5E5]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider sm:tracking-widest text-[#666666] font-bold">
              DELIVERED ARCHITECTURAL DOMAINS &bull; CENTRAL INDIAN ENGINEERING HUB
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider sm:tracking-widest text-[#FF6B35] font-extrabold">
              FULL-CYCLE EXPERTISE
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs font-mono text-[#111111]">
            {COMPANY_DETAILS.verifiedDomains.map((domain, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 sm:gap-2 py-0.5 sm:py-1">
                <span className="text-[#FF6B35] font-extrabold shrink-0">&bull;</span>
                <span className="font-bold hover:text-[#FF6B35] transition-colors leading-tight">
                  {domain}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HERO-TO-ABOUT EDITORIAL BRIDGE (FEATURED PREVIEW)
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-3.5 sm:px-6 lg:px-8 border-b-2 border-[#111111] bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-5 space-y-1.5 sm:space-y-2">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#FF6B35] font-bold block">
                [STRATEGIC POSITIONING]
              </span>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-heading font-extrabold uppercase">
                Purpose-Built Engineering For Scale.
              </h3>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm md:text-base text-[#CCCCCC] leading-relaxed font-sans">
                Headquartered in Vijaynagar, Indore, Black Grapes Softech delivers resilient custom software, high-performance web applications, native &amp; cross-platform mobile products, and specialized business automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT US (WHITE EDITORIAL SURFACE)
         ========================================================================= */}
      <section
        id="about"
        className="relative py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-[#FFFFFF]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pb-4 mb-8 sm:mb-12 border-b border-[#E5E5E5] text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#666666]">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B35] font-bold">[02]</span>
              <span className="text-[#111111] font-bold">WHO WE ARE &bull; COMPANY OVERVIEW</span>
            </div>
            <span>INDORE, MADHYA PRADESH</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
            <div className="lg:col-span-5">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#111111] leading-tight uppercase">
                {COMPANY_DETAILS.aboutHeadline}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-[#555555] text-sm xs:text-base sm:text-lg leading-relaxed font-sans">
              <p>
                {COMPANY_DETAILS.aboutText}
              </p>
              <p>
                We build without unnecessary bloat. Every line of code, database schema, and interface interaction is tailored specifically for your operational ecosystem. From mission-critical ERP platforms and automated multi-tier marketing engines to slick mobile apps, we bridge bold ideas with dependable software architecture.
              </p>
            </div>
          </div>

          {/* Vision & Mission Cards: Brutalist Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-20">
            {/* Vision (Warm Grey Card with Dark Stroke) */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-none bg-[#F1F0EC] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] sm:shadow-[6px_6px_0px_#111111] relative overflow-hidden group hover:border-[#FF6B35] transition-all">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
                  [DIRECTION &bull; 01]
                </span>
                <Target className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#111111] mb-2 sm:mb-3 uppercase">
                Our Vision
              </h3>
              <p className="text-[#555555] leading-relaxed text-xs sm:text-sm md:text-base font-sans">
                {COMPANY_DETAILS.vision}
              </p>
            </div>

            {/* Mission (Jet Black Card) */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-none bg-[#111111] text-white border-2 border-[#111111] shadow-[4px_4px_0px_#FF6B35] sm:shadow-[6px_6px_0px_#FF6B35] relative overflow-hidden group transition-all">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
                  [PURPOSE &bull; 02]
                </span>
                <Zap className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white mb-2 sm:mb-3 uppercase">
                Our Mission
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed text-xs sm:text-sm md:text-base font-sans">
                {COMPANY_DETAILS.mission}
              </p>
            </div>
          </div>

          {/* Authentic Founders Showcase */}
          <div className="border-t border-[#E5E5E5] pt-10 sm:pt-16">
            <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#FF6B35] block mb-1.5 sm:mb-2 font-bold">
                  [EXECUTIVE LEADERSHIP]
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111] uppercase">
                  Meet The Founders
                </h3>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#666666] max-w-md font-bold">
                Director-led technical execution and creative digital direction.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              {/* Official Photo of Founders with Mobile Safe Framing */}
              <div className="lg:col-span-5 relative w-full h-[260px] xs:h-[300px] sm:h-[380px] lg:h-full lg:min-h-full rounded-none overflow-hidden border-2 border-[#111111] bg-[#111111] shadow-[4px_4px_0px_#111111] sm:shadow-[6px_6px_0px_#111111] group">
                <Image
                  src="/assets/the-founders.jpeg"
                  alt="Mr. Arpit Jain and Mrs. Deepika Jain - Founders of Black Grapes Softech"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                  className="object-cover object-top filter contrast-110 group-hover:contrast-125 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-extrabold">
                    BLACK GRAPES SOFTECH DIRECTORS
                  </span>
                  <h4 className="text-base sm:text-lg font-heading font-extrabold text-white uppercase">
                    Mr. Arpit Jain &amp; Mrs. Deepika Jain
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#E5E5E5] font-mono mt-0.5">
                    Indore Headquarters, Madhya Pradesh
                  </p>
                </div>
              </div>

              {/* Founder Bios with Verified Credentials Only */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-4 sm:gap-6">
                {COMPANY_DETAILS.founders.map((founder, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-8 rounded-none bg-[#F1F0EC] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] sm:shadow-[4px_4px_0px_#111111] flex flex-col justify-between hover:border-[#FF6B35] transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg sm:text-xl font-heading font-extrabold text-[#111111] uppercase">
                          {founder.name}
                        </h4>
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-none bg-[#111111] text-white font-extrabold">
                          DIRECTOR
                        </span>
                      </div>
                      <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold mb-3 sm:mb-4">
                        {founder.role}
                      </div>
                      <p className="text-xs sm:text-sm text-[#444444] leading-relaxed font-sans">
                        {founder.bio}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#666666] font-bold">
                      <span>VERIFIED CORPORATE DIRECTOR</span>
                      <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SERVICES (11 MODERN BRUTALIST SURFACES)
         ========================================================================= */}
      <section
        id="services"
        className="relative py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-[#F1F0EC]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pb-4 mb-8 sm:mb-12 border-b border-[#E5E5E5] text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#666666]">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B35] font-bold">[03]</span>
              <span className="text-[#111111] font-bold">OUR SERVICES &amp; TECHNICAL CAPABILITIES</span>
            </div>
            <span>11 CORE DELIVERABLES</span>
          </div>

          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#111111] leading-tight uppercase mb-3 sm:mb-4">
              COMPREHENSIVE DIGITAL &amp; SOFTWARE CRAFT.
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-[#555555] leading-relaxed font-sans">
              Every business challenge requires a distinct architectural approach. Explore our complete spectrum of engineering, design, and staffing capabilities.
            </p>
          </div>

          {/* 11 Brutalist Cards Grid: Alternating Black & White Surfaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES.map((service, index) => {
              // Alternating rhythm: card 1, 5, 11 are Jet Black statement blocks
              const isDark = service.theme === "charcoal" || index === 0 || index === 4 || index === 10;

              return (
                <div
                  key={service.id}
                  className={`rounded-none p-5 sm:p-7 flex flex-col justify-between border-2 transition-all duration-300 relative group ${
                    isDark
                      ? "bg-[#111111] text-white border-[#111111] hover:border-[#FF6B35] shadow-[4px_4px_0px_#FF6B35] sm:shadow-[5px_5px_0px_#FF6B35]"
                      : "bg-[#FFFFFF] text-[#111111] border-[#111111] hover:border-[#FF6B35] shadow-[4px_4px_0px_#111111] sm:shadow-[5px_5px_0px_#111111]"
                  } hover:translate-x-[-2px] hover:translate-y-[-2px]`}
                >
                  <div>
                    {/* Card Top Numeral & Icon */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <span className="font-mono text-sm font-bold text-[#FF6B35]">
                        {service.num}
                      </span>
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-none flex items-center justify-center border ${
                          isDark
                            ? "bg-[#1A1A1A] text-[#FF6B35] border-[#2A2A2A]"
                            : "bg-[#F1F0EC] text-[#FF6B35] border-[#E5E5E5]"
                        }`}
                      >
                        <DynamicIcon name={service.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg sm:text-xl font-heading font-extrabold mb-2.5 sm:mb-3 uppercase tracking-tight ${
                        isDark ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-sans ${
                        isDark ? "text-[#CCCCCC]" : "text-[#555555]"
                      }`}
                    >
                      {service.shortDesc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                      {service.features.map((feat, i) => (
                        <li
                          key={i}
                          className={`text-xs flex items-start gap-2 font-sans ${
                            isDark ? "text-[#E5E5E5]" : "text-[#111111]"
                          }`}
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-[#FF6B35] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom: Tech Pills & Trigger */}
                  <div
                    className={`pt-4 border-t ${
                      isDark ? "border-[#2A2A2A]" : "border-[#E5E5E5]"
                    }`}
                  >
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-none ${
                            isDark
                              ? "bg-[#1A1A1A] text-white border border-[#333333]"
                              : "bg-[#F1F0EC] text-[#111111] border border-[#E5E5E5]"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className={`w-full min-h-[44px] py-2.5 px-4 rounded-none text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-between border ${
                        isDark
                          ? "bg-white/10 hover:bg-[#FF6B35] text-white border-white/20 hover:border-[#FF6B35]"
                          : "bg-[#F1F0EC] hover:bg-[#111111] hover:text-white text-[#111111] border-[#111111]"
                      }`}
                    >
                      <span>SPECIFICATIONS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PROJECTS (AUTHENTIC CLIENT DELIVERIES & CASE STUDIES)
         ========================================================================= */}
      <section
        id="projects"
        className="relative py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-[#FFFFFF]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pb-4 mb-8 sm:mb-12 border-b border-[#E5E5E5] text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#666666]">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B35] font-bold">[04]</span>
              <span className="text-[#111111] font-bold">CLIENT WORK &amp; CASE STUDIES</span>
            </div>
            <span>AUTHENTIC CLIENT DELIVERIES &bull; VERIFIED SOFTWARE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#111111] leading-tight uppercase mb-3 sm:mb-4">
                {COMPANY_DETAILS.projectsHeadline}
              </h2>
              <p className="text-sm xs:text-base text-[#555555] leading-relaxed font-sans">
                A curated selection of enterprise platforms, native applications, and digital systems delivered by Black Grapes Softech.
              </p>
            </div>

            {/* Category Filter Pills: Mobile Horizontal Touch Carousel */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 scrollbar-none max-w-full">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectCategory(cat)}
                  className={`whitespace-nowrap shrink-0 px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[40px] rounded-none text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all border ${
                    activeProjectCategory === cat
                      ? "bg-[#111111] text-white border-[#111111] font-bold shadow-[2px_2px_0px_#FF6B35]"
                      : "bg-[#F1F0EC] text-[#777777] hover:text-[#111111] border-[#E5E5E5]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Projects Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-none bg-[#F1F0EC] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] overflow-hidden flex flex-col justify-between group hover:border-[#FF6B35] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <div>
                  {/* Project Cover Container */}
                  <div className="relative h-56 sm:h-64 w-full bg-[#1A1A1A] overflow-hidden border-b-2 border-[#111111]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-none font-extrabold flex items-center gap-1.5 border bg-[#111111] text-white border-[#111111]">
                        <span className="w-1.5 h-1.5 bg-[#FF6B35]" />
                        {project.status}
                      </span>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-none bg-white text-[#111111] border-2 border-[#111111] font-bold shadow-[1px_1px_0px_#111111]">
                        {project.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold mb-1.5">
                      {project.category} &bull; {project.client}
                    </div>

                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#111111] mb-2 sm:mb-2.5 group-hover:text-[#FF6B35] transition-colors uppercase">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 line-clamp-3 font-sans">
                      {project.summary}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-none bg-white text-[#111111] border border-[#E5E5E5] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="flex items-center justify-between gap-2.5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full min-h-[44px] py-2.5 px-4 rounded-none bg-white hover:bg-[#111111] hover:text-white text-[#111111] border-2 border-[#111111] text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-between shadow-[2px_2px_0px_#111111]"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-none border-2 border-[#111111] bg-white text-[#111111] hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all shadow-[2px_2px_0px_#111111]"
                        title="Open Live Website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PROJECT DEMOS (INDEPENDENT LIVE DEMONSTRATION SUITE)
         ========================================================================= */}
      <section
        id="project-demos"
        className="relative py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 border-b border-[#2A2A2A] bg-[#141414] text-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Metadata Header */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pb-4 mb-8 sm:mb-12 border-b border-[#2A2A2A] text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#777777]">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B35] font-bold">[05]</span>
              <span className="text-white font-bold">INDEPENDENT LIVE DEMOS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF6B35] animate-ping" />
              <span className="text-white font-bold">4 LIVE OPERATIONAL SYSTEMS</span>
            </div>
          </div>

          {/* Section Main Titles */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div className="max-w-3xl">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-extrabold mb-2 flex items-center gap-2">
                <span>{COMPANY_DETAILS.demosSubheadline}</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight uppercase mb-3 sm:mb-4">
                {COMPANY_DETAILS.demosHeadline}
              </h2>
              <p className="text-sm xs:text-base text-[#AAAAAA] leading-relaxed font-sans max-w-2xl">
                {COMPANY_DETAILS.demosDescription}
              </p>
            </div>

            {/* Live Indicator Pill */}
            <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 bg-[#1C1C1C] border border-[#2E2E2E] text-xs font-mono">
              <span className="w-2.5 h-2.5 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="text-[#CCCCCC] uppercase tracking-wider">Public Cloud Demos Active</span>
            </div>
          </div>

          {/* 4 Live Demo Cards Grid (2x2 Desktop, 1 Col Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {LIVE_DEMOS.map((demo) => (
              <div
                key={demo.id}
                className="group relative rounded-none bg-[#1A1A1A] border-2 border-[#2E2E2E] hover:border-[#FF6B35] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#FF6B35] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <div>
                  {/* 16:9 Aspect Ratio Media Container with AI Cover */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0A] border-b-2 border-[#2E2E2E]">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                    />

                    {/* Top Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                      <span className="px-2.5 py-1 bg-[#FF6B35] text-white font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-[2px_2px_0px_#000000] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                        {demo.badge}
                      </span>
                      <span className="px-2.5 py-1 bg-[#111111]/90 backdrop-blur-sm text-white font-mono text-[11px] font-bold border border-white/20">
                        DEMO // {demo.num}
                      </span>
                    </div>

                    {/* Bottom Floating Artwork Notice Badge */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                      <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#111111]/85 backdrop-blur-sm text-[#CCCCCC] border border-white/10">
                        CONCEPTUAL COVER ARTWORK
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-black/80 text-[#22C55E] font-bold border border-[#22C55E]/40 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                        {demo.status}
                      </span>
                    </div>
                  </div>

                  {/* Demo Card Body */}
                  <div className="p-5 sm:p-7">
                    <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px] sm:text-xs">
                      <span className="text-[#FF6B35] font-bold uppercase tracking-wider">
                        {demo.category}
                      </span>
                      <span className="text-[#777777] uppercase text-[10px]">
                        {demo.client}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white mb-2.5 uppercase tracking-tight group-hover:text-[#FF6B35] transition-colors">
                      {demo.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#BBBBBB] leading-relaxed mb-5 font-sans">
                      {demo.summary}
                    </p>

                    {/* Tech & Feature Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {demo.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 bg-white/5 text-[#E0E0E0] border border-[#333333] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {demo.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={`tag-${i}`}
                          className="text-[10px] font-mono px-2 py-0.5 bg-[#252525] text-[#AAAAAA] border border-[#333333]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Call to Action Strip */}
                <div className="p-5 sm:p-7 pt-0">
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] py-3 px-5 bg-[#FF6B35] hover:bg-[#E55A27] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold transition-all flex items-center justify-center gap-2 shadow-[3px_3px_0px_#FFFFFF] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]"
                  >
                    <span>VIEW LIVE DEMO</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Transparency Guarantee Footer Callout */}
          <div className="mt-10 sm:mt-12 p-4 sm:p-5 bg-[#1A1A1A] border border-[#2E2E2E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-2 text-[#CCCCCC]">
              <ShieldCheck className="w-4 h-4 text-[#FF6B35] shrink-0" />
              <span>All demonstrations are active public cloud deployments hosted for exploration and testing.</span>
            </div>
            <a
              href="#contact"
              className="text-[#FF6B35] hover:underline uppercase font-bold shrink-0 flex items-center gap-1"
            >
              <span>REQUEST CUSTOM SYSTEM PROTOTYPE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & WORKING INQUIRY FORM (STATEMENT JET BLACK SECTION)
         ========================================================================= */}
      <section
        id="contact"
        className="relative py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#111111] text-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pb-4 mb-8 sm:mb-12 border-b border-[#2A2A2A] text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#777777]">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B35] font-bold">[06]</span>
              <span className="text-white font-bold">COMMENCE A PROJECT INQUIRY</span>
            </div>
            <span>INDORE HEADQUARTERS &bull; DIRECT CONTACT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Official Contact Dossier */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-8">
              <div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight uppercase mb-3 sm:mb-4">
                  {COMPANY_DETAILS.contactHeadline}
                </h2>
                <p className="text-sm xs:text-base text-[#CCCCCC] leading-relaxed font-sans">
                  Whether you are architecting a custom software ecosystem, revamping an enterprise web application, or building an MLM/CRM algorithm, connect with our Indore directors directly.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-3 sm:space-y-4">
                {/* Physical Location */}
                <div className="p-4 sm:p-6 rounded-none bg-[#1A1A1A] border border-[#2A2A2A] shadow-[3px_3px_0px_#FF6B35] flex items-start gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF6B35]">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#777777] block mb-1 font-bold">
                      HEADQUARTERS
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-white leading-relaxed font-sans">
                      {COMPANY_DETAILS.address.full}
                    </p>
                  </div>
                </div>

                {/* Direct Phone Lines */}
                <div className="p-4 sm:p-6 rounded-none bg-[#1A1A1A] border border-[#2A2A2A] shadow-[3px_3px_0px_#FF6B35] flex items-start gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF6B35]">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#777777] block mb-1 font-bold">
                      DIRECT CALL LINES
                    </span>
                    <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 text-xs sm:text-sm font-mono font-bold text-white">
                      <a
                        href={`tel:${COMPANY_DETAILS.contact.phone1}`}
                        className="hover:text-[#FF6B35] transition-colors py-1 inline-block"
                      >
                        {COMPANY_DETAILS.contact.phone1}
                      </a>
                      <span className="text-[#333333] self-center">|</span>
                      <a
                        href={`tel:${COMPANY_DETAILS.contact.phone2}`}
                        className="hover:text-[#FF6B35] transition-colors py-1 inline-block"
                      >
                        {COMPANY_DETAILS.contact.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Emails */}
                <div className="p-4 sm:p-6 rounded-none bg-[#1A1A1A] border border-[#2A2A2A] shadow-[3px_3px_0px_#FF6B35] flex items-start gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF6B35]">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#777777] block mb-1 font-bold">
                      OFFICIAL COMMUNICATIONS
                    </span>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm font-mono text-white">
                      <a
                        href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`}
                        className="hover:text-[#FF6B35] transition-colors font-bold break-all"
                      >
                        {COMPANY_DETAILS.contact.primaryEmail}
                      </a>
                      <a
                        href={`mailto:${COMPANY_DETAILS.contact.directorEmail}`}
                        className="hover:text-[#FF6B35] transition-colors text-xs text-[#777777] break-all"
                      >
                        {COMPANY_DETAILS.contact.directorEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 sm:p-6 rounded-none bg-white/5 border border-white/10 flex items-center justify-between gap-3 sm:gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B35] block mb-1 font-bold">
                    INSTANT CHAT
                  </span>
                  <div className="text-xs sm:text-sm font-bold font-heading text-white uppercase">
                    Need immediate technical advisory?
                  </div>
                </div>
                <a
                  href={COMPANY_DETAILS.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 sm:px-4 py-2.5 min-h-[44px] rounded-none bg-[#FF6B35] hover:bg-[#E55A27] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shrink-0 flex items-center gap-2 shadow-[2px_2px_0px_#FFFFFF]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Working Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-5 sm:p-8 lg:p-10 rounded-none bg-[#1A1A1A] border-2 border-[#2A2A2A] shadow-[4px_4px_0px_#FF6B35] sm:shadow-[6px_6px_0px_#FF6B35]">
                <div className="flex items-center justify-between pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-[#2A2A2A]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white uppercase">
                      Project Inquiry Form
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#777777] font-mono mt-1 font-bold">
                      EXPECT RESPONSE WITHIN 4 BUSINESS HOURS
                    </p>
                  </div>
                  <span className="w-3 h-3 bg-[#FF6B35]"></span>
                </div>

                {formStatus === "success" ? (
                  <div className="py-8 sm:py-12 text-center space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-none bg-[#FF6B35]/20 text-[#FF6B35] mx-auto flex items-center justify-center border border-[#FF6B35]">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white uppercase">
                      Inquiry Transmitted Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#CCCCCC] max-w-md mx-auto font-sans">
                      Thank you for contacting Black Grapes Softech. Our engineering directors will review your scope and respond promptly.
                    </p>
                    <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row justify-center gap-3">
                      <a
                        href={getFormWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-none bg-[#FF6B35] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_#FFFFFF]"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Send via WhatsApp also</span>
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
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-none bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/20 font-bold"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Name */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white font-bold">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 min-h-[46px] rounded-none bg-[#111111] border border-[#2A2A2A] text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6B35] transition-all font-sans"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white font-bold">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@company.com"
                          className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 min-h-[46px] rounded-none bg-[#111111] border border-[#2A2A2A] text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6B35] transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Phone */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white font-bold">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 min-h-[46px] rounded-none bg-[#111111] border border-[#2A2A2A] text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6B35] transition-all font-sans"
                        />
                      </div>

                      {/* Service */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white font-bold">
                          Service Required *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 min-h-[46px] rounded-none bg-[#111111] border border-[#2A2A2A] text-sm text-white focus:outline-none focus:border-[#FF6B35] transition-all font-sans"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.num}. {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Requirement Message */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white font-bold">
                        Project Scope &amp; Deliverables *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Please describe your project objectives, timeline, existing tech stack, and expected deliverables..."
                        className="w-full px-3.5 sm:px-4 py-3 rounded-none bg-[#111111] border border-[#2A2A2A] text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6B35] transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full sm:w-auto px-8 py-3.5 min-h-[48px] rounded-none bg-[#FF6B35] hover:bg-[#E55A27] text-white font-mono text-xs uppercase tracking-wider font-extrabold transition-all shadow-[3px_3px_0px_#FFFFFF] flex items-center justify-center gap-2 hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] disabled:opacity-50"
                      >
                        {formStatus === "submitting" ? (
                          <span>TRANSMITTING...</span>
                        ) : (
                          <>
                            <span>SEND INQUIRY</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <a
                        href={getFormWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-3.5 min-h-[48px] rounded-none bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#FF6B35]" />
                        <span>Chat via WhatsApp</span>
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
          INTERACTIVE MODAL: PROJECT CASE STUDY
         ========================================================================= */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-[#111111]/85 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-none bg-white border-2 border-[#111111] p-4 sm:p-8 shadow-[6px_6px_0px_#FF6B35] sm:shadow-[8px_8px_0px_#FF6B35]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-none bg-[#F1F0EC] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors border border-[#111111] z-20"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-5 sm:mb-6 pr-10 sm:pr-12">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-none bg-[#111111] text-white font-bold">
                  {selectedProject.status}
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-heading font-extrabold text-[#111111] uppercase">
                {selectedProject.title}
              </h3>
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#777777] mt-1 font-semibold">
                Client: {selectedProject.client} &bull; Platform: {selectedProject.platform}
              </p>
            </div>

            {/* Project Image Preview */}
            <div className="relative h-48 sm:h-80 w-full rounded-none overflow-hidden border-2 border-[#111111] mb-4 sm:mb-5 bg-[#1A1A1A]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 640px) 100vw, 768px"
                className="object-cover object-top"
              />
            </div>

            {/* Illustrative Artwork Notice if applicable */}
            {selectedProject.isAiArtwork && (
              <div className="mb-5 p-2.5 sm:p-3 rounded-none bg-[#F1F0EC] border border-[#111111] text-[10px] sm:text-[11px] font-mono text-[#555555]">
                <span className="font-bold text-[#111111]">[CONCEPTUAL ARTWORK NOTICE]</span>{" "}
                {selectedProject.artworkNotice || "Illustrative conceptual cover artwork representing application features, not an authentic application screenshot."}
              </div>
            )}

            {/* Summary */}
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold mb-1.5 sm:mb-2">
                PROJECT OVERVIEW
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-sans">
                {selectedProject.summary}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6 mb-5 sm:mb-6">
              <div className="p-4 sm:p-5 rounded-none bg-[#F1F0EC] border border-[#111111]">
                <h5 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-1.5 sm:mb-2">
                  THE CHALLENGE
                </h5>
                <p className="text-xs text-[#555555] leading-relaxed font-sans">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-none bg-[#FFFFFF] border-2 border-[#111111]">
                <h5 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-1.5 sm:mb-2">
                  OUR SOLUTION
                </h5>
                <p className="text-xs text-[#555555] leading-relaxed font-sans">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Measurable Results */}
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold mb-2">
                MEASURABLE OUTCOMES
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {selectedProject.results.map((res, i) => (
                  <li
                    key={i}
                    className="text-xs text-[#111111] flex items-start gap-2 font-bold font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags & Live Link */}
            <div className="pt-4 sm:pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-none bg-[#F1F0EC] text-[#111111] border border-[#111111] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(selectedProject.demoUrl || selectedProject.liveUrl) && (
                <a
                  href={selectedProject.demoUrl || selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 min-h-[44px] rounded-none bg-[#FF6B35] hover:bg-[#E55A27] text-white font-mono text-xs uppercase tracking-wider font-extrabold inline-flex items-center justify-center gap-2 transition-all shadow-[2px_2px_0px_#111111]"
                >
                  <span>{selectedProject.isLiveDemo ? "Open Live Application Demo" : "Visit Live Site"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE MODAL: SERVICE SPECIFICATIONS
         ========================================================================= */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-[#111111]/85 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-none bg-white border-2 border-[#111111] p-4 sm:p-8 shadow-[6px_6px_0px_#FF6B35] sm:shadow-[8px_8px_0px_#FF6B35] max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-none bg-[#F1F0EC] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors border border-[#111111] z-20"
              aria-label="Close Specifications"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5 sm:mb-6 pr-10 sm:pr-12">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#FF6B35] font-bold">
                <span>{selectedService.num}</span>
                <span>&bull;</span>
                <span>ENGINEERING CAPABILITY</span>
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-heading font-extrabold text-[#111111] uppercase">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5 sm:mb-6 font-sans">
              {selectedService.shortDesc}
            </p>

            {/* Core Features */}
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold mb-2.5 sm:mb-3">
                ARCHITECTURAL CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {selectedService.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-3.5 rounded-none bg-[#F1F0EC] border border-[#111111] text-xs text-[#111111] flex items-start gap-2 font-sans font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold mb-2 sm:mb-2.5">
                RECOMMENDED TECH STACK
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedService.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-none bg-[#111111] text-white font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Service CTA */}
            <div className="pt-4 sm:pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-[11px] sm:text-xs font-mono text-[#777777] font-semibold text-center sm:text-left">
                Direct technical review available with Mr. Arpit Jain
              </div>
              <button
                onClick={() => {
                  setSelectedService(null);
                  setFormData((prev) => ({ ...prev, service: selectedService.title }));
                  scrollToSection("contact");
                }}
                className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-none bg-[#FF6B35] hover:bg-[#E55A27] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-[2px_2px_0px_#111111] text-center"
              >
                Request Quotation &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
