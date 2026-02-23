import React from 'react';
import { Check, Info } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
  const plans = [
    {
      name: "Beta",
      price: "Free",
      description: "For early adopters and students who want to shape the future of BIMetryX.",
      features: [
        "Core RuleCheck Engine",
        "Standard Object Library",
        "Basic Quantity Takeoff",
      ],
      cta: "Request Beta Access",
      highlight: false
    },
    {
      name: "Pro",
      price: "Custom",
      description: "Advanced tools for professional architects and design studios.",
      features: [
        "Full National Code Compliance",
        "Advanced QTO & Cost Analysis",
        "Professional PDF/Excel Reports",
      ],
      cta: "Book a Demo",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Talk to Us",
      description: "Customized solutions for large construction firms and organizations.",
      features: [
        "Custom Rule Sets (Internal Standards)",
        "Internal System Integration (ERP)",
        "On-site Team Training",
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Simple, Transparent Pricing</h2>
          <p className="text-body max-w-2xl mx-auto">
            Choose the plan that fits your workflow. Start with Beta for free and help us build the future of Revit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlight 
                ? 'bg-white border-primary shadow-2xl scale-105 z-10' 
                : 'bg-white/50 border-border hover:border-border'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </span>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-dark">{plan.price}</span>
                  {plan.price === "Free" && <span className="text-muted text-sm">/ in exchange for feedback</span>}
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-body">
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/bimetryx#contact" className={`block text-center w-full py-4 rounded-xl font-bold transition-all ${
                plan.highlight 
                ? 'bg-primary text-white hover:bg-primary-dark' 
                : 'bg-background text-dark hover:bg-border'
              }`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;