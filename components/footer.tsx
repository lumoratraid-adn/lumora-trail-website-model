"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, Globe, Code, Layout, Palette, PlayCircle, ArrowRight, Search } from "lucide-react"

export function Footer() {
  const services = [
    { name: "Website & Software Development", icon: Code },
    { name: "UI / UX Design & Figma", icon: Layout },
    { name: "Branding & Digital Marketing", icon: Palette },
    { name: "SEO & Online Growth", icon: Search },
    { name: "Animations & Creative Design", icon: PlayCircle },
  ]

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const contactInfo = [
    { icon: Mail, text: "lumoratriad@gmail.com", href: "mailto:lumoratriad@gmail.com" },
    { icon: Phone, text: "+91 99478 78418", href: "tel:+919947878418" },
    { icon: Phone, text: "+91 98474 39125", href: "tel:+919847439125" },
    { icon: Phone, text: "+971 55 597 3832", href: "tel:+971555973832" },
  ]

  return (
    <footer className="bg-black/80 backdrop-blur-xl text-white pt-32 pb-12 overflow-hidden border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col space-y-24">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">

            {/* About Column */}
            <div className="space-y-8 sm:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <h3 className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Identity</h3>
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-white/40 max-w-md">
                  Architecting high-performance digital solutions for the next generation of visionaries.
                </p>
                <div className="flex gap-4 pt-4">
                  {/* Social Icons Placeholder - replacing with Lucide icons for now or custom SVGs if available */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">X (Twitter)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-10">
              <h3 className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Our Services</h3>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.name} className="flex items-center gap-4 group">
                    <item.icon className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs font-michroma uppercase tracking-widest text-white/40 group-hover:text-white transition-colors cursor-default">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column */}
            <div className="space-y-10">
              <h3 className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Links</h3>
              <ul className="space-y-4">
                {links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-xs font-michroma uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {item.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-10">
              <h3 className="text-[10px] font-michroma tracking-[0.5em] text-primary uppercase">Contact Info</h3>
              <ul className="space-y-6">
                {contactInfo.map((info, i) => (
                  <li key={i}>
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all">
                        <info.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                        {info.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Brand Section - Large Text (Above Copyright) */}
          <div className="w-full overflow-hidden mt-16 pb-12 border-b border-white/5">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="w-full flex items-center justify-between type-mark"
            >
              <h2 className="text-[clamp(1rem,6vw,10rem)] w-full text-justify flex justify-between font-michroma font-normal tracking-[-0.04em] uppercase leading-none select-none text-white whitespace-nowrap">
                <span>L</span>
                <span>u</span>
                <span>m</span>
                <span>o</span>
                <span>r</span>
                <span>a</span>
                <span>&nbsp;</span>
                <span>T</span>
                <span>r</span>
                <span>i</span>
                <span>a</span>
                <span>d</span>
              </h2>
            </motion.div>
          </div>

          {/* Copyright Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-michroma text-white/20 uppercase tracking-[0.3em]">
              © 2026 Lumora Triad. All rights reserved.
            </p>
            <div className="flex gap-12">
              <Link href="/privacy" className="text-[10px] font-michroma text-white/20 uppercase tracking-[0.3em] hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[10px] font-michroma text-white/20 uppercase tracking-[0.3em] hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
