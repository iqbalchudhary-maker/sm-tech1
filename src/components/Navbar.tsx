"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": ["Home", "About", "Why Us", "Solutions", "Workflows", "Management", "Projects", "Reviews"],
    "url": [
      "https://sm-tech.com/",
      "https://sm-tech.com/#about",
      "https://sm-tech.com/#why-us",
      "https://sm-tech.com/#services",
      "https://sm-tech.com/#workflows",
      "https://sm-tech.com/#management",
      "https://sm-tech.com/#projects",
      "https://sm-tech.com/#testimonials"
    ]
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Solutions', href: '#services' },
    { name: 'Workflows', href: '#workflows' },
    { name: 'Management', href: '#management' },
    { name: 'Projects', href: '#projects' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 w-full z-100 bg-white/95 backdrop-blur-xl border-b border-black/5 transition-all duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 h-20 md:h-24 flex items-center justify-between gap-1 sm:gap-2">
        
        {/* --- LOGO SECTION --- */}
        <Link href="/" className="flex items-center gap-1.5 md:gap-3 shrink-0" aria-label="SM Technology Home">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0.75 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 animate-[spin_12s_linear_infinite] group">
              <div className="w-full h-full bg-[#020617] rounded-[9px] flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="SM Technology"
                  width={56}
                  height={56}
                  className="object-contain group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
          </div>
          <div className="flex flex-col shrink-0">
            <span className="font-black text-sm sm:text-base md:text-lg lg:text-xl tracking-tighter text-slate-900 leading-none">
              SM TECHNOLOGY
            </span>
            <span className="text-[7px] sm:text-[8px] md:text-[10px] text-blue-600 font-bold tracking-[0.15em] uppercase mt-1">
              AI Automation Agency
            </span>
          </div>
        </Link>
        
        {/* --- MAIN NAVIGATION (Desktop View) --- */}
        <div className="hidden lg:flex items-center flex-1 justify-center px-2" role="navigation">
          <div className="flex items-center gap-0.5 bg-black/5 p-1 rounded-full border border-black/5">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="px-2 xl:px-3 py-2 text-[10px] xl:text-[12px] font-bold text-slate-600 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-300 whitespace-nowrap uppercase tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: AUDIT BUTTON & MOBILE HAMBURGER TOGGLE --- */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Audit Button (Har screen par adjust ho kar nazar aayega) */}
          <Link 
            href="https://sm-omini-agent.vercel.app/"
            target="_blank"
            className="group relative inline-flex items-center gap-1.5 sm:gap-3 px-3.5 sm:px-5 py-2.5 sm:py-3 overflow-hidden rounded-full bg-slate-950 font-black text-white transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-blue-500/40"
          >
            <div className="absolute inset-0 p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-30 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity"></div>
            <div className="absolute inset-[1.5px] bg-[#020617] rounded-full z-0 transition-colors group-hover:bg-blue-950/20"></div>
            <div className="relative z-10 flex items-center justify-center">
              <Zap size={14} className="sm:w-4 sm:h-4 text-yellow-300 fill-yellow-300 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="relative z-10 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] italic">
              AI AUDIT
            </span>
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-black/5 text-slate-900 hover:bg-black/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-black/10 shadow-xl px-6 py-6 flex flex-col gap-3 transition-all">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all uppercase tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </nav>
  );
}