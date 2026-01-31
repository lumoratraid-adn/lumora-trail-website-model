"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { ShieldCheck, Cpu, Lightbulb, Users, Search, Layout, Code, Palette, PlayCircle, Instagram, Twitter, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"

const specialties = [
  {
    title: "Website & Software Development",
    desc: "Engineering high-performance web applications and custom software solutions designed for global scale.",
    icon: Code,
  },
  {
    title: "UI / UX Design & Figma Projects",
    desc: "Crafting intuitive, user-centric interfaces through meticulous research and precision design systems.",
    icon: Layout,
  },
  {
    title: "Branding, Logo & Posters",
    desc: "Developing powerful visual identities and marketing assets that resonate with your target audience.",
    icon: Palette,
  },
  {
    title: "Animations & Creative Design",
    desc: "Bringing stories to life with high-impact motion graphics and innovative creative storytelling.",
    icon: PlayCircle,
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
            <h1 className="text-4xl md:text-8xl font-condensed font-bold tracking-tight text-white uppercase leading-[0.9]">
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
            <h2 className="text-xl md:text-3xl font-condensed font-bold text-white uppercase tracking-wider">Who We Are</h2>
            <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {specialties.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 sm:p-10 rounded-2xl sm:rounded-[2rem] flex flex-col gap-3 sm:gap-6 group hover:border-primary/20 transition-all h-full"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-sm sm:text-2xl font-bold text-white uppercase tracking-tight font-condensed leading-none">{item.title}</h3>
                    <p className="text-white/40 text-[10px] sm:text-lg font-medium leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">{item.desc}</p>
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
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-6xl font-condensed font-bold text-white uppercase tracking-tight">
              Our <span className="text-primary italic">Philosophy</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-condensed">{item.title}</h3>
                    <p className="text-white/40 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social & Contact Section */}
      <section className="section-spacing relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-condensed font-bold text-white uppercase tracking-tight leading-none">
                Let&apos;s Build <br />
                <span className="text-primary italic">Something Great Together.</span>
              </h2>
              <div className="space-y-4">
                <a href="mailto:lumoratraid@gmail.com" className="flex items-center gap-4 text-xl text-white/60 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  lumoratraid@gmail.com
                </a>
                <a href="tel:+919947878418" className="flex items-center gap-4 text-xl text-white/60 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  +91 99478 78418
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Instagram", icon: Instagram, href: "https://instagram.com/lumoratriad" },
                { name: "Twitter", icon: Twitter, href: "#" },
                { name: "LinkedIn", icon: Linkedin, href: "#" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-primary/10 transition-all border border-white/5"
                >
                  <social.icon className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black uppercase text-white/20 group-hover:text-white tracking-widest">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
