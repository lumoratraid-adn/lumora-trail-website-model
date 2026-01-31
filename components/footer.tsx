"use client"

import Link from "next/link"
import { Instagram, Twitter, Linkedin, Mail, Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

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
    "Branding, Logo & Posters",
    "Animations & Creative",
  ]

  return (
    <footer className="pt-20 pb-12 overflow-hidden border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">

          {/* BRAND COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Link href="/" className="inline-block">
              {/* Logo removed */}
            </Link>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] leading-loose max-w-xs">
              Architecting high-performance digital solutions for the next generation of visionaries.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/30 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
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
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Capabilities</h5>
            <ul className="space-y-4">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
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
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Explore</h5>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
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
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Get in touch</h5>
            <div className="space-y-6">
              <a
                href="mailto:lumoratraid@gmail.com"
                className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                lumoratraid@gmail.com
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
        <div className="relative mb-24 select-none pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[clamp(2.5rem,15vw,12rem)] font-bold text-white/[0.02] text-center leading-none tracking-tighter uppercase stroke-text whitespace-nowrap"
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
