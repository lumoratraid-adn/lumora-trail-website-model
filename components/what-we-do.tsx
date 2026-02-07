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
    },
    {
        id: "ui-ux-design",
        title: "UI / UX Design & Figma Projects",
        desc: "We design clean, user-friendly interfaces and smooth experiences that make your digital products easy to use.",
        icon: Layout,
    },
    {
        id: "branding-logo-digital-marketing",
        title: "Branding, Logo, Poster & Digital Marketing",
        desc: "We create strong brand identities and marketing designs that help your business stand out and build trust.",
        icon: Layers,
    },
    {
        id: "seo-online-growth",
        title: "SEO & Online Growth",
        desc: "We improve your website’s visibility on Google and help you reach the right audience organically.",
        icon: Search,
    },
    {
        id: "website-redesign-maintenance",
        title: "Website Redesign & Maintenance",
        desc: "We upgrade outdated websites and keep them running smoothly, securely, and efficiently.",
        icon: RefreshCw,
    },
    {
        id: "landing-pages-lead-generation",
        title: "Landing Pages & Lead Generation",
        desc: "We design focused pages that turn visitors into leads and customers.",
        icon: Target,
    },
    {
        id: "animations-creative",
        title: "Animations & Creative Design",
        desc: "We create engaging animations and visuals that bring your brand to life and capture attention.",
        icon: PlayCircle,
    },
]

export function WhatWeDo() {
    return (
        <section className="relative bg-transparent overflow-hidden py-12 md:py-16">
            {/* Global Background Integration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
            {/* Background Ornaments - "Shattered" Light & Animated Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                {/* Animated Floating Orbs - Increased visibility */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[130px] rounded-full opacity-60"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-violet-500/10 blur-[150px] rounded-full opacity-50"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_100%)]"
                />
            </div>

            <div className="container mx-auto relative z-10 px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-8">
                    <div className="space-y-6 max-w-2xl text-left">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                    {capabilities.map((item, index) => {
                        const Icon = item.icon
                        const isEven = index % 2 === 0

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                viewport={{ once: true }}
                                className={`group relative flex flex-col p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-700 hover:bg-black hover:border-primary/40 hover:-translate-y-2 ${isEven ? "lg:translate-y-8" : ""
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 transition-all group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40">
                                            <Icon className="w-6 h-6 text-white/40 group-hover:text-primary transition-colors duration-500" />
                                        </div>
                                        <span className="text-[10px] font-black text-white/5 uppercase tracking-[0.4em] group-hover:text-primary/10 transition-colors">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <h3 className="text-lg md:text-xl font-sans font-bold text-white uppercase tracking-tight leading-tight transition-all duration-500 group-hover:text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-white/30 font-medium leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/5">
                                        <Link
                                            href={`/services/${item.id}`}
                                            prefetch={true}
                                            className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-primary transition-all group/btn"
                                        >
                                            Learn More
                                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:scale-110">
                                                <ArrowRight className="w-3 h-3 text-white transition-transform group-hover/btn:translate-x-1" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
