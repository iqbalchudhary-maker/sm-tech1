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
    { name: "Research", href: "/blog", isSpecial: true }, 
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-xl border-b border-black/5 transition-all duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between gap-2 relative z-[110]">
        
        {/* --- LOGO SECTION --- */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0" aria-label="SM Technology Home">
          <div className="relative w-10 h-10 md:w-12 md:h-12 p-0.75 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 animate-[spin_12s_linear_infinite] group">
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
            <span className="font-black text-sm md:text-lg lg:text-xl tracking-tighter text-slate-900 leading-none">
              SM TECHNOLOGY
            </span>
            <span className="text-[7px] md:text-[10px] text-blue-600 font-bold tracking-[0.15em] uppercase mt-1">
              AI Automation Agency
            </span>
          </div>
        </Link>
        
        {/* --- DESKTOP NAVIGATION --- */}
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

        {/* --- RIGHT SECTION (Audit Button & Mobile Toggle) --- */}
        <div className="flex items-center gap-2 shrink-0">
          <Link 
            href="https://sm-omini-agent.vercel.app/"
            target="_blank"
            className="group relative inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3.5 overflow-hidden rounded-full bg-slate-950 font-black text-white transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
          >
            <div className="absolute inset-0 p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-30 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite]"></div>
            <div className="absolute inset-[1.5px] bg-[#020617] rounded-full z-0"></div>
            <Zap size={14} className="relative z-10 text-yellow-300 fill-yellow-300" />
            <span className="relative z-10 text-[9px] md:text-[11px] font-black uppercase tracking-wider italic">
              AI AUDIT
            </span>
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 hover:bg-black/5 rounded-lg transition-colors relative z-[120]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU (Fixed Ghost Link Issue) --- */}
      <div 
        className={`fixed inset-0 bg-white z-[105] lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-20">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-slate-900 hover:text-blue-600 uppercase tracking-tighter transition-all hover:scale-110 active:scale-95"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </nav>
  );
}