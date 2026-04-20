import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Hero from '@/components/Hero';
import AgenticWorkflows from "@/components/AgenticWorkflows"; 
import Management from '@/components/Management';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs'; 
import Testimonials from '@/components/Testimonials'; 
import ChatAgent from '@/components/ChatAgent';

// 1. --- VIEWPORT EXPORT ---
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
};

// 2. --- METADATA EXPORT ---
export const metadata: Metadata = {
  title: 'SM Tech | AI Automation Expert & Full Stack Developer (20+ Years Exp)',
  description: 'SM Tech specializes in Autonomous AI Agents, Enterprise Automation (n8n/Make), and High-Performance Web Apps. Scaling businesses with 20 years of technical excellence.',
  keywords: ['AI Automation Expert', 'Full Stack Developer Pakistan', 'SM Tech', 'n8n Automation', 'WhatsApp AI Bots', 'Custom AI Solutions'],
  authors: [{ name: 'SM Tech', url: 'https://www.smtechaisolutions.com' }], 
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.smtechaisolutions.com',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'SM Tech | Leading AI Automation & Digital Transformation',
    description: 'Transforming operational costs into revenue with 450+ completed AI & Web projects.',
    url: 'https://www.smtechaisolutions.com',
    siteName: 'SM Tech',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'SM Tech - AI & Automation Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Tech | AI Automation Specialist',
    description: '20 Years of Experience in Building Autonomous AI Systems.',
    images: ['/logo.png'],
  },
};

export default function Home() {
  // 3. --- JSON-LD SCHEMA MARKUP ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SM Tech",
    "image": "https://www.smtechaisolutions.com/logo.png",
    "@id": "https://www.smtechaisolutions.com",
    "url": "https://www.smtechaisolutions.com",
    "telephone": "", 
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhowana",
      "addressCountry": "PK"
    },
    "description": "Expert AI Automation and Full Stack Development services by SM Tech. Specialists in Agentic AI and enterprise workflows with 20 years of experience.",
    "sameAs": [
      "https://linkedin.com/in/your-profile", 
      "https://github.com/your-profile"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation & Agents"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Web Development"
          }
        }
      ]
    }
  };

  return (
    <main className="bg-[#020617] text-white min-h-screen selection:bg-green-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <div className="flex flex-col">
        {/* --- Hero Section: Top par impact ke liye (Padding Adjust ki gayi) --- */}
        <section id="home" className="pt-10 md:pt-16">
          <Hero />
        </section>

        {/* --- About Section: Trust building (Padding thori kam ki gayi) --- */}
        <div id="about" className="py-8 md:py-12"> 
          <About />
        </div>

        {/* --- Agentic Workflows: Technical capability --- */}
        <div id="agentic-workflows">
          <AgenticWorkflows />
        </div>

        <Management />

        <div id="services">
          <Services />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="why-us">
          <WhyChooseUs />
        </div>
      </div>

      <Footer />
      <ChatAgent />
    </main>
  );
}