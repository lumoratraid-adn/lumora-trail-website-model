import dynamic from "next/dynamic"
import { MissionVision } from "@/components/mission-vision"
import { WhatWeDo } from "@/components/what-we-do"
import { ShowcaseSection } from "@/components/showcase-section"

import { Footer } from "@/components/footer"
import type { Metadata } from "next"

const NetworkHero = dynamic(() => import("@/components/network-hero").then(mod => mod.NetworkHero), {
  ssr: false,
  loading: () => <div className="h-[80vh] md:h-screen bg-[#0E0F13]" />
})
const WhyChooseUs = dynamic(() => import("@/components/why-choose-us").then(mod => mod.WhyChooseUs))
const HowWeWork = dynamic(() => import("@/components/how-we-work").then(mod => mod.HowWeWork))
const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => mod.Testimonials))
const CTASection = dynamic(() => import("@/components/cta-section").then(mod => mod.CTASection))
const ConnectForm = dynamic(() => import("@/components/connect-form").then(mod => mod.ConnectForm), { ssr: false })

export const metadata: Metadata = {
  title: "Lumora Triad | Premium Digital Studio",
  description:
    "We design and build digital experiences that move businesses forward. Lumora Triad is a multidisciplinary digital studio specializing in design, development, and scalability.",
}



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
