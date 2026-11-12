"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/data/company";

export const ContactInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Software Development",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and project details.");
      return;
    }

    setStatus("submitting");

    // Simulate reliable dispatch & formulate direct WhatsApp link backup
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hello Black Grapes Softech Team!\nName: ${formData.name || "Client"}\nEmail: ${formData.email || "N/A"}\nPhone: ${formData.phone || "N/A"}\nService: ${formData.service}\nBudget: ${formData.budget || "Flexible"}\nRequirement: ${formData.message || "Discuss custom software development"}`
    );
    return `https://wa.me/${COMPANY_DETAILS.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact-section" className="py-24 relative overflow-hidden bg-obsidian-200/40">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-purple-rich/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-rich/20 text-purple-electric border border-purple-electric/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Let&apos;s Build Together
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-soft-white tracking-tight leading-tight">
                Get a Quote &amp; <span className="text-gradient">Start Your Project</span>
              </h2>
              <p className="text-muted-grey text-base mt-4 leading-relaxed">
                Connect directly with our engineering architects in Indore. We analyze your requirements and provide an architectural roadmap, cost projection, and timeline within 24 hours.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={COMPANY_DETAILS.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-panel border border-green-500/30 hover:border-green-500/60 bg-green-950/20 flex items-center gap-4 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-green-900/50 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-soft-white group-hover:text-green-300 transition-colors">
                    Instant WhatsApp Discussion
                  </div>
                  <div className="text-xs text-green-400/80 mt-0.5">
                    Click to chat directly with our team &bull; +91 7470997884
                  </div>
                </div>
              </a>

              {/* Phone Contacts */}
              <div className="p-5 rounded-2xl glass-panel border border-purple-electric/20 space-y-2">
                <div className="flex items-center gap-3 text-soft-white text-sm font-bold">
                  <Phone className="w-4 h-4 text-purple-electric" />
                  <span>Official Direct Call Lines</span>
                </div>
                <div className="pl-7 flex flex-wrap gap-4 text-xs">
                  <a
                    href={`tel:${COMPANY_DETAILS.contact.phone1}`}
                    className="text-muted-light hover:text-purple-electric transition-colors font-medium"
                  >
                    {COMPANY_DETAILS.contact.phone1}
                  </a>
                  <span className="text-muted-dark">|</span>
                  <a
                    href={`tel:${COMPANY_DETAILS.contact.phone2}`}
                    className="text-muted-light hover:text-purple-electric transition-colors font-medium"
                  >
                    {COMPANY_DETAILS.contact.phone2}
                  </a>
                </div>
              </div>

              {/* Email Contacts */}
              <div className="p-5 rounded-2xl glass-panel border border-purple-electric/20 space-y-2">
                <div className="flex items-center gap-3 text-soft-white text-sm font-bold">
                  <Mail className="w-4 h-4 text-purple-electric" />
                  <span>Official Email Addresses</span>
                </div>
                <div className="pl-7 flex flex-col gap-1.5 text-xs">
                  <a
                    href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`}
                    className="text-muted-light hover:text-purple-electric transition-colors font-medium"
                  >
                    {COMPANY_DETAILS.contact.primaryEmail}
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.contact.directorEmail}`}
                    className="text-muted-grey hover:text-purple-electric transition-colors"
                  >
                    {COMPANY_DETAILS.contact.directorEmail} (Technical Director)
                  </a>
                  <a
                    href={`mailto:${COMPANY_DETAILS.contact.managementEmail}`}
                    className="text-muted-grey hover:text-purple-electric transition-colors"
                  >
                    {COMPANY_DETAILS.contact.managementEmail} (Management)
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-2xl glass-panel border border-purple-electric/20 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-electric shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-soft-white">
                    Corporate Headquarters
                  </div>
                  <p className="text-xs text-muted-grey mt-1 leading-relaxed">
                    {COMPANY_DETAILS.address.full}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-grey">
              <Clock className="w-4 h-4 text-purple-electric" />
              <span>Standard Response Time: Under 24 Business Hours</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-purple-electric/30 shadow-2xl shadow-purple-950/80 relative">
              <h3 className="text-2xl font-bold text-soft-white mb-2">
                Request a Project Proposal
              </h3>
              <p className="text-xs sm:text-sm text-muted-grey mb-8">
                Tell us about your project goals, timelines, and technical requirements.
              </p>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-grape/40 border border-purple-electric/50 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto border border-green-500/40">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-soft-white">
                    Proposal Request Received!
                  </h4>
                  <p className="text-sm text-muted-light max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our engineering leadership at Black Grapes Softech will review your requirements for <strong>{formData.service}</strong> and get back to you shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppDirectLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-xs flex items-center gap-2 hover:bg-green-500 transition-colors shadow-lg shadow-green-950/50"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue via WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "Software Development",
                          budget: "",
                          message: "",
                        });
                      }}
                      className="px-5 py-3 rounded-xl glass-panel text-xs text-soft-white hover:bg-grape/60 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white placeholder-muted-dark outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white placeholder-muted-dark outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white placeholder-muted-dark outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                        Primary Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white outline-none transition-all"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-obsidian-950 text-soft-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Government Tender Services" className="bg-obsidian-950 text-soft-white">
                          Government Tender Services
                        </option>
                        <option value="Private Tender Services" className="bg-obsidian-950 text-soft-white">
                          Private Tender Services
                        </option>
                        <option value="IT Staffing Augmentation" className="bg-obsidian-950 text-soft-white">
                          IT Staffing Augmentation
                        </option>
                        <option value="Ready-Made Software Product" className="bg-obsidian-950 text-soft-white">
                          Ready-Made Software Product
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                      Estimated Project Budget (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white outline-none transition-all"
                    >
                      <option value="" className="bg-obsidian-950 text-soft-white">Select Budget Bracket</option>
                      <option value="Under $5,000 / ₹3 Lakhs" className="bg-obsidian-950 text-soft-white">Under $5,000 (₹3 Lakhs)</option>
                      <option value="$5,000 - $15,000 / ₹3-10 Lakhs" className="bg-obsidian-950 text-soft-white">$5,000 - $15,000 (₹3 - 10 Lakhs)</option>
                      <option value="$15,000 - $50,000 / ₹10-35 Lakhs" className="bg-obsidian-950 text-soft-white">$15,000 - $50,000 (₹10 - 35 Lakhs)</option>
                      <option value="$50,000+ / ₹35 Lakhs+" className="bg-obsidian-950 text-soft-white">$50,000+ (₹35 Lakhs+ Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-light uppercase tracking-wider mb-2">
                      Project Goals &amp; Technical Requirements *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your vision, timeline, specific functionalities or challenges..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-100 border border-purple-electric/25 focus:border-purple-electric focus:ring-1 focus:ring-purple-electric text-sm text-soft-white placeholder-muted-dark outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-soft-white bg-gradient-to-r from-purple-rich to-purple-electric hover:from-purple-electric hover:to-purple-rich transition-all duration-300 shadow-xl shadow-purple-900/40 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Proposal Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppDirectLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-4 rounded-xl glass-panel border border-green-500/30 text-green-400 hover:bg-green-950/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Or Send via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
