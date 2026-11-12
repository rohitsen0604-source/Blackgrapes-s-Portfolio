import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Layers, Cpu, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const metadata: Metadata = {
  title: "Engineering Services | Black Grapes Softech",
  description:
    "Explore our complete range of enterprise software development, mobile apps, web development, custom CRM, MLM platforms, game development, and digital marketing services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Full-Cycle Technology Offerings
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Services Engineered for <span className="text-gradient">Scale & Impact</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            From bespoke software architectures and high-traffic mobile apps to specialized MLM engines and government tender compliance, we solve complex technical challenges with precision.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 mb-20">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              id={service.slug}
              className={`p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/25 hover:border-purple-electric/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? "bg-obsidian-200/50" : ""
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-purple-electric/30 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-obsidian-950/80 text-purple-electric border border-purple-electric/30 backdrop-blur-md">
                    {service.category}
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40">
                    <DynamicIcon name={service.icon} className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-soft-white">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Features Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-muted-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-electric shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {service.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-grape/80 text-purple-accent border border-purple-electric/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold hover:opacity-95 transition-all"
                  >
                    <span>Full Service Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-purple-electric hover:underline"
                  >
                    Request Estimate &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Advisory Divisions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl glass-panel border border-purple-electric/20">
            <h3 className="text-lg font-bold text-soft-white mb-2">Government Tenders</h3>
            <p className="text-xs text-muted-grey mb-4">
              End-to-end identification, documentation compliance, and bid submission management for government procurement.
            </p>
            <Link href="/government-tenders" className="text-xs font-semibold text-purple-electric hover:underline">
              Learn More &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-purple-electric/20">
            <h3 className="text-lg font-bold text-soft-white mb-2">Private Tender Consulting</h3>
            <p className="text-xs text-muted-grey mb-4">
              Strategic RFP/RFQ response drafting, compliance checks, and negotiation advisory for private commercial bids.
            </p>
            <Link href="/private-tenders" className="text-xs font-semibold text-purple-electric hover:underline">
              Learn More &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-purple-electric/20">
            <h3 className="text-lg font-bold text-soft-white mb-2">IT Staffing Solutions</h3>
            <p className="text-xs text-muted-grey mb-4">
              Pre-vetted frontend, backend, mobile, and QA engineers available for dedicated or team augmentation models.
            </p>
            <Link href="/it-staffing" className="text-xs font-semibold text-purple-electric hover:underline">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
