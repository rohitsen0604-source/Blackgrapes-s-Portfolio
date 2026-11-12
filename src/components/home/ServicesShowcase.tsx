"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const ServicesShowcase: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Engineering", "Design", "Growth"];

  const filteredServices =
    filter === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === filter);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-rich/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
            Our Enterprise <span className="text-gradient">Service Portfolio</span>
          </h2>
          <p className="text-muted-grey text-base sm:text-lg mt-4 leading-relaxed">
            Delivering full-cycle digital innovation from architecture and code to market visibility and enterprise compliance.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? "bg-purple-electric text-obsidian shadow-lg shadow-purple-electric/30 font-bold"
                    : "glass-panel text-muted-light hover:text-soft-white hover:border-purple-electric/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/70 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-obsidian-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/50 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-obsidian-950/80 text-purple-electric border border-purple-electric/30 backdrop-blur-md">
                    {service.category}
                  </span>

                  {/* Icon Emblem */}
                  <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-purple-rich/80 backdrop-blur-md border border-purple-electric/40 flex items-center justify-center text-soft-white shadow-lg">
                    <DynamicIcon name={service.icon} className="w-5 h-5 text-soft-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-soft-white group-hover:text-purple-electric transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-grey mt-2.5 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Key Features Preview */}
                  <div className="mt-4 pt-4 border-t border-purple-900/30 space-y-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-muted-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-electric shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full py-3 rounded-xl glass-panel border border-purple-electric/25 group-hover:border-purple-electric group-hover:bg-purple-rich/20 text-xs sm:text-sm font-semibold text-soft-white flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 text-purple-electric group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Services Callout: Tenders & Staffing */}
        <div className="mt-16 p-8 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-r from-grape/30 via-obsidian-100 to-grape/30 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <span className="text-xs uppercase tracking-wider text-purple-electric font-bold">
              Specialized Business Divisions
            </span>
            <h3 className="text-xl font-bold text-soft-white mt-1">
              Government Tenders, Private Bidding & IT Staffing
            </h3>
            <p className="text-xs sm:text-sm text-muted-grey mt-2">
              Beyond software, we provide tender discovery, RFP drafting, technical compliance management, and talent augmentation for organizations worldwide.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5">
            <Link
              href="/government-tenders"
              className="px-4 py-2.5 rounded-xl bg-grape text-xs font-semibold text-soft-white hover:bg-purple-rich transition-colors text-center border border-purple-electric/30"
            >
              Government Tender Services &rarr;
            </Link>
            <Link
              href="/it-staffing"
              className="px-4 py-2.5 rounded-xl bg-obsidian-200 text-xs font-semibold text-soft-white hover:bg-grape transition-colors text-center border border-purple-electric/20"
            >
              IT Staffing Solutions &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
