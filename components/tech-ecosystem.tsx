"use client"

import { motion } from "framer-motion"
import {
    Cpu,
    Layout,
    Server,
    Terminal,
    Sparkles,
    Zap
} from "lucide-react"

const techStack = [
    {
        category: "AI & Innovation",
        icon: Cpu,
        description: "Integrating intelligence into digital experiences. We leverage the power of artificial intelligence to create adaptive systems that learn and evolve.",
    },
    {
        category: "Frontend Engineering",
        icon: Layout,
        description: "Crafting premium user interfaces and experiences. We focus on fluid animations, responsive layouts, and pixel-perfect design implementation.",
    },
    {
        category: "Backend & Systems",
        icon: Server,
        description: "Architecting scalable and secure server-side logic. Our systems are built for high availability, data integrity, and lightning-fast performance.",
    },
    {
        category: "DevOps & Logic",
        icon: Terminal,
        description: "Streamlining deployment and application flow. We ensure your digital infrastructure is robust, automated, and ready for global scale.",
    }
]

export function TechEcosystem() {
    return (
        <section className="section-spacing relative bg-[#050505] overflow-hidden border-t border-white/5">
            {/* Background Architectural Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="mb-10 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase border border-white/5">
                                <Sparkles className="w-3 h-3 text-primary" />
                                OUR TECHNOLOGY STACK
                            </span>
                        </motion.div>

                        <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black tracking-tighter text-white uppercase leading-[0.9]">
                            THE TOOLS OF<br />
                            <span className="text-primary italic">DIGITAL REALITY.</span>
                        </h2>
                        <p className="max-w-2xl text-lg text-white/60 font-medium">
                            We leverage an elite stack of modern technologies to build high-performance,
                            scalable, and future-ready digital solutions.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techStack.map((stack, idx) => {
                            const Icon = stack.icon
                            return (
                                <motion.div
                                    key={stack.category}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:border-primary/40 transition-all duration-500 hover:bg-white/[0.04]"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-black text-white uppercase mb-2 tracking-tight">
                                        {stack.category}
                                    </h3>
                                    <p className="text-sm text-white/40 font-bold italic leading-snug">
                                        {stack.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Bottom Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 md:mt-12 p-1 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/[0.03]"
                    >
                        <div className="bg-[#0a0a0a] rounded-[1.8rem] md:rounded-[2.8rem] px-6 md:px-8 py-8 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 border border-white/5">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-white uppercase tracking-tight">Need a custom stack?</h4>
                                    <p className="text-white/60 font-medium">We architect tailored solutions based on your unique business goals.</p>
                                </div>
                            </div>
                            <button className="px-10 py-5 bg-primary text-black rounded-2xl font-black uppercase text-sm tracking-widest hover:scale-105 transition-all active:scale-95 shadow-xl shadow-primary/10">
                                Discuss Project Architecture
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
