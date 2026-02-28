"use client"

import Link from "next/link"
import Image from "next/image"
import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowUpRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "HOME", href: "/", icon: Home },
    { name: "STUDIO", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONNECT", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[9999] flex flex-col transition-transform duration-500 ${hidden && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"}`}>

        {/* Navbar Container */}
        <div className={`relative w-full transition-all duration-500 ${scrolled ? "h-16 md:h-18" : "h-20 md:h-24"}`}>
          {/* Background Layer */}
          <div
            className={`absolute inset-0 transition-all duration-500 border-b ${scrolled
              ? "bg-[#030303]/80 backdrop-blur-2xl border-white/8 shadow-xl shadow-black/20"
              : "bg-transparent border-transparent"
              }`}
          />

          <div className="w-full h-full px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 flex items-center justify-between max-w-[2000px] mx-auto">
            {/* Logo */}
            <Link href="/" className="flex flex-col group shrink-0">
              <span className="text-lg md:text-xl font-michroma text-white tracking-[-0.05em] leading-none uppercase group-hover:text-primary transition-colors">
                LUMORA TRIAD
              </span>
              <span className="text-[7px] font-michroma text-white/20 tracking-[0.5em] uppercase mt-1">DIGITAL STUDIO</span>
            </Link>

            {/* Desktop Nav — centered pill */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-white/[0.04] border border-white/8 rounded-full px-2 py-1.5 backdrop-blur-md">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 xl:px-5 py-2 rounded-full text-[9px] xl:text-[10px] font-michroma uppercase tracking-[0.22em] transition-all duration-300 flex items-center gap-1.5 ${isActive(item.href)
                    ? "bg-white text-black shadow-lg shadow-white/30"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.icon && <item.icon className="w-3 h-3" />}
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 pl-4 pr-1.5 py-1.5 bg-white text-black rounded-full font-michroma text-[8px] md:text-[9px] uppercase tracking-[0.2em] hover:bg-white/90 transition-all shadow-lg shadow-white/20 group whitespace-nowrap"
              >
                <span>GET LUMORA</span>
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" />
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 md:p-2.5 text-white lg:hidden hover:bg-white/5 rounded-xl transition-all"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#030303] z-[10000] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${mobileMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"
          } flex flex-col p-6 sm:p-12 h-screen overflow-y-auto`}
      >
        {/* Mobile header row */}
        <div className="flex justify-between items-center mb-16">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col">
            <span className="text-2xl font-michroma text-white tracking-[-0.05em] uppercase leading-none">
              LUMORA TRIAD
            </span>
            <span className="text-[10px] font-michroma text-white/20 tracking-[0.5em] uppercase mt-2">DIGITAL STUDIO</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-4 bg-white/5 rounded-full hover:bg-primary/10 transition-colors border border-white/10"
          >
            <X className="w-8 h-8 text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-6 py-5 rounded-2xl font-michroma text-2xl sm:text-3xl uppercase tracking-wider transition-all duration-300 group ${isActive(item.href) ? "bg-white text-black" : "text-white hover:bg-white/5"
                }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                {item.icon && <item.icon className="w-6 h-6" />}
                {item.name}
              </span>
              <ArrowUpRight className={`w-8 h-8 transition-all ${isActive(item.href) ? "opacity-100" : "opacity-10 group-hover:opacity-60"}`} />
            </Link>
          ))}
        </nav>

        <div className="mt-auto py-10 border-t border-white/5 space-y-4">
          <p className="text-[10px] font-michroma tracking-widest text-white/30 uppercase">Inquiries</p>
          <a href="mailto:lumoratriad@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">lumoratriad@gmail.com</a>
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-michroma text-[9px] uppercase tracking-[0.25em] hover:bg-white/80 transition-all"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
