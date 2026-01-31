"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { Layout, Globe, Layers, PlayCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Web & Software Development",
    problem: "Slow, Unreliable websites cost businesses revenue and trust.",
    solution: "We build high-speed, scalable web applications and software using Next.js and React that deliver flawless performance and absolute reliability.",
    items: ["Next.js/React Apps", "Custom CMS", "Performance Optimization", "E-commerce Solutions", "API Architectures", "Secure Databases"],
    icon: Globe,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="w-full bg-[#0E0F13]/50 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex gap-1.5 p-3 border-b border-white/5 bg-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="p-4 font-mono text-[10px] space-y-1.5 overflow-hidden">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary">import &#123; Lumora &#125; from &apos;triad&apos;;</motion.div>
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-white/40">const studio = Lumora.init(&#123;</motion.div>
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="pl-4 text-white/60">performance: &apos;ultra&apos;,</motion.div>
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="pl-4 text-white/60">design: &apos;bespoke&apos;</motion.div>
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.0 }} className="text-white/40">&#125;);</motion.div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "UI / UX Design & Figma",
    problem: "Poor design leads to high bounce rates and user frustration.",
    solution: "We create intuitive, research-driven interfaces in Figma that enhance user engagement and guide your customers with precision.",
    items: ["User Research", "Wireframing & Prototyping", "UI Design Systems", "UX Audit", "Interactive Prototypes", "Developer Handoff"],
    icon: Layout,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-48 h-48">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl"
              animate={{
                x: i * 15,
                y: i * 10,
                z: i * -50,
                opacity: 1 - (i * 0.3)
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
            >
              <div className="p-4 space-y-3">
                <div className="w-1/2 h-2 bg-primary/20 rounded-full" />
                <div className="w-full h-12 bg-white/5 rounded-lg" />
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/5" />
                  <div className="flex-1 h-8 rounded-lg bg-white/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Branding, Logo & Posters",
    problem: "Generic branding fails to stand out in a crowded market.",
    solution: "We craft unique brand stories and visual identities that establish authority and build lasting trust with your ideal audience.",
    items: ["Logo Design", "Brand Guidelines", "Visual Identity", "Poster & Ad Design", "Typography Systems", "Color Strategy"],
    icon: Layers,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2 p-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: "mirror" }}
              className="w-12 h-12 rounded-lg border border-primary/30 flex items-center justify-center font-bold text-primary text-[8px]"
            >
              L/T
            </motion.div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 border-2 border-primary rounded-full flex items-center justify-center bg-background"
            >
              <Layers className="w-10 h-10 text-primary" />
            </motion.div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Animations & Creative",
    problem: "Static content often fails to capture human attention.",
    solution: "We bring products to life through high-impact animations and motion graphics that tell a compelling story and win hearts.",
    items: ["UI Animation", "Explainer Videos", "3D Motion Graphics", "Social Media Motion", "Interactive Animations", "Logo Animation"],
    icon: PlayCircle,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%"]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-40 h-40 bg-gradient-to-tr from-primary via-accent to-secondary blur-2xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 0],
            borderRadius: ["50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-gradient-to-bl from-accent via-secondary to-primary blur-xl opacity-20"
        />
        <div className="relative z-10">
          <PlayCircle className="w-16 h-16 text-white/50" />
        </div>
      </div>
    )
  }
]

export default function ServicesPage() {
  return (
    <main className="relative pt-32">
      <section className="section-spacing">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-white mb-4 uppercase">Our Services</h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium px-4">
              We provide end-to-end digital solutions that help brands scale across the modern web.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 md:gap-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-6 md:space-y-8 w-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-none">{service.title}</h2>
                    <p className="text-base md:text-xl text-white/40 font-medium leading-relaxed max-w-xl">
                      {service.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:gap-y-6 md:gap-x-12 pb-6 md:pb-8 border-t border-white/5 pt-6 md:pt-8">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 md:gap-4 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/item:bg-primary transition-all duration-300" />
                        <span className="text-white/60 font-black uppercase tracking-[0.15em] text-[9px] sm:text-xs group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center md:justify-start gap-4 px-8 py-4 md:px-10 md:py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-primary hover:border-primary transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-primary/20 w-full md:w-auto"
                  >
                    Discuss Project
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="flex-1 w-full aspect-[4/3] md:aspect-video rounded-3xl md:rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center justify-center p-4 md:p-12 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {service.visual}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
