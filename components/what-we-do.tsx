"use client"

import { motion } from "framer-motion"
import { Layout, Globe2, Layers, Smartphone, PlayCircle, UserCircle } from "lucide-react"

const capabilities = [
    {
        title: "UI / UX Design",
        desc: "We create intuitive, user-centric interfaces that balance aesthetic beauty with functional clarity.",
        icon: Layout,
        color: "bg-violet-500/20",
    },
    {
        title: "Web & Software Development",
        desc: "We engineer high-performance web applications and custom software solutions using cutting-edge technologies.",
        icon: Globe2,
        color: "bg-indigo-500/20",
    },
    {
        title: "Brand Identity",
        desc: "Crafting memorable brand stories through strategic visual identities and logo design.",
        icon: Layers,
        color: "bg-cyan-500/20",
    },
    {
        title: "Mobile Solutions",
        desc: "Building seamless cross-platform mobile experiences for iOS and Android.",
        icon: Smartphone,
        color: "bg-rose-500/20",
    },
    {
        title: "Motion Design",
        desc: "Bringing brands to life with high-impact animations and motion graphics.",
        icon: PlayCircle,
        color: "bg-amber-500/20",
    },
    {
        title: "Personal Branding",
        desc: "Defining and elevating individual professional identities in the digital space.",
        icon: UserCircle,
        color: "bg-emerald-500/20",
    },
]

export function WhatWeDo() {
    return (
        <section className="section-spacing relative bg-transparent overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="mb-12 space-y-4">
                    <h2 className="text-5xl md:text-7xl font-condensed font-bold text-white uppercase tracking-tight">
                        Our <span className="text-primary italic">Capabilities</span>
                    </h2>
                    <p className="text-white/50 text-xl font-medium max-w-2xl">
                        Comprehensive digital solutions tailored to elevate your visionary ideas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                                className="glass-card p-8 group relative flex flex-col items-start gap-6 rounded-[2rem] transition-all perspective-1000 border border-white/5 hover:border-primary/20"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-2 transition-all group-hover:scale-110 group-hover:rotate-6`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight text-white uppercase font-condensed">
                                    {item.title}
                                </h3>

                                <p className="text-white/40 text-base leading-relaxed font-medium">
                                    {item.desc}
                                </p>

                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
