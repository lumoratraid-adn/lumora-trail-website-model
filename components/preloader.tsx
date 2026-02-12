"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3500) // 3.5 seconds total duration

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[10000] bg-[#050505] flex items-center justify-center cursor-none"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Central Logo Container */}
                        <div className="relative z-10 flex items-center justify-center w-32 h-32 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                            {/* Inner Pulsing Core */}
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-primary/5 rounded-full"
                            />

                            {/* Letters L & T */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                className="relative z-20 font-michroma text-4xl font-bold text-white tracking-widest flex items-center gap-1"
                            >
                                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">L</span>
                                <span className="text-primary drop-shadow-[0_0_15px_rgba(74,222,128,0.6)]">T</span>
                            </motion.div>
                        </div>

                        {/* Orbiting Rings */}
                        {/* Ring 1 - Fast & Tight */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-20px] rounded-full border border-transparent border-t-primary/60 border-r-primary/20"
                        />

                        {/* Ring 2 - Slower & Wider */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-40px] rounded-full border border-transparent border-b-white/40 border-l-white/10"
                        />

                        {/* Ring 3 - Pulse Ring */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                            className="absolute inset-0 rounded-full border border-primary/30"
                        />

                        {/* Loading Progress Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-24 text-[10px] font-michroma uppercase tracking-[0.4em] text-white/40"
                        >
                            Initializing System
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
