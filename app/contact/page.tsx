"use client"

import { Footer } from "@/components/footer"
import { Mail, Phone, Code, Palette, TrendingUp, Settings, ArrowRight, Loader2, CheckCircle2, Globe2 } from "lucide-react"
import { useState } from "react"
import { Toast } from "@/components/ui/toast"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const intents = [
  { id: "build", label: "Build", icon: Code, color: "text-primary", desc: "Software & Web" },
  { id: "design", label: "Design", icon: Palette, color: "text-white", desc: "UI/UX & Brand" },
  { id: "grow", label: "Grow", icon: TrendingUp, color: "text-white", desc: "SEO & Growth" },
  { id: "support", label: "Support", icon: Settings, color: "text-white", desc: "Care & Sec" },
]

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
    <main className="relative pt-32 bg-background overflow-hidden min-h-screen">

      <div className="container mx-auto px-6 relative z-10 pb-20">

        {/* SIMPLE HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <AnimatedText className="space-y-4">
            <span className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Step into the Studio</span>
            <h1 className="text-4xl md:text-6xl font-michroma text-white uppercase tracking-tight">Connect with Us<span className="text-primary">.</span></h1>
            <p className="text-white/40 font-medium italic">Let's build your next digital legacy together.</p>
          </AnimatedText>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">

          {/* 01: THE FORM (NOW AT THE TOP) */}
          <AnimatedSection className="p-8 md:p-12 rounded-[2.5rem] bg-[#080808] border border-white/[0.05] relative shadow-2xl">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-xl font-michroma text-primary">01</span>
              <h3 className="text-sm font-michroma uppercase text-white/60">Transmission Portal</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/30">Your Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="E.g. Elon Musk" className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white placeholder:text-white/5 focus:outline-none focus:border-primary transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/30">Contact Number</label>
                  <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 ..." className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white placeholder:text-white/5 focus:outline-none focus:border-primary transition-all" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/30">Email Address</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@domain.com" className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white placeholder:text-white/5 focus:outline-none focus:border-primary transition-all" />
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/30">Message</label>
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project..." rows={3} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 text-lg text-white placeholder:text-white/5 focus:outline-none focus:border-primary/30 transition-all resize-none font-sans" />
              </div>

              <button type="submit" disabled={isSubmitting || isSuccess} className="w-full py-6 bg-primary text-black rounded-full font-michroma text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-primary/10 disabled:opacity-50">
                {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : <>Send Message <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </AnimatedSection>

          {/* 02: INTENT SELECTOR (NOW BELOW THE FORM) */}
          <AnimatedSection delay={0.1} className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-xl font-michroma text-primary">02</span>
              <div className="space-y-1">
                <h3 className="text-sm font-michroma uppercase text-white/60">Select Your Objective</h3>
                <p className="text-[10px] text-white/20 italic">"Every great architecture begins with a defined intent."</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {intents.map((intent) => {
                const isActive = selectedIntent === intent.id
                return (
                  <button
                    key={intent.id}
                    type="button"
                    onClick={() => setSelectedIntent(intent.id)}
                    className={`p-6 rounded-2xl border transition-all duration-500 text-left space-y-4 ${isActive ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(234,255,3,0.1)]" : "bg-white/[0.02] border-white/5 hover:border-white/20"}`}
                  >
                    <p className={`text-base font-michroma uppercase ${isActive ? "text-primary" : "text-white/40"}`}>{intent.label}</p>
                    <p className={`text-[9px] font-medium uppercase tracking-widest ${isActive ? "text-white/60" : "text-white/10"}`}>{intent.desc}</p>
                  </button>
                )
              })}
            </div>
          </AnimatedSection>

          {/* 03: GLOBAL REACH */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/[0.05] space-y-6">
              <div className="space-y-1">
                <p className="text-[9px] font-michroma text-primary/40 uppercase tracking-widest">Direct Mail</p>
                <a href="mailto:lumoratriad@gmail.com" className="text-lg text-white hover:text-primary transition-colors">lumoratriad@gmail.com</a>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-michroma text-primary/40 uppercase tracking-widest">Hotline</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919947878418" className="text-white/60 hover:text-white transition-colors">+91 99478 78418</a>
                  <a href="tel:+971555973832" className="text-white/60 hover:text-white transition-colors">+971 55 597 3832</a>
                </div>
              </div>
            </AnimatedSection>

            {/* Global Reach */}
            <AnimatedSection delay={0.3} className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/[0.05] flex flex-col justify-center gap-6">
              <div className="flex items-center gap-4">
                <Globe2 className="w-4 h-4 text-primary/60" />
                <p className="text-[9px] font-michroma text-white/50 uppercase tracking-[0.4em]">Global Reach</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 border border-white/5 rounded-xl bg-white/[0.02]">
                  <p className="text-xs text-white uppercase tracking-widest">India</p>
                </div>
                <div className="text-center p-3 border border-white/5 rounded-xl bg-white/[0.02]">
                  <p className="text-xs text-white uppercase tracking-widest">UAE</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>

      <Toast message="Message sent. We'll connect soon." isVisible={isSuccess} onClose={resetForm} />
      <Footer />
    </main>
  )
}
