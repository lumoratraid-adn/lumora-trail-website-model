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

    const scrollListener = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", scrollListener, { passive: true })
    return () => window.removeEventListener("scroll", scrollListener)
  }, [lastScrollY, mobileMenuOpen])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset"
  }, [mobileMenuOpen])

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 py-2 sm:py-3 ${visible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full opacity-0"
        }`}
    >
      <div
        className={`w-[98%] mx-auto flex items-center justify-between transition-all duration-700 rounded-full px-5 md:px-8 relative z-[110] backdrop-blur-md ${scrolled || mobileMenuOpen
          ? "h-20 bg-black/40 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "h-28 bg-transparent border border-transparent"
          }`}
      >
        <Link
          href="/"
          prefetch={true}
          onClick={() => {
            if (typeof window !== 'undefined' && window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            setMobileMenuOpen(false);
          }}
          className="relative z-[120] flex items-center group flex-1 lg:flex-none justify-start"
        >
          <span className="text-xl md:text-2xl font-medium text-white transition-all duration-300 group-hover:text-primary tracking-tight whitespace-nowrap" style={{ letterSpacing: "-0.02em" }}>
            Lumora Triad
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-14 xl:gap-20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                className="text-[12px] font-black uppercase tracking-[0.25em] text-white/80 hover:text-white transition-all duration-300 hover:scale-110 relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Desktop Book Now Button */}
          <Link
            href="/contact"
            prefetch={true}
            className="hidden lg:flex group items-center gap-4 pl-10 pr-2.5 py-2 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full font-black text-[11px] uppercase tracking-[0.2em] text-white hover:bg-primary/40 transition-all active:scale-95 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.4)]"
          >
            <span>BOOK NOW</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
            </div>
          </Link>

          {/* Mobile Book Now Button */}
          <Link
            href="/contact"
            prefetch={true}
            className="lg:hidden group flex items-center gap-2 pl-5 pr-1.5 py-1.5 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full font-black text-[10px] uppercase tracking-[0.15em] text-white hover:bg-primary/30 transition-all active:scale-95 shadow-[0_0_15px_rgba(139,92,246,0.15)] z-[120]"
          >
            <span>BOOK NOW</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
              <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-white transition-colors" />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 text-white lg:hidden z-[120] hover:bg-white/5 rounded-full transition-colors scale-110"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-[#0E0F13] z-[100] flex flex-col pt-32 px-10 h-screen"
          >
            {/* Background Decor */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[130px] rounded-full" />

            <div className="flex flex-col gap-8 relative z-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-6xl font-bold tracking-tighter text-white hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12 space-y-8 relative z-10">
              <div className="h-px bg-white/10 w-full" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                <div className="space-y-4">
                  <p className="text-[10px] font-black tracking-widest text-white/20 uppercase">Get in touch</p>
                  <a href="mailto:lumoratriad@gmail.com" className="text-xl font-bold text-white lowercase tracking-widest block hover:text-primary transition-colors">lumoratriad@gmail.com</a>
                </div>
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full sm:w-auto px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 active:scale-95 transition-all shadow-[0_15px_30px_rgba(139,92,246,0.3)]"
                >
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
