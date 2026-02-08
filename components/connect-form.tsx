"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, MessageCircle, X, ArrowRight } from "lucide-react"
import * as React from "react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Toast } from "./ui/toast"

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
                            <span className="text-white/10 stroke-text">YOUR NEXT BIG THING.</span>
                        </h2>
                        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 font-medium leading-relaxed px-4">
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
                                        <label className="text-[12px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Your Name</label>
                                        <Input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="John Doe"
                                            className="h-16 bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white font-bold"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[12px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Email Address</label>
                                        <Input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="john@example.com"
                                            className="h-16 bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white font-bold"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[12px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Mobile Number</label>
                                        <Input
                                            value={phone}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '');
                                                if (val.length <= 10) setPhone(val);
                                            }}
                                            type="tel"
                                            placeholder="10-digit mobile number"
                                            className="h-16 bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white font-bold"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[12px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Interested In</label>
                                        <Select onValueChange={(val) => setServiceSelected(val)} value={serviceSelected}>
                                            <SelectTrigger className="h-16 bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary font-bold text-white uppercase tracking-widest">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#0E0F13] border-white/10 text-white">
                                                {services.map((service) => (
                                                    <SelectItem key={service} value={service} className="hover:bg-primary/20 focus:bg-primary/20">
                                                        {service}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[12px] font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Message</label>
                                    <Textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Briefly describe your project..."
                                        className="min-h-[150px] bg-white/[0.03] rounded-2xl border-white/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white font-bold pt-4"
                                        required
                                    />
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting || isSuccess}
                                        className="px-32 h-16 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(99,102,241,0.2)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <Loader2 className="animate-spin w-5 h-5" />
                                                Processing...
                                            </div>
                                        ) : (
                                            <>
                                                Send Inquiry
                                                <MessageCircle className="w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </div>

                                {error && (
                                    <p className="text-center text-red-400 font-bold animate-pulse">
                                        {error}
                                    </p>
                                )}
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
