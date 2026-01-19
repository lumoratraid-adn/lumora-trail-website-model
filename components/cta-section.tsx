"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="section-spacing bg-transparent">
            <div className="container mx-auto">
                <div className="relative p-10 sm:p-14 md:p-28 rounded-[3rem] sm:rounded-[4rem] bg-white/[0.02] text-white overflow-hidden shadow-2xl border border-white/5">

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

                        <h2 className="text-5xl md:text-8xl font-bold text-white uppercase leading-[0.9] tracking-tighter">
                            READY TO BRING YOUR<br />
                            <span className="text-primary italic">VISION</span> <span className="text-white/10 stroke-text">TO LIFE?</span>
                        </h2>

                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/50 font-medium leading-relaxed">
                            We merge technical precision with aesthetic excellence to deliver
                            world-class digital products that scale with your vision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 pt-6">
                            <Link
                                href="/contact"
                                className="px-12 py-6 bg-primary text-white rounded-2xl font-bold text-sm uppercase tracking-[0.1em] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-2xl"
                            >
                                Start a Project
                                <ArrowUpRight className="w-6 h-6" />
                            </Link>
                            <Link
                                href="/services"
                                className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-sm uppercase tracking-[0.1em] hover:bg-white/10 transition-all"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
