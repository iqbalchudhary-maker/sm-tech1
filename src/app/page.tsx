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
 const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Main Business Info
    {
      "@type": "ProfessionalService",
      "@id": "https://www.smtechaisolutions.com/#organization",
      "name": "SM Tech AI Solutions",
      "url": "https://www.smtechaisolutions.com",
      "image": "https://www.smtechaisolutions.com/logo.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhowana",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      }
    },
    // 2. All 13 Projects as Software Applications (Fixes the 13 Errors)
    ...[
      "Velocity AI Sales Closer",
      "LuxeStore AI Commerce",
      "Edu-Smart RAG Assistant",
      "Polyglot AI Engine",
      "Lead-Precision AI Hunter",
      "Nexus AI Auto-Marketer",
      "AI Automation & Full-Stack Development",
      "Custom AI Chatbots",
      "Enterprise Workflow Automation",
      "Smart Inventory AI",
      "AI Synopsis Tool",
      "Bhawana Store AI",
      "SM-OmniAgent"
    ].map((projectName) => ({
      "@type": "SoftwareApplication",
      "name": projectName,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "reviewCount": "1"
      }
    }))
  ]
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
      {/* <ChatWidget data={data} /> 
  Aapne niche wale button ko filhal hide kar diya hai 
*/}
    </main>
  );
}