import Link from "next/link";

export default function ContactPage() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Contact us
          </h2>
          <p className="text-body max-w-xl mx-auto text-lg">
            Interested in joining the beta or booking a demo?
          </p>
        </div>

        {/* Contact card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-border p-10 shadow-sm text-center">
            <p className="text-body text-lg mb-6">
              Email us directly at{" "}
              <a
                href="mailto:info@bimetryx.com"
                className="font-medium text-primary hover:text-primary-dark underline"
              >
                info@bimetryx.com
              </a>
            </p>
            <Link
              href=""
              className="inline-block px-8 py-4 rounded-xl font-bold bg-primary text-white hover:bg-primary-dark transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}