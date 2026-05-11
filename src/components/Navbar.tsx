"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap } from 'lucide-react'; // Zap icon automation aur agentic feel ke liye

export default function Navbar() {
  // navSchema aur navLinks same rahen ge...
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
  { name: "Research & Publications", href: "/blog", isSpecial: true }, 
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
          <div className="relative w-10 h-10 md:w-12 md:h-12 p-0.75 rounded-xl bg-linear-to-tr from-blue-600 to-cyan-400 animate-[spin_12s_linear_infinite] group">
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
{/* --- ULTRA-DYNAMIC AGENTIC AUDIT BUTTON --- */}
<div className="flex items-center gap-2 shrink-0">
  <Link 
    href="https://sm-omini-agent.vercel.app/"
    target="_blank"
    className="group relative inline-flex items-center gap-3 px-6 py-3.5 overflow-hidden rounded-full bg-slate-950 font-black text-white transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-blue-500/40"
  >
    {/* 1. Dynamic Rotating Border (Agentic Feel) */}
    <div className="absolute inset-0 p-[1.5px] rounded-full bg-linear-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-30 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity"></div>
    
    {/* 2. Inner Dark Background to keep text clear */}
    <div className="absolute inset-[1.5px] bg-[#020617] rounded-full z-0 transition-colors group-hover:bg-blue-950/20"></div>

    {/* 3. Scanning Beam Effect */}
    <div className="absolute inset-0 w-full h-full bg-lineat-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-0"></div>

    {/* 4. Agent Icon with Pulse Glow */}
    <div className="relative z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-yellow-400 blur-md opacity-20 group-hover:opacity-60 group-hover:scale-150 transition-all duration-500"></div>
      <Zap size={16} className="relative text-yellow-300 fill-yellow-300 group-hover:rotate-12 transition-transform duration-300" />
    </div>

    {/* 5. Button Text */}
    <span className="relative z-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] italic">
      GET FREE AI AUDIT
    </span>

    {/* 6. Live Status Beacon */}
    <div className="relative z-10 flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
    </div>

    {/* Custom Shimmer Animation Keyframes (Tailwind config mein add na bhi karein toh style tag se chal jayega) */}
    <style jsx>{`
      @keyframes shimmer {
        100% { transform: translateX(100%); }
      }
    `}</style>
  </Link>
</div>

      </div>
    </nav>
  );
}