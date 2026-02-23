"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { handleHashLinkClick, scrollToSection } from "@/lib/scrollToHash";

const navItems = [
  { label: "Product", sectionId: "product" },
  { label: "Features", sectionId: "features" },
  { label: "RuleCheck", sectionId: "rulecheck" },
  { label: "Cost & QTO", sectionId: "cost" },
  { label: "Library", sectionId: "library" },
  { label: "Education", sectionId: "education" },
  { label: "Roadmap", sectionId: "roadmap" },
  { label: "Pricing", sectionId: "pricing" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isBimetryxPage = pathname === "/bimetryx";

  const navLink = (item: (typeof navItems)[0]) => {
    const { label, sectionId } = item;
    if (isBimetryxPage) {
      return (
        <a
          href={`#${sectionId}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(sectionId);
            setOpen(false);
          }}
          className="text-sm text-body hover:text-dark transition"
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        href={`/bimetryx#${sectionId}`}
        className="text-sm text-body hover:text-dark transition"
        onClick={(e) => handleHashLinkClick(e, `/bimetryx#${sectionId}`, pathname)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1300px] px-2 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/bimetryx" className="font-semibold text-xl text-dark lg:hidden">
          <img src="/images/bimetryx-logo.png" alt="" className="w-24" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-5">
          <Link href="/bimetryx" className="font-semibold text-xl text-dark">
            <img src="/images/bimetryx-logo.png" alt="" className="w-24" />
          </Link>
          {navItems.map((item) => (
            <span key={item.label}>{navLink(item)}</span>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/bimetryx#contact"
            className="px-4 py-2 rounded-lg border border-border text-sm hover:bg-background transition"
            onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
          >
            Download Beta
          </Link>

          <Link
            href="/bimetryx#contact"
            className="px-4 py-2 rounded-lg bg-primary-dark text-white text-sm hover:bg-primary transition"
            onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
          >
            Book a Demo
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md border border-border"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">

            {navItems.map((item) =>
              isBimetryxPage ? (
                <a
                  key={item.label}
                  href={`#${item.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.sectionId);
                    setOpen(false);
                  }}
                  className="text-body"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={`/bimetryx#${item.sectionId}`}
                  onClick={(e) => { handleHashLinkClick(e, `/bimetryx#${item.sectionId}`, pathname); setOpen(false); }}
                  className="text-body"
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/bimetryx#contact"
                className="px-4 py-3 rounded-lg border border-border text-center"
                onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
              >
                Download Beta
              </Link>

              <Link
                href="/bimetryx#contact"
                className="px-4 py-3 rounded-lg bg-primary-dark text-white text-center"
                onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
              >
                Book a Demo
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}