"use client"

import Link from "next/link"
import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (!mobileMenuOpen) setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, mobileMenuOpen])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset"
  }, [mobileMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 px-6 py-4 ${visible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full opacity-0"
        }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-8 relative z-[110] ${scrolled || mobileMenuOpen
          ? "h-16 bg-primary/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "h-20 bg-transparent"
          }`}
      >
        {/* Logo Section */}
        <Link
          href="/"
          onClick={() => {
            if (typeof window !== 'undefined' && window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            setMobileMenuOpen(false);
          }}
          className="relative z-[120] flex items-center"
        >
          <img
            src="/logo.svg"
            alt="Lumora Triad"
            className="h-30 sm:h-33 w-auto brightness-200"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-16">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[11px] font-bold uppercase tracking-[0.25em] text-white/90 hover:text-primary transition-all duration-300 hover:scale-110 ${index === 0 ? "-translate-x-6" : index === navItems.length - 1 ? "translate-x-6" : ""
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hidden sm:flex group items-center gap-4 pl-8 pr-2 py-1.5 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] text-white hover:bg-primary/30 transition-all active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
          >
            <span>Book Now</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
            </div>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white lg:hidden z-[120]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-[#0E0F13] z-[100] flex flex-col pt-32 px-10 h-screen"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-bold tracking-tighter text-white hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12 space-y-8">
              <div className="h-px bg-white/10 w-full" />
              <div className="space-y-4">
                <p className="text-[10px] font-black tracking-widest text-white/20 uppercase">Get in touch</p>
                <a href="mailto:lumoratriad@gmail.com" className="text-xl font-bold text-white lowercase tracking-widest">lumoratriad@gmail.com</a>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-6 bg-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
