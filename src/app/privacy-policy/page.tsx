import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Black Grapes Softech",
  description: "Official Privacy Policy of Black Grapes Softech, effective since January 4, 2012.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-hero-glow pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-light hover:text-purple-electric transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
            <Lock className="w-3.5 h-3.5" />
            Legal &amp; Compliance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-soft-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-purple-electric font-semibold">
            Effective Date: January 4, 2012 &bull; Last Reviewed: 2026
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/25 space-y-8 text-sm sm:text-base text-muted-grey leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-soft-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-electric" />
              1. Overview
            </h2>
            <p>
              This Privacy Policy describes how Black Grapes Softech (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you visit or interact with our website located at <strong>www.blackgrapessoftech.com</strong>, engage our software development services, or communicate with our engineering teams.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-soft-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-purple-electric" />
              2. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us when filling out our project inquiry forms, scheduling consultations, or contacting us via email or WhatsApp. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-light text-sm">
              <li>Full Name and Professional Title</li>
              <li>Business Email Address and Telephone Numbers</li>
              <li>Company Name and Project Specifications</li>
              <li>Technical Requirements, RFPs, and Budget Estimates</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-soft-white">
              3. Use of Collected Data
            </h2>
            <p>
              The information we gather is used strictly for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-light text-sm">
              <li>Formulating accurate project architectural proposals and timelines.</li>
              <li>Executing non-disclosure agreements (NDAs) and Master Service Agreements.</li>
              <li>Coordinating technical sprint meetings and product delivery.</li>
              <li>Ensuring compliance with Indian and international data protection standards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-soft-white">
              4. Data Protection &amp; Confidentiality
            </h2>
            <p>
              Black Grapes Softech maintains industry-standard technical, physical, and administrative safeguards to protect your personal and proprietary data from unauthorized access, loss, or disclosure. All client source code, database architectures, and commercial proposals are safeguarded under strict non-disclosure obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-soft-white">
              5. Third-Party Disclosures
            </h2>
            <p>
              We never sell, rent, or trade your personal or business information to third parties. Information may only be disclosed where required by applicable law, regulatory authority, or to protect our legitimate legal rights.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-purple-900/40">
            <h2 className="text-xl font-bold text-soft-white">
              6. Contact for Privacy Matters
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or data handling, please contact:
            </p>
            <div className="p-4 rounded-xl bg-obsidian-100 border border-purple-electric/20 text-xs text-soft-white space-y-1">
              <div><strong>Black Grapes Softech</strong></div>
              <div>Address: {COMPANY_DETAILS.address.full}</div>
              <div>Email: <a href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`} className="text-purple-electric hover:underline">{COMPANY_DETAILS.contact.primaryEmail}</a></div>
              <div>Telephone: {COMPANY_DETAILS.contact.phone1}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
