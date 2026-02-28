"use client"

import Image from "next/image"
import { Code, Palette, TrendingUp, Settings, ArrowUpRight, Layout, ShieldCheck, Target, Sparkles } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

const allServices = [
    {
        id: "s1", number: "01", category: "ENGINEERING", name: "DEVELOPMENT", icon: Code,
        desc: "HIGH-PERFORMANCE WEBSITES AND CUSTOM SOFTWARE BUILT FOR SCALE.",
        span: "md:col-span-8", aspect: "aspect-[16/9] md:aspect-auto md:h-full", accent: "text-primary", bg: "from-primary/10",
        visual: (
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/services/development.png"
                    alt="High-performance custom web development and software architecture for scalable businesses"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
        )
    },
    {
        id: "s2", number: "02", category: "PRODUCT", name: "UI/UX DESIGN", icon: Layout,
        desc: "USER-CENTRIC INTERFACES AND SMOOTH CLICKABLE PROTOTYPES.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-primary", bg: "from-primary/10",
        visual: (
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/services/uiux.png"
                    alt="User-centric premium mobile and web UI/UX design with smooth prototypes and wireframes"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
        )
    },
    {
        id: "s3", number: "03", category: "IDENTITY", name: "BRANDING", icon: Palette,
        desc: "VISUAL IDENTITIES AND LOGOS THAT BUILD MARKET TRUST.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-primary", bg: "from-primary/10",
        visual: (
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/services/branding.png"
                    alt="Strategic branding, visual identity, and logo design for building market trust and brand equity"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
        )
    },
    {
        id: "s4", number: "04", category: "VISIBILITY", name: "SEO MASTERY", icon: TrendingUp,
        desc: "TECHNICAL SEO AND ORGANIC GROWTH STRATEGIES.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-primary", bg: "from-primary/10",
        visual: (
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/services/websites.png"
                    alt="Technical SEO mastery and organic growth strategies for maximum search engine visibility"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
        )
    },
    {
        id: "s5", number: "05", category: "DEFENSE", name: "SUPPORT", icon: ShieldCheck,
        desc: "ONGOING SECURITY, MAINTENANCE, AND SPEED OPTIMIZATION.",
        span: "md:col-span-4", aspect: "aspect-square", accent: "text-primary", bg: "from-primary/10",
        visual: (
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/services/ecommerce.png"
                    alt="Ongoing technical support, maintenance, and security optimization for enterprise platforms"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
        )
    },
    {
        id: "s6", number: "06", category: "SALES", name: "LEAD GEN", icon: Target,
        desc: "CONVERSION-OPTIMIZED LANDING PAGES AND AD DESIGNS.",
        span: "md:col-span-6", aspect: "aspect-[16/9]", accent: "text-primary", bg: "from-primary/10",
        visual: (
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/services/leadgen.png"
                    alt="Conversion-optimized landing pages and marketing lead generation strategies built for scale"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
        )
    },
    {
        id: "s7", number: "07", category: "MOTION", name: "ANIMATIONS", icon: Sparkles,
        desc: "CINEMATIC MOTION GRAPHICS AND LOTTIE WEB ANIMATIONS.",
        span: "md:col-span-6", aspect: "aspect-[16/9]", accent: "text-primary", bg: "from-primary/10",
        visual: (
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/services/motion.png"
                    alt="Cinematic motion graphics, animations, and high-fidelity video production for digital products"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
        )
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

                {/* SECTION HEADER */}
                <AnimatedText className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 md:gap-12 mb-16 md:mb-24 px-2">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-primary/40" />
                            <span className="text-[9px] font-michroma tracking-[0.55em] text-primary uppercase">Execution Core</span>
                        </div>
                        <h2 className="text-[12vw] sm:text-[10vw] md:text-7xl font-bold text-white uppercase leading-[0.9] tracking-tighter">
                            OUR <br />
                            <span className="text-primary tracking-tight uppercase">CAPABILITIES.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-sm space-y-4 lg:pb-4">
                        <p className="text-lg md:text-2xl text-white/30 max-w-3xl leading-relaxed font-bold uppercase">
                            A COMPREHENSIVE TECHNICAL ECOSYSTEM DESIGNED TO ARCHITECT, SCALE, AND PROTECT YOUR DIGITAL REALITY.
                        </p>
                    </div>
                </AnimatedText>

                {/* THE DENSE BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
                    {allServices.map((item, i) => (
                        <AnimatedSection
                            key={item.id}
                            delay={i * 0.05}
                            className={`${item.span} group`}
                        >
                            <div className={`relative ${item.aspect} rounded-[2.5rem] border border-white/[0.05] bg-white/[0.01] overflow-hidden hover:border-white/20 transition-all duration-700 backdrop-blur-3xl`}>
                                {/* Background gradient on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                {/* Visual illustration */}
                                {item.visual}

                                {/* Info overlay (Top) */}
                                <div className="absolute top-0 left-0 right-0 p-8 md:p-10 flex flex-col justify-between h-full z-10">
                                    <div className="space-y-4 md:space-y-6">
                                        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                                            <span className="text-[8px] md:text-[10px] font-michroma text-white/10 group-hover:text-white/30 transition-colors uppercase whitespace-nowrap">{item.number}</span>
                                            <div className="w-2 h-2 rounded-full bg-white/5" />
                                            <span className="text-[8px] md:text-[9px] font-michroma uppercase tracking-[0.4em] text-white/20 group-hover:text-primary transition-colors uppercase whitespace-nowrap">{item.category}</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl md:text-3xl font-michroma text-white/60 group-hover:text-white transition-all duration-500 leading-tight uppercase">
                                                {item.name}
                                            </h3>
                                            <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 xl:-translate-x-4 xl:group-hover:translate-x-0 hidden md:flex">
                                                <ArrowUpRight className="w-3 h-3 text-primary" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description - Visible on mobile/tablets by default */}
                                    <div className="mt-auto">
                                        <p className="text-[9px] md:text-xs text-white/30 md:text-white/0 md:group-hover:text-white/40 md:translate-y-6 md:group-hover:translate-y-0 transition-all duration-700 font-michroma leading-relaxed max-w-[280px] uppercase">
                                            {item.desc}
                                        </p>
                                    </div>
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
                                        SELECT YOUR <span className="text-primary uppercase tracking-tighter">CAPACITY.</span>
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
