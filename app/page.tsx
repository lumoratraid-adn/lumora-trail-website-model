import dynamic from "next/dynamic"
import type { Metadata } from "next"

import { NetworkHero } from "@/components/network-hero"
const MissionVision = dynamic(() => import("@/components/mission-vision").then(mod => mod.MissionVision))
const WhatWeDo = dynamic(() => import("@/components/what-we-do").then(mod => mod.WhatWeDo))
const ShowcaseSection = dynamic(() => import("@/components/showcase-section").then(mod => mod.ShowcaseSection))
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer))


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
