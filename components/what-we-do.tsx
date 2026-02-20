"use client"

import { Code, Layout, Palette, Zap, Search, PlayCircle, ArrowUpRight, ShieldCheck, Terminal, Heart, TrendingUp, Laptop, ShoppingBag, Layers, Fingerprint, RefreshCcw, Headphones, BarChart3, Target, MousePointer2, Smartphone } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const allServices = [
    // PILLAR 01: BUILD
    {
        id: "s1", number: "01", pillar: "Build", name: "Business Websites", icon: Laptop,
        desc: "High-performance corporate sites engineered for authority and speed.",
        span: "md:col-span-7", aspect: "aspect-[16/10]", accent: "text-primary", bg: "from-primary/10",
        visual: <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-700" />
    },
    {
        id: "s2", number: "02", pillar: "Build", name: "E-Commerce", icon: ShoppingBag,
        desc: "Scalable storefronts with seamless checkout and inventory logic.",
        span: "md:col-span-5", aspect: "aspect-square md:aspect-auto", accent: "text-primary", bg: "from-primary/10",
        visual: <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity"><ShoppingBag className="w-32 h-32" /></div>
    },
    {
        id: "s3", number: "03", pillar: "Build", name: "Web Applications", icon: Terminal,
        desc: "Complex SaaS platforms and bespoke digital tools for enterprise.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-primary", bg: "from-primary/10",
        visual: <div className="absolute inset-0 flex items-center justify-center font-mono text-[180px] text-primary/5 select-none -rotate-12 group-hover:rotate-0 transition-transform duration-1000">{"{ }"}</div>
    },

    // PILLAR 02: DESIGN
    {
        id: "s4", number: "04", pillar: "Design", name: "UI/UX Design", icon: Smartphone,
        desc: "Cinematic interfaces focused on user behavior and visual flow.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-violet-400", bg: "from-violet-500/10",
        visual: <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-violet-500/5 to-transparent" />
    },
    {
        id: "s5", number: "05", pillar: "Design", name: "Logo & Branding", icon: Palette,
        desc: "Unified brand systems that communicate mission through geometry.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-violet-400", bg: "from-violet-500/10",
        visual: <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-serif italic text-violet-500/5 opacity-40 group-hover:opacity-100 transition-opacity">LT</div>
    },
    {
        id: "s6", number: "06", pillar: "Design", name: "Motion Graphics", icon: PlayCircle,
        desc: "Dynamic visual storytelling that breathes life into static designs.",
        span: "md:col-span-8", aspect: "aspect-[16/7]", accent: "text-violet-400", bg: "from-violet-500/10",
        visual: <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_70%)] group-hover:scale-150 transition-transform duration-1000" />
    },

    // PILLAR 03: GROW
    {
        id: "s7", number: "07", pillar: "Grow", name: "SEO Dominance", icon: Search,
        desc: "Technical SEO engineering that captures major search authority.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-amber-400", bg: "from-amber-500/10",
        visual: (
            <>
                <div className="absolute inset-0 bg-cover bg-center opacity-[0.15] group-hover:opacity-30 transition-opacity duration-700 blur-[2px] group-hover:blur-0" style={{ backgroundImage: 'url("/images/seo-mockup.jpg")' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </>
        )
    },
    {
        id: "s8", number: "08", pillar: "Grow", name: "Lead Generation", icon: Target,
        desc: "Strategic funnels designed to convert curiosity into revenue.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-amber-400", bg: "from-amber-500/10",
        visual: (
            <>
                <div className="absolute inset-0 bg-cover bg-center opacity-[0.15] group-hover:opacity-30 transition-opacity duration-700 blur-[2px] group-hover:blur-0" style={{ backgroundImage: 'url("/images/analytics-mockup.jpg")' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </>
        )
    },
    {
        id: "s9", number: "09", pillar: "Grow", name: "Conversion Tuning", icon: MousePointer2,
        desc: "A/B testing and layout optimization to maximize performance.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-amber-400", bg: "from-amber-500/10",
        visual: (
            <>
                <div className="absolute inset-0 bg-cover bg-center opacity-[0.15] group-hover:opacity-30 transition-opacity duration-700 blur-[2px] group-hover:blur-0" style={{ backgroundImage: 'url("/images/growth-logic.jpg")' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </>
        )
    },

    // PILLAR 04: SUPPORT
    {
        id: "s10", number: "10", pillar: "Support", name: "Core Security", icon: Fingerprint,
        desc: "Enterprise-grade protection for your digital assets 24/7.",
        span: "md:col-span-6", aspect: "aspect-[16/9] md:aspect-auto", accent: "text-sky-400", bg: "from-sky-500/10",
        visual: <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(56,189,248,0.02)_20px,rgba(56,189,248,0.02)_40px)]" />
    },
    {
        id: "s11", number: "11", pillar: "Support", name: "Daily Backups", icon: RefreshCcw,
        desc: "Automated snapshot cycles to ensure data integrity always.",
        span: "md:col-span-6", aspect: "aspect-[16/9] md:aspect-auto", accent: "text-sky-400", bg: "from-sky-500/10",
        visual: <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><RefreshCcw className="w-40 h-40 text-sky-500/5 animate-[spin_20s_linear_infinite]" /></div>
    },
]

export function WhatWeDo() {
    return (
        <section className="py-24 md:py-48 bg-background relative overflow-hidden border-t border-white/[0.05]">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] blur-[200px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.02] blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* SECTION HEADER — MATCHING SHOWCASE STYLE */}
                <AnimatedText className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-primary/50" />
                            <span className="text-[9px] font-michroma tracking-[0.55em] text-primary uppercase">Execution Core</span>
                        </div>
                        <h2 className="text-[clamp(2.6rem,7.5vw,6.4rem)] font-michroma font-normal tracking-tight leading-[0.85] text-white uppercase">
                            The 4 <span className="font-serif italic text-primary lowercase tracking-tighter">Pillars</span><br />
                            of Studio Power<span className="text-primary">.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-sm space-y-4 lg:pb-4">
                        <p className="text-lg md:text-xl text-white/35 font-medium leading-relaxed italic">
                            A dense network of capabilities designed to architect, scale, and protect your digital reality.
                        </p>
                    </div>
                </AnimatedText>

                {/* THE DENSE BENTO GRID — EVERY SERVICE IS A BOX */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
                    {allServices.map((item, i) => (
                        <AnimatedSection
                            key={item.id}
                            delay={i * 0.05}
                            className={`${item.span} group`}
                        >
                            <div className={`relative ${item.aspect} rounded-[2.5rem] border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all duration-700`}>
                                {/* Background gradient on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                {/* Visual illustration */}
                                {item.visual}

                                {/* Info overlay (Top) */}
                                <div className="absolute top-0 left-0 right-0 p-8 md:p-10 flex items-start justify-between z-10">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-michroma text-white/10 group-hover:text-white/30 transition-colors uppercase">{item.number}</span>
                                            <div className={`w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center group-hover:bg-white/10 transition-all duration-500`}>
                                                <item.icon className={`w-4 h-4 text-white/30 group-hover:${item.accent} transition-colors duration-500`} />
                                            </div>
                                            <span className={`text-[9px] font-michroma uppercase tracking-[0.4em] text-white/20 group-hover:text-white/60 transition-colors uppercase`}>{item.pillar}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif italic text-white/40 group-hover:text-white transition-all duration-500 leading-tight">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                                        <ArrowUpRight className="w-4 h-4 text-primary" />
                                    </div>
                                </div>

                                {/* Description — revealed on hover (Bottom) */}
                                <div className="absolute bottom-10 left-0 right-0 px-10 z-10">
                                    <p className="text-xs text-white/0 group-hover:text-white/40 transition-all duration-700 translate-y-6 group-hover:translate-y-0 font-medium leading-relaxed max-w-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}

                    {/* Final Action Card */}
                    <AnimatedSection delay={0.6} className="md:col-span-12 group">
                        <Link
                            href="/contact"
                            className="block relative rounded-[2.5rem] border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-700 p-8 md:p-12"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div className="space-y-3">
                                    <span className="text-[9px] font-michroma tracking-[0.45em] text-primary/60 uppercase">Ready to scale?</span>
                                    <h3 className="text-3xl md:text-5xl font-michroma text-white uppercase group-hover:text-primary transition-colors duration-500">
                                        Select your <span className="font-serif italic text-primary lowercase tracking-tighter">Capacity.</span>
                                    </h3>
                                </div>
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 shrink-0">
                                    <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8 text-white/20 group-hover:text-primary transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                </div>

            </div>
        </section>
    )
}
