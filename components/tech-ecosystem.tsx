"use client"

import { motion } from "framer-motion"
import {
    Cpu,
    Code2,
    Layers,
    ShieldCheck,
    Zap,
    Terminal,
    Globe2,
    Sparkles
} from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const technologies = [
    {
        name: "React / Next.js",
        icon: Code2,
        category: "Frontend",
        desc: "Core engine for lightning-fast, SEO-optimized web experiences.",
        glow: "shadow-primary/20"
    },
    {
        name: "Node.js / Python",
        icon: Terminal,
        category: "Backend",
        desc: "Scalable server environments handling complex business logic.",
        glow: "shadow-blue-500/10"
    },
    {
        name: "Figma",
        icon: Layers,
        category: "Design",
        desc: "Pixel-perfect visual systems and interactive prototypes.",
        glow: "shadow-purple-500/10"
    },
    {
        name: "PostgreSQL",
        icon: Globe2,
        category: "Data",
        desc: "Robust, ACID-compliant database architecture for data integrity.",
        glow: "shadow-emerald-500/10"
    },
    {
        name: "AI / LLMs",
        icon: Cpu,
        category: "Innovation",
        desc: "Integrating intelligent features and automated workflows.",
        glow: "shadow-amber-500/10"
    },
    {
        name: "Vercel / AWS",
        icon: ShieldCheck,
        category: "Cloud",
        desc: "Enterprise-grade hosting with global edge delivery.",
        glow: "shadow-sky-500/10"
    }
]

export function TechEcosystem() {
    return (
        <section className="py-24 md:py-36 bg-background relative overflow-hidden border-t border-white/[0.05]">

            {/* Background Architecture */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/[0.03] blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-20">
                    <AnimatedText className="max-w-3xl space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-primary/50" />
                            <span className="text-[9px] font-michroma tracking-[0.55em] text-primary uppercase">Modern Stack</span>
                        </div>
                        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-michroma text-white uppercase leading-[0.9] tracking-tight">
                            The Tools of <br />
                            <span className="font-serif italic text-primary lowercase tracking-tighter">Digital Reality.</span>
                        </h2>
                    </AnimatedText>

                    <AnimatedSection delay={0.2} className="lg:max-w-md">
                        <p className="text-xl text-white/35 font-medium leading-relaxed italic">
                            We don't just use tools; we architect ecosystems that combine performance, scalability, and pure aesthetic.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, i) => (
                        <AnimatedSection
                            key={tech.name}
                            delay={i * 0.08}
                            className="group relative"
                        >
                            <div className="p-8 rounded-[2.5rem] border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col items-start gap-8">
                                {/* Icon Header */}
                                <div className="flex items-center justify-between w-full">
                                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                                        <tech.icon className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors duration-500" />
                                    </div>
                                    <span className="text-[7px] font-michroma uppercase tracking-[0.3em] text-white/10 group-hover:text-primary/40 transition-colors">
                                        {tech.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-michroma uppercase text-white group-hover:text-primary transition-colors">
                                        {tech.name}
                                    </h3>
                                    <p className="text-sm text-white/30 font-medium leading-relaxed group-hover:text-white/50 transition-colors">
                                        {tech.desc}
                                    </p>
                                </div>

                                {/* Visual line */}
                                <div className="mt-auto w-full pt-6 border-t border-white/[0.04]">
                                    <div className="h-px w-0 bg-primary/40 group-hover:w-full transition-all duration-700" />
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Bottom Trust Line */}
                <div className="mt-20 pt-10 border-t border-white/[0.05] flex flex-wrap justify-center gap-x-12 gap-y-6">
                    {["Lightning Fast", "SEO Optimzied", "Mobile First", "Secure by Design"].map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                            <Zap className="w-3.5 h-3.5 text-primary/40" />
                            <span className="text-[9px] font-michroma uppercase tracking-[0.4em] text-white/20">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
