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

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon
                        return (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group min-h-[260px] md:min-h-[300px] p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between relative overflow-hidden active:scale-[0.98]"
                            >
                                {/* Decorative Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex justify-between items-start w-full mb-6">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 transition-all group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:scale-110">
                                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-white/20 group-hover:text-primary/40 transition-colors uppercase">
                                        {reason.label}
                                    </span>
                                </div>

                                <div className="relative z-10 space-y-3">
                                    <h3 className="text-lg md:text-xl font-sans font-bold tracking-tight text-white uppercase group-hover:text-primary transition-colors duration-300">
                                        {reason.title}
                                    </h3>
                                    <div className="w-6 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-primary/50 transition-all duration-500" />
                                    <p className="text-[11px] md:text-[13px] text-white/40 font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                                        {reason.desc}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
