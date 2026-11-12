import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, ArrowLeft } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Black Grapes Softech",
  description: "Official Privacy Policy of Black Grapes Softech, effective since January 4, 2012.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-[#F1F0EC] text-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777] hover:text-[#FF6B35] transition-colors font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white text-[#FF6B35] border border-[#111111] mb-4 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_#111111]">
            <Lock className="w-3.5 h-3.5" />
            Legal &amp; Compliance Dossier
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#111111] tracking-tight mb-4 uppercase">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#777777] font-mono font-semibold">
            Effective Date: January 4, 2012 &bull; Last Reviewed: 2026 &bull; Black Grapes Softech
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-none bg-white border-2 border-[#111111] shadow-[6px_6px_0px_#111111] space-y-8 text-sm sm:text-base text-[#555555] leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-extrabold text-[#111111] flex items-center gap-2 uppercase">
              <ShieldCheck className="w-5 h-5 text-[#FF6B35]" />
              1. Overview
            </h2>
            <p>
              This Privacy Policy describes how Black Grapes Softech (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and discloses your personal information when you visit or interact with our website located at <strong>www.blackgrapessoftech.com</strong>, engage our software development services, or communicate with our engineering teams.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-extrabold text-[#111111] flex items-center gap-2 uppercase">
              <Eye className="w-5 h-5 text-[#FF6B35]" />
              2. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us when filling out our project inquiry forms, scheduling consultations, or contacting us via email or WhatsApp. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-[#111111] font-medium">
              <li>Full Name and Professional Title</li>
              <li>Business Email Address and Telephone Numbers</li>
              <li>Company Name and Project Specifications</li>
              <li>Technical Requirements, RFPs, and Budget Estimates</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-extrabold text-[#111111] uppercase">
              3. Use of Collected Data
            </h2>
            <p>
              The information we gather is used strictly for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-[#111111] font-medium">
              <li>Formulating accurate project architectural proposals and timelines.</li>
              <li>Executing non-disclosure agreements (NDAs) and Master Service Agreements.</li>
              <li>Coordinating technical sprint meetings and product delivery.</li>
              <li>Ensuring compliance with Indian and international data protection standards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-extrabold text-[#111111] uppercase">
              4. Data Protection &amp; Confidentiality
            </h2>
            <p>
              Black Grapes Softech maintains industry-standard technical, physical, and administrative safeguards to protect your personal and proprietary data from unauthorized access, loss, or disclosure. All client source code, database architectures, and commercial proposals are safeguarded under strict non-disclosure obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-extrabold text-[#111111] uppercase">
              5. Third-Party Disclosures
            </h2>
            <p>
              We never sell, rent, or trade your personal or business information to third parties. Information may only be disclosed where required by applicable law, regulatory authority, or to protect our legitimate legal rights.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E5E5E5]">
            <h2 className="text-xl font-heading font-extrabold text-[#111111] uppercase">
              6. Contact for Privacy Matters
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or data handling, please contact:
            </p>
            <div className="p-5 rounded-none bg-[#F1F0EC] border border-[#111111] text-xs text-[#111111] space-y-1.5 font-mono">
              <div className="font-bold">{COMPANY_DETAILS.name}</div>
              <div>Address: {COMPANY_DETAILS.address.full}</div>
              <div>
                Email:{" "}
                <a
                  href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`}
                  className="text-[#FF6B35] underline font-bold"
                >
                  {COMPANY_DETAILS.contact.primaryEmail}
                </a>
              </div>
              <div>Telephone: {COMPANY_DETAILS.contact.phone1}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
