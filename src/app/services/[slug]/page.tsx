import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowLeft,
  Phone,
  MessageSquare,
} from "lucide-react";
import { SERVICES, COMPANY_DETAILS, ServiceItem } from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

interface Props {
  params: {
    slug: string;
  };
}

// Aliases for legacy WordPress URLs
const SLUG_ALIASES: Record<string, string> = {
  "software-development-2": "software-development",
  "web-designing-and-development": "website-design-development",
  "ecommerce": "ecommerce-solutions",
};

export async function generateStaticParams() {
  const primaryParams = SERVICES.map((s) => ({ slug: s.slug }));
  const aliasParams = Object.keys(SLUG_ALIASES).map((slug) => ({ slug }));
  return [...primaryParams, ...aliasParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedSlug = SLUG_ALIASES[params.slug] || params.slug;
  const service = SERVICES.find((s) => s.slug === resolvedSlug);
  if (!service) return { title: "Service | Black Grapes Softech" };

  return {
    title: `${service.title} | Black Grapes Softech`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const resolvedSlug = SLUG_ALIASES[params.slug] || params.slug;
  const service = SERVICES.find((s) => s.slug === resolvedSlug);

  if (!service) {
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
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-light hover:text-purple-electric transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30">
              <DynamicIcon name={service.icon} className="w-3.5 h-3.5" />
              <span>{service.category} Division</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-purple-accent/90 leading-relaxed font-medium">
              {service.shortDesc}
            </p>

            <p className="text-sm sm:text-base text-muted-grey leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-soft-white bg-gradient-to-r from-purple-rich to-purple-electric shadow-lg shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span>Request Proposal for {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY_DETAILS.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl glass-panel text-sm font-semibold text-green-400 border-green-500/30 hover:bg-green-950/30 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-electric/30 p-2 shadow-2xl">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-obsidian-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Key Capabilities */}
          <div className="p-8 rounded-3xl glass-panel border border-purple-electric/25 space-y-4">
            <h2 className="text-xl font-bold text-soft-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-electric" />
              Core Capabilities &amp; Architecture
            </h2>
            <div className="space-y-3 pt-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-muted-light">
                  <CheckCircle2 className="w-4 h-4 text-purple-electric shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Deliverables */}
          <div className="p-8 rounded-3xl glass-panel border border-purple-electric/25 space-y-4">
            <h2 className="text-xl font-bold text-soft-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-electric" />
              Production Deliverables
            </h2>
            <div className="space-y-3 pt-2">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-muted-light">
                  <ShieldCheck className="w-4 h-4 text-purple-electric shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Value & Technologies Section */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-r from-grape/20 via-obsidian-100 to-grape/20 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-purple-electric font-bold block mb-2">
                Business Impact
              </span>
              <h3 className="text-xl font-bold text-soft-white mb-3">
                Measurable Value Delivered
              </h3>
              <p className="text-sm text-muted-grey leading-relaxed">
                {service.businessValue}
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-purple-electric font-bold block mb-2">
                Technology Stack Used
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-grape text-xs font-semibold text-soft-white border border-purple-electric/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="text-center max-w-2xl mx-auto p-10 rounded-3xl glass-panel border border-purple-electric/30">
          <h3 className="text-2xl font-bold text-soft-white mb-2">
            Ready to implement {service.title}?
          </h3>
          <p className="text-xs sm:text-sm text-muted-grey mb-6">
            Consult with our engineering directors to draft technical specifications and timelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-xs font-semibold"
            >
              Get Custom Quote
            </Link>
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone1}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl glass-panel text-soft-white text-xs font-semibold hover:bg-grape transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-purple-electric" />
              <span>Call +91 7470997884</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
