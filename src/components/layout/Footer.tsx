import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/data/company";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#14243A] text-[#F7F5F0] pt-16 pb-12 border-t border-[#1F3552] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Callout Banner */}
        <div className="mb-14 p-8 rounded-2xl bg-[#1C304B] border border-[#2A4468] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[#F07860]">
              <span>[05 // COLLABORATE]</span>
              <span>&bull;</span>
              <span>INDORE &bull; GLOBAL CLIENTS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Ready to create something meaningful?
            </h3>
            <p className="text-sm text-[#E8E5DF]/80 mt-1 max-w-xl font-sans">
              Connect directly with our engineering and creative directors in Indore, Madhya Pradesh.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_DETAILS.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/15 text-xs font-mono uppercase tracking-wider hover:bg-white/15 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F07860]" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#F07860] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#E0634A] transition-all flex items-center gap-2 shadow-[0_4px_14px_rgba(240,120,96,0.35)]"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1F3552]">
          {/* Column 1 & 2: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block focus:outline-none">
              <div className="relative h-11 w-52 bg-white rounded-lg px-3 py-1.5 border border-[#2A4468]">
                <Image
                  src="/assets/bgst-logo.png"
                  alt="Black Grapes Softech"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </a>
            <p className="text-sm text-[#E8E5DF]/80 max-w-sm leading-relaxed font-sans">
              Black Grapes Softech is a modern software engineering and digital product studio headquartered in Indore, India. We engineer custom enterprise platforms, mobile apps, and scalable web solutions.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-[#E8E5DF]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F07860] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F07860] shrink-0" />
                <div className="flex gap-2 font-mono">
                  <a href={`tel:${COMPANY_DETAILS.contact.phone1}`} className="hover:text-white transition-colors">
                    {COMPANY_DETAILS.contact.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${COMPANY_DETAILS.contact.phone2}`} className="hover:text-white transition-colors">
                    {COMPANY_DETAILS.contact.phone2}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F07860] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_DETAILS.contact.primaryEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Jump Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F07860] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F07860]"></span>
              Index
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-[#E8E5DF]/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  01. Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  02. About &amp; Founders
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03. Services (11)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  04. Projects Showcase
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  05. Contact Headquarters
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Selected Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F07860] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F07860]"></span>
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#E8E5DF]/80">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="#services"
                  className="text-[#F07860] hover:underline font-mono text-[11px] uppercase tracking-wider inline-flex items-center gap-1"
                >
                  View All 11 Services &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Leadership & Compliance */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F07860] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F07860]"></span>
              Directors
            </h4>
            <ul className="space-y-2 text-xs text-[#E8E5DF]/80">
              <li>
                <strong className="text-white block font-heading">Mr. Arpit Jain</strong>
                <span className="text-[11px] font-mono text-[#E8E5DF]/70">Founder &amp; Technical Director</span>
              </li>
              <li className="pt-1.5">
                <strong className="text-white block font-heading">Mrs. Deepika Jain</strong>
                <span className="text-[11px] font-mono text-[#E8E5DF]/70">Co-Founder &amp; Creative Director</span>
              </li>
              <li className="pt-3 border-t border-[#1F3552] flex flex-col gap-1.5 font-mono text-[11px]">
                <span className="text-[#E8E5DF]/70">
                  &bull; Registered MSME Entity
                </span>
                <span className="text-[#E8E5DF]/70">
                  &bull; ISO Compliant Standards
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#E8E5DF]/70 gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Black Grapes Softech. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Indore, Madhya Pradesh, India.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F07860]" />
              Enterprise Verified
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#F07860]" />
              ISO Compliant Engineering
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
