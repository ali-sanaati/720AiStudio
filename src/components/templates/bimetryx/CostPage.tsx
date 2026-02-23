"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleHashLinkClick } from "@/lib/scrollToHash";

const extractedData = [
  "Areas",
  "Volumes",
  "Lengths",
  "Element counts",
];

const currentCapabilities = [
  "Walls, floors, ceilings, doors, windows quantity extraction",
  "Excel export",
  "Structured BOQ foundation",
];

const inDevelopment = [
  "Real material price database integration",
  "Approximate cost estimation per item",
  "Cost distribution charts",
  "Design sensitivity cost analysis",
];

export default function CostPage() {
  const pathname = usePathname();
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            Cost & QTO
          </h1>

          <p className="mt-6 text-lg text-body leading-relaxed">
            BIMetryX extracts model data directly from your Revit project to
            generate structured quantity takeoffs and early cost insights,
            helping teams understand project scope and risks before construction.
          </p>

          <Link
            href="/bimetryx#contact"
            className="inline-block mt-8 rounded-xl bg-primary-dark px-6 py-3 text-white font-medium hover:bg-primary transition"
            onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
          >
            Book a Demo
          </Link>
        </div>

        {/* DATA EXTRACTION */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-dark">
            Data extracted from your model
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {extractedData.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border p-4 bg-background"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CURRENT CAPABILITIES */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-dark">
            Current capabilities
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {currentCapabilities.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border p-4 bg-background"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* IN DEVELOPMENT */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-dark">
            In development
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {inDevelopment.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-dashed border-border p-4 text-body"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* DASHBOARD PLACEHOLDER */}
        <section className="mt-24">
          <div className="rounded-2xl border border-border bg-background p-4 shadow-sm">
            <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-border to-background flex items-center justify-center text-muted text-sm">
              Cost Dashboard Placeholder
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-dark">
            See your project quantities and costs instantly
          </h3>

          <Link
            href="/bimetryx#contact"
            className="inline-block mt-6 rounded-xl bg-primary-dark px-8 py-4 text-white font-medium hover:bg-primary transition"
            onClick={(e) => handleHashLinkClick(e, "/bimetryx#contact", pathname)}
          >
            Book a Demo
          </Link>
        </section>

      </div>
    </main>
  );
}