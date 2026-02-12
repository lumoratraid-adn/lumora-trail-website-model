"use client"

import { Footer } from "@/components/footer"
import { Mail, Phone, Globe, Code, Layout, Palette, PlayCircle, ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"
import { Toast } from "@/components/ui/toast"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  const services = [
    "Website & Software Development",
    "UI / UX Design & Figma Projects",
    "Branding & Digital Marketing",
    "SEO & Online Growth",
    "Website Redesign & Maintenance",
    "Landing Pages & Lead Generation",
    "Animations & Creative Design",
    "Other"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      })

      if (!res.ok) throw new Error("Failed to send message")
      setIsSuccess(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  return (
    <main className="relative pt-44">
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left side: Content */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-16">
              <AnimatedText className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/60 uppercase">CONTACT</span>
                </div>

                <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold text-white uppercase leading-none tracking-tighter">
                  Let&apos;s <span className="text-primary italic">Connect</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/40 max-w-lg leading-relaxed font-medium italic">
                  Have an idea, project, or requirement? We&apos;d love to hear from you.
                </p>
              </AnimatedText>

              {/* Contact Info Card */}
              <AnimatedSection delay={0.2} className="relative rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 bg-white/[0.02] border border-white/5 space-y-10 md:space-y-12 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />

                <div className="space-y-8 relative z-10">
                  <a href="mailto:lumoratriad@gmail.com" className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                      <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Email Us</p>
                      <span className="text-xl font-bold text-white lowercase">lumoratriad@gmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all shrink-0">
                      <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Call Us</p>
                      <a href="tel:+919947878418" className="text-xl font-bold text-white hover:text-primary transition-colors">+91 99478 78418</a>
                      <a href="tel:+919847439125" className="text-xl font-bold text-white hover:text-primary transition-colors">+91 98474 39125</a>
                      <a href="tel:+971555973832" className="text-xl font-bold text-white hover:text-primary transition-colors">+971 55 597 3832</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                      <Globe className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Location</p>
                      <span className="text-xl font-bold text-white">Digital Global Ops</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Services Restored (Static) */}

            </div>

            {/* Right side: Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.4} className="p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

                <div className="relative z-10 space-y-12">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Send Inquiry</h2>
                    <p className="text-lg text-white/40 font-medium">Fill out the form below and we will get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2 group">
                        <label htmlFor="name" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Your Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label htmlFor="phone" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 00000 00000"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label htmlFor="email" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@company.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>

                    <div className="space-y-2 group">
                      <label htmlFor="service" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Service</label>
                      <div className="relative">
                        <select
                          id="service"
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0E0F13]">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-[#0E0F13]">{s}</option>
                          ))}
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">▼</div>
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label htmlFor="message" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Message</label>
                      <textarea
                        id="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your project goals..."
                        rows={5}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-8 bg-primary text-white rounded-3xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-2xl shadow-primary/40 disabled:opacity-50"
                      >
                        {isSubmitting ? <Loader2 className="animate-spin" /> : (
                          <>
                            Send Inquiry
                            <ArrowRight className="w-6 h-6" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              </AnimatedSection>

              {/* Services / Requirements (Moved here) */}
              <div className="mt-12 space-y-8">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Requirements?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Web Development", icon: Code },
                    { label: "Design & Figma", icon: Layout },
                    { label: "Growth & SEO", icon: Palette },
                    { label: "Video & Motion", icon: PlayCircle }
                  ].map((item) => (
                    <AnimatedSection
                      key={item.label}
                      className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all group cursor-pointer"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-white/60 group-hover:text-white text-xs font-bold uppercase tracking-widest">{item.label}</span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Toast
        message="Message Received! We'll get back to you within 24 hours."
        isVisible={isSuccess}
        onClose={resetForm}
      />

      <Footer />
    </main >
  )
}
