"use client"

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import { CheckCircle } from "lucide-react"

export function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We deep-dive into your goals, audience, and market landscape to define a winning strategy.",
      details: ["Brand DNA analysis", "Competitor research", "Goal-setting workshop"],
    },
    {
      num: "02",
      title: "Architecture",
      desc: "Blueprints come to life -- wireframes, design systems, and technical foundations are built.",
      details: ["Wireframes & prototypes", "Design system creation", "Tech stack planning"],
    },
    {
      num: "03",
      title: "Build & Refine",
      desc: "Iterative development with continuous feedback -- pixel-perfect design meets clean code.",
      details: ["Sprint-based development", "Design QA & testing", "Performance optimization"],
    },
    {
      num: "04",
      title: "Launch & Grow",
      desc: "Production deployment with integrity checks and ongoing support for continued success.",
      details: ["Production deployment", "SEO & speed audit", "Post-launch monitoring"],
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedText className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
              How we{" "}
              <span className="font-serif italic font-normal text-accent">work.</span>
            </h2>
          </div>
          <p className="lg:max-w-xs text-muted-foreground leading-relaxed">
            A disciplined process that blends engineering precision with creative vision.
          </p>
        </AnimatedText>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <AnimatedSection delay={i * 0.08} key={i}>
              <div className="group p-8 rounded-xl border border-border bg-background hover:border-foreground/20 transition-all duration-300 h-full flex flex-col">
                {/* Number + indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-heading font-semibold text-muted-foreground/15 group-hover:text-accent/20 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent transition-colors" />
                </div>

                <div className="space-y-3 mb-8">
                  <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>

                {/* Checklist */}
                <div className="space-y-2.5 pt-6 border-t border-border mt-auto">
                  {step.details.map((d) => (
                    <div key={d} className="flex items-center gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-accent transition-colors shrink-0" />
                      <span className="text-xs text-muted-foreground">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
