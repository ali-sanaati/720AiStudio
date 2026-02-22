import React from 'react';
import { Rocket, Cpu, BarChart, Globe, Zap, Lightbulb } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      status: "Current",
      title: "Beta Phase",
      items: ["Basic RuleCheck", "Basic QTO", "Initial Library"],
      icon: <Rocket className="text-primary" />,
      color: "bg-primary"
    },
    {
      status: "",
      title: "Version 1",
      items: ["Advanced RuleCheck", "Professional Reports"],
      icon: <Zap className="text-accent" />,
      color: "bg-accent"
    },
    {
      status: "",
      title: "Version 2",
      items: ["Intelligent auditing", "Smart parking"],
      icon: <Cpu className="text-secondary" />,
      color: "bg-secondary"
    },
    {
      status: "",
      title: "Version 3",
      items: ["Price fluctuation analysis", "Team mode"],
      icon: <Cpu className="text-secondary" />,
      color: "bg-secondary"
    },
    {
      status: "",
      title: "Version 4+",
      items: ["AR mode", "AI design assistant"],
      icon: <Cpu className="text-secondary" />,
      color: "bg-secondary"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4 flex justify-center items-center gap-2">
            <Lightbulb size={18} /> Our Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-dark mb-6">Product Roadmap</h3>
          <p className="text-body max-w-2xl mx-auto">
            We are constantly evolving. From automating building codes to integrating
            Artificial Intelligence in design.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-[2rem] p-8 border border-border hover:shadow-2xl transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      {phase.icon}
                    </div>
                    {phase.status && (
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white ${phase.color}`}>
                        {phase.status}
                      </span>
                    )}
                  </div>

                  <h4 className="text-2xl font-bold text-dark mb-4">{phase.title}</h4>

                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-body text-sm">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;