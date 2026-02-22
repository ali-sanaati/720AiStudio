import React from 'react';

const PlatformHighlights = () => {
  const highlights = [
    {
      title: "Multi-Platform Monitoring",
      desc: "Monitoring across global and regional platforms including Instagram, X (Twitter), Telegram, YouTube, Facebook, Eita and additional digital channels.",
    },
    {
      title: "AI-Based Emotion Analysis",
      desc: "Advanced NLP engine classifies sentiment polarity and measures emotional intensity to detect narrative shifts.",
    },
    {
      title: "Automated Crisis Alerts",
      desc: "Smart alerts triggered by abnormal sentiment shifts, sudden mention spikes, emotional direction changes, or competitive signals.",
    },
    {
      title: "Comprehensive Dashboard",
      desc: "Includes geographic segmentation, multi-language analysis, competitor comparison, share of voice metrics, and influence tracking.",
    }
  ];

  return (
    <section id="platform" className="bg-[#1E1B22] py-24 border-t border-[#3F2A54]">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-[#B885BE] text-sm font-black uppercase tracking-[0.3em] mb-4">
            Platform Capabilities
          </h2>
          <h3 className="text-white text-4xl font-extrabold mb-6">
            Platform Highlights
          </h3>
        </div>

        {/* Highlights Grid - Derived from Page 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="p-10 bg-[#3F2A54]/10 border border-[#3F2A54] rounded-3xl hover:border-[#5B3E7A] transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#5B3E7A]/20 flex items-center justify-center text-[#B885BE] font-black text-xl group-hover:bg-[#5B3E7A] group-hover:text-white transition-all">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-4 uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[#8F7FA8] leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;