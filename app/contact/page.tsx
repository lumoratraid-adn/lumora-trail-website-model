"use client"

import { Mail, Phone, Code, Palette, TrendingUp, Settings, ArrowRight, Loader2, Globe2 } from "lucide-react"
import { useState } from "react"
import { Toast } from "@/components/ui/toast"
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section"

const intents = [
  { id: "build", label: "Build", icon: Code, desc: "Software & Web" },
  { id: "design", label: "Design", icon: Palette, desc: "UI/UX & Brand" },
  { id: "grow", label: "Grow", icon: TrendingUp, desc: "SEO & Growth" },
  { id: "support", label: "Support", icon: Settings, desc: "Care & Security" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedIntent, setSelectedIntent] = useState("build")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service: selectedIntent, message }),
      })

      if (!res.ok) throw new Error("Failed to send message")
      setIsSuccess(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <AnimatedText className="space-y-4">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight tracking-tight">
                Connect with{" "}
                <span className="font-serif italic font-normal text-accent">Us.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {"Let's build your next digital legacy together."}
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Form + Intent */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Intent Selector */}
            <AnimatedSection className="space-y-4">
              <label className="text-sm font-medium text-foreground">Select Your Objective</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {intents.map((intent) => {
                  const isActive = selectedIntent === intent.id
                  return (
                    <button
                      key={intent.id}
                      type="button"
                      onClick={() => setSelectedIntent(intent.id)}
                      className={`p-5 rounded-xl border transition-all duration-300 text-left space-y-2 ${
                        isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-background hover:border-foreground/20 text-foreground"
                      }`}
                    >
                      <intent.icon className={`w-5 h-5 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                      <p className="text-sm font-heading font-semibold">{intent.label}</p>
                      <p className={`text-xs ${isActive ? "text-background/60" : "text-muted-foreground"}`}>
                        {intent.desc}
                      </p>
                    </button>
                  )
                })}
              </div>
            </AnimatedSection>

            {/* The Form */}
            <AnimatedSection delay={0.1}>
              <div className="p-6 md:p-10 rounded-xl bg-secondary border border-border">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-sm font-medium text-foreground">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 99999 99999"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium text-foreground">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-medium text-foreground">Project Details</label>
                    <textarea
                      id="contact-message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all resize-none"
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
                        Send Message
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

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-5">
              <AnimatedSection delay={0.2}>
                <div className="p-6 rounded-xl bg-background border border-border space-y-5 h-full">
                  <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">Direct Contact</h3>
                  <div className="space-y-4">
                    <a href="mailto:lumoratriad@gmail.com" className="flex items-center gap-3 group">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">lumoratriad@gmail.com</span>
                    </a>
                    <a href="tel:+919947878418" className="flex items-center gap-3 group">
                      <Phone className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">+91 99478 78418</span>
                    </a>
                    <a href="tel:+971555973832" className="flex items-center gap-3 group">
                      <Phone className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">+971 55 597 3832</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <div className="p-6 rounded-xl bg-background border border-border space-y-5 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <Globe2 className="w-4 h-4 text-accent" />
                    <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">Global Presence</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                      <p className="text-sm font-heading font-semibold text-foreground">India</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                      <p className="text-sm font-heading font-semibold text-foreground">UAE</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Toast message="Message sent. We'll connect soon." isVisible={isSuccess} onClose={resetForm} />
    </main>
  )
}
