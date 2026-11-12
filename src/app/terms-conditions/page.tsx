import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowLeft, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms and Conditions | Black Grapes Softech",
  description:
    "Official Terms and Conditions governing software development services, website usage, intellectual property, and client agreements with Black Grapes Softech.",
  alternates: {
    canonical: "https://blackgrapessoftech.com/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  const terms = [
    {
      num: 1,
      title: "Acceptance of Terms",
      text: "Users and clients must agree to abide by all terms and conditions outlined by Black Grapes Softech upon engaging our services or accessing our web platforms.",
    },
    {
      num: 2,
      title: "License",
      text: "Black Grapes Softech grants a limited, non-exclusive, revocable license to access and use our website and demonstration applications in accordance with these terms.",
    },
    {
      num: 3,
      title: "User Conduct",
      text: "Illegal, abusive, reverse-engineering, or unauthorized behavior while accessing our platforms or development environments is strictly prohibited.",
    },
    {
      num: 4,
      title: "Intellectual Property Rights",
      text: "Ownership of all bespoke intellectual property developed specifically for a client will be fully assigned to the client upon receipt of final contracted project payment. Proprietary pre-existing frameworks remain the property of Black Grapes Softech.",
    },
    {
      num: 5,
      title: "User Content",
      text: "Ownership and responsibility of user-generated content, media, copy, or data uploaded to our platforms remain purely with the client or user.",
    },
    {
      num: 6,
      title: "Privacy Policy",
      text: "User and client data will be collected, stored, and processed in accordance with our documented Privacy Policy, ensuring compliance with relevant privacy regulations.",
    },
    {
      num: 7,
      title: "Data Security",
      text: "Black Grapes Softech takes robust technical measures to protect user data, including encryption, secure socket transmissions, and strict administrative access controls.",
    },
    {
      num: 8,
      title: "Disclaimer of Warranties",
      text: "Specific warranties or guarantees regarding the performance, reliability, or SLAs of custom software will be formalized with each client in the Master Service Agreement.",
    },
    {
      num: 9,
      title: "Limitation of Liability",
      text: "Limitations of Black Grapes Softech's liability for indirect, incidental, or consequential damages arising from service usage shall not exceed fees received for the specific milestone.",
    },
    {
      num: 10,
      title: "Indemnification",
      text: "Clients agree to indemnify and hold harmless Black Grapes Softech from any third-party claims or damages resulting from unauthorized use or breach of intellectual property provided by the client.",
    },
    {
      num: 11,
      title: "Termination",
      text: "Black Grapes Softech reserves the right to suspend or terminate service access in the event of contractual non-payment, legal violation, or breach of service terms.",
    },
    {
      num: 12,
      title: "Governing Law",
      text: "The laws of India shall govern the interpretation, validity, and enforcement of these terms and conditions.",
    },
    {
      num: 13,
      title: "Dispute Resolution",
      text: "Any dispute arising from these terms will first be addressed through good-faith negotiation, followed by arbitration or mediation conducted in Indore, Madhya Pradesh, India.",
    },
    {
      num: 14,
      title: "Updates and Modifications",
      text: "Black Grapes Softech reserves the right to update, modify, or change these terms and conditions at any time with appropriate notice posted to our website.",
    },
    {
      num: 15,
      title: "Severability",
      text: "If any clause in these terms is found to be unenforceable, the remaining provisions shall remain in full force and legal effect.",
    },
    {
      num: 16,
      title: "Entire Agreement",
      text: "These terms, along with any executed Master Service Agreement (MSA) and Non-Disclosure Agreement (NDA), constitute the complete agreement between the client and Black Grapes Softech.",
    },
    {
      num: 17,
      title: "Contact Information",
      text: `For inquiries or legal notices regarding these terms, contact: Black Grapes Softech, ${COMPANY_DETAILS.address.full} | Email: ${COMPANY_DETAILS.contact.primaryEmail} | Phone: ${COMPANY_DETAILS.contact.phone1}`,
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden bg-[#F1F0EC] text-[#111111]">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777] hover:text-[#FF6B35] transition-colors font-bold min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white text-[#FF6B35] border border-[#111111] mb-3 sm:mb-4 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_#111111]">
            <Scale className="w-3.5 h-3.5" />
            Legal Framework
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-heading font-extrabold text-[#111111] tracking-tight mb-3 sm:mb-4 uppercase">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#777777] font-mono font-semibold">
            Governing standard client engagements, intellectual property, and service delivery.
          </p>
        </div>

        <div className="p-5 sm:p-8 md:p-12 rounded-none bg-white border-2 border-[#111111] shadow-[4px_4px_0px_#111111] sm:shadow-[6px_6px_0px_#111111] space-y-6">
          <div className="pb-6 border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#777777]">
            <span className="font-bold">17 DOCUMENTED CLAUSES</span>
            <span className="flex items-center gap-1.5 text-[#FF6B35] font-bold">
              <ShieldCheck className="w-4 h-4" />
              Legally Binding
            </span>
          </div>

          <div className="space-y-6">
            {terms.map((t) => (
              <div
                key={t.num}
                className="p-5 rounded-none bg-[#F1F0EC] border border-[#111111] hover:border-[#FF6B35] transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-6 h-6 rounded-none bg-[#111111] text-white flex items-center justify-center font-mono text-xs font-bold">
                    {t.num}
                  </span>
                  <h3 className="text-base font-heading font-extrabold text-[#111111] uppercase">
                    {t.title}
                  </h3>
                </div>
                <p className="text-sm text-[#555555] leading-relaxed pl-8 font-sans">
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E5E5E5] text-xs font-mono text-[#777777] font-semibold">
            &copy; {new Date().getFullYear()} Black Grapes Softech. Indore, Madhya Pradesh, India.
          </div>
        </div>
      </div>
    </div>
  );
}
