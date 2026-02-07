"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Zap, Award, Star } from "lucide-react"

const reasons = [
    {
        title: "Expertise",
        desc: "We are known for our highly skilled developers delivering high-end digital products with precision.",
        icon: Award,
        label: "01"
    },
    {
        title: "Quality",
        desc: "Meticulous attention to detail in design and pixel-perfect implementation for your brand.",
        icon: Star,
        label: "02"
    },
    {
        title: "Performance",
        desc: "Blazing fast loading speeds and optimized code for the best user experience globally.",
        icon: Zap,
        label: "03"
    },
    {
        title: "Reliability",
        desc: "Scalable architecture and ongoing support to ensure your product grows with you safely.",
        icon: ShieldCheck,
        label: "04"
    }
]

export function WhyChooseUs() {
    return (
        <section className="section-spacing relative bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center space-y-3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-4"
                    >
                        <span className="w-6 h-[1.5px] bg-primary rounded-full" />
                        <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">The Edge</span>
                        <span className="w-6 h-[1.5px] bg-primary rounded-full" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-sans font-bold tracking-tight leading-none text-white uppercase"
                    >
                        The <span className="text-primary italic">Lumora</span> Edge
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon
                        return (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 md:p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-primary/30 transition-all duration-700 flex flex-col items-start min-h-[320px] relative overflow-hidden active:scale-[0.98]"
                            >
                                {/* Decorative Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                                    <div className="flex items-center justify-between w-full mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 transition-all group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-110">
                                            <Icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
                                        </div>
                                        <span className="text-[9px] font-black tracking-[0.3em] text-white/10 group-hover:text-primary/20 transition-colors uppercase">
                                            {reason.label}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-sans font-bold tracking-tight text-white uppercase group-hover:text-primary transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <div className="w-8 h-[1.5px] bg-primary/20 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
                                        <p className="text-[14px] text-white/30 font-medium leading-relaxed group-hover:text-white/50 transition-colors max-w-[200px]">
                                            {reason.desc}
                                        </p>
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
