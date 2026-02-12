import dynamic from "next/dynamic"
import type { Metadata } from "next"

import { NetworkHero } from "@/components/network-hero"
import { MissionVision } from "@/components/mission-vision"
import { TechEcosystem } from "@/components/tech-ecosystem"
import { Process } from "@/components/process"

import { WhatWeDo } from "@/components/what-we-do"
import { ShowcaseSection } from "@/components/showcase-section"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowWeWork } from "@/components/how-we-work"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { ConnectForm } from "@/components/connect-form"

export const metadata: Metadata = {
  title: "Lumora Triad | Premium Digital Studio",
  description:
    "Lumora Triad is a premier digital studio specializing in high-end design and development. We build digital experiences that move visionary businesses forward.",
}

export default function Home() {
  return (
    <main className="relative">
      <NetworkHero />

      <div className="relative z-10">
        <MissionVision />
        <WhatWeDo />
        <WhyChooseUs />
        <ShowcaseSection />
        <TechEcosystem />
        <HowWeWork />
        <Process />
        <Testimonials />
        <CTASection />
        <ConnectForm />
      </div>

      <Footer />
    </main>
  )
}
