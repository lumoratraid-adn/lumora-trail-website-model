"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[10000] bg-[#000000] flex flex-col items-center justify-center cursor-none"
                >
                    <div className="relative flex flex-col items-center justify-center">

                        {/* THE WHITE LOGO SYSTEM (EXACT MATCH TO IMAGE) */}
                        <div className="relative w-64 h-64 flex items-center justify-center">

                            {/* SVG WITH METABALL EFFECT */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                <svg width="220" height="220" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                        </filter>
                                    </defs>

                                    {/* The "Gooey" Group for the connected circles */}
                                    <g filter="url(#goo)">
                                        {/* Top Right Circle */}
                                        <motion.circle
                                            cx="68" cy="30" r="15" fill="white"
                                            animate={{ cx: [68, 70, 68], cy: [30, 28, 30] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        />

                                        {/* Middle Left Circle */}
                                        <motion.circle
                                            cx="32" cy="50" r="15" fill="white"
                                            animate={{ cx: [32, 30, 32], cy: [50, 52, 50] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                        />

                                        {/* The small bridge support circle (invisible but aids the goo) */}
                                        <motion.circle
                                            cx="50" cy="40" r="10" fill="white"
                                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </g>

                                    {/* The Detached Circle (Bottom) - NO FILTER */}
                                    <motion.circle
                                        cx="55" cy="80" r="14" fill="white"
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    />
                                </svg>
                            </motion.div>
                        </div>

                        {/* BRAND TEXT (Clean & Spaced) */}
                        <div className="mt-4 flex flex-col items-center">
                            <motion.h2
                                initial={{ opacity: 0, letterSpacing: "1.2em" }}
                                animate={{ opacity: 1, letterSpacing: "1em" }}
                                transition={{ duration: 1.2, delay: 0.3 }}
                                className="text-white font-michroma text-[14px] uppercase tracking-[1em] ml-[1em] whitespace-nowrap"
                            >
                                Lumora Triad
                            </motion.h2>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
