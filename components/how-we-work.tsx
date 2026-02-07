"use client"

import { useState, useEffect } from "react"
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
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = (index: number) => {
        // Loop back to first step if the last step is reached
        if (index === processSteps.length - 1) {
            setActiveStep(0)
        } else if (index === activeStep) {
            setActiveStep(activeStep + 1)
        }
    }

    const isStepLit = (index: number) => {
        return activeStep >= index
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

                {/* Mobile Swiper View */}
                <div className="lg:hidden relative">
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full"
                            >
                                {(() => {
                                    const step = processSteps[activeStep]
                                    const Icon = step.icon
                                    const isLit = true

                                    return (
                                        <div
                                            className={`group relative p-8 md:p-12 transition-all duration-700 overflow-hidden flex flex-col items-center justify-center text-center rounded-[2.5rem] min-h-[500px] border-primary/80 bg-primary/[0.08] shadow-[0_0_60px_rgba(139,92,246,0.25)] opacity-100 border`}
                                        >
                                            {/* Glow Effect Behind Card */}
                                            <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-primary/20 blur-[100px] opacity-100`} />

                                            {/* Large Index Number Background */}
                                            <div className={`absolute top-10 right-10 text-[5rem] md:text-[8rem] font-sans font-black leading-none select-none text-primary/10 pointer-events-none`}>
                                                {step.number}
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center h-full">
                                                {/* Icon Container */}
                                                <div
                                                    className={`w-20 h-20 rounded-[1.8rem] border flex items-center justify-center mb-12 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] bg-primary border-primary shadow-[0_0_30px_rgba(139,92,246,0.4)] scale-110`}>
                                                    <Icon className={`w-9 h-9 text-white`} strokeWidth={1.5} />
                                                </div>

                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border text-white bg-primary border-primary`}>
                                                            Step {step.number}
                                                        </span>
                                                    </div>
                                                    <h3 className={`text-2xl md:text-3xl font-sans font-bold tracking-[-0.04em] text-primary uppercase leading-[0.9]`}>
                                                        {step.title}
                                                    </h3>
                                                    <p className={`leading-relaxed font-medium text-xs md:text-sm text-white duration-500 max-w-[280px]`}>
                                                        {step.description}
                                                    </p>
                                                </div>

                                                {/* Navigation Arrow */}
                                                <div className="mt-auto pt-10 flex w-full justify-center">
                                                    <motion.button
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => handleNext(activeStep)}
                                                        className="w-12 h-12 rounded-full border bg-primary border-primary flex items-center justify-center text-xl text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
                                                    >
                                                        →
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })()}
                            </motion.div>
                        </AnimatePresence>
                    </div>


                </div>

                {/* Desktop Grid View */}
                <div className="hidden lg:grid grid-cols-3 gap-8 md:gap-12 items-stretch">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon
                        const isLit = isStepLit(index)

                        return (
                            <motion.div
                                key={step.number}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    opacity: { duration: 0.7, delay: index * 0.2 },
                                    y: { duration: 0.7, delay: index * 0.2 },
                                    layout: { duration: 0.8, ease: "circInOut" }
                                }}
                                viewport={{ once: true }}
                                onClick={() => handleNext(index)}
                                className={`group relative p-8 md:p-12 transition-all duration-700 cursor-pointer overflow-hidden flex flex-col items-center justify-center text-center rounded-[2.5rem] md:rounded-[3.5rem] lg:min-h-[600px] ${isLit
                                    ? "border-primary/80 bg-primary/[0.08] shadow-[0_0_60px_rgba(139,92,246,0.25)] opacity-100 border"
                                    : "border-white/5 opacity-40 hover:opacity-100 hover:border-primary/40 hover:bg-primary/[0.03] border"
                                    }`}
                            >
                                {/* Glow Effect Behind Card */}
                                <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-primary/20 blur-[100px] transition-opacity duration-1000 ${isLit ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`} />

                                {/* Large Index Number Background */}
                                <div className={`absolute top-10 right-10 text-[5rem] md:text-[8rem] font-sans font-black leading-none select-none transition-colors duration-700 pointer-events-none ${isLit ? "text-primary/10" : "text-white/[0.02] group-hover:text-primary/[0.05]"
                                    }`}>
                                    {step.number}
                                </div>

                                <div className="relative z-10 flex flex-col items-center h-full">
                                    {/* Icon Container - Make it a button area for the first step */}
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNext(index);
                                        }}
                                        className={`w-20 h-20 rounded-[1.8rem] border flex items-center justify-center mb-12 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ${isLit
                                            ? "bg-primary border-primary shadow-[0_0_30px_rgba(139,92,246,0.4)] scale-110"
                                            : "bg-white/[0.05] border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40"
                                            }`}>
                                        <Icon className={`w-9 h-9 transition-colors ${isLit ? "text-white" : "text-white/40 group-hover:text-primary"
                                            }`} strokeWidth={1.5} />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 justify-center">
                                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border transition-colors ${isLit
                                                ? "text-white bg-primary border-primary"
                                                : "text-primary bg-primary/10 border-primary/20"
                                                }`}>
                                                Step {step.number}
                                            </span>
                                        </div>
                                        <h3 className={`text-2xl md:text-3xl font-sans font-bold tracking-[-0.04em] transition-colors uppercase leading-[0.9] ${isLit ? "text-primary" : "text-white group-hover:text-primary"
                                            }`}>
                                            {step.title}
                                        </h3>
                                        <p className={`leading-relaxed font-medium text-xs md:text-sm transition-colors duration-500 max-w-[280px] ${isLit ? "text-white" : "text-white/30 group-hover:text-white/60"
                                            }`}>
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Link Decorator - Action button for progression */}
                                    <div className="mt-auto pt-10 flex w-full justify-center">
                                        <AnimatePresence>
                                            {isLit && (
                                                <motion.button
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1.1 }}
                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleNext(index);
                                                    }}
                                                    className="w-12 h-12 rounded-full border bg-primary border-primary flex items-center justify-center text-xl text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
                                                >
                                                    →
                                                </motion.button>
                                            )}
                                        </AnimatePresence>
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
