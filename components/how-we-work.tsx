"use client"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import { CheckCircle } from "lucide-react"

export function HowWeWork() {
    const steps = [
        {
            num: "01",
            title: "Discovery",
            desc: "We deep-dive into your goals, audience, and market landscape to map a winning digital strategy.",
            details: ["Brand DNA analysis", "Market & competitor research", "Goal-setting workshop"],
            color: "from-primary/30 to-primary/5",
        },
        {
            num: "02",
            title: "Architecture",
            desc: "Structural blueprints come to life — wireframes, design systems, and technical foundations are built.",
            details: ["Wireframes & prototypes", "Design system creation", "Tech stack decisions"],
            color: "from-white/15 to-primary/10",
        },
        {
            num: "03",
            title: "Build & Refine",
            desc: "Iterative engineering with continuous feedback loops — pixel-perfect design meets clean code.",
            details: ["Sprint-based development", "Design QA & testing", "Performance optimization"],
            color: "from-primary/25 to-white/5",
        },
        {
            num: "04",
            title: "Launch",
            desc: "Production deployment with full integrity checks — and ongoing support to keep you at the peak.",
            details: ["Production deployment", "SEO & speed audit", "Post-launch monitoring"],
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
                <AnimatedText className="flex flex-col lg:flex-row items-start gap-12 mb-24">
                    <div className="space-y-6 flex-1">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-primary/50" />
                            <span className="text-[9px] font-michroma tracking-[0.55em] text-primary uppercase">Mechanism</span>
                        </div>
                        <h2 className="text-[clamp(3rem,10vw,9rem)] font-michroma font-normal tracking-tight text-white uppercase leading-[0.85]">
                            Our <span className="font-serif italic text-primary lowercase tracking-tighter">Process.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-xs lg:pt-8 space-y-4">
                        <p className="text-xl text-white/40 italic font-medium leading-relaxed">
                            A disciplined synthesis of structural engineering and creative vision.
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

                            <div className="relative h-full p-7 md:p-8 rounded-[2rem] border border-white/[0.07] bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-600 overflow-hidden flex flex-col gap-8">
                                {/* BG gradient on hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 bg-gradient-to-br ${step.color}`} />

                                <div className="relative z-10 space-y-5">
                                    {/* Number badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-5xl font-michroma text-white/[0.06] group-hover:text-white/[0.12] transition-colors duration-500">
                                            {step.num}
                                        </span>
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-500" />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl md:text-3xl font-michroma text-white uppercase tracking-[0.06em] group-hover:text-primary transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-white/35 font-medium leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Detail checklist */}
                                <div className="relative z-10 space-y-2.5 pt-6 border-t border-white/[0.05] mt-auto">
                                    {step.details.map((d, j) => (
                                        <div key={j} className="flex items-center gap-3">
                                            <CheckCircle className="w-3.5 h-3.5 text-primary/40 group-hover:text-primary transition-colors duration-500 shrink-0" />
                                            <span className="text-[10px] font-michroma uppercase tracking-[0.2em] text-white/25 group-hover:text-white/50 transition-colors duration-500">
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
