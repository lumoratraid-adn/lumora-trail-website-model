"use client"

import { motion } from "framer-motion"

export function Process() {
  const steps = [
    {
      number: "01",
      name: "Discover",
      desc: "We dive deep into your goals, business landscape, and user needs to create a strategic roadmap for success.",
    },
    {
      number: "02",
      name: "Design & Build",
      desc: "Our experts craft intuitive interfaces and engineer scalable software using modern tools and clean code.",
    },
    {
      number: "03",
      name: "Deliver",
      desc: "We launch, optimize, and provide ongoing support — ensuring your digital product achieves lasting impact and value.",
    },
  ]

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-background">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase mb-6 inline-block">
            Our Workflow
          </span>
          <h2 className="text-[10vw] md:text-[6vw] font-sans font-semibold tracking-[-0.085em] leading-[0.85] text-white uppercase mb-8 drop-shadow-sm">
            THE PROCESS
          </h2>
          <p className="text-[10px] md:text-sm text-white/30 max-w-3xl mx-auto font-bold tracking-[0.2em] uppercase px-4">
            A systematic approach to engineering high-performance digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl border border-white/5 hover:border-primary/40 transition-all duration-700 hover:bg-primary/[0.03] flex flex-col items-center text-center"
            >
              {/* Massive Background Number */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[15rem] font-sans font-black text-white/[0.02] leading-none select-none group-hover:text-primary/[0.05] transition-colors duration-700 pointer-events-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="text-primary font-bold tracking-[0.2em] mb-12 flex flex-col items-center">
                  <div className="h-12 w-px bg-gradient-to-t from-primary to-transparent mb-4 opacity-40 group-hover:h-16 transition-all duration-700" />
                  <span className="text-xs uppercase px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">Step {step.number}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-sans font-bold text-white uppercase tracking-[-0.04em] mb-6 group-hover:text-primary transition-colors duration-500">
                  {step.name}
                </h3>

                <p className="text-sm md:text-base text-white/30 leading-relaxed font-medium group-hover:text-white/60 transition-colors duration-500 max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
