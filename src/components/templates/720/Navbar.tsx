"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', sectionId: 'hero' },
  { name: 'Products', sectionId: 'products' },
  { name: 'Services', sectionId: 'services' },
  { name: 'About', sectionId: 'about' },
  { name: 'Insights', sectionId: 'insights' },
];

function scrollToSection(sectionId: string, closeMenu?: () => void) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    closeMenu?.();
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLink = (link: (typeof navLinks)[0]) => {
    const linkClass = 'text-sm font-bold text-[#0B1F3B] hover:text-[#E07823] transition-colors uppercase tracking-widest';
    if (isHomePage) {
      return (
        <a
          href={`#${link.sectionId}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.sectionId, () => setIsOpen(false));
          }}
          className={linkClass}
        >
          {link.name}
        </a>
      );
    }
    return (
      <Link href={`/#${link.sectionId}`} className={linkClass}>
        {link.name}
      </Link>
    );
  };

  const contactLink = () => {
    if (isHomePage) {
      return (
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact', () => setIsOpen(false));
          }}
          className="ml-4 px-6 py-3 bg-[#0B1F3B] text-white text-xs font-black uppercase tracking-[0.2em] rounded hover:bg-[#E07823] transition-all shadow-md"
        >
          Contact Us
        </a>
      );
    }
    return (
      <Link
        href="/#contact"
        className="ml-4 px-6 py-3 bg-[#0B1F3B] text-white text-xs font-black uppercase tracking-[0.2em] rounded hover:bg-[#E07823] transition-all shadow-md"
      >
        Contact Us
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/" className="flex items-center">
            <img src="/images/720-logo.png" alt="720 Logo" className="h-10 " />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span key={link.name}>{navLink(link)}</span>
            ))}
            {contactLink()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0B1F3B] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 pb-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                isHomePage ? (
                  <a
                    key={link.name}
                    href={`#${link.sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.sectionId, () => setIsOpen(false));
                    }}
                    className="text-sm font-bold text-[#0B1F3B] uppercase tracking-widest px-2"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={`/#${link.sectionId}`}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold text-[#0B1F3B] uppercase tracking-widest px-2"
                  >
                    {link.name}
                  </Link>
                )
              )}
              {isHomePage ? (
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact', () => setIsOpen(false));
                  }}
                  className="w-full text-center py-4 bg-[#E07823] text-white font-black uppercase tracking-widest rounded"
                >
                  Contact Us
                </a>
              ) : (
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 bg-[#E07823] text-white font-black uppercase tracking-widest rounded"
                >
                  Contact Us
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;