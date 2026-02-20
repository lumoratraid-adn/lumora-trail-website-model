"use client"

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import { Shield, Zap, Globe, Cpu } from "lucide-react"

const brandValues = [
    { icon: Shield, title: "Precision", desc: "Every pixel engineered with architectural discipline." },
    { icon: Zap, title: "Velocity", desc: "High-performance systems optimized for global speed." },
    { icon: Globe, title: "Scale", desc: "Infinite growth potential built into every foundation." },
    { icon: Cpu, title: "Logic", desc: "Bespoke digital logic tailored to visionary goals." },
]

export function MissionVision() {
    return (
        <section className="py-32 md:py-48 relative overflow-hidden bg-[#050505] border-t border-white/[0.05]">

            {/* AMBIENT VISUALS */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/[0.03] blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/[0.02] blur-[200px] rounded-full" />

                {/* Subtle horizontal scanning line */}
                <motion.div
                    animate={{ y: ["0%", "100%", "0%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.01] to-transparent h-20 w-full opacity-50"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* CORE MISSION STATEMENT */}
                    <div className="grid lg:grid-cols-12 gap-20 items-center">

                        <div className="lg:col-span-8 space-y-12">
                            <AnimatedText className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-px bg-primary/40" />
                                    <span className="text-[10px] font-michroma tracking-[0.55em] text-primary uppercase">The Mission</span>
                                </div>
                                <h2 className="text-[clamp(1.8rem,7.5vw,7.4rem)] font-michroma font-normal text-white uppercase leading-[0.9] tracking-tight">
                                    Engineering <span className="font-serif italic text-primary lowercase tracking-tighter">exceptional</span> <br className="hidden md:block" />
                                    Digital Logic<span className="text-primary">.</span>
                                </h2>
                            </AnimatedText>

                            <AnimatedSection delay={0.2} className="max-w-2xl">
                                <p className="text-xl md:text-3xl text-white/40 leading-relaxed font-medium italic">
                                    "We don't just build websites; we architect high-fidelity digital ecosystems that serve as the foundation for visionary brand dominance."
                                </p>

                                <div className="mt-16 flex items-center gap-8">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-white/5 backdrop-blur-md flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-michroma tracking-[0.4em] text-white/20 uppercase">Founding Architecture Team</p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* FLOATING VALUE CARDS */}
                        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                            {brandValues.map((value, i) => (
                                <AnimatedSection
                                    key={i}
                                    delay={i * 0.1 + 0.3}
                                    className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-700 group"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <value.icon className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-sm font-michroma text-white/60 group-hover:text-white transition-colors uppercase tracking-widest">{value.title}</h3>
                                            <p className="text-[11px] text-white/20 font-medium leading-relaxed">{value.desc}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
