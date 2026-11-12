"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, MessageSquare, Phone, MapPin } from "lucide-react";
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
    { label: "PROJECT DEMOS", href: "#project-demos", num: "05" },
    { label: "CONTACT", href: "#contact", num: "06" },
  ];

  // Handle scroll detection and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "projects", "project-demos", "contact"];
      const scrollPosition = window.scrollY + 180;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
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
          ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E5E5E5] py-2.5 sm:py-3 shadow-[0_4px_16px_rgba(17,17,17,0.05)]"
          : "bg-transparent py-3.5 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Responsive Proportion */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Black Grapes Softech Home"
          >
            <div className="relative h-8 w-36 xs:h-9 xs:w-44 sm:h-10 sm:w-48 md:h-11 md:w-56 transition-transform duration-200 group-hover:scale-[1.01]">
              <Image
                src="/assets/bgst-logo.png"
                alt="Black Grapes Softech"
                fill
                sizes="(max-width: 480px) 150px, (max-width: 768px) 180px, 224px"
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation: 5 Sections */}
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

          {/* Desktop Right CTA */}
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

          {/* Mobile Actions: Touch-friendly CTA + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-[11px] xs:text-xs uppercase font-mono tracking-wider font-bold px-3 py-2 min-h-[38px] flex items-center justify-center rounded-none bg-[#FF6B35] text-white shadow-[2px_2px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <span>TALK</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-none bg-white border-2 border-[#111111] text-[#111111] focus:outline-none shadow-[2px_2px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px]"
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#111111]" /> : <Menu className="w-5 h-5 text-[#111111]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Feature Mobile Navigation Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-[52px] sm:top-[60px] bottom-0 bg-[#FFFFFF] border-b-4 border-[#111111] z-50 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200 p-5 sm:p-6"
        >
          {/* Section Navigation Links */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#777777] font-bold pb-2 border-b border-[#E5E5E5] mb-2 flex items-center justify-between">
              <span>[DIRECT DIRECTORY]</span>
              <span className="text-[#FF6B35]">5 CORE SECTIONS</span>
            </div>

            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3.5 min-h-[48px] rounded-none border-2 transition-all ${
                    isActive
                      ? "bg-[#111111] text-white border-[#111111] shadow-[3px_3px_0px_#FF6B35]"
                      : "bg-[#F1F0EC] text-[#111111] border-[#111111] hover:border-[#FF6B35]"
                  }`}
                >
                  <span className="text-sm font-heading font-extrabold uppercase tracking-wider">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? "text-[#FF6B35]" : "text-[#777777]"
                      }`}
                    >
                      {item.num}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        isActive ? "text-[#FF6B35]" : "text-[#111111]"
                      }`}
                    />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom: Quick Action CTAs & Credentials */}
          <div className="mt-6 pt-5 border-t border-[#E5E5E5] space-y-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3.5 min-h-[48px] rounded-none bg-[#FF6B35] text-white font-mono text-xs uppercase tracking-wider font-extrabold shadow-[3px_3px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <span>COMMENCE INQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={COMPANY_DETAILS.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 min-h-[44px] rounded-none bg-[#111111] text-white border border-[#111111] font-mono text-[11px] uppercase tracking-wider font-bold shadow-[2px_2px_0px_#FF6B35]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.contact.phone1}`}
                className="flex items-center justify-center gap-1.5 py-3 min-h-[44px] rounded-none bg-white text-[#111111] border-2 border-[#111111] font-mono text-[11px] uppercase tracking-wider font-bold shadow-[2px_2px_0px_#111111]"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Call Studio</span>
              </a>
            </div>

            {/* Micro Address Tag */}
            <div className="pt-2 flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#777777] text-center">
              <MapPin className="w-3 h-3 text-[#FF6B35] shrink-0" />
              <span>Vijaynagar, Indore, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
