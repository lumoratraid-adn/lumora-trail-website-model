"use client"

import { Code, Palette, TrendingUp, Settings, CheckCircle2, ArrowUpRight, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const pillars = [
  {
    id: "build",
    number: "01",
    label: "Build",
    icon: Code,
    tagline: "We build the systems your business needs.",
    intro: "From custom platforms to scalable software -- we engineer high-performance foundations.",
    services: [
      { name: "Business Websites", desc: "Clean, professional, and SEO-optimized.", items: ["Landing Pages", "Multi-page Sites"] },
      { name: "E-Commerce", desc: "Robust stores with seamless checkout.", items: ["Stripe Integration", "Order Mgmt"] },
      { name: "Web Applications", desc: "Custom SaaS and complex platforms.", items: ["Dashboards", "User Auth"] },
      { name: "Custom Software", desc: "Bespoke tools for your workflow.", items: ["Automation", "Integrations"] },
    ]
  },
  {
    id: "design",
    number: "02",
    label: "Design",
    icon: Palette,
    tagline: "We make your business look modern.",
    intro: "Visual identities and user interfaces that build trust and command attention.",
    services: [
      { name: "UI / UX Design", desc: "User-friendly and researched layouts.", items: ["Figma Files", "Prototyping"] },
      { name: "Logo & Branding", desc: "Complete visual identity systems.", items: ["Styleguides", "Logo Design"] },
      { name: "Creative Graphics", desc: "Marketing visuals and ad creatives.", items: ["Social Assets", "Banners"] },
      { name: "Animations", desc: "Interactive motion and logo animations.", items: ["Lottie", "Explainer Videos"] },
    ]
  },
  {
    id: "grow",
    number: "03",
    label: "Grow",
    icon: TrendingUp,
    tagline: "We bring more customers to you.",
    intro: "SEO and lead generation strategies designed to scale your audience and conversion.",
    services: [
      { name: "SEO Optimization", desc: "Rank higher on Google organically.", items: ["Keyword Strategy", "Technical SEO"] },
      { name: "Lead Generation", desc: "High-converting landing page funnels.", items: ["Lead Forms", "A/B Testing"] },
      { name: "Traffic Growth", desc: "Scale your monthly visitor count.", items: ["Content Strategy", "Backlinks"] },
      { name: "Conversion Rate", desc: "Turn more browsers into buyers.", items: ["Heatmaps", "Copywriting"] },
    ]
  },
  {
    id: "support",
    number: "04",
    label: "Support",
    icon: Settings,
    tagline: "We take care of it all after launch.",
    intro: "Maintenance, security, and updates to keep your digital asset at peak performance.",
    services: [
      { name: "Maintenance", desc: "Regular care and monitoring.", items: ["Bug Fixes", "Uptime Monitoring"] },
      { name: "Security", desc: "Backups and threat protection.", items: ["Daily Backups", "SSL/WAF"] },
      { name: "Speed Tuning", desc: "Lightning fast load times.", items: ["CDN Setup", "Code Minification"] },
      { name: "Tech Support", desc: "Human help when you need it.", items: ["Consultation", "Fast Fixes"] },
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl space-y-8">
            <AnimatedText className="space-y-4">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight tracking-tight text-balance">
                Tools of{" "}
                <span className="font-serif italic font-normal text-accent">Growth.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A comprehensive ecosystem of services grouped into 4 strategic pillars. No matter the goal, we have the mechanism to build it.
              </p>
            </AnimatedText>

            {/* Quick Links */}
            <AnimatedSection delay={0.1} className="flex flex-wrap gap-3 pt-4">
              {pillars.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="px-4 py-2.5 rounded-lg border border-border bg-secondary text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                >
                  {p.number} {p.label}
                </a>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pillar Sections */}
      <section className="pb-20">
        <div className="container mx-auto space-y-20">
          {pillars.map((pillar, pIdx) => (
            <AnimatedSection key={pillar.id} delay={pIdx * 0.05}>
              <div
                id={pillar.id}
                className="scroll-mt-24 py-16 md:py-20 border-t border-border"
              >
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                  {/* Left: Pillar Info */}
                  <div className="lg:w-1/3 lg:sticky lg:top-28 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <pillar.icon className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground/50 font-heading">{pillar.number}</span>
                        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                          {pillar.label}
                        </h2>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{pillar.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed">{pillar.intro}</p>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Start a Project
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Right: Services Grid */}
                  <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5 w-full">
                    {pillar.services.map((service, sIdx) => (
                      <div
                        key={sIdx}
                        className="group p-8 rounded-xl border border-border bg-background hover:border-foreground/20 transition-all duration-300 h-full flex flex-col"
                      >
                        <h3 className="text-base font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.desc}</p>

                        <div className="mt-auto space-y-2.5 pt-4 border-t border-border">
                          {service.items.map((inc) => (
                            <div key={inc} className="flex items-center gap-3">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent/40 shrink-0" />
                              <span className="text-xs text-muted-foreground">{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 border-t border-border bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <AnimatedText className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
                Ready to build the{" "}
                <span className="font-serif italic font-normal text-accent">future?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No complicated tiers. Just high-performance engineering for businesses that want an edge.
              </p>
            </AnimatedText>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-3 px-7 py-3.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:lumoratriad@gmail.com"
                className="group flex items-center gap-3 px-7 py-3.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Discuss Goals
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
