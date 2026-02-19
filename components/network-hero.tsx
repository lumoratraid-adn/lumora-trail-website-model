"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"

export function NetworkHero() {

    const [startAnimation, setStartAnimation] = useState(false)

    // Sync with preloader (3500ms)
    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true)
        }, 3600)

        return () => clearTimeout(timer)
    }, [])

    // Container stagger
    const container: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12
            }
        }
    }

    // Futuristic word animation
    const futuristicWord: Variants = {
        hidden: {
            opacity: 0,
            y: 100,
            skewY: 8,
            letterSpacing: "-0.08em"
        },
        show: {
            opacity: 1,
            y: 0,
            skewY: 0,
            letterSpacing: "0em",
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
        }
    }

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Background */}
            <motion.div
                initial={{ scale: 1.08 }}
                animate={startAnimation ? { scale: 1 } : { scale: 1.08 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/hero section bg.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 pt-44 pb-16">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* Headline */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={startAnimation ? "show" : "hidden"}
                        className="text-center"
                    >
                        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-michroma uppercase text-white leading-[0.95] tracking-[0.04em]">

                            <div className="overflow-hidden">
                                <motion.span
                                    variants={futuristicWord}
                                    className="block [-webkit-text-stroke:0.6px_white]"
                                >
                                    Design
                                </motion.span>
                            </div>

                            <div className="overflow-hidden">
                                <motion.span
                                    variants={futuristicWord}
                                    className="block font-serif italic text-primary lowercase tracking-tight [-webkit-text-stroke:0.3px_currentColor]"
                                >
                                    meets
                                </motion.span>
                            </div>

                            <div className="overflow-hidden">
                                <motion.span
                                    variants={futuristicWord}
                                    className="block [-webkit-text-stroke:0.6px_white]"
                                >
                                    architecture<span className="text-primary">.</span>
                                </motion.span>
                            </div>

                        </h1>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-primary text-black rounded-2xl font-michroma text-[10px] uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-5 shadow-2xl shadow-primary/30 hover:scale-105 whitespace-nowrap"
                        >
                            Start Project
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Link>

                        <Link
                            href="/works"
                            className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white rounded-2xl font-michroma text-[10px] uppercase tracking-[0.4em] backdrop-blur-md bg-white/5 transition-all hover:border-primary/40 hover:text-primary whitespace-nowrap"
                        >
                            View Work
                        </Link>
                    </motion.div>

                </div>
            </div>

        </section>
    )
}
