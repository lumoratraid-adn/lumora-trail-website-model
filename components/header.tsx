"use client"

import Link from "next/link"
import Image from "next/image"
import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)

      // Show on scroll up, hide on scroll down
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true) // scrolling down
      } else {
        setHidden(false) // scrolling up
      }
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[9999] flex flex-col transition-transform duration-500 ${hidden && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"}`}>
        {/* Top Marquee Banner */}
        <div className="w-full h-12 bg-primary flex items-center justify-center overflow-hidden relative z-50">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap min-w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <span key={i} className="text-[10px] font-michroma tracking-[0.4em] text-primary-foreground uppercase shrink-0">
                LUMORA TRIAD • WEB ARCHITECTURE • INNOVATION • DIGITAL STUDIO • BRAND IDENTITY • LUMORA TRIAD •
              </span>
            ))}
          </div>
        </div>

        {/* Navbar Container */}
        <div className={`relative w-full transition-all duration-500 ${scrolled ? "h-16 md:h-20" : "h-20 md:h-24"}`}>
          {/* Background Layer */}
          <div
            className={`absolute inset-0 transition-all duration-500 border-b ${scrolled
              ? "bg-background/95 backdrop-blur-xl border-foreground/10 shadow-lg"
              : "bg-background/80 backdrop-blur-md border-foreground/5"
              }`}
          />

          <div className="w-full h-full px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 flex items-center justify-between max-w-[2000px] mx-auto">
            {/* Logo - Left Corner */}
            <Link
              href="/"
              className="flex items-center gap-2 group shrink-0"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.svg"
                  alt="Lumora Triad"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav - Center */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[10px] xl:text-[11px] font-michroma uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-all relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions - Right */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 pl-3 md:pl-4 pr-1 py-1 md:py-1.5 bg-foreground text-background rounded-full font-michroma text-[7px] md:text-[8px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all shadow-xl shadow-foreground/5 group whitespace-nowrap"
              >
                <span>GET LUMORA</span>
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-background flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-foreground group-hover:text-primary" />
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 md:p-2.5 text-foreground lg:hidden hover:bg-foreground/5 rounded-xl transition-all"
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
        className={`lg:hidden fixed inset-0 bg-background z-[10000] transition-all duration-500 ease-in-out ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } flex flex-col p-6 sm:p-12 h-screen overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-16">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-michroma text-[8px] uppercase tracking-[0.2em] hover:bg-primary/90 transition-all"
          >
            GET LUMORA
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-4 bg-foreground/5 rounded-full hover:bg-primary/10 transition-colors"
          >
            <X className="w-10 h-10 text-foreground" />
          </button>
        </div>
        <nav className="flex flex-col gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl sm:text-4xl font-michroma text-foreground hover:text-primary transition-all flex items-center justify-between group uppercase tracking-wider"
            >
              <span className="group-hover:translate-x-4 transition-transform duration-500">{item.name}</span>
              <ArrowUpRight className="w-10 h-10 opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </Link>
          ))}
        </nav>

        <div className="mt-auto py-12 border-t border-foreground/5">
          <p className="text-[10px] font-michroma tracking-widest text-foreground/40 uppercase mb-4">Inquiries</p>
          <a href="mailto:lumoratriad@gmail.com" className="text-2xl font-bold text-foreground">lumoratriad@gmail.com</a>
        </div>
      </div>
    </>
  )
}
