"use client"

import { CheckCircle2, Loader2, MessageCircle, X, ArrowRight } from "lucide-react"
import * as React from "react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Toast } from "./ui/toast"
import { Canvas } from "@react-three/fiber"
import { StarField } from "@/components/scene-canvas"

export function ConnectForm() {
    const [mounted, setMounted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [serviceSelected, setServiceSelected] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')

    useEffect(() => {
        setMounted(true)
    }, [])

    const resetForm = () => {
        setIsSuccess(false)
        setName('')
        setEmail('')
        setServiceSelected('')
        setMessage('')
        setPhone('')
        setCompany('')
    }

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
                    company,
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
        <section className="section-spacing relative bg-transparent overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">

                    {/* Section Header */}
                    <div className="mb-12 text-center space-y-6">
                        <h2 className="text-4xl md:text-8xl font-condensed font-bold text-white uppercase tracking-tight leading-[0.9]">
                            LET&apos;S <span className="text-primary italic">BUILD</span><br />
                            <span className="text-white/50 stroke-text">YOUR NEXT BIG THING.</span>
                        </h2>
                        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 font-medium leading-relaxed px-4">
                            Have an idea or a project in mind? We respond to all
                            inquiries within 24 hours.
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="relative rounded-[3rem] p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 blur-xl opacity-20" />

                        {/* Animated Background Blobs - Matched with global background style */}
                        <motion.div
                            animate={{
                                scale: [1, 1.4, 1],
                                x: [-30, 30, -30],
                                y: [-30, 30, -30],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-0 left-0 w-full h-full bg-[#6366f1]/15 blur-[120px] rounded-full pointer-events-none"
                        />
                        <motion.div
                            animate={{
                                scale: [1.4, 1, 1.4],
                                x: [30, -30, 30],
                                y: [30, -30, 30],
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2,
                            }}
                            className="absolute bottom-0 right-0 w-full h-full bg-[#7c3aed]/10 blur-[100px] rounded-full pointer-events-none"
                        />

                        {/* Optimized Lightweight CSS Starfield */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
                            <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
                        </div>

                        <div className="relative bg-[#0E0F13]/40 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl overflow-hidden relative z-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label htmlFor="name" className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase pl-1 group-focus-within:text-primary transition-colors">Your Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="John Doe"
                                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label htmlFor="phone" className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase pl-1 group-focus-within:text-primary transition-colors">Phone Number</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+91 99999 99999"
                                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase pl-1 group-focus-within:text-primary transition-colors">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@company.com"
                                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="service" className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase pl-1 group-focus-within:text-primary transition-colors">Service Interest</label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            value={serviceSelected}
                                            onChange={(e) => setServiceSelected(e.target.value)}
                                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-[#0E0F13]">Select a service</option>
                                            {services.map((s) => (
                                                <option key={s} value={s} className="bg-[#0E0F13]">{s}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">▼</div>
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="message" className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase pl-1 group-focus-within:text-primary transition-colors">Project Details</label>
                                    <textarea
                                        id="message"
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell us about your project..."
                                        rows={4}
                                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all resize-none"
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isSuccess}
                                        className="w-full py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        </div>
                    </div>


                </div>
            </div>

            {/* Toast Notification */}
            <Toast
                message="Message Received! We'll get back to you within 24 hours."
                isVisible={isSuccess}
                onClose={resetForm}
            />
        </section>
    )
}
