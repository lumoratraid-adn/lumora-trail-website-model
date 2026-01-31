import { NetworkHero } from "@/components/network-hero"
import { MissionVision } from "@/components/mission-vision"
import { WhatWeDo } from "@/components/what-we-do"
import { ShowcaseSection } from "@/components/showcase-section"
import { HowWeWork } from "@/components/how-we-work"
import { Testimonials } from "@/components/testimonials"
import { ConnectForm } from "@/components/connect-form"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lumora Triad | Premium Digital Studio",
  description:
    "We design and build digital experiences that move businesses forward. Lumora Triad is a multidisciplinary digital studio specializing in design, development, and scalability.",
}

import { WhyChooseUs } from "@/components/why-choose-us"

export default function Home() {
  return (
    <main className="relative">
      <NetworkHero />

      <div className="relative z-10">
        <WhatWeDo />
        <WhyChooseUs />
        <HowWeWork />
        <Testimonials />
        <CTASection />
        <ConnectForm />
      </div>

      <Footer />
    </main>
  )
}
