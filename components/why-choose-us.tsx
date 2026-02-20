"use client"

import { Shield, Sparkles, Target, Users, ArrowUpRight } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import Link from "next/link"

export function WhyChooseUs() {
    const reasons = [
        {
            icon: Shield,
            title: "Reliability",
            desc: "We build stable, production-grade systems designed to handle real-world demands from day one.",
        },
        {
            icon: Target,
            title: "Precision",
            desc: "Every pixel and every line of code is meticulously crafted — no shortcuts, no compromises.",
        },
        {
            icon: Sparkles,
            title: "Innovation",
            desc: "We stay ahead of market trends and bring cutting-edge solutions to every project we touch.",
        },
        {
            icon: Users,
            title: "Strategy",
            desc: "We think beyond development — aligning design, engineering, and business goals for long-term growth.",
        },
    ]

    return (
        <section className="py-16 md:py-32 bg-background relative overflow-hidden border-t border-white/[0.05]">

            {/* Background elements — consistent with site theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[180px]" />
                <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[140px]" />
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <AnimatedText className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-primary/50" />
                            <span className="text-[9px] font-michroma tracking-[0.55em] text-primary uppercase">Why Us</span>
                        </div>
                        <h2 className="text-[clamp(3rem,10vw,9rem)] font-michroma font-normal tracking-tight uppercase leading-[0.85] text-white">
                            Peak <br />
                            <span className="font-serif italic text-primary lowercase tracking-tighter">Authority.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-sm space-y-6 lg:pb-4">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/40 italic">
                            We architect the digital future through disciplined engineering and visceral design.
                        </p>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-3 text-[9px] font-michroma tracking-[0.3em] text-primary uppercase border-b border-primary/30 pb-1 hover:border-primary transition-all group"
                        >
                            Meet the Studio
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </AnimatedText>

                {/* Reason cards — dark theme consistent */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {reasons.map((reason, i) => (
                        <AnimatedSection
                            delay={i * 0.1}
                            key={i}
                            className="group relative p-8 md:p-10 rounded-[2rem] border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col gap-8"
                        >
                            {/* Corner glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.08] rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 space-y-6">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-500">
                                    <reason.icon className="w-5 h-5 text-white/30 group-hover:text-primary transition-colors duration-500" />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-michroma uppercase tracking-[0.08em] text-white group-hover:text-primary transition-colors duration-500">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm text-white/35 font-medium leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom border accent */}
                            <div className="relative z-10 mt-auto pt-6 border-t border-white/[0.05]">
                                <div className="h-[2px] w-0 bg-gradient-to-r from-primary to-primary/20 rounded-full group-hover:w-full transition-all duration-700" />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    )
}
