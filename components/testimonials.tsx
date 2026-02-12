"use client"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 relative bg-transparent overflow-hidden border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-6">

          <AnimatedText className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black tracking-[0.4em] text-white/80 uppercase">OUR STORY</span>
            </div>
            <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-sans font-bold text-white uppercase tracking-tighter leading-[0.85]">
              FRIENDS. FOUNDERS. <br />
              <span className="text-primary italic">INNOVATORS.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-lg">
              We started as a team of friends with a shared dream: to build a unique space in the tech world where everything is possible.
            </p>
          </AnimatedText>

          <div className="relative">
            <AnimatedSection delay={0.2} className="p-6 md:p-16 rounded-[2rem] md:rounded-[3.5rem] bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-3xl relative z-10 overflow-hidden group hover:border-primary/40 transition-all duration-500">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4 45C6.4 45 0 38.6 0 30.6C0 22.6 6.4 16.2 14.4 16.2V0H28.8V30.6C28.8 38.6 22.4 45 14.4 45ZM45.6 45C37.6 45 31.2 38.6 31.2 30.6C31.2 22.6 37.6 16.2 45.6 16.2V0H60V30.6C60 38.6 53.6 45 45.6 45Z" fill="white" />
                </svg>
              </div>

              <p className="text-lg md:text-3xl font-medium leading-[1.4] mb-8 md:mb-12 text-white font-sans tracking-tight">
                &quot;Lumora Triad began as a circle of friends with a single dream: to carve out our own space in the tech landscape. We built this studio to prove that everything is possible when you&apos;re in the right group of innovators. We&apos;re here to turn your biggest ideas into digital reality.&quot;
              </p>

              <div className="flex items-center gap-6 pt-12 border-t border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white text-xl group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  LT
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl tracking-tight text-white uppercase group-hover:text-primary transition-colors">Lumora Triad</h3>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mt-1 group-hover:text-primary/60 transition-colors">Founding Team</p>
                </div>
              </div>
            </AnimatedSection>
            {/* Background Aura */}
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-primary/20 blur-[120px] rounded-full z-0" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-accent/10 blur-[120px] rounded-full z-0" />
          </div>

        </div>
      </div>
    </section>
  )
}
