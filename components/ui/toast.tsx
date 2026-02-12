"use client"

import { useEffect } from "react"
import { CheckCircle2, X } from "lucide-react"

interface ToastProps {
    message: string
    isVisible: boolean
    onClose: () => void
    duration?: number
}

export function Toast({ message, isVisible, onClose, duration = 4000 }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, duration)
            return () => clearTimeout(timer)
        }
    }, [isVisible, duration, onClose])

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[10000] w-[90%] max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300">
            <div className="bg-[#16171D] border border-white/10 rounded-3xl p-6 shadow-2xl flex items-center gap-6 backdrop-blur-3xl">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                    <p className="text-white font-bold text-sm leading-tight">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    aria-label="Close notification"
                    className="text-white/20 hover:text-white transition-colors p-2"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
