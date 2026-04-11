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
  metadataBase: new URL("https://sm-tech.com"), 
  title: {
    default: "SM Technology | Enterprise AI Automation & Custom SaaS",
    template: "%s | SM Technology"
  },
  description: "SM Technology specializes in Enterprise AI Agents, RAG Systems, and Custom SaaS solutions. Registered under Partnership Act 1932.",
  
  // Expert Keywords
  keywords: ["AI Automation", "Enterprise AI", "Custom SaaS", "AI Agents", "RAG Systems", "SM Technology Pakistan"],

  // --- LOGO & FAVICON PINNING (CRITICAL) ---
  // Ensure 'smlogof.png' is inside the 'public' folder directly
  icons: {
    icon: [
      { url: "/smlogof.png", sizes: "32x32" },
      { url: "/smlogof.png", sizes: "16x16" },
      { url: "/smlogof.png", sizes: "any" }, // For SVG/PNG pinning
    ],
    apple: "/smlogof.png",
    shortcut: "/smlogof.png",
  },

  // Canonical link to prevent duplicate content
  alternates: {
    canonical: "https://sm-tech.com",
  },

  openGraph: {
    title: "SM Technology | Future-Ready AI Solutions",
    description: "Scale your business with our Enterprise AI Agents and Custom Workflow Automation.",
    url: "https://sm-tech.com",
    siteName: "SM Technology",
    images: [
      {
        url: "/smlogof.png", // Social preview image
        width: 1200,
        height: 630,
        alt: "SM Technology AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/smlogof.png"],
  },
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SM Technology",
    "url": "https://sm-tech.com",
    "logo": "https://sm-tech.com/smlogof.png",
    "legalName": "SM Technology (Registered Partnership)",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923010637955",
      "contactType": "Sales"
    }
  };

  return (
    <html lang="en" className={`scroll-smooth ${geist.variable}`}>
      <head>
        {/* Manual link tag for older browsers to ensure icon shows */}
        <link rel="icon" href="/smlogof.png" />
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