"use client"

import {
  ArrowLeft, HelpCircle, TrendingUp, CheckCircle2,
  Globe, Layout, Palette, Search, Settings, Code, PlayCircle, Megaphone
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ConnectForm } from "@/components/connect-form"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const serviceDetails: Record<string, {
  title: string
  icon: typeof Code
  what: string
  why: string
  how: string[]
  benefits: string[]
  who: string[]
}> = {
  "website-software-development": {
    title: "Website & Software Development",
    icon: Code,
    what: "We build fast, secure, and scalable websites and custom software that grow with your business.",
    why: "Custom software and high-performance websites are the backbone of modern business operations.",
    how: ["Business websites", "Custom web applications", "Admin panels & dashboards", "Online stores (E-commerce)", "Speed & performance improvement", "Secure data & hosting setup"],
    benefits: ["Scalable Architecture", "High Performance", "Secure Data", "Custom Functionality", "Business Growth"],
    who: ["Startups", "Enterprises", "E-commerce", "SaaS Companies"]
  },
  "ui-ux-design-figma": {
    title: "UI / UX Design & Figma Projects",
    icon: Layout,
    what: "We design clean, user-friendly interfaces and smooth experiences that make your digital products easy to use.",
    why: "Great design reduces friction and increases user satisfaction, leading to higher retention and conversion.",
    how: ["User research & planning", "Wireframes & page layouts", "Modern UI design", "User experience improvement", "Clickable prototypes", "Developer-ready design files"],
    benefits: ["User Satisfaction", "Higher Conversion", "Brand Consistency", "Reduced Dev Time", "Clear User Flows"],
    who: ["Product Teams", "Mobile Apps", "Web Platforms", "Digital Brands"]
  },
  "branding-digital-marketing": {
    title: "Branding & Digital Marketing",
    icon: Palette,
    what: "We create strong brand identities and marketing designs that help your business stand out and build trust.",
    why: "A cohesive brand identity combined with strategic marketing is essential for market differentiation.",
    how: ["Logo design", "Brand colors & fonts", "Brand guidelines", "Posters & ad designs", "Social media creatives", "Digital marketing support"],
    benefits: ["Brand Recognition", "Market Trust", "Customer Loyalty", "Visual Impact", "Consistent Messaging"],
    who: ["New Ventures", "Rebranding Companies", "Marketing Teams", "Social Brands"]
  },
  "seo-online-growth": {
    title: "SEO & Online Growth",
    icon: Search,
    what: "We improve your website's visibility on Google and help you reach the right audience organically.",
    why: "Organic visibility builds long-term authority and reduces customer acquisition costs.",
    how: ["Google SEO setup", "Keyword optimization", "Website SEO improvement", "Content optimization", "Performance tracking"],
    benefits: ["Organic Traffic", "Higher Rankings", "Targeted Audience", "Long-term ROI", "Brand Authority"],
    who: ["Local Businesses", "Content Publishers", "Service Providers", "E-commerce Stores"]
  },
  "website-redesign-maintenance": {
    title: "Website Redesign & Maintenance",
    icon: Settings,
    what: "We upgrade outdated websites and keep them running smoothly, securely, and efficiently.",
    why: "Continuous maintenance ensures security, performance, and relevance in a fast-changing digital landscape.",
    how: ["Website redesign & revamp", "Mobile-friendly updates", "Speed & security improvements", "Regular updates & bug fixes", "Backup & monitoring"],
    benefits: ["Improved Security", "Better Performance", "Modern Look", "Reduced Downtime", "Peace of Mind"],
    who: ["Established Sites", "Legacy Systems", "Growing Brands", "Corporate Sites"]
  },
  "landing-pages-lead-gen": {
    title: "Landing Pages & Lead Generation",
    icon: Megaphone,
    what: "We design focused pages that turn visitors into leads and customers.",
    why: "Targeted landing pages are the most effective tool for specific campaign conversions.",
    how: ["Landing page design", "Lead capture forms", "Product launch pages", "Conversion-focused layouts", "Contact & inquiry pages"],
    benefits: ["Higher Conversion Rates", "Qualified Leads", "Targeted Messaging", "Better Ad ROI", "User Engagement"],
    who: ["Advertisers", "Product Launches", "Service Offers", "Event Promoters"]
  },
  "animations-creative-design": {
    title: "Animations & Creative Design",
    icon: PlayCircle,
    what: "We create engaging animations and visuals that bring your brand to life and capture attention.",
    why: "Motion graphics capture attention faster and explain complex value propositions more effectively than static text.",
    how: ["Website animations", "Logo animations", "Product explainer videos", "Social media motion videos", "Interactive visuals"],
    benefits: ["Higher Engagement", "Visual Storytelling", "Brand Personality", "Viral Potential", "Clear Communication"],
    who: ["Tech Products", "Social Media", "Digital Ads", "Creative Brands"]
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = serviceDetails[slug]
  const Icon = service?.icon || Globe

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center space-y-6 p-12 bg-secondary rounded-xl border border-border">
          <h1 className="text-3xl font-heading font-semibold text-foreground">Service Not Found</h1>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="space-y-8 max-w-4xl">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>

            <AnimatedText className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">Core Expertise</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground leading-tight tracking-tight">
                {service.title}
              </h1>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 border-t border-border">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* What & Why */}
            <div className="space-y-8">
              <AnimatedSection>
                <div className="p-8 md:p-10 rounded-xl bg-secondary border border-border space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <HelpCircle className="w-5 h-5 text-accent" />
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">What We Do</span>
                  </div>
                  <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                    {service.what}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="p-8 md:p-10 rounded-xl bg-foreground text-background space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-background/10">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-background/50">Why It Matters</span>
                  </div>
                  <p className="text-lg md:text-xl font-medium text-background leading-relaxed">
                    {service.why}
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* How & Meta */}
            <div className="space-y-8">
              <AnimatedSection delay={0.15}>
                <div className="p-8 md:p-10 rounded-xl bg-background border border-border space-y-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">What We Deliver</span>
                  </div>
                  <div className="space-y-4">
                    {service.how.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full bg-accent/30 group-hover:bg-accent transition-colors shrink-0" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-2 gap-5">
                <AnimatedSection delay={0.2}>
                  <div className="p-6 md:p-8 rounded-xl bg-secondary border border-border space-y-5 h-full">
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-accent">Benefits</span>
                    <div className="space-y-3">
                      {service.benefits.map((item, i) => (
                        <p key={i} className="text-xs text-muted-foreground">{item}</p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.25}>
                  <div className="p-6 md:p-8 rounded-xl bg-foreground text-background space-y-5 h-full">
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-accent">Ideal For</span>
                    <div className="space-y-3">
                      {service.who.map((item, i) => (
                        <p key={i} className="text-xs text-background/60">{item}</p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ConnectForm defaultService={service.title} />
    </main>
  )
}
