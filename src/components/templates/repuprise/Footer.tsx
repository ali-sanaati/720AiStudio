"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/scrollToHash";

const sectionLinks = [
  { label: "Home", sectionId: "hero" },
  { label: "Problem", sectionId: "problem" },
  { label: "Solution", sectionId: "solution" },
  { label: "Platform", sectionId: "platform" },
  { label: "Services", sectionId: "services" },
  { label: "Market", sectionId: "market" },
  { label: "Roadmap", sectionId: "roadmap" },
  { label: "Pricing", sectionId: "pricing" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isRepuprisePage = pathname === "/repuprise";

  const sectionLink = (sectionId: string, label: string, className: string) => {
    if (isRepuprisePage) {
      return (
        <button
          type="button"
          onClick={() => scrollToSection(sectionId)}
          className={className}
        >
          {label}
        </button>
      );
    }
    return (
      <Link href={`/repuprise#${sectionId}`} className={className}>
        {label}
      </Link>
    );
  };

  const linkClass =
    "text-sm text-[#8F7FA8] hover:text-[#B885BE] transition-colors";

  return (
    <footer className="bg-[#1E1B22] border-t border-[#3F2A54]">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/repuprise" className="inline-block mb-5">
              <img
                src="/images/repuprise-logo.png"
                alt="RepUpRise"
                className="h-14"
              />
            </Link>
            <p className="text-[#8F7FA8] text-sm leading-relaxed max-w-xs mb-6">
              AI-powered reputation intelligence. Social awareness. Real-time
              intelligence. Strategic action.
            </p>
            <a
              href="mailto:info@repuprise.com"
              className="text-[#5B3E7A] font-bold text-sm hover:text-[#B885BE] transition-colors"
            >
              info@repuprise.com
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#5B3E7A] mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {sectionLinks.slice(0, 5).map((item) => (
                <li key={item.sectionId}>
                  {sectionLink(item.sectionId, item.label, linkClass)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#5B3E7A] mb-6">
              More
            </h4>
            <ul className="space-y-3">
              {sectionLinks.slice(5).map((item) => (
                <li key={item.sectionId}>
                  {sectionLink(item.sectionId, item.label, linkClass)}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#5B3E7A] mb-6">
              Get Started
            </h4>
            <p className="text-[#E6E4EA] text-sm mb-6">
              Join the beta or schedule a demo.
            </p>
            {sectionLink(
              "contact",
              "Contact Us",
              "inline-flex items-center justify-center px-6 py-3 bg-[#5B3E7A] text-white text-[10px] font-black uppercase tracking-widest rounded hover:bg-[#8F7FA8] transition-all"
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3F2A54]">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#8F7FA8] uppercase tracking-widest">
            © {new Date().getFullYear()} RepUpRise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
