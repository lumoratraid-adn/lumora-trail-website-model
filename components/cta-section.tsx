"use client"

import Link from "next/link"
import { ArrowRight, Mail, MessageSquare } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function CTASection() {
    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <AnimatedSection className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/[0.07]">

                    {/* BG layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.12] via-black to-primary/[0.06]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/8 blur-[100px] rounded-full" />

                    <div className="relative z-10 p-10 md:p-20 lg:p-32 text-center space-y-12">

                        <AnimatedText className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[9px] font-michroma tracking-[0.45em] text-primary uppercase">Ready to start?</span>
                            </div>

                            <h2 className="text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-7xl xl:text-8xl font-michroma font-normal text-white uppercase leading-[0.9] tracking-tight">
                                BUILD YOUR<br />
                                <span className="text-primary uppercase tracking-tighter">LEGACY.</span>
                            </h2>

                            <p className="max-w-[280px] md:max-w-2xl mx-auto text-sm md:text-2xl text-white/30 font-bold leading-relaxed uppercase">
                                TRANSFORMING VISIONARY CONCEPTS INTO HIGH-PERFORMANCE DIGITAL ECOSYSTEMS.
                            </p>
                        </AnimatedText>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 bg-primary text-black rounded-2xl font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl shadow-primary/30 active:scale-95"
                            >
                                START A PROJECT
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="mailto:lumoratriad@gmail.com"
                                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 border border-white/10 text-white/40 rounded-2xl font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:border-primary/50 hover:text-white backdrop-blur-sm bg-white/[0.01] transition-all active:scale-95"
                            >
                                <Mail className="w-4 h-4" />
                                EMAIL US
                            </a>
                        </div>

                        {/* Social proof strip */}
                        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 pt-6 border-t border-white/[0.06]">
                            {[
                                "50+ Projects Delivered",
                                "7 Service Domains",
                                "Response within 24h",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5">
                                    <div className="w-1 h-1 rounded-full bg-primary/50" />
                                    <span className="text-[9px] font-michroma tracking-[0.3em] text-white/25 uppercase">{item}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
