import React from 'react';

const InsightsSection = () => {
  const topics = [
    "AI Governance",
    "BIM Automation",
    "Market Intelligence",
    "Narrative Analysis",
    "Operational AI Systems"
  ];

  return (
    <section id="insights" className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-[#0B1F3B] text-3xl font-extrabold mb-2 uppercase tracking-tighter">Insights</h2>
          <p className="text-slate-500 text-sm font-medium">
            Applied intelligence. <span className="text-[#E07823]">Practical AI.</span> Real deployment.
          </p>
        </div>

        {/* Topics List - Clean & Focused */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="flex items-center py-4 border-b border-slate-100 group cursor-pointer"
            >
              <span className="w-2 h-2 bg-[#E07823] rounded-full mr-4 group-hover:scale-150 transition-transform"></span>
              <span className="text-[#0B1F3B] text-lg font-bold tracking-tight group-hover:translate-x-2 transition-transform">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;