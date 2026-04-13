import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import Script from "next/script";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Final Production-Grade Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://sm-tech.com"), 
  title: {
    default: "SM Tech | 20+ Years Excellence in AI Automation & Full Stack Development",
    template: "%s | SM Tech"
  },
  description: "SM Tech provides world-class AI Automation, Custom SaaS, and Enterprise solutions. Expert AI Agents & RAG systems by Ghulam Abbas Bhatti (20+ Years Exp).",
  
  keywords: [
    "AI Automation Expert Pakistan", 
    "Full Stack Web Developer", 
    "Enterprise AI Agents", 
    "Custom SaaS Development", 
    "RAG Systems", 
    "AI Sales Agents", 
    "WhatsApp AI Bots",
    "SM Tech Bhowana"
  ],

  // --- BRANDING & ICONS ---
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32" },
      { url: "/logo.png", sizes: "16x16" },
      { url: "/logo.png", sizes: "any" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180" }
    ],
    shortcut: "/logo.png",
  },

  // Canonical & Robots
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Social Previews (Open Graph)
  openGraph: {
    title: "SM Tech | Leading AI Automation & Software House",
    description: "Transforming businesses with Enterprise-grade AI Agents and Custom Software Solutions. 20 Years of Technical Expertise.",
    url: "https://sm-tech.com",
    siteName: "SM Tech",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "SM Tech AI Automation Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Preview
  twitter: {
    card: "summary_large_image",
    title: "SM Tech | AI & Full Stack Solutions",
    description: "Enterprise AI Agents and Custom SaaS built for Scale.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  
  // Professional Service & Organization Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SM Tech",
    "image": "https://sm-tech.com/logo.png",
    "@id": "https://sm-tech.com",
    "url": "https://sm-tech.com",
    "telephone": "+923010637955",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalri Bypass Road",
      "addressLocality": "Bhowana",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "description": "Expert AI Automation and Full Stack Development services with 20 years of experience.",
    "founder": {
      "@type": "Person",
      "name": "Ghulam Abbas Bhatti"
    },
    "serviceType": ["AI Automation", "Web Development", "SaaS Solutions"]
  };

  return (
    <html lang="en" className={`scroll-smooth ${geist.variable}`}>
      <head>
        {/* Favicon fallback for older browsers */}
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-700">
        {children}
      </body>
    </html>
  );
}