import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  HeartHandshake,
  Cpu,
  Mail,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Careers | Black Grapes Softech",
  description:
    "Join the engineering team at Black Grapes Softech in Indore. Explore open opportunities for software engineers, mobile developers, and UI/UX designers.",
};

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full Stack Next.js & Node Developer",
      department: "Web Engineering",
      location: "Indore (Hybrid / Onsite)",
      type: "Full-Time",
      experience: "3-6 Years",
      skills: ["Next.js (App Router)", "TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "Mobile Application Developer (Flutter & React Native)",
      department: "Mobile Engineering",
      location: "Indore (Hybrid / Onsite)",
      type: "Full-Time",
      experience: "2-5 Years",
      skills: ["Flutter", "Dart", "React Native", "State Management (Bloc/Riverpod)", "REST APIs"],
    },
    {
      title: "Backend & Systems Architect (Python / PHP / Node)",
      department: "Core Systems",
      location: "Indore (Onsite)",
      type: "Full-Time",
      experience: "3-7 Years",
      skills: ["Node.js", "Python / Django", "PHP / Laravel", "Redis", "Database Optimization", "AWS"],
    },
    {
      title: "Senior UI/UX & Visual Brand Designer",
      department: "Product Design",
      location: "Indore (Hybrid)",
      type: "Full-Time",
      experience: "2-5 Years",
      skills: ["Figma", "Design Systems", "Prototyping", "Adobe Creative Suite", "Mobile UX"],
    },
    {
      title: "Quality Assurance & Test Automation Engineer",
      department: "Quality Engineering",
      location: "Indore (Onsite)",
      type: "Full-Time",
      experience: "2-4 Years",
      skills: ["API Testing", "Selenium / Playwright", "Manual Testing", "Jira", "Performance Benchmarks"],
    },
    {
      title: "Tender Bid & Business Development Executive",
      department: "Procurement & Growth",
      location: "Indore (Onsite)",
      type: "Full-Time",
      experience: "1-4 Years",
      skills: ["GeM Portal", "CPP Portal", "RFP Analysis", "Technical Documentation", "Client Communication"],
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
            We Are Hiring
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Build the Future With <span className="text-gradient">Black Grapes</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Join a culture that champions engineering craft, continuous technical learning, and direct mentorship under experienced software founders.
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-3xl glass-panel border border-purple-electric/25">
            <Cpu className="w-8 h-8 text-purple-electric mb-4" />
            <h3 className="text-lg font-bold text-soft-white mb-2">Modern Stacks &amp; Clean Architecture</h3>
            <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
              Work with Next.js App Router, TypeScript, Flutter, Docker, and modern cloud primitives. We avoid obsolete legacy bloat.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-purple-electric/25">
            <HeartHandshake className="w-8 h-8 text-purple-electric mb-4" />
            <h3 className="text-lg font-bold text-soft-white mb-2">Founder Mentorship &amp; Growth</h3>
            <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
              Collaborate closely with technical leadership. Your technical contributions are recognized, rewarded, and directly impact client successes.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-purple-electric/25">
            <Sparkles className="w-8 h-8 text-purple-electric mb-4" />
            <h3 className="text-lg font-bold text-soft-white mb-2">Work-Life Harmony in Indore</h3>
            <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
              Based in Vijaynagar, Indore—India&apos;s cleanest city. Enjoy collaborative office camaraderie with flexible hybrid work policies.
            </p>
          </div>
        </div>

        {/* Open Roles List */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
            <h2 className="text-2xl font-bold text-soft-white">
              Open Positions ({openPositions.length})
            </h2>
            <span className="text-xs text-muted-grey">
              Indore HQ &bull; Full-Time Positions
            </span>
          </div>

          {openPositions.map((role, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-panel border border-purple-electric/20 hover:border-purple-electric/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-rich/20 text-purple-electric border border-purple-electric/30">
                    {role.department}
                  </span>
                  <span className="text-xs text-muted-grey flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-electric" /> {role.location}
                  </span>
                  <span className="text-xs text-muted-grey flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-purple-electric" /> {role.experience}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-soft-white">
                  {role.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {role.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-grape/60 text-muted-light border border-purple-electric/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}?subject=Application for ${encodeURIComponent(role.title)}&body=Hi Black Grapes Softech Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(role.title)} position.%0D%0A%0D%0APlease find my resume attached.`}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold flex items-center gap-2 hover:opacity-95 transition-all shadow-md"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Resume Submission */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/30 text-center max-w-2xl mx-auto space-y-4">
          <Mail className="w-8 h-8 text-purple-electric mx-auto" />
          <h3 className="text-xl font-bold text-soft-white">
            Don&apos;t see your exact role listed?
          </h3>
          <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
            We are always seeking passionate engineers, creative designers, and problem solvers. Send your CV and portfolio directly to our leadership team.
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${COMPANY_DETAILS.contact.directorEmail}?subject=General Application - Black Grapes Softech`}
              className="text-sm font-semibold text-purple-electric hover:underline"
            >
              {COMPANY_DETAILS.contact.directorEmail} &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
