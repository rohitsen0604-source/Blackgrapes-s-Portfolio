import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/data/company";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-obsidian-950 border-t border-purple-900/40 text-muted-grey pt-16 pb-12 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-rich/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-grape/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Highlight Banner */}
        <div className="mb-14 p-8 rounded-2xl glass-panel border border-purple-electric/25 bg-gradient-to-r from-obsidian-100 via-grape/40 to-obsidian-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-electric/15 text-purple-electric border border-purple-electric/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Innovate &bull; Integrate &bull; Elevate
            </span>
            <h3 className="text-2xl font-bold text-soft-white tracking-tight">
              Transform your ideas into scalable digital reality.
            </h3>
            <p className="text-sm text-muted-light mt-1">
              Connect directly with our software directors in Indore, MP, India.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_DETAILS.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-green-600/20 text-green-300 border border-green-500/40 text-sm font-semibold hover:bg-green-600/30 transition-all"
            >
              WhatsApp Direct
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white text-sm font-semibold shadow-lg shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/30">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block">
              <div className="relative h-12 w-52">
                <Image
                  src="/assets/bgst-logo.png"
                  alt="Black Grapes Softech"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <p className="text-sm text-muted-grey max-w-sm leading-relaxed">
              Black Grapes Softech is an enterprise software development and digital transformation company. We engineer custom enterprise software, mobile applications, web platforms, and automated workflow engines.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-muted-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-electric shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-electric shrink-0" />
                <div className="flex gap-2">
                  <a href={`tel:${COMPANY_DETAILS.contact.phone1}`} className="hover:text-purple-electric transition-colors">
                    {COMPANY_DETAILS.contact.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${COMPANY_DETAILS.contact.phone2}`} className="hover:text-purple-electric transition-colors">
                    {COMPANY_DETAILS.contact.phone2}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-electric shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`} className="hover:text-purple-electric transition-colors">
                  {COMPANY_DETAILS.contact.primaryEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Jump Navigation */}
          <div>
            <h4 className="text-sm font-bold text-soft-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-electric"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-purple-electric transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-electric transition-colors">
                  About Us &amp; Founders
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-electric transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-electric transition-colors">
                  Client Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-electric transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-sm font-bold text-soft-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-electric"></span>
              Core Offerings
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-purple-electric transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="text-purple-electric hover:underline font-semibold inline-flex items-center gap-1 text-xs mt-1"
                >
                  View All Services &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Founders & Legal */}
          <div>
            <h4 className="text-sm font-bold text-soft-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-electric"></span>
              Corporate
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-xs text-muted-light">
                <strong>Founders:</strong><br />
                Mr. Arpit Jain &bull; Mrs. Deepika Jain
              </li>
              <li className="pt-2 border-t border-purple-900/30">
                <Link href="/privacy-policy" className="hover:text-purple-electric transition-colors text-xs">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-purple-electric transition-colors text-xs">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-grey gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Black Grapes Softech. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Incorporated in Madhya Pradesh, India.</span>
          </div>

          <div className="flex items-center gap-4 text-muted-light">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-electric" />
              Verified Enterprise Partner
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-purple-electric" />
              ISO Compliant Engineering
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
