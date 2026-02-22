import React from 'react';
import {
  Eye,
  Target,
  Sparkles,
  CheckCircle,
  Sun,
  TrendingUp,
} from 'lucide-react';

const values = [
  {
    title: 'Simplicity',
    description:
      'We believe powerful tools should remain clear, intuitive, and easy to use.',
    icon: <Sparkles className="text-primary" size={28} />,
  },
  {
    title: 'Accuracy',
    description:
      'Reliable data and precise validation are essential for real-world construction decisions.',
    icon: <CheckCircle className="text-primary" size={28} />,
  },
  {
    title: 'Transparency',
    description:
      'Clear reports, traceable rules, and understandable insights build trust.',
    icon: <Sun className="text-primary" size={28} />,
  },
  {
    title: 'Continuous improvement',
    description:
      'We evolve the platform constantly based on real project feedback and industry needs.',
    icon: <TrendingUp className="text-primary" size={28} />,
  },
];

export default function AboutPage() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-dark mb-4">
            About BIMetryX
          </h2>
          <p className="text-body max-w-xl mx-auto text-lg">
            Built by architects and BIM specialists with years of real-world project experience.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl border border-border p-10 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white border-4 border-background rounded-full flex items-center justify-center shadow-lg mb-6 group hover:scale-110 transition-transform">
              <Eye className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Vision</h3>
            <p className="text-muted leading-relaxed">
              Reduce the gap between digital modeling and construction execution.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-border p-10 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white border-4 border-background rounded-full flex items-center justify-center shadow-lg mb-6 group hover:scale-110 transition-transform">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Mission</h3>
            <p className="text-muted leading-relaxed">
              Make design decisions faster, smarter, and code-compliant for
              architecture and construction teams.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-dark">Our values</h3>
          <p className="text-body mt-3 max-w-lg mx-auto">
            The principles that guide everything we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center bg-white rounded-3xl border border-border p-8 shadow-sm text-center group hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-white border-4 border-background rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">
                {value.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
