"use client"

import { Code, Palette, TrendingUp, Settings, ArrowUpRight, Sparkles, Zap, ArrowRight, Share2, Cpu, Globe, Search, ShieldCheck, Database, PlayCircle, Fingerprint, Activity, Server, Layout, MessageSquare, CheckCircle2, Target } from "lucide-react"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const pillars = [
  {
    id: "build",
    label: "Development",
    icon: Code,
    tagline: "Software & Systems Architecture",
    desc: "Engineering high-performance foundations with architecture-first logic.",
    services: [
      { name: "Business Websites", items: ["Landing Pages", "Multi-page Sites"], icon: Layout },
      { name: "E-Commerce", items: ["Stripe Integration", "Order Mgmt"], icon: Globe },
      { name: "Web Applications", items: ["Dashboards", "User Auth"], icon: Cpu },
      { name: "Custom Software", items: ["Automation", "Integrations"], icon: Settings },
    ],
    widget: "status"
  },
  {
    id: "design",
    label: "UI/UX Design",
    icon: Layout,
    tagline: "High-Fidelity Interface Design",
    desc: "User-centric clickable prototypes and smooth product logic.",
    services: [
      { name: "UI Design", items: ["Figma Files", "System Design"], icon: Palette },
      { name: "UX Research", items: ["User Flows", "Wireframing"], icon: MessageSquare },
      { name: "Prototyping", items: ["Clickable Demos", "Interaction"], icon: PlayCircle },
      { name: "App Design", items: ["iOS/Android", "Web Apps"], icon: Cpu },
    ],
    widget: "palette"
  },
  {
    id: "branding",
    label: "Branding",
    icon: Palette,
    tagline: "Visual Identity & Strategy",
    desc: "Crafting strong identities that build business authority.",
    services: [
      { name: "Logo Design", items: ["Primary Logos", "Submarks"], icon: Fingerprint },
      { name: "Color Strategy", items: ["Moodboards", "Palettes"], icon: Palette },
      { name: "Styleguides", items: ["Typography", "Usage Rules"], icon: Settings },
      { name: "Visual Assets", items: ["Posters", "Banners"], icon: Sparkles },
    ],
    widget: "identity"
  },
  {
    id: "seo",
    label: "SEO Mastery",
    icon: TrendingUp,
    tagline: "Organic Growth Engineering",
    desc: "Scaling market authority through precision technical SEO.",
    services: [
      { name: "Technical SEO", items: ["Core Vitals", "Indexing"], icon: Search },
      { name: "Keyword Strategy", items: ["Research", "Intent Mapping"], icon: Target },
      { name: "Content Audit", items: ["Optimization", "Gaps"], icon: Activity },
      { name: "Growth Logs", items: ["Backlinks", "Analytics"], icon: Database },
    ],
    widget: "chart"
  },
  {
    id: "support",
    label: "Support",
    icon: ShieldCheck,
    tagline: "Asset Lifecycle Management",
    desc: "Continuous security, speed tuning, and enterprise maintenance.",
    services: [
      { name: "Maintenance", items: ["Bug Fixes", "Uptime"], icon: Server },
      { name: "Security", items: ["Daily Backups", "WAF"], icon: ShieldCheck },
      { name: "Speed Tuning", items: ["CDN Setup", "Minification"], icon: Zap },
      { name: "Consultation", items: ["Tech Advice", "Fast Fixes"], icon: MessageSquare },
    ],
    widget: "security"
  },
  {
    id: "leadgen",
    label: "Lead Gen",
    icon: Target,
    tagline: "Conversion Optimization",
    desc: "Data-driven funnels designed to turn clicks into customers.",
    services: [
      { name: "Funnel Build", items: ["Landing Pages", "Opt-ins"], icon: Layout },
      { name: "Ad Design", items: ["Static Ads", "Video Ads"], icon: PlayCircle },
      { name: "Copywriting", items: ["Hooks", "Closing Copy"], icon: MessageSquare },
      { name: "A/B Testing", items: ["Heatmaps", "Validation"], icon: Activity },
    ],
    widget: "funnel"
  },
  {
    id: "animations",
    label: "Animations",
    icon: Sparkles,
    tagline: "Motion & Visual FX",
    desc: "Cinematic movement and high-fidelity web interactions.",
    services: [
      { name: "Web Animations", items: ["Lottie", "Framer Motion"], icon: Zap },
      { name: "Motion Graphics", items: ["Explainer Videos", "Ads"], icon: PlayCircle },
      { name: "Logo Motion", items: ["Intros", "Loading states"], icon: Fingerprint },
      { name: "Visual FX", items: ["Particle Systems", "Glows"], icon: Sparkles },
    ],
    widget: "playback"
  }
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background text-white overflow-hidden uppercase">
      {/* Background Texture/Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grain-y.com/assets/images/grain.png')]" />

      {/* Subtle Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full opacity-50" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full opacity-30" />

      <div className="container mx-auto px-6 relative z-10 pt-40">

        {/* ─── TECHNICAL HERO ─── */}
        <div className="max-w-4xl space-y-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-michroma tracking-[0.45em] text-white/50 uppercase font-bold">OUR SERVICES</span>
          </motion.div>

          <AnimatedText>
            <h1 className="text-[clamp(2.5rem,7.5vw,7.5rem)] font-bold tracking-tight text-white leading-[0.9] mb-8 uppercase">
              OUR <br />
              <span className="text-primary tracking-tight uppercase">SERVICES.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/30 max-w-3xl leading-relaxed font-bold uppercase">
              WE PROVIDE A COMPREHENSIVE TECHNICAL ECOSYSTEM ENGINEERED FOR MAXIMUM PERFORMANCE AND ARCHITECTURAL INTEGRITY.
            </p>
          </AnimatedText>
        </div>

        {/* ─── DYNAMIC PILLAR SECTIONS ─── */}
        <div className="space-y-48 pb-40">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.id} className="relative group">

              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                {/* LEFT: Pillar Identity & Dashboard Widget */}
                <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.1)]">
                        <pillar.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">Pillar 0{index + 1}</span>
                        <h2 className="text-5xl font-bold text-white uppercase tracking-tighter">{pillar.label}</h2>
                      </div>
                    </div>
                    <p className="text-xl text-white/30 font-bold leading-relaxed uppercase">{pillar.desc}</p>
                  </div>

                  {/* DYNAMIC WIDGET */}
                  <div className="p-8 rounded-[3rem] border border-white/[0.08] bg-card shadow-2xl relative overflow-hidden group/widget">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-20" />

                    {pillar.widget === "status" && (
                      <div className="space-y-8 relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">System Health</span>
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Optimized</span>
                          </div>
                        </div>
                        <div className="flex justify-center py-4">
                          <div className="relative w-40 h-40 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                              <circle cx="80" cy="80" r="70" className="stroke-white/5 fill-none stroke-[8]" />
                              <motion.circle
                                cx="80"
                                cy="80"
                                r="70"
                                className="stroke-primary fill-none stroke-[8]"
                                initial={{ strokeDasharray: "0 440" }}
                                whileInView={{ strokeDasharray: "400 440" }}
                                transition={{ duration: 2 }}
                              />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                              <span className="text-4xl font-mono font-bold text-white">100<span className="text-primary">%</span></span>
                              <span className="text-[8px] text-white/20 uppercase tracking-widest font-bold">Reliability</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {pillar.widget === "palette" && (
                      <div className="space-y-8 relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Visual Spectrum</span>
                          <Palette className="w-4 h-4 text-primary/40" />
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                          {[1, 0.8, 0.5, 0.2].map(op => (
                            <div key={op} className="aspect-square rounded-2xl bg-primary shadow-lg" style={{ opacity: op }} />
                          ))}
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full relative p-0.5 mt-4">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: "65%" }} className="h-full bg-primary rounded-full transition-all" />
                        </div>
                      </div>
                    )}

                    {pillar.widget === "identity" && (
                      <div className="space-y-8 relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Brand DNA</span>
                          <Fingerprint className="w-4 h-4 text-primary/40" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="aspect-square rounded-2xl border border-white/10 flex items-center justify-center group/logo hover:bg-primary/5 transition-colors">
                            <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center">
                              <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                            </div>
                          </div>
                          <div className="aspect-square rounded-2xl border border-white/10 flex items-center justify-center p-4">
                            <div className="w-full h-full border-l-2 border-b-2 border-primary/20 rounded-bl-xl" />
                          </div>
                        </div>
                      </div>
                    )}

                    {pillar.widget === "chart" && (
                      <div className="space-y-8 relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Performance Curve</span>
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="h-32 flex items-end gap-1.5 px-2">
                          {[40, 60, 45, 80, 55, 95, 75, 90].map((h, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 bg-primary/20 border-t border-primary/40 rounded-t-lg"
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ delay: i * 0.1 }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {pillar.widget === "security" && (
                      <div className="space-y-8 relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Defense Grid</span>
                          <ShieldCheck className="w-4 h-4 text-primary" />
                        </div>
                        <div className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div className="h-full bg-white/20" initial={{ width: 0 }} whileInView={{ width: `${80 - (i * 10)}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {pillar.widget === "funnel" && (
                      <div className="space-y-8 relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Lead Path</span>
                          <Target className="w-4 h-4 text-primary/40" />
                        </div>
                        <div className="space-y-2">
                          {[1, 0.7, 0.4, 0.2].map((w, i) => (
                            <motion.div
                              key={i}
                              style={{ width: `${w * 100}%` }}
                              className="h-6 bg-primary/10 border-l border-primary/30 rounded-r-lg flex items-center px-3"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="w-1 h-1 rounded-full bg-primary" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {pillar.widget === "playback" && (
                      <div className="space-y-8 relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Interactive Motion</span>
                          <Sparkles className="w-4 h-4 text-primary/40 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                        </div>
                        <div className="flex justify-center items-center py-6">
                          <div className="relative group/play">
                            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 group-hover/play:scale-[2] transition-transform duration-1000" />
                            <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center relative z-10">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-t-2 border-primary rounded-full"
                              />
                              <PlayCircle className="w-10 h-10 text-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT: Detailed Service Modules Grid */}
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
                  {pillar.services.map((service, sIdx) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: sIdx * 0.1 }}
                      className="p-10 rounded-[3rem] border border-white/[0.08] bg-[#140E24] hover:bg-white/[0.02] hover:border-primary/30 transition-all duration-700 group/service relative overflow-hidden shadow-2xl"
                    >
                      <div className="relative z-10 space-y-8">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary group-hover/service:scale-110 group-hover/service:bg-primary/10 transition-all">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-white uppercase tracking-tight group-hover/service:text-primary">{service.name}</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {service.items.map((item) => (
                            <div key={item} className="flex items-center gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/service:bg-primary transition-all" />
                              <span className="text-[12px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover/service:text-white">{item}</span>
                            </div>
                          ))}
                        </div>
                        <Link href="/contact" className="flex items-center gap-4 pt-4 text-[10px] font-bold text-primary uppercase tracking-[0.3em] opacity-40 group-hover/service:opacity-100 transition-opacity">
                          Discuss Project
                          <ArrowRight className="w-4 h-4 group-hover/service:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ─── FINAL PERSUASION ─── */}
        <section className="py-20 md:py-40 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-16 md:p-24 rounded-[4rem] border border-white/[0.1] bg-[#06030D] relative overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left">
              <div className="max-w-2xl space-y-8">
                <h2 className="text-5xl md:text-8xl font-bold text-white uppercase leading-none tracking-tighter">
                  READY TO <br />
                  <span className="text-primary tracking-tight uppercase">EXECUTE?</span>
                </h2>
                <p className="text-xl text-white/30 leading-relaxed font-bold uppercase">
                  OUR ARCHITECTURE IS READY. YOUR VISION IS THE FINAL MISSING PIECE OF THE PROTOCOL.
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full md:w-auto">
                <Link href="/contact" className="px-14 py-7 bg-primary text-black rounded-[2.5rem] text-[12px] uppercase tracking-[0.45em] hover:bg-white transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-5">
                  Get Started
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      <Footer />
    </main>
  )
}
