import dynamic from "next/dynamic"
import type { Metadata } from "next"

import { NetworkHero } from "@/components/network-hero"
import { WhatWeDo } from "@/components/what-we-do"
import { ShowcaseSection } from "@/components/showcase-section"
import { HowWeWork } from "@/components/how-we-work"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Lumora Triad | Premium Digital Studio",
  description:
    "Lumora Triad is a premier digital studio specializing in high-end design and development. We build digital experiences that move visionary businesses forward.",
}

export default function Home() {
  return (
    <main className="relative">
      {/* ─── HERO ─── */}
      <NetworkHero />

      <div className="relative z-10">
        {/* ─── SERVICES PREVIEW (CARDS) ─── */}
        <WhatWeDo />

        {/* ─── FEATURED PROJECTS ─── */}
        <ShowcaseSection />

        {/* ─── PROCESS ─── */}
        <HowWeWork />

        {/* ─── TESTIMONIALS ─── */}
        <Testimonials />

        {/* ─── CTA BANNER ─── */}
        <CTASection />
      </div>

      <Footer />
    </main>
  )
}
