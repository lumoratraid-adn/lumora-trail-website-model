"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { ShieldCheck, Cpu, Lightbulb, Instagram, Linkedin, Facebook, Mail, Phone } from "lucide-react"
import { ExpertiseSection } from "@/components/expertise-section"


const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
)

const philosophies = [
  {
    title: "Design with intention",
    desc: "Every pixel serves a purpose. We prioritize clarity and usability in every interface we design.",
    icon: Lightbulb,
  },
  {
    title: "Build for scalability",
    desc: "Our architecture is built to grow with your business, ensuring long-term performance and reliability.",
    icon: Cpu,
  },
  {
    title: "Deliver with confidence",
    desc: "We test, optimize, and refine until everything is perfect, so you can launch with absolute peace of mind.",
    icon: ShieldCheck,
  },
]

export default function AboutPage() {
  return (
    <main className="relative pt-32 overflow-hidden">
      {/* Hero Section */}
      <section className="section-spacing relative">
        {/* Background Accents */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full opacity-50" />
          <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full opacity-30" />
        </div>

        <div className="container mx-auto max-w-5xl text-center space-y-12 relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-8xl font-condensed font-bold tracking-tight text-white uppercase leading-[1.1] md:leading-[0.9]">
              Clarity. Technology. <br className="hidden md:block" />
              <span className="text-primary italic">Purpose.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-xl md:text-3xl font-condensed font-bold text-white uppercase tracking-wider">Who We Are</h2>
            <p className="text-base md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium">
              We are a team of passionate software engineers, designers, and digital creators dedicated
              to building intuitive designs and reliable software solutions.
              Our work blends UX research, visual design, and robust development to ensure every
              product is not only beautiful but also functional and scalable.
            </p>
          </motion.div>
        </div>
      </section>

      <ExpertiseSection />

      {/* Philosophy Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-accent/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto relative z-10 px-6">
          <div className="mb-20 text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">How We Think</span>
              <span className="w-8 h-[2px] bg-primary rounded-full" />
            </motion.div>
            <h2 className="text-4xl sm:text-[10vw] md:text-[6vw] font-sans font-semibold text-white uppercase tracking-[-0.08em] leading-[1] md:leading-[0.85] drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Our <span className="text-primary italic">Philosophy</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {philosophies.map((item, index) => {
              const Icon = item.icon
              const isFirstTwo = index < 2
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 5,
                      delay: index * 0.7,
                      ease: "easeInOut"
                    },
                    delay: index * 0.1
                  }}
                  className={`glass-card p-4 md:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center text-center gap-2 md:gap-6 group relative overflow-hidden transition-all border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] ${isFirstTwo ? 'aspect-square' : 'col-span-2 md:col-span-1 w-full md:w-auto min-h-[200px] aspect-auto md:aspect-square'
                    }`}
                >
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-1 md:mb-2 transition-all group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 border border-white/5">
                    <Icon className="w-6 h-6 md:w-10 md:h-10 text-white/70 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div className="space-y-1 md:space-y-4 w-full">
                    <h3 className="text-sm md:text-[22px] font-sans font-bold tracking-tight text-white uppercase group-hover:text-primary transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-[10px] md:text-[15px] leading-relaxed font-medium transition-colors group-hover:text-white/60 line-clamp-3 md:line-clamp-none px-1">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social & Contact Section */}
      <section className="section-spacing relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-[4vw] font-sans font-semibold text-white uppercase tracking-[-0.08em] leading-[1.1] md:leading-none">
                Let&apos;s Build <br />
                <span className="text-primary italic">Something Great Together.</span>
              </h2>
              <div className="space-y-4">
                <a href="mailto:lumoratriad@gmail.com" className="flex items-center gap-4 text-xl text-white/60 hover:text-white transition-colors group lowercase">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  lumoratriad@gmail.com
                </a>
                <a href="tel:+919947878418" className="flex items-center gap-4 text-xl text-white/60 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  +91 99478 78418
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/lumo.ratraid/?hl=en" },
                { name: "X (Twitter)", icon: XIcon, href: "https://x.com/LumoraTraid" },
                { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/lumoratriad/" },
                { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586286665509" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-primary/10 transition-all border border-white/5"
                >
                  <social.icon className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black uppercase text-white/20 group-hover:text-white tracking-widest">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
