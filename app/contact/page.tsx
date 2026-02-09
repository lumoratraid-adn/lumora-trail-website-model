"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Toast } from "../../components/ui/toast"
import { Footer } from "@/components/footer"
import { Mail, Phone, Globe, MessageSquare, Code, Layout, Palette, PlayCircle, MessageCircle, X, CheckCircle2, ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { StarField } from "@/components/scene-background"

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
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        {/* Deep Immersive Background */}
        {/* Deep Immersive Animated Background */}
        <div className="absolute inset-0 z-0 bg-transparent overflow-hidden">
          {/* Animated Blob 1 */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[-10%] -right-20 md:right-[-10%] w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] bg-primary/20 blur-[60px] md:blur-[100px] rounded-full"
          />

          {/* Animated Blob 2 */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[-10%] -left-20 md:left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-accent/10 blur-[50px] md:blur-[90px] rounded-full"
          />

          {/* Drifting Overlay */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />

          {/* Subtle Floating Particles for Depth */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ y: [-20, -40, -20], opacity: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary blur-sm rounded-full"
            />
            <motion.div
              animate={{ y: [0, -60, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
              className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white blur-md rounded-full"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left side: Content */}
            <div className="lg:col-span-5 space-y-10 md:space-y-16">
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="h-[2px] w-12 bg-primary/50" />
                  <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Contact Us</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-condensed font-bold text-white uppercase leading-[0.9] tracking-tighter"
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

              {/* Contact Info Card - Restored Previous Style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-white/5 bg-white/[0.02] space-y-4 md:space-y-8"
              >
                <a href="mailto:lumoratriad@gmail.com" className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Email Us</p>
                    <span className="text-base md:text-xl font-bold text-white group-hover:text-primary transition-colors lowercase">lumoratriad@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+919947878418" className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Call Us (Primary)</p>
                    <span className="text-base md:text-xl font-bold text-white group-hover:text-primary transition-colors">+91 99478 78418</span>
                  </div>
                </a>

                <a href="tel:+919562276639" className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Support Line</p>
                    <span className="text-base md:text-xl font-bold text-white group-hover:text-primary transition-colors">+91 95622 76639</span>
                  </div>
                </a>

                <a href="https://www.lumoratriad.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Website</p>
                    <span className="text-base md:text-xl font-bold text-white group-hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis block max-w-[200px] sm:max-w-none">www.lumoratriad.in</span>
                  </div>
                </a>
              </motion.div>

              {/* Prominent Contact Services Section - Restored */}
              <div className="space-y-8 md:space-y-12 pt-8 border-t border-white/5">
                <div className="space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-condensed font-bold text-white uppercase leading-none tracking-tighter"
                  >
                    What You Can <br />
                    <span className="text-primary italic">Contact Us For</span>
                  </motion.h2>
                  <p className="text-white/30 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                    Select your requirement from our specialized services.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Web & Software Development", icon: Code },
                    { label: "UI / UX Design & Figma", icon: Layout },
                    { label: "Digital Marketing & SEO", icon: Palette },
                    { label: "Animations & Creative Design", icon: PlayCircle }
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="flex items-center gap-4 p-5 md:p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all group cursor-default"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-white/60 group-hover:text-white text-xs md:text-sm font-bold uppercase tracking-wider transition-colors">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Form (Span 7) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-[3rem] p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-white/5 blur-xl opacity-20" />

                {/* Animated Background Element inside the form card - Matched with global background style */}
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    x: [-30, 30, -30],
                    y: [-30, 30, -30],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 w-full h-full bg-[#6366f1]/15 blur-[120px] rounded-full pointer-events-none"
                />
                <motion.div
                  animate={{
                    scale: [1.4, 1, 1.4],
                    x: [30, -30, 30],
                    y: [30, -30, 30],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-0 right-0 w-full h-full bg-[#7c3aed]/10 blur-[100px] rounded-full pointer-events-none"
                />

                <div className="relative bg-[#0E0F13]/20 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl overflow-hidden">

                  {/* Optimized Lightweight Background Effects */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
                    <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-10">
                      <h3 className="text-3xl font-condensed font-bold text-blue-500 uppercase tracking-tight mb-2">Send Message</h3>
                      <p className="text-white/40 text-sm">Fill out the form below and we will get back to you.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                          <label className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase pl-1 group-focus-within:text-primary transition-colors">Your Name</label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all"
                          />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase pl-1 group-focus-within:text-primary transition-colors">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 99999 99999"
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <label className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase pl-1 group-focus-within:text-primary transition-colors">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@company.com"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all"
                        />
                      </div>

                      <div className="space-y-2 group">
                        <label className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase pl-1 group-focus-within:text-primary transition-colors">Service Interest</label>
                        <div className="relative">
                          <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all appearance-none cursor-pointer"
                          >
                            <option className="bg-[#0E0F13]">Website & Software Development</option>
                            <option className="bg-[#0E0F13]">UI / UX Design & Figma</option>
                            <option className="bg-[#0E0F13]">Digital Marketing & SEO</option>
                            <option className="bg-[#0E0F13]">Animations & Creative Design</option>
                            <option className="bg-[#0E0F13]">Other Inquiries</option>
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">▼</div>
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <label className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase pl-1 group-focus-within:text-primary transition-colors">Project Details</label>
                        <textarea
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your project..."
                          rows={4}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all resize-none"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? <Loader2 className="animate-spin" /> : (
                            <>
                              Send Message
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </div>

                      {error && <p className="text-red-400 text-center text-sm font-medium mt-4 bg-red-400/10 py-2 rounded-lg">{error}</p>}
                    </form>
                  </div>
                </div>
              </div>
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
