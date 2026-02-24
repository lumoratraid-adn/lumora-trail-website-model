"use client"

import { Code, Layout, Palette, Search, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const showcaseItems = [
  {
    number: "01",
    category: "Web Development",
    title: "E-Commerce Platform",
    desc: "A high-performance online store with seamless checkout, inventory management, and conversion-optimised storefront.",
    tags: ["Next.js", "Stripe", "Postgres"],
    icon: Code,
  },
  {
    number: "02",
    category: "UI / UX Design",
    title: "Mobile App Design",
    desc: "Clean, user-centric app interface designed in Figma with smooth user flows and developer-ready assets.",
    tags: ["Figma", "Prototyping", "iOS"],
    icon: Layout,
  },
  {
    number: "03",
    category: "Branding",
    title: "Brand Identity System",
    desc: "A complete visual identity from logo design to colour palette, typography, and brand guidelines.",
    tags: ["Logo", "Guidelines", "Print"],
    icon: Palette,
  },
  {
    number: "04",
    category: "SEO & Growth",
    title: "Organic Traffic Growth",
    desc: "Keyword strategy, technical SEO, and content optimisation that delivered measurable ranking improvements.",
    tags: ["SEO", "Analytics", "Content"],
    icon: Search,
  },
]

export function ShowcaseSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-border">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedText className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
              Where vision meets{" "}
              <span className="font-serif italic font-normal text-accent">reality.</span>
            </h2>
          </div>
          <Link
            href="/works"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </AnimatedText>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {showcaseItems.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group p-8 md:p-10 rounded-xl border border-border bg-background hover:border-foreground/20 transition-all duration-300 h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-xs font-heading font-medium text-muted-foreground uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground/30 font-heading">{item.number}</span>
                </div>

                {/* Title + Desc */}
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-md bg-secondary text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="mt-5">
          <Link
            href="/contact"
            className="group flex items-center justify-between p-8 md:p-10 rounded-xl border border-border bg-secondary hover:border-foreground/20 transition-all duration-300"
          >
            <div>
              <p className="text-xs text-muted-foreground mb-1">Ready to create yours?</p>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                Let's build something{" "}
                <span className="font-serif italic font-normal">great.</span>
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all shrink-0">
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
            </div>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
