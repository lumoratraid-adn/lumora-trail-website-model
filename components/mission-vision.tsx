"use client"

import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import { Shield, Zap, Globe, Cpu } from "lucide-react"

const brandValues = [
  { icon: Shield, title: "Precision", desc: "Every pixel engineered with architectural discipline and care." },
  { icon: Zap, title: "Performance", desc: "Optimized systems built for speed and global reach." },
  { icon: Globe, title: "Scale", desc: "Growth-ready foundations built into every project." },
  { icon: Cpu, title: "Innovation", desc: "Modern technology tailored to your business goals." },
]

export function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left - Mission Statement */}
          <AnimatedText className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight text-balance">
                Engineering exceptional digital{" "}
                <span className="font-serif italic font-normal text-accent">experiences.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              We don't just build websites. We architect digital ecosystems that serve as the foundation for brand growth and market leadership.
            </p>
          </AnimatedText>

          {/* Right - Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandValues.map((value, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                className="p-6 rounded-xl bg-background border border-border hover:border-foreground/20 transition-colors duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <value.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-heading font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
