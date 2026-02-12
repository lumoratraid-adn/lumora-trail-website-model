"use client"

import Link from "next/link"
import { ArrowUpRight, Zap } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function CTASection() {
    return (
        <section className="py-12 md:py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative p-6 md:p-16 rounded-[2rem] md:rounded-[4rem] bg-foreground text-background border border-foreground overflow-hidden">

                    {/* Architectural Grid */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>

                    <AnimatedText className="relative z-10 text-center space-y-16">
                        <div className="flex items-center justify-center gap-4">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Catalyst</span>
                        </div>

                        <h2 className="text-[clamp(2.5rem,10vw,10rem)] font-michroma font-normal text-background uppercase leading-[0.85] tracking-tight">
                            Build Your <br />
                            <span className="font-serif italic text-primary lowercase tracking-tighter">Legacy</span>.
                        </h2>

                        <p className="max-w-2xl mx-auto text-lg md:text-3xl text-background/40 font-medium leading-relaxed italic">
                            Transforming visionary concepts into high-performance digital ecosystems.
                        </p>

                        <div className="pt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-10 pl-12 pr-4 py-4 bg-primary text-primary-foreground rounded-[2rem] font-michroma text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl"
                            >
                                Start Project
                                <div className="w-14 h-14 rounded-full bg-background/10 flex items-center justify-center">
                                    <ArrowUpRight className="w-6 h-6 text-background" />
                                </div>
                            </Link>
                        </div>
                    </AnimatedText>
                </div>
            </div>
        </section>
    )
}
