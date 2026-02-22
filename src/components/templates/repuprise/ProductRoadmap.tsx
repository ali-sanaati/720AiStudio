import React from 'react';

const ProductRoadmap = () => {
  const phases = [
    {
      title: "Phase 1",
      desc: "Core listening + dashboard analytics",
    },
    {
      title: "Phase 2",
      desc: "Advanced competitive analysis + structured reporting",
    },
    {
      title: "Phase 3",
      desc: "Predictive narrative modeling",
    },
    {
      title: "Phase 4",
      desc: "AI-powered strategic assistant",
    },
    {
      title: "Phase 5",
      desc: "Enterprise-level deployment & global expansion",
    }
  ];

  return (
    <section id="roadmap" className="bg-[#1E1B22] py-24 border-t border-[#3F2A54]">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="mb-20 text-center">
          <h2 className="text-[#B885BE] text-sm font-black uppercase tracking-[0.3em] mb-4">
            Future Vision
          </h2>
          <h3 className="text-white text-4xl font-extrabold mb-6">
            Product Roadmap
          </h3>
          <div className="w-24 h-1 bg-[#5B3E7A] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border transition-all bg-[#3F2A54]/20 border-[#5B3E7A] shadow-lg shadow-[#5B3E7A]/10`}
            >
              <div className="flex-shrink-0 w-24 text-center md:text-left">
                <span className={`text-[10px] font-black uppercase tracking-widest text-[#B885BE]`}>
                  {phase.title}
                </span>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-white text-lg font-bold">
                  {phase.desc}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductRoadmap;