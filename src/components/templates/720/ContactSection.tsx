"use client"
import { useState } from 'react';
import { useForm } from "react-hook-form";
import type { Contact720SectionForm } from "@/types/form";
import { TopRight720Toast } from '@/components/modules/Toast';

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Contact720SectionForm>();

  const onSubmit = (data: Contact720SectionForm) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      TopRight720Toast.fire({
        title: 'Message sent successfully!',
        icon: 'success',
      })
    }, 1000)
  }

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
                <a href="mailto:hello@720aistudio.com" className="text-2xl font-bold text-[#E07823] hover:underline">
                  hello@720aistudio.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#0B1F3B] p-8 md:p-12 rounded-2xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Name</label>
                  <input type="text" className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors" placeholder="John Doe" {...register("name", {
                    required: {
                      value: true,
                      message: "name is required"
                    }
                  })} />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Email</label>
                  <input type="email" className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors" placeholder="john@company.com" {...register("email", {
                    required: {
                      value: true,
                      message: "email is required"
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "email is invalid"
                    }
                  })} />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Company</label>
                <input type="text" className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors" placeholder="Your Organization" {...register("company", {
                  required: {
                    value: true,
                    message: "company is required"
                  }
                })} />
                {errors.company && <p className="text-red-400 text-xs">{errors.company.message}</p>}
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Interest Area</label>
                <select className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors appearance-none" {...register("interestArea", {
                  required: {
                    value: true,
                    message: "interest area is required"
                  }
                })}>
                  <option>Product Inquiry</option>
                  <option>Advisory</option>
                  <option>Engineering</option>
                  <option>Partnership</option>
                </select>
                {errors.interestArea && <p className="text-red-400 text-xs">{errors.interestArea.message}</p>}
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#162a4a] border border-slate-700 rounded p-3 text-white focus:border-[#E07823] outline-none transition-colors" placeholder="Tell us about your project..." {...register("message", {
                  required: {
                    value: true,
                    message: "message is required"
                  }
                })}></textarea>
                {errors.message && <p className="text-red-400 text-xs -mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 text-white font-black uppercase tracking-[0.2em] rounded transition-all shadow-lg text-sm ${
                  isLoading
                    ? "bg-[#E07823]/70 cursor-not-allowed"
                    : "bg-[#E07823] hover:bg-[#c3671d]"
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;