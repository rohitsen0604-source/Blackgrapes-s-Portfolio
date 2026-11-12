"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Globe,
  Smartphone,
  Search,
} from "lucide-react";
import { PROJECTS } from "@/data/company";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Web Development",
    "Mobile Application",
    "E-Commerce",
    "Enterprise Solution",
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Engineering &amp; <span className="text-gradient">Client Showcase</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Explore authentic digital solutions delivered for international enterprises, mobile application startups, and established brands.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-purple-electric text-obsidian shadow-lg shadow-purple-electric/30 font-bold"
                    : "glass-panel text-muted-light hover:text-soft-white hover:border-purple-electric/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-purple-electric absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric text-xs text-soft-white placeholder-muted-dark outline-none"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/70 hover:-translate-y-1"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-60 w-full overflow-hidden bg-obsidian-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

                  {/* Platform Indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-obsidian-950/85 backdrop-blur-md text-soft-white border border-purple-electric/30">
                    {project.platform === "Web" ? (
                      <Globe className="w-3.5 h-3.5 text-purple-electric" />
                    ) : (
                      <Smartphone className="w-3.5 h-3.5 text-purple-electric" />
                    )}
                    <span>{project.platform}</span>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-950/80 text-green-300 border border-green-500/40 backdrop-blur-md">
                    <ShieldCheck className="w-3 h-3 text-green-400" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Content */}
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

                  {/* Tech Tags */}
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
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 py-2.5 rounded-xl glass-panel border border-purple-electric/25 group-hover:border-purple-electric group-hover:bg-purple-rich/20 text-xs font-semibold text-soft-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Detailed Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-electric" />
                </Link>

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
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-3xl glass-panel border border-purple-electric/30 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-soft-white mb-2">
            Have a project with similar requirements?
          </h3>
          <p className="text-xs text-muted-grey mb-6">
            Our engineering teams specialize in taking complex challenges and turning them into seamless user experiences.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold"
          >
            <span>Discuss Your Project Architecture</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
