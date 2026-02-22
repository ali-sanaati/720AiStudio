import React from 'react';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Layers,
  Globe,
  Quote,
  Sparkles,
} from 'lucide-react';

const reasons = [
  {
    title: 'Built from real project needs',
    description:
      'Designed based on real project needs in Iran',
    icon: Building2,
    accent: 'bg-primary',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    title: 'Compliance-first approach',
    description:
      'Code-first compliance priority',
    icon: ShieldCheck,
    accent: 'bg-accent',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    title: 'All-in-one workflow',
    description:
      'Combines RuleCheck, quantity takeoff, cost insight, and real object library in one tool.',
    icon: Layers,
    accent: 'bg-secondary',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    title: 'Scalable beyond one country',
    description:
      'Built with a structure that allows expansion to multiple national code systems.',
    icon: Globe,
    accent: 'bg-primary-dark',
    iconBg: 'bg-primary-dark/10',
    iconColor: 'text-primary-dark',
  },
];

export default function WhyBimetryX() {
  return (
    <section id="why" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-primary-dark) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-primary-dark) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4 flex justify-center items-center gap-2">
            <Sparkles size={18} /> Why Choose Us
          </h2>
          <h2 className="text-4xl font-bold text-dark mb-4">
            Why BIMetryX
          </h2>
          <p className="text-body max-w-xl mx-auto text-lg">
            BIMetryX is the missing link between your BIM model and construction
            reality — designed to help teams design faster, safer, and smarter.
          </p>
        </div>

        {/* Reasons Grid - cards with left icon + accent bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative bg-white rounded-3xl border border-border p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Colored accent bar on left */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${reason.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="flex gap-6">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl ${reason.iconBg} ${reason.iconColor} flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final quote / CTA */}
        <div className="mt-16 relative">
          <div className="p-10 bg-white rounded-3xl border border-border shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="shrink-0 w-14 h-14 bg-background text-body rounded-2xl flex items-center justify-center">
              <Quote size={28} />
            </div>
            <p className="text-lg md:text-xl font-semibold text-dark text-center md:text-left flex-1">
              BIMetryX is the missing link between your model and construction execution.
            </p>
            <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
              <span className="text-primary font-bold text-sm">✓</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href=""
            className="inline-block px-8 py-4 rounded-xl font-bold bg-primary-dark text-white hover:bg-primary transition-all"
          >
            Download Beta
          </Link>
        </div>
      </div>
    </section>
  );
}
