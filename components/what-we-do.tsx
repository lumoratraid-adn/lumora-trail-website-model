"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Globe2, Layers, Search, RefreshCw, Target, PlayCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const capabilities = [
    {
        id: "website-web-app-development",
        title: "Website & Software Development",
        desc: "We build fast, secure, and scalable websites and custom software that grow with your business.",
        icon: Globe2,
        color: "from-blue-500/10 to-transparent",
        accent: "#3B82F6"
    },
    {
        id: "ui-ux-design",
        title: "UI / UX Design & Figma Projects",
        desc: "We design clean, user-friendly interfaces and smooth experiences that make your digital products easy to use.",
        icon: Layout,
        color: "from-violet-500/10 to-transparent",
        accent: "#8B5CF6"
    },
    {
        id: "branding-logo-digital-marketing",
        title: "Branding, Logo, Poster & Digital Marketing",
        desc: "We create strong brand identities and marketing designs that help your business stand out and build trust.",
        icon: Layers,
        color: "from-pink-500/10 to-transparent",
        accent: "#EC4899"
    },
    {
        id: "seo-online-growth",
        title: "SEO & Online Growth",
        desc: "We improve your website’s visibility on Google and help you reach the right audience organically.",
        icon: Search,
        color: "from-emerald-500/10 to-transparent",
        accent: "#10B981"
    },
    {
        id: "website-redesign-maintenance",
        title: "Website Redesign & Maintenance",
        desc: "We upgrade outdated websites and keep them running smoothly, securely, and efficiently.",
        icon: RefreshCw,
        color: "from-amber-500/10 to-transparent",
        accent: "#F59E0B"
    },
    {
        id: "landing-pages-lead-generation",
        title: "Landing Pages & Lead Generation",
        desc: "We design focused pages that turn visitors into leads and customers.",
        icon: Target,
        color: "from-cyan-500/10 to-transparent",
        accent: "#06B6D4"
    },
    {
        id: "animations-creative",
        title: "Animations & Creative Design",
        desc: "We create engaging animations and visuals that bring your brand to life and capture attention.",
        icon: PlayCircle,
        color: "from-red-500/10 to-transparent",
        accent: "#EF4444"
    },
]

export function WhatWeDo() {
    return (
        <section className="relative bg-[#0E0F13] overflow-hidden py-20 md:py-32">
            {/* Background Ornaments - "Shattered" Light */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            <div className="container mx-auto relative z-10 px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
                    <div className="space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                            <span className="text-primary text-[11px] font-black uppercase tracking-[0.6em]">Capabilities</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-sans font-bold tracking-tighter leading-[0.85] text-white uppercase"
                        >
                            Our <span className="text-primary italic">Expertise</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white/30 text-lg md:text-xl font-medium max-w-sm leading-relaxed"
                    >
                        Blending classic precision with modern digital technology to build your brand&apos;s future.
                    </motion.p>
                </div>

                {/* Scattered / Staggered Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
                    {capabilities.map((item, index) => {
                        const Icon = item.icon
                        // Create a "Scattered" effect by shifting cards based on index
                        const isEven = index % 2 === 0
                        const isPrimary = index % 3 === 0

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                viewport={{ once: true }}
                                className={`group relative flex flex-col p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-primary/40 hover:-translate-y-4 ${isEven ? "md:translate-y-12" : "md:-translate-y-1"
                                    }`}
                            >
                                {/* Glass "Shatter" Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                                {/* Card Header */}
                                <div className="flex justify-between items-start mb-8 md:mb-12 relative z-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/5 transition-all group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 shadow-2xl">
                                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white/40 group-hover:text-primary transition-colors duration-500" />
                                    </div>
                                    <span className="text-[9px] md:text-[10px] font-black text-white/5 uppercase tracking-[0.4em] group-hover:text-primary/20 transition-colors">
                                        Expl. 0{index + 1}
                                    </span>
                                </div>

                                {/* Card Body */}
                                <div className="flex-1 space-y-4 md:space-y-6 relative z-10">
                                    <h3 className="text-xl md:text-3xl font-sans font-bold text-white uppercase tracking-tight leading-tight transition-all duration-500 group-hover:text-primary">
                                        {item.title.split(' & ').length > 1 ? (
                                            <>
                                                {item.title.split(' & ')[0]} <br className="hidden md:block" />
                                                <span className="text-primary italic group-hover:text-white">&</span> {item.title.split(' & ')[1]}
                                            </>
                                        ) : item.title}
                                    </h3>
                                    <p className="text-xs md:text-base text-white/30 font-medium leading-relaxed group-hover:text-white/60 transition-colors duration-500 max-w-[240px]">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Classic Navigation Link */}
                                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 relative z-10">
                                    <Link
                                        href={`/services/${item.id}`}
                                        className="inline-flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/40 hover:text-primary transition-all group/btn"
                                    >
                                        Learn More
                                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
                                            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </div>

                                {/* Floating Particle Decoration */}
                                <div className="absolute top-4 right-4 w-1 h-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-8 right-12 w-2 h-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[3]" />
                            </motion.div>
                        )
                    })}
                </div>

                {/* Final Footer Accent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex gap-8 md:gap-12">
                        <div className="space-y-2">
                            <div className="text-[9px] md:text-[10px] font-black tracking-widest text-primary uppercase">Innovation</div>
                            <div className="text-xl md:text-2xl font-sans font-bold text-white">Modern Tech</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[9px] md:text-[10px] font-black tracking-widest text-primary uppercase">Heritage</div>
                            <div className="text-xl md:text-2xl font-sans font-bold text-white">Classic Style</div>
                        </div>
                    </div>
                    <Link
                        href="/services"
                        className="px-8 md:px-12 py-4 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white hover:bg-primary transition-all duration-500 hover:border-primary shadow-2xl w-full md:w-auto text-center"
                    >
                        View Full Catalog
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
