"use client"

import { Code, Layout, Palette, Search, Smartphone, Megaphone, Settings, ArrowUpRight, PlayCircle } from "lucide-react"
import Image from "next/image"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function WhatWeDo() {
    const capabilities = [
        {
            icon: Code,
            title: "Web & Software",
            desc: "Fast, secure, and scalable websites and custom software.",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop", // Modern laptop with code
            dark: true
        },
        {
            icon: Layout,
            title: "UI / UX Design",
            desc: "Clean interfaces and smooth user experiences.",
            image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop", // Design mockups
            dark: false
        },
        {
            icon: Palette,
            title: "Branding & Marketing",
            desc: "Strong identities and effective marketing designs.",
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop", // Brand colors and design
            dark: true
        },
        {
            icon: Search,
            title: "SEO & Growth",
            desc: "Visibility on Google and organic audience reach.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Analytics dashboard
            dark: false
        },
        {
            icon: Settings,
            title: "Redesign & Maintenance",
            desc: "Upgrading and securing digital assets.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Website redesign workspace
            dark: true
        },
        {
            icon: Megaphone,
            title: "Lead Generation",
            desc: "Focused pages turning visitors into customers.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop", // Business growth and leads
            dark: false
        },
        {
            icon: PlayCircle,
            title: "Animations",
            desc: "Engaging visuals that bring brands to life.",
            image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=600&fit=crop", // Motion graphics and animation
            dark: true
        }
    ]

    return (
        <section className="py-12 md:py-24 bg-background relative overflow-hidden border-t border-foreground/5">
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedText className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-8">
                    <h2 className="text-[clamp(3rem,12vw,10rem)] font-michroma font-normal tracking-tight text-foreground uppercase leading-[0.85]">
                        Draw <br />
                        <span className="font-serif italic text-primary lowercase tracking-tighter">anything</span>
                    </h2>
                    <div className="max-w-xs space-y-6">
                        <span className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Expertise</span>
                        <p className="text-xl text-foreground/40 italic font-medium leading-[1.2]">
                            Architecting the digital foundation for visionary brands across 7 core domains.
                        </p>
                    </div>
                </AnimatedText>

                {/* Vertical Monolithic Grid for 7 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
                    {capabilities.map((cap, i) => (
                        <AnimatedSection
                            key={i}
                            delay={i * 0.1}
                            className={`group relative p-8 md:p-12 transition-all duration-500 flex flex-col justify-between min-h-[350px] md:min-h-[500px] overflow-hidden ${i === 6 ? 'lg:col-span-2' : ''}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                                <Image
                                    src={cap.image || "/placeholder.svg"}
                                    alt={cap.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                            </div>

                            <div className={`relative z-10 space-y-12 transition-colors duration-500 ${cap.dark ? 'text-foreground' : 'text-foreground'} group-hover:text-white`}>
                                <div className="flex justify-between items-start">
                                    <cap.icon className="w-12 h-12" />
                                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-xl md:text-3xl font-michroma tracking-[0.1em] uppercase leading-none">{cap.title}</h3>
                                    <p className="text-[11px] font-medium leading-relaxed uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity max-w-[80%]">
                                        {cap.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="relative z-10 pt-8 border-t border-current opacity-20 group-hover:opacity-100">
                                <span className="text-[10px] font-michroma tracking-widest">0{i + 1}</span>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
