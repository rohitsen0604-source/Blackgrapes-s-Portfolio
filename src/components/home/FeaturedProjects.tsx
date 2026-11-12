"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, Smartphone, Globe, ShieldCheck } from "lucide-react";
import { PROJECTS } from "@/data/company";

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Web Development",
    "Mobile Application",
    "E-Commerce",
    "Enterprise Solution",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-rich/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
              Featured Client <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-grey text-base mt-2 max-w-xl">
              Authentic software architectures and digital platforms deployed for real companies across web and mobile.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel border border-purple-electric/30 hover:border-purple-electric text-sm font-semibold text-soft-white transition-all hover:bg-grape/40 shrink-0 self-start md:self-auto"
          >
            <span>View All 12 Projects</span>
            <ArrowUpRight className="w-4 h-4 text-purple-electric" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-purple-electric text-obsidian shadow-lg shadow-purple-electric/30 font-bold"
                  : "glass-panel text-muted-light hover:text-soft-white hover:border-purple-electric/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/70 hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Preview */}
                <div className="relative h-56 w-full overflow-hidden bg-obsidian-200">
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
                    <span>Verified Client Work</span>
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
                  <span>Read Case Study</span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
