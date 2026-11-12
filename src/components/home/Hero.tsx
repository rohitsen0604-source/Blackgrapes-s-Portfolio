"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Layers,
  ChevronDown,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-24">
      {/* Background Grape-Luminescent Atmosphere */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-rich/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-grape/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-electric/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(248, 246, 250, 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Enterprise Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-electric/30 mb-8 shadow-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-electric opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-electric"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-soft-white">
            Engineering Next-Generation Digital Experiences
          </span>
          <span className="text-xs bg-purple-rich/50 text-purple-electric px-2 py-0.5 rounded-full font-medium hidden sm:inline">
            Indore &bull; Global Delivery
          </span>
        </motion.div>

        {/* Primary Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-soft-white mb-6"
        >
          Innovate. <span className="text-gradient">Integrate.</span> Elevate.
        </motion.h1>

        {/* Supporting Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-purple-accent/90 max-w-4xl mx-auto mb-6 tracking-normal"
        >
          {COMPANY_DETAILS.subTagline}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-muted-grey max-w-3xl mx-auto leading-relaxed mb-10"
        >
          {COMPANY_DETAILS.description}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-soft-white bg-gradient-to-r from-purple-rich via-purple-electric to-purple-rich bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-xl shadow-purple-900/50 hover:shadow-purple-electric/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-soft-white glass-panel border border-purple-electric/30 hover:border-purple-electric hover:bg-grape/40 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Explore Our Services</span>
          </Link>

          <a
            href={COMPANY_DETAILS.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-medium text-green-300 border border-green-500/40 bg-green-950/30 hover:bg-green-900/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Abstract 3D Grape-Inspired Visual Cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl p-6 sm:p-10 glass-panel border border-purple-electric/25 shadow-2xl shadow-purple-950/80 overflow-hidden">
            {/* Background Internal Gradient Flow */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-rich/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-electric/20 rounded-full blur-3xl pointer-events-none" />

            {/* Geometric / Grape Molecular Constellation Display */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {COMPANY_DETAILS.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-obsidian-200/80 border border-purple-electric/15 hover:border-purple-electric/40 transition-all duration-300 group"
                >
                  <div className="text-2xl sm:text-4xl font-extrabold text-soft-white group-hover:text-purple-electric transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-grey mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Highlights Bar */}
            <div className="mt-8 pt-6 border-t border-purple-900/30 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-light">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-electric" />
                Custom Software & Mobile Architecture
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-electric" />
                Government & Private Tender Compliance
              </span>
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-electric" />
                Ready-Made Enterprise MLM & CRM Platforms
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#intro"
            className="flex flex-col items-center text-xs text-muted-grey hover:text-purple-electric transition-colors animate-bounce"
          >
            <span>Discover More</span>
            <ChevronDown className="w-4 h-4 mt-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
