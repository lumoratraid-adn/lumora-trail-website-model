"use client"

import { motion } from "framer-motion"
import { Layout, Globe2, Layers, Smartphone, PlayCircle, UserCircle } from "lucide-react"

const capabilities = [
    {
        title: "Website & Software Development",
        desc: "We engineer high-performance web applications and custom software solutions designed to scale with your business.",
        icon: Globe2,
        color: "bg-indigo-500/20",
    },
    {
        title: "UI / UX Design & Figma Projects",
        desc: "Precision-crafted user interfaces and seamless experiences that transform how users interact with your digital products.",
        icon: Layout,
        color: "bg-violet-500/20",
    },
    {
        title: "Branding, Logo & Posters",
        desc: "Compelling visual identities and high-impact marketing assets that establish trust and define your brand authority.",
        icon: Layers,
        color: "bg-cyan-500/20",
    },
    {
        title: "Animations & Creative Design",
        desc: "Dynamic motion graphics and creative storytelling that bring your brand to life and capture audience attention.",
        icon: PlayCircle,
        color: "bg-rose-500/20",
    },
]

export function WhatWeDo() {
    return (
        <section className="section-spacing relative bg-transparent overflow-hidden">
            <div className="container mx-auto relative z-10 px-6">
                <div className="mb-12 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center md:justify-start gap-3"
                    >
                        <span className="w-12 h-[2px] bg-primary rounded-full hidden md:block" />
                        <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">What We Offer</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-condensed font-bold text-white uppercase tracking-tight"
                    >
                        Our <span className="text-primary italic relative px-2">
                            Expertise
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full blur-sm" />
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-white/50 text-xl font-medium max-w-2xl"
                    >
                        Comprehensive digital solutions tailored to elevate your visionary ideas and drive business growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
                    {capabilities.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-4 sm:p-8 group relative flex flex-col items-start gap-3 sm:gap-6 rounded-2xl sm:rounded-[2rem] transition-all border border-white/5 hover:border-primary/20"
                            >
                                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${item.color} flex items-center justify-center mb-1 sm:mb-2 transition-all group-hover:scale-110 group-hover:rotate-6`}>
                                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                </div>

                                <div className="space-y-2 sm:space-y-4">
                                    <h3 className="text-sm sm:text-2xl font-bold tracking-tight text-white uppercase font-condensed leading-none group-hover:text-primary transition-colors duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                                        {item.title}
                                    </h3>

                                    <p className="text-white/40 text-[10px] sm:text-lg leading-tight sm:leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl sm:rounded-[2rem]" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
