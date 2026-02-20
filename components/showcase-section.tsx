"use client"

import { Code, Layout, Palette, Zap, Search, PlayCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const showcaseItems = [
    {
        number: "01",
        category: "Web Development",
        title: "E-Commerce Platform",
        desc: "A high-performance online store with seamless checkout, inventory management, and a conversion-optimised storefront.",
        tags: ["Next.js", "Stripe", "Postgres"],
        icon: Code,
        span: "md:col-span-7",
        aspect: "aspect-[16/11]",
        visual: (
            <div className="absolute inset-0 flex items-end justify-center p-6 md:p-8">
                <div className="w-full max-w-sm bg-[#0d0f0d] rounded-2xl border border-white/8 overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
                        <div className="w-2 h-2 rounded-full bg-red-400/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                        <span className="ml-2 text-[7px] font-mono text-white/20">lumora-store/checkout.tsx</span>
                    </div>
                    <div className="p-4 space-y-1.5">
                        {["export const Checkout = () => {", "  const total = cart.reduce(...)", "  return (", "    <form onSubmit={processPayment}>", "      <CartSummary items={cart} />", "      <StripePayment />", "    </form>", "  )", "}"].map((line, i) => (
                            <div key={i} className="flex gap-2.5">
                                <span className="text-[7px] font-mono text-white/10 w-3 text-right shrink-0">{i + 1}</span>
                                <span className={`text-[7px] font-mono leading-relaxed ${line.startsWith("export") ? "text-yellow-400/60" : line.includes("<") ? "text-blue-400/55" : line.includes("const") || line.includes("return") ? "text-primary/65" : "text-white/30"}`}>{line}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: "02",
        category: "UI / UX Design",
        title: "Mobile App Design",
        desc: "Clean, user-centric app interface designed in Figma with smooth user flows and developer-ready assets.",
        tags: ["Figma", "Prototyping", "iOS"],
        icon: Layout,
        span: "md:col-span-5",
        aspect: "aspect-[4/5] md:aspect-auto md:h-full",
        visual: (
            <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-32 h-60 bg-[#0d0d0d] rounded-[2rem] border border-white/10 shadow-2xl p-3 relative">
                    <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-3" />
                    <div className="space-y-2.5 h-full">
                        <div className="h-14 bg-primary/8 rounded-xl border border-primary/15" />
                        <div className="space-y-1.5">
                            <div className="h-1.5 bg-white/8 rounded-full w-3/4" />
                            <div className="h-1.5 bg-white/5 rounded-full" />
                            <div className="h-1.5 bg-white/5 rounded-full w-2/3" />
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                            <div className="h-10 bg-primary/12 rounded-lg border border-primary/10" />
                            <div className="h-10 bg-white/[0.04] rounded-lg" />
                        </div>
                        <div className="h-7 bg-primary/20 rounded-full border border-primary/25 flex items-center justify-center">
                            <div className="w-3 h-0.5 bg-primary/60 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: "03",
        category: "Branding",
        title: "Brand Identity System",
        desc: "A complete visual identity from logo design to colour palette, typography, and brand guidelines.",
        tags: ["Logo", "Guidelines", "Print"],
        icon: Palette,
        span: "md:col-span-5",
        aspect: "aspect-square",
        visual: (
            <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="space-y-4 w-full max-w-[180px]">
                    <div className="flex gap-2.5">
                        {["bg-primary", "bg-white", "bg-primary/40", "bg-white/15"].map((c, i) => (
                            <div key={i} className={`flex-1 aspect-square rounded-xl ${c}`} />
                        ))}
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-4 bg-white/10 rounded-md w-3/4" />
                        <div className="h-2 bg-white/5 rounded-full" />
                        <div className="h-2 bg-white/5 rounded-full w-2/3" />
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-primary via-white/20 to-transparent" />
                    <div className="flex gap-1.5">
                        <div className="px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-[6px] font-michroma text-primary uppercase tracking-widest">Brand</span>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-white/[0.03] border border-white/8">
                            <span className="text-[6px] font-michroma text-white/25 uppercase tracking-widest">System</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: "04",
        category: "SEO & Growth",
        title: "Organic Traffic Growth",
        desc: "Keyword strategy, technical SEO, and content optimisation that delivered measurable search ranking improvements.",
        tags: ["SEO", "Analytics", "Content"],
        icon: Search,
        span: "md:col-span-7",
        aspect: "aspect-[16/9]",
        visual: (
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <div className="w-full max-w-xs space-y-3">
                    <div className="flex items-end gap-1.5 h-16">
                        {[20, 35, 28, 50, 38, 65, 48, 80, 60, 95].map((h, i) => (
                            <div key={i} className={`flex-1 rounded-t-sm ${i >= 8 ? "bg-primary" : i >= 5 ? "bg-primary/40" : "bg-primary/15"}`} style={{ height: `${h}%` }} />
                        ))}
                    </div>
                    <div className="flex justify-between items-center pt-1">
                        <span className="text-[7px] font-michroma text-white/25 uppercase tracking-widest">Organic traffic</span>
                        <span className="text-[9px] font-michroma text-primary">Trending ↑</span>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="grid grid-cols-3 gap-2 text-center">
                        {[["Top 3", "Rankings"], ["↑ Traffic", "Growth"], ["Fast", "Indexing"]].map(([v, l], i) => (
                            <div key={i} className="space-y-0.5">
                                <div className="text-[8px] font-michroma text-primary">{v}</div>
                                <div className="text-[6px] font-michroma text-white/20 uppercase tracking-widest">{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
]

export function ShowcaseSection() {
    return (
        <section className="py-16 md:py-32 bg-background overflow-hidden relative border-t border-white/[0.05]">

            {/* Subtle background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] blur-[200px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <AnimatedText className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-primary/50" />
                            <span className="text-[9px] font-michroma tracking-[0.55em] text-primary uppercase">Our Work</span>
                        </div>
                        <h2 className="text-[clamp(2.25rem,7.5vw,6.4rem)] font-michroma font-normal tracking-tight leading-[0.85] text-white uppercase">
                            Where <span className="font-serif italic text-primary lowercase tracking-tighter">Vision</span><br />
                            Meets Reality<span className="text-primary">.</span>
                        </h2>
                    </div>
                    <div className="lg:max-w-sm space-y-4 lg:pb-4">
                        <p className="text-lg md:text-xl text-white/35 font-medium leading-relaxed italic">
                            A curated selection of digital experiences crafted for brands that refuse to blend in.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 text-[9px] font-michroma tracking-[0.3em] text-primary uppercase border-b border-primary/30 pb-1 hover:border-primary transition-all group"
                        >
                            Start Your Project
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </AnimatedText>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-5">
                    {showcaseItems.map((item, i) => (
                        <AnimatedSection
                            key={i}
                            delay={i * 0.1}
                            className={`${item.span} group`}
                        >
                            <div className={`relative ${item.aspect} rounded-[2.5rem] md:rounded-[2rem] border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-primary/25 hover:bg-white/[0.04] transition-all duration-700`}>
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Visual illustration */}
                                <div className="absolute inset-0 pointer-events-none group-hover:scale-105 transition-transform duration-1000">
                                    {item.visual}
                                </div>

                                {/* Info overlay */}
                                <div className="absolute top-0 left-0 right-0 p-8 flex items-start justify-between z-10">
                                    <div className="space-y-2.5">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[9px] font-michroma text-white/10">{item.number}</span>
                                            <div className="w-7 h-7 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-500 shadow-lg">
                                                <item.icon className="w-3.5 h-3.5 text-white/30 group-hover:text-primary transition-colors duration-500" />
                                            </div>
                                            <span className="text-[9px] font-michroma uppercase tracking-[0.3em] text-white/30 group-hover:text-white/50 transition-colors">{item.category}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-michroma uppercase text-white group-hover:text-primary transition-colors duration-500 leading-tight">{item.title}</h3>
                                    </div>

                                    {/* Tags - visible on larger md screens */}
                                    <div className="hidden lg:flex gap-1.5 flex-wrap justify-end max-w-[160px]">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1.5 rounded-full text-[7px] font-michroma uppercase tracking-[0.2em] bg-white/[0.04] border border-white/[0.07] text-white/20 group-hover:border-primary/20 group-hover:text-primary/50 transition-all duration-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Description — persistent on mobile, hover-only on desktop */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                    <p className="text-[11px] md:text-xs text-white/40 md:text-white/0 md:group-hover:text-white/45 transition-all duration-500 md:translate-y-2 md:group-hover:translate-y-0 font-medium leading-relaxed max-w-xs bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-3 md:p-0 rounded-2xl border border-white/5 md:border-none">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}

                    {/* CTA card — enhanced for mobile */}
                    <AnimatedSection delay={0.5} className="md:col-span-12 group">
                        <Link
                            href="/contact"
                            className="block relative rounded-[3rem] border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-700 p-10 md:p-16"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-michroma tracking-[0.5em] text-primary/60 uppercase block">Ready to create yours?</span>
                                    <h3 className="text-4xl md:text-6xl font-michroma text-white uppercase group-hover:text-primary transition-colors duration-500 leading-[0.9]">
                                        Build something <br className="hidden md:block" /><span className="font-serif italic text-primary lowercase tracking-tighter">great.</span>
                                    </h3>
                                </div>
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 shrink-0 shadow-2xl">
                                    <ArrowUpRight className="w-10 h-10 text-white/20 group-hover:text-primary transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                </div>

            </div>
        </section>
    )
}
