"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { ArrowUpRight, Globe2 } from "lucide-react"
import Link from "next/link"

import dynamic from "next/dynamic"

const NetworkCanvas = dynamic(() => import("./network-canvas"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#0E0F13]" />
})

export function NetworkHero() {
    return (
        <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <NetworkCanvas />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center h-full pt-10 md:pt-40">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-row items-center justify-center gap-2 md:gap-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading text-center text-white relative z-20 select-none mb-8 sm:mb-16 md:mb-20 px-4 whitespace-nowrap"
                    style={{ letterSpacing: "0.05em" }}
                >
                    <span className="leading-[0.8] tracking-tighter">Lumora</span>
                    <span className="leading-[0.8] tracking-tighter">Triad</span>
                </motion.h1>

                <div className="absolute bottom-16 left-0 right-0 w-full flex flex-col items-center gap-3 md:static md:w-full md:gap-6 md:mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4"
                    >
                        <Link
                            href="/services"
                            prefetch={true}
                            className="group w-[220px] sm:w-auto pl-6 pr-2 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-black text-white text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all hover:border-white/20 flex justify-center items-center gap-4 whitespace-nowrap"
                        >
                            View Services
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                                <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                            </div>
                        </Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-[9px] md:text-[11px] text-white/40 max-w-2xl mx-auto font-black leading-relaxed tracking-[0.3em] uppercase text-center px-6"
                    >
                        Premier Digital Agency Specializing in Web Development, UI/UX Design & Branding solutions.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
