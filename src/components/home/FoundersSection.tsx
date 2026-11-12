"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Sparkles, Quote } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const FoundersSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-obsidian-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-electric/30 p-2 shadow-2xl shadow-purple-950/70">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-obsidian-100">
                <Image
                  src="/assets/the-founders.jpeg"
                  alt="Mr. Arpit Jain & Mrs. Deepika Jain - Founders of Black Grapes Softech"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-bold text-purple-electric uppercase tracking-wider mb-1">
                    Executive Leadership
                  </div>
                  <div className="text-lg font-bold text-soft-white">
                    Mr. Arpit Jain & Mrs. Deepika Jain
                  </div>
                  <div className="text-xs text-muted-grey">
                    Founders, Black Grapes Softech
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Quote Badge */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-purple-rich/80 border border-purple-electric/40 backdrop-blur-md flex items-center justify-center text-soft-white shadow-xl">
              <Quote className="w-5 h-5 text-purple-accent" />
            </div>
          </motion.div>

          {/* Right Column: Founder Profiles & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Visionary Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
                Meet the <span className="text-gradient">Founders</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-grey mt-4 leading-relaxed">
                Behind Black Grapes Softech stand two visionary leaders with an unquenchable passion for digital innovation, customer success, and architectural craftsmanship.
              </p>
            </div>

            <div className="space-y-6">
              {COMPANY_DETAILS.founders.map((founder, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-purple-electric/20 hover:border-purple-electric/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-soft-white">
                      {founder.name}
                    </h3>
                    <span className="text-xs font-semibold text-purple-electric bg-grape/80 px-3 py-1 rounded-full border border-purple-electric/20">
                      {founder.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-grey leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-muted-light">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-purple-electric" />
                Over 12 Years Building Enterprise Software
              </span>
              <span>•</span>
              <span>Based in Indore, MP, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
