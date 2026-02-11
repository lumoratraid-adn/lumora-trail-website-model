import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Preloader } from "@/components/preloader"
import dynamic from "next/dynamic"
import "./globals.css"

const SceneBackground = dynamic(() => import("@/components/scene-background").then(mod => mod.SceneBackground), { ssr: false })
const WhatsAppChatbot = dynamic(() => import("@/components/whatsapp-chatbot").then(mod => mod.WhatsAppChatbot), { ssr: false })
const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then(mod => mod.ScrollToTop), { ssr: false })

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: 'swap',
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-condensed",
  weight: "400",
  display: 'swap',
})

const baseUrl = "https://www.lumoratriad.in"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Lumora Triad | Premium Web Development & UI/UX Agency",
    template: "%s | Lumora Triad",
  },
  description:
    "Lumora Triad is a premier digital agency specializing in custom web development, UI/UX design, and strategic branding. We build high-performance digital solutions for startups and businesses.",
  keywords: [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Digital Agency",
    "Software Development",
    "Lumora Triad",
    "Lumora Triad India",
    "Lumora Triad Kerala",
    "Digital Agency India",
    "Website Design India",
    "Custom Web Solutions",
    "App Development",
    "Best Web Development Agency",
  ],
  authors: [{ name: "Lumora Triad", url: baseUrl }],
  creator: "Lumora Triad",
  publisher: "Lumora Triad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lumora Triad | Premium Web Development & UI/UX Agency",
    description:
      "Transforming ideas into high-performance digital products. Specialized in Web Development, UI/UX, and Branding for visionary businesses.",
    url: baseUrl,
    siteName: "Lumora Triad",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lumora Triad Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumora Triad | Premium Web Development",
    description: "Transforming ideas into digital reality. Expert Web Development, UI/UX, and Branding services.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      {
        url: "/icon3.png",
        type: "image/png",
        sizes: "32x32",
      }
    ],
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${bebasNeue.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-[#0E0F13] text-white selection:bg-primary selection:text-white">
        <Preloader />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SceneBackground />
          <ScrollToTop />
          <Header />
          {children}
          <WhatsAppChatbot />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lumora Triad",
              "alternateName": ["Lumora", "Lumora Triad Agency", "Lumora Tech"],
              "url": "https://www.lumoratriad.in",
              "logo": "https://www.lumoratriad.in/icon.svg",
              "description": "Premium Digital Agency for Web Development, UI/UX Design, and strategic Branding. Visit our website: https://www.lumoratriad.in",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 95622 76639",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.instagram.com/lumoratriad",
                "https://www.linkedin.com/company/lumoratriad",
                "https://twitter.com/lumoratriad"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.lumoratriad.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.lumoratriad.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://www.lumoratriad.in/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Services",
                  "item": "https://www.lumoratriad.in/services"
                }
              ]
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}

