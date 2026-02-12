"use client"

import {
    ArrowLeft, ArrowRight, HelpCircle, Sparkles, TrendingUp,
    CheckCircle2, Globe, Layout, Palette,
    Search, Smartphone, Megaphone, Settings, Code, PlayCircle
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Footer } from "@/components/footer"
import { ConnectForm } from "@/components/connect-form"

const serviceDetails = {
    "website-software-development": {
        title: "Website & Software Development",
        icon: Code,
        what: "We build fast, secure, and scalable websites and custom software that grow with your business.",
        why: "Custom software and high-performance websites are the backbone of modern business operations.",
        how: [
            "Business websites",
            "Custom web applications",
            "Admin panels & dashboards",
            "Online stores (E-commerce)",
            "Speed & performance improvement",
            "Secure data & hosting setup"
        ],
        benefits: [
            "Scalable Architecture",
            "High Performance",
            "Secure Data",
            "Custom Functionality",
            "Business Growth"
        ],
        who: [
            "Startups",
            "Enterprises",
            "E-commerce",
            "SaaS Companies"
        ]
    },
    "ui-ux-design-figma": {
        title: "UI / UX Design & Figma Projects",
        icon: Layout,
        what: "We design clean, user-friendly interfaces and smooth experiences that make your digital products easy to use.",
        why: "Great design reduces friction and increases user satisfaction, leading to higher retention and conversion.",
        how: [
            "User research & planning",
            "Wireframes & page layouts",
            "Modern UI design",
            "User experience improvement",
            "Clickable prototypes",
            "Developer-ready design files"
        ],
        benefits: [
            "User Satisfaction",
            "Higher Conversion",
            "Brand Consistency",
            "Reduced Dev Time",
            "Clear User Flows"
        ],
        who: [
            "Product Teams",
            "Mobile Apps",
            "Web Platforms",
            "Digital Brands"
        ]
    },
    "branding-digital-marketing": {
        title: "Branding & Digital Marketing",
        icon: Palette,
        what: "We create strong brand identities and marketing designs that help your business stand out and build trust.",
        why: "A cohesive brand identity combined with strategic marketing is essential for market differentiation.",
        how: [
            "Logo design",
            "Brand colors & fonts",
            "Brand guidelines",
            "Posters & ad designs",
            "Social media creatives",
            "Digital marketing support"
        ],
        benefits: [
            "Brand Recognition",
            "Market Trust",
            "Customer Loyalty",
            "Visual Impact",
            "Consistent Messaging"
        ],
        who: [
            "New Ventures",
            "Rebranding Companies",
            "Marketing Teams",
            "Social Brands"
        ]
    },
    "seo-online-growth": {
        title: "SEO & Online Growth",
        icon: Search,
        what: "We improve your website’s visibility on Google and help you reach the right audience organically.",
        why: "Organic visibility builds long-term authority and reduces customer acquisition costs.",
        how: [
            "Google SEO setup",
            "Keyword optimization",
            "Website SEO improvement",
            "Content optimization",
            "Performance tracking"
        ],
        benefits: [
            "Organic Traffic",
            "Higher Rankings",
            "Targeted Audience",
            "Long-term ROI",
            "Brand Authority"
        ],
        who: [
            "Local Businesses",
            "Content Publishers",
            "Service Providers",
            "E-commerce Stores"
        ]
    },
    "website-redesign-maintenance": {
        title: "Website Redesign & Maintenance",
        icon: Settings,
        what: "We upgrade outdated websites and keep them running smoothly, securely, and efficiently.",
        why: "Continuous maintenance ensures security, performance, and relevance in a fast-changing digital landscape.",
        how: [
            "Website redesign & revamp",
            "Mobile-friendly updates",
            "Speed & security improvements",
            "Regular updates & bug fixes",
            "Backup & monitoring"
        ],
        benefits: [
            "Improved Security",
            "Better Performance",
            "Modern Look",
            "Reduced Downtime",
            "Peace of Mind"
        ],
        who: [
            "Established Sites",
            "Legacy Systems",
            "Growing Brands",
            "Corporate Sites"
        ]
    },
    "landing-pages-lead-gen": {
        title: "Landing Pages & Lead Generation",
        icon: Megaphone,
        what: "We design focused pages that turn visitors into leads and customers.",
        why: "Targeted landing pages are the most effective tool for specific campaign conversions.",
        how: [
            "Landing page design",
            "Lead capture forms",
            "Product launch pages",
            "Conversion-focused layouts",
            "Contact & inquiry pages"
        ],
        benefits: [
            "Higher Conversion Rates",
            "Qualified Leads",
            "Targeted Messaging",
            "Better Ad ROI",
            "User Engagement"
        ],
        who: [
            "Advertisers",
            "Product Launches",
            "Service Offers",
            "Event Promoters"
        ]
    },
    "animations-creative-design": {
        title: "Animations & Creative Design",
        icon: PlayCircle,
        what: "We create engaging animations and visuals that bring your brand to life and capture attention.",
        why: "Motion graphics capture attention faster and explain complex value propositions more effectively than static text.",
        how: [
            "Website animations",
            "Logo animations",
            "Product explainer videos",
            "Social media motion videos",
            "Interactive visuals"
        ],
        benefits: [
            "Higher Engagement",
            "Visual Storytelling",
            "Brand Personality",
            "Viral Potential",
            "Clear Communication"
        ],
        who: [
            "Tech Products",
            "Social Media",
            "Digital Ads",
            "Creative Brands"
        ]
    }
}

