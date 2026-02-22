import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Lightbulb,
  Ruler,
  FileSpreadsheet,
  Send,
} from 'lucide-react';

function titleFromDesc(desc: string, maxWords = 4): string {
  const words = desc.replace(/[.!?]+$/, '').split(/\s+/).slice(0, maxWords);
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

const EducationHub = () => {
  const lessons = [
    { desc: "Short lessons per regulation chapter.", icon: BookOpen },
    { desc: "Wrong vs corrected plan examples.", icon: Lightbulb },
    { desc: "Modeling best practices for better RuleCheck results.", icon: Ruler },
    { desc: "Model-based quantity takeoff tutorials.", icon: FileSpreadsheet },
    { desc: "Preparing projects for official review.", icon: Send },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold mb-4">
              <GraduationCap size={24} />
              <span className="tracking-widest uppercase text-sm">Education Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
              BIMetryX is not only a tool— <br />
              <span className="text-primary">it is a training layer.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, idx) => {
            const Icon = lesson.icon;
            return (
              <div
                key={idx}
                className="group p-8 bg-background rounded-3xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-dark mb-2">
                  {titleFromDesc(lesson.desc)}
                </h4>
                <p className="text-body text-sm leading-relaxed">
                  {lesson.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationHub;