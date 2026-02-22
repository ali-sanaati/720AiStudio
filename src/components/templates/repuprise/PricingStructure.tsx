import React from 'react';

const PricingStructure = () => {
  const tiers = [
    {
      name: "Beta Access",
      desc: "Limited early access for selected organizations.",
      features: ["Early ecosystem entry", "Core listening tools", "Initial dashboard access"],
      cta: "Request Access",
      highlight: false,
    },
    {
      name: "Professional Plan",
      desc: "Full platform access with analytics & alerts.",
      features: ["Comprehensive analytics suite", "Smart alert system", "Standard support"],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Enterprise Plan",
      desc: "Custom deployment and advisory integration.",
      features: ["Advisory integration", "Predictive modeling", "Dedicated support"],
      cta: "Contact Sales",
      highlight: false,
    }
  ];

  return (
    <section id="pricing" className="bg-[#1E1B22] py-24 border-t border-[#3F2A54]">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-20">
          <h2 className="text-[#B885BE] text-sm font-black uppercase tracking-[0.3em] mb-4">
            Investment Tiers
          </h2>
          <h3 className="text-white text-4xl font-extrabold mb-4">
            Pricing Structure
          </h3>
          <p className="text-[#8F7FA8] max-w-2xl mx-auto">
            Choose the level of intelligence that fits your organization's scale and strategic needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-3xl border transition-all relative ${
                tier.highlight 
                ? 'bg-[#3F2A54]/20 border-[#5B3E7A] shadow-lg shadow-[#5B3E7A]/10 scale-105 z-10' 
                : 'bg-[#1E1B22] border-[#3F2A54] hover:border-[#B885BE]/50'
              }`}
            >
              <h4 className="text-white text-2xl font-bold mb-4">{tier.name}</h4>
              <p className="text-[#8F7FA8] text-sm mb-8 leading-relaxed">
                {tier.desc}
              </p>
              
              <ul className="space-y-4 mb-12">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-[#E6E4EA] text-sm flex items-center gap-3">
                    <span className="text-[#5B3E7A]">▹</span> {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                tier.highlight 
                ? 'bg-[#5B3E7A] text-white hover:bg-[#5B3E7A]/80' 
                : 'bg-[#3F2A54]/40 text-[#E6E4EA] border border-[#3F2A54] hover:bg-[#3F2A54]'
              }`}>
                {tier.cta} 
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingStructure;