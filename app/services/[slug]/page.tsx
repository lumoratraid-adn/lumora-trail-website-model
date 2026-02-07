"use client"

import { motion } from "framer-motion"
import {
    ArrowLeft, ArrowRight, HelpCircle, Sparkles, TrendingUp,
    CheckCircle2, UserCircle, Globe, Layout, Palette,
    Search, RefreshCw, Target, PlayCircle
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Footer } from "@/components/footer"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function BackgroundParticles() {
    const ref = useRef<THREE.Points>(null)
    const [positions, colors] = useMemo(() => {
        const count = 1500
        const pos = new Float32Array(count * 3)
        const col = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50
            col[i * 3] = 0.5 + Math.random() * 0.5
            col[i * 3 + 1] = 0.4 + Math.random() * 0.4
            col[i * 3 + 2] = 1.0
        }
        return [pos, col]
    }, [])

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.0002
            ref.current.rotation.x += 0.0001
        }
    })

    return (
        <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.08}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.4}
            />
        </Points>
    )
}

function ServiceBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[#0E0F13]" />
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.05)_0%,rgba(0,0,0,0)_100%)]" />

            <div className="absolute inset-0 opacity-30">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <BackgroundParticles />
                </Canvas>
            </div>

            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    )
}

const serviceDetails = {
    "website-web-app-development": {
        title: "Website & Web App Development",
        icon: Globe,
        what: "Website & Web App Development means creating a website or online system where customers can learn about your business, contact you, or buy your products and services. We build websites that are fast, secure, and easy to use on mobile, tablet, and desktop.",
        why: "Today, customers first check your website before trusting your business. If your website is slow, outdated, or confusing, they leave. A good website helps you look professional, build trust, reach more customers, and increase sales.",
        how: [
            "Your business is available online 24/7",
            "Customers can easily contact you",
            "Your brand looks reliable and modern",
            "Your work becomes easier with automation",
            "You stay ahead of competitors"
        ],
        benefits: [
            "Fast and smooth website",
            "Mobile-friendly design",
            "Secure customer data",
            "Easy content updates",
            "Long-term support"
        ],
        who: [
            "Startups",
            "Small & medium businesses",
            "Online stores",
            "Service-based companies"
        ]
    },
    "ui-ux-design": {
        title: "UI / UX Design (Website & App Design)",
        icon: Layout,
        what: "UI/UX Design focuses on how your website or app looks and how easy it is for users to use it. Good design helps users understand your website without confusion.",
        why: "If users don’t understand your website, they leave in seconds. Good design keeps users engaged and helps them take action.",
        how: [
            "Users stay longer on your website",
            "Navigation becomes simple",
            "Customers trust your brand more",
            "More inquiries and conversions"
        ],
        benefits: [
            "Clean and modern design",
            "Easy navigation",
            "Better user experience",
            "Professional look"
        ],
        who: [
            "Websites",
            "Mobile apps",
            "Startups",
            "Businesses improving user experience"
        ]
    },
    "branding-logo-digital-marketing": {
        title: "Branding, Logo & Digital Marketing",
        icon: Palette,
        what: "Branding is how your business looks, feels, and is remembered by people. We create logos, brand colors, and designs that make your business look professional and trusted.",
        why: "People trust brands that look professional. A weak brand makes customers unsure about your business.",
        how: [
            "Builds brand trust",
            "Makes your business memorable",
            "Creates a strong first impression",
            "Improves marketing results"
        ],
        benefits: [
            "Professional logo",
            "Clear brand identity",
            "Consistent design everywhere",
            "Better customer recognition"
        ],
        who: [
            "New businesses",
            "Rebranding companies",
            "Startups",
            "Growing brands"
        ]
    },
    "seo-online-growth": {
        title: "SEO & Online Growth",
        icon: Search,
        what: "SEO helps your website appear on Google when people search for your services. It brings real visitors to your website without ads.",
        why: "If customers cannot find you on Google, they choose your competitors. SEO helps your business get noticed online.",
        how: [
            "More website visitors",
            "Better online visibility",
            "Long-term growth",
            "More leads and inquiries"
        ],
        benefits: [
            "Higher Google ranking",
            "Quality traffic",
            "Better website performance",
            "Consistent growth"
        ],
        who: [
            "Local businesses",
            "Service providers",
            "Online businesses"
        ]
    },
    "website-redesign-maintenance": {
        title: "Website Redesign & Maintenance",
        icon: RefreshCw,
        what: "We update old websites and keep them working smoothly. This includes design updates, speed improvement, and regular maintenance.",
        why: "Old websites look unprofessional and load slowly. Regular updates keep your website safe and modern.",
        how: [
            "Better website performance",
            "Modern appearance",
            "Improved security",
            "Less technical problems"
        ],
        benefits: [
            "Updated design",
            "Faster loading",
            "Bug fixes",
            "Regular backups"
        ],
        who: [
            "Businesses with old websites",
            "Growing companies",
            "Online stores"
        ]
    },
    "landing-pages-lead-generation": {
        title: "Landing Pages & Lead Generation",
        icon: Target,
        what: "Landing pages are single pages designed to get inquiries, leads, or sales. They are used for ads, promotions, and product launches.",
        why: "Normal websites don’t always convert visitors into customers. Landing pages are focused and result-driven.",
        how: [
            "Higher conversion rates",
            "More inquiries",
            "Better ad results"
        ],
        benefits: [
            "Clear message",
            "Strong call-to-action",
            "More leads"
        ],
        who: [
            "Marketing campaigns",
            "Product launches",
            "Service promotions"
        ]
    },
    "animations-creative": {
        title: "Animations & Creative",
        icon: PlayCircle,
        what: "Animations are moving visuals that explain your product or message clearly. They help grab attention and keep users engaged.",
        why: "Visual content gets more attention than plain text. Animations make your message easy to understand.",
        how: [
            "Higher engagement",
            "Better communication",
            "Strong brand impression"
        ],
        benefits: [
            "Eye-catching visuals",
            "Better storytelling",
            "Professional presentation"
        ],
        who: [
            "Websites",
            "Social media",
            "Product launches"
        ]
    }
}

