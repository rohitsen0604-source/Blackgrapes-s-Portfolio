import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Building2,
} from "lucide-react";
import { INDUSTRIES } from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const metadata: Metadata = {
  title: "Industries We Serve | Black Grapes Softech",
  description:
    "Discover how Black Grapes Softech delivers custom digital solutions tailored to Healthcare, Real Estate, Transportation, E-commerce, EdTech, and more.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Tailored Industry Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Empowering Modern <span className="text-gradient">Industries</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Every vertical presents distinct workflow complexities, compliance mandates, and customer expectations. We engineer specialized software tailored to industry realities.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/25 hover:border-purple-electric/50 transition-all duration-300 space-y-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40">
                    <DynamicIcon name={ind.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-grape/80 text-purple-electric border border-purple-electric/20 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {ind.metrics}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-soft-white">
                  {ind.title}
                </h2>

                <p className="text-sm text-muted-grey leading-relaxed mt-2">
                  {ind.description}
                </p>

                <div className="mt-5 pt-4 border-t border-purple-900/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-electric block mb-3">
                    Specialized Architectures
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ind.useCases.map((uc, uIdx) => (
                      <div key={uIdx} className="flex items-center gap-2 text-xs text-muted-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-electric shrink-0" />
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-900/20">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-electric hover:underline"
                >
                  <span>Consult an Industry Architect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
