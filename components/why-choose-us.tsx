"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Zap, Award, Star } from "lucide-react"

const reasons = [
    {
        title: "Expertise",
        desc: "Over 5+ years of delivering high-end digital products across various industries.",
        icon: Award,
    },
    {
        title: "Quality",
        desc: "Meticulous attention to detail in design and pixel-perfect implementation.",
        icon: Star,
    },
    {
        title: "Performance",
        desc: "Blazing fast loading speeds and optimized code for the best user experience.",
        icon: Zap,
    },
    {
        title: "Reliability",
        desc: "Scalable architecture and ongoing support to ensure your product grows with you.",
        icon: ShieldCheck,
    }
]

export function WhyChooseUs() {
    return (
        <section className="section-spacing relative bg-transparent overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-condensed font-bold text-white uppercase tracking-tight"
                    >
                        The <span className="text-primary italic">Lumora</span> Edge
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon
                        return (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="space-y-2 sm:space-y-4">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary/60 group-hover:text-primary transition-colors" />
                                    <h3 className="text-sm sm:text-2xl font-bold text-white uppercase tracking-tight font-condensed group-hover:text-primary transition-colors duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]">
                                        {reason.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-sm text-white/30 font-medium leading-tight sm:leading-relaxed group-hover:text-white/50 transition-colors line-clamp-3 sm:line-clamp-none">
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
