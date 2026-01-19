"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { ShieldCheck, Cpu, Lightbulb, Users, Search, Layout, Code } from "lucide-react"

const specialties = [
  {
    title: "UX Research",
    desc: "Understanding users, behaviors, and business needs to build a solid foundation for every project.",
    icon: Search,
  },
  {
    title: "Visual Design",
    desc: "Crafting beautiful, intuitive interfaces that resonate with your brand and delight your users.",
    icon: Layout,
  },
  {
    title: "Robust Development",
    desc: "Building reliable, functional, and scalable software solutions using modern tech stacks.",
    icon: Code,
  },
]

const philosophies = [
  {
    title: "Design with intention",
    desc: "Every pixel serves a purpose. We prioritize clarity and usability in every interface we design.",
    icon: Lightbulb,
  },
  {
    title: "Build for scalability",
    desc: "Our architecture is built to grow with your business, ensuring long-term performance and reliability.",
    icon: Cpu,
  },
  {
    title: "Deliver with confidence",
    desc: "We test, optimize, and refine until everything is perfect, so you can launch with absolute peace of mind.",
    icon: ShieldCheck,
  },
]

export default function AboutPage() {
  return (
    <main className="relative pt-32">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-5xl text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-condensed font-bold tracking-tight text-white uppercase leading-[0.9]">
              Clarity. Technology. <br />
              <span className="text-primary italic">Purpose.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-condensed font-bold text-white uppercase tracking-wider">Who We Are</h2>
            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium">
              We are a team of passionate software engineers, designers, and digital creators dedicated
              to building intuitive designs and reliable software solutions.
              Our work blends UX research, visual design, and robust development to ensure every
              product is not only beautiful but also functional and scalable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section-spacing relative">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase tracking-tight">
              What We <span className="text-primary italic">Do</span>
            </h2>
            <p className="text-white/40 mt-4 text-xl">We specialize in turning complex problems into elegant solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-10 rounded-[2rem] flex flex-col gap-6 group hover:border-primary/20 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-condensed">{item.label || item.title}</h3>
                    <p className="text-white/40 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-spacing relative bg-white/[0.01]">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase tracking-tight">
              Our <span className="text-primary italic">Philosophy</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophies.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-12 rounded-[2.5rem] flex flex-col items-center text-center gap-8 group"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-condensed">{item.title}</h3>
                    <p className="text-white/40 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
