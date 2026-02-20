"use client"

import { ArrowRight, ArrowUpRight, Sparkles, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"

const services = [
    "Web Development",
    "UI / UX Design",
    "Branding",
    "Consultancy",
    "Cloud Logic",
    "Maintenance",
]

export function NetworkHero() {
    const [startAnimation, setStartAnimation] = useState(false)
    const [activeService, setActiveService] = useState(0)

    const [stars, setStars] = useState<{ left: string; top: string; delay: number }[]>([])

    // Sync with preloader and generate stars only on client to avoid hydration mismatch
    useEffect(() => {
        const timer = setTimeout(() => setStartAnimation(true), 1300)

        // Generate stars data once on client mount
        const generatedStars = [...Array(20)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 5
        }))
        setStars(generatedStars)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 100, rotateX: -30 },
        show: {
            opacity: 1, y: 0, rotateX: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        },
    }

    return (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#020202]">

            {/* CINEMATIC BACKGROUND SYSTEM */}
            <div className="absolute inset-0 z-0">
                {/* Core Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(234,255,3,0.08)_0%,transparent_60%)]" />

                {/* Moving Nebula Haze */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [-20, 20, -20],
                        y: [-20, 20, -20]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,rgba(234,255,3,0.03)_0%,transparent_50%)]"
                />

                {/* Grid Overlay with Perspective */}
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
                </div>

                {/* Top Lighting */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            {/* FLOATING DEBRIS (STARS) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {stars.map((star, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            y: [-10, 10, -10]
                        }}
                        transition={{ duration: 5 + star.delay, repeat: Infinity }}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        style={{
                            left: star.left,
                            top: star.top
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                    {/* MASSIVE CINEMATIC HEADLINE */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={startAnimation ? "show" : "hidden"}
                        className="perspective-[2000px]"
                    >
                        <h1 className="text-[clamp(2.1rem,6.75vw,6.2rem)] font-michroma uppercase leading-[0.82] tracking-[-0.03em] flex flex-col items-center">
                            <div className="overflow-hidden mb-2">
                                <motion.span variants={item} className="block text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                    Architecting
                                </motion.span>
                            </div>
                            <div className="overflow-hidden mb-2 flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                                <motion.span variants={item} className="block font-serif italic text-primary lowercase tracking-tighter">
                                    digital
                                </motion.span>
                                <motion.span variants={item} className="block text-white/10 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
                                    worlds
                                </motion.span>
                            </div>
                            <div className="overflow-hidden">
                                <motion.span variants={item} className="block text-white">
                                    for visionaries<span className="text-primary">.</span>
                                </motion.span>
                            </div>
                        </h1>
                    </motion.div>

                    {/* STUDIO TAGLINE */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-12 text-base md:text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-medium italic"
                    >
                        "The standard for high-performance engineering meets cinematic design fidelity."
                    </motion.p>

                    {/* ACTION HUB */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="mt-16 flex flex-col sm:flex-row items-center gap-6"
                    >
                        <Link
                            href="/contact"
                            className="group relative px-10 py-6 bg-primary text-black rounded-full font-michroma text-[9px] uppercase tracking-[0.45em] overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-4"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10 transition-all duration-[3000ms] group-hover:w-full w-0" />
                            <span>Initiate project</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Link>

                        <Link
                            href="/services"
                            className="group flex items-center gap-4 px-10 py-6 border border-white/10 text-white/40 rounded-full font-michroma text-[8px] uppercase tracking-[0.45em] hover:text-white hover:border-white/25 transition-all bg-white/[0.02]"
                        >
                            <span>Our protocol</span>
                            <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all group-hover:rotate-45" />
                        </Link>
                    </motion.div>

                </div>
            </div>

            {/* SCROLL MANIFESTO INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-white/10" />
                    <span className="text-[9px] font-michroma tracking-[0.6em] text-white/10 uppercase">Discover Mission</span>
                    <div className="w-12 h-px bg-white/10" />
                </div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02]"
                >
                    <ChevronDown className="w-4 h-4 text-primary/40" />
                </motion.div>
            </motion.div>

        </section>
    )
}
