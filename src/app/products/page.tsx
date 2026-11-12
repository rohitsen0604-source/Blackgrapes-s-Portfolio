import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Box,
} from "lucide-react";
import { PRODUCTS, COMPANY_DETAILS } from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const metadata: Metadata = {
  title: "Enterprise Software Products | Black Grapes Softech",
  description:
    "Explore our ready-made enterprise software products: MLM Software, Real Estate Management ERP, Multi-Vendor E-Commerce, and Campus ERP.",
};

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Box className="w-3.5 h-3.5" />
            Proprietary Enterprise Platforms
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Ready-Made &amp; Scalable <span className="text-gradient">Software Products</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Accelerate your time-to-market with our pre-architected, production-tested software engines. Fully customizable to your organization&apos;s business rules and brand identity.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-12 mb-20">
          {PRODUCTS.map((prod, idx) => (
            <div
              key={prod.id}
              className={`p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/25 hover:border-purple-electric/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? "bg-obsidian-200/50" : ""
              }`}
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40">
                    <DynamicIcon name={prod.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-electric bg-purple-rich/20 px-2.5 py-0.5 rounded-full border border-purple-electric/30">
                      {prod.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-soft-white mt-1">
                      {prod.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-purple-accent/90 font-medium">
                  {prod.tagline}
                </p>

                <p className="text-sm text-muted-grey leading-relaxed">
                  {prod.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 pt-2">
                  {prod.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-light">
                      <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-muted-grey">
                  <strong>Ideal For:</strong> {prod.targetAudience}
                </div>
              </div>

              {/* Right Modules Card & Action */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-obsidian-100 border border-purple-electric/25 space-y-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-electric flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Included System Modules
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {prod.modules.map((mod, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-xl bg-grape/60 border border-purple-electric/20 text-xs font-semibold text-soft-white"
                      >
                        {mod}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-purple-900/30 space-y-3">
                    <Link
                      href="/contact"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md"
                    >
                      <span>Schedule Live Product Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={COMPANY_DETAILS.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl glass-panel text-green-400 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-green-950/30 transition-all border border-green-500/30"
                    >
                      <span>Inquire Pricing on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
