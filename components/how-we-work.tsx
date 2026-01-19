"use client"

import { motion } from "framer-motion"
import { MessageCircle, Hammer, Rocket } from "lucide-react"

const processSteps = [
    {
        number: "01",
        title: "Connect",
        description:
            "We understand your goals, business needs, target audience, and technical requirements through clear discussions.",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Build",
        description:
            "Our team designs, develops, and tests scalable digital solutions using modern tools, clean code, and best practices.",
        icon: Hammer,
    },
    {
        number: "03",
        title: "Deliver",
        description:
            "We launch, support, and continuously improve your product — ensuring performance, reliability, and long-term value.",
        icon: Rocket,
    },
]

export function HowWeWork() {
    return (
        <section className="section-spacing relative bg-transparent overflow-hidden">
            <div className="container mx-auto">

                {/* Section Header */}
                <div className="mb-12 text-center space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase border border-white/5 backdrop-blur-sm mx-auto">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        OUR PROCESS
                    </span>
                    <h2 className="text-6xl md:text-8xl font-condensed font-bold text-white uppercase tracking-tight leading-[0.9]">
                        FROM <span className="text-primary italic">VISION</span><br />
                        <span className="text-white/10 stroke-text">TO REALITY.</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-xl text-white/50 font-medium leading-relaxed">
                        Our streamlined three-step phase ensures your project moves from
                        concept to deployment with precision and speed.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative z-10 space-y-10 group text-center lg:text-left"
                            >
                                <div className="w-20 h-20 mx-auto lg:mx-0 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-2xl relative">
                                    <Icon className="w-10 h-10 text-white group-hover:text-black transition-transform group-hover:scale-110" />
                                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs ring-4 ring-background">
                                        {step.number}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-4xl font-condensed font-bold tracking-tight text-white group-hover:text-primary transition-colors uppercase">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/40 leading-relaxed font-medium text-lg">
                                        {step.description}
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
