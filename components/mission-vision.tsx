"use client"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import Image from "next/image"
import { motion } from "framer-motion"

type MockupItem =
    | { type: "image"; src: string }
    | { type: "code"; content: string }

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

export function MissionVision() {
    return (
        <section className="py-12 md:py-24 relative overflow-hidden border-t border-foreground/5">
            {/* Animated Mockup Background Grid with Code & Images */}
            <div className="absolute inset-0 z-0 opacity-[0.35] md:opacity-[0.50] pointer-events-none">
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
                                className="aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border-2 border-white/20 md:border-white/30 backdrop-blur-sm shadow-2xl"
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
                                            className="object-cover brightness-150 contrast-110"
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
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-16">

                    <AnimatedText className="space-y-8 flex flex-col items-center">
                        <span className="inline-flex items-center gap-3 px-6 py-2 bg-foreground text-background rounded-full text-[10px] font-michroma tracking-[0.4em] uppercase">
                            Ambition
                        </span>
                        <h2 className="text-[clamp(2.5rem,10vw,9rem)] font-michroma font-normal text-foreground uppercase leading-[0.85] tracking-tight">
                            Build <span className="font-serif italic text-primary lowercase tracking-tighter">exceptional</span> <br />
                            Standard<span className="text-primary">.</span>
                        </h2>
                    </AnimatedText>

                    <AnimatedSection delay={0.2} className="w-full max-w-3xl">
                        <p className="text-xl md:text-3xl text-foreground/40 leading-relaxed font-medium italic">
                            Transforming visionary concepts into high-performance digital ecosystems through disciplined architecture.
                        </p>

                        <div className="mt-16 flex justify-center items-center gap-10">
                            <div className="w-20 h-px bg-foreground/10" />
                            <p className="text-lg md:text-xl text-primary font-michroma tracking-[0.3em] uppercase">
                                Lumora Frontier
                            </p>
                            <div className="w-20 h-px bg-foreground/10" />
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    )
}
