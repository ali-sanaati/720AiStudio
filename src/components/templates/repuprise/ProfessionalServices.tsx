import React from 'react';
import { GraduationCap, Lightbulb, Shield, type LucideIcon } from 'lucide-react';

const services: {
  title: string;
  points: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Training Programs",
    points: [
      "Executive workshops",
      "Marketing & PR team training",
      "General awareness seminars"
    ],
    icon: GraduationCap,
  },
  {
    title: "Strategic Consulting",
    points: [
      "Communication strategy design",
      "Reputation system implementation",
      "Structured brand positioning frameworks"
    ],
    icon: Lightbulb,
  },
  {
    title: "Crisis Coaching",
    points: [
      "Crisis scenario development",
      "Executive-level advisory",
      "Internal team coaching during reputational events"
    ],
    icon: Shield,
  }
];

const ProfessionalServices = () => {
  return (
    <section id="services" className="bg-[#1E1B22] py-24 border-t border-[#3F2A54]">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header - Derived from Page 7 */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-[#B885BE] text-sm font-black uppercase tracking-[0.3em] mb-4">
            Expertise Beyond Software
          </h2>
          <h3 className="text-white text-4xl font-extrabold mb-6">
            Professional Services Layer
          </h3>
          <p className="text-[#8F7FA8] text-lg leading-relaxed">
            RepUpRise combines AI-driven intelligence with human strategic expertise to provide a full reputation enablement framework.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-[#3F2A54]/10 border border-[#3F2A54] rounded-2xl hover:bg-[#5B3E7A]/10 hover:border-[#5B3E7A]/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#5B3E7A]/20 border border-[#5B3E7A]/40 flex items-center justify-center mb-6 text-[#B885BE] group-hover:bg-[#5B3E7A]/30 group-hover:text-white transition-all">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h4 className="text-white text-xl font-bold mb-6 uppercase tracking-tight">
                  {service.title}
                </h4>
              <ul className="space-y-4">
                {service.points.map((point, i) => (
                  <li key={i} className="text-[#8F7FA8] text-sm flex items-start gap-3">
                    <span className="text-[#5B3E7A] mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>

        {/* Footer Note - Page 7 */}
        <div className="mt-16 text-center">
          <p className="text-[#B885BE] text-xs font-black uppercase tracking-[0.2em]">
            Human Intelligence + Artificial Intelligence
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalServices;