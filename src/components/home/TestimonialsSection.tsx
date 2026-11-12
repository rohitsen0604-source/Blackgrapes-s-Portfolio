"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, MessageSquare, ShieldCheck, Building2 } from "lucide-react";
import { TESTIMONIALS, COMPANY_DETAILS } from "@/data/company";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-purple-rich/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
            Trusted by Leaders <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-muted-grey text-base sm:text-lg mt-4 leading-relaxed">
            Authentic feedback from enterprise founders, engineering leads, and brand directors who rely on our software platforms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 transition-all duration-300 relative flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-950/60"
            >
              <div>
                <Quote className="w-8 h-8 text-purple-electric/40 mb-4" />
                <p className="text-base sm:text-lg text-soft-white italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-900/30 flex items-center justify-between">
                <div>
                  <div className="font-bold text-soft-white text-base">
                    {t.author}
                  </div>
                  <div className="text-xs text-purple-electric font-medium">
                    {t.company} &bull; {t.location}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-grape/80 text-muted-light border border-purple-electric/20">
                    {t.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Enterprise Clients Showcase */}
        <div className="p-8 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-b from-grape/20 to-obsidian-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-900/40 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-electric">
                <ShieldCheck className="w-4 h-4" />
                Verified Corporate Client Engagements
              </div>
              <p className="text-xs text-muted-grey mt-1">
                Organizations, scale-ups, and technology agencies we have collaborated with.
              </p>
            </div>
            <span className="text-xs text-muted-light font-medium">
              35+ Enterprise Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {COMPANY_DETAILS.verifiedClients.map((client, cIdx) => (
              <div
                key={cIdx}
                className="py-3 px-4 rounded-xl bg-obsidian-100/80 border border-purple-electric/15 hover:border-purple-electric/40 transition-colors flex items-center justify-center gap-2 group"
              >
                <Building2 className="w-3.5 h-3.5 text-purple-electric/60 group-hover:text-purple-electric transition-colors shrink-0" />
                <span className="text-xs font-semibold text-muted-light group-hover:text-soft-white transition-colors truncate">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
