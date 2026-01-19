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
        <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 1.5]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
                    <NetworkGlobe />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center h-full flex flex-col justify-center items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-[16vw] sm:text-[14vw] md:text-[12vw] font-condensed font-bold tracking-[-0.04em] leading-[0.8] text-white uppercase text-center relative z-20 select-none whitespace-nowrap"
                    >
                        LUMORA TRIAD
                    </motion.h1>
                </motion.div>

                {/* Bottom Navigation - Hidden on Mobile */}
                <div className="absolute bottom-10 md:bottom-16 left-0 right-0 hidden md:flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 px-8 w-full max-w-lg md:max-w-none"
                    >
                        <Link
                            href="/contact"
                            className="group w-full md:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-base flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/services"
                            className="w-full md:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold text-white text-base hover:bg-white/10 transition-all hover:border-white/40 flex justify-center"
                        >
                            View Services
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
