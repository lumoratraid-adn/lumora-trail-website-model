"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

type MockupItem =
    | { type: "image"; src: string }
    | { type: "code"; content: string }

export function NetworkHero() {
    const mockups: MockupItem[] = [
        { type: "image", src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop" },
        { type: "code", content: "const app = () => {\n  return (\n    <div>\n      Hello\n    </div>\n  )\n}" },
        { type: "image", src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop" },
        { type: "code", content: ".hero {\n  display: flex;\n  background: #000;\n  color: #4ade80;\n}" },
        { type: "image", src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop" },
        { type: "code", content: "function getData() {\n  fetch('/api')\n    .then(res => \n      res.json()\n    )\n}" },
        { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
        { type: "code", content: "SELECT * FROM\n  users\nWHERE\n  active = true\nLIMIT 10;" },
    ]

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Animated Mockup Background Grid with Code & Images */}
            <div className="absolute inset-0 z-0 opacity-[0.18] md:opacity-[0.25] pointer-events-none">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-12 rotate-2 md:rotate-3 scale-105 md:scale-110">
                    {Array.from({ length: 16 }).map((_, i) => {
                        const mockup = mockups[i % mockups.length]
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: [0.7, 1, 0.7], y: 0 }}
                                transition={{
                                    duration: 4,
                                    delay: i * 0.15,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border-2 border-white/20 md:border-white/30 backdrop-blur-sm shadow-2xl hover:shadow-primary/20"
                                style={{
                                    boxShadow: '0 0 30px rgba(74, 222, 128, 0.15), 0 10px 40px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                {mockup.type === "image" ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={mockup.src}
                                            alt="Service mockup"
                                            fill
                                            className="object-cover brightness-110 contrast-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] p-3 md:p-4 flex flex-col gap-1 border-t border-primary/10">
                                        <div className="flex gap-1 md:gap-1.5 mb-2">
                                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400/60" />
                                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400/60" />
                                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400/60" />
                                        </div>
                                        <pre className="text-[6px] md:text-[7px] lg:text-[9px] font-mono text-primary leading-relaxed overflow-hidden">
                                            {mockup.content}
                                        </pre>
                                    </div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/[0.02] rounded-full blur-[100px]" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            {/* Decorative Glyph */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02] select-none pointer-events-none overflow-hidden">
                <span className="text-[clamp(20rem,60vw,50rem)] font-serif italic leading-none text-foreground">LT</span>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10 pt-44 pb-8">
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center space-y-8"
                    >
                        <h1 className="text-[clamp(3rem,11vw,10rem)] font-michroma leading-[0.85] tracking-tight text-foreground uppercase drop-shadow-2xl">
                            Design <br />
                            <span className="font-serif italic text-primary lowercase tracking-tighter">meets</span> architecture<span className="text-primary">.</span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-base md:text-xl text-foreground/50 font-medium leading-relaxed italic px-4">
                            We architect high-performance software and cinematic brand identities for businesses that demand market dominance.
                        </p>

                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-primary text-white rounded-2xl font-michroma text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] hover:scale-105 transition-all flex items-center justify-center gap-4 md:gap-6 group shadow-2xl shadow-primary/30 whitespace-nowrap"
                        >
                            Start Project
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                        <Link
                            href="/works"
                            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 border border-foreground/10 text-foreground rounded-2xl font-michroma text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] hover:border-primary/40 hover:text-primary transition-all flex items-center justify-center gap-4 md:gap-6 backdrop-blur-sm bg-background/30 whitespace-nowrap"
                        >
                            View Work
                        </Link>
                    </motion.div>

                    {/* Stats / Social Proof - Hidden on Mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-foreground/5 max-w-3xl mx-auto"
                    >
                        {[
                            { value: "50+", label: "Projects Delivered" },
                            { value: "30+", label: "Happy Clients" },
                            { value: "3+", label: "Years Experience" },
                            { value: "24h", label: "Response Time" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center space-y-2 py-4">
                                <p className="text-2xl md:text-4xl font-michroma text-primary font-normal">{stat.value}</p>
                                <p className="text-[8px] md:text-[9px] font-michroma uppercase tracking-[0.3em] text-foreground/30">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Visual Anchors */}
            <div className="absolute bottom-10 left-10 hidden xl:block">
                <div className="flex flex-col gap-2 opacity-10">
                    <div className="w-12 h-px bg-foreground" />
                    <div className="w-8 h-px bg-foreground" />
                    <div className="w-16 h-px bg-foreground" />
                </div>
            </div>

        </section>
    )
}