export default function ServiceDetailPage() {
    const params = useParams()
    const slug = params.slug as string

    // Direct Icon mapping for the 7 services to avoid dynamic rendering issues
    const icons: Record<string, any> = {
        "website-software-development": Code,
        "ui-ux-design-figma": Layout,
        "branding-digital-marketing": Palette,
        "seo-online-growth": Search,
        "website-redesign-maintenance": Settings,
        "landing-pages-lead-gen": Megaphone,
        "animations-creative-design": PlayCircle
    }

    const service = serviceDetails[slug as keyof typeof serviceDetails]
    const Icon = icons[slug] || Globe

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0E0F13] text-white">
                <div className="text-center space-y-8 p-8 md:p-12 bg-white/5 rounded-[2rem] md:rounded-[4rem] border border-white/5">
                    <h1 className="text-5xl font-michroma uppercase">Domain Not Found</h1>
                    <Link href="/services" className="inline-block px-10 py-5 bg-primary text-black rounded-2xl font-michroma text-[10px] uppercase tracking-widest">Return to Ecosystem</Link>
                </div>
            </div>
        )
    }

    return (
        <main className="relative pt-32 min-h-screen text-white">
            {/* Architectural Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 mb-32 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-24 space-y-16">
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-4 text-[10px] font-michroma uppercase tracking-[0.4em] text-white/40 hover:text-primary transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
                        Back to Domains
                    </Link>

                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center border border-white/5">
                                <Icon className="w-10 h-10 text-primary" />
                            </div>
                            <span className="text-[10px] font-michroma uppercase tracking-[0.6em] text-primary">Core Expertise</span>
                        </div>
                        <h1 className="text-[clamp(2.5rem,8vw,8vw)] font-michroma font-normal text-white uppercase tracking-tight leading-[0.85]">
                            {service.title}
                        </h1>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* What & Why */}
                    <div className="space-y-12">
                        <div className="p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] bg-white/5 border border-white/5 space-y-10 group hover:bg-white hover:text-black transition-all duration-700">
                            <div className="flex items-center gap-4 pb-6 border-b border-current opacity-10">
                                <HelpCircle className="w-6 h-6 text-primary" />
                                <span className="text-[10px] font-michroma uppercase tracking-widest">Definition</span>
                            </div>
                            <p className="text-xl md:text-3xl font-medium leading-[1.15] italic">
                                {service.what}
                            </p>
                        </div>

                        <div className="p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] bg-white text-black border border-white space-y-10 group hover:bg-primary hover:text-white transition-all duration-700">
                            <div className="flex items-center gap-4 pb-6 border-b border-current opacity-10">
                                <Sparkles className="w-6 h-6 text-primary" />
                                <span className="text-[10px] font-michroma uppercase tracking-widest">Justification</span>
                            </div>
                            <p className="text-xl md:text-3xl font-medium leading-[1.15] italic">
                                {service.why}
                            </p>
                        </div>
                    </div>

                    {/* How & Benefits */}
                    <div className="space-y-12">
                        <div className="p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] bg-white/5 border border-white/5 space-y-12">
                            <div className="flex items-center gap-4">
                                <TrendingUp className="w-6 h-6 text-primary" />
                                <span className="text-[10px] font-michroma uppercase tracking-widest">Advantage</span>
                            </div>
                            <div className="space-y-6">
                                {service.how.map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                                        <span className="text-[11px] font-michroma uppercase tracking-widest text-white/60 transition-colors group-hover:text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-white/5 border border-white/5 space-y-8">
                                <span className="text-[10px] font-michroma uppercase tracking-widest text-primary">Benefits</span>
                                <div className="space-y-4">
                                    {service.benefits.map((item, i) => (
                                        <p key={i} className="text-[10px] font-michroma uppercase tracking-widest text-white/40 italic">{item}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-white text-black space-y-8 shadow-2xl">
                                <span className="text-[10px] font-michroma uppercase tracking-widest text-primary">Audience</span>
                                <div className="space-y-4">
                                    {service.who.map((item, i) => (
                                        <p key={i} className="text-[10px] font-michroma uppercase tracking-widest opacity-60 italic">{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Unified CTA */}
                <ConnectForm defaultService={service.title} />
            </div>

            <Footer />
        </main>
    )
}
