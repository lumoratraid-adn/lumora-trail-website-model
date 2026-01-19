"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function StarField() {
    const ref = useRef<THREE.Points>(null)

    const [positions, colors] = useMemo(() => {
        const count = 1000
        const pos = new Float32Array(count * 3)
        const col = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50

            const r = 0.4 + Math.random() * 0.2 // More purple/blue control
            const g = 0.2 + Math.random() * 0.2
            const b = 0.8 + Math.random() * 0.2
            col[i * 3] = r
            col[i * 3 + 1] = g
            col[i * 3 + 2] = b
        }
        return [pos, col]
    }, [])

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.0003
            ref.current.rotation.x += 0.0001
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.06}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    )
}

export function SceneBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#030305]">
            {/* Central Nebula Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#6366f1]/20 blur-[120px] rounded-full opacity-80 animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[#4f46e5]/10 blur-[180px] rounded-full opacity-40" />

            {/* Ambient Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1)_0%,rgba(0,0,0,0)_80%)]" />

            {/* Edge Accents */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7c3aed]/10 blur-[150px] rounded-full" />
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#818cf8]/5 blur-[150px] rounded-full" />

            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
                <StarField />
            </Canvas>
        </div>
    )
}
