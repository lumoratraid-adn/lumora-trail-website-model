"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

const services = [
    "Website & Software Development",
    "UI/UX Design & Figma",
    "Branding, Logo & Posters",
    "Animations & Creative Design",
]

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
        const message = `Hi! I'm interested in ${service}. Let's discuss my project!`
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
                className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            >
                {isOpen ? (
                    <X className="w-6 h-6 sm:w-7 sm:h-7" />
                ) : (
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
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
                        className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 bg-background border border-border/50 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                                <MessageCircle className="w-7 h-7 text-[#25D366]" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold text-base leading-none mb-1">Lumora Triad</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    <p className="text-white/90 text-[10px] font-medium uppercase tracking-wider">Online & Active</p>
                                </div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 bg-gradient-to-b from-background to-muted/20 max-h-[60vh] overflow-y-auto">
                            {/* Welcome Message */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-4"
                            >
                                <div className="bg-card border border-border/50 rounded-2xl rounded-tl-none p-4 shadow-sm">
                                    <p className="text-sm mb-2">
                                        👋 <strong>Hi! Have an idea?</strong>
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Come, let's connect! Choose a service below or start a general chat:
                                    </p>
                                </div>
                            </motion.div>

                            {/* Service Options */}
                            <div className="space-y-2 mb-4">
                                {services.map((service, index) => (
                                    <motion.button
                                        key={service}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.05 }}
                                        onClick={() => handleServiceClick(service)}
                                        className="w-full text-left p-3 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{service}</span>
                                            <Send className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            {/* General Chat Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={handleGeneralChat}
                                className="w-full p-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Start General Chat
                            </motion.button>

                            {/* Footer Note */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-xs text-center text-muted-foreground mt-4"
                            >
                                We'll respond on WhatsApp
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
                        className="fixed bottom-24 right-6 z-40 max-w-[200px] sm:max-w-[250px] bg-card border border-border/50 rounded-2xl rounded-br-none p-3 shadow-xl"
                    >
                        <p className="text-sm font-medium mb-1">Have any idea? 👋</p>
                        <p className="text-xs text-muted-foreground">
                            Click here to chat with us!
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
