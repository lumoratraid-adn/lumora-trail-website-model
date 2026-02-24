"use client"

import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-10">
          <AnimatedText className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-background/20 text-xs font-medium text-background/60">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Ready to start?
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-background leading-tight tracking-tight">
              Build your digital{" "}
              <span className="font-serif italic font-normal text-accent">legacy.</span>
            </h2>

            <p className="text-lg text-background/50 max-w-xl mx-auto leading-relaxed">
              Transforming visionary concepts into high-performance digital products. Let's build something you're proud of.
            </p>
          </AnimatedText>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-7 py-3.5 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-background/90 transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:lumoratriad@gmail.com"
              className="group flex items-center gap-3 px-7 py-3.5 border border-background/20 text-background/70 rounded-lg text-sm font-medium hover:text-background hover:border-background/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us Directly
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 border-t border-background/10">
            {["50+ Projects Delivered", "7 Service Domains", "Response within 24h"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span className="text-xs text-background/40">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
