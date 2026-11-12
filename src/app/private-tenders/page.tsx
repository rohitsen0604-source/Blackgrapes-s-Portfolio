import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Private Tender Services | Black Grapes Softech",
  description:
    "Winning private corporate tender proposals, commercial RFP/RFQ bidding, compliance management, and strategic contract negotiation advisory.",
};

export default function PrivateTendersPage() {
  const privatePillars = [
    {
      title: "Private Opportunity Identification",
      desc: "Scouring industry networks, closed corporate tenders, and RFP opportunities relevant to your domain to ensure no commercial bid is missed.",
      icon: Briefcase,
    },
    {
      title: "Customized Commercial Proposals",
      desc: "Crafting winning, differentiated proposals that showcase your unique value proposition, clear ROI models, and technical superiority.",
      icon: FileCheck,
    },
    {
      title: "Commercial & SLA Compliance",
      desc: "Meticulous review of corporate RFP documentation, Master Service Agreements (MSAs), liability limits, and performance milestones.",
      icon: ShieldCheck,
    },
    {
      title: "Contract Negotiation Strategy",
      desc: "Experienced advisory during final shortlisting rounds to secure favorable commercial margins, payment terms, and scope definitions.",
      icon: Handshake,
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
            <Briefcase className="w-3.5 h-3.5" />
            Corporate Procurement &amp; RFP Advisory
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Private Tender <span className="text-gradient">Consulting Services</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Securing lucrative corporate enterprise contracts requires more than generic sales decks. We engineer winning, highly-differentiated proposals and manage the entire private bidding process.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {privatePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/25 hover:border-purple-electric/50 transition-all duration-300 space-y-4 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-soft-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-grey leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why Black Grapes */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/30 mb-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-soft-white mb-4">
            Maximized Win Rates with Tailored Strategy
          </h3>
          <p className="text-sm text-muted-grey leading-relaxed mb-6">
            Our multi-disciplinary team combines technical architects, financial modelers, and contract experts who ensure your corporate proposals stand out against the competition.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold shadow-lg shadow-purple-900/40 hover:opacity-95 transition-all"
          >
            <span>Inquire About Private Tender Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
