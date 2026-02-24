"use client"

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function Process() {
  const steps = [
    {
      number: "01",
      name: "Discover",
      desc: "We dive deep into your goals, business landscape, and user needs to create a strategic roadmap for success.",
    },
    {
      number: "02",
      name: "Design & Build",
      desc: "Our experts craft intuitive interfaces and engineer scalable software using modern tools and clean code.",
    },
    {
      number: "03",
      name: "Deliver",
      desc: "We launch, optimize, and provide ongoing support ensuring your digital product achieves lasting impact and value.",
    },
  ]

  return (
    <section id="process" className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="container mx-auto">
        <AnimatedText className="text-center mb-16 space-y-4">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
            Our Workflow
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
            The{" "}
            <span className="font-serif italic font-normal text-accent">process.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A systematic approach to engineering high-performance digital solutions.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.15}
              className="group p-8 md:p-10 rounded-xl bg-background border border-border hover:border-foreground/20 transition-all duration-300 text-center flex flex-col items-center"
            >
              <span className="text-xs font-heading font-semibold text-accent mb-6 px-3 py-1.5 rounded-md bg-accent/10">
                Step {step.number}
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                {step.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
