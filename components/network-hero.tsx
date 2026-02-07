"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { ArrowUpRight, Eye, Globe2 } from "lucide-react"
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
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-none text-center text-white relative z-20 select-none mb-12 sm:mb-24 md:mb-32 px-4"
                    style={{ letterSpacing: "0.05em", wordSpacing: "0.15em" }}
                >
                    Lumora Triad
                </motion.h1>

                <div className="w-full flex flex-col items-center space-y-8 md:space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4"
                    >
                        <Link
                            href="/contact"
                            prefetch={true}
                            className="group w-full sm:w-auto pl-8 pr-2 py-2 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-white flex items-center justify-center gap-6 transition-all hover:bg-primary/30 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.15)] whitespace-nowrap min-w-[200px]"
                        >
                            Get Started
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                                <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                            </div>
                        </Link>

                        <Link
                            href="/services"
                            prefetch={true}
                            className="group w-full sm:w-auto pl-8 pr-2 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-black text-white text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all hover:border-white/20 flex justify-center items-center gap-6 whitespace-nowrap min-w-[200px]"
                        >
                            View Services
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                                <Eye className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                            </div>
                        </Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-[9px] md:text-[11px] text-white/40 max-w-2xl mx-auto font-black leading-relaxed tracking-[0.3em] uppercase text-center px-6"
                    >
                        Engineering excellence for the modern digital era.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
