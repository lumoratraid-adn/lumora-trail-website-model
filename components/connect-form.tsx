"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

export function ConnectForm() {
    const [mounted, setMounted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const services = [
        "UI / UX Design",
        "Web & Software Development",
        "Brand Identity",
        "Mobile Solutions",
        "Motion Design",
        "Personal Branding",
        "Others"
    ]

    if (!mounted) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    return (
        <section className="section-spacing relative bg-transparent overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">

                    {/* Section Header */}
                    <div className="mb-12 text-center space-y-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase border border-white/5 backdrop-blur-sm mx-auto">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            GET IN TOUCH
                        </span>
                        <h2 className="text-6xl md:text-8xl font-condensed font-bold text-white uppercase tracking-tight leading-[0.9]">
                            LET&apos;S <span className="text-primary italic">BUILD</span><br />
                            <span className="text-white/10 stroke-text">YOUR NEXT BIG THING.</span>
                        </h2>
                        <p className="max-w-xl mx-auto text-xl text-white/50 font-medium leading-relaxed">
                            Have an idea or a project in mind? We respond to all
                            inquiries within 24 hours.
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="p-6 md:p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                        <div className="relative z-10">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-1">Your Name</label>
                                        <Input
                                            placeholder="John Doe"
                                            className="h-16 bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white font-bold"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                        <Input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="h-16 bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white font-bold"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-1">Interested In</label>
                                    <Select>
                                        <SelectTrigger className="h-16 bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary font-bold text-white uppercase tracking-widest">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#0E0F13] border-white/10 text-white">
                                            {services.map((service) => (
                                                <SelectItem key={service} value={service.toLowerCase().replace(/ /g, '-')} className="hover:bg-primary/20 focus:bg-primary/20">
                                                    {service}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-1">Message</label>
                                    <Textarea
                                        placeholder="Briefly describe your project..."
                                        className="min-h-[150px] bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white font-bold pt-4"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className="w-full h-18 py-8 rounded-2xl bg-primary text-white font-black text-lg uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : isSuccess ? <CheckCircle2 /> : (
                                        <>
                                            Send Project Brief
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>

                                {isSuccess && (
                                    <p className="text-center text-primary font-black uppercase tracking-widest animate-bounce">
                                        Message received! We&apos;ll be in touch soon.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Direct Links */}
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        <a href="mailto:hello@lumoratriad.in" className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            HELLO@LUMORATRIAD.IN
                        </a>
                        <a href="tel:+919947878418" className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            +91 99478 78418
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
