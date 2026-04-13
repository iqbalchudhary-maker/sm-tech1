import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Final Production-Grade Metadata with High-Demand Keywords
export const metadata: Metadata = {
  metadataBase: new URL("https://sm-tech1.vercel.app"), // Deployment ke baad sm-tech.com kar dein
  title: {
    default: "SM Tech | Expert in Agentic AI, RAG & Full-Stack SaaS",
    template: "%s | SM Tech"
  },
  description: "Scale your business with Autonomous AI Agents, Custom RAG Architectures, and Enterprise SaaS. 20+ Years expertise in AI Automation by Ghulam Abbas Bhatti.",
  
  keywords: [
    "Agentic AI Automation Expert", 
    "Custom RAG System Development", 
    "Autonomous AI Sales Agents", 
    "Enterprise SaaS Solutions", 
    "AI WhatsApp Receptionist", 
    "Neural Voice Engineering",
    "Full Stack AI Developer Pakistan",
    "SM Tech Bhowana AI"
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

  // Social Previews (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "SM Tech | Agentic AI & Custom SaaS Development",
    description: "Architecting the Future with Autonomous AI Agents and Private RAG Systems. 20 Years of Full-Stack Excellence for Global Clients.",
    url: "https://sm-tech1.vercel.app",
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

  // Twitter/X Preview
  twitter: {
    card: "summary_large_image",
    title: "SM Tech | Enterprise AI & RAG Solutions",
    description: "Deploying 24/7 Autonomous AI Agents and High-Performance SaaS. Experience that matters.",
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
    "image": "https://sm-tech1.vercel.app/logo.png",
    "@id": "https://sm-tech1.vercel.app",
    "url": "https://sm-tech1.vercel.app",
    "telephone": "+923010637955",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalri Bypass Road",
      "addressLocality": "Bhowana",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "description": "Leading AI Automation Agency specializing in Agentic Workflows, RAG Systems, and Full-Stack Development with 20 years of experience.",
    "founder": {
      "@type": "Person",
      "name": "Ghulam Abbas Bhatti"
    },
    "serviceType": [
      "Agentic AI Automation", 
      "RAG System Development", 
      "Enterprise SaaS", 
      "AI Voice Engineering"
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${geist.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
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