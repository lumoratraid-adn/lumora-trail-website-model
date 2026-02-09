"use client"

import { motion } from "framer-motion"
import { Layout, Globe2, Search, PlayCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const capabilities = [
    {
        id: "website-web-app-development",
        title: "Web & Software Development",
        desc: "Engineering high-performance web applications and custom software solutions designed for global scale.",
        icon: Globe2,
    },
    {
        id: "ui-ux-design",
        title: "UI / UX Design & Figma",
        desc: "Precision-crafted user interfaces and seamless experiences that redefine digital interaction.",
        icon: Layout,
    },
    {
        id: "seo-online-growth",
        title: "Digital Marketing & SEO",
        desc: "High-impact growth strategies and search engine dominance to establish your brand authority.",
        icon: Search,
    },
    {
        id: "animations-creative",
        title: "Animations & Creative Design",
        desc: "Dynamic motion graphics and creative storytelling that bring your brand to life and capture attention.",
        icon: PlayCircle,
    },
]

export function ExpertiseSection() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32 bg-transparent">
            {/* Background Ornaments */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[130px] rounded-full opacity-60" />
                <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-violet-500/10 blur-[150px] rounded-full opacity-50" />
            </div>

            <div className="container mx-auto relative z-10 px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-12">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                className={`group relative flex flex-col p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-primary/40 hover:-translate-y-4 ${isEven ? "lg:translate-y-12" : ""
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-14">
                                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/5 transition-all group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40">
                                            <Icon className="w-8 h-8 text-white/40 group-hover:text-primary transition-colors duration-500" />
                                        </div>
                                        <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.4em] group-hover:text-primary/20 transition-colors">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <div className="flex-1 space-y-6">
                                        <h3 className="text-2xl md:text-3xl font-sans font-bold text-white uppercase tracking-tight leading-tight transition-all duration-500 group-hover:text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-white/30 font-medium leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/5">
                                        <Link
                                            href={`/services/${item.id}`}
                                            prefetch={true}
                                            className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-primary transition-all group/btn"
                                        >
                                            <span className="relative">
                                                Read More
                                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover/btn:w-full" />
                                            </span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:scale-110">
                                                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" />
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
