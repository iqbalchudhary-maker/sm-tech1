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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smtechaisolutions.com"), 
  
  title: {
    default: "SM Tech | Expert in Agentic AI, RAG & Full-Stack SaaS",
    template: "%s | SM Tech"
  },
  description: "Scale your business with Autonomous AI Agents, Custom RAG Architectures, and Enterprise SaaS. Expert AI Automation solutions by Ghulam Abbas Bhatti.",
  
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

  // Icons ko clean kiya hai
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SM Tech | Agentic AI & Custom SaaS Development",
    description: "Architecting the Future with Autonomous AI Agents and Private RAG Systems.",
    url: "https://www.smtechaisolutions.com",
    siteName: "SM Tech",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "SM Tech AI Specialist" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SM Tech",
    "image": "https://www.smtechaisolutions.com/logo.png",
    "url": "https://www.smtechaisolutions.com",
    "telephone": "+923010637955",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhowana",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "founder": {
      "@type": "Person",
      "name": "Ghulam Abbas Bhatti"
    }
  };

  return (
    // Yahan data-scroll-behavior add kiya gaya hai
    <html lang="en" className={`${geist.variable}`} data-scroll-behavior="smooth">
      <head>
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