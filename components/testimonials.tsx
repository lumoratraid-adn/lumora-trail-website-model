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
            <h2 className="text-[12vw] sm:text-[10vw] md:text-7xl font-michroma font-normal text-white uppercase tracking-tighter leading-[0.85]">
              FRIENDS. FOUNDERS. <br />
              <span className="text-primary">INNOVATORS.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/30 font-bold leading-relaxed max-w-lg uppercase">
              WE STARTED AS A TEAM OF FRIENDS WITH A SHARED DREAM: TO BUILD A UNIQUE SPACE IN THE TECH WORLD WHERE EVERYTHING IS POSSIBLE.
            </p>
          </AnimatedText>

          <div className="relative">
            <AnimatedSection delay={0.2} className="p-6 md:p-16 rounded-[2rem] md:rounded-[3.5rem] bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-3xl relative z-10 overflow-hidden group hover:border-primary/40 transition-all duration-500">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4 45C6.4 45 0 38.6 0 30.6C0 22.6 6.4 16.2 14.4 16.2V0H28.8V30.6C28.8 38.6 22.4 45 14.4 45ZM45.6 45C37.6 45 31.2 38.6 31.2 30.6C31.2 22.6 37.6 16.2 45.6 16.2V0H60V30.6C60 38.6 53.6 45 45.6 45Z" fill="white" />
                </svg>
              </div>

              <p className="text-[14px] md:text-3xl font-bold leading-[1.6] mb-8 md:mb-12 text-white/80 font-michroma tracking-tight uppercase">
                &quot;LUMORA TRIAD BEGAN AS A CIRCLE OF FRIENDS WITH A SINGLE DREAM: TO CARVE OUT OUR OWN SPACE IN THE TECH LANDSCAPE. WE BUILT THIS STUDIO TO PROVE THAT EVERYTHING IS POSSIBLE WHEN YOU&apos;RE IN THE RIGHT GROUP OF INNOVATORS. WE&apos;RE HERE TO TURN YOUR BIGGEST IDEAS INTO DIGITAL REALITY.&quot;
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
