"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  ServiceItem,
  ProjectItem,
} from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export default function ModernEditorialPortfolio() {
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
    }, 700);
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
    <div className="relative overflow-hidden bg-[#F7F5F0] text-[#14243A]">
      {/* =========================================================================
          SECTION 1: HOME (EDITORIAL HERO)
         ========================================================================= */}
      <section
        id="home"
        className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#E2DED7]"
      >
        <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
          {/* Top Metadata Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-[#E2DED7] text-xs font-mono uppercase tracking-widest text-[#777D87]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F07860] animate-pulse"></span>
              <span>[01 // OVERVIEW]</span>
              <span>&bull;</span>
              <span className="text-[#14243A] font-semibold">{COMPANY_DETAILS.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>EST. 2014</span>
              <span>&bull;</span>
              <span>{COMPANY_DETAILS.location}</span>
            </div>
          </div>

          {/* Main Hero Asymmetric Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            {/* Large Editorial Headline */}
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-heading font-extrabold tracking-[-0.035em] leading-[1.0] text-[#14243A]">
                BUILDING DIGITAL EXPERIENCES THAT{" "}
                <span className="font-serif italic text-[#F07860] font-normal tracking-normal">
                  MOVE BUSINESS FORWARD.
                </span>
              </h1>
            </div>

            {/* Supporting Copy & Action Column */}
            <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
              <p className="text-base sm:text-lg text-[#777D87] leading-relaxed font-sans">
                {COMPANY_DETAILS.supportingCopy}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F07860] hover:bg-[#E0634A] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_4px_16px_rgba(240,120,96,0.32)] hover:translate-y-[-1px]"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#14243A] hover:text-white text-[#14243A] border border-[#E2DED7] hover:border-[#14243A] font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_2px_8px_rgba(20,36,58,0.03)]"
                >
                  <span>LET&apos;S TALK</span>
                </button>
              </div>
            </div>
          </div>

          {/* Editorial Metric Strip */}
          <div className="mt-16 pt-8 border-t border-[#E2DED7] grid grid-cols-2 md:grid-cols-4 gap-6">
            {COMPANY_DETAILS.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-[#14243A] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#777D87]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Client Ticker Strip */}
        <div className="max-w-7xl mx-auto w-full pt-10 mt-8 border-t border-[#E2DED7]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#777D87]">
              TRUSTED BY INNOVATIVE ENTERPRISES &bull; 35+ VERIFIED PARTNERS
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F07860] font-semibold">
              PROVEN TECHNICAL DELIVERY
            </span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#14243A]">
            {COMPANY_DETAILS.verifiedClients.slice(0, 14).map((client, i) => (
              <span key={i} className="inline-flex items-center gap-2 py-1">
                <span className="text-[#F07860]">&bull;</span>
                <span className="font-medium hover:text-[#F07860] transition-colors">
                  {client}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT US & FOUNDERS
         ========================================================================= */}
      <section
        id="about"
        className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2DED7]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-12 border-b border-[#E2DED7] text-xs font-mono uppercase tracking-widest text-[#777D87]">
            <div className="flex items-center gap-2">
              <span className="text-[#F07860] font-bold">[02]</span>
              <span>WHO WE ARE &bull; COMPANY OVERVIEW</span>
            </div>
            <span>ESTABLISHED IN INDORE, INDIA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#14243A] leading-tight">
                ARCHITECTURAL RIGOR. CRAFTED FOR SUSTAINED BUSINESS SCALE.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[#777D87] text-base sm:text-lg leading-relaxed font-sans">
              <p>
                {COMPANY_DETAILS.aboutText}
              </p>
              <p>
                We do not build generic templates. Every line of code, database schema, and interface interaction is tailored specifically for your operational ecosystem. From mission-critical ERP platforms and automated multi-tier marketing engines to slick mobile apps, we bridge bold ideas with dependable software architecture.
              </p>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E2DED7] shadow-sm relative overflow-hidden group hover:border-[#F07860] transition-all">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F07860] font-semibold">
                  [DIRECTION &bull; 01]
                </span>
                <Target className="w-5 h-5 text-[#F07860]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#14243A] mb-3">
                Our Vision
              </h3>
              <p className="text-[#777D87] leading-relaxed text-sm sm:text-base font-sans">
                {COMPANY_DETAILS.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#14243A] text-[#F7F5F0] border border-[#1F3552] shadow-sm relative overflow-hidden group hover:border-[#F07860] transition-all">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F07860] font-semibold">
                  [PURPOSE &bull; 02]
                </span>
                <Zap className="w-5 h-5 text-[#F07860]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-[#E8E5DF]/80 leading-relaxed text-sm sm:text-base font-sans">
                {COMPANY_DETAILS.mission}
              </p>
            </div>
          </div>

          {/* Authentic Founders Showcase */}
          <div className="border-t border-[#E2DED7] pt-16">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#F07860] block mb-2">
                  [EXECUTIVE LEADERSHIP]
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#14243A]">
                  Meet The Founders
                </h3>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#777D87] max-w-md">
                Hands-on leadership directly involved in technical architecture and design reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Official Photo of Founders */}
              <div className="lg:col-span-5 relative min-h-[380px] rounded-2xl overflow-hidden border border-[#E2DED7] bg-[#E8E5DF] group">
                <Image
                  src="/assets/the-founders.jpeg"
                  alt="Mr. Arpit Jain and Mrs. Deepika Jain - Founders of Black Grapes Softech"
                  fill
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14243A]/90 via-[#14243A]/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F07860] font-semibold">
                    BLACK GRAPES SOFTECH DIRECTORS
                  </span>
                  <h4 className="text-lg font-heading font-bold text-white">
                    Mr. Arpit Jain &amp; Mrs. Deepika Jain
                  </h4>
                  <p className="text-xs text-[#F7F5F0]/80 font-mono mt-0.5">
                    Indore Headquarters, Madhya Pradesh
                  </p>
                </div>
              </div>

              {/* Founder Bios */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                {COMPANY_DETAILS.founders.map((founder, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-white border border-[#E2DED7] shadow-sm flex flex-col justify-between hover:border-[#F07860] transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-heading font-bold text-[#14243A]">
                          {founder.name}
                        </h4>
                        <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F7F5F0] text-[#14243A] border border-[#E2DED7]">
                          DIRECTOR
                        </span>
                      </div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#F07860] font-semibold mb-4">
                        {founder.role}
                      </div>
                      <p className="text-sm text-[#777D87] leading-relaxed font-sans">
                        {founder.bio}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E2DED7] flex items-center justify-between text-xs font-mono text-[#777D87]">
                      <span>VERIFIED CORPORATE DIRECTOR</span>
                      <ShieldCheck className="w-4 h-4 text-[#F07860]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SERVICES (11 CLEAN EDITORIAL CARDS)
         ========================================================================= */}
      <section
        id="services"
        className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2DED7]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-12 border-b border-[#E2DED7] text-xs font-mono uppercase tracking-widest text-[#777D87]">
            <div className="flex items-center gap-2">
              <span className="text-[#F07860] font-bold">[03]</span>
              <span>COMPANY SERVICES &amp; TECHNICAL CAPABILITIES</span>
            </div>
            <span>11 CORE OFFERINGS</span>
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#14243A] leading-tight mb-4">
              COMPREHENSIVE DIGITAL &amp; SOFTWARE CRAFT.
            </h2>
            <p className="text-base sm:text-lg text-[#777D87] leading-relaxed font-sans">
              Every business challenge requires a distinct architectural approach. Explore our complete spectrum of engineering, design, and staffing capabilities.
            </p>
          </div>

          {/* 11 Editorial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              // Alternating white and off-white cards with fine borders
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl p-7 flex flex-col justify-between border border-[#E2DED7] transition-all duration-300 relative group ${
                    isEven ? "bg-white" : "bg-[#F7F5F0]"
                  } hover:translate-y-[-4px] hover:border-[#F07860] hover:shadow-[0_14px_34px_rgba(20,36,58,0.06)]`}
                >
                  <div>
                    {/* Card Top Numeral & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm font-bold text-[#F07860]">
                        {service.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E2DED7] flex items-center justify-center text-[#F07860] shadow-sm">
                        <DynamicIcon name={service.icon} className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-[#14243A] mb-3">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-[#777D87] leading-relaxed mb-6 font-sans">
                      {service.shortDesc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, i) => (
                        <li
                          key={i}
                          className="text-xs text-[#14243A] flex items-start gap-2 font-sans"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-[#F07860] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom: Tech Pills & Trigger */}
                  <div className="pt-4 border-t border-[#E2DED7]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8E5DF]/60 text-[#14243A] border border-[#E2DED7]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#F7F5F0] hover:bg-[#14243A] hover:text-white text-[#14243A] border border-[#E2DED7] text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-between"
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
          SECTION 4: PROJECTS (12 VERIFIED PROJECTS)
         ========================================================================= */}
      <section
        id="projects"
        className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2DED7]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-12 border-b border-[#E2DED7] text-xs font-mono uppercase tracking-widest text-[#777D87]">
            <div className="flex items-center gap-2">
              <span className="text-[#F07860] font-bold">[04]</span>
              <span>VERIFIED PORTFOLIO SHOWCASE</span>
            </div>
            <span>12 DELIVERED PROJECTS &bull; ASYMMETRIC GRID</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-[#14243A] leading-tight mb-4">
                PROVEN DELIVERIES. MEASURABLE IMPACT.
              </h2>
              <p className="text-base text-[#777D87] leading-relaxed font-sans">
                Explore real client deliveries and specialized technical systems developed by Black Grapes Softech. We clearly distinguish live enterprise client engagements from demonstration prototypes.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    activeProjectCategory === cat
                      ? "bg-[#14243A] text-white font-semibold shadow-sm"
                      : "bg-white text-[#777D87] hover:text-[#14243A] border border-[#E2DED7]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const isClientProject = project.status === "CLIENT PROJECT";

              return (
                <div
                  key={project.id}
                  className="rounded-2xl bg-white border border-[#E2DED7] overflow-hidden flex flex-col justify-between group hover:border-[#F07860] transition-all duration-300 shadow-sm hover:translate-y-[-4px]"
                >
                  <div>
                    {/* Project Screenshot Container */}
                    <div className="relative h-56 w-full bg-[#E8E5DF] overflow-hidden border-b border-[#E2DED7]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold ${
                            isClientProject
                              ? "bg-[#14243A] text-white shadow-sm flex items-center gap-1.5"
                              : "bg-white/95 text-[#777D87] border border-[#E2DED7]"
                          }`}
                        >
                          {isClientProject && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F07860]" />
                          )}
                          {project.status}
                        </span>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/95 text-[#14243A] border border-[#E2DED7] font-semibold">
                          {project.num}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#F07860] font-medium mb-1.5">
                        {project.category} &bull; {project.client}
                      </div>

                      <h3 className="text-xl font-heading font-bold text-[#14243A] mb-2.5 group-hover:text-[#F07860] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#777D87] leading-relaxed mb-4 line-clamp-2 font-sans">
                        {project.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F5F0] text-[#14243A] border border-[#E2DED7]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="p-6 pt-0 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#F7F5F0] hover:bg-[#14243A] hover:text-white text-[#14243A] border border-[#E2DED7] text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-between"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-[#E2DED7] bg-white text-[#777D87] hover:text-[#F07860] hover:border-[#F07860] transition-all"
                        title="Open Live Website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONTACT & WORKING INQUIRY FORM (NAVY BACKGROUND)
         ========================================================================= */}
      <section
        id="contact"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#14243A] text-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-12 border-b border-[#2A4468] text-xs font-mono uppercase tracking-widest text-[#E8E5DF]/70">
            <div className="flex items-center gap-2">
              <span className="text-[#F07860] font-bold">[05]</span>
              <span>COMMENCE A PROJECT INQUIRY</span>
            </div>
            <span>INDORE HEADQUARTERS &bull; DIRECT CONTACT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Official Contact Dossier */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight mb-4">
                  LET&apos;S CREATE SOMETHING MEANINGFUL.
                </h2>
                <p className="text-base text-[#E8E5DF]/80 leading-relaxed font-sans">
                  Whether you are architecting a custom software ecosystem, revamping an enterprise web application, or building an MLM/CRM algorithm, connect with our Indore directors directly.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Physical Location */}
                <div className="p-6 rounded-2xl bg-[#1C304B] border border-[#2A4468] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#F07860]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8E5DF]/70 block mb-1">
                      HEADQUARTERS
                    </span>
                    <p className="text-sm font-medium text-white leading-relaxed font-sans">
                      {COMPANY_DETAILS.address.full}
                    </p>
                  </div>
                </div>

                {/* Direct Phone Lines */}
                <div className="p-6 rounded-2xl bg-[#1C304B] border border-[#2A4468] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#F07860]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8E5DF]/70 block mb-1">
                      DIRECT CALL LINES
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-mono font-medium text-white">
                      <a
                        href={`tel:${COMPANY_DETAILS.contact.phone1}`}
                        className="hover:text-[#F07860] transition-colors"
                      >
                        {COMPANY_DETAILS.contact.phone1}
                      </a>
                      <span className="text-[#2A4468]">|</span>
                      <a
                        href={`tel:${COMPANY_DETAILS.contact.phone2}`}
                        className="hover:text-[#F07860] transition-colors"
                      >
                        {COMPANY_DETAILS.contact.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Emails */}
                <div className="p-6 rounded-2xl bg-[#1C304B] border border-[#2A4468] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#F07860]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8E5DF]/70 block mb-1">
                      OFFICIAL COMMUNICATIONS
                    </span>
                    <div className="flex flex-col gap-1 text-sm font-mono text-white">
                      <a
                        href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`}
                        className="hover:text-[#F07860] transition-colors font-medium"
                      >
                        {COMPANY_DETAILS.contact.primaryEmail}
                      </a>
                      <a
                        href={`mailto:${COMPANY_DETAILS.contact.directorEmail}`}
                        className="hover:text-[#F07860] transition-colors text-xs text-[#E8E5DF]/70"
                      >
                        {COMPANY_DETAILS.contact.directorEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F07860] block mb-1">
                    INSTANT CHAT
                  </span>
                  <div className="text-sm font-bold font-heading text-white">
                    Need immediate technical advisory?
                  </div>
                </div>
                <a
                  href={COMPANY_DETAILS.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#F07860] hover:bg-[#E0634A] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shrink-0 flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Working Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1C304B] border border-[#2A4468] shadow-xl">
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#2A4468]">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-[#E8E5DF]/70 font-mono mt-1">
                      EXPECT RESPONSE WITHIN 4 BUSINESS HOURS
                    </p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#F07860]"></span>
                </div>

                {formStatus === "success" ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F07860]/20 text-[#F07860] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-white">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-[#E8E5DF]/80 max-w-md mx-auto font-sans">
                      Thank you for contacting Black Grapes Softech. Our engineering directors will review your scope and respond promptly.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <a
                        href={getFormWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F07860] text-white font-mono text-xs uppercase tracking-wider"
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/20"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold">
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
                          className="w-full px-4 py-3 rounded-xl bg-[#14243A] border border-[#2A4468] text-sm text-white placeholder:text-[#E8E5DF]/40 focus:outline-none focus:border-[#F07860] transition-all font-sans"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold">
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
                          className="w-full px-4 py-3 rounded-xl bg-[#14243A] border border-[#2A4468] text-sm text-white placeholder:text-[#E8E5DF]/40 focus:outline-none focus:border-[#F07860] transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#14243A] border border-[#2A4468] text-sm text-white placeholder:text-[#E8E5DF]/40 focus:outline-none focus:border-[#F07860] transition-all font-sans"
                        />
                      </div>

                      {/* Service */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold">
                          Service Required *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#14243A] border border-[#2A4468] text-sm text-white focus:outline-none focus:border-[#F07860] transition-all font-sans"
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
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold">
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
                        className="w-full px-4 py-3 rounded-xl bg-[#14243A] border border-[#2A4468] text-sm text-white placeholder:text-[#E8E5DF]/40 focus:outline-none focus:border-[#F07860] transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F07860] hover:bg-[#E0634A] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_4px_16px_rgba(240,120,96,0.35)] flex items-center justify-center gap-2 hover:translate-y-[-1px] disabled:opacity-50"
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
                        className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#F07860]" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#14243A]/75 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-[#E2DED7] p-6 sm:p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F7F5F0] text-[#14243A] hover:bg-[#14243A] hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#14243A] text-white">
                  {selectedProject.status}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#F07860] font-semibold">
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#14243A]">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#777D87] mt-1">
                Client: {selectedProject.client} &bull; Platform: {selectedProject.platform}
              </p>
            </div>

            {/* Project Image Preview */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#E2DED7] mb-6 bg-[#E8E5DF]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F07860] font-semibold mb-2">
                PROJECT OVERVIEW
              </h4>
              <p className="text-sm text-[#777D87] leading-relaxed font-sans">
                {selectedProject.summary}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E2DED7]">
                <h5 className="text-xs font-mono uppercase tracking-wider text-[#14243A] font-bold mb-2">
                  THE CHALLENGE
                </h5>
                <p className="text-xs text-[#777D87] leading-relaxed font-sans">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#E8E5DF]/50 border border-[#E2DED7]">
                <h5 className="text-xs font-mono uppercase tracking-wider text-[#14243A] font-bold mb-2">
                  OUR SOLUTION
                </h5>
                <p className="text-xs text-[#777D87] leading-relaxed font-sans">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Measurable Results */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F07860] font-semibold mb-2.5">
                MEASURABLE OUTCOMES
              </h4>
              <ul className="space-y-2">
                {selectedProject.results.map((res, i) => (
                  <li
                    key={i}
                    className="text-xs text-[#14243A] flex items-center gap-2 font-medium font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F07860] shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-6 border-t border-[#E2DED7] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F5F0] text-[#14243A] border border-[#E2DED7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#F07860] hover:bg-[#E0634A] text-white font-mono text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Visit Live Site</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#14243A]/75 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#E2DED7] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F7F5F0] text-[#14243A] hover:bg-[#14243A] hover:text-white transition-colors"
              aria-label="Close Specifications"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pr-12">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#F07860] font-bold">
                <span>{selectedService.num}</span>
                <span>&bull;</span>
                <span>ENGINEERING CAPABILITY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#14243A]">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-sm text-[#777D87] leading-relaxed mb-6 font-sans">
              {selectedService.shortDesc}
            </p>

            {/* Core Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F07860] font-semibold mb-3">
                ARCHITECTURAL CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#E2DED7] text-xs text-[#14243A] flex items-start gap-2 font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F07860] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F07860] font-semibold mb-2.5">
                RECOMMENDED TECH STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-[#14243A] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Service CTA */}
            <div className="pt-6 border-t border-[#E2DED7] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#777D87]">
                Direct advisory available with Mr. Arpit Jain
              </div>
              <button
                onClick={() => {
                  setSelectedService(null);
                  setFormData((prev) => ({ ...prev, service: selectedService.title }));
                  scrollToSection("contact");
                }}
                className="px-6 py-3 rounded-full bg-[#F07860] hover:bg-[#E0634A] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_4px_14px_rgba(240,120,96,0.35)]"
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
