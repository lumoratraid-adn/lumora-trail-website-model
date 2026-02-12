"use client"

import { ArrowRight, Code, Layout, Palette, Zap, Sparkles, Globe } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"
import Image from "next/image"

export function ShowcaseSection() {
    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden relative border-t border-foreground/5">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <AnimatedText className="max-w-5xl mb-20 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-michroma uppercase tracking-[0.5em] text-primary">Portfolio Showcase</span>
                    </div>
                    <h2 className="text-[clamp(3rem,10vw,8rem)] font-michroma font-normal tracking-[-0.03em] leading-[0.85] text-foreground uppercase">
                        Where <span className="font-serif italic text-primary lowercase">Vision</span>
                        <br />Meets Reality<span className="text-primary">.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-foreground/50 max-w-3xl italic font-medium">
                        Explore our curated collection of digital experiences crafted for brands that refuse to blend in.
                    </p>
                </AnimatedText>

                {/* Bento Grid Layout - Mix of Large and Small Mockups */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

                    {/* Large Featured Mockup - Web Development */}
                    <AnimatedSection delay={0.1} className="md:col-span-8 group">
                        <div className="aspect-[16/10] rounded-[2.5rem] bg-gradient-to-br from-foreground/5 to-primary/5 border border-foreground/5 relative overflow-hidden p-8 md:p-16 flex flex-col justify-between hover:border-primary/20 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <Code className="w-6 h-6 text-primary" />
                                    </div>
                                    <span className="text-[11px] font-michroma uppercase tracking-widest text-foreground/60">Web Development</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-michroma uppercase leading-[0.9]">
                                    E-Commerce<br />Platform
                                </h3>
                            </div>

                            {/* Mockup Image */}
                            <div className="relative z-10 -mb-8 md:-mb-16 mt-8">
                                <div className="aspect-video bg-foreground rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 transform group-hover:scale-105 transition-transform duration-700">
                                    <Image
                                        src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1000&h=600&fit=crop"
                                        alt="E-Commerce Platform"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white text-sm font-michroma uppercase tracking-wider">
                                        Lumora Studio
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Small Card - UI/UX Design */}
                    <AnimatedSection delay={0.2} className="md:col-span-4 group">
                        <div className="aspect-[4/5] rounded-[2.5rem] bg-primary/5 border border-primary/10 relative overflow-hidden p-8 flex flex-col justify-between hover:bg-primary/10 transition-all duration-700">
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                    <Layout className="w-6 h-6 text-primary" />
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[10px] font-michroma uppercase tracking-widest text-primary/80">UI/UX Design</span>
                                    <h4 className="text-3xl font-michroma uppercase leading-[0.95]">Mobile<br />App</h4>
                                </div>
                            </div>

                            {/* Phone Mockup */}
                            <div className="flex justify-center -mb-8">
                                <div className="w-40 h-80 bg-foreground rounded-[2.5rem] p-3 shadow-2xl transform group-hover:rotate-6 transition-transform duration-700">
                                    <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=800&fit=crop"
                                            alt="Mobile App Design"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Medium Card - Branding */}
                    <AnimatedSection delay={0.3} className="md:col-span-5 group">
                        <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/5 relative overflow-hidden p-8 md:p-12 flex flex-col justify-between hover:border-foreground/20 transition-all duration-700">
                            <div className="space-y-6">
                                <Palette className="w-10 h-10 text-primary" />
                                <div className="space-y-3">
                                    <span className="text-[10px] font-michroma uppercase tracking-widest text-foreground/60">Branding</span>
                                    <h4 className="text-4xl md:text-5xl font-michroma uppercase leading-[0.9]">Brand<br />Identity</h4>
                                </div>
                            </div>

                            {/* Brand Colors */}
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    {['bg-primary', 'bg-foreground', 'bg-primary/40', 'bg-foreground/20'].map((color, i) => (
                                        <div key={i} className={`w-16 h-16 rounded-2xl ${color} transform group-hover:scale-110 transition-transform duration-500`} style={{ transitionDelay: `${i * 100}ms` }} />
                                    ))}
                                </div>
                                <div className="h-1 w-full bg-gradient-to-r from-primary via-foreground to-primary/40 rounded-full" />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Medium Card - SEO & Analytics */}
                    <AnimatedSection delay={0.4} className="md:col-span-7 group">
                        <div className="aspect-[16/9] rounded-[2.5rem] bg-foreground/5 border border-foreground/5 relative overflow-hidden p-8 md:p-12 hover:bg-foreground/8 transition-all duration-700">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                <div className="space-y-4">
                                    <Zap className="w-10 h-10 text-primary" />
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-michroma uppercase tracking-widest text-foreground/60">SEO & Growth</span>
                                        <h4 className="text-3xl md:text-4xl font-michroma uppercase">Analytics Dashboard</h4>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                                                <Sparkles className="w-4 h-4 text-primary" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Chart Visualization */}
                            <div className="flex items-end gap-2 h-32">
                                {[40, 60, 45, 80, 55, 90, 65, 95].map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-lg transform group-hover:scale-y-110 transition-all duration-500"
                                        style={{
                                            height: `${height}%`,
                                            transitionDelay: `${i * 50}ms`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Small Feature Card */}
                    <AnimatedSection delay={0.5} className="md:col-span-6 group">
                        <div className="aspect-[16/11] rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 relative overflow-hidden p-8 md:p-10 flex flex-col justify-center items-center text-center hover:bg-primary/15 transition-all duration-700">
                            <div className="space-y-6">
                                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto backdrop-blur-sm">
                                    <Globe className="w-8 h-8 text-primary" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-4xl md:text-5xl font-michroma uppercase">50+</h4>
                                    <p className="text-[11px] font-michroma uppercase tracking-widest text-foreground/60">Projects Delivered</p>
                                </div>
                                <div className="flex justify-center gap-2 pt-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="w-2 h-2 rounded-full bg-primary/40" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Portfolio CTA Card */}
                    <AnimatedSection delay={0.6} className="md:col-span-6 group">
                        <Link href="/works" className="block aspect-[16/11] rounded-[2.5rem] bg-foreground text-background relative overflow-hidden p-8 md:p-10 hover:bg-primary transition-all duration-700">
                            <div className="h-full flex flex-col justify-between">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-michroma uppercase tracking-widest opacity-60">Explore More</span>
                                    <h4 className="text-3xl md:text-4xl font-michroma uppercase leading-[0.95]">View All<br />Projects</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-background/20 transition-colors">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                    <div className="h-px flex-1 bg-current opacity-20" />
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>

                </div>

                {/* Bottom Tagline */}
                <div className="mt-20 text-center">
                    <AnimatedText delay={0.7}>
                        <span className="text-base md:text-xl font-michroma uppercase tracking-[0.5em] text-foreground/30">
                            Lumora <span className="text-primary italic">Triad</span> — Digital Excellence
                        </span>
                    </AnimatedText>
                </div>
            </div>
        </section>
    )
}