export default function ServiceDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const service = serviceDetails[slug as keyof typeof serviceDetails]

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0E0F13] text-white">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-sans font-bold">Service not found</h1>
                    <Link href="/services" className="text-primary hover:underline">Back to Services</Link>
                </div>
            </div>
        )
    }

    return (
        <main className="relative pt-32 min-h-screen">
            <ServiceBackground />

            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 mb-32">
                {/* Header Section - STRETCHED but slightly reduced */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 w-full"
                >
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="space-y-6 flex-1">
                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:text-white transition-all duration-300 font-bold uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-white/10"
                            >
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5" />
                                Back to Services
                            </Link>

                            <div className="space-y-4">
                                <div className="flex items-center gap-5 text-primary">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">Professional Solution</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5.5vw] font-sans font-semibold text-white uppercase tracking-[-0.04em] leading-[1] md:leading-[0.9]">
                                    {service.title}
                                </h1>
                            </div>
                        </div>

                        <div className="hidden xl:block">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="w-32 h-32 border border-dashed border-white/10 rounded-full flex items-center justify-center"
                            >
                                <service.icon className="w-10 h-10 text-primary/10" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Flow - STRETCHED */}
                <div className="space-y-6 w-full">
                    {/* Top Row: What & Why */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <DetailCard
                            icon={HelpCircle}
                            title="What is this service?"
                            content={service.what}
                            variant="glass"
                        />
                        <DetailCard
                            icon={Sparkles}
                            title="Why do you need this?"
                            content={service.why}
                            variant="glass"
                        />
                    </div>

                    {/* How it Improves Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 space-y-10 backdrop-blur-xl"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <TrendingUp className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl md:text-3xl font-sans font-bold text-white uppercase tracking-tight">
                                How this improves <span className="text-primary italic">your business</span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                            {service.how.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group/item hover:scale-[1.01] duration-500">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary transition-colors flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary group-hover/item:text-white" />
                                    </div>
                                    <span className="text-sm md:text-lg text-white/40 group-hover:text-white transition-colors leading-relaxed font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits & Who Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <ListCard
                            icon={CheckCircle2}
                            title="Key Benefits"
                            items={service.benefits}
                        />
                        <ListCard
                            icon={UserCircle}
                            title="Target Audience"
                            items={service.who}
                        />
                    </div>
                </div>

                {/* Final CTA Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 p-8 md:p-16 rounded-[4rem] bg-gradient-to-br from-primary/20 via-white/[0.01] to-transparent border border-primary/10 flex flex-col xl:flex-row items-center justify-between gap-12 relative overflow-hidden active:scale-[0.995] transition-transform"
                >
                    <div className="absolute top-0 right-0 w-[70%] h-full bg-primary/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />

                    <div className="relative z-10 space-y-4 text-center xl:text-left">
                        <h2 className="text-3xl md:text-5xl font-sans font-semibold text-white uppercase tracking-[-0.04em] leading-tight md:leading-none">
                            Ready to <span className="text-primary italic">dominate?</span>
                        </h2>
                        <p className="text-white/40 font-medium text-sm md:text-lg max-w-lg">Let&apos;s turn these technical solutions into your company&apos;s competitive advantage.</p>
                    </div>

                    <Link
                        href="/contact"
                        className="relative z-10 inline-flex items-center gap-6 px-12 py-6 bg-primary text-white rounded-[2rem] font-black uppercase tracking-[0.25em] text-[11px] hover:scale-105 transition-all duration-500 shadow-[0_20px_60px_rgba(139,92,246,0.35)] group/cta"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/cta:translate-x-2" />
                    </Link>
                </motion.div>
            </div>

            <Footer />
        </main>
    )
}

function DetailCard({ icon: Icon, title, content, variant = "default" }: { icon: any, title: string, content: string, variant?: "default" | "glass" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`space-y-6 p-8 md:p-12 rounded-[3.5rem] border border-white/5 transition-all group ${variant === "glass" ? "bg-white/[0.03] backdrop-blur-3xl hover:bg-white/5" : "bg-white/[0.01] hover:border-primary/20"
                }`}
        >
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/20">
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40 group-hover:text-primary transition-colors">{title}</h3>
            </div>
            <p className="text-base md:text-2xl text-white/50 leading-tight font-medium group-hover:text-white transition-colors">
                {content}
            </p>
        </motion.div>
    )
}

function ListCard({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 p-10 md:p-14 rounded-[3.5rem] bg-white/[0.01] border border-white/5 hover:border-primary/20 transition-all group"
        >
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.45em] text-white/40 group-hover:text-white transition-colors">{title}</h3>
            </div>
            <div className="space-y-5">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-5 group/item">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/20 group-hover/item:scale-125 group-hover/item:bg-primary transition-all duration-500 flex-shrink-0" />
                        <span className="text-xs md:text-base text-white/40 font-black uppercase tracking-[0.25em] group-hover/item:text-white transition-colors">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
