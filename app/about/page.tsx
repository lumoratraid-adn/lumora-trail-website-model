"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code, Palette, TrendingUp, Settings, ArrowRight, Layout, ShieldCheck, Target, Sparkles, Radio } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const pillars = [
  { label: "Development", desc: "Software engineering with architecture-first logic.", icon: Code },
  { label: "Design", desc: "Crafting cinematic interfaces and high-fidelity prototypes.", icon: Layout },
  { label: "Branding", desc: "Visual identities and logos that build market trust.", icon: Palette },
  { label: "SEO Mastery", desc: "Technical SEO and data-driven organic growth.", icon: TrendingUp },
  { label: "Animations", desc: "Cinematic motion graphics and web interactions.", icon: Sparkles },
]

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <main className="relative bg-background min-h-screen text-white overflow-hidden pb-10">
      <Header />

      {/* Background Texture/Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grain-y.com/assets/images/grain.png')]" />

      {/* ─── STUDIO HERO (LIQUID ANIMATION & BOXED LAYOUT) ─── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5 bg-[#050505]">
        {/* LIQUID METABALL BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="hidden">
            <defs>
              <filter id="goo-about">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
          <div className="absolute inset-0" style={{ filter: 'url(#goo-about)' }}>
            <motion.div
              animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0], scale: [1, 1.2, 0.9, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[40px]"
            />
            <motion.div
              animate={{ x: [-40, 40, 0, -40], y: [20, -40, 40, 20], scale: [0.8, 1.1, 0.8, 0.8] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[40px]"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-10">
            <AnimatedText className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-primary/40 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                <span className="text-[10px] font-michroma tracking-[0.6em] text-primary uppercase font-bold">STUDIO DOSSIER</span>
              </div>
              <h1 className="text-[clamp(2.5rem,7vw,10rem)] font-michroma text-white uppercase leading-[0.8] tracking-tighter w-full overflow-hidden">
                LUMORA <span className="text-primary uppercase tracking-tighter font-bold">TRIAD.</span>
              </h1>
            </AnimatedText>

            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <AnimatedSection delay={0.2} className="space-y-8 bg-black/40 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-xl">
                <p className="text-xl md:text-3xl text-white/50 leading-tight font-bold uppercase">
                  "WE BRIDGE THE GAP BETWEEN HEAVY SOFTWARE ENGINEERING AND HIGH-END CINEMATIC DESIGN."
                </p>
                <div className="h-px w-24 bg-primary/20" />
              </AnimatedSection>

              <AnimatedSection delay={0.4} className="space-y-6 bg-black/40 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-xl">
                <p className="text-sm md:text-base text-white/30 leading-relaxed font-bold uppercase tracking-widest">
                  FOUNDED BY A CIRCLE OF INNOVATORS, LUMORA TRIAD WAS BUILT TO PROVE THAT DIGITAL PLATFORMS DON'T HAVE TO CHOOSE BETWEEN PERFORMANCE AND AESTHETIC. WE ARCHITECT LEGACIES.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["CRAFT FIRST", "TECH OBSESSED", "GROWTH DRIVEN"].map(t => (
                    <span key={t} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[8px] font-michroma text-white/40 uppercase tracking-widest backdrop-blur-md">{t}</span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE TRIAD PHILOSOPHY (BOXED DASHBOARD GRID) ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#0a0c0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
            <div className="lg:w-1/3 space-y-8">
              <AnimatedText className="space-y-6">
                <h2 className="text-4xl md:text-7xl font-bold text-white uppercase leading-none tracking-tight">THE <br /><span className="text-primary tracking-tight uppercase">TRIAD</span><br /> LOGIC.</h2>
                <p className="text-lg text-white/30 font-bold uppercase tracking-widest leading-relaxed">OUR STRUCTURAL APPROACH TO EVERY PROJECT, ROOTED IN FIVE CORE PILLARS.</p>
              </AnimatedText>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {pillars.map((p, i) => (
                <AnimatedSection key={p.label} delay={i * 0.1}>
                  <div className="p-8 md:p-10 rounded-[2.5rem] border border-white/[0.08] bg-black/40 hover:bg-white/[0.02] hover:border-primary/20 transition-all duration-700 h-full flex flex-col justify-between space-y-10 group relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-6 relative z-10 w-full overflow-hidden">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-michroma text-primary uppercase tracking-[0.4em]">PILLAR 0{i + 1}</span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>
                      <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{p.label}</h3>
                      <p className="text-[10px] md:text-xs text-white/40 font-bold leading-relaxed uppercase tracking-[0.1em]">{p.desc}</p>
                    </div>

                    {/* CONSTRAINED VISUAL BOX */}
                    <div className="relative h-40 w-full overflow-hidden rounded-[2rem] border border-white/5 bg-black/60 flex items-center justify-center group-hover:border-primary/20 transition-all">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05)_0%,transparent_100%)] opacity-20" />
                      <p.icon className="w-12 h-12 text-primary opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ENGINE HUB (TIMELINE) ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedText className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
              <Radio className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-[9px] font-bold tracking-[0.5em] text-white/40 uppercase">Evolution Log</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-bold text-white uppercase leading-none tracking-tighter">STUDIO <br /><span className="text-primary uppercase">TIMELINE.</span></h2>
          </AnimatedText>

          <div className="max-w-5xl mx-auto relative px-6 md:px-0">
            {/* Technical Line */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />

            {[
              { year: "2025", title: "The Blueprints", desc: "Our core planning phase where the Triad logic and architectural foundations were first defined." },
              { year: "2026", title: "Activation", desc: "Official launch to the digital world. Lumora Triad is introduced as a high-performance studio." },
              { year: "2027", title: "Global Expansion", desc: "Building the global infrastructure and positioning the studio as a worldwide digital brand." }
            ].map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-20 last:mb-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_20px_rgba(74,222,128,0.8)] z-10" />
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:text-left md:pl-20" : "md:text-right md:pr-20"}`}>
                  <div className="space-y-6 backdrop-blur-md border border-white/5 bg-white/[0.02] p-8 md:p-10 rounded-[2.5rem] hover:bg-white/[0.04] transition-all group">
                    <span className="text-4xl font-michroma text-primary leading-none">{m.year}</span>
                    <h3 className="text-2xl font-michroma text-white uppercase tracking-tight group-hover:text-primary transition-colors">{m.title}</h3>
                    <p className="text-base text-white/30 leading-relaxed font-bold uppercase tracking-widest">{m.desc}</p>
                    <div className="flex gap-2 pt-4 border-t border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <AnimatedText className="space-y-12">
            <h2 className="text-6xl md:text-9xl font-michroma text-white uppercase leading-none tracking-tighter">
              INITIATE <br />
              <span className="text-primary uppercase">CONTACT.</span>
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-8 px-14 py-7 bg-primary text-black rounded-[2rem] font-michroma text-[12px] uppercase tracking-[0.45em] hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-primary/30 active:scale-95 group">
              Start Dialogue
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  )
}
