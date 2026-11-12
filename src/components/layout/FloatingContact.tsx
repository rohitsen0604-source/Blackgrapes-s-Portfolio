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
        className="w-10 h-10 rounded-none bg-white border border-[#E5E5E5] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-200 shadow-[2px_2px_0px_#111111]"
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
            className="flex items-center gap-2 px-4 py-2 rounded-none bg-[#111111] text-white border border-[#2A2A2A] font-mono text-xs uppercase tracking-wider shadow-[3px_3px_0px_#FF6B35] hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FF6B35] group-hover:text-white" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href={`tel:${COMPANY_DETAILS.contact.phone1}`}
            className="flex items-center gap-2 px-4 py-2 rounded-none bg-white text-[#111111] border border-[#E5E5E5] font-mono text-xs uppercase tracking-wider shadow-[3px_3px_0px_#111111] hover:bg-[#111111] hover:text-white transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>Call +91 7470997884</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-none bg-[#FF6B35] text-white shadow-[3px_3px_0px_#111111] hover:bg-[#E55A27] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center border border-[#111111]"
        aria-label="Quick Connect Options"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
          </div>
        )}
      </button>
    </div>
  );
};
