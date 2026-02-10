"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

export function StarField() {
    const ref = useRef<THREE.Points>(null)

    const [positions, colors] = useMemo(() => {
        const count = 1200
        const pos = new Float32Array(count * 3)
        const col = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 60
            pos[i * 3 + 1] = (Math.random() - 0.5) * 60
            pos[i * 3 + 2] = (Math.random() - 0.5) * 60

            const r = 0.5 + Math.random() * 0.2
            const g = 0.4 + Math.random() * 0.2
            const b = 1.0
            col[i * 3] = r
            col[i * 3 + 1] = g
            col[i * 3 + 2] = b
        }
        return [pos, col]
    }, [])

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.0003
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

export default function SceneCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
            <StarField />
        </Canvas>
    )
}
