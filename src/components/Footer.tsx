"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HelpCircle } from 'lucide-react';
import FAQ from './FAQ'; 

export default function Footer() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  // --- LOCAL BUSINESS & CONTACT SCHEMA (SEO ENHANCEMENT) ---
  const footerSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SM Tech",
    "url": "https://sm-tech.com",
    "logo": "https://sm-tech.com/logo.png",
    "legalName": "SM Technology (Registered Partnership)",
    "foundingDate": "2019-12-03",
    "registrationNumber": "2747",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+923010637955",
        "contactType": "customer service",
        "areaServed": ["PK", "AE"],
        "availableLanguage": ["English", "Urdu"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 9, 2nd Floor, Shoukat Plaza, Temple Road",
      "addressLocality": "Lahore",
      "addressCountry": "PK"
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerSchema) }}
      />

      {/* Decorative background glow - Subtle Green */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100/50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- FAQ Trigger Section --- */}
        <div className="flex flex-col items-center justify-center mb-20">
           <button 
             onClick={() => setIsFaqOpen(true)}
             className="group relative flex flex-col items-center gap-4 transition-all"
             aria-label="Open SM Tech Knowledge Hub"
           >
             <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full group-hover:bg-green-500/20 transition-all"></div>
             
             <div className="relative w-20 h-20 bg-white border-2 border-green-500/30 rounded-full flex items-center justify-center group-hover:border-green-500 group-hover:scale-110 shadow-lg group-hover:shadow-green-200/50 transition-all duration-500">
                <HelpCircle size={40} className="text-green-600 group-hover:rotate-12 transition-transform" />
             </div>
             <span className="relative text-green-700 text-[10px] font-black uppercase tracking-[0.4em]">
               Open Knowledge Hub & FAQ
             </span>
           </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 relative">
                  <Image src="/logo.png" alt="SM Tech Logo" fill className="object-contain" priority />
               </div>
               <h3 className="text-xl font-bold text-slate-900 tracking-tighter uppercase">SM Technology</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Premier AI Automation Agency. Architecting smart systems for global growth. 
              <span className="block mt-2 text-xs text-slate-400 italic">Registered under Partnership Act 1932 (No. 2747).</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest border-l-2 border-green-500 pl-3">Navigation</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li><Link href="#home" className="hover:text-green-600 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-green-600 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-green-600 transition-colors">AI Services</Link></li>
              <li><Link href="#projects" className="hover:text-green-600 transition-colors">Projects</Link></li>
              <li><Link href="/dashboard" className="hover:text-green-600 transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Pakistan Offices */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest border-l-2 border-green-500 pl-3">Pakistan Presence</h4>
            <div className="space-y-5 text-sm text-slate-600 font-medium">
              <div>
                <span className="text-green-600 font-bold text-[10px] uppercase block mb-1">Head Office</span>
                <p>Office No. 9, 2nd Floor, Shoukat Plaza, Temple Road, Lahore.</p>
              </div>
              <div>
                <span className="text-green-600 font-bold text-[10px] uppercase block mb-1">Regional Branch</span>
                <p>1st Floor, USWA College, Chiniot, Punjab.</p>
              </div>
            </div>
          </div>

          {/* International Office */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest border-l-2 border-green-500 pl-3">Global Support</h4>
            <div className="space-y-5 text-sm text-slate-600 font-medium">
              <div>
                <span className="text-green-600 font-bold text-[10px] uppercase block mb-1">UAE Office</span>
                <p>Business Center, Dubai, United Arab Emirates.</p>
              </div>
              <div className="pt-2">
                <p className="text-slate-900 font-bold flex items-center gap-2">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   WhatsApp: +92 301 0637955
                </p>
                <p className="text-xs text-slate-400 mt-1">Available 24/7 for AI Consultation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            © 2026 SM Technology. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-green-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-green-600">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* --- FAQ Modal Component --- */}
      <FAQ isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </footer>
  );
}