"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleHashLinkClick, scrollToSection } from "@/lib/scrollToHash";

const footerLinks = {
  product: [
    { label: "RuleCheck", sectionId: "rulecheck" },
    { label: "Cost & QTO", sectionId: "cost" },
    { label: "Library", sectionId: "library" },
    { label: "Education", sectionId: "education" },
  ],
  company: [
    { label: "About", sectionId: "about" },
    { label: "Roadmap", sectionId: "roadmap" },
    { label: "Pricing", sectionId: "pricing" },
    { label: "Contact", sectionId: "contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isBimetryxPage = pathname === "/bimetryx";

  const sectionLink = (item: { label: string; sectionId: string }) => {
    const linkClass = "text-sm text-body hover:text-dark transition";
    if (isBimetryxPage) {
      return (
        <a
          href={`#${item.sectionId}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.sectionId);
          }}
          className={linkClass}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link href={`/bimetryx#${item.sectionId}`} className={linkClass} onClick={(e) => handleHashLinkClick(e, `/bimetryx#${item.sectionId}`, pathname)}>
        {item.label}
      </Link>
    );
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/bimetryx" className="inline-block mb-4">
              <img
                src="/images/bimetryx-logo.png"
                alt="BIMetryX"
                className="w-24"
              />
            </Link>
            <p className="text-sm text-muted max-w-xs">
              The missing link between your BIM model and construction execution.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.label}>{sectionLink(item)}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.label}>{sectionLink(item)}</li>
              ))}
            </ul>
          </div>

          {/* CTA & Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Get in touch
            </h3>
            <a
              href="mailto:info@bimetryx.com"
              className="text-sm text-body hover:text-primary transition block mb-6"
            >
              info@bimetryx.com
            </a>
            <Link
              href="/bimetryx#contact"
              className="inline-block px-6 py-3 rounded-xl font-bold text-sm bg-primary-dark text-white hover:bg-primary transition-all"
              onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} BIMetryX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
