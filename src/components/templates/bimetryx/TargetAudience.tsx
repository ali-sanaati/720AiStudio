import React from 'react';
import { PenTool, Building2, HardHat, GraduationCap, Award } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      title: "Architecture firms",
      description: "Design teams that need faster compliance validation and reliable model data.",
      icon: <PenTool size={32} className="text-primary" />,
    },
    {
      title: "Construction companies",
      description: "Builders who want clearer quantities, cost insights, and fewer execution surprises.",
      icon: <Building2 size={32} className="text-primary" />,
    },
    {
      title: "Licensed engineers",
      description: "Professionals responsible for code-compliant and technically accurate designs.",
      icon: <HardHat size={32} className="text-primary" />,
    },
    {
      title: "Interior designers",
      description: "Designers who need real objects and accurate dimensions for implementation.",
      icon: <Award size={32} className="text-primary" />,
    },
    {
      title: "BIM Students",
      description: "Learners who want to understand regulations, modeling standards, and real workflows.",
      icon: <GraduationCap size={32} className="text-primary" />,
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Section */}
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Who is it for?
          </h2>
          <h3 className="text-4xl font-bold text-dark">
            Tailored for the <span className="text-primary">AEC Industry</span>
          </h3>
          <p className="mt-4 text-body max-w-2xl text-lg">
            BIMetryX is designed by architects for the entire AEC ecosystem to bridge the gap between digital models and reality.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-background group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 bg-primary/5' : ''
              }`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {audience.icon}
              </div>
              <h4 className="text-2xl font-bold text-dark mb-3">{audience.title}</h4>
              <p className="text-body leading-relaxed italic">
                "{audience.description}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;