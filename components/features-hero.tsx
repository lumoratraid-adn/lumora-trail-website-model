"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function FeaturesHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-background pt-32 pb-20">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <AnimatedText className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary text-xs font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Digital Solutions
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground leading-[1.05] tracking-tight text-balance">
              Build what customers{" "}
              <span className="font-serif italic font-normal text-accent">need.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Delivering exactly what your audience demands through precision engineering and design.
            </p>
          </AnimatedText>

          <AnimatedSection delay={0.2} className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-7 py-3.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
