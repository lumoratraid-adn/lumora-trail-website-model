"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { Mail, Phone, Globe, MessageSquare, Code, Layout, Palette, PlayCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="relative pt-32">
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left side: Content */}
            <div className="space-y-16">
              <div className="space-y-6">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.3em] text-primary uppercase border border-white/10 backdrop-blur-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Contact Us
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl font-condensed font-bold text-white uppercase leading-none"
                >
                  Let&apos;s <span className="text-primary italic">Connect</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-white/50 max-w-lg leading-relaxed font-medium"
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
                className="glass-card p-6 md:p-10 rounded-[2.5rem] border-white/10 space-y-6 md:space-y-8"
              >
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Email Us</p>
                    <a href="mailto:hello@lumoratriad.in" className="text-xl font-bold text-white hover:text-primary transition-colors">hello@lumoratriad.in</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Call Us</p>
                    <a href="tel:+919947878418" className="text-xl font-bold text-white hover:text-primary transition-colors">+91 99478 78418</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors group-hover:border-primary/50">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Website</p>
                    <a href="https://www.lumoratriad.in" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-primary transition-colors">www.lumoratriad.in</a>
                  </div>
                </div>
              </motion.div>

              {/* What You Can Contact Us For */}
              <div className="space-y-8">
                <h3 className="text-2xl font-condensed font-bold text-white uppercase tracking-wider">What You Can Contact Us For</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Website & App Development", icon: Code },
                    { label: "UI/UX Design & Figma Projects", icon: Layout },
                    { label: "Branding, Logo & Posters", icon: Palette },
                    { label: "Animations & Creative Design", icon: PlayCircle }
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-white/60 text-sm font-medium">{item.label}</span>
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
              <form className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-white/40 uppercase pl-4">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-white/40 uppercase pl-4">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-white/40 uppercase pl-4">Interested In</label>
                  <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer font-bold">
                    <option className="bg-[#0E0F13]">UI / UX Design</option>
                    <option className="bg-[#0E0F13]">Web & Software Development</option>
                    <option className="bg-[#0E0F13]">Brand Identity</option>
                    <option className="bg-[#0E0F13]">Mobile Solutions</option>
                    <option className="bg-[#0E0F13]">Motion Design</option>
                    <option className="bg-[#0E0F13]">Others</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-white/40 uppercase pl-4">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-all font-bold resize-none"
                  />
                </div>

                <button className="w-full py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                  Send Inquiry
                  <MessageSquare className="w-5 h-5" />
                </button>
              </form>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
