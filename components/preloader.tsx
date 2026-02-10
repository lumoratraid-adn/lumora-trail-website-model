"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function Preloader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Reduced from 1800ms to 600ms for a much snappier response
        const timer = setTimeout(() => {
            setLoading(false)
        }, 600)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        filter: "blur(15px)",
                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="fixed inset-0 z-[99999] bg-[#0E0F13] flex items-center justify-center overflow-hidden"
                >
                    {/* Cosmic Background Accents inside preloader */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 blur-[130px] rounded-full"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* The Animated High-End Symbol */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">

                            {/* Inner Pulsing Ring */}
                            <motion.div
                                animate={{
                                    scale: [0.9, 1, 0.9],
                                    opacity: [0.1, 0.2, 0.1]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-full h-full rounded-full border border-primary/20"
                            />

                            {/* Middle Rotating Dash Ring */}
                            <svg className="absolute inset-0 w-full h-full rotate-45">
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="44%"
                                    className="stroke-primary/20 fill-none"
                                    strokeWidth="1"
                                    strokeDasharray="4 8"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>

                            {/* Main Concentric Circles Animation */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                {/* Base Track */}
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="40%"
                                    className="stroke-white/5 fill-none"
                                    strokeWidth="1"
                                />

                                {/* Orbiting Light Path 1 */}
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="40%"
                                    className="stroke-primary fill-none"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    style={{ originX: "50%", originY: "50%" }}
                                    initial={{ strokeDasharray: "1 1000", rotate: 0 }}
                                    animate={{
                                        strokeDasharray: ["1 1000", "200 1000", "1 1000"],
                                        rotate: 360
                                    }}
                                    transition={{
                                        rotate: { duration: 2, ease: "linear", repeat: Infinity },
                                        strokeDasharray: { duration: 2, ease: "easeInOut", repeat: Infinity }
                                    }}
                                />

                                {/* Orbiting Light Path 2 - Reverse */}
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="34%"
                                    className="stroke-primary/40 fill-none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    style={{ originX: "50%", originY: "50%" }}
                                    initial={{ strokeDasharray: "1 1000", rotate: 0 }}
                                    animate={{
                                        strokeDasharray: ["1 1000", "160 1000", "1 1000"],
                                        rotate: -360
                                    }}
                                    transition={{
                                        rotate: { duration: 3, ease: "linear", repeat: Infinity },
                                        strokeDasharray: { duration: 3, ease: "easeInOut", repeat: Infinity }
                                    }}
                                />
                            </svg>

                            {/* Center Glow */}
                            <div className="absolute w-24 h-24 bg-primary/20 blur-[50px] rounded-full animate-pulse" />

                            {/* LT Monogram with Luxury Reveal */}
                            <div className="relative flex flex-col items-center">
                                <div className="flex items-center gap-1 overflow-hidden">
                                    <motion.span
                                        initial={{ y: 80, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                        className="text-6xl md:text-8xl font-sans font-bold text-primary italic leading-none"
                                    >
                                        L
                                    </motion.span>
                                    <motion.span
                                        initial={{ y: 80, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                                        className="text-6xl md:text-8xl font-sans font-bold text-white leading-none"
                                    >
                                        T
                                    </motion.span>
                                </div>
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "100%", opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
                                    className="h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent mt-2"
                                />
                            </div>
                        </div>

                        {/* Loading Percentage Style */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                            className="mt-12 flex flex-col items-center gap-4"
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black tracking-[0.8em] text-white/40 uppercase mb-3">
                                    Lumora Triad
                                </span>
                                <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="absolute bottom-10 left-0 right-0 text-center"
                    >
                        <p className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase">
                            © 2026 Lumora Triad • Premium Digital Agency
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
