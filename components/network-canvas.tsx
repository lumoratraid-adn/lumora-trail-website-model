"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

function NetworkGlobe() {
    const groupRef = useRef<THREE.Group>(null)

    const lines = useMemo(() => {
        const temp = []
        for (let i = 0; i < 12; i++) {
            const radius = 4 + Math.random() * 3
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
                    <ringGeometry args={[line.radius, line.radius + 0.015, 64]} />
                    <meshBasicMaterial color={line.color} transparent opacity={0.35} side={THREE.DoubleSide} />
                </mesh>
            ))}

            {/* Floating Nodes */}
            {Array.from({ length: 8 }).map((_, i) => (
                <Float key={i} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12]}>
                        <sphereGeometry args={[0.025, 16, 16]} />
                        <meshBasicMaterial color="#ffffff" opacity={0.9} transparent />
                    </mesh>
                </Float>
            ))}
        </group>
    )
}

export default function NetworkCanvas() {
    return (
        <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
            <NetworkGlobe />
        </Canvas>
    )
}
