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

  if (!isVisible) return null

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[10000] w-[90%] max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-foreground border border-foreground/80 rounded-xl p-5 shadow-2xl flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-background font-medium text-sm leading-tight">{message}</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close notification"
          className="text-background/30 hover:text-background transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
