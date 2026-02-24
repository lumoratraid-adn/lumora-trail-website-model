"use client"

import { Code, Palette, TrendingUp, Settings, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const pillars = [
  {
    number: "01",
    label: "Build",
    icon: Code,
    tagline: "Software & Web Development",
    desc: "Custom websites, web applications, and e-commerce platforms engineered for performance and scale.",
    services: ["Business Websites", "E-Commerce", "Web Apps", "Custom Software"],
  },
  {
    number: "02",
    label: "Design",
    icon: Palette,
    tagline: "UI/UX & Brand Identity",
    desc: "User-centric interfaces and complete visual identities that build trust and command attention.",
    services: ["UI/UX Design", "Logo & Branding", "Creative Graphics", "Motion Design"],
  },
  {
    number: "03",
    label: "Grow",
    icon: TrendingUp,
    tagline: "SEO & Lead Generation",
    desc: "Data-driven strategies to scale your audience, improve search rankings, and boost conversions.",
    services: ["SEO Optimization", "Lead Generation", "Traffic Growth", "Conversion Tuning"],
  },
  {
    number: "04",
    label: "Support",
    icon: Settings,
    tagline: "Maintenance & Security",
    desc: "Ongoing care, security monitoring, and performance tuning to keep your digital assets at peak.",
    services: ["Maintenance", "Security", "Speed Optimization", "Tech Support"],
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-border">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedText className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
              Four pillars of{" "}
              <span className="font-serif italic font-normal text-accent">studio power.</span>
            </h2>
          </div>
          <p className="lg:max-w-sm text-muted-foreground leading-relaxed">
            A comprehensive ecosystem of services to architect, scale, and protect your digital presence.
          </p>
        </AnimatedText>

        {/* Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.label} delay={i * 0.08}>
              <div className="group p-8 md:p-10 rounded-xl border border-border bg-background hover:border-foreground/20 transition-all duration-300 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <pillar.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">{pillar.label}</h3>
                      <p className="text-xs text-muted-foreground">{pillar.tagline}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground/40 font-heading">{pillar.number}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pillar.desc}</p>

                {/* Service tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {pillar.services.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-md bg-secondary text-xs text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Row */}
        <AnimatedSection delay={0.4} className="mt-5">
          <Link
            href="/services"
            className="group flex items-center justify-between p-8 rounded-xl border border-border bg-background hover:border-foreground/20 transition-all duration-300"
          >
            <div>
              <p className="text-xs text-muted-foreground mb-1">Explore all capabilities</p>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                View Full Service Offering
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all shrink-0">
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
            </div>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
