"use client"

import Link from "next/link"
import Image from "next/image"
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
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 py-1 sm:py-2 ${visible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full opacity-0"
        }`}
    >
      <div
        className={`w-full mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-8 relative z-[110] backdrop-blur-md ${scrolled || mobileMenuOpen
          ? "h-16 sm:h-20 bg-black/40 border border-white/10 shadow-2xl"
          : "h-20 sm:h-24 bg-transparent border border-transparent"
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
          <Image
            src="/logo.svg"
            alt="Lumora Triad"
            width={400}
            height={120}
            priority
            className="h-20 xs:h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-10 xl:gap-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                className="text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Book Now Button */}
          <Link
            href="/contact"
            prefetch={true}
            className="hidden lg:flex group items-center gap-3 pl-8 pr-2 py-1.5 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-white hover:bg-primary/40 transition-all active:scale-95"
          >
            <span>BOOK NOW</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
            </div>
          </Link>

          {/* Mobile Book Now Button */}
          <Link
            href="/contact"
            prefetch={true}
            className="lg:hidden group flex items-center gap-2 pl-4 pr-1 py-1.5 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full font-black text-[9px] uppercase tracking-[0.15em] text-white hover:bg-primary/30 transition-all active:scale-95 z-[120]"
          >
            <span>BOOK NOW</span>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
              <ArrowUpRight className="w-2.5 h-2.5 text-black group-hover:text-white transition-colors" />
            </div>
          </Link>

          {/* Mobile Menu Button - Snappy interaction */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white lg:hidden z-[120] hover:bg-white/5 rounded-full transition-all active:scale-90"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Updated transition */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="lg:hidden fixed inset-0 bg-[#0E0F13] z-[100] flex flex-col pt-24 px-8 h-screen overflow-y-auto"
          >
            {/* Background Decor */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 blur-[130px] rounded-full" />

            <div className="flex flex-col gap-4 relative z-10 pt-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl xs:text-5xl font-bold tracking-tighter text-white hover:text-primary transition-colors flex items-center justify-between group py-1"
                  >
                    {item.name}
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 text-primary" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 space-y-8 relative z-10 pb-10">
              <div className="h-px bg-white/10 w-full" />
              <div className="flex flex-col gap-8">
                <div className="space-y-3">
                  <p className="text-[10px] font-black tracking-widest text-white/30 uppercase">Get in touch</p>
                  <a href="mailto:lumoratriad@gmail.com" className="text-xl font-bold text-white lowercase tracking-tight block hover:text-primary transition-colors">lumoratriad@gmail.com</a>
                </div>
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-primary/20"
                >
                  Book Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
