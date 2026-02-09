"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, Facebook } from "lucide-react"
import { motion } from "framer-motion"

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const serviceLinks = [
    "Web & Software Development",
    "UI / UX Design & Figma",
    "Branding, Logo, Poster & Digital Marketing",
    "Animations & Creative",
  ]

  return (
    <footer className="pt-32 pb-12 overflow-hidden border-t border-white/5 relative z-10 bg-transparent">
      {/* Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">

          {/* BRAND COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-sans font-semibold tracking-[-0.08em] text-white uppercase">
                LUMORA TRIAD
              </h3>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] leading-loose max-w-xs">
                Architecting high-performance digital solutions for the next generation of visionaries.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/lumo.ratraid/?hl=en" },
                { Icon: XIcon, href: "https://x.com/LumoraTraid" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/lumoratriad/" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586286665509" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* SERVICES COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-10"
          >
            <h5 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Our Services</h5>
            <ul className="space-y-4">
              {[
                "Web & Software Development",
                "UI / UX Design & Figma",
                "Digital Marketing & SEO",
                "Animations & Creative Design",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    prefetch={true}
                    className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NAVIGATION COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <h5 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Links</h5>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            <h5 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Contact Info</h5>
            <div className="space-y-6">
              <a
                href="mailto:lumoratriad@gmail.com"
                className="flex items-center gap-4 text-xs font-bold lowercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                lumoratriad@gmail.com
              </a>
              <a
                href="tel:+919947878418"
                className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 99478 78418
              </a>
              <a
                href="tel:+919562276639"
                className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 95622 76639
              </a>
            </div>
          </motion.div>

        </div>

        {/* LARGE DISPLAY TEXT */}
        <div className="relative mb-24 select-none pointer-events-none w-full flex justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[clamp(1.5rem,14vw,12rem)] font-bold text-white/[0.18] text-center leading-none tracking-tighter uppercase whitespace-nowrap drop-shadow-[0_0_80px_rgba(255,255,255,0.08)] px-4"
          >
            LUMORA TRIAD
          </motion.h2>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">
          <p>© {currentYear} <span className="text-primary/50">Lumora Triad</span>. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
