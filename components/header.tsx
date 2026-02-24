"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
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
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-transform duration-500 ${
          hidden && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl border-b border-border"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-8 h-8 md:w-9 md:h-9 group-hover:scale-105 transition-transform duration-300">
                <Image src="/logo.svg" alt="Lumora Triad" fill className="object-contain invert" priority />
              </div>
              <span className="font-heading font-semibold text-sm md:text-base text-foreground tracking-tight uppercase">
                Lumora Triad
              </span>
            </Link>

            {/* Desktop Nav - pill style like the image */}
            <nav className="hidden lg:flex items-center bg-secondary/80 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 px-5 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/80 transition-colors"
              >
                Get Started
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground lg:hidden hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-[10000] transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        } flex flex-col`}
      >
        {/* Mobile header */}
        <div className="flex justify-between items-center px-5 h-16 border-b border-border">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <Image src="/logo.svg" alt="Lumora Triad" fill className="object-contain invert" />
            </div>
            <span className="font-heading font-semibold text-sm text-foreground uppercase">Lumora Triad</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="flex flex-col px-5 py-8 gap-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-accent/10 text-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.name}
              <ArrowUpRight className="w-5 h-5 opacity-30" />
            </Link>
          ))}
        </nav>

        {/* Mobile footer */}
        <div className="p-5 border-t border-border space-y-4">
          <a href="mailto:lumoratriad@gmail.com" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
            lumoratriad@gmail.com
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-accent text-accent-foreground rounded-xl text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
