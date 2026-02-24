"use client"

import { Loader2, ArrowRight } from "lucide-react"
import * as React from "react"
import { useEffect, useState } from "react"
import { Toast } from "./ui/toast"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

export function ConnectForm({ defaultService = "" }: { defaultService?: string }) {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [serviceSelected, setServiceSelected] = useState(defaultService)
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    setMounted(true)
    if (defaultService) setServiceSelected(defaultService)
  }, [defaultService])

  const resetForm = () => {
    setIsSuccess(false)
    setName("")
    setEmail("")
    setServiceSelected(defaultService)
    setMessage("")
    setPhone("")
  }

  const services = [
    "Website & Software Development",
    "UI / UX Design & Figma Projects",
    "Branding & Digital Marketing",
    "SEO & Online Growth",
    "Website Redesign & Maintenance",
    "Landing Pages & Lead Generation",
    "Animations & Creative Design",
    "Other",
  ]

  if (!mounted) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service: serviceSelected, message }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Unknown error")

      setIsSuccess(true)
    } catch (err: any) {
      setError(err?.message || "Failed to send")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <AnimatedText className="mb-12 text-center space-y-4">
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground leading-tight tracking-tight">
              Let's build your next{" "}
              <span className="font-serif italic font-normal text-accent">big thing.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind? We respond to all inquiries within 24 hours.
            </p>
          </AnimatedText>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <div className="p-6 md:p-10 rounded-xl bg-background border border-border">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="connect-name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <input
                      id="connect-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="connect-phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      id="connect-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 99999 99999"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="connect-email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    id="connect-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="connect-service" className="text-sm font-medium text-foreground">
                    Service Interest
                  </label>
                  <div className="relative">
                    <select
                      id="connect-service"
                      value={serviceSelected}
                      onChange={(e) => setServiceSelected(e.target.value)}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/40 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="connect-message" className="text-sm font-medium text-foreground">
                    Project Details
                  </label>
                  <textarea
                    id="connect-message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-3.5 bg-foreground text-background rounded-lg text-sm font-medium flex items-center justify-center gap-3 hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin w-4 h-4" />
                  ) : (
                    <>
                      Send Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-accent text-center text-sm font-medium mt-2 bg-accent/10 py-2 rounded-lg">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Toast message="Message Received! We'll get back to you within 24 hours." isVisible={isSuccess} onClose={resetForm} />
    </section>
  )
}
