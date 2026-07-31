"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Menu, X, MessageSquare, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-[100] bg-white/95 backdrop-blur-xl border-b border-black/5">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
        />

        <div className="max-w-[1400px] mx-auto px-2 md:px-4 h-20 flex items-center justify-between gap-1 md:gap-2 relative z-[110]">
          
          {/* --- LOGO SECTION --- */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="SM Technology Home">
            <div className="relative w-9 h-9 md:w-10 md:h-10 p-0.5 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 animate-[spin_12s_linear_infinite] group">
              <div className="w-full h-full bg-[#020617] rounded-[9px] flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="SM Technology"
                  width={40}
                  height={40}
                  className="object-contain group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-black text-xs md:text-base tracking-tighter text-slate-900 leading-none">
                SM TECHNOLOGY
              </span>
              <span className="text-[6px] md:text-[8px] text-blue-600 font-bold tracking-[0.12em] uppercase mt-0.5">
                AI Automation Agency
              </span>
            </div>
          </Link>
          
          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden xl:flex items-center justify-center flex-1 px-1" role="navigation">
            <div className="flex items-center gap-0.5 bg-black/5 p-1 rounded-full border border-black/5">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="px-2.5 py-1.5 text-[10px] font-extrabold text-slate-700 hover:text-white hover:bg-blue-600 rounded-full transition-all duration-300 whitespace-nowrap uppercase tracking-wider active:scale-95"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* --- RIGHT ACTION BUTTONS --- */}
          <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
            {/* Contact Us Button */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-2.5 md:px-3.5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 font-black text-white text-[9px] md:text-[10px] uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-600/20 flex items-center gap-1 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
            >
              <MessageSquare size={12} />
              <span>CONTACT US</span>
            </button>

            {/* AI Audit Button (Always visible on Desktop now!) */}
            <Link 
              href="https://sm-omini-agent.vercel.app/"
              target="_blank"
              className="group relative inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-2 overflow-hidden rounded-full bg-slate-950 font-black text-white transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(37,99,235,0.2)] whitespace-nowrap"
            >
              <div className="absolute inset-0 p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-30 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite]"></div>
              <div className="absolute inset-[1.5px] bg-[#020617] rounded-full z-0"></div>
              <Zap size={13} className="relative z-10 text-yellow-300 fill-yellow-300 shrink-0" />
              <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-wider italic">
                AI AUDIT
              </span>
            </Link>

            {/* Mobile / Tablet Toggle Menu */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-1.5 text-slate-900 hover:bg-black/5 rounded-lg transition-colors relative z-[120]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- FULLSCREEN MOBILE & TABLET OVERLAY MENU --- */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-emerald-950 z-[99] xl:hidden flex flex-col justify-center p-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2.5 w-full max-w-xs mx-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 bg-emerald-400 hover:bg-yellow-400 border border-emerald-300/40 text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl shadow-md transition-all duration-300 active:scale-95 text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* --- CONTACT US POPUP MODAL --- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative text-slate-900 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100 transition"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                Contact Us
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Select an office to message us directly on WhatsApp
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/923010637955"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsContactOpen(false)}
                className="flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 rounded-2xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition">
                    <MessageSquare size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-slate-900 uppercase tracking-tight">
                      contact pakistan office
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold">+92 301 0637955</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  WhatsApp
                </span>
              </a>

              <a
                href="https://wa.me/971558245432"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsContactOpen(false)}
                className="flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 rounded-2xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition">
                    <Globe size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-slate-900 uppercase tracking-tight">
                      contact uae office
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold">+971 55 824 5432</p>
                  </div>
                </div>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}