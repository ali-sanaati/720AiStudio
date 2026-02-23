"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { handleHashLinkClick, scrollToSection } from "@/lib/scrollToHash";

const navItems = [
  { label: "Product", sectionId: "solution" },
  { label: "Platform", sectionId: "platform" },
  { label: "Listening", sectionId: "platform" },
  { label: "Sentiment Engine", sectionId: "platform" },
  { label: "Analytics", sectionId: "platform" },
  { label: "Alerts", sectionId: "platform" },
  { label: "Services", sectionId: "services" },
  { label: "Use Cases", sectionId: "solution" },
  { label: "Market", sectionId: "market" },
  { label: "Roadmap", sectionId: "roadmap" },
];

const linkClass =
  "text-[#8F7FA8] hover:text-[#B885BE] text-[10px] font-bold uppercase tracking-widest transition-colors";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isRepuprisePage = pathname === "/repuprise";

  const closeMobile = () => setMobileOpen(false);

  const navLink = (item: (typeof navItems)[0], forMobile = false) => {
    const mobileLinkClass = forMobile
      ? "block py-3 text-[#E6E4EA] hover:text-[#B885BE] text-sm font-bold uppercase tracking-widest transition-colors border-b border-[#3F2A54]/50 last:border-0"
      : linkClass;
    if (isRepuprisePage) {
      return (
        <a
          href={`#${item.sectionId}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.sectionId);
            if (forMobile) closeMobile();
          }}
          className={mobileLinkClass}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link
        href={`/repuprise#${item.sectionId}`}
        className={mobileLinkClass}
        onClick={(e) => { handleHashLinkClick(e, `/repuprise#${item.sectionId}`, pathname); if (forMobile) closeMobile(); }}
      >
        {item.label}
      </Link>
    );
  };

  const requestAccessLink = (forMobile = false) => {
    const baseClass = "text-[#E6E4EA] text-[10px] font-black uppercase tracking-widest px-4 py-2 border border-[#3F2A54] rounded hover:bg-[#3F2A54]";
    const visibility = forMobile ? "" : "hidden lg:flex";
    if (isRepuprisePage) {
      return (
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
            if (forMobile) closeMobile();
          }}
          className={`${baseClass} ${visibility}`}
        >
          Request Access
        </a>
      );
    }
    return (
      <Link href="/repuprise#contact" className={`${baseClass} ${visibility}`} onClick={(e) => { handleHashLinkClick(e, "/repuprise#contact", pathname); if (forMobile) closeMobile(); }}>
        Request Access
      </Link>
    );
  };

  const bookDemoLink = (forMobile = false) => {
    const baseClass = "bg-[#5B3E7A] text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded hover:bg-[#8F7FA8] transition-all shadow-lg shadow-[#5B3E7A]/20";
    const visibility = forMobile ? "w-full text-center py-4" : "hidden lg:block";
    if (isRepuprisePage) {
      return (
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
            if (forMobile) closeMobile();
          }}
          className={`${baseClass} ${visibility}`}
        >
          Book a Demo
        </a>
      );
    }
    return (
      <Link href="/repuprise#contact" className={`${baseClass} ${visibility}`} onClick={(e) => { handleHashLinkClick(e, "/repuprise#contact", pathname); if (forMobile) closeMobile(); }}>
        Book a Demo
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-[#1E1B22]/95 backdrop-blur-md border-b border-[#3F2A54]">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/repuprise" className="flex items-center">
          <img src="/images/repuprise-icon.png" alt="RepUpRise" className="h-12 md:h-13" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex space-x-5">
          {navItems.map((item) => (
            <span key={item.label}>{navLink(item)}</span>
          ))}
        </div>

        {/* Desktop CTAs + Mobile menu button */}
        <div className="flex items-center gap-4">
          {requestAccessLink()}
          {bookDemoLink()}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded border border-[#3F2A54] text-[#E6E4EA] hover:bg-[#3F2A54] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-[#3F2A54] bg-[#1E1B22]">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <span key={item.label}>{navLink(item, true)}</span>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-[#3F2A54]">
              {requestAccessLink(true)}
              {bookDemoLink(true)}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
