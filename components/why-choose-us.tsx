"use client"

import { Shield, Sparkles, Target, Users, ArrowUpRight } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import Link from "next/link"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Reliability",
      desc: "We build stable, production-grade systems designed to handle real-world demands from day one.",
    },
    {
      icon: Target,
      title: "Precision",
      desc: "Every pixel and every line of code is meticulously crafted with no shortcuts or compromises.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      desc: "We stay ahead of market trends and bring cutting-edge solutions to every project.",
    },
    {
      icon: Users,
      title: "Strategy",
      desc: "We align design, engineering, and business goals for sustainable long-term growth.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedText className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
              Built on{" "}
              <span className="font-serif italic font-normal text-accent">trust & results.</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
          >
            About the Studio
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </AnimatedText>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <AnimatedSection delay={i * 0.08} key={i}>
              <div className="group p-8 rounded-xl border border-border bg-background hover:border-foreground/20 transition-all duration-300 h-full flex flex-col gap-6">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <reason.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-heading font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
