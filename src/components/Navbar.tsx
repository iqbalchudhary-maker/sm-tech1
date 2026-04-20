"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

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
    { name: 'Workflows', href: '#workflows' }, // Yahan add kar diya takay center mein fit rahay
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

      <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between gap-2">
        
        {/* --- LOGO SECTION --- */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0" aria-label="SM Technology Home">
          <div className="relative w-10 h-10 md:w-12 md:h-12 p-0.75 rounded-xl bg-linear-to-tr from-blue-600 to-cyan-400 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite] transition-all">
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
            <span className="font-black text-base md:text-lg lg:text-xl tracking-tighter text-slate-900 leading-none">
              SM TECHNOLOGY
            </span>
            <span className="text-[8px] md:text-[10px] text-blue-600 font-bold tracking-[0.15em] uppercase mt-1">
              AI Automation Agency
            </span>
          </div>
        </Link>
        
        {/* --- MAIN NAVIGATION --- */}
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

        {/* --- AUDIT BUTTON SECTION --- */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className="relative inline-flex items-center gap-1.5 px-4 md:px-6 py-2.5 md:py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-full group hover:bg-blue-700 shadow-[0_4px_15px_rgba(37,99,235,0.3)] shrink-0"
            >
              <span className="relative text-[10px] md:text-xs whitespace-nowrap uppercase tracking-tight">Get Free Ai Audit</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-56 bg-white border border-black/10 rounded-2xl overflow-hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link 
                  href="https://wa.me/971558245432" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 hover:bg-blue-50 transition-colors group/item border-b border-black/5"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">UAE Office</span>
                    <span className="text-xs text-slate-700 font-bold">Dubai Support</span>
                  </div>
                  <MessageCircle size={16} className="text-slate-400 group-hover/item:text-green-500 transition-all" />
                </Link>

                <Link 
                  href="https://wa.me/923010637955" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 hover:bg-blue-50 transition-colors group/item"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Head Office</span>
                    <span className="text-xs text-slate-700 font-bold">Pakistan Support</span>
                  </div>
                  <MessageCircle size={16} className="text-slate-400 group-hover/item:text-green-500 transition-all" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}