"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Hammer, Rocket } from "lucide-react"

const processSteps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We dive deep into your goals, business landscape, and user needs to create a strategic roadmap for success.",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Design & Build",
        description:
            "Our experts craft intuitive interfaces and engineer scalable software using modern tools and clean code.",
        icon: Hammer,
    },
    {
        number: "03",
        title: "Deliver",
        description:
            "We launch, optimize, and provide ongoing support — ensuring your digital product achieves lasting impact and value.",
        icon: Rocket,
    },
]

export function HowWeWork() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % processSteps.length)
    }

    return (
        <section className="section-spacing relative overflow-hidden bg-transparent">
            {/* Website Background Aura Style */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center space-y-8"
                >
                    <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase mb-6 inline-block">
                        Our Workflow
                    </span>
                    <h2 className="text-4xl sm:text-[10vw] md:text-[6vw] font-sans font-semibold text-white uppercase tracking-[-0.08em] leading-[1] md:leading-[0.85] drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        FROM VISION<br />
                        <span className="text-primary italic">TO REALITY.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-[10px] md:text-sm text-white/30 font-bold tracking-[0.2em] uppercase px-4">
                        A systematic approach to engineering high-performance digital solutions.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon
                        const isActive = activeIndex === index
                        return (
                            <motion.div
                                key={step.number}
                                onClick={handleNext}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`group relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.02] backdrop-blur-3xl border transition-all duration-700 cursor-pointer overflow-hidden ${isActive
                                    ? "border-primary/60 bg-primary/[0.05] shadow-[0_0_50px_rgba(139,92,246,0.2)]"
                                    : "border-white/5 hover:border-primary/40 hover:bg-primary/[0.03]"
                                    }`}
                            >
                                {/* Glow Effect Behind Card */}
                                <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-primary/20 blur-[100px] transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`} />

                                {/* Large Index Number Background */}
                                <div className={`absolute top-10 right-10 text-[5rem] md:text-[8rem] font-sans font-black leading-none select-none transition-colors duration-700 pointer-events-none ${isActive ? "text-primary/10" : "text-white/[0.02] group-hover:text-primary/[0.05]"
                                    }`}>
                                    {step.number}
                                </div>

                                <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left h-full">
                                    {/* Icon Container */}
                                    <div className={`w-20 h-20 rounded-[1.8rem] border flex items-center justify-center mb-12 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ${isActive
                                        ? "bg-primary border-primary shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                                        : "bg-white/[0.05] border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40"
                                        }`}>
                                        <Icon className={`w-9 h-9 transition-colors ${isActive ? "text-white" : "text-white/40 group-hover:text-primary"
                                            }`} strokeWidth={1.5} />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border transition-colors ${isActive
                                                ? "text-white bg-primary border-primary"
                                                : "text-primary bg-primary/10 border-primary/20"
                                                }`}>
                                                Step {step.number}
                                            </span>
                                        </div>
                                        <h3 className={`text-3xl md:text-4xl font-sans font-bold tracking-[-0.04em] transition-colors uppercase leading-[0.9] ${isActive ? "text-primary" : "text-white group-hover:text-primary"
                                            }`}>
                                            {step.title}
                                        </h3>
                                        <p className={`leading-relaxed font-medium text-base transition-colors duration-500 ${isActive ? "text-white/80" : "text-white/30 group-hover:text-white/60"
                                            }`}>
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Link Decorator */}
                                    <div className="mt-auto pt-10 flex w-full justify-center lg:justify-start">
                                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive
                                            ? "bg-primary border-primary rotate-90 scale-110"
                                            : "bg-white/5 border-white/10 group-hover:bg-primary group-hover:border-primary"
                                            }`}>
                                            <span className={`text-sm transition-opacity ${isActive ? "text-white opacity-100" : "text-white opacity-60 group-hover:opacity-100"
                                                }`}>→</span>
                                        </div>
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
