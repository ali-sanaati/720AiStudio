"use client";

import { useState } from "react";
import type { Product } from '@/types/products';

const CTA_FEEDBACK_DURATION_MS = 2500;

const products: Product[] = [
  {
    id: "bimetryx",
    name: "BIMetryX",
    statement: "BIMetryX transforms regulatory standards and project requirements into automated compliance systems embedded within BIM environments.",
    positioning: "AI compliance and intelligence for BIM workflows.",
    problem: "Large BIM projects suffer from fragmented standards, manual validation processes, and late-stage rework.",
    solution: "A structured rule engine that translates compliance requirements into automated validation workflows.",
    capabilities: ["Rule-based compliance engine", "Automated reporting dashboards", "Multi-project portfolio management", "Design review acceleration tools"],
    useCases: ["Internal QA for architecture firms", "Pre-handover compliance validation", "Government/Enterprise oversight"],
    differentiation: "Built by BIM practitioners. Scalable architecture. Integration-ready.",
    ctaLink: "/bimetryx"
  },
  {
    id: "repuprise",
    name: "RepUpRise",
    statement: "RepUpRise is a comprehensive AI-driven reputation management platform designed to help organizations gain full social awareness, monitor brand perception in real time, and respond strategically to digital environments.",
    positioning: "AI-Powered Reputation Intelligence & Management Platform",
    problem: "Organizations lack structured visibility into online narratives, sentiment shifts, and early crisis signals.",
    solution: "It combines advanced social listening, emotional intensity analysis, smart crisis alerts, and communication strategy support — all within a unified intelligence ecosystem.",
    capabilities: [
      "Real-time social monitoring across platforms",
      "Emotional sentiment & intensity analysis",
      "Brand crisis early-warning system",
      "Competitive and industry analysis",
      "Strategic communication advisory layer"
    ],
    useCases: [
      "Brand monitoring",
      "Crisis detection",
      "Competitive intelligence",
      "Industry trend tracking"
    ],
    differentiation: "Built especially for SMEs and growing enterprises that need enterprise-level reputation intelligence without enterprise-level overhead.",
    ctaLink: "/repuprise"
  },
  {
    id: "healthx",
    name: "HealthX",
    statement: "HealthX delivers operational intelligence for healthcare systems, turning medical data into actionable performance insights.",
    positioning: "AI-powered health workflow intelligence.",
    capabilities: ["Health KPI dashboards", "Risk signal detection", "Performance optimization insights", "Decision-support recommendations"],
    useCases: ["Healthcare institutions", "Corporate wellness programs", "Public health analytics teams"],
    ctaLink: "#"
  },
  {
    id: "aimanager",
    name: "AIManager",
    statement: "AIManager is the central nervous system for AI governance, providing oversight and control for production-grade AI models.",
    positioning: "Operational governance for AI systems.",
    capabilities: ["AI performance monitoring", "Model lifecycle management", "Governance dashboards", "Compliance tracking"],
    useCases: [],
    ctaLink: "#"
  },
  {
    id: "xmarket",
    name: "XMarket",
    statement: "XMarket identifies strategic market opportunities by synthesizing complex market signals into structured intelligence.",
    positioning: "AI-powered market intelligence platform.",
    capabilities: ["Competitive monitoring", "Trend detection", "Share-of-voice analysis", "Predictive opportunity mapping"],
    useCases: [],
    ctaLink: "#"
  },
  {
    id: "arch-intel",
    name: "Architectural Intelligence",
    statement: "Architectural Intelligence automates the heavy lifting of design documentation and coordination through specialized AI models.",
    positioning: "AI built for architecture and AEC industries.",
    capabilities: ["Design optimization analytics", "Documentation intelligence", "Coordination dashboards", "Performance insights"],
    useCases: [],
    ctaLink: "#"
  }
];

