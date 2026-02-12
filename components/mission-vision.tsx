"use client"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function MissionVision() {
    return (
        <section className="py-12 md:py-24 relative bg-background overflow-hidden border-t border-foreground/5">
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
