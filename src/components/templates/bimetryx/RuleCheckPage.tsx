"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleHashLinkClick } from "@/lib/scrollToHash";

const checks = [
  "Minimum room dimensions by occupancy",
  "Daylight and ventilation requirements",
  "Corridor width and circulation standards",
  "Parking ramp requirements",
  "Parking count and layout",
  "Stair width and height regulations",
  "Emergency exit path validation",
];

const outputs = [
  "Structured compliance reports",
  "Error / Warning / Info classification",
  "Reference to legal clause",
  "Exportable PDF / Excel reports",
];

const roadmap = [
  "Full coverage of all 20 national code chapters",
  "Custom rule definition for firms",
  "GCC region rule sets",
];

export default function RuleCheckPage() {
  const pathname = usePathname();
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            RuleCheck Engine
          </h1>

          <p className="mt-6 text-lg text-body leading-relaxed">
            The RuleCheck Engine analyzes your Revit model and compares it
            against national building regulations. Manual, time-consuming code
            checks are reduced to seconds.
          </p>

          <Link
            href="/bimetryx#contact"
            className="inline-block mt-8 rounded-xl bg-primary-dark px-6 py-3 text-white font-medium hover:bg-primary transition"
            onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
          >
            Download Beta
          </Link>
        </div>

        {/* WHAT IT CHECKS */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-dark">
            What the engine checks
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {checks.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border p-4 bg-background"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CODE COVERAGE */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-dark">
            Covered code sections
          </h2>

          <p className="mt-4 text-body">
            Sections: 3, 4, 6, 8, 9, 10, 13, 14, 16, 19
          </p>
        </section>

        {/* OUTPUT */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-dark">
            Output & reporting
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {outputs.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border p-4 bg-background"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ROADMAP */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-dark">
            Roadmap
          </h2>

          <div className="mt-8 space-y-4">
            {roadmap.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-dark">
            Start checking your models automatically
          </h3>

          <Link
            href="/bimetryx#contact"
            className="inline-block mt-6 rounded-xl bg-primary-dark px-8 py-4 text-white font-medium hover:bg-primary transition"
            onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
          >
            Download Beta
          </Link>
        </section>

      </div>
    </main>
  );
}