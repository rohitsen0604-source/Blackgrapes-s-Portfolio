"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-obsidian-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Domain Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
            Industries We <span className="text-gradient">Empower</span>
          </h2>
          <p className="text-muted-grey text-base sm:text-lg mt-4 leading-relaxed">
            Tailoring architecture, regulatory compliance, and user flows to the specific dynamics of critical industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/60 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-grape/80 border border-purple-electric/30 flex items-center justify-center text-purple-electric mb-5 group-hover:bg-purple-rich group-hover:text-soft-white transition-all shadow-md">
                  <DynamicIcon name={ind.icon} className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-soft-white group-hover:text-purple-electric transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-grey mt-2.5 leading-relaxed">
                  {ind.description}
                </p>

                <div className="mt-4 pt-4 border-t border-purple-900/30">
                  <span className="text-[11px] uppercase tracking-wider text-purple-electric font-semibold block mb-2">
                    Key Implementations
                  </span>
                  <ul className="space-y-1">
                    {ind.useCases.slice(0, 3).map((uc, uIdx) => (
                      <li key={uIdx} className="text-xs text-muted-light flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-purple-electric"></span>
                        <span className="line-clamp-1">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-purple-900/20 text-[11px] font-medium text-purple-accent">
                {ind.metrics}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-electric hover:underline"
          >
            <span>Explore All Industry Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
