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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full glass-panel border border-purple-electric/30 text-soft-white flex items-center justify-center hover:bg-purple-rich transition-all duration-300 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-purple-electric hover:text-white" />
      </button>

      {/* Expanded Quick Options */}
      {open && (
        <div className="flex flex-col gap-2.5 mb-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <a
            href={COMPANY_DETAILS.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-green-600 text-white font-medium text-xs shadow-xl shadow-green-950/60 hover:bg-green-500 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_DETAILS.contact.phone1}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-grape text-soft-white border border-purple-electric/40 font-medium text-xs shadow-xl shadow-purple-950/60 hover:bg-purple-rich transition-colors"
          >
            <Phone className="w-4 h-4 text-purple-electric" />
            <span>Call +91 7470997884</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-purple-rich to-purple-electric text-soft-white shadow-xl shadow-purple-900/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-white/20"
        aria-label="Quick Connect Options"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full" />
          </div>
        )}
      </button>
    </div>
  );
};

