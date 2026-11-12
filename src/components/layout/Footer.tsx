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
    <footer className="relative bg-[#111111] text-white pt-12 sm:pt-16 pb-12 border-t border-[#2A2A2A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout Banner */}
        <div className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-none bg-[#1A1A1A] border border-[#2A2A2A] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[4px_4px_0px_#FF6B35]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#FF6B35] font-bold">
              <span>[06 // COLLABORATION]</span>
              <span>&bull;</span>
              <span>INDORE &bull; GLOBAL IMPACT</span>
            </div>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight uppercase">
              LET&apos;S BUILD SOMETHING THAT MATTERS.
            </h3>
            <p className="text-xs sm:text-sm text-[#777777] mt-1 max-w-xl font-sans">
              Connect directly with our engineering and technical directors in Indore, Madhya Pradesh.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={COMPANY_DETAILS.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 min-h-[44px] rounded-none bg-white/5 text-white border border-[#2A2A2A] text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 min-h-[44px] rounded-none bg-[#FF6B35] text-white text-xs font-mono uppercase tracking-wider font-bold hover:bg-[#E55A27] transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#FFFFFF]"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-[#2A2A2A]">
          {/* Column 1 & 2: Company Profile */}
          <div className="xs:col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block focus:outline-none">
              <div className="relative h-9 w-44 sm:h-11 sm:w-52 bg-white rounded-none px-3 py-1.5 border border-[#2A2A2A]">
                <Image
                  src="/assets/bgst-logo.png"
                  alt="Black Grapes Softech"
                  fill
                  sizes="(max-width: 640px) 176px, 208px"
                  className="object-contain p-1"
                />
              </div>
            </a>
            <p className="text-sm text-[#777777] max-w-sm leading-relaxed font-sans">
              Black Grapes Softech combines technology, creativity and engineering to build meaningful digital experiences and business solutions from Indore, India.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-[#777777] font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B35] shrink-0" />
                <div className="flex flex-wrap gap-2 font-mono">
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
                <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`} className="hover:text-white transition-colors font-mono break-all">
                  {COMPANY_DETAILS.contact.primaryEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Jump Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-4 flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 bg-[#FF6B35]"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-[#777777]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  01. Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  02. About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03. Services (11)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  04. Selected Works
                </a>
              </li>
              <li>
                <a href="#project-demos" className="hover:text-white transition-colors">
                  05. Project Demos (4)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  06. Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Selected Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-4 flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 bg-[#FF6B35]"></span>
              Offerings
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#777777]">
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
                  className="text-[#FF6B35] hover:underline font-mono text-[11px] uppercase tracking-wider inline-flex items-center gap-1 font-bold"
                >
                  View All 11 Services &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Leadership & Compliance */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-4 flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 bg-[#FF6B35]"></span>
              Leadership
            </h4>
            <ul className="space-y-2 text-xs text-[#777777]">
              <li>
                <strong className="text-white block font-heading">Mr. Arpit Jain</strong>
                <span className="text-[11px] font-mono text-[#777777]">Founder &amp; Technical Director</span>
              </li>
              <li className="pt-1.5">
                <strong className="text-white block font-heading">Mrs. Deepika Jain</strong>
                <span className="text-[11px] font-mono text-[#777777]">Co-Founder &amp; Creative Director</span>
              </li>
              <li className="pt-3 border-t border-[#2A2A2A] flex flex-col gap-1.5 font-mono text-[11px]">
                <Link href="/privacy-policy" className="hover:text-[#FF6B35] transition-colors">
                  &bull; Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="hover:text-[#FF6B35] transition-colors">
                  &bull; Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#777777] gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Black Grapes Softech. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Indore, Madhya Pradesh, India.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B35]" />
              Enterprise Verified
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#FF6B35]" />
              ISO Compliant Standards
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
