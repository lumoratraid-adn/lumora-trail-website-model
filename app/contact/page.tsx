"use client"

import { Footer } from "@/components/footer"
import { Mail, Phone, Code, Palette, TrendingUp, Settings, ArrowRight, Loader2, Globe2, Plus, Shield, Sparkles, Layout, ShieldCheck, Target } from "lucide-react"
import { useState } from "react"
import { Toast } from "@/components/ui/toast"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedIntent, setSelectedIntent] = useState("build")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service: selectedIntent, message }),
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
    <main className="relative pt-32 bg-background overflow-hidden min-h-screen text-white">
      {/* Background Texture/Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grain-y.com/assets/images/grain.png')]" />

      <div className="container mx-auto px-6 relative z-10 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">

          {/* ─── LEFT COLUMN: HEADER & INFO ─── */}
          <div className="space-y-12">
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Contact Us</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black italic text-white uppercase leading-[0.8] tracking-tighter">
                LET'S <br />
                <span className="text-white/20 not-italic">CONNECT.</span>
              </h1>
              <p className="text-base md:text-lg text-white/40 max-w-md font-bold leading-relaxed uppercase">
                HAVE AN IDEA, PROJECT, OR REQUIREMENT? WE'D LOVE TO HEAR FROM YOU.
              </p>
            </div>

            {/* INFO CARD */}
            <AnimatedSection className="p-8 rounded-[2.5rem] bg-card border border-white/[0.08] shadow-2xl space-y-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {[
                { label: "Email Us", val: "lumoratriad@gmail.com", icon: Mail },
                { label: "Call Us (Primary)", val: "+91 99478 78418", icon: Phone },
                { label: "Website", val: "www.lumoratriad.in", icon: Globe2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-default relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                    <item.icon className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[9px] font-michroma uppercase tracking-widest text-white/20">{item.label}</p>
                    <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{item.val}</p>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>

          {/* ─── RIGHT COLUMN: THE FORM ─── */}
          <AnimatedSection className="p-10 md:p-14 rounded-[3rem] bg-card border border-white/[0.08] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#a78bfa]/5 opacity-50" />

            <div className="relative z-10 mb-12 space-y-2">
              <h2 className="text-xl font-michroma uppercase tracking-widest text-primary">Send Message</h2>
              <p className="text-xs text-white/30 font-medium tracking-wide">Fill out the form below and we will get back to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/40 ml-1">Your Name</label>
                  <input
                    type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/40 ml-1">Phone Number</label>
                  <input
                    type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/40 ml-1">Email Address</label>
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/40 ml-1">Service Interest</label>
                <div className="relative group/select">
                  <select
                    value={selectedIntent}
                    onChange={(e) => setSelectedIntent(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-primary/50 transition-all text-sm appearance-none cursor-pointer uppercase font-bold"
                  >
                    <option value="development" className="bg-card">DEVELOPMENT & SOFTWARE</option>
                    <option value="uiux" className="bg-card">UI/UX DESIGN & FIGMA</option>
                    <option value="branding" className="bg-card">BRANDING & VISUAL IDENTITY</option>
                    <option value="seo" className="bg-card">SEO & ORGANIC GROWTH</option>
                    <option value="animations" className="bg-card">ANIMATIONS & MOTION FX</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/40 ml-1">Project Details</label>
                <textarea
                  required value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder="TELL US ABOUT YOUR PROJECT..."
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all text-sm resize-none font-bold uppercase"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full py-5 bg-primary text-black rounded-2xl font-michroma text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-white active:scale-[0.98] transition-all shadow-xl shadow-primary/10 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : <>Send Message <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </AnimatedSection>
        </div>

        {/* ─── BOTTOM SECTION: SERVICE GRID ─── */}
        <div className="mt-40 space-y-16 max-w-7xl mx-auto">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tighter">
              WHAT YOU CAN <br />
              <span className="text-primary tracking-tight uppercase">CONTACT US FOR.</span>
            </h2>
            <p className="text-[10px] font-michroma uppercase tracking-[0.4em] text-white/20">Select your requirement from our specialized modules.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Development", icon: Code },
              { label: "UI / UX Design", icon: Layout },
              { label: "Branding", icon: Palette },
              { label: "SEO Mastery", icon: TrendingUp },
              { label: "Animations", icon: Sparkles },
            ].map((service, i) => (
              <button
                key={i}
                className="flex items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/30 hover:bg-primary/5 transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all shrink-0">
                  <service.icon className="w-5 h-5 text-white/20 group-hover:text-primary" />
                </div>
                <span className="text-xs font-bold font-michroma uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{service.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Toast message="Message sent successfully." isVisible={isSuccess} onClose={resetForm} />
      <Footer />
    </main>
  )
}
