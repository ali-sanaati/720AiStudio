import React from 'react';

const MarketAnalysis = () => {
  const marketSizes = [
    { label: "TAM (Total Addressable Market)", value: "$10 Billion", desc: "Annually globally" },
    { label: "SAM (Serviceable Addressable Market)", value: "$2 Billion", desc: "Annually for SME segment" },
    { label: "SOM (Serviceable Obtainable Market)", value: "$500 Million", desc: "Targeted initial share" }
  ];

  const insights = [
    { text: "70% of SMEs struggle with online content analysis.", icon: "📉" },
    { text: "84% of consumers trust online reviews as much as personal recommendations.", icon: "🤝" }
  ];

  return (
    <section id="market" className="bg-[#1E1B22] py-24 border-t border-[#3F2A54]">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-[#B885BE] text-sm font-black uppercase tracking-[0.3em] mb-4">
              Primary Entry Market
            </h2>
            <h3 className="text-white text-4xl font-extrabold mb-6">
              Small & Medium Enterprises (SMEs)
            </h3>
            <p className="text-[#8F7FA8] text-lg leading-relaxed mb-8">
              SMEs represent 95% of all businesses and are highly dependent on digital reputation, yet lack structured internal reputation management systems.
            </p>
            
            <div className="space-y-4">
              {insights.map((insight, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[#3F2A54]/10 border border-[#3F2A54] rounded-xl">
                  <span className="text-2xl">{insight.icon}</span>
                  <p className="text-[#E6E4EA] text-sm font-medium">{insight.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#5B3E7A]/20 to-transparent p-10 rounded-3xl border border-[#5B3E7A]/30">
            <h4 className="text-white text-xl font-bold mb-10 uppercase tracking-widest text-center">
              Market Opportunity
            </h4>
            <div className="space-y-8">
              {marketSizes.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-[#8F7FA8] text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white text-4xl font-black mb-1">{item.value}</p>
                  <p className="text-[#B885BE] text-xs italic">{item.desc}</p>
                  {index < 2 && <div className="w-12 h-[1px] bg-[#3F2A54] mx-auto mt-6"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#8F7FA8] text-sm max-w-2xl mx-auto italic">
            "Increasing reliance on social media and AI adoption expands the opportunity globally."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;