"use client"

import { Shield, Sparkles, Target, Users } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function WhyChooseUs() {
    const reasons = [
        {
            icon: Shield,
            title: "Reliability",
            desc: "Architecting stable systems that withstand global scale.",
            color: "text-primary"
        },
        {
            icon: Target,
            title: "Precision",
            desc: "Every pixel and line of code is meticulously crafted.",
            color: "text-secondary"
        },
        {
            icon: Sparkles,
            title: "Innovation",
            desc: "Stay ahead of market trends.",
            color: "text-foreground"
        },
        {
            icon: Users,
            title: "Strategy",
            desc: "Thinking beyond development for long-term growth.",
            color: "text-primary"
        }
    ]

    return (
        <section className="py-12 md:py-24 bg-foreground text-background relative overflow-hidden">
            {/* Animated Background Orbs (Inverted for Dark on Light/Light on Dark contrast) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-24 items-start">
                    <AnimatedText className="lg:col-span-6 space-y-16">
                        <div className="space-y-12">
                            <span className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Why Us</span>
                            <h2 className="text-[clamp(3rem,10vw,9rem)] font-michroma font-normal tracking-tight uppercase leading-[0.85]">
                                Peak <br />
                                <span className="font-serif italic text-primary lowercase tracking-tighter">Authority</span>
                            </h2>
                            <p className="text-xl md:text-4xl font-medium leading-[1.1] max-w-xl opacity-60">
                                We architect the digital future through disciplined engineering and visceral design.
                            </p>
                        </div>
                        <div className="flex items-center gap-12">
                            <div className="w-24 h-px bg-background/20" />
                            <span className="text-[10px] font-michroma tracking-widest opacity-40 uppercase">A Digital Frontier Studio</span>
                        </div>
                    </AnimatedText>

                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-background/10 border border-background/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
                        {reasons.map((reason, i) => (
                            <AnimatedSection delay={i * 0.1} key={i} className="group p-8 md:p-12 bg-foreground hover:bg-background hover:text-foreground transition-all duration-500">
                                <div className="space-y-12">
                                    <reason.icon className={`w-12 h-12 ${reason.color} group-hover:text-primary transition-colors`} />
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-michroma tracking-widest uppercase leading-none">{reason.title}</h3>
                                        <p className="text-[11px] uppercase tracking-[0.2em] font-medium leading-relaxed opacity-40 group-hover:opacity-60 transition-opacity">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
