"use client"

import { motion } from "framer-motion"

export function MissionVision() {
    return (
        <section className="section-spacing relative bg-transparent overflow-hidden py-10 md:py-16">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">

                    {/* Main Headline Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-6 flex flex-col items-center"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.3em] text-primary uppercase border border-white/10">
                            Our Ambition
                        </span>
                        <h2 className="text-4xl md:text-[5vw] font-sans font-semibold text-white uppercase leading-[0.85] tracking-[-0.08em] drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            Designing <span className="text-primary italic">Experiences.</span> <br />
                            Developing <span className="text-white/20">Digital Solutions.</span>
                        </h2>
                    </motion.div>

                    {/* Simplified Content - No Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full max-w-3xl"
                    >
                        <p className="text-xl md:text-3xl text-white/60 leading-relaxed font-medium">
                            We help businesses, startups, and students
                            transform ideas into powerful digital products
                            through user-centric design and scalable technology.
                        </p>

                        <div className="mt-8 flex justify-center items-center gap-4">
                            <div className="w-12 h-px bg-primary/30" />
                            <p className="text-lg md:text-xl text-primary font-bold italic tracking-wide uppercase">
                                We boost your dream.
                            </p>
                            <div className="w-12 h-px bg-primary/30" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
