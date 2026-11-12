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
    { label: "Home", href: "#home", num: "01" },
    { label: "About", href: "#about", num: "02" },
    { label: "Services", href: "#services", num: "03" },
    { label: "Projects", href: "#projects", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 220;

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
          ? "bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E2DED7] py-3.5 shadow-[0_2px_12px_rgba(20,36,58,0.04)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Black Grapes Softech Home"
          >
            <div className="relative h-10 w-44 sm:h-11 sm:w-52 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/assets/bgst-logo.png"
                alt="Black Grapes Softech"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Modern Editorial Navigation: 5 Sections Only */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E2DED7] shadow-[0_2px_8px_rgba(20,36,58,0.03)]">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-mono transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#14243A] text-white font-medium shadow-sm"
                      : "text-[#777D87] hover:text-[#14243A] hover:bg-[#F7F5F0]"
                  }`}
                >
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-[#F07860]" : "text-[#777D87]"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span className="font-sans font-medium">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Coral Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={COMPANY_DETAILS.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[#E2DED7] bg-white text-[#14243A] hover:bg-[#14243A] hover:text-white hover:border-[#14243A] transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#F07860]" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase font-mono tracking-wider font-semibold text-white rounded-full bg-[#F07860] hover:bg-[#E0634A] transition-all duration-200 shadow-[0_4px_14px_rgba(240,120,96,0.3)] hover:translate-y-[-1px] active:translate-y-[0px]"
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
              className="text-xs uppercase font-mono tracking-wider font-semibold px-3 py-1.5 rounded-full bg-[#F07860] text-white"
            >
              LET&apos;S TALK
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#E2DED7] text-[#14243A] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2DED7] bg-[#F7F5F0] px-6 py-6 transition-all duration-200 shadow-lg">
          <div className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between px-4 py-3 text-sm font-sans font-medium uppercase tracking-wider rounded-lg text-[#14243A] hover:bg-white border border-transparent hover:border-[#E2DED7] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#F07860] font-mono">{item.num}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#E2DED7] space-y-2.5">
            <a
              href={COMPANY_DETAILS.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white border border-[#E2DED7] text-[#14243A] font-mono text-xs uppercase tracking-wider font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-[#F07860]" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#F07860] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-md"
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
