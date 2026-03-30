"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const formSubmitUrl = process.env.NEXT_PUBLIC_FORMSUBMIT_URL || `https://formsubmit.co/ajax/${contact.email}`;
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative section-shell text-white">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        
        <Reveal>
          <div className="mb-12 md:mb-16">
            <SectionHeading 
              eyebrow="Contact" 
              title="Let's Build Something Great." 
              subtitle="Have a project in mind or just want to say hi? Feel free to reach out." 
            />
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          
          {/* Left Column: Info */}
          <Reveal className="flex flex-col justify-center">
            
            <div className="mb-12 space-y-6">
              <a href={`mailto:${contact.email}`} className="group flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-[#00E5FF] transition-colors group-hover:border-[#00E5FF]/50 group-hover:bg-[#00E5FF]/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</p>
                  <p className="text-base font-semibold text-white transition-colors group-hover:text-[#00E5FF]">{contact.email}</p>
                </div>
              </a>

              <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="group flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-[#9D4EDD] transition-colors group-hover:border-[#9D4EDD]/50 group-hover:bg-[#9D4EDD]/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone</p>
                  <p className="text-base font-semibold text-white transition-colors group-hover:text-[#9D4EDD]">{contact.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-[#FF4081]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Location</p>
                  <p className="text-base font-semibold text-white">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-black text-zinc-400 transition-all hover:border-white hover:text-white">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-black text-zinc-400 transition-all hover:border-white hover:text-white">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-black text-zinc-400 transition-all hover:border-white hover:text-white">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </Reveal>

          {/* Right Column: Form */}
          <Reveal delay={100} className="w-full">
            <div className="rounded-[2rem] border border-zinc-800 bg-[#0F0F0F] p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00E5FF]/20 text-[#00E5FF]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-zinc-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-lg font-semibold text-white/50 transition-colors hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-5">
                  {/* Honeypot for spam protection */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  {/* Disable captcha for seamless experience (optional) */}
                  <input type="hidden" name="_captcha" value="false" />

                  {error && (
                    <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-500">
                      {error}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-zinc-800 bg-[#1A1A1A] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-0 disabled:opacity-50" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-zinc-800 bg-[#1A1A1A] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-0 disabled:opacity-50" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="_subject"
                      placeholder="Project Inquiry"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-zinc-800 bg-[#1A1A1A] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-0 disabled:opacity-50" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      disabled={isSubmitting}
                      className="min-h-[120px] w-full resize-none rounded-xl border border-zinc-800 bg-[#1A1A1A] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-0 disabled:opacity-50" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-black transition-transform active:scale-[0.98] disabled:opacity-75 disabled:active:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                    {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
