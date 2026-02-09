"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function Preloader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2600) // Optimized for a faster but still premium feel

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(20px)",
                        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="fixed inset-0 z-[99999] bg-[#0E0F13] flex items-center justify-center overflow-hidden"
                >
                    {/* Cosmic Background Accents inside preloader */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 blur-[140px] rounded-full"
                        />
                        <div className="absolute inset-0 bg-[#0E0F13]/20" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* The Animated High-End Symbol */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">

                            {/* Inner Pulsing Ring */}
                            <motion.div
                                animate={{
                                    scale: [0.8, 1, 0.8],
                                    opacity: [0.1, 0.2, 0.1]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-full h-full rounded-full border border-primary/30"
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
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    initial={{ strokeDasharray: "1 1000" }}
                                    animate={{
                                        strokeDasharray: ["1 1000", "150 1000", "1 1000"],
                                        rotate: [0, 360]
                                    }}
                                    transition={{
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeat: Infinity
                                    }}
                                />

                                {/* Orbiting Light Path 2 - Reverse */}
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="34%"
                                    className="stroke-primary/40 fill-none"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    initial={{ strokeDasharray: "1 1000" }}
                                    animate={{
                                        strokeDasharray: ["1 1000", "120 1000", "1 1000"],
                                        rotate: [360, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        ease: "easeInOut",
                                        repeat: Infinity
                                    }}
                                />
                            </svg>

                            {/* Center Glow */}
                            <div className="absolute w-24 h-24 bg-primary/20 blur-[60px] rounded-full animate-pulse" />

                            {/* LT Monogram with Luxury Reveal */}
                            <div className="relative flex flex-col items-center">
                                <div className="flex items-center gap-1 overflow-hidden">
                                    <motion.span
                                        initial={{ y: 60, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                        className="text-6xl md:text-8xl font-sans font-bold text-primary italic leading-none"
                                    >
                                        L
                                    </motion.span>
                                    <motion.span
                                        initial={{ y: 60, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                                        className="text-6xl md:text-8xl font-sans font-bold text-white leading-none"
                                    >
                                        T
                                    </motion.span>
                                </div>
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "100%", opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
                                    className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2"
                                />
                            </div>
                        </div>

                        {/* Loading Percentage Style */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-12 flex flex-col items-center gap-4"
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-black tracking-[0.8em] text-white/30 uppercase mb-2">
                                    Lumora Triad
                                </span>
                                <div className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-12 left-0 right-0 text-center"
                    >
                        <p className="text-[9px] font-bold tracking-[0.4em] text-white/10 uppercase">
                            © 2026 Lumora Triad • Premium Digital Agency
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
