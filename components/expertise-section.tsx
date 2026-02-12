"use client"

import { Layout, Globe2, Search, PlayCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const capabilities = [
    {
        id: "website-software-development",
        title: "Web & Software",
        desc: "Engineering high-performance web applications and custom software solutions designed for global scale.",
        icon: Globe2,
    },
    {
        id: "ui-ux-design-figma",
        title: "UI / UX Design",
        desc: "Precision-crafted user interfaces and seamless experiences that redefine digital interaction.",
        icon: Layout,
    },
    {
        id: "seo-online-growth",
        title: "SEO & Growth",
        desc: "High-impact growth strategies and search engine dominance to establish your brand authority.",
        icon: Search,
    },
    {
        id: "animations-creative-design",
        title: "Animations",
        desc: "Dynamic motion graphics and creative storytelling that capture attention and build impact.",
        icon: PlayCircle,
    },
]

export function ExpertiseSection() {
    return (
        <section className="relative overflow-hidden py-24 md:py-48 bg-transparent border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
                    <div className="space-y-8 max-w-3xl text-left">
                        <div className="flex items-center gap-4">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <span className="text-primary text-[10px] font-michroma uppercase tracking-[0.5em]">Selected Domains</span>
                        </div>
                        <h2 className="text-5xl md:text-9xl font-michroma font-normal tracking-[0.1em] leading-none text-white uppercase">
                            Our <span className="text-primary italic">Expertise</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((item) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={item.id}
                                className="group relative flex flex-col p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/40"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="relative z-10 flex flex-col h-full space-y-12">
                                    <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all duration-500">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>

                                    <div className="flex-1 space-y-6">
                                        <h3 className="text-2xl font-michroma text-white uppercase tracking-widest leading-tight transition-colors duration-500 group-hover:text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] text-white/40 font-medium leading-relaxed uppercase tracking-[0.2em] italic">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="pt-8 border-t border-white/5">
                                        <Link
                                            href={`/services/${item.id}`}
                                            className="inline-flex items-center gap-4 text-[10px] font-michroma uppercase tracking-[0.4em] text-white/60 group-hover:text-primary transition-colors"
                                        >
                                            Explore
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
