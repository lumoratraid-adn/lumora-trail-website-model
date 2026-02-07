"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Toast } from "../../components/ui/toast"
import { Footer } from "@/components/footer"
import { Mail, Phone, Globe, MessageSquare, Code, Layout, Palette, PlayCircle, MessageCircle, X, CheckCircle2, ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("Website & Software Development")
  const [message, setMessage] = useState("")

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
    <main className="relative pt-32">
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left side: Content */}
            <div className="space-y-10 md:space-y-16">
              <div className="space-y-4 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-8xl font-condensed font-bold text-white uppercase leading-none"
                >
                  Let&apos;s <span className="text-primary italic">Connect</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed font-medium"
                >
                  Have an idea, project, or requirement? We&apos;d love to hear from you.
                  Whether you&apos;re a business owner, startup founder, student, or individual,
                  we&apos;re here to help you turn your vision into reality.
                </motion.p>
              </div>

              {/* Contact Info Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-white/10 space-y-4 md:space-y-8"
              >
                <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Email Us</p>
                    <a href="mailto:lumoratriad@gmail.com" className="text-base md:text-xl font-bold text-white hover:text-primary transition-colors lowercase">lumoratriad@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group cursor-pointer" onClick={() => window.location.href = 'tel:+919947878418'}>
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Call Us (Primary)</p>
                    <a href="tel:+919947878418" className="text-base md:text-xl font-bold text-white hover:text-primary transition-colors">+91 99478 78418</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group cursor-pointer" onClick={() => window.location.href = 'tel:+919562276639'}>
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Support Line</p>
                    <a href="tel:+919562276639" className="text-base md:text-xl font-bold text-white hover:text-primary transition-colors">+91 95622 76639</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Website</p>
                    <a href="https://www.lumoratriad.in" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl font-bold text-white hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis block max-w-[200px] sm:max-w-none">www.lumoratriad.in</a>
                  </div>
                </div>
              </motion.div>

              {/* What You Can Contact Us For */}
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-xl md:text-2xl font-condensed font-bold text-white uppercase tracking-wider">What You Can Contact Us For</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {[
                    { label: "Website & Software Development", icon: Code },
                    { label: "UI/UX Design & Figma Projects", icon: Layout },
                    { label: "Branding, Logo, Poster & Digital Marketing", icon: Palette },
                    { label: "Animations & Creative Design", icon: PlayCircle }
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-white/60 text-xs md:text-sm font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-12 rounded-[3rem] border-white/10 relative overflow-hidden backdrop-blur-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-[0.15em] text-white/40 uppercase pl-4">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-[0.15em] text-white/40 uppercase pl-4">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-[0.15em] text-white/40 uppercase pl-4">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="10-digit number"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-[0.15em] text-white/40 uppercase pl-4">Interested In</label>
                  <div className="relative">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer font-bold"
                    >
                      <option className="bg-[#0E0F13]">Website & Software Development</option>
                      <option className="bg-[#0E0F13]">UI / UX Design & Figma Projects</option>
                      <option className="bg-[#0E0F13]">Branding, Logo & Posters</option>
                      <option className="bg-[#0E0F13]">Animations & Creative Design</option>
                      <option className="bg-[#0E0F13]">Personal Branding</option>
                      <option className="bg-[#0E0F13]">Others</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-[0.15em] text-white/40 uppercase pl-4">Message</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-bold resize-none"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-20 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_20px_rgba(99,102,241,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : (
                      <>
                        Send Inquiry
                        <MessageCircle className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {error && <p className="text-red-400 text-center font-bold text-sm">{error}</p>}
              </form>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast
        message="Message Received! We'll get back to you within 24 hours."
        isVisible={isSuccess}
        onClose={resetForm}
      />

      <Footer />
    </main>
  )
}
