import React from 'react';

const services = [
  {
    title: "AI Product Development",
    desc: "From discovery to scalable deployment.",
  },
  {
    title: "Data & ML Engineering",
    desc: "Pipeline design, model training, and MLOps systems.",
  },
  {
    title: "AI Governance & Infrastructure",
    desc: "Monitoring, compliance, and lifecycle management.",
  },
  {
    title: "Industry AI Implementation",
    desc: "Domain-specific AI deployment across architecture, health, and market sectors.",
  }
];

const ServicesPage = () => {
  return (
    <section id="services" className="bg-[#0B1F3B] py-20">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header - Minimalist */}
        <div className="border-l-4 border-[#E07823] pl-6 mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
          <p className="text-slate-400 text-sm uppercase tracking-widest">Expertise in Applied Intelligence</p>
        </div>

        {/* Services Grid - Clean 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex items-center mb-4">
                <span className="text-[#E07823] font-mono mr-4 text-lg font-bold">0{index + 1}</span>
                <h3 className="text-white text-xl font-bold group-hover:text-[#E07823] transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed border-b border-slate-800 pb-6 group-hover:border-[#E07823] transition-all">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;