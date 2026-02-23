"use client";
import React from 'react';
import { FileSpreadsheet, BarChart3, Database, Target, LayoutList } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { handleHashLinkClick } from '@/lib/scrollToHash';

const SimpleCostQTO = () => {
  const pathname = usePathname();
  return (
    <section id="cost" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Cost & QTO</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            BIMetryX extracts model data including areas, volumes, lengths, and element counts to
            generate structured quantity takeoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Current Capabilities */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <LayoutList size={24} />
              <h3 className="text-xl font-bold text-dark">Current Capabilities</h3>
            </div>

            <ul className="space-y-4">
              {[
                "Walls, floors, and ceilings extraction",
                "Doors and windows quantity counts",
                "Direct Excel export for reporting",
                "Structured BOQ foundation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-body">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/bimetryx#contact" className="mt-10 w-full py-4 bg-primary-dark text-white font-bold rounded-xl hover:bg-primary transition-all flex items-center justify-center gap-2" onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}>
              Book a Demo
            </Link>
          </div>

          {/* Future Roadmap */}
          <div className="bg-primary-dark p-8 rounded-3xl text-white relative overflow-hidden self-start">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] bg-primary text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                In Development
              </span>
            </div>

            <h3 className="text-xl font-bold mb-6">Future Roadmap</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <Database className="text-primary shrink-0" size={20} />
                <p className="text-sm text-white/80">Material price database integration</p>
              </div>
              <div className="flex gap-3">
                <BarChart3 className="text-primary shrink-0" size={20} />
                <p className="text-sm text-white/80">Cost distribution charts</p>
              </div>
              <div className="flex gap-3">
                <Target className="text-primary shrink-0" size={20} />
                <p className="text-sm text-white/80">Design sensitivity cost analysis</p>
              </div>
              <div className="flex gap-3">
                <FileSpreadsheet className="text-primary shrink-0" size={20} />
                <p className="text-sm text-white/80">Approximate cost estimation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SimpleCostQTO;