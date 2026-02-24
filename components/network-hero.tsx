"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"

export function NetworkHero() {
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative min-h-[90svh] flex flex-col items-center justify-center pt-20 bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate={startAnimation ? "show" : "hidden"}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={item} className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary text-xs font-medium text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Digital Agency for Visionary Brands
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground leading-[1.05] tracking-tight text-balance"
            >
              We craft digital
              <br />
              experiences that{" "}
              <span className="font-serif italic font-normal text-accent">grow</span>{" "}
              <br className="hidden md:block" />
              businesses.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
            >
              From high-performance websites to compelling brand identities, we partner with ambitious companies to deliver results that matter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-3 px-7 py-3.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="group flex items-center gap-3 px-7 py-3.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
              >
                View Services
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "4", label: "Service Pillars" },
              { value: "24h", label: "Response Time" },
              { value: "2", label: "Global Offices" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
