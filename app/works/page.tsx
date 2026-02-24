"use client"

import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import { ConnectForm } from "@/components/connect-form"

export default function WorksPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web & Software",
      desc: "Architecting a high-performance retail environment with structural integrity.",
      image: "/modern-ecommerce-website.png",
      tech: ["Next.js", "Architecture", "Engineering"],
      num: "01"
    },
    {
      title: "Portfolio Website",
      category: "UI / UX Design",
      desc: "Minimalist portfolio showcasing creative work through precision grids.",
      image: "/minimal-portfolio-website.png",
      tech: ["Design", "Ecosystem", "React"],
      num: "02"
    },
    {
      title: "Restaurant Dashboard",
      category: "Software Dev",
      desc: "Scalable order management system with real-time analytics layer.",
      image: "/restaurant-admin-dashboard.jpg",
      tech: ["Dashboard", "Consulting", "Auth"],
      num: "03"
    },
    {
      title: "Booking Platform",
      category: "Web & Software",
      desc: "Reservation system with integrated high-fidelity payment processing.",
      image: "/booking-platform-interface.jpg",
      tech: ["Product", "Native", "Scaling"],
      num: "04"
    }
  ]

  const processSteps = [
    { number: "01", name: "Discover", desc: "We dive deep into your goals, business landscape, and user needs to create a strategic roadmap." },
    { number: "02", name: "Design & Build", desc: "Our experts craft intuitive interfaces and engineer scalable software using modern tools and clean code." },
    { number: "03", name: "Deliver", desc: "We launch, optimize, and provide ongoing support ensuring your digital product achieves lasting impact." },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <AnimatedText className="space-y-4">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight tracking-tight text-balance">
                Selected{" "}
                <span className="font-serif italic font-normal text-accent">Works.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Explore our curated collection of high-performance digital ecosystems and compelling brand identities.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-20 border-t border-border">
        <div className="container mx-auto pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="group space-y-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary border border-border relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ExternalLink className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 text-xs font-heading font-semibold text-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border">
                    {project.num}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1.5 rounded-md bg-secondary border border-border text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-secondary border-t border-border">
        <div className="container mx-auto">
          <AnimatedText className="text-center mb-16 space-y-4">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
              How we{" "}
              <span className="font-serif italic font-normal text-accent">work.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A systematic approach to engineering high-performance digital solutions.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="group p-8 md:p-10 rounded-xl bg-background border border-border hover:border-foreground/20 transition-all duration-300 text-center h-full flex flex-col items-center">
                  <span className="text-xs font-heading font-semibold text-accent mb-4 px-3 py-1 rounded-md bg-accent/10">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background border-t border-border">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <AnimatedText className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-background leading-tight tracking-tight">
                Have a project in{" "}
                <span className="font-serif italic font-normal text-accent">mind?</span>
              </h2>
              <p className="text-lg text-background/60 leading-relaxed">
                {"We'd love to hear about it. Let's discuss how we can bring your vision to life."}
              </p>
            </AnimatedText>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-background/90 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Connect Form */}
      <ConnectForm />
    </main>
  )
}
