"use client"

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <AnimatedText className="space-y-6">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight text-balance">
              Friends. Founders.{" "}
              <span className="font-serif italic font-normal text-accent">Innovators.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              We started as a team of friends with a shared dream: to build a unique space in the tech world where everything is possible.
            </p>
          </AnimatedText>

          {/* Right - Quote Card */}
          <AnimatedSection delay={0.2}>
            <div className="p-8 md:p-12 rounded-xl bg-secondary border border-border relative group hover:border-foreground/20 transition-all duration-300">
              <Quote className="w-8 h-8 text-accent/20 mb-6" />

              <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground mb-8">
                "Lumora Triad began as a circle of friends with a single dream: to carve out our own space in the tech landscape. We built this studio to prove that everything is possible when you're in the right group of innovators."
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center text-background font-heading font-semibold text-sm">
                  LT
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Lumora Triad</h3>
                  <p className="text-xs text-muted-foreground">Founding Team</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
