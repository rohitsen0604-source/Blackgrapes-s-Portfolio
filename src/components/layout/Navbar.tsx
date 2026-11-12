"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/data/company";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [tendersDropdownOpen, setTendersDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setTendersDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      isServicesDropdown: true,
    },
    { label: "Projects", href: "/projects" },
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/industries" },
    {
      label: "Tenders",
      href: "/government-tenders",
      isTendersDropdown: true,
    },
    { label: "Staffing", href: "/it-staffing" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Banner for Quick Contact */}
      <div className="bg-obsidian-950 border-b border-purple-900/30 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-muted-grey">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone1}`}
              className="flex items-center space-x-1.5 hover:text-purple-electric transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-purple-electric" />
              <span>{COMPANY_DETAILS.contact.phone1}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`}
              className="flex items-center space-x-1.5 hover:text-purple-electric transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-purple-electric" />
              <span>{COMPANY_DETAILS.contact.primaryEmail}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-purple-accent/80 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-electric animate-pulse" />
              Enterprise Software & Global IT Solutions
            </span>
            <span className="text-muted-dark">|</span>
            <Link
              href="/partnership"
              className="hover:text-purple-electric transition-colors text-muted-light font-medium"
            >
              Partner with Us &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-obsidian/85 backdrop-blur-md border-b border-purple-electric/15 py-3 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-11 w-44 sm:h-12 sm:w-52">
                <Image
                  src="/assets/bgst-logo.png"
                  alt="Black Grapes Softech"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                if (item.isServicesDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          pathname.startsWith("/services")
                            ? "text-purple-electric bg-grape/40"
                            : "text-soft-white hover:text-purple-electric hover:bg-grape/20"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-purple-electric" : ""
                          }`}
                        />
                      </Link>

                      {/* Mega Dropdown */}
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] p-6 rounded-2xl glass-panel shadow-2xl shadow-black/80 z-50 border border-purple-electric/25"
                          >
                            <div className="flex items-center justify-between pb-4 border-b border-purple-900/40 mb-4">
                              <div>
                                <span className="text-xs uppercase tracking-wider text-purple-electric font-semibold">
                                  Engineering & Technology Services
                                </span>
                                <p className="text-xs text-muted-grey">
                                  Enterprise solutions built for scale, performance, and security.
                                </p>
                              </div>
                              <Link
                                href="/services"
                                className="text-xs text-purple-electric hover:underline flex items-center gap-1 font-medium"
                              >
                                View All Services <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              {SERVICES.map((s) => (
                                <Link
                                  key={s.id}
                                  href={`/services/${s.slug}`}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-grape/50 transition-colors border border-transparent hover:border-purple-electric/20"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-grape/70 border border-purple-electric/30 flex items-center justify-center text-purple-electric shrink-0 group-hover:bg-purple-rich group-hover:text-soft-white transition-all">
                                    <DynamicIcon name={s.icon} className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-soft-white group-hover:text-purple-electric transition-colors">
                                      {s.title}
                                    </div>
                                    <p className="text-xs text-muted-grey line-clamp-1 mt-0.5">
                                      {s.shortDesc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="mt-4 pt-3 border-t border-purple-900/30 flex items-center justify-between bg-grape-dark/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                              <span className="text-xs text-muted-grey">
                                Looking for custom tender assistance or staffing?
                              </span>
                              <div className="flex gap-4 text-xs font-medium">
                                <Link
                                  href="/government-tenders"
                                  className="text-soft-white hover:text-purple-electric transition-colors"
                                >
                                  Government Tenders &rarr;
                                </Link>
                                <Link
                                  href="/it-staffing"
                                  className="text-soft-white hover:text-purple-electric transition-colors"
                                >
                                  IT Staffing &rarr;
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.isTendersDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setTendersDropdownOpen(true)}
                      onMouseLeave={() => setTendersDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          pathname.includes("tender")
                            ? "text-purple-electric bg-grape/40"
                            : "text-soft-white hover:text-purple-electric hover:bg-grape/20"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            tendersDropdownOpen ? "rotate-180 text-purple-electric" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {tendersDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full mt-2 w-64 p-3 rounded-xl glass-panel shadow-xl border border-purple-electric/25 z-50"
                          >
                            <Link
                              href="/government-tenders"
                              className="block p-2.5 rounded-lg hover:bg-grape/50 text-sm font-medium text-soft-white hover:text-purple-electric transition-colors"
                            >
                              <div>Government Tenders</div>
                              <span className="text-xs text-muted-grey font-normal">
                                GeM, CPWD, State & PSU Bidding
                              </span>
                            </Link>
                            <Link
                              href="/private-tenders"
                              className="block p-2.5 rounded-lg hover:bg-grape/50 text-sm font-medium text-soft-white hover:text-purple-electric transition-colors mt-1"
                            >
                              <div>Private Tender Services</div>
                              <span className="text-xs text-muted-grey font-normal">
                                Corporate RFPs, RFQs & Bid Mgmt
                              </span>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-purple-electric bg-grape/40 font-semibold"
                        : "text-soft-white hover:text-purple-electric hover:bg-grape/20"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY_DETAILS.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-green-500/30 bg-green-950/30 text-green-400 hover:bg-green-900/50 hover:text-green-300 transition-all duration-200"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-soft-white rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric hover:from-purple-electric hover:to-purple-rich transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-electric/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white"
              >
                Quote
              </Link>
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
              transition={{ duration: 0.3 }}
              className="lg:hidden border-b border-purple-electric/20 bg-obsidian-950/95 backdrop-blur-xl max-h-[85vh] overflow-y-auto px-5 py-6"
            >
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  About Us
                </Link>

                {/* Mobile Services Accordion */}
                <div className="py-2">
                  <div className="px-3 text-xs uppercase tracking-wider text-purple-electric font-bold mb-2">
                    Services
                  </div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-muted-light hover:text-purple-electric hover:bg-grape/20"
                      >
                        <DynamicIcon name={s.icon} className="w-4 h-4 text-purple-electric shrink-0" />
                        <span>{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/projects"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Projects & Case Studies
                </Link>
                <Link
                  href="/products"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Our Products
                </Link>
                <Link
                  href="/industries"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Industries We Serve
                </Link>
                <Link
                  href="/government-tenders"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Government Tender Services
                </Link>
                <Link
                  href="/private-tenders"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Private Tender Services
                </Link>
                <Link
                  href="/it-staffing"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  IT Staffing Solutions
                </Link>
                <Link
                  href="/partnership"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/careers"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium rounded-lg text-soft-white hover:text-purple-electric hover:bg-grape/30"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Quick Action Buttons */}
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
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-rich to-purple-electric text-soft-white font-semibold text-sm"
                >
                  <span>Request a Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