const ProductsIndex = () => {
  const [clickedProductId, setClickedProductId] = useState<string | null>(null);

  const handleCtaClick = (productId: string) => {
    setClickedProductId(productId);
    setTimeout(() => setClickedProductId(null), CTA_FEEDBACK_DURATION_MS);
  };

  const isLinkedProduct = (id: string) => id === "bimetryx" || id === "repuprise";

  return (
    <section id="products" className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="mb-20 max-w-4xl">
          <h2 className="text-[#0B1F3B] text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Product <span className="text-[#E07823]">Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-[#0B1F3B] pl-6">
            A growing ecosystem of applied AI platforms, each with its own dedicated product website and deployment strategy.
            The 720 website introduces the ecosystem. Each product website contains full technical and
            commercial detail.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-100 p-6 sm:p-10 rounded-2xl hover:border-[#E07823] transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-4xl font-bold text-[#0B1F3B] group-hover:text-[#E07823] transition-colors">
                    {product.name}
                  </h3>
                  <div className="h-1 w-12 bg-[#E07823]"></div>
                </div>

                {/* Product Statement - NEW */}
                <p className="text-lg font-semibold text-[#0B1F3B] mb-4 leading-snug">
                  {product.statement}
                </p>

                <p className="text-[#E07823] text-sm font-bold uppercase tracking-[0.15em] mb-8">
                  {product.positioning}
                </p>

                {/* Problem & Solution */}
                {(product.problem || product.solution) && (
                  <div className="space-y-6 mb-8 p-6 bg-slate-50 rounded-xl">
                    {product.problem && (
                      <p className="text-sm text-slate-600 leading-relaxed">
                        <strong className="text-[#0B1F3B] block mb-1">Problem:</strong> {product.problem}
                      </p>
                    )}
                    {product.solution && (
                      <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                        <strong className="text-[#0B1F3B] block mb-1">Solution:</strong> {product.solution}
                      </p>
                    )}
                  </div>
                )}

                {/* Grid for Capabilities and Use Cases */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <ul className="space-y-3">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Core Capabilities</h4>
                    {product.capabilities.map((cap, index) => (
                      <li key={index} className="flex items-start text-xs text-slate-500">
                        <span className="text-[#E07823] mr-2 text-lg leading-none">•</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                  {product.useCases.length > 0 && (
                    <ul className="space-y-3">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Use Cases</h4>
                      {product.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start text-xs text-slate-500">
                          <span className="text-[#0B1F3B] mr-2 text-lg leading-none">›</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {product.differentiation && (
                  <div className="mb-10 text-[11px] text-slate-400 font-medium italic">
                    Note: {product.differentiation}
                  </div>
                )}
              </div>

              {/* Action Button */}
              {isLinkedProduct(product.id) ? (
                <a
                  href={product.ctaLink}
                  className="flex items-center justify-center w-full py-5 px-2 bg-[#0B1F3B] text-white text-xs sm:text-sm font-bold rounded-lg uppercase tracking-widest hover:bg-[#E07823] transition-all duration-300 shadow-md group-hover:scale-[1.02] text-center"
                >
                  Visit {product.name} Website
                  <svg className="min-w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => handleCtaClick(product.id)}
                  disabled={clickedProductId === product.id}
                  className={`flex items-center justify-center w-full py-5 px-2 text-white text-xs sm:text-sm font-bold rounded-lg uppercase tracking-widest transition-all duration-300 shadow-md text-center gap-1 ${
                    clickedProductId === product.id
                      ? "bg-[#eaa872] cursor-not-allowed scale-[1.02]"
                      : "bg-[#0B1F3B] hover:bg-[#E07823] group-hover:scale-[1.02]"
                  }`}
                >
                  {clickedProductId === product.id ? (
                    <>
                      <span>{product.name} under construction</span>
                      <span className="inline-flex gap-1 ml-1 items-center">
                        <span className="product-cta-dot w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="product-cta-dot w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="product-cta-dot w-1.5 h-1.5 rounded-full bg-white" />
                      </span>
                    </>
                  ) : (
                    <>
                      Visit {product.name} Website
                      <svg className="min-w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsIndex;