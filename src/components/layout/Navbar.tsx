"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll Spy for active section
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
      const offsetTop = element.offsetTop - 80;
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
          ? "bg-obsidian-950/85 backdrop-blur-md border-b border-purple-electric/20 py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative h-11 w-44 sm:h-12 sm:w-52">
              <Image
                src="/assets/bgst-logo.png"
                alt="Black Grapes Softech"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation: 5 Sections Only */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-obsidian-100/60 p-1.5 rounded-full border border-purple-electric/20 backdrop-blur-md">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-soft-white font-semibold"
                      : "text-muted-light hover:text-soft-white hover:bg-grape/30"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-rich to-purple-electric -z-10 shadow-lg shadow-purple-900/50"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Get In Touch */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={COMPANY_DETAILS.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-green-500/30 bg-green-950/30 text-green-400 hover:bg-green-900/50 hover:text-green-300 transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-soft-white rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric hover:from-purple-electric hover:to-purple-rich transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-electric/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white"
            >
              Get In Touch
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-grape/50 border border-purple-electric/30 text-soft-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-purple-electric/25 bg-obsidian-950/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 text-base font-medium rounded-xl text-soft-white hover:bg-grape/40 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-purple-900/40 space-y-3">
              <a
                href={COMPANY_DETAILS.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-700/30 border border-green-500/30 text-green-300 font-semibold text-sm"
              >
                <MessageSquare className="w-4 h-4 text-green-400" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white font-semibold text-sm"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
