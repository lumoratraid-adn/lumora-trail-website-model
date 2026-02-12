"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function FeaturesHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-44 pb-20">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/[0.02] rounded-full blur-[100px]" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            {/* Decorative Glyph */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02] select-none pointer-events-none overflow-hidden">
                <span className="text-[clamp(20rem,60vw,50rem)] font-serif italic leading-none text-foreground">FW</span>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <div className="space-y-12 w-full max-w-7xl">
                    <AnimatedText delay={0.2} className="flex flex-col items-center space-y-8">
                        <span className="inline-block px-8 py-2.5 bg-foreground text-background rounded-full text-[10px] font-michroma tracking-[0.4em] uppercase border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-500">
                            <Sparkles className="w-4 h-4 inline mr-2 text-primary animate-pulse" />
                            Digital Solutions
                        </span>

                        <h1 className="text-[clamp(3rem,10vw,9rem)] font-michroma leading-[0.85] tracking-tight text-foreground uppercase drop-shadow-2xl">
                            Build What <br />
                            <span className="font-serif italic text-primary lowercase tracking-tighter">Customers</span> Need<span className="text-primary animate-pulse">.</span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-base md:text-xl text-foreground/50 font-medium leading-relaxed italic px-4">
                            Delivering exactly what your audience demands through precision engineering and design.
                        </p>
                    </AnimatedText>
                </div>
            </div>

            {/* Visual Anchors */}
            <div className="absolute bottom-10 left-10 hidden xl:block">
                <div className="flex flex-col gap-2 opacity-10">
                    <div className="w-12 h-px bg-foreground" />
                    <div className="w-8 h-px bg-foreground" />
                    <div className="w-16 h-px bg-foreground" />
                </div>
            </div>
        </section>
    )
}
