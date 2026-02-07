"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Eye } from "lucide-react"

export function CTASection() {
    return (
        <section className="section-spacing bg-transparent">
            <div className="container mx-auto">
                <div className="relative p-8 sm:p-14 md:p-28 rounded-[2rem] sm:rounded-[4rem] bg-white/[0.02] text-white overflow-hidden shadow-2xl border border-white/5">

                    {/* Background Accents */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/10 blur-[150px] -mr-32 -mt-32 rounded-full" />
                        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-accent/10 blur-[150px] -ml-32 -mb-32 rounded-full" />
                    </div>

                    <div className="relative z-10 text-center space-y-12">
                        <span className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase border border-white/5 backdrop-blur-sm mx-auto">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            GET STARTED
                        </span>

                        <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white uppercase leading-[1] md:leading-[0.9] tracking-tighter px-4">
                            READY TO BRING YOUR<br />
                            <span className="text-primary italic">VISION</span> <span className="text-white/10 stroke-text">TO LIFE?</span>
                        </h2>

                        <p className="max-w-2xl mx-auto text-base md:text-2xl text-white/50 font-medium leading-relaxed px-6">
                            We merge technical precision with aesthetic excellence to deliver
                            world-class digital products that scale with your vision.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6 w-full max-w-2xl mx-auto">
                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto pl-8 pr-2 py-2 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full font-bold text-xs uppercase tracking-[0.2em] text-white flex items-center justify-center gap-6 transition-all hover:bg-primary/30 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.15)] whitespace-nowrap"
                            >
                                Start a Project
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                                    <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                            <Link
                                href="/services"
                                className="group w-full sm:w-auto pl-8 pr-2 py-2 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-6 transition-all hover:bg-white/10 active:scale-95 whitespace-nowrap"
                            >
                                Our Services
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                                    <Eye className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
