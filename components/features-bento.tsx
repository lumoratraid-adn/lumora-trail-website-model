"use client"

import { Cpu, Palette, PenTool, Video } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesBento() {
  const features = [
    {
      title: "Website & Software Development",
      desc: "We engineer high-performance web applications and custom software solutions designed to scale with your business.",
      icon: Cpu,
    },
    {
      title: "UI / UX Design & Figma Projects",
      desc: "Precision-crafted user interfaces and seamless experiences that transform how users interact with your digital products.",
      icon: Palette,
    },
    {
      title: "Branding, Logo & Posters",
      desc: "Compelling visual identities and high-impact marketing assets that establish trust and define your brand authority.",
      icon: PenTool,
    },
    {
      title: "Animations & Creative Design",
      desc: "Dynamic motion graphics and creative storytelling that bring your brand to life and capture audience attention.",
      icon: Video,
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase mb-6 inline-block">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-[10vw] md:text-[6vw] font-sans font-semibold tracking-[-0.085em] leading-[1] md:leading-[0.85] text-white uppercase mb-8 drop-shadow-sm">
            ENGINEERING EXCELLENCE
          </h2>
          <p className="text-[10px] md:text-sm text-white/30 max-w-3xl mx-auto font-bold tracking-[0.2em] uppercase px-4 whitespace-nowrap overflow-hidden">
            Engineering excellence for the modern digital era.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl border border-white/5 hover:border-primary/40 transition-all duration-700 hover:bg-primary/[0.03] overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.05] border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  <f.icon className="w-7 h-7 text-white/80 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-sm md:text-base font-sans font-bold text-white uppercase tracking-[-0.04em] leading-tight mb-6 group-hover:text-primary transition-colors duration-500">
                  {f.title}
                </h3>

                <p className="text-sm text-white/30 leading-relaxed font-medium group-hover:text-white/60 transition-colors duration-500">
                  {f.desc}
                </p>

                <div className="mt-12 flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Light */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
