"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { Layout, Globe, Layers, Smartphone, PlayCircle, UserCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "UI / UX Design",
    desc: "We create intuitive, user-centric interfaces that balance aesthetic beauty with functional clarity.",
    items: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    icon: Layout,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-32 glass-card rounded-xl border-primary/20 flex flex-col p-4 gap-2"
        >
          <div className="w-1/2 h-2 bg-primary/20 rounded-full" />
          <div className="w-full h-2 bg-white/5 rounded-full" />
          <div className="w-full h-2 bg-white/5 rounded-full" />
          <div className="mt-2 flex gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20" />
            <div className="flex-1 h-8 rounded-lg bg-white/5" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-40 h-24 glass-card rounded-xl border-accent/20 flex flex-col p-4 gap-2 -translate-y-1/2 translate-x-12 blur-[1px]"
        >
          <div className="w-3/4 h-2 bg-accent/20 rounded-full" />
          <div className="w-full h-2 bg-white/5 rounded-full" />
        </motion.div>
      </div>
    )
  },
  {
    title: "Web & Software Development",
    desc: "We engineer high-performance web applications and custom software solutions using cutting-edge technologies like Next.js, React, and Node.js.",
    items: ["Custom Software", "Enterprise Web Apps", "E-commerce Systems", "Performance Optimization"],
    icon: Globe,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full max-w-sm font-mono text-[10px] text-white/30 space-y-2">
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity }}>const app = express();</motion.div>
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>app.use(secureMiddleware);</motion.div>
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="text-primary/40 leading-relaxed pl-4 line-clamp-3">
            {"{ deploy: { cluster: 'edge' } }"}
          </motion.div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ scaleX: [0, 1, 0], x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="absolute h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              style={{ top: `${30 + i * 20}%` }}
            />
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Brand Identity",
    desc: "Crafting memorable brand stories through strategic visual identities and logo design.",
    items: ["Logo Design", "Brand Guidelines", "Marketing Assets", "Corporate Identity"],
    icon: Layers,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-24 h-24 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-4xl"
          >
            L
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="w-24 h-24 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-bold text-4xl"
          >
            T
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-white/[0.01] rounded-full blur-[100px]" />
      </div>
    )
  },
  {
    title: "Mobile Solutions",
    desc: "Building seamless cross-platform mobile experiences for iOS and Android.",
    items: ["Native Apps", "Hybrid Solutions", "App UI Design", "API Integration"],
    icon: Smartphone,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-64 border-4 border-white/10 rounded-[2.5rem] bg-black relative p-4"
        >
          <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mb-4" />
          <div className="space-y-4">
            <div className="w-full h-12 rounded-xl bg-primary/10" />
            <div className="w-full h-12 rounded-xl bg-white/5" />
            <div className="w-full h-12 rounded-xl bg-white/5" />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full" />
        </motion.div>
      </div>
    )
  },
  {
    title: "Motion Design",
    desc: "Bringing brands to life with high-impact animations and motion graphics.",
    items: ["UI Animation", "Explainer Videos", "3D Motion", "Micro-interactions"],
    icon: PlayCircle,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 rounded-full border border-dashed border-primary/30 flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 bg-primary rounded-full"
          />
        </motion.div>
      </div>
    )
  },
  {
    title: "Personal Branding",
    desc: "Defining and elevating individual professional identities in the digital space.",
    items: ["Portfolio Sites", "Social Strategy", "Content Curation", "Resume Growth"],
    icon: UserCircle,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-48 h-48 glass-card rounded-full border-primary/20 flex flex-col items-center justify-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20" />
          <div className="space-y-2 text-center">
            <div className="w-24 h-2 bg-white/20 rounded-full" />
            <div className="w-16 h-2 bg-white/10 rounded-full mx-auto" />
          </div>
        </motion.div>
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
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 uppercase">Our Services</h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-medium">
              We provide end-to-end digital solutions that help brands scale across the modern web.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 md:gap-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">{service.title}</h2>
                    <p className="text-xl text-white/50 leading-relaxed font-medium max-w-xl">
                      {service.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-white/60 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-primary hover:border-primary transition-all transition-duration-300"
                  >
                    Get Inquiry
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="flex-1 w-full aspect-square md:aspect-video rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center justify-center p-6 md:p-12 overflow-hidden relative">
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
