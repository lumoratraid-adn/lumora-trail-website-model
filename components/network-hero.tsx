"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { ArrowRight, Globe2 } from "lucide-react"
import Link from "next/link"

function NetworkGlobe() {
    const groupRef = useRef<THREE.Group>(null)

    const lines = useMemo(() => {
        const temp = []
        for (let i = 0; i < 20; i++) {
            const radius = 3 + Math.random() * 2
            const speed = 0.1 + Math.random() * 0.2
            const color = i % 2 === 0 ? "#6366f1" : "#a855f7"
            temp.push({ radius, speed, color, offset: Math.random() * Math.PI * 2 })
        }
        return temp
    }, [])

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002
        }
    })

    return (
        <group ref={groupRef}>
            {/* Orbit Lines */}
            {lines.map((line, i) => (
                <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
                    <ringGeometry args={[line.radius, line.radius + 0.01, 64]} />
                    <meshBasicMaterial color={line.color} transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
            ))}

            {/* Floating Nodes */}
            {Array.from({ length: 20 }).map((_, i) => (
                <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8]}>
                        <sphereGeometry args={[0.03, 16, 16]} />
                        <meshBasicMaterial color="#ffffff" />
                    </mesh>
                </Float>
            ))}
        </group>
    )
}

export function NetworkHero() {
    return (
        <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 1.5]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
                    <NetworkGlobe />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center h-full pt-32 md:pt-40">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-[12vw] md:text-[10vw] font-condensed font-bold tracking-[-0.04em] leading-[0.85] text-white uppercase text-center relative z-20 select-none whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-48 md:mb-32"
                >
                    LUMORA TRIAD
                </motion.h1>

                <div className="w-full flex flex-col items-center space-y-8 md:space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl px-4"
                    >
                        <Link
                            href="/contact"
                            className="group flex-1 md:flex-none px-5 py-4 md:px-10 md:py-5 bg-white text-black rounded-full font-bold text-[10px] md:text-base flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.2)] whitespace-nowrap"
                        >
                            Get Started
                            <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/services"
                            className="flex-1 md:flex-none px-5 py-4 md:px-10 md:py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold text-white text-[10px] md:text-base hover:bg-white/10 transition-all hover:border-white/40 flex justify-center items-center whitespace-nowrap"
                        >
                            View Services
                        </Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-[9px] md:text-sm text-white/40 max-w-xl mx-auto font-medium leading-relaxed tracking-[0.2em] uppercase text-center px-6"
                    >
                        Engineering excellence for the modern digital era.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
