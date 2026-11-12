import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Scale,
  Award,
  Clock,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Government Tender Services | Black Grapes Softech",
  description:
    "Expert government tender bidding, proposal development, documentation compliance, and bid management on GeM, Central and State e-procurement portals.",
};

export default function GovernmentTendersPage() {
  const tenderServices = [
    {
      title: "Tender Identification & Screening",
      desc: "Proactively track and filter relevant central, state government, defense, and PSU tender opportunities matching your company's core competencies.",
      icon: Search,
    },
    {
      title: "Bid Preparation & Proposal Writing",
      desc: "Draft comprehensive, technically compliant tender proposals, BOQs, methodology statements, and presentation decks strictly adhering to tender guidelines.",
      icon: FileText,
    },
    {
      title: "Documentation & Eligibility Audit",
      desc: "Thorough verification of mandatory certifications, financial audits, turnover compliance, EMD / Bank Guarantee requirements to ensure zero disqualifications.",
      icon: ShieldCheck,
    },
    {
      title: "Online Portal Bid Submission",
      desc: "Manage complete end-to-end electronic bid submission across GeM (Government e-Marketplace), CPP Portal, and specialized departmental e-procurement systems.",
      icon: Scale,
    },
    {
      title: "Post-Tender Advisory & Contract Support",
      desc: "Support during technical evaluation rounds, pre-bid clarification queries, reverse auction participation, and contract signing assistance.",
      icon: Award,
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
            <FileText className="w-3.5 h-3.5" />
            Public Sector Procurement Division
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Government Tender <span className="text-gradient">Advisory Services</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Navigating public sector procurement requires rigorous attention to documentation, eligibility criteria, and strict deadlines. Black Grapes Softech provides end-to-end tender consulting for successful government contract bids.
          </p>
        </div>

        {/* Process Cards */}
        <div className="space-y-6 mb-20">
          {tenderServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-panel border border-purple-electric/25 hover:border-purple-electric/50 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-purple-electric uppercase tracking-wider">
                      Phase 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-soft-white mt-0.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-grey mt-1.5 max-w-2xl leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-rich/20 text-purple-accent border border-purple-electric/30 font-medium">
                    Compliant Execution
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Black Grapes for Tenders */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/30 bg-gradient-to-r from-grape/20 via-obsidian-100 to-grape/20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-purple-electric font-bold block mb-2">
                Proven Track Record
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-soft-white mb-4">
                Why Partner With Us For Tender Bids?
              </h3>
              <p className="text-sm text-muted-grey leading-relaxed">
                Tender bids often get rejected due to minute technical non-compliances, missing supporting affidavits, or incorrect financial formats. Our dedicated procurement advisory team in Indore ensures every submission is 100% compliant and competitively positioned.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-light">
                  <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0" />
                  <span>Deep familiarity with GeM, CPP Portal & State e-Procurement Systems</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-light">
                  <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0" />
                  <span>Strict confidentiality and non-disclosure compliance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-light">
                  <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0" />
                  <span>Comprehensive checklist audits before final encrypted submission</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-100 border border-purple-electric/25 space-y-4 text-center">
              <h4 className="text-lg font-bold text-soft-white">
                Have a Target Tender to Bid On?
              </h4>
              <p className="text-xs text-muted-grey">
                Send us the Tender ID / RFP document for a complimentary eligibility &amp; compliance review.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>Submit Tender for Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
