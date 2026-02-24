"use client";
import React from 'react';
import { scrollToSection } from '@/lib/scrollToHash';

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-6 lg:pl-12 relative z-10 flex justify-between items-center xl:items-start">
        <div className="max-w-4xl">
          {/* Main Headline - Strong Typography */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0B1F3B] mb-8 leading-[1.1]">
            AI products, <br />
            <span className="text-[#E07823]">Engineered to ship.</span>
          </h1>

          {/* Subheading / Positioning */}
          <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            <span className="font-bold text-[#0B1F3B]">720</span> is an AI accelerator building
            production-grade software across intelligence, automation, governance,
            and domain-specific AI systems.
          </p>

          <p className="text-md md:text-lg text-slate-500 mb-12 italic border-l-4 border-[#E07823] pl-4">
            We design AI systems that operate reliably under real-world constraints,
            not experimental prototypes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="px-8 py-4 bg-[#E07823] text-white font-bold rounded-md hover:bg-[#c3671d] transition-colors text-center shadow-lg"
              onClick={() => scrollToSection('products')}
            >
              Explore Products
            </button>
            <button
              type="button"
              className="px-8 py-4 border-2 border-[#0B1F3B] text-[#0B1F3B] font-bold rounded-md hover:bg-[#0B1F3B] hover:text-white transition-all text-center"
              onClick={() => scrollToSection('contact')}
            >
              Talk to 720
            </button>
          </div>
        </div>
        <div className="hidden lg:block pointer-events-none">
          <img src="/images/720-zero-logo.png" alt="720 Hero Section" className="w-full h-full opacity-90" />
        </div>
      </div>

      {/* Visual Element - AI Abstract Graphic (Placeholder) */}

    </section>
  );
};

export default HeroSection;