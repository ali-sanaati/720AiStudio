"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { scrollToSection } from '@/lib/scrollToHash';

const productLinks = [
  { name: "BIMetryX", href: "/bimetryx" },
  { name: "RepUpRise", href: "/repuprise" },
  { name: "HealthX", href: "#" },
  { name: "AIManager", href: "#" },
  { name: "XMarket", href: "#" },
  { name: "Architectural Intelligence", href: "#" },
];

const serviceLinks = [
  { name: "AI Product Development", sectionId: "services" as const },
  { name: "Data & ML Engineering", sectionId: "services" as const },
  { name: "AI Governance", sectionId: "services" as const },
  { name: "Industry AI Implementation", sectionId: "services" as const },
];

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const sectionLink = (sectionId: string, label: string, linkClass: string) => {
    if (isHomePage) {
      return (
        <button
          type="button"
          onClick={() => scrollToSection(sectionId)}
          className={linkClass}
        >
          {label}
        </button>
      );
    }
    return (
      <Link href={`/#${sectionId}`} className={linkClass}>
        {label}
      </Link>
    );
  };

  const linkClass = "text-sm text-slate-300 hover:text-[#E07823] transition-colors";

  return (
    <footer className="bg-[#0B1F3B] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <Link href="/">
              <img src="/images/720-white-logo.png" className="h-10 mb-4" alt="720 Logo" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AI Products. Engineered to Ship. <br />
              Building production-grade software for real-world operations.
            </p>
            <a 
              href="mailto:hello@720aistudio.com" 
              className="text-[#E07823] font-bold text-sm hover:underline"
            >
              hello@720aistudio.com
            </a>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Products</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  {sectionLink(link.sectionId, link.name, linkClass)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Company</h4>
            <ul className="space-y-4">
              <li>{sectionLink("about", "About Us", linkClass)}</li>
              <li>{sectionLink("insights", "Insights", linkClass)}</li>
              <li><Link href="" className={linkClass}>Privacy Policy</Link></li>
              <li><Link href="" className={linkClass}>Terms of Service</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Offices</h4>
            <div className="space-y-6">
              <address className="text-sm text-slate-300 not-italic leading-relaxed">
                <span className="text-slate-400 font-semibold block mb-1">720 — Tehran Office (West)</span>
                Unit 59, 5F, Galleria Building<br />
                Rajab Salahi St.<br />
                Niayesh – Jannat Abad<br />
                Tehran, Iran
              </address>
              <address className="text-sm text-slate-300 not-italic leading-relaxed">
                <span className="text-slate-400 font-semibold block mb-1">720 — Tehran Office (Central)</span>
                Unit 7<br />
                No. 7, 8th Alley<br />
                Eshghiar St., Khorramshahr St.<br />
                Tehran, Iran
              </address>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">
            © {new Date().getFullYear()} 720 AI Accelerator. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-[#E07823] font-bold uppercase tracking-widest italic">
              We ship fast.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;