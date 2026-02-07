"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Header } from "./header"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { TechGlobe } from "./tech-globe"
import { CinematicText } from "./cinematic-text"
import { CameraController } from "./camera-controller"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // State to hold the current progress value for the 3D component
  const [progress, setProgress] = useState(0)

  // Update state on scroll change
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      setProgress(latest)
    })
  }, [smoothProgress])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Header - Stays inside sticky container, so it scrolls away only after 400vh */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/heromage1.jpg"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          {/* Subtle vignette to focus center */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/80" />
        </div>

        {/* 3D Scene */}
        <div className="absolute inset-0 z-10 scale-75 md:scale-100">
          <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
            <CameraController scrollProgress={progress} />
            <Environment preset="city" />
            <TechGlobe scrollProgress={progress} />

            {/* Vertically Stacked Cinematic Text Reveal with Suspense protection */}
            <Suspense fallback={null}>
              {/* Phase 1: BUILDING DIGITAL REALITIES (0.1 -> 0.3) */}
              <CinematicText
                scrollProgress={progress}
                text="BUILDING"
                scrollStart={0.1}
                scrollEnd={0.3}
                xOffset={0}
                yOffset={1.2}
                entryXOffset={-3}
              />
              <CinematicText
                scrollProgress={progress}
                text="DIGITAL"
                scrollStart={0.1}
                scrollEnd={0.3}
                xOffset={0}
                yOffset={0}
                isStatic={true}
              />
              <CinematicText
                scrollProgress={progress}
                text="REALITIES"
                scrollStart={0.1}
                scrollEnd={0.3}
                xOffset={0}
                yOffset={-1.2}
                entryXOffset={3}
              />

              {/* Phase 2: We empower... (0.4 -> 0.9) */}
              <CinematicText
                scrollProgress={progress}
                text="We empower"
                scrollStart={0.4}
                scrollEnd={0.9}
                xOffset={0}
                yOffset={0.6}
                isStatic={true}
                fontSize={0.5}
                persistEnd={true}
              />

              {/* Word Swapping Sequence (Single Scroll Optimization) */}
              <CinematicText
                scrollProgress={progress}
                text="businesses"
                scrollStart={0.45}
                scrollEnd={0.55}
                xOffset={0}
                yOffset={-0.1}
                fontSize={0.3}
                zStart={-4}
              />
              <CinematicText
                scrollProgress={progress}
                text="startups"
                scrollStart={0.58}
                scrollEnd={0.68}
                xOffset={0}
                yOffset={-0.1}
                fontSize={0.3}
                zStart={-4}
              />
              <CinematicText
                scrollProgress={progress}
                text="innovators"
                scrollStart={0.71}
                scrollEnd={0.85}
                xOffset={0}
                yOffset={-0.1}
                fontSize={0.3}
                zStart={-4}
                persistEnd={true}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Overlay Content - Just scroll indicator */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-[100dvh] flex flex-col items-center justify-end pointer-events-none pb-8 px-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
          {/* Mobile CTA Buttons */}
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
            className="lg:hidden w-full mb-4 flex gap-4 pointer-events-auto"
          >
            <a
              href="#services"
              className="flex-1 px-4 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-[0_10px_30px_rgba(139,92,246,0.4)] border border-primary/50"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="flex-1 px-4 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-white/10"
            >
              Services
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
            className="hidden lg:flex text-gray-400 text-sm flex-col items-center gap-2"
          >
            <span>Scroll to explore</span>
            <div className="w-5 h-8 border border-gray-500 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
