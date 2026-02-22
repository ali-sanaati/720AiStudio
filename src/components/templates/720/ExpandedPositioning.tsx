import React from 'react';

const ExpandedPositioning = () => {
  return (
    <section id="positioning" className="bg-[#0B1F3B] py-20 md:py-32 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Philosophy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Artificial intelligence is not valuable <br />
              <span className="text-[#E07823]">until it operates at scale.</span> 
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              At 720, we focus on <span className="text-white font-semibold underline decoration-[#E07823]">deployable AI</span>: 
              measurable systems integrated into operational workflows.
            </p>
            <p className="text-slate-400">
              Our platforms are designed to transform fragmented data into structured intelligence 
              and convert insight into action.
            </p>
          </div>

          {/* Right Side: Operational Layers List */}
          <div className="space-y-8">
            <h3 className="text-[#E07823] uppercase tracking-widest font-bold text-sm">
              Operational Layers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Layer 1 */}
              <div className="border-l-2 border-[#E07823] pl-4">
                <span className="text-2xl font-bold block">01</span>
                <h4 className="font-bold text-xl mb-1">Intelligence Layer</h4>
                <p className="text-sm text-slate-400">Signal detection, monitoring, pattern recognition.</p>
              </div>

              {/* Layer 2 */}
              <div className="border-l-2 border-[#E07823] pl-4">
                <span className="text-2xl font-bold block">02</span>
                <h4 className="font-bold text-xl mb-1">Automation Layer</h4>
                <p className="text-sm text-slate-400">Trigger-based actions, workflow automation.</p>
              </div>

              {/* Layer 3 */}
              <div className="border-l-2 border-[#E07823] pl-4">
                <span className="text-2xl font-bold block">03</span>
                <h4 className="font-bold text-xl mb-1">Governance Layer</h4>
                <p className="text-sm text-slate-400">Compliance monitoring, AI performance tracking.</p>
              </div>

              {/* Layer 4 */}
              <div className="border-l-2 border-[#E07823] pl-4">
                <span className="text-2xl font-bold block">04</span>
                <h4 className="font-bold text-xl mb-1">Domain AI Layer</h4>
                <p className="text-sm text-slate-400">Industry-specific AI (AEC, Health, Market).</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpandedPositioning;