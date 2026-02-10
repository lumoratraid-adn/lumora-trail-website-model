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
            <h2 className="text-4xl sm:text-[10vw] md:text-[6vw] font-sans font-semibold text-white uppercase tracking-[-0.08em] leading-[1] md:leading-[0.85] drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              FRIENDS. FOUNDERS. <br />
              <span className="text-primary italic">INNOVATORS.</span>
            </h2>
            <p className="text-sm md:text-base text-white/40 font-medium leading-relaxed max-w-lg tracking-wide uppercase">
              We started as a team of friends with a shared dream: to build a unique space
              in the tech world where everything is possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-3xl relative z-10 overflow-hidden group hover:border-primary/20 transition-all duration-700">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4 45C6.4 45 0 38.6 0 30.6C0 22.6 6.4 16.2 14.4 16.2V0H28.8V30.6C28.8 38.6 22.4 45 14.4 45ZM45.6 45C37.6 45 31.2 38.6 31.2 30.6C31.2 22.6 37.6 16.2 45.6 16.2V0H60V30.6C60 38.6 53.6 45 45.6 45Z" fill="white" />
                </svg>
              </div>

              <p className="text-lg md:text-2xl font-medium leading-[1.4] mb-12 text-white/60 font-sans tracking-tight group-hover:text-white/80 transition-colors duration-500">
                &quot;Lumora Triad began as a circle of friends with a single dream: to carve out our own space in the tech landscape. We built this studio to prove that everything is possible when you&apos;re in the right group of innovators. We&apos;re here to turn your biggest ideas into digital reality.&quot;
              </p>

              <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xl shadow-[0_0_30px_rgba(139,92,246,0.1)] group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  LT
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl tracking-tight text-white uppercase group-hover:text-primary transition-colors">Lumora Triad</h3>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mt-1 group-hover:text-primary/40 transition-colors">Founding Team</p>
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
