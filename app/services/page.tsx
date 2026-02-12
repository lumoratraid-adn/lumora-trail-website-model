"use client"

import { useState } from "react"
import { Globe, Layout, Palette, ArrowRight, Search, Code, Zap, Smartphone, Megaphone, Settings, PlayCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const services = [
  {
    id: "website-software-development",
    slug: "website-software-development",
    title: "Website & Software Development",
    solution: "We build fast, secure, and scalable websites and custom software that grow with your business.",
    items: ["Business websites", "Custom web applications", "Admin panels & dashboards", "Online stores (E-commerce)", "Speed & performance improvement", "Secure data & hosting setup"],
    icon: Code,
    visual: (
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div className="w-full max-w-sm bg-white/5 rounded-[2.5rem] border border-white/5 p-8 space-y-6">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <div className="h-4 bg-primary/20 rounded-full w-3/4" />
          <div className="h-4 bg-white/5 rounded-full w-full" />
          <div className="h-24 bg-white/5 rounded-3xl border border-white/5" />
        </div>
      </div>
    )
  },
  {
    id: "ui-ux-design-figma",
    slug: "ui-ux-design-figma",
    title: "UI / UX Design & Figma Projects",
    solution: "We design clean, user-friendly interfaces and smooth experiences that make your digital products easy to use.",
    items: ["User research & planning", "Wireframes & page layouts", "Modern UI design", "User experience improvement", "Clickable prototypes", "Developer-ready design files"],
    icon: Layout,
    visual: (
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-[2rem] p-6 space-y-4 aspect-square flex flex-col justify-end">
              <div className="w-12 h-1 bg-primary/40 rounded-full" />
              <div className="h-2 w-full bg-white/10 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "branding-digital-marketing",
    slug: "branding-digital-marketing",
    title: "Branding & Digital Marketing",
    solution: "We create strong brand identities and marketing designs that help your business stand out and build trust.",
    items: ["Logo design", "Brand colors & fonts", "Brand guidelines", "Posters & ad designs", "Social media creatives", "Digital marketing support"],
    icon: Palette,
    visual: (
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border-[20px] border-primary/10 flex items-center justify-center relative">
          <div className="w-24 h-24 rounded-full bg-primary shadow-2xl shadow-primary/40 flex items-center justify-center">
            <Palette className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-[8px] font-michroma rounded-full uppercase">Creative</div>
        </div>
      </div>
    )
  },
  {
    id: "seo-online-growth",
    slug: "seo-online-growth",
    title: "SEO & Online Growth",
    solution: "We improve your website’s visibility on Google and help you reach the right audience organically.",
    items: ["Google SEO setup", "Keyword optimization", "Website SEO improvement", "Content optimization", "Performance tracking"],
    icon: Search,
    visual: (
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div className="w-full max-w-sm p-10 bg-white/5 rounded-[3rem] border border-white/5 space-y-8">
          <div className="flex items-end gap-3 h-24">
            {[30, 70, 40, 90, 60, 100].map((h, i) => (
              <div key={i} className={`flex-1 rounded-full ${i === 5 ? 'bg-primary' : 'bg-primary/20'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: "website-redesign-maintenance",
    slug: "website-redesign-maintenance",
    title: "Website Redesign & Maintenance",
    solution: "We upgrade outdated websites and keep them running smoothly, securely, and efficiently.",
    items: ["Website redesign & revamp", "Mobile-friendly updates", "Speed & security improvements", "Regular updates & bug fixes", "Backup & monitoring"],
    icon: Settings,
    visual: (
      <div className="relative w-full h-full p-8 flex items-center justify-center text-center">
        <div className="space-y-6">
          <div className="flex justify-center -space-x-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center">
                <Settings className={`w-6 h-6 ${i === 2 ? 'text-primary animate-spin-slow' : 'text-primary/40'}`} />
              </div>
            ))}
          </div>
          <div className="px-6 py-2 bg-white/5 rounded-full text-[10px] font-michroma uppercase tracking-widest text-primary">Systems Active</div>
        </div>
      </div>
    )
  },
  {
    id: "landing-pages-lead-gen",
    slug: "landing-pages-lead-gen",
    title: "Landing Pages & Lead Generation",
    solution: "We design focused pages that turn visitors into leads and customers.",
    items: ["Landing page design", "Lead capture forms", "Product launch pages", "Conversion-focused layouts", "Contact & inquiry pages"],
    icon: Megaphone,
    visual: (
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div className="relative">
          <div className="w-40 h-40 bg-primary/10 rounded-[2rem] border border-primary/20 flex items-center justify-center">
            <Megaphone className="w-16 h-16 text-primary" />
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-black">
            <Zap className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: "animations-creative-design",
    slug: "animations-creative-design",
    title: "Animations & Creative Design",
    solution: "We create engaging animations and visuals that bring your brand to life and capture attention.",
    items: ["Website animations", "Logo animations", "Product explainer videos", "Social media motion videos", "Interactive visuals"],
    icon: PlayCircle,
    visual: (
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div className="w-32 h-64 bg-white/5 rounded-[2.5rem] border-[4px] border-white/20 p-4 relative shadow-2xl">
          <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-4" />
          <div className="space-y-4">
            <div className="h-2 w-3/4 bg-primary/40 rounded-full" />
            <div className="h-16 w-full bg-primary/10 rounded-2xl" />
            <div className="h-2 w-full bg-white/20 rounded-full" />
            <div className="h-2 w-1/2 bg-white/20 rounded-full" />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/20" />
        </div>
      </div>
    )
  }
]

export default function ServicesPage() {
  return (
    <main className="relative pt-44">
      <section className="py-24 md:py-48">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32 space-y-12">
            <AnimatedText delay={0.1}>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-primary/30" />
                <span className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Domains</span>
                <div className="w-16 h-px bg-primary/30" />
              </div>
              <h1 className="text-[clamp(3rem,12vw,10rem)] font-michroma font-normal text-white uppercase leading-[0.85] tracking-tight mt-6">
                Our <span className="font-serif italic text-primary lowercase tracking-tighter">Services</span>.
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <p className="text-xl md:text-3xl text-white/40 max-w-4xl mx-auto leading-relaxed font-medium italic">
                Architecting high-performance digital ecosystems through disciplined architecture.
              </p>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 gap-24 md:gap-40">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                id={service.id}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-10 w-full">
                  <div className="space-y-6 md:space-y-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 flex items-center justify-center group border border-white/10">
                      <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform group-hover:scale-110" />
                    </div>
                    <h2 className="text-4xl md:text-6xl xl:text-8xl font-michroma text-white leading-[0.9] tracking-tight uppercase">
                      {service.title}
                    </h2>
                    <p className="text-lg md:text-xl xl:text-2xl text-white/60 font-medium leading-relaxed max-w-xl italic">
                      {service.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 py-10 border-t border-b border-white/5">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                        <span className="text-[10px] md:text-[11px] font-michroma uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-10 py-6 bg-primary text-white rounded-2xl font-michroma text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-4 group"
                    >
                      Start Project
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full sm:w-auto px-10 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-michroma text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-4 group"
                    >
                      Details
                    </Link>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full aspect-square md:aspect-video rounded-[2rem] md:rounded-[4rem] bg-white/5 overflow-hidden relative border border-white/5">
                  {service.visual}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Final CTA */}
          <AnimatedSection className="mt-24 md:mt-48 p-10 md:p-32 rounded-[2rem] md:rounded-[4rem] bg-white/5 text-white text-center space-y-10 md:space-y-16 relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 space-y-8 md:space-y-12">
              <span className="text-primary font-michroma uppercase tracking-[0.5em] text-[10px]">READY TO BUILD?</span>
              <h2 className="text-[clamp(2.5rem,10vw,10rem)] font-michroma font-normal text-white uppercase leading-[0.85] tracking-tight">
                LET&apos;S <span className="font-serif italic text-primary lowercase tracking-tighter">Work</span>.
              </h2>
              <div className="pt-4 md:pt-8">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-6 md:px-12 md:py-8 bg-primary text-white rounded-2xl md:rounded-3xl font-michroma uppercase tracking-[0.3em] text-[10px] md:text-xs hover:scale-105 transition-all shadow-2xl gap-6 md:gap-8 items-center"
                >
                  Discuss Project
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
