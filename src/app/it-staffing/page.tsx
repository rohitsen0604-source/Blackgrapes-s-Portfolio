import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Users2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Globe2,
  Code2,
  Layers,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "IT Staffing & Talent Augmentation | Black Grapes Softech",
  description:
    "Hire pre-vetted dedicated developers, full-stack engineers, and dedicated agile squads from Black Grapes Softech. Seamless team extension with zero hiring friction.",
};

export default function ITStaffingPage() {
  const engagementModels = [
    {
      title: "Dedicated Developers",
      desc: "Full-time software engineers working exclusively on your product under your direct engineering leadership and sprint rituals.",
      benefits: ["160 Hours/Month Dedicated", "Direct Slack / Teams Integration", "Daily Standups & Git Commits", "Flexible Monthly Contracts"],
      badge: "Most Popular",
    },
    {
      title: "Team Augmentation",
      desc: "Instantly inject specialized skills (e.g. Flutter mobile, Next.js architect, or Cloud DevOps) into your existing development team.",
      benefits: ["Scale Up or Down with 2 Weeks Notice", "No Recruitment Overhead", "Zero Infrastructure Costs", "Immediate Productivity"],
      badge: "Agile Scale",
    },
    {
      title: "Full Project Squads",
      desc: "Complete cross-functional teams including Product Manager, UI Designer, Full-Stack Engineers, and QA Lead to deliver entire milestones.",
      benefits: ["Autonomous Execution", "Milestone-Driven Deliveries", "End-to-End Ownership", "Guaranteed SLAs"],
      badge: "Turnkey Squad",
    },
  ];

  const talentCategories = [
    {
      category: "Frontend Engineers",
      skills: ["React.js", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
    },
    {
      category: "Backend Architects",
      skills: ["Node.js", "Python / Django", "PHP / Laravel", "Java / Spring", "PostgreSQL"],
    },
    {
      category: "Mobile Specialists",
      skills: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)"],
    },
    {
      category: "Quality & DevOps",
      skills: ["Automated QA", "Manual Testing", "AWS Cloud", "Docker", "CI/CD"],
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
            <Users2 className="w-3.5 h-3.5" />
            Global Talent Augmentation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Scale Your Engineering with <span className="text-gradient">Top 3% Talent</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Eliminate lengthy recruitment cycles. Hire experienced, pre-vetted software developers and dedicated squads from Black Grapes Softech in Indore, India.
          </p>
        </div>

        {/* Engagement Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {engagementModels.map((model, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-panel border border-purple-electric/25 hover:border-purple-electric/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-950/70"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-electric bg-purple-rich/20 px-2.5 py-1 rounded-full border border-purple-electric/30 inline-block mb-4">
                  {model.badge}
                </span>
                <h3 className="text-2xl font-bold text-soft-white mb-3">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-grey leading-relaxed mb-6">
                  {model.desc}
                </p>

                <div className="space-y-2.5 border-t border-purple-900/30 pt-4">
                  {model.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-muted-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-electric shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md"
                >
                  <span>Hire {model.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Talent Skill Matrix */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/30 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-soft-white">
              Talent Pool Across Modern Stacks
            </h2>
            <p className="text-xs sm:text-sm text-muted-grey mt-2">
              Our engineers possess verified track records in enterprise systems and scalable products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-obsidian-100 border border-purple-electric/20"
              >
                <h4 className="text-base font-bold text-soft-white mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-purple-electric" />
                  {cat.category}
                </h4>
                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-grape/60 text-xs font-medium text-muted-light border border-purple-electric/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Black Grapes Staffing */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 text-center">
          <div className="p-6 rounded-2xl glass-panel border border-purple-electric/20">
            <Clock className="w-8 h-8 text-purple-electric mx-auto mb-3" />
            <h4 className="text-lg font-bold text-soft-white">48-Hour Onboarding</h4>
            <p className="text-xs text-muted-grey mt-1">
              Review curated CVs and interview pre-screened developers within 48 business hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-purple-electric/20">
            <Globe2 className="w-8 h-8 text-purple-electric mx-auto mb-3" />
            <h4 className="text-lg font-bold text-soft-white">Timezone Alignment</h4>
            <p className="text-xs text-muted-grey mt-1">
              Engineers accommodate your primary working hours with at least 4 hours daily synchronous overlap.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-purple-electric/20">
            <ShieldCheck className="w-8 h-8 text-purple-electric mx-auto mb-3" />
            <h4 className="text-lg font-bold text-soft-white">Risk-Free Trial</h4>
            <p className="text-xs text-muted-grey mt-1">
              Work with your selected developer for 1 week. If not completely satisfied, pay nothing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
