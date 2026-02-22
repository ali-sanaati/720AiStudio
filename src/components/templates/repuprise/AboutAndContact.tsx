import React from 'react';

const AboutAndContact = () => {
  return (
    <section id="about" className="bg-[#1E1B22] py-24 border-t border-[#3F2A54]">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <h2 className="text-[#B885BE] text-sm font-black uppercase tracking-[0.3em] mb-4">
              Our Identity
            </h2>
            <h3 className="text-white text-4xl font-extrabold mb-8">
              About RepUpRise
            </h3>
            <p className="text-[#E6E4EA] text-lg leading-relaxed mb-6">
              RepUpRise is developed by a multidisciplinary team combining AI engineering, data science, and strategic communication expertise.
            </p>
            <p className="text-[#8F7FA8] mb-8 italic">
              Under the leadership of Dr. Behrooz Naserolmemar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-[#3F2A54]/10 border-l-4 border-[#5B3E7A] rounded-r-xl">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Vision</h4>
                <p className="text-[#8F7FA8] text-sm">Build a global reputation intelligence infrastructure.</p>
              </div>
              <div className="p-6 bg-[#3F2A54]/10 border-l-4 border-[#5B3E7A] rounded-r-xl">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Mission</h4>
                <p className="text-[#8F7FA8] text-sm">Transform digital listening into measurable strategic advantage.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0B1F3B] p-10 rounded-3xl border border-[#3F2A54]">
            <h4 className="text-white text-xl font-bold mb-8 uppercase tracking-tight text-center">Core Values </h4>
            <div className="space-y-6">
              {["Precision", "Clarity", "Accountability", "Continuous Innovation"].map((value) => (
                <div key={value} className="flex items-center gap-4 border-b border-[#3F2A54] pb-4 last:border-0">
                  <div className="w-2 h-2 bg-[#5B3E7A] rounded-full"></div>
                  <span className="text-[#E6E4EA] font-medium">{value} </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="contact" className="bg-gradient-to-br from-[#0B1F3B] to-[#1E1B22] p-12 rounded-[40px] border border-[#5B3E7A]/30 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-white text-4xl font-extrabold mb-6">Get in Touch</h3>
            <p className="text-[#8F7FA8] text-lg max-w-2xl mx-auto mb-10">
              Interested in joining the beta, enterprise deployment, or partnership?
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <span className="text-[#5B3E7A] text-xl">📧</span>
                <span className="text-white font-bold tracking-wider">info@repuprise.com</span>
              </div>
            </div>

            <button className="bg-[#5B3E7A] text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-xl shadow-[#5B3E7A]/20">
                Book a Demo
            </button>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B3E7A]/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5B3E7A]/5 blur-[100px] rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndContact;