import React from 'react';
import { ShieldCheck, BarChart3, Box, GraduationCap } from 'lucide-react';

const WhatIsBIMetryX = () => {
  const pillars = [
    {
      title: "RuleCheck Engine",
      description: "Automated compliance checking against national building regulations to identify legal issues early.",
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    },
    {
      title: "Cost & QTO",
      description: "Model-based quantity takeoff and cost estimation to manage financial risks before construction.",
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
    },
    {
      title: "Real Objects Library",
      description: "A lightweight, real-market object library to bring your digital model closer to execution reality.",
      icon: <Box className="w-12 h-12 text-primary" />,
    },
    {
      title: "Education Hub",
      description: "Built-in training for BIM, compliance, and modeling best practices.",
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
    }
  ];

  return (
    <section id="product" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              What is BIMetryX?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
              Bridging the gap between BIM models and real-world execution.
            </h3>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl text-body leading-relaxed lg:mt-13">
              BIMetryX is an intelligent Autodesk Revit plugin that integrates three critical processes into a single workflow. It helps teams identify legal issues, cost risks, and gaps before submission or construction begins.
            </p>
          </div>
        </div>

        {/* Three-Pillar Diagram Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">{pillar.icon}</div>
              <h4 className="text-2xl font-bold text-dark mb-4">{pillar.title}</h4>
              <p className="text-body leading-relaxed mb-4">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default WhatIsBIMetryX;