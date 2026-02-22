import React from 'react';
import { Download, Play, ShieldAlert, FileSpreadsheet, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Install plugin",
      description: "Install BIMetryX directly inside your Revit environment.",
      icon: <Download className="text-primary" />,
    },
    {
      title: "Open your project",
      description: "Load your BIM model and prepare it for automated analysis.",
      icon: <Play className="text-primary" />,
    },
    {
      title: "Scan model",
      description: "Click Scan Model to run compliance and data extraction.",
      icon: <ShieldAlert className="text-primary" />,
    },
    {
      title: "Review report",
      description: "See compliance issues, warnings, and insights instantly.",
      icon: <FileSpreadsheet className="text-primary" />,
    },
    {
      title: "Extract quantities & cost",
      description: "Generate structured QTO data and early cost insights.",
      icon: <FileSpreadsheet className="text-primary" />,
    },
    {
      title: "Use library & education tools",
      description: "Improve your model using real objects and built-in training.",
      icon: <FileSpreadsheet className="text-primary" />,
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-dark mb-4">How it works?</h2>
          <p className="text-body max-w-xl mx-auto text-lg">
            From installation to final reporting—streamline your BIM workflow in six simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Step Number & Icon */}
              <div className="w-16 h-16 bg-white border-4 border-background rounded-full flex items-center justify-center shadow-lg mb-6 relative group hover:scale-110 transition-transform">
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                {step.icon}
              </div>

              {/* Content */}
              <div className="text-center px-4">
                <h4 className="text-xl font-bold text-dark mb-3">{step.title}</h4>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Small arrow: below on mobile/tablet, right on desktop */}
              {index !== steps.length - 1 && (
                <div className="mt-6 text-muted md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2">
                  <ArrowRight className="rotate-90 md:rotate-0 w-5 h-5" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;