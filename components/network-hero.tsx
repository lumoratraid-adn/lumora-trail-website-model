"use client"

import { ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function NetworkHero() {
    const [startAnimation, setStartAnimation] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setStartAnimation(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    }

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#030303] overflow-hidden font-michroma uppercase">

            {/* ─── BACKGROUND ─── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Ambient glow — desktop only for perf */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/[0.03] rounded-full blur-[120px]" />

                {/* Mobile ambient glow */}
                <div className="md:hidden absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-white/[0.05] rounded-full blur-[80px]" />

                {/* Fine grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#030303_100%)]" />

                {/* Slow floating particles — reduced on mobile */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute hidden md:block w-px h-px bg-white/30 rounded-full"
                        style={{ left: `${10 + i * 7}%`, top: `${15 + (i % 5) * 15}%` }}
                        animate={{ y: [0, -30, 0], opacity: [0.1, 0.5, 0.1] }}
                        transition={{ duration: 6 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    />
                ))}
            </div>

            {/* ─── MAIN CONTENT ─── */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={startAnimation ? "visible" : "hidden"}
                    className="w-full flex flex-col items-center text-center gap-0"
                >

                    {/* ── STATUS BADGE ── */}
                    <motion.div variants={itemVariants} className="mb-8 md:mb-10">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span className="text-[9px] tracking-[0.4em] text-white/50">SYSTEM ACTIVE · TRIAD OS v4.5</span>
                        </div>
                    </motion.div>

                    {/* ── HEADLINE ── */}
                    <motion.h1
                        variants={itemVariants}
                        className="mb-6 md:mb-8 font-michroma leading-[0.88] select-none w-full text-center px-2"
                    >
                        {/* clamp: min 2rem | fluid 6.5vw | max 6.5rem
                            At 360px mobile → ~23px fluid < 2rem min → 2rem (32px) → "LUMORA TRIAD" ≈ 290px ✓
                            At 1440px desktop → 6.5% × 1440 = 93.6px → capped at 6.5rem (104px) ✓ */}
                        <span
                            className="inline tracking-[-0.03em] text-white"
                            style={{ fontSize: "clamp(2rem, 6.5vw, 6.5rem)" }}
                        >
                            LUMORA
                        </span>
                        <span
                            className="inline tracking-[-0.03em] ml-[0.25em]"
                            style={{
                                fontSize: "clamp(2rem, 6.5vw, 6.5rem)",
                                color: "transparent",
                                WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                            }}
                        >
                            TRIAD
                        </span>
                    </motion.h1>


                    {/* ── TAGLINE ── */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.35em] text-white/30 max-w-xs sm:max-w-md md:max-w-2xl leading-loose mb-10 md:mb-14 px-4"
                    >
                        THE SUPREME ARCHITECTURAL ENGINE FOR HIGH-END DIGITAL LEGACY
                    </motion.p>

                    {/* ── EMAIL INPUT ── */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full max-w-sm sm:max-w-md px-4 sm:px-0"
                    >
                        <div className="relative group">
                            {/* Glow ring on focus */}
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative flex flex-col sm:flex-row items-stretch gap-0 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
                                {/* Icon */}
                                <div className="hidden sm:flex items-center px-5 border-r border-white/[0.07]">
                                    <Mail className="w-4 h-4 text-white/20" />
                                </div>

                                {/* Input */}
                                <input
                                    type="email"
                                    placeholder="YOUR EMAIL ADDRESS"
                                    className="flex-1 bg-transparent border-none outline-none text-white text-[10px] tracking-[0.25em] px-5 py-5 sm:py-0 placeholder:text-white/20 min-w-0"
                                />

                                {/* Divider on mobile */}
                                <div className="sm:hidden h-px bg-white/[0.07] mx-4" />

                                {/* CTA Button */}
                                <button className="group/btn flex items-center justify-center gap-2.5 px-6 py-4 sm:py-0 sm:m-1.5 bg-white text-black rounded-xl sm:rounded-xl font-michroma text-[9px] tracking-[0.35em] hover:bg-white/90 active:scale-95 transition-all relative overflow-hidden shrink-0 uppercase">
                                    <span className="relative z-10">CONNECT</span>
                                    <ArrowRight className="w-3 h-3 relative z-10 group-hover/btn:translate-x-0.5 transition-transform" />
                                </button>
                            </div>

                            {/* Label below */}
                            <p className="mt-4 text-center text-[8px] tracking-[0.35em] text-white/15">
                                NO SPAM · UNSUBSCRIBE ANYTIME
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* ─── DESKTOP SIDEBAR LABELS ─── */}
            <div className="absolute left-6 bottom-8 hidden xl:flex flex-col gap-3 select-none">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/20 animate-pulse" />
                    <span className="text-[8px] tracking-[0.4em] text-white/15 font-mono">SECURE: AES_CRYPT</span>
                </div>
                <span className="text-[8px] tracking-[0.4em] text-white/15 font-mono">TRIAD_OS_ACTIVE</span>
            </div>

            <div className="absolute right-6 bottom-8 hidden xl:flex flex-col gap-3 items-end select-none">
                <span className="text-[8px] tracking-[0.4em] text-white/15 font-mono">COORD: 10.85 N / 76.27 E</span>
                <span className="text-[8px] tracking-[0.4em] text-white/15 font-mono">SYSTEM_STABLE</span>
            </div>

            {/* ─── BOTTOM FADE ─── */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent z-10 pointer-events-none" />

            <style jsx global>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(400%); }
                }
            `}</style>
        </section>
    )
}
