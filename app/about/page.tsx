"use client"

import { ArrowRight, Code, Palette, Target, ShieldCheck, Heart } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const pillars = [
  { label: "Build", desc: "Software engineering with disciplined, architecture-first logic.", icon: Code },
  { label: "Design", desc: "Crafting visual identities and high-fidelity user interfaces.", icon: Palette },
  { label: "Grow", desc: "Scaling market authority through SEO and lead-generation strategy.", icon: Target },
  { label: "Support", desc: "Continuous security, speed maintenance, and enterprise support.", icon: ShieldCheck },
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl space-y-8">
            <AnimatedText className="space-y-4">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight tracking-tight text-balance">
                Lumora{" "}
                <span className="font-serif italic font-normal text-accent">Triad.</span>
              </h1>
            </AnimatedText>

            <AnimatedSection delay={0.1} className="grid lg:grid-cols-2 gap-12 pt-8">
              <p className="text-xl text-muted-foreground leading-relaxed italic max-w-lg">
                "We bridge the gap between robust software engineering and high-end design."
              </p>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Founded by a circle of innovators, Lumora Triad was built to prove that digital platforms don't have to choose between performance and aesthetic. We architect legacies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Craft First", "Tech Obsessed", "Growth Driven"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-secondary border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/3 space-y-6">
              <AnimatedText className="space-y-3">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground leading-tight tracking-tight">
                  The Triad{" "}
                  <span className="font-serif italic font-normal text-accent">Logic.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our structural approach to every project, rooted in four core pillars.
                </p>
              </AnimatedText>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5 w-full">
              {pillars.map((p, i) => (
                <AnimatedSection key={p.label} delay={i * 0.08}>
                  <div className="group p-8 rounded-xl border border-border bg-background hover:border-foreground/20 transition-all duration-300 h-full space-y-5">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <p.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                        {p.label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <AnimatedText className="space-y-6">
              <Heart className="w-6 h-6 text-accent/40 mx-auto" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
                Beyond codes &{" "}
                <span className="font-serif italic font-normal text-accent">pixels.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Lumora Triad began as a circle of friends with a shared technical obsession. We didn't want to build just another development agency -- we wanted to build a sanctuary for innovators.
              </p>
            </AnimatedText>

            <div className="flex justify-center pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-4xl font-heading font-semibold text-foreground">2025</p>
                <p className="text-xs text-muted-foreground mt-1">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="py-16 border-t border-border bg-secondary">
        <div className="container mx-auto text-center space-y-8">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
            Follow the Journey
          </span>
          <div className="flex justify-center gap-3">
            {[
              { label: "Instagram", href: "https://instagram.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> },
              { label: "LinkedIn", href: "https://linkedin.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> },
              { label: "X", href: "https://twitter.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
            ].map((svc) => (
              <a
                key={svc.label}
                href={svc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-foreground/20 transition-all"
                aria-label={svc.label}
              >
                {svc.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
