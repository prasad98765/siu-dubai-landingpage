"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Facebook, Mail, Phone, MapPin, Globe, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";

const BRAND_LINKS = [
  "Master of Business Administration",
  "Master Degree in Business Management",
  "MBA Online",
  "MBA Dubai",
  "Symbiosis International University Online MBA",
  "SSDL Online MBA",
  "Symbiosis Distance MBA",
  "Symbiosis School for Online and Digital Learning",
];

/**
 * Full-width site footer with logo, quick links, programs, contact info, and legal.
 */
export default function Footer() {
  return (
    <footer className="bg-[#1a0a00] text-white" aria-label="Site footer">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#8B0000] rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-extrabold tracking-tighter">SIU</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-tight">SIU DUBAI</p>
                <p className="text-[10px] text-white/60 uppercase tracking-widest">Dubai Campus</p>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed mb-4 max-w-xs">
              {SITE.copyright}
              <br />
              {SITE.constituent}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#8B0000] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
        
          </div>

          {/* Programs */}
          <div>
         
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                <span>Dubai International Academic City, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone className="w-4 h-4 text-[#8B0000] shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="w-4 h-4 text-[#8B0000] shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>

            {/* Icon row */}
            <div className="flex items-center gap-4 mt-5">
              <Globe className="w-6 h-6 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-6 h-6 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <FileText className="w-6 h-6 text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-[11px] text-white/30 text-center">
            EXCELLENCE IN GLOBAL HIGHER EDUCATION
          </p>
        </div>
      </div>

      {/* Brand links strip */}
      <div className="border-t border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-[10px] text-white/25 text-center leading-relaxed">
            {BRAND_LINKS.join(" || ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
