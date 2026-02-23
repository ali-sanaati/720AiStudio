import React from 'react';
import { Zap, CheckCircle2, FileBarChart, Milestone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const RuleCheckDetailed = () => {
  const coveredRules = [
    "Minimum room dimensions by occupancy",
    "Daylight and ventilation requirements",
    "Corridor width and circulation standards",
    "Parking ramp, count and layout",
    "Stair width and height regulations",
    "Emergency exit path validation"
  ];

  const codeSections = ["3", "4", "6", "8", "9", "10", "13", "14", "16", "19"];

  return (
    <section id="rulecheck" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
              <ShieldCheck size={20} /> RuleCheck Engine
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
              Manual code checks <br />
              <span className="text-primary">reduced to seconds.</span>
            </h3>
          </div>
          <p className="text-body text-lg md:max-w-sm">
            The engine analyzes your Revit model and compares it against national building regulations automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-background p-8 rounded-4xl border border-border">
              <h4 className="text-dark font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} /> Currently Covered
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {coveredRules.map((rule, i) => (
                  <li key={i} className="text-body text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span> {rule}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Covered Code Sections</p>
                <div className="flex flex-wrap gap-2">
                  {codeSections.map((sec) => (
                    <span key={sec} className="w-10 h-10 flex items-center justify-center bg-primary-dark text-white rounded-lg font-bold shadow-md">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-primary-dark p-8 rounded-4xl text-white">
              <h4 className="font-bold mb-6 flex items-center gap-2">
                <FileBarChart className="text-primary" size={20} /> Smart Output
              </h4>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-sm text-white/80">
                  <Zap size={16} className="text-primary shrink-0" />
                  Structured reports with Error/Warning/Info classification
                </li>
                <li className="flex gap-3 text-sm text-white/80">
                  <Zap size={16} className="text-primary shrink-0" />
                  Direct references to legal clauses
                </li>
                <li className="flex gap-3 text-sm text-white/80">
                  <Zap size={16} className="text-primary shrink-0" />
                  Exportable PDF & Excel formats
                </li>
              </ul>
              <Link href="/bimetryx#contact" className="block text-center w-full py-4 bg-primary hover:bg-primary/40 text-white font-bold rounded-xl transition-all">
                Download Beta
              </Link>
            </div>

            <div className="p-8 border-2 border-dashed border-border rounded-4xl">
              <h4 className="text-dark font-bold mb-4 flex items-center gap-2">
                <Milestone className="text-muted" size={20} /> Roadmap
              </h4>
              <div className="space-y-2">
                <p className="text-xs text-muted">• Full 20 national code chapters</p>
                <p className="text-xs text-muted">• Custom rule definition for firms</p>
                <p className="text-xs text-muted">• GCC region rule sets</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RuleCheckDetailed;