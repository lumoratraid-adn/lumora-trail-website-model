"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, Code, Layout, Palette, TrendingUp, Settings, ArrowRight, ShieldCheck } from "lucide-react"

export function Footer() {
  const pillars = [
    { name: "Build Platforms", icon: Code, href: "/services#build" },
    { name: "Design Vision", icon: Palette, href: "/services#design" },
    { name: "Grow Authority", icon: TrendingUp, href: "/services#grow" },
    { name: "Support Legacy", icon: Settings, href: "/services#support" },
  ]

  const links = [
    { name: "Home", href: "/" },
    { name: "About Studio", href: "/about" },
    { name: "Capabilities", href: "/services" },
    { name: "Start Project", href: "/contact" },
  ]

  const contactInfo = [
    { icon: Mail, text: "lumoratriad@gmail.com", href: "mailto:lumoratriad@gmail.com" },
    { icon: Phone, text: "+91 99478 78418", href: "tel:+919947878418" },
    { icon: Phone, text: "+971 55 597 3832", href: "tel:+971555973832" },
  ]

  return (
    <footer className="bg-[#030303] text-white pt-24 pb-12 overflow-hidden border-t border-white/[0.05] relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col space-y-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

            {/* Identity Column */}
            <div className="space-y-8 sm:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <h3 className="text-[9px] font-michroma tracking-[0.5em] text-white uppercase">Identity</h3>
                </div>
                <p className="text-xl font-bold leading-relaxed text-white max-w-sm uppercase">
                  THE HIGH-PERFORMANCE TECHNICAL ECOSYSTEM FOR VISIONARY BRANDS.
                </p>
                <div className="flex gap-4 pt-4">
                  {/* Social Icons */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">X (Twitter)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-black transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Pillars Column */}
            <div className="space-y-8">
              <h3 className="text-[9px] font-michroma tracking-[0.5em] text-white uppercase">Capabilities</h3>
              <ul className="space-y-5">
                {pillars.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="flex items-center gap-4 group">
                      <item.icon className="w-4 h-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[10px] font-michroma uppercase tracking-[0.2em] text-white group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigator Column */}
            <div className="space-y-8">
              <h3 className="text-[9px] font-michroma tracking-[0.5em] text-white uppercase">Navigator</h3>
              <ul className="space-y-5">
                {links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[10px] font-michroma uppercase tracking-[0.2em] text-white hover:text-white transition-colors flex items-center gap-3 group"
                    >
                      {item.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Connect Column */}
            <div className="space-y-8">
              <h3 className="text-[9px] font-michroma tracking-[0.5em] text-white uppercase">Direct Connect</h3>
              <ul className="space-y-6">
                {contactInfo.map((info, i) => (
                  <li key={i}>
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-all">
                        <info.icon className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xs font-bold text-white group-hover:text-white transition-colors">
                        {info.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Type Mark */}
          <div className="w-full overflow-hidden pt-12 border-t border-white/[0.05]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full text-center"
            >
              <h2 className="text-[clamp(0.75rem,6vw,9rem)] font-michroma font-normal tracking-[-0.05em] uppercase leading-none select-none text-white/5 whitespace-nowrap">
                LUMORA TRIAD
              </h2>
            </motion.div>
          </div>

          {/* Copyright Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
            <p className="text-[9px] font-michroma text-white uppercase tracking-[0.3em]">
              © 2026 Lumora Triad / Digital Global Ops
            </p>
            <div className="flex gap-10">
              <Link href="#" className="text-[9px] font-michroma text-white uppercase tracking-[0.3em] hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="text-[9px] font-michroma text-white uppercase tracking-[0.3em] hover:text-white transition-colors">Terms</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
