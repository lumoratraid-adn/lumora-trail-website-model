"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, Globe, Layout, Palette, Code, Target, Zap, ShieldCheck, Heart } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const pillars = [
  { label: "Build", desc: "Software engineering with disciplined, architecture-first logic.", icon: Code, color: "text-primary" },
  { label: "Design", desc: "Crafting cinematic visual identities and high-fidelity interfaces.", icon: Palette, color: "text-violet-400" },
  { label: "Grow", desc: "Scaling market authority through SEO and lead-generation engineering.", icon: Target, color: "text-amber-400" },
  { label: "Support", desc: "Continuous security, speed maintenance, and enterprise support.", icon: ShieldCheck, color: "text-sky-400" },
]

export default function AboutPage() {
  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Header />

      {/* ─── STUDIO HERO ─── */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            <AnimatedText className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-primary/40" />
                <span className="text-[10px] font-michroma tracking-[0.6em] text-primary uppercase">Studio Dossier</span>
              </div>
              <h1 className="text-[clamp(2.6rem,9vw,8.25rem)] font-michroma text-white uppercase leading-[0.8] tracking-tighter">
                Lumora <br />
                <span className="font-serif italic text-primary lowercase tracking-tighter">Triad.</span>
              </h1>
            </AnimatedText>

            <div className="grid lg:grid-cols-2 gap-20 items-end">
              <AnimatedSection delay={0.2} className="space-y-8">
                <p className="text-xl md:text-3xl text-white/50 leading-tight font-medium italic max-w-xl">
                  "We bridge the gap between heavy software engineering and high-end cinematic design."
                </p>
                <div className="h-px w-32 bg-primary/20" />
              </AnimatedSection>

              <AnimatedSection delay={0.4} className="space-y-6">
                <p className="text-lg text-white/30 leading-relaxed font-normal">
                  Founded by a circle of innovators, Lumora Triad was built to prove that digital platforms don't have to choose between performance and aesthetic. We architect legacies.
                </p>
                <div className="flex gap-4">
                  {/* Status Badges */}
                  {["Craft First", "Tech Obsessed", "Growth Driven"].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[8px] font-michroma text-white/40 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE TRIAD PHILOSOPHY ─── */}
      <section className="py-24 md:py-40 bg-zinc-950/50 border-t border-b border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/3 space-y-8 md:space-y-10">
              <AnimatedText className="space-y-6">
                <h2 className="text-4xl md:text-7xl font-michroma text-white uppercase leading-none">The <br /><span className="text-primary italic">Triad</span><br /> Logic.</h2>
                <p className="text-base md:text-lg text-white/30 font-medium italic">Our structural approach to every project, rooted in 4 core pillars.</p>
              </AnimatedText>

              <Link href="/contact" className="group flex items-center gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-[9px] md:text-[10px] font-michroma uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">Start the dialogue</span>
              </Link>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 md:gap-5 w-full">
              {pillars.map((p, i) => (
                <AnimatedSection key={p.label} delay={i * 0.1}>
                  <div className="p-8 md:p-10 rounded-[2.5rem] border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-700 h-full space-y-6 md:space-y-8 group">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${p.color}`}>
                      <p.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-xl md:text-2xl font-michroma uppercase text-white tracking-widest transition-colors duration-500 group-hover:text-primary">{p.label}</h3>
                      <p className="text-[12px] md:text-sm text-white/20 group-hover:text-white/40 transition-colors duration-500 font-medium leading-relaxed italic uppercase tracking-wider">{p.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDERS STORY (REFINED) ─── */}
      <section className="py-24 md:py-48">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-16">
            <AnimatedText className="space-y-8">
              <Heart className="w-8 h-8 text-primary/40 mx-auto" />
              <h2 className="text-4xl md:text-8xl font-michroma text-white uppercase leading-[0.9]">Beyond <br />Codes & <br /><span className="font-serif italic text-primary lowercase tracking-tighter">Pixels.</span></h2>
              <p className="text-xl md:text-2xl text-white/35 max-w-3xl leading-relaxed italic font-medium mx-auto">
                Lumora Triad began as a circle of friends with a shared technical obsession. We didn't want to build just another development agency; we wanted to build a sanctuary for innovators.
              </p>
            </AnimatedText>

            <div className="flex flex-wrap justify-center gap-12 pt-10 border-t border-white/5 w-full">
              <div className="text-center">
                <p className="text-5xl font-michroma text-white mb-2 tracking-tighter">2025</p>
                <p className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/20">The Beginning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIALS STRIP ─── */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="container mx-auto px-6 text-center space-y-12">
          <span className="text-[10px] font-michroma uppercase tracking-[0.5em] text-white/20">Follow the Journey</span>
          <div className="flex justify-center gap-6">
            {[
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>, href: "https://instagram.com" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>, href: "https://linkedin.com" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: "https://twitter.com" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>, href: "https://facebook.com" }
            ].map((svc, i) => (
              <a key={i} href={svc.href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:bg-primary hover:text-black transition-all hover:-translate-y-1">
                {svc.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
