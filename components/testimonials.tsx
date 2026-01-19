"use client"

import { motion } from "framer-motion"

export function Testimonials() {
  return (
    <section className="section-spacing relative bg-transparent overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase border border-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              OUR STORY
            </span>
            <h2 className="text-5xl md:text-7xl font-condensed font-bold text-white uppercase leading-[0.9]">
              FRIENDS. FOUNDERS. <br />
              <span className="text-primary italic">INNOVATORS.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-lg">
              We started as a team of friends with a shared dream: to build a unique space
              in the tech world where everything is possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4 45C6.4 45 0 38.6 0 30.6C0 22.6 6.4 16.2 14.4 16.2V0H28.8V30.6C28.8 38.6 22.4 45 14.4 45ZM45.6 45C37.6 45 31.2 38.6 31.2 30.6C31.2 22.6 37.6 16.2 45.6 16.2V0H60V30.6C60 38.6 53.6 45 45.6 45Z" fill="white" />
                </svg>
              </div>

              <p className="text-lg md:text-2xl font-bold leading-[1.3] mb-12 italic text-white/90 font-heading">
                &quot;Lumora Triad began as a circle of friends with a single dream: to carve out our own space in the tech landscape. We built this studio to prove that everything is possible when you&apos;re in the right group of innovators. We&apos;re here to turn your biggest ideas into digital reality.&quot;
              </p>

              <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center font-black text-white text-xl shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                  LT
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-2xl tracking-tight text-white uppercase">Lumora Triad</h4>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Founding Team</p>
                </div>
              </div>
            </div>
            {/* Background Aura */}
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-primary/10 blur-[120px] rounded-full z-0" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-accent/5 blur-[120px] rounded-full z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
