"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[10000] w-[90%] max-w-md"
                >
                    <div className="bg-[#16171D] border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4 backdrop-blur-xl">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-white font-bold text-sm">{message}</p>
                        </div>
                        <button
                            onClick={onClose}
                            aria-label="Close notification"
                            className="text-white/20 hover:text-white transition-colors p-1"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
