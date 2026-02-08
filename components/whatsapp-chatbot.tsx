"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

const services = [
    "Website & Software Development",
    "UI / UX Design & Figma Projects",
    "Branding, Logo, Poster & Digital Marketing",
    "SEO & Online Growth",
    "Website Redesign & Maintenance",
    "Landing Pages & Lead Generation",
    "Animations & Creative Design",
]

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
)

export function WhatsAppChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [showGreeting, setShowGreeting] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGreeting(false)
        }, 6000)
        return () => clearTimeout(timer)
    }, [])

    const handleServiceClick = (service: string) => {
        const message = `Hi Lumora Triad! I'm interested in "${service}". Let's discuss my project!`
        const whatsappUrl = `https://wa.me/919947878418?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
        setIsOpen(false)
    }

    const handleGeneralChat = () => {
        const message = "Hi Lumora Triad! I have an idea for a digital product. Can we connect?"
        const whatsappUrl = `https://wa.me/919947878418?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
        setIsOpen(false)
    }

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            >
                {isOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                    <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 bg-background border border-border/50 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-3xl"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform rotate-[-5deg]">
                                <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-black text-lg leading-none mb-1 uppercase tracking-tight">Lumora Triad</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    <p className="text-white/90 text-[9px] font-black uppercase tracking-widest">Active Now</p>
                                </div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="p-6 bg-gradient-to-b from-background to-muted/20 max-h-[60vh] overflow-y-auto">
                            {/* Welcome Message */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-6"
                            >
                                <div className="bg-card border border-border/50 rounded-[2rem] rounded-tl-none p-5 shadow-sm">
                                    <p className="text-sm font-bold mb-2">
                                        👋 <span className="text-primary italic">Hi there!</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                                        We&apos;re here to help you build your digital legacy. Which service are you interested in today?
                                    </p>
                                </div>
                            </motion.div>

                            {/* Service Options */}
                            <div className="space-y-3 mb-6">
                                {services.map((service, index) => (
                                    <motion.button
                                        key={service}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.05 }}
                                        onClick={() => handleServiceClick(service)}
                                        className="w-full text-left px-5 py-4 rounded-2xl bg-white/[0.03] hover:bg-primary/10 border border-white/10 hover:border-primary/40 transition-all duration-300 group flex items-center justify-between"
                                    >
                                        <span className="text-xs font-bold uppercase tracking-wide group-hover:text-primary transition-colors">{service}</span>
                                        <Send className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-1" />
                                    </motion.button>
                                ))}
                            </div>

                            {/* General Chat Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={handleGeneralChat}
                                className="w-full p-5 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:scale-[1.02] active:scale-95"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                                Start Chat
                            </motion.button>

                            {/* Footer Note */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-[9px] font-black text-center text-muted-foreground mt-6 uppercase tracking-widest opacity-40"
                            >
                                Typical respond time: 5 mins
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Greeting Bubble (shows when chat is closed) */}
            <AnimatePresence>
                {!isOpen && showGreeting && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 1 }}
                        className="fixed bottom-24 right-6 z-40 max-w-[200px] sm:max-w-[250px] bg-card/80 backdrop-blur-xl border border-border/50 rounded-[1.5rem] rounded-br-none p-4 shadow-2xl"
                    >
                        <p className="text-xs font-black uppercase tracking-wider mb-1">Have an idea? 👋</p>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">
                            Connect with our team on WhatsApp!
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
