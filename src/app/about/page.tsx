import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  Zap,
  ShieldCheck,
  Award,
  Users,
  Code2,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Black Grapes Softech",
  description:
    "Learn about Black Grapes Softech, our visionary founders Mr. Arpit Jain and Mrs. Deepika Jain, and our mission to build transformative software solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            Corporate Identity
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
            Empowering Tomorrow Through{" "}
            <span className="text-gradient">Innovative Code</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-grey leading-relaxed">
            Black Grapes Softech is an enterprise software development company based in Indore, India. We architect mission-critical software, web applications, and mobile ecosystems that drive operational excellence for businesses globally.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-soft-white">
              Crafting Excellence, One Line of Code at a Time
            </h2>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              At Black Grapes Softech, we don&apos;t just write code; we build the foundation for a better, smarter, and more connected world. Our development journey has been defined by relentless curiosity, technical depth, and an unwavering commitment to client success.
            </p>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              Over more than a decade of development leadership, our teams have delivered bespoke enterprise software, high-volume multi-level marketing platforms, real-estate management suites, and iOS/Android applications used by thousands daily.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl glass-panel border border-purple-electric/20">
                <div className="text-3xl font-extrabold text-soft-white">250+</div>
                <div className="text-xs text-muted-grey mt-1">Projects Delivered Worldwide</div>
              </div>
              <div className="p-4 rounded-xl glass-panel border border-purple-electric/20">
                <div className="text-3xl font-extrabold text-soft-white">12+ Years</div>
                <div className="text-xs text-muted-grey mt-1">Domain Engineering Experience</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-electric/30 p-2 shadow-2xl">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-obsidian-100">
                <Image
                  src="/assets/about-3.png"
                  alt="Black Grapes Softech Team Culture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-bold text-purple-electric uppercase tracking-wider mb-1">
                    Innovation Lab
                  </div>
                  <div className="text-lg font-bold text-soft-white">
                    Built for Enterprise Scale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Deep-Dive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-br from-grape/30 to-obsidian-200">
            <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric mb-6 border border-purple-electric/40">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-soft-white mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              {COMPANY_DETAILS.vision}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-br from-grape/30 to-obsidian-200">
            <div className="w-12 h-12 rounded-2xl bg-grape flex items-center justify-center text-purple-electric mb-6 border border-purple-electric/40">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-soft-white mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              {COMPANY_DETAILS.mission}
            </p>
          </div>
        </div>

        {/* Leadership Spotlight with Authentic Photograph */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/30 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Founding Leadership
            </div>
            <h3 className="text-3xl font-bold text-soft-white">
              Meet the Founders
            </h3>
            <p className="text-xs sm:text-sm text-muted-grey mt-2">
              The driving vision and relentless creativity shaping our engineering culture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative h-[380px] w-full rounded-2xl overflow-hidden border border-purple-electric/30">
                <Image
                  src="/assets/the-founders.jpeg"
                  alt="Mr. Arpit Jain and Mrs. Deepika Jain"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm sm:text-base text-muted-grey leading-relaxed italic">
                &ldquo;Behind Black Grapes Softech stand two visionary leaders with an unquenchable passion for innovation. Meet our founder, Arpit Jain, the driving force behind our software development journey. With a wealth of experience and a knack for staying ahead of the curve, he has pioneered cutting-edge solutions that have redefined the industry. Deepika Jain doesn&apos;t just see challenges; she envisions opportunities. Her boundless creativity has shaped our company&apos;s culture of relentless innovation.&rdquo;
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-obsidian-100 border border-purple-electric/20">
                  <div className="font-bold text-soft-white text-base">Mr. Arpit Jain</div>
                  <div className="text-xs text-purple-electric font-semibold">Founder & Technical Director</div>
                  <p className="text-xs text-muted-grey mt-2 leading-relaxed">
                    Spearheads technology architecture, technical governance, and enterprise client strategy.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-obsidian-100 border border-purple-electric/20">
                  <div className="font-bold text-soft-white text-base">Mrs. Deepika Jain</div>
                  <div className="text-xs text-purple-electric font-semibold">Co-Founder & Creative Director</div>
                  <p className="text-xs text-muted-grey mt-2 leading-relaxed">
                    Guides product design vision, client relationships, and organizational development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Client Engagements */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-soft-white">
            Client Relationships Built on Trust
          </h3>
          <p className="text-xs sm:text-sm text-muted-grey mt-1">
            We partner with businesses across the globe to engineer scalable software.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {COMPANY_DETAILS.verifiedClients.map((client, idx) => (
            <div
              key={idx}
              className="py-3 px-4 rounded-xl glass-panel border border-purple-electric/15 text-center text-xs font-semibold text-muted-light"
            >
              {client}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:scale-105 transition-all"
          >
            <span>Partner With Black Grapes Softech</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
