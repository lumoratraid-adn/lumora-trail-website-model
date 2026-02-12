"use client"

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion"
import { ReactNode, useRef } from "react"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    id?: string
    width?: "full" | "100%"
}

export function AnimatedSection({ children, className = "", delay = 0, id, width = "100%" }: AnimatedSectionProps) {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    )
}

export function AnimatedText({ children, className = "", delay = 0 }: AnimatedSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img
                style={{ y, scale }}
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    )
}

export function MagneticButton({ children, className = "" }: { children: ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
    const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.15); // Adjust sensitivity
        y.set((clientY - centerY) * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className={`cursor-pointer ${className}`}
        >
            {children}
        </motion.div>
    );
}
