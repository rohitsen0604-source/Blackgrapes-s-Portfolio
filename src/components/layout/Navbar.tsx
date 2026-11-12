"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME", href: "#home", num: "01" },
    { label: "ABOUT", href: "#about", num: "02" },
    { label: "SERVICES", href: "#services", num: "03" },
    { label: "PROJECTS", href: "#projects", num: "04" },
    { label: "CONTACT", href: "#contact", num: "05" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 75;
      window.scrollTo({
        top: offsetTop > 0 ? offsetTop : 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E5E5E5] py-3 shadow-[0_4px_16px_rgba(17,17,17,0.04)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Original Official Logo with Enhanced Crisp Sizing */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Black Grapes Softech Home"
          >
            <div className="relative h-10 w-44 sm:h-11 sm:w-56 transition-transform duration-200 group-hover:scale-[1.01]">
              <Image
                src="/assets/bgst-logo.png"
                alt="Black Grapes Softech"
                fill
                sizes="(max-width: 640px) 176px, 224px"
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation: 5 Sections with Bold Readability */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#FFFFFF] px-3 py-1.5 rounded-none border border-[#E5E5E5] shadow-[2px_2px_0px_#111111]">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-mono font-bold transition-all duration-200 flex items-center gap-1.5 relative group ${
                    isActive
                      ? "bg-[#111111] text-white"
                      : "text-[#555555] hover:text-[#111111] hover:bg-[#F1F0EC]"
                  }`}
                >
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-[#FF6B35]" : "text-[#777777]"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                  {!isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FF6B35] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: High-Contrast Tangerine Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={COMPANY_DETAILS.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none border border-[#E5E5E5] bg-white text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-200 shadow-[2px_2px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px]"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#FF6B35]" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase font-mono tracking-wider font-bold text-white rounded-none bg-[#FF6B35] hover:bg-[#E55A27] transition-all duration-200 shadow-[3px_3px_0px_#111111] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs uppercase font-mono tracking-wider font-bold px-3 py-1.5 rounded-none bg-[#FF6B35] text-white shadow-[2px_2px_0px_#111111]"
            >
              LET&apos;S TALK
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none bg-white border border-[#E5E5E5] text-[#111111] focus:outline-none shadow-[2px_2px_0px_#111111]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-[#111111] bg-[#FFFFFF] px-6 py-6 transition-all duration-200 shadow-2xl">
          <div className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between px-4 py-3 text-sm font-heading font-extrabold uppercase tracking-wider text-[#111111] hover:bg-[#F1F0EC] border border-transparent hover:border-[#111111] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#FF6B35] font-mono font-bold">{item.num}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#E5E5E5] space-y-2.5">
            <a
              href={COMPANY_DETAILS.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-none bg-[#F1F0EC] border border-[#111111] text-[#111111] font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0px_#111111]"
            >
              <MessageSquare className="w-4 h-4 text-[#FF6B35]" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-none bg-[#FF6B35] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[3px_3px_0px_#111111]"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
