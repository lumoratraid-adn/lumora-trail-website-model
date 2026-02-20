"use client"

import { Code, Palette, TrendingUp, Settings, CheckCircle2, ArrowUpRight, Globe, Layout, Search, Megaphone, PlayCircle, Mail, Sparkles, Zap, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const pillars = [
  {
    id: "build",
    number: "01",
    label: "Build",
    icon: Code,
    tagline: "We build the systems your business needs.",
    intro: "From custom platforms to scalable software — we engineer high-performance foundations.",
    accent: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/5",
    glow: "bg-primary/10",
    services: [
      { name: "Business Websites", desc: "Clean, professional, and SEO-optimized.", items: ["Landing Pages", "Multi-page Sites"] },
      { name: "E-Commerce", desc: "Robust stores with seamless checkout.", items: ["Stripe Integration", "Order Mgmt"] },
      { name: "Web Applications", desc: "Custom SaaS and complex platforms.", items: ["Dashboards", "User Auth"] },
      { name: "Custom Software", desc: "Bespoke tools for your workflow.", items: ["Automation", "Integrations"] },
    ]
  },
  {
    id: "design",
    number: "02",
    label: "Design",
    icon: Palette,
    tagline: "We make your business look modern.",
    intro: "Visual identities and user interfaces that build trust and command attention.",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    glow: "bg-violet-500/10",
    services: [
      { name: "UI / UX Design", desc: "User-friendly and researched layouts.", items: ["Figma Files", "Prototyping"] },
      { name: "Logo & Branding", desc: "Complete visual identity systems.", items: ["Styleguides", "Logo Design"] },
      { name: "Creative Graphics", desc: "Marketing visuals and ad creatives.", items: ["Social Assets", "Banners"] },
      { name: "Animations", desc: "Interactive motion and logo animations.", items: ["Lottie", "Explainer Videos"] },
    ]
  },
  {
    id: "grow",
    number: "03",
    label: "Grow",
    icon: TrendingUp,
    tagline: "We bring more customers to you.",
    intro: "SEO and lead generation strategies designed to scale your audience and conversion.",
    accent: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    glow: "bg-amber-500/10",
    services: [
      { name: "SEO Optimization", desc: "Rank higher on Google organically.", items: ["Keyword Strategy", "Technical SEO"] },
      { name: "Lead Generation", desc: "High-converting landing page funnels.", items: ["Lead Forms", "A/B Testing"] },
      { name: "Traffic Growth", desc: "Scale your monthly visitor count.", items: ["Content Strategy", "Backlinks"] },
      { name: "Conversion Rate", desc: "Turn more browsers into buyers.", items: ["Heatmaps", "Copywriting"] },
    ]
  },
  {
    id: "support",
    number: "04",
    label: "Support",
    icon: Settings,
    tagline: "We take care of it all after launch.",
    intro: "Maintenance, security, and updates to keep your digital asset at peak performance.",
    accent: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5",
    glow: "bg-sky-500/10",
    services: [
      { name: "Maintenance", desc: "Regular care and monitoring.", items: ["Bug Fixes", "Uptime Monitoring"] },
      { name: "Security", desc: "Backups and threat protection.", items: ["Daily Backups", "SSL/WAF"] },
      { name: "Speed Tuning", desc: "Lightning fast load times.", items: ["CDN Setup", "Code Minification"] },
      { name: "Tech Support", desc: "Human help when you need it.", items: ["Consultation", "Fast Fixes"] },
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="relative bg-[#020202]">

      {/* ─── SCENIC HERO ─── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[150px] opacity-40 rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText className="max-w-5xl space-y-8">
            <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-3xl">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[10px] font-michroma tracking-[0.45em] text-primary uppercase">Elite Capabilities</span>
            </div>
            <h1 className="text-[clamp(2.6rem,8.25vw,7.85rem)] font-michroma text-white uppercase leading-[0.85] tracking-tight">
              Tools of<br />
              <span className="font-serif italic text-primary lowercase tracking-tighter">Growth.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/35 max-w-3xl leading-relaxed font-medium italic">
              A comprehensive ecosystem of services grouped into 4 strategic pillars. No matter the goal, we have the mechanism to build it.
            </p>
          </AnimatedText>

          {/* Quick Link Strip */}
          <div className="mt-16 flex flex-wrap gap-4">
            {pillars.map(p => (
              <a key={p.id} href={`#${p.id}`} className="px-6 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-[9px] font-michroma uppercase tracking-[0.3em] text-white/40 hover:text-primary hover:border-primary/40 transition-all">
                {p.number} {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC PILLAR GRID ─── */}
      <section className="pb-32">
        <div className="container mx-auto px-6 space-y-32">
          {pillars.map((pillar, pIdx) => (
            <AnimatedSection key={pillar.id} id={pillar.id} className="relative group">
              {/* Sticky Vertical Number (Desktop Only) */}
              <div className="absolute -left-16 top-0 hidden xl:block">
                <span className={`text-9xl font-michroma opacity-[0.03] select-none ${pillar.accent}`}>{pillar.number}</span>
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Left: Pillar Intro (4 cols) */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${pillar.bg} ${pillar.border}`}>
                        <pillar.icon className={`w-6 h-6 ${pillar.accent}`} />
                      </div>
                      <h2 className={`text-4xl font-michroma uppercase tracking-widest ${pillar.accent}`}>
                        {pillar.label}
                      </h2>
                    </div>
                    <p className="text-[11px] font-michroma uppercase tracking-[0.45em] text-white/20">{pillar.tagline}</p>
                  </div>
                  <p className="text-lg text-white/40 font-medium leading-relaxed italic">
                    {pillar.intro}
                  </p>
                  <Link href="/contact" className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-michroma text-[9px] uppercase tracking-[0.4em] border transition-all hover:scale-105 ${pillar.bg} ${pillar.border} ${pillar.accent}`}>
                    Start a Project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right: Services Grid (8 cols) */}
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                  {pillar.services.map((service, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-8 rounded-[2.5rem] border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 relative overflow-hidden group/service"
                    >
                      {/* Accent Glow */}
                      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover/service:opacity-100 transition-opacity duration-500 ${pillar.glow}`} />

                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-michroma uppercase tracking-wider text-white group-hover/service:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-20">
                            <Zap className={`w-3 h-3 ${pillar.accent}`} />
                          </div>
                        </div>
                        <p className="text-sm text-white/35 font-medium leading-relaxed">
                          {service.desc}
                        </p>

                        <div className="space-y-2.5 pt-4 border-t border-white/[0.04]">
                          {service.items.map(inc => (
                            <div key={inc} className="flex items-center gap-3">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${pillar.accent} opacity-40`} />
                              <span className="text-[10px] font-michroma uppercase tracking-[0.15em] text-white/20 group-hover/service:text-white/50 transition-colors">{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── FINAL PERSUASION ─── */}
      <section className="py-24 md:py-32 border-t border-white/[0.05] bg-primary/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <AnimatedText className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-michroma text-white uppercase leading-[0.9]">
                Ready to build the<br />
                <span className="font-serif italic text-primary lowercase tracking-tighter">Future?</span>
              </h2>
              <p className="text-xl text-white/35 italic font-medium">
                No complicated tiers. Just high-performance engineering for businesses that want an edge.
              </p>
            </AnimatedText>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-10 py-5 bg-primary text-black rounded-2xl font-michroma text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-4"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:lumoratriad@gmail.com"
                className="group w-full sm:w-auto px-10 py-5 border border-white/10 text-white/60 rounded-2xl font-michroma text-[10px] uppercase tracking-[0.4em] hover:border-primary/40 hover:text-white transition-all flex items-center justify-center gap-3"
              >
                <Mail className="w-4 h-4" />
                Discuss Goals
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
