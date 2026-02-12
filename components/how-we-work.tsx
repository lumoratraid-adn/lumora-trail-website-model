"use client"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function HowWeWork() {
    const steps = [
        {
            num: "01",
            title: "Discovery",
            desc: "Mapping the digital landscape and brand DNA."
        },
        {
            num: "02",
            title: "Architecture",
            desc: "Structural blueprints for scalable systems."
        },
        {
            num: "03",
            title: "Evolution",
            desc: "Iterative design and engineering refinements."
        },
        {
            num: "04",
            title: "Peak Launch",
            desc: "Production deployment with structural integrity."
        }
    ]

    return (
        <section className="py-12 md:py-24 bg-background relative overflow-hidden border-t border-foreground/5">
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedText className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-12">
                    <div className="space-y-8">
                        <span className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Mechanism</span>
                        <h2 className="text-[clamp(3rem,10vw,9rem)] font-michroma font-normal tracking-[-0.03em] leading-none text-foreground uppercase">
                            Our <span className="text-primary italic text-lowercase">Process</span>.
                        </h2>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-xl text-foreground/40 italic font-medium leading-[1.2]">
                            "A disciplined synthesis of structural software engineering and creative vision."
                        </p>
                    </div>
                </AnimatedText>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {steps.map((step, i) => (
                        <AnimatedSection delay={i * 0.1} key={i} className="group relative pt-12 border-t border-foreground/10 hover:border-primary transition-all duration-500">
                            <div className="space-y-12 relative z-10">
                                <div className="flex justify-between items-start">
                                    <span className="text-4xl font-michroma text-foreground/5 group-hover:text-primary transition-colors duration-500">{step.num}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-20 group-hover:opacity-100 transition-all" />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-michroma text-foreground uppercase tracking-widest leading-none">{step.title}</h3>
                                    <p className="text-[11px] text-foreground/40 uppercase tracking-[0.2em] font-medium leading-relaxed italic">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* LUMORA Bottom Line */}
                <div className="mt-16 pt-12 border-t border-foreground/5 text-center">
                    <p className="text-[10px] font-michroma tracking-[0.6em] text-foreground/20 uppercase">
                        Lumora Text & Design Studio • Process Architecture
                    </p>
                </div>
            </div>
        </section>
    )
}
