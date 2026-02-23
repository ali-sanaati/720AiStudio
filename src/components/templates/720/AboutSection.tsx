import React from 'react';

const founders = [
  {
    name: "Behrouz Naserolmemar",
    role: "Chairman & Co-Founder",
    desc: "Strategic leadership and institutional direction. Overseeing long-term vision, governance, and ecosystem development.",
    img: "/images/person-2-copy.PNG"
  },
  {
    name: "Mohsen Malek",
    role: "Chief Executive Officer (CEO) & Co-Founder",
    desc: "Leading product vision, AI strategy, and organizational execution. Responsible for growth, innovation, and market expansion.",
    img: "/images/person-1-copy.PNG"
  },
  {
    name: "Ali Sanaati",
    role: "Chief Technology Officer (CTO) & Co-Founder",
    desc: "Architecting AI systems, infrastructure, and scalable engineering frameworks. Responsible for technical execution and platform development.",
    img: "/images/person-3-copy.PNG"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Identity & Strategy */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-[#0B1F3B] text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            We combine strategic thinking, <br />
            <span className="text-[#E07823]">engineering rigor</span>, and domain expertise.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            <span className="font-bold text-[#0B1F3B]">720</span> is an AI accelerator dedicated to building 
            measurable, deployable, and accountable AI systems.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="mb-24">
          <h3 className="text-[#0B1F3B] text-xs font-black uppercase tracking-[0.3em] mb-12 border-b border-slate-100 pb-4">
            Founding Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="group">
                <img src={founder.img} alt="" className='max-h-60' />
                <h4 className="text-2xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#E07823] transition-colors">
                  {founder.name}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-0.5 font-semibold">
                  {founder.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {founder.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values - "We ship fast" */}
        <div className="bg-[#0B1F3B] p-12 md:p-16 rounded-2xl flex flex-col md:flex-row justify-center items-center text-white">
          <div className="mb-8 md:mb-0 text-center">
            <h4 className="text-3xl font-bold mb-2">We work lean. <span className="text-[#E07823]">We ship fast.</span></h4>
            <p className="text-slate-400">We stay accountable to the products we build.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;