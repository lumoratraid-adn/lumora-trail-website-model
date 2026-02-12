"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, Globe, Layout, Palette, Code, Target, Zap } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export default function AboutPage() {
  const values = [
    {
      title: "Structural Integrity",
      desc: "Architecting software with disciplined engineering rather than ad-hoc solutions.",
      icon: Layout
    },
    {
      title: "Cinematic Vision",
      desc: "Creating brand identities that resonate through high-fidelity visual storytelling.",
      icon: Palette
    },
    {
      title: "Market Dominance",
      desc: "Engineering products that capture category leadership through performance.",
      icon: Zap
    }
  ]

  return (
    <main className="min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-44 sm:pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-32 gap-12">
            <AnimatedText delay={0.1} className="space-y-8">
              <span className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Profile</span>
              <h1 className="text-[clamp(3rem,12vw,10rem)] font-michroma font-normal tracking-[-0.04em] leading-[0.85] uppercase">
                Lumora <br />
                <span className="font-serif italic text-primary lowercase tracking-tighter">Triad.</span>
              </h1>
            </AnimatedText>
            <div className="max-w-xs">
              <AnimatedText delay={0.3}>
                <p className="text-xl text-white/40 italic font-medium leading-[1.2]">
                  "Architecting the digital foundation for visionary brands."
                </p>
                <div className="flex gap-4 pt-6">
                  {/* Social Icons */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">X (Twitter)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </a>
                </div>
              </AnimatedText>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-24 items-center">
            <AnimatedSection delay={0.2} className="space-y-12">
              <h2 className="text-3xl md:text-6xl font-michroma uppercase leading-none">The Future <br /> of Studio <br /> <span className="text-primary italic">Dynamics</span>.</h2>
              <p className="text-xl text-white/50 leading-relaxed font-medium italic">
                Lumora Triad is more than a studio. We are a high-performance technical ecosystem designed to bridge the gap between complex software engineering and high-fidelity cinematic design.
              </p>
              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center gap-6 group">
                  <span className="text-[10px] font-michroma uppercase tracking-[0.4em]">Partner with us</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4} className="relative aspect-square rounded-[2rem] md:rounded-[4rem] bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.05)_0%,transparent_70%)]" />
              <span className="text-[clamp(10rem,30vw,20rem)] font-serif italic text-white/5 select-none">LT</span>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-48 bg-[#1A1D1A]/50 border-t border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((val, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] bg-white/5 border border-white/5 space-y-8 md:space-y-12 hover:bg-white/10 transition-all duration-700 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                  <val.icon className="w-8 h-8" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-michroma uppercase tracking-widest">{val.title}</h3>
                  <p className="text-sm font-michroma uppercase tracking-widest leading-relaxed text-white/30 group-hover:text-white transition-colors italic">
                    {val.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final Line */}
      <section className="py-24 md:py-48">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <AnimatedSection>
            <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-michroma uppercase leading-none mb-12 md:mb-16">WE BUILD <br /> YOUR <span className="font-serif italic text-primary">LEGACY</span>.</h2>
            <p className="text-base md:text-xl font-michroma uppercase tracking-[0.6em] text-white/20">Lumora Text & Design Studio</p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
