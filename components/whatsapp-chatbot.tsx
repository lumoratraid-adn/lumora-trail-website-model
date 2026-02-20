"use client"

import { useState } from "react"
import { X, Send, ArrowRight } from "lucide-react"

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
        const message = `Hi! I'm interested in "${service}".`
        const whatsappUrl = `https://wa.me/919947878418?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
        setIsOpen(false)
    }

    const handleGeneralChat = () => {
        const message = "Hi! Can we connect?"
        const whatsappUrl = `https://wa.me/919947878418?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
        setIsOpen(false)
    }

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
                className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-primary text-black rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <div className="relative">
                        <WhatsAppIcon className="w-7 h-7" />
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-primary rounded-full animate-pulse" />
                    </div>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    className="fixed bottom-24 right-6 z-[9999] w-[85vw] sm:w-[320px] bg-[#0A0A0A] border border-white/[0.08] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
                >
                    {/* Header */}
                    <div className="p-6 bg-gradient-to-br from-primary/20 to-transparent border-b border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-black">
                                <WhatsAppIcon className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-white font-michroma text-[10px] uppercase tracking-[0.2em]">Studio Connect</h3>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Protocol Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="p-6 space-y-6">
                        <div className="bg-white/5 rounded-2xl p-4">
                            <p className="text-[10px] text-white/60 leading-relaxed font-medium">
                                Architecting a new digital reality? Select a pillar to initiate the dialogue.
                            </p>
                        </div>

                        {/* Service Options */}
                        <div className="grid grid-cols-1 gap-2">
                            {services.slice(0, 5).map((service) => (
                                <button
                                    key={service}
                                    onClick={() => handleServiceClick(service)}
                                    className="w-full text-left px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group flex items-center justify-between"
                                >
                                    <span className="text-[9px] font-michroma uppercase tracking-wider text-white/40 group-hover:text-primary transition-colors">{service}</span>
                                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handleGeneralChat}
                            className="w-full py-4 bg-primary text-black rounded-xl font-michroma uppercase tracking-widest text-[9px] transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-primary/10"
                        >
                            Open Pipeline
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
