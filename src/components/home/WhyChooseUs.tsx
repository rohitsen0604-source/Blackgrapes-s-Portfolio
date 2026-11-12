"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-rich/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Our Core Principles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight">
            Why Partner With <span className="text-gradient">Black Grapes Softech</span>
          </h2>
          <p className="text-muted-grey text-base sm:text-lg mt-4 leading-relaxed">
            We operate with transparency, engineering rigor, and a deep commitment to delivering tangible business value on every sprint.
          </p>
        </div>

        {/* 6 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="p-8 rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/60 group hover:-translate-y-1.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-grape/80 border border-purple-electric/30 flex items-center justify-center text-purple-electric mb-6 group-hover:bg-purple-rich group-hover:text-soft-white transition-all shadow-md">
                <DynamicIcon name={item.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-soft-white group-hover:text-purple-electric transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-grey leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
