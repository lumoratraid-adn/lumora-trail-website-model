"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let stars: { x: number; y: number; size: number; speed: number; opacity: number; color: string }[] = []

        const initStars = () => {
            stars = []
            const starCount = Math.floor((window.innerWidth * window.innerHeight) / 3000)
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5,
                    speed: Math.random() * 0.2 + 0.05,
                    opacity: Math.random(),
                    color: Math.random() > 0.7 ? "#a5f3fc" : "#ffffff" // 30% chance of cyan tint
                })
            }
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initStars()
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw Deep Space Background with Galaxy Glow (Radial Gradient)
            const gradient = ctx.createRadialGradient(
                canvas.width * 0.5, canvas.height * 0.5, 0,
                canvas.width * 0.5, canvas.height * 0.5, canvas.width
            )
            gradient.addColorStop(0, "#080b14") // Very dark blue/black center
            gradient.addColorStop(0.4, "#050505") // Fading to black
            gradient.addColorStop(1, "#000000") // Pure black edges

            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Add subtle Sky Blue Galaxy Haze (Top Right & Bottom Left)
            // Haze 1: Sky Blue
            const haze1 = ctx.createRadialGradient(
                canvas.width * 0.8, canvas.height * 0.2, 0,
                canvas.width * 0.8, canvas.height * 0.2, canvas.width * 0.6
            )
            haze1.addColorStop(0, "rgba(14, 165, 233, 0.04)") // Sky blue, very faint
            haze1.addColorStop(1, "transparent")
            ctx.fillStyle = haze1
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Haze 2: Deep Purple/Blue
            const haze2 = ctx.createRadialGradient(
                canvas.width * 0.2, canvas.height * 0.8, 0,
                canvas.width * 0.2, canvas.height * 0.8, canvas.width * 0.7
            )
            haze2.addColorStop(0, "rgba(139, 92, 246, 0.03)") // Purple/Blue mix, very faint
            haze2.addColorStop(1, "transparent")
            ctx.fillStyle = haze2
            ctx.fillRect(0, 0, canvas.width, canvas.height)


            // Draw Stars
            stars.forEach((star) => {
                ctx.fillStyle = star.color === "#ffffff"
                    ? `rgba(255, 255, 255, ${star.opacity})`
                    : `rgba(165, 243, 252, ${star.opacity})` // Cyan tint with opacity

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
                ctx.fill()

                // Move stars
                star.y -= star.speed
                if (star.y < 0) {
                    star.y = canvas.height
                    star.x = Math.random() * canvas.width
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener("resize", resizeCanvas)
        resizeCanvas()
        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] w-full h-full pointer-events-none"
        />
    )
}
