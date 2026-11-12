"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  ArrowRight,
  Shield,
  Zap,
  CheckCircle2,
  Users,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const CompanyIntro: React.FC = () => {
  return (
    <section id="intro" className="py-24 relative overflow-hidden bg-obsidian-200/50">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-rich/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30">
              <Compass className="w-3.5 h-3.5" />
              About Black Grapes Softech
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight leading-tight">
              Empowering Tomorrow Through{" "}
              <span className="text-gradient">Innovative Code.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
              At Black Grapes Softech, we do not just write code; we build the digital foundation for a smarter, faster, and more connected world. Headquartered in Indore, Madhya Pradesh, we serve a global clientele with enterprise-grade web applications, mobile platforms, and automated business software.
            </p>

            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              Whether architecting mission-critical CRM solutions, custom MLM calculation engines, or high-scale mobile apps with hundreds of thousands of users, our engineering ethos combines architectural precision with elegant user design.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl glass-panel border border-purple-electric/20 hover:border-purple-electric/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-grape flex items-center justify-center text-purple-electric mb-3 border border-purple-electric/30">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-soft-white mb-2">Our Vision</h3>
                <p className="text-xs text-muted-grey leading-relaxed">
                  {COMPANY_DETAILS.vision}
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-purple-electric/20 hover:border-purple-electric/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-grape flex items-center justify-center text-purple-electric mb-3 border border-purple-electric/30">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-soft-white mb-2">Our Mission</h3>
                <p className="text-xs text-muted-grey leading-relaxed">
                  {COMPANY_DETAILS.mission}
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-soft-white bg-grape border border-purple-electric/30 hover:border-purple-electric hover:bg-purple-rich/40 transition-all duration-300"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 text-purple-electric" />
              </Link>
              <Link
                href="/partnership"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-muted-light hover:text-purple-electric transition-colors"
              >
                <span>Explore Partnership Models &rarr;</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Storytelling & Enterprise Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-electric/30 p-2 shadow-2xl shadow-purple-950/60">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-obsidian-100">
                <Image
                  src="/assets/services-infograph.png"
                  alt="Black Grapes Softech Architecture"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-semibold text-purple-electric uppercase tracking-wider mb-1">
                    Engineering Excellence
                  </div>
                  <div className="text-lg font-bold text-soft-white">
                    Integrated Software Life Cycle
                  </div>
                  <p className="text-xs text-muted-grey mt-1">
                    From requirement gathering and system architecture to cloud deployment and 24/7 SLA maintenance.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Metric Pill */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 p-4 rounded-2xl glass-panel border border-purple-electric/40 bg-obsidian-100/90 shadow-2xl flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-rich/50 flex items-center justify-center text-purple-electric shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-soft-white">Verified Standards</div>
                <div className="text-xs text-muted-grey">Adherence to strict quality & security benchmarks</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
