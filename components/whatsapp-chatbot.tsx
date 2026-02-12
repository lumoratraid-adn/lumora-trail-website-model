"use client"

import { useState } from "react"
import { X, Send } from "lucide-react"

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
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close WhatsApp Chat" : "Open WhatsApp Chat"}
                className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <WhatsAppIcon className="w-7 h-7" />
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    className="fixed bottom-24 right-6 z-[9999] w-[90vw] sm:w-[380px] bg-[#0E0F13] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-3xl animate-in fade-in zoom-in duration-300"
                >
                    {/* Header */}
                    <div className="bg-[#25D366] p-8 flex items-center gap-6">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-bold text-xl leading-none mb-1 uppercase tracking-tight">Lumora Triad</h3>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white" />
                                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Active Now</p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6">
                            <p className="text-sm font-bold text-white mb-2">👋 Hi there!</p>
                            <p className="text-xs text-white/60 leading-relaxed font-medium">
                                We&apos;re here to help you build your digital legacy. Which service are you interested in today?
                            </p>
                        </div>

                        {/* Service Options */}
                        <div className="space-y-3">
                            {services.map((service) => (
                                <button
                                    key={service}
                                    onClick={() => handleServiceClick(service)}
                                    className="w-full text-left px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group flex items-center justify-between"
                                >
                                    <span className="text-[11px] font-bold uppercase tracking-wide text-white/60 group-hover:text-primary">{service}</span>
                                    <Send className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                </button>
                            ))}
                        </div>

                        {/* General Chat Button */}
                        <button
                            onClick={handleGeneralChat}
                            className="w-full p-6 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-4 shadow-xl hover:scale-[1.02] active:scale-95"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            Start Custom Chat
                        </button>

                        <p className="text-[9px] font-black text-center text-white/20 uppercase tracking-[0.3em]">
                            Respond time: ~5 mins
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
