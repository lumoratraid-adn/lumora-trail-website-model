"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ShowcaseSection() {
    return (
        <section className="section-spacing bg-transparent overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase border border-white/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            CASE STUDIES
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight leading-none">
                            PRECISION <span className="text-primary italic">MOCKUPS</span><br />
                            <span className="text-white/10 stroke-text">DRIVING RESULTS.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-xl">
                            We translate your business goals into a visual language that converts.
                            Our designs aren&apos;t just aesthetic; they are built for strategic impact.
                        </p>

                        <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/10">
                            <div className="space-y-1">
                                <span className="text-4xl font-black text-primary">99%</span>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Success Rate</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-4xl font-black text-primary">150+</span>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Global Projects</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-sm uppercase tracking-[0.1em] hover:scale-105 transition-all group shadow-2xl"
                            >
                                View Portfolio
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
                        >
                            <img
                                src="/corporate-business-website.png"
                                alt="Product Mockup"
                                className="w-full aspect-[4/3] object-cover"
                            />
                        </motion.div>
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
                    </div>

                </div>
            </div>
        </section>
    )
}
