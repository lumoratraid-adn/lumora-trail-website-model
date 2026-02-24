"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ArrowRight } from "lucide-react"

export function Footer() {
  const services = [
    { name: "Web Development", href: "/services#build" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "SEO & Growth", href: "/services#grow" },
    { name: "Maintenance & Support", href: "/services#support" },
  ]

  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ]

  const contactInfo = [
    { icon: Mail, text: "lumoratriad@gmail.com", href: "mailto:lumoratriad@gmail.com" },
    { icon: Phone, text: "+91 99478 78418", href: "tel:+919947878418" },
    { icon: Phone, text: "+971 55 597 3832", href: "tel:+971555973832" },
  ]

  return (
    <footer className="bg-secondary border-t border-border relative z-10">
      {/* Main Footer */}
      <div className="container mx-auto pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8">
                <Image src="/logo.svg" alt="Lumora Triad" fill className="object-contain invert" />
              </div>
              <span className="font-heading font-semibold text-sm text-foreground tracking-tight uppercase">
                Lumora Triad
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A premier digital agency delivering high-performance web development, design, and growth solutions for visionary brands.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { label: "Instagram", href: "https://instagram.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> },
                { label: "LinkedIn", href: "https://linkedin.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> },
                { label: "X", href: "https://twitter.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div className="space-y-5">
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">Company</h3>
            <ul className="space-y-3">
              {pages.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                    {item.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, i) => (
                <li key={i}>
                  <a href={info.href} className="flex items-center gap-3 group">
                    <info.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {info.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex gap-3 text-xs text-muted-foreground/50">
              <span>India</span>
              <span>|</span>
              <span>UAE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            2026 Lumora Triad. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
