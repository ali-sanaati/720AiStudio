"use client"
import Link from "next/link";
import { TopRightBimetryxToast } from "@/components/modules/Toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactBimetryxSectionForm } from "@/types/form";

export default function ContactPage() {
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
      TopRightBimetryxToast.fire({
        title: 'Message sent successfully!',
        icon: 'success',
      })
    }, 1000)
  }

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
            <div>
              <form className="space-y-6 text-left" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border rounded-xl p-3 text-dark placeholder:text-muted focus:border-primary outline-none transition-colors"
                      placeholder="John Doe"
                      {...register("name", {
                        required: { value: true, message: "name is required" },
                      })}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-body text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-background border border-border rounded-xl p-3 text-dark placeholder:text-muted focus:border-primary outline-none transition-colors"
                      placeholder="john@company.com"
                      {...register("email", {
                        required: { value: true, message: "email is required" },
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "email is invalid" },
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-body text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-xl p-3 text-dark placeholder:text-muted focus:border-primary outline-none transition-colors"
                    placeholder="Your Organization"
                    {...register("company", {
                      required: { value: true, message: "company is required" },
                    })}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                </div>

                <div>
                  <label className="block text-body text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-background border border-border rounded-xl p-3 text-dark placeholder:text-muted focus:border-primary outline-none transition-colors resize-none"
                    placeholder="How can we help? Share your objectives or questions."
                    {...register("message", {
                      required: { value: true, message: "message is required" },
                    })}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all text-sm ${
                    isLoading
                      ? "bg-primary/70 cursor-not-allowed"
                      : "bg-primary-dark hover:bg-primary"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}