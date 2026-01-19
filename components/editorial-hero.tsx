"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function MainHero() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollY } = useScroll()

    // Parallax effect for that premium editorial feel
    const y1 = useTransform(scrollY, [0, 500], [0, -80])

    const words = {
        building: "BUILDING",
        digital: "DIGITAL",
        realities: "REALITIES."
    }

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
        }
    }

    const renderAnimatedText = (text: string, className: string, delay: number = 0) => (
        <motion.span
            className={`flex flex-wrap ${className}`}
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.02,
                        delayChildren: delay
                    }
                }
            }}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    variants={letterVariants}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    )

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[700px] flex flex-col justify-center overflow-hidden bg-[#fafafa] pt-24 pb-12"
        >
            {/* Parallax Background Text */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 overflow-hidden select-none pointer-events-none flex items-center justify-center"
            >
                <div className="text-[20vw] font-black text-black/[0.015] leading-none uppercase tracking-tighter blur-[1px]">
                    LUMORA
                </div>
            </motion.div>

            {/* Background Gauze */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[10%] right-[15%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full flex-1 flex flex-col justify-center">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex flex-col gap-10 md:gap-14">

                        {/* Main Typography Block - Restored to a more prominent scale */}
                        <div className="flex flex-col relative">
                            {renderAnimatedText(words.building, "text-[clamp(3rem,10vw,7.5rem)] font-black leading-[0.8] tracking-tighter text-black uppercase", 0.2)}

                            <div className="flex items-center gap-4 ml-[5%] md:ml-[10%]">
                                {renderAnimatedText(words.digital, "text-[clamp(3rem,10vw,7.5rem)] font-black leading-[0.8] tracking-tighter text-primary italic", 0.4)}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                                    className="hidden md:block h-2 lg:h-3 flex-1 bg-black/5 rounded-full origin-left"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                {renderAnimatedText(words.realities, "text-[clamp(3rem,10vw,7.5rem)] font-black leading-[0.8] tracking-tighter text-black/10 stroke-text uppercase", 0.6)}

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    className="max-w-sm lg:pb-4"
                                >
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-[1.2] tracking-tight">
                                        Merging <span className="text-black font-bold">technical precision</span> with minimalist aesthetic value to redefine your digital presence.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Status Bar & Badges - Kept below the headline for clean layout */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-wrap items-center gap-6"
                        >
                            <div className="flex items-center gap-3 px-3 py-1.5 bg-black/[0.03] rounded-full border border-black/[0.03]">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-black tracking-[0.2em] text-black uppercase">STUDIO_ACTIVE</span>
                            </div>
                            <div className="h-px w-12 bg-black/10 hidden sm:block" />
                            <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase hidden sm:block">
                                PREMIER DIGITAL SOLUTIONS
                            </span>
                        </motion.div>

                        {/* Actions Footer */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 pt-10 border-t border-black/[0.05]">
                            <div className="flex gap-12">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.2em]">Expertise</p>
                                    <p className="text-xs font-bold text-black/60 italic leading-none">Web / UI&UX / Brand</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.2em]">Social</p>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-xs font-bold text-black border-b border-black/10 hover:border-primary transition-colors">INSTA</a>
                                        <a href="#" className="text-xs font-bold text-black border-b border-black/10 hover:border-primary transition-colors">LINKED</a>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="/contact"
                                    className="group relative flex items-center justify-center px-10 py-6 bg-black text-white rounded-xl font-black text-lg overflow-hidden transition-all shadow-xl"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        GET STARTED
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Scaffolding */}
            <div className="absolute top-0 bottom-0 left-[5%] w-px bg-black/[0.02] hidden xl:block" />
            <div className="absolute top-0 bottom-0 right-[5%] w-px bg-black/[0.02] hidden xl:block" />

            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-[url('https://grain-y.com/assets/images/grain.png')] opacity-[0.02] pointer-events-none" />
        </section>
    )
}
