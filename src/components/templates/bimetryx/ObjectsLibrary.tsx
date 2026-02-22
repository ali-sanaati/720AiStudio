import React from 'react';
import { Sofa, Lamp, Bath, Utensils, Monitor, BoxSelect } from 'lucide-react';

const ObjectsLibrary = () => {
  const categories = [
    { name: "Living & Bedroom", icon: <Sofa size={24} /> },
    { name: "Office Furniture", icon: <Monitor size={24} /> },
    { name: "Kitchen Cabinetry", icon: <Utensils size={24} /> },
    { name: "Bathroom Fixtures", icon: <Bath size={24} /> },
    { name: "Lighting", icon: <Lamp size={24} /> },
    { name: "Decor", icon: <BoxSelect size={24} /> },
  ];

  return (
    <section id="library" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Market-Ready Assets
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Model what actually exists.
          </h3>
          <p className="max-w-2xl mx-auto text-body text-lg">
            BIMetryX includes lightweight, real-market objects optimized for architectural 
            and interior projects, ensuring your digital model matches the physical result.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-background rounded-2xl hover:bg-primary hover:text-white transition-all cursor-default group">
              <div className="mb-4 text-primary group-hover:text-white">
                {cat.icon}
              </div>
              <span className="font-bold text-sm text-center">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Feature Highlights & Roadmap */}
        <div className="bg-primary-dark rounded-[3rem] p-8 md:p-16 text-white max-w-4xl mx-auto">
          <h4 className="text-3xl font-bold mb-8 text-primary">Why our library?</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">✓</div>
              <p className="text-white/80"><span className="text-white font-bold">Real Dimensions:</span> Every object matches manufacturer specifications.</p>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">✓</div>
              <p className="text-white/80"><span className="text-white font-bold">Optimized Geometry:</span> High detail without slowing down your Revit model.</p>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">✓</div>
              <p className="text-white/80"><span className="text-white font-bold">Standard Compliant:</span> Fully compliant with Revit family standards.</p>
            </li>
          </ul>

          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-xs font-mono text-white/60 uppercase tracking-widest mb-4">Roadmap Features</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-white/10 rounded-md border border-white/20">Local Brand Integrations</span>
              <span className="px-3 py-1 bg-white/10 rounded-md border border-white/20">Brand & Price Filters</span>
              <span className="px-3 py-1 bg-white/10 rounded-md border border-white/20">Online Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectsLibrary;