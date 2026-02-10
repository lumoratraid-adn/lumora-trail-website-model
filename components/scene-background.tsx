"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

import dynamic from "next/dynamic"

const SceneCanvas = dynamic(() => import("./scene-canvas"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#030305]" />
})

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

            <SceneCanvas />
        </div>
    )
}
