import Link from "next/link";

export default function Hero () {
  return (
    <section id="hero" className="bg-[#1E1B22] pt-40 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[#B885BE] text-xs font-black uppercase tracking-[0.5em] mb-4">RepUpRise</h2>
        <h1 className="text-white text-4xl md:text-6xl font-black mb-6 uppercase italic">Form.Keep.Up</h1>
        
        <div className="w-24 h-1 bg-[#5B3E7A] mx-auto mb-8"></div>

        <h3 className="text-2xl md:text-4xl font-bold text-[#E6E4EA] mb-8 tracking-tight">
          Social Awareness. Real-Time Intelligence. <br/> <span className="text-[#B885BE]">Strategic Action.</span>
        </h3>

        <p className="max-w-4xl mx-auto text-[#8F7FA8] text-lg leading-relaxed mb-12">
          RepUpRise is an AI-powered reputation intelligence and management platform that enables organizations to monitor digital conversations, understand public perception, detect early crisis signals, and respond with structured strategic action.
        </p>

        <div className="flex flex-col sm:flex-row  justify-center gap-4 sm:gap-6">
          <Link href="/repuprise#contact" className="bg-[#5B3E7A] text-white px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-[#3F2A54] transition-all">
            Request Access
          </Link>
          <Link href="/repuprise#contact" className="border border-[#3F2A54] text-[#E6E4EA] px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-[#3F2A54] transition-all">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};