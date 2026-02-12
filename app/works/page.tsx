"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturesHero } from "@/components/features-hero"
import { WhatWeDo } from "@/components/what-we-do"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { ConnectForm } from "@/components/connect-form"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

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

  return (
    <main className="min-h-screen text-white selection:bg-primary selection:text-black">
      <Header />

      <FeaturesHero />

      {/* Moved Portfolio Intro Text */}
      <section className="py-24 px-6 text-center border-b border-white/5 relative z-10">
        <AnimatedText className="container mx-auto max-w-4xl space-y-8">
          <span className="text-primary font-michroma text-[10px] tracking-[0.4em] uppercase border border-primary/20 px-6 py-2 rounded-full">Premium Portfolio</span>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-michroma uppercase leading-[0.9]">
            Selected <br /> <span className="font-serif italic text-primary">Works Showcase</span>.
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Explore our curated collection of high-performance digital ecosystems and cinematic brand identities.
          </p>
        </AnimatedText>
      </section>

      {/* Services List with Images */}
      <WhatWeDo />

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="group relative space-y-8">
                <div className="aspect-[4/5] md:aspect-[1.4] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white/5 border border-white/5 relative group/img shadow-2xl hover:shadow-primary/20 transition-all duration-700">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ExternalLink className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="absolute top-8 left-8 text-[10px] font-michroma text-white/40 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                    {project.num}
                  </div>
                </div>

                <div className="space-y-6 px-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-michroma uppercase tracking-widest text-primary font-bold">
                      {project.category}
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>

                  <h3 className="text-2xl md:text-5xl font-michroma uppercase leading-none group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[11px] font-michroma uppercase tracking-widest text-white/40 leading-relaxed max-w-md">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="text-[9px] font-michroma uppercase border border-white/10 px-4 py-1.5 rounded-full text-white/20 group-hover:text-white transition-colors hover:border-primary/50 cursor-pointer">
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

      <Process />
      <Testimonials />
      <ConnectForm />

      <Footer />
    </main>
  )
}
