import React from "react";
import type { Metadata } from "next";
import { ContactInquiry } from "@/components/home/ContactInquiry";
import { MapPin, Phone, Mail, Clock, MessageSquare, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Black Grapes Softech",
  description:
    "Get in touch with Black Grapes Softech in Indore, India. Reach our technical directors via email, telephone, or WhatsApp for custom software, mobile app, and tender inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-12 relative overflow-hidden">
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Direct Technical Connect
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soft-white tracking-tight mb-6">
          Contact <span className="text-gradient">Black Grapes Softech</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-grey max-w-2xl mx-auto leading-relaxed">
          Reach our executive leadership and software engineering architects directly. We are ready to analyze your requirements and transform your digital vision into reality.
        </p>
      </div>

      {/* Main Interactive Contact Section */}
      <ContactInquiry />

      {/* Office Details & Location Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-purple-electric/25 bg-gradient-to-r from-grape/20 via-obsidian-100 to-grape/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-soft-white">Visit Our Office</h3>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                {COMPANY_DETAILS.address.full}
              </p>
              <div className="text-[11px] text-purple-electric font-semibold">
                Landmark: Vijaynagar Commercial Hub, Indore
              </div>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-soft-white">Operating Hours</h3>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                Monday &ndash; Friday: 9:30 AM &ndash; 7:30 PM IST<br />
                Saturday: 10:00 AM &ndash; 4:00 PM IST<br />
                Sunday: Closed (Emergency SLAs 24/7)
              </p>
              <div className="text-[11px] text-purple-electric font-semibold">
                Global client shifts available for US/UK/APAC overlap
              </div>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-grape flex items-center justify-center text-purple-electric border border-purple-electric/40">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-soft-white">Instant Communication</h3>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                Need immediate answers? Start a conversation with our technical team on WhatsApp or phone.
              </p>
              <div className="pt-1 flex flex-col gap-1 text-xs">
                <a
                  href={COMPANY_DETAILS.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline font-semibold"
                >
                  WhatsApp: +91 7470997884 &rarr;
                </a>
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone2}`}
                  className="text-muted-light hover:text-purple-electric"
                >
                  Alternate: {COMPANY_DETAILS.contact.phone2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
