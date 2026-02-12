"use client"

import { Loader2, ArrowRight } from "lucide-react"
import * as React from "react"
import { useEffect, useState } from "react"
import { Toast } from "./ui/toast"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function ConnectForm({ defaultService = "" }: { defaultService?: string }) {
    const [mounted, setMounted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [serviceSelected, setServiceSelected] = useState(defaultService)
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')


    useEffect(() => {
        setMounted(true)
        if (defaultService) setServiceSelected(defaultService)
    }, [defaultService])

    const resetForm = () => {
        setIsSuccess(false)
        setName('')
        setEmail('')
        setServiceSelected(defaultService)
        setMessage('')
        setPhone('')
    }

    const services = [
        "Website & Software Development",
        "UI / UX Design & Figma Projects",
        "Branding & Digital Marketing",
        "SEO & Online Growth",
        "Website Redesign & Maintenance",
        "Landing Pages & Lead Generation",
        "Animations & Creative Design",
        "Other"
    ]

    if (!mounted) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setIsSubmitting(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    service: serviceSelected,
                    message
                })
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Unknown error')

            setIsSuccess(true)
        } catch (err: any) {
            setError(err?.message || 'Failed to send')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-12 md:py-16 relative bg-transparent overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Section Header */}
                    <AnimatedText className="mb-16 text-center space-y-6">
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-white/80 uppercase">CONTACT</span>
                        </div>
                        <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold text-white uppercase tracking-tighter leading-none">
                            LET&apos;S <span className="text-primary italic">BUILD</span><br />
                            <span className="text-white/20">YOUR NEXT BIG THING.</span>
                        </h2>
                        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 font-medium leading-relaxed px-4 text-center">
                            Have an idea or a project in mind? We respond to all inquiries within 24 hours.
                        </p>
                    </AnimatedText>

                    {/* Form Container */}
                    <AnimatedSection delay={0.2} className="relative rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 bg-white/[0.02] border border-white/5 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="phone" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+91 99999 99999"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="email" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@company.com"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="service" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Service Interest</label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        value={serviceSelected}
                                        onChange={(e) => setServiceSelected(e.target.value)}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[#0E0F13]">Select a service</option>
                                        {services.map((s) => (
                                            <option key={s} value={s} className="bg-[#0E0F13]">{s}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">▼</div>
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="message" className="text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase pl-1 group-focus-within:text-primary transition-colors">Project Details</label>
                                <textarea
                                    id="message"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none"
                                />
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className="w-full py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-2xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : (
                                        <>
                                            Send Inquiry
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {error && <p className="text-red-400 text-center text-sm font-medium mt-4 bg-red-400/10 py-2 rounded-lg">{error}</p>}
                        </form>
                    </AnimatedSection>

                </div>
            </div>

            <Toast
                message="Message Received! We'll get back to you within 24 hours."
                isVisible={isSuccess}
                onClose={resetForm}
            />
        </section>
    )
}
