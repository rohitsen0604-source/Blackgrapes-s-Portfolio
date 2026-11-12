import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe,
  Building,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Partnership & Offshore Development Center | Black Grapes Softech",
  description:
    "Partner with Black Grapes Softech as your dedicated Indian Offshore Development Center (ODC). White-label software engineering for global IT agencies.",
};

export default function PartnershipPage() {
  const partnerBenefits = [
    {
      title: "Your Dedicated Development Centre in India",
      desc: "If you are an international IT or web development agency looking to expand operations in India, we act as your trusted, high-performance offshore engineering hub.",
    },
    {
      title: "100% White-Label Confidentiality",
      desc: "All client engagements and intellectual property belong entirely to you under strict non-disclosure agreements. We seamlessly operate under your agency brand.",
    },
    {
      title: "Cost Efficiency Without Quality Compromise",
      desc: "Achieve up to 60% operational cost savings while retaining senior architects, modern tech stacks, and disciplined agile delivery routines.",
    },
    {
      title: "Seamless Resource Sharing & Elastic Scale",
      desc: "Share our specialized talent across Next.js, mobile apps, CRM, MLM, and cloud engineering to instantly fulfill complex client demands.",
    },
  ];

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Handshake className="w-3.5 h-3.5" />
            Global Agency Collaboration
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Partner With <span className="text-gradient">Black Grapes Softech</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Expand your agency capabilities and margin efficiency. Establish your Offshore Development Center (ODC) with seasoned software leaders in Indore, India.
          </p>
        </div>

        {/* Core Narrative Card */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/30 bg-gradient-to-r from-grape/30 via-obsidian-100 to-grape/30 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-soft-white">
              Cultivating Long-Term Technology Alliances
            </h2>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              &ldquo;If you are an IT or web software development company and are eager to expand your operations here in India, we are ready to help you as your development centre. Our business community is focused on cultivating long-term relationships with our clients and offers excellent experiences covering strategic insights. Partnering with us enables you to provide endless growth and development. You can share our resources for your project requirements to work on technical areas that directly affect the growth of the organization.&rdquo;
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {partnerBenefits.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-panel border border-purple-electric/25 hover:border-purple-electric/50 transition-all duration-300 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40 mb-2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-soft-white">
                {item.title}
              </h3>
              <p className="text-sm text-muted-grey leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-obsidian-100 border border-purple-electric/20 text-center">
            <Globe className="w-8 h-8 text-purple-electric mx-auto mb-3" />
            <h4 className="text-base font-bold text-soft-white mb-1">Offshore Development Center (ODC)</h4>
            <p className="text-xs text-muted-grey">Your dedicated remote engineering office managed by our local technical directors.</p>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-100 border border-purple-electric/20 text-center">
            <Building className="w-8 h-8 text-purple-electric mx-auto mb-3" />
            <h4 className="text-base font-bold text-soft-white mb-1">Subcontracting &amp; Overflow</h4>
            <p className="text-xs text-muted-grey">Offload excess project workload during busy seasons with strict delivery deadlines.</p>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-100 border border-purple-electric/20 text-center">
            <Zap className="w-8 h-8 text-purple-electric mx-auto mb-3" />
            <h4 className="text-base font-bold text-soft-white mb-1">Referral &amp; Commission Partner</h4>
            <p className="text-xs text-muted-grey">Earn attractive recurring revenue shares by introducing qualified enterprise leads.</p>
          </div>
        </div>

        {/* Action */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:scale-105 transition-all"
          >
            <span>Initiate Partnership Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
