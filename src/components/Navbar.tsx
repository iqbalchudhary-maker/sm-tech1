"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  // --- SITE NAVIGATION SCHEMA (SEO) ---
  const navSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": [
      "Home", "About", "Why Us", "Solutions", "Management", "Projects", "Reviews"
    ],
    "url": [
      "https://sm-tech.com/",
      "https://sm-tech.com/#about",
      "https://sm-tech.com/#why-us",
      "https://sm-tech.com/#services",
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
    { name: 'Management', href: '#management' },
    { name: 'Projects', href: '#projects' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 w-full z-100 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      {/* Structured Data for Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between gap-2">
        
        {/* --- Logo & Name --- */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="SM Technology Home">
          <div className="relative w-12 h-12 md:w-14 md:h-14 p-0.75 rounded-xl bg-linear-to-tr from-blue-600 to-cyan-400 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite] transition-all">
              <div className="w-full h-full bg-[#020617] rounded-[9px] flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="SM Technology - Leading AI Automation Agency"
                  width={56}
                  height={56}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
          </div>
          <div className="flex flex-col shrink-0">
            <span className="font-black text-lg md:text-xl lg:text-2xl tracking-[-0.05em] text-white leading-none">
              SM TECHNOLOGY
            </span>
            <span className="text-[9px] md:text-[11px] text-blue-500 font-bold tracking-[0.2em] uppercase mt-1">
              AI Automation Agency
            </span>
          </div>
        </Link>
        
        {/* --- Navigation Links --- */}
        <div className="hidden lg:flex items-center flex-1 justify-center px-4" role="navigation">
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="px-3 xl:px-4 py-2 text-[11px] xl:text-[13px] font-semibold text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* --- Action Buttons with Dropdown --- */}
        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <Link 
            href="/dashboard" 
            className="hidden xl:block text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-500 transition-colors"
          >
            Dashboard
          </Link>

          {/* --- Dropdown Container --- */}
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              aria-haspopup="true"
              aria-expanded={showDropdown}
              className="relative inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-full group hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)] shrink-0"
            >
              <span className="relative text-xs md:text-sm whitespace-nowrap">Contact Us</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* --- Dropdown Menu --- */}
            {showDropdown && (
              <div className="absolute right-0 mt-3 w-56 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                
                {/* UAE Office Link */}
                <Link 
                  href="https://wa.me/971558245432" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors group/item"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">UAE Office</span>
                    <span className="text-xs text-white font-medium">Dubai Support</span>
                  </div>
                  <MessageCircle size={16} className="text-slate-500 group-hover/item:text-green-500 transition-colors" />
                </Link>

                <div className="h-px bg-white/5 w-full"></div>

                {/* Pakistan Head Office Link */}
                <Link 
                  href="https://wa.me/923010637955" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors group/item"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Head Office</span>
                    <span className="text-xs text-white font-medium">Pakistan Support</span>
                  </div>
                  <MessageCircle size={16} className="text-slate-500 group-hover/item:text-green-500 transition-colors" />
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}