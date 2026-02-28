"use client"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import { CheckCircle } from "lucide-react"

export function HowWeWork() {
    const steps = [
        {
            num: "01",
            title: "Discovery",
            desc: "WE DEEP-DIVE INTO YOUR GOALS, AUDIENCE, AND MARKET LANDSCAPE TO MAP A WINNING DIGITAL STRATEGY.",
            details: ["BRAND DNA ANALYSIS", "MARKET & COMPETITOR RESEARCH", "GOAL-SETTING WORKSHOP"],
            color: "from-primary/30 to-primary/5",
        },
        {
            num: "02",
            title: "Architecture",
            desc: "STRUCTURAL BLUEPRINTS COME TO LIFE — WIREFRAMES, DESIGN SYSTEMS, AND TECHNICAL FOUNDATIONS ARE BUILT.",
            details: ["WIREFRAMES & PROTOTYPES", "DESIGN SYSTEM CREATION", "TECH STACK DECISIONS"],
            color: "from-white/15 to-primary/10",
        },
        {
            num: "03",
            title: "Build & Refine",
            desc: "ITERATIVE ENGINEERING WITH CONTINUOUS FEEDBACK LOOPS — PIXEL-PERFECT DESIGN MEETS CLEAN CODE.",
            details: ["SPRINT-BASED DEVELOPMENT", "DESIGN QA & TESTING", "PERFORMANCE OPTIMIZATION"],
            color: "from-primary/25 to-white/5",
        },
        {
            num: "04",
            title: "Launch",
            desc: "PRODUCTION DEPLOYMENT WITH FULL INTEGRITY CHECKS — AND ONGOING SUPPORT TO KEEP YOU AT THE PEAK.",
            details: ["PRODUCTION DEPLOYMENT", "SEO & SPEED AUDIT", "POST-LAUNCH MONITORING"],
            color: "from-white/10 to-primary/15",
        },
    ]

    return (
        <section className="py-16 md:py-32 bg-background relative overflow-hidden border-t border-white/5">

            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[180px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <AnimatedText className="flex flex-col lg:flex-row items-start gap-10 md:gap-12 mb-16 md:mb-24 px-2">
                    <div className="space-y-6 flex-1">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-primary/40" />
                            <span className="text-[9px] font-michroma tracking-[0.55em] text-primary uppercase">Mechanism</span>
                        </div>
                        <h2 className="text-[12vw] sm:text-[10vw] md:text-7xl font-michroma font-normal tracking-tight text-white uppercase leading-[0.85]">
                            OUR <span className="text-primary uppercase tracking-tighter">PROCESS.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-xs lg:pt-8 space-y-4">
                        <p className="text-lg md:text-xl text-white/40 font-bold leading-relaxed uppercase">
                            A DISCIPLINED SYNTHESIS OF STRUCTURAL ENGINEERING AND CREATIVE VISION.
                        </p>
                    </div>
                </AnimatedText>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, i) => (
                        <AnimatedSection delay={i * 0.12} key={i} className="group relative">
                            {/* Connector line (desktop) */}
                            {i < steps.length - 1 && (
                                <div className="hidden xl:block absolute top-10 left-full w-8 h-px bg-gradient-to-r from-white/15 to-transparent z-10" />
                            )}

                            <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] border border-white/[0.05] bg-white/[0.01] hover:border-primary/30 hover:bg-white/[0.02] transition-all duration-700 overflow-hidden flex flex-col gap-8 shadow-2xl backdrop-blur-3xl">
                                {/* BG gradient on hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${step.color}`} />

                                <div className="relative z-10 space-y-6">
                                    {/* Number badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-4xl md:text-5xl font-michroma text-white/[0.05] group-hover:text-primary transition-colors duration-500">
                                            {step.num}
                                        </span>
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(74,222,128,0.3)]" />
                                    </div>

                                    <div className="space-y-4 md:space-y-6">
                                        <h3 className="text-2xl md:text-3xl font-michroma text-white/80 uppercase tracking-[0.05em] group-hover:text-white transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                        <p className="text-[10px] md:text-xs text-white/20 font-michroma uppercase leading-relaxed group-hover:text-white/40 transition-colors duration-500 max-w-[240px]">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Detail checklist */}
                                <div className="relative z-10 space-y-3 pt-8 border-t border-white/[0.05] mt-auto">
                                    {step.details.map((d, j) => (
                                        <div key={j} className="flex items-center gap-3">
                                            <div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-500" />
                                            <span className="text-[8px] md:text-[9px] font-michroma uppercase tracking-[0.3em] text-white/10 group-hover:text-white/40 transition-colors duration-500">
                                                {d}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Bottom tagline */}
                <div className="mt-20 pt-12 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-[9px] font-michroma tracking-[0.6em] text-white/15 uppercase">
                        Lumora Triad • Process Architecture
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[9px] font-michroma tracking-[0.3em] text-primary/60 uppercase">Active Projects</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
