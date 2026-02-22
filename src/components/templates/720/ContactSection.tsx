import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info - Derived from Page 14 */}
          <div>
            <h2 className="text-[#0B1F3B] text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Tell us what <br />
              <span className="text-[#E07823]">you're building.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              We respond with clarity. Whether it's a product inquiry or a strategic partnership, 
              let's discuss how applied intelligence can scale your operations.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-[#0B1F3B] text-xs font-black uppercase tracking-widest mb-1">Direct Email</h4>
                <a href="mailto:hello@720.ai" className="text-2xl font-bold text-[#E07823] hover:underline">
                  hello@720.ai
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#0B1F3B] p-8 md:p-12 rounded-2xl shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Name</label>
                  <input type="text" className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Email</label>
                  <input type="email" className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors" placeholder="john@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Company</label>
                <input type="text" className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors" placeholder="Your Organization" />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Interest Area</label>
                <select className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors appearance-none">
                  <option>Product Inquiry</option>
                  <option>Advisory</option>
                  <option>Engineering</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-[#E07823] text-white font-black uppercase tracking-[0.2em] rounded hover:bg-[#c3671d] transition-all shadow-lg text-sm">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;