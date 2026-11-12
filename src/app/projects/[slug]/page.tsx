import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";
import { PROJECTS, COMPANY_DETAILS } from "@/data/company";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Case Study | Black Grapes Softech" };

  return {
    title: `${project.title} Case Study | Black Grapes Softech`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-light hover:text-purple-electric transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-950/70 text-green-300 border border-green-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
              Verified Client Project
            </span>
            <span className="text-xs text-muted-grey font-medium">
              Platform: {project.platform}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-purple-accent/90 font-medium leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Visual Banner */}
        <div className="relative h-72 sm:h-[450px] w-full rounded-3xl overflow-hidden glass-panel border border-purple-electric/30 mb-16 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />

          {project.liveUrl && (
            <div className="absolute bottom-6 right-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-obsidian-950/80 backdrop-blur-md border border-purple-electric/40 text-soft-white hover:text-purple-electric text-xs font-semibold flex items-center gap-2 shadow-xl"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Narrative Split: Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl glass-panel border border-purple-electric/25 space-y-4">
            <h2 className="text-2xl font-bold text-soft-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-electric" />
              The Architectural Challenge
            </h2>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-purple-electric/25 space-y-4">
            <h2 className="text-2xl font-bold text-soft-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-electric" />
              Our Engineering Solution
            </h2>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Quantifiable Results */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-r from-grape/20 via-obsidian-100 to-grape/20 mb-16">
          <h3 className="text-xl font-bold text-soft-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-electric" />
            Key Outcomes &amp; Measurable Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-obsidian-100 border border-purple-electric/20"
              >
                <CheckCircle2 className="w-5 h-5 text-purple-electric mb-3" />
                <p className="text-sm font-semibold text-soft-white leading-relaxed">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used & Client Verification */}
        <div className="p-8 rounded-3xl glass-panel border border-purple-electric/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-wider text-purple-electric font-semibold mb-2">
              Client &bull; Technology Stack
            </div>
            <div className="text-lg font-bold text-soft-white">
              Client: {project.client}
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-grape text-xs font-medium text-purple-accent border border-purple-electric/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold shadow-lg shadow-purple-900/40 hover:opacity-95 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Discuss a Similar Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
