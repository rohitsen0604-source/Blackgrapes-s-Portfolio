"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, X, ArrowUp } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const FloatingContact: React.FC = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-white border border-[#E2DED7] text-[#14243A] flex items-center justify-center hover:bg-[#14243A] hover:text-white hover:border-[#14243A] transition-all duration-200 shadow-md"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Expanded Quick Contact Options */}
      {open && (
        <div className="flex flex-col gap-2 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <a
            href={COMPANY_DETAILS.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#14243A] text-white border border-[#E2DED7] font-mono text-xs uppercase tracking-wider shadow-lg hover:bg-[#F07860] hover:border-[#F07860] transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#F07860] group-hover:text-white" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href={`tel:${COMPANY_DETAILS.contact.phone1}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#14243A] border border-[#E2DED7] font-mono text-xs uppercase tracking-wider shadow-lg hover:bg-[#14243A] hover:text-white transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#F07860]" />
            <span>Call +91 7470997884</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-[#F07860] text-white shadow-[0_4px_16px_rgba(240,120,96,0.4)] hover:bg-[#E0634A] hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-white"
        aria-label="Quick Connect Options"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full" />
          </div>
        )}
      </button>
    </div>
  );
};
