"use client"
import Link from "next/link";
import { TopRightRepupriseToast } from "@/components/modules/Toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactBimetryxSectionForm } from "@/types/form";

const AboutAndContact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<ContactBimetryxSectionForm>();

  const onSubmit = (data: ContactBimetryxSectionForm) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      TopRightRepupriseToast.fire({
        title: 'Message sent successfully!',
        icon: 'success',
      })
    }, 1000)
  }

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

        <div id="contact" className="bg-gradient-to-br from-[#0B1F3B] to-[#1E1B22] p-12 rounded-[40px] border border-[#5B3E7A]/30 text-center relative overflow-hidden max-w-4xl mx-auto">
          <div className="relative z-10">
            <h3 className="text-white text-4xl font-extrabold mb-6">Get in Touch</h3>
            <p className="text-[#8F7FA8] text-lg max-w-2xl mx-auto mb-10">
              Interested in joining the beta, enterprise deployment, or partnership?
            </p>

            <div>
              <form className="space-y-6 text-left" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E6E4EA] text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-[#3F2A54]/20 border border-[#3F2A54] rounded-xl p-3 text-white placeholder:text-[#8F7FA8] focus:border-[#5B3E7A] outline-none transition-colors"
                      placeholder="John Doe"
                      {...register("name", {
                        required: { value: true, message: "name is required" },
                      })}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[#E6E4EA] text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-[#3F2A54]/20 border border-[#3F2A54] rounded-xl p-3 text-white placeholder:text-[#8F7FA8] focus:border-[#5B3E7A] outline-none transition-colors"
                      placeholder="john@company.com"
                      {...register("email", {
                        required: { value: true, message: "email is required" },
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "email is invalid" },
                      })}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[#E6E4EA] text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-[#3F2A54]/20 border border-[#3F2A54] rounded-xl p-3 text-white placeholder:text-[#8F7FA8] focus:border-[#5B3E7A] outline-none transition-colors"
                    placeholder="Your Organization"
                    {...register("company", {
                      required: { value: true, message: "company is required" },
                    })}
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                </div>

                <div>
                  <label className="block text-[#E6E4EA] text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#3F2A54]/20 border border-[#3F2A54] rounded-xl p-3 text-white placeholder:text-[#8F7FA8] focus:border-[#5B3E7A] outline-none transition-colors resize-none"
                    placeholder="How can we help? Share your objectives or questions."
                    {...register("message", {
                      required: { value: true, message: "message is required" },
                    })}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-bold text-white text-sm transition-all uppercase tracking-widest ${
                    isLoading
                      ? "bg-[#5B3E7A]/70 cursor-not-allowed"
                      : "bg-[#5B3E7A] hover:bg-[#8F7FA8]"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B3E7A]/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5B3E7A]/5 blur-[100px] rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndContact;