"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Globe, Palette, PlayCircle, ArrowRight, Search, RefreshCw, Target, Code, Cpu, Zap } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

const services = [
  {
    id: "website-web-app-development",
    slug: "website-web-app-development",
    title: "Website & Software Development",
    solution: "We build fast, secure, and scalable websites and custom software that grow with your business.",
    items: ["Business websites", "Custom web applications", "Admin panels & dashboards", "Online stores (E-commerce)", "Speed & performance improvement", "Secure data & hosting setup"],
    icon: Globe,
    visual: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 4, delay: i * 0.1, repeat: Infinity }}
              className="border-[0.5px] border-primary/30"
            />
          ))}
        </div>
        <div className="relative h-full flex items-center justify-center p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="w-full max-w-md bg-[#0E0F13]/80 rounded-2xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>
              <Code className="w-4 h-4 text-primary/40" />
            </div>
            <div className="p-6 font-mono text-xs space-y-3">
              <div className="flex gap-3">
                <span className="text-primary/40">01</span>
                <motion.div animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-full h-4 bg-primary/10 rounded" />
              </div>
              <div className="flex gap-3">
                <span className="text-primary/40">02</span>
                <motion.div animate={{ width: ["0%", "80%"] }} transition={{ duration: 2, repeat: Infinity }} className="h-4 bg-white/5 rounded" />
              </div>
              <div className="flex gap-3">
                <span className="text-primary/40">03</span>
                <motion.div animate={{ width: ["0%", "60%"] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} className="h-4 bg-primary/20 rounded" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI / UX Design & Figma Projects",
    solution: "We design clean, user-friendly interfaces and smooth experiences that make your digital products easy to use.",
    items: ["User research & planning", "Wireframes & page layouts", "Modern UI design", "User experience improvement", "Clickable prototypes", "Developer-ready design files"],
    icon: Layout,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
        </div>
        <div className="relative w-full h-full px-12 py-8 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-4 flex flex-col gap-3 group/ui"
              >
                <div className="w-12 h-2 bg-primary/20 rounded-full" />
                <div className="flex-1 rounded-xl bg-white/5 border border-white/5 overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    className="w-full h-20 bg-gradient-to-b from-primary/10 to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[120%] border border-primary/5 rounded-full pointer-events-none"
          />
        </div>
      </div>
    )
  },
  {
    id: "branding-logo-digital-marketing",
    slug: "branding-logo-digital-marketing",
    title: "Branding, Logo, Poster & Digital Marketing",
    solution: "We create strong brand identities and marketing designs that help your business stand out and build trust.",
    items: ["Logo design", "Brand colors & fonts", "Brand guidelines", "Posters & ad designs", "Social media creatives", "Digital marketing support"],
    icon: Palette,
    visual: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-[80%] h-[80%] bg-primary rounded-full blur-[100px]"
          />
        </div>
        <div className="relative h-full flex items-center justify-center p-8">
          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
            {["#8B5CF6", "#C084FC", "#E879F9", "#F472B6", "#FB7185", "#38BDF8"].map((color, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div
                  className="aspect-square rounded-2xl border border-white/10 shadow-xl overflow-hidden"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                    className="w-full absolute bottom-0"
                    style={{ backgroundColor: color, opacity: 0.3 }}
                  />
                </div>
                <div className="mt-2 text-[8px] font-black text-white/20 text-center uppercase tracking-tighter">{color}</div>
              </motion.div>
            ))}
          </div>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-32 h-32 rounded-full border-2 border-primary/50 flex items-center justify-center bg-[#0E0F13] shadow-[0_0_50px_rgba(139,92,246,0.2)]"
          >
            <Palette className="w-12 h-12 text-primary" />
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "seo-online-growth",
    slug: "seo-online-growth",
    title: "SEO & Online Growth",
    solution: "We improve your website’s visibility on Google and help you reach the right audience organically.",
    items: ["Google SEO setup", "Keyword optimization", "Website SEO improvement", "Content optimization", "Performance tracking"],
    icon: Search,
    visual: (
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              animate={{ scale: [1, 2], opacity: [0.3, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
              className="absolute w-40 h-40 border border-primary/20 rounded-full"
            />
          ))}
        </div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="w-full max-w-sm glass-card p-8 rounded-3xl border-white/10 space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">Performance Metrics</h4>
              <Zap className="w-3 h-3 text-yellow-500 animate-pulse" />
            </div>
            <div className="flex items-end gap-3 h-40">
              {[60, 45, 80, 55, 95, 70, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1, duration: 1, type: "spring" }}
                  className="flex-1 bg-gradient-to-t from-primary/20 via-primary/60 to-primary rounded-full relative group"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/5 border border-white/10 px-2 py-1 rounded text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    +{h * 2}%
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Keywords</div>
                <div className="text-xl font-sans font-bold text-white tracking-tighter">1.2K+</div>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Traffic</div>
                <div className="text-xl font-sans font-bold text-primary tracking-tighter">+245%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "website-redesign-maintenance",
    slug: "website-redesign-maintenance",
    title: "Website Redesign & Maintenance",
    solution: "We upgrade outdated websites and keep them running smoothly, securely, and efficiently.",
    items: ["Website redesign & revamp", "Mobile-friendly updates", "Speed & security improvements", "Regular updates & bug fixes", "Backup & monitoring"],
    icon: RefreshCw,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative w-72 h-72 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 p-8"
          >
            <div className="w-full h-full border border-dashed border-white/10 rounded-full" />
          </motion.div>
          <div className="relative z-10 space-y-4 text-center">
            <div className="relative">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full border border-primary flex items-center justify-center bg-[#0E0F13] shadow-[0_0_50px_rgba(139,92,246,0.3)]"
              >
                <RefreshCw className="w-12 h-12 text-primary" />
              </motion.div>
            </div>
            <div className="p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl inline-block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] font-black tracking-[0.2em] text-white/60">SYSTEMS ACTIVE</span>
              </div>
              <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              animate={{
                rotate: i * 60,
                x: Math.cos((i * 60) * Math.PI / 180) * 120,
                y: Math.sin((i * 60) * Math.PI / 180) * 120,
              }}
              transition={{ delay: i * 0.2 }}
            >
              <Cpu className="w-4 h-4 text-white/10 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "landing-pages-lead-generation",
    slug: "landing-pages-lead-generation",
    title: "Landing Pages & Lead Generation",
    solution: "We design focused pages that turn visitors into leads and customers.",
    items: ["Landing page design", "Lead capture forms", "Product launch pages", "Conversion-focused layouts", "Contact & inquiry pages"],
    icon: Target,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="w-full max-w-sm h-full bg-[#0E0F13] rounded-[3rem] border border-white/10 overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
          <div className="p-8 space-y-8 relative z-10">
            <div className="flex justify-between items-center">
              <div className="w-24 h-4 bg-white/10 rounded-full" />
              <div className="w-8 h-8 rounded-full bg-primary/20" />
            </div>
            <div className="space-y-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                className="h-10 bg-white/5 border border-white/5 rounded-2xl"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ delay: 0.2 }}
                className="h-10 bg-white/5 border border-white/5 rounded-2xl"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.02, backgroundColor: "#9333ea" }}
              className="w-full h-16 bg-primary rounded-2xl flex items-center justify-center text-xs font-black uppercase tracking-[0.3em] shadow-xl shadow-primary/20"
            >
              Get Started Now
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[10px] font-bold text-white/20">
                  {i * 10}K+
                </div>
              ))}
            </div>
          </div>
          <motion.div
            animate={{
              y: [0, 400, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent blur-xl pointer-events-none"
          />
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 right-10 w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center backdrop-blur-2xl"
        >
          <Target className="w-10 h-10 text-primary" />
        </motion.div>
      </div>
    )
  },
  {
    id: "animations-creative",
    slug: "animations-creative",
    title: "Animations & Creative Design",
    solution: "We create engaging animations and visuals that bring your brand to life and capture attention.",
    items: ["Website animations", "Logo animations", "Product explainer videos", "Social media motion videos", "Interactive visuals"],
    icon: PlayCircle,
    visual: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.5, 0.8, 1],
              rotate: [0, 90, 180, 0],
              x: ["-10%", "10%", "-5%", "0%"],
              y: ["-10%", "5%", "10%", "0%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-primary/20 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 0.8, 1.2, 1],
              rotate: [0, -45, 45, 0],
              x: ["10%", "-10%", "5%", "0%"],
              y: ["10%", "-5%", "-10%", "0%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-accent/20 blur-[120px] rounded-full"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="w-40 h-40 rounded-[3rem] border border-white/20 flex items-center justify-center bg-white/[0.02] backdrop-blur-2xl"
            >
              <PlayCircle className="w-20 h-20 text-white" strokeWidth={1} />
            </motion.div>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 3, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ duration: 4, delay: i * 1, repeat: Infinity }}
                className="absolute inset-0 border border-primary rounded-[3rem]"
              />
            ))}
          </div>
          <div className="flex gap-4">
            {["4K", "60FPS", "RENDER"].map(label => (
              <span key={label} className="text-[10px] font-black tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                {label}
              </span>
            ))}
          </div>
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
            className="text-center mb-16 sm:mb-24 px-4"
          >
            <h1 className="text-5xl sm:text-[8vw] md:text-[6.5vw] font-sans font-semibold tracking-[-0.08em] text-white mb-6 uppercase leading-[1] md:leading-[0.8] drop-shadow-sm">
              OUR <span className="text-primary italic">SERVICES.</span>
            </h1>
            <p className="text-sm md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
              We help businesses grow online with simple, reliable, and result-focused digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 md:gap-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 md:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} scroll-mt-32`}
              >
                <div className="flex-1 space-y-8 w-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary relative z-10 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <h2 className="text-3xl md:text-[4vw] font-sans font-semibold text-white uppercase tracking-[-0.06em] leading-tight md:leading-[0.85]">{service.title}</h2>
                    <p className="text-sm md:text-xl text-white/40 font-medium leading-relaxed max-w-xl">
                      {service.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-8 border-t border-white/5 pt-8">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/item:bg-primary transition-all duration-300" />
                        <span className="text-white/60 font-black uppercase tracking-[0.15em] text-[10px] sm:text-xs group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest text-[11px] md:text-xs hover:bg-white/10 transition-all duration-500 shadow-2xl w-full sm:w-auto"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-primary border border-primary rounded-2xl text-white font-black uppercase tracking-widest text-[11px] md:text-xs hover:scale-105 transition-all duration-500 shadow-[0_20px_40px_rgba(139,92,246,0.3)] w-full sm:w-auto"
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-[4/3] md:aspect-video rounded-3xl md:rounded-[3rem] bg-white/[0.02] border border-white/5 overflow-hidden relative group/visual">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-50 group-hover/visual:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 w-full h-full">
                    {service.visual}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-primary/10 via-white/[0.02] to-transparent border border-white/5 text-center space-y-12 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Call to Action</span>
                <h2 className="text-3xl md:text-7xl font-sans font-semibold text-white uppercase tracking-[-0.06em] leading-tight px-4">
                  Ready to <span className="text-primary italic">start?</span>
                </h2>
                <p className="text-white/50 text-sm md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-6">
                  Tell us about your project and we’ll help you build the right solution for your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest text-xs hover:bg-primary hover:border-primary transition-all duration-500 shadow-2xl hover:shadow-primary/20 w-full sm:w-auto justify-center"
                >
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(139,92,246,0.3)] w-full sm:w-auto justify-center"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
