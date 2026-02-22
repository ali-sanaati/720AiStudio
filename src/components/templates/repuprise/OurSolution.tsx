import React from 'react';
import { Bot, Clock, BarChart3, Bell, MessageSquare, GraduationCap, type LucideIcon } from 'lucide-react';

const solutions: { title: string; icon: LucideIcon }[] = [
  { title: "AI Social Listening Engine", icon: Bot },
  { title: "Real-Time Monitoring", icon: Clock },
  { title: "Emotional Sentiment & Intensity Analysis", icon: BarChart3 },
  { title: "Smart Crisis Alerts", icon: Bell },
  { title: "Strategic Communication Support", icon: MessageSquare },
  { title: "Training & Knowledge Transfer", icon: GraduationCap },
];

const OurSolution = () => {
  return (
    <section id="solution" className="bg-[#1E1B22] py-24 border-t border-[#3F2A54] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header - Derived from Page 5 */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-[#B885BE] text-sm font-black uppercase tracking-[0.3em] mb-4">
            Unified Ecosystem
          </h2>
          <h3 className="text-white text-4xl md:text-5xl font-extrabold mb-8">
            A Unified Reputation <br /> 
            <span className="text-[#5B3E7A]">Intelligence Ecosystem</span>
          </h3>
          <p className="text-[#8F7FA8] text-lg leading-relaxed">
            RepUpRise integrates technology and advisory capabilities into one structured ecosystem. 
            It is not just monitoring software—it is a full reputation enablement framework.
          </p>
        </div>

        {/* Solutions Grid - Text strictly from Page 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-[#3F2A54]/10 border border-[#3F2A54] rounded-2xl hover:border-[#5B3E7A] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#5B3E7A]/5 rounded-full blur-xl group-hover:bg-[#5B3E7A]/20 transition-all" />
                <div className="w-14 h-14 rounded-xl bg-[#5B3E7A]/20 border border-[#5B3E7A]/40 flex items-center justify-center mb-6 text-[#B885BE] group-hover:bg-[#5B3E7A]/30 group-hover:text-white transition-all">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h4 className="text-[#E6E4EA] text-lg font-bold leading-snug group-hover:text-white">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Footer Statement - Page 5 */}
        <div className="mt-20 p-8 border border-[#5B3E7A]/30 bg-[#5B3E7A]/5 rounded-3xl text-center">
          <p className="text-[#E6E4EA] font-medium italic">
            "Combining technology and advisory to close the structural gaps in digital awareness."
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;