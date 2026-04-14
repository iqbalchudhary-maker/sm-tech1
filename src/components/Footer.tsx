"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HelpCircle, Mail } from 'lucide-react';
import FAQ from './FAQ'; 

export default function Footer() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  return (
    // Background changed to dark navy/black to match header screenshot
    <footer className="bg-[rgb(60,61,66)] border-t border-slate-800 pt-20 pb-10 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* FAQ Trigger - Styled to match screenshot green accent */}
        <div className="flex flex-col items-center justify-center mb-20">
           <button 
             onClick={() => setIsFaqOpen(true)}
             className="group relative flex flex-col items-center gap-4 transition-all"
           >
             <div className="relative w-20 h-20 bg-transparent border-2 border-green-500/30 rounded-full flex items-center justify-center group-hover:border-green-500 group-hover:scale-110 shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-500">
                <HelpCircle size={40} className="text-green-500" />
             </div>
             <span className="relative text-green-500 text-[11px] font-bold uppercase tracking-[0.4em]">
                Open Knowledge Hub & FAQ
             </span>
           </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
          
          {/* Brand Info & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 relative">
                  <Image src="/logo.png" alt="SM Tech Logo" fill className="object-contain" priority />
               </div>
               <h3 className="text-xl font-bold tracking-tighter uppercase">SM Technology</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Premier AI Automation Agency. Architecting smart systems for global growth. 
              <span className="block mt-2 text-xs text-slate-500 italic">Registered under Partnership Act 1932 (No. 2747).</span>
            </p>
            
            <div className="flex gap-4 pt-2">
               <Link href="https://web.facebook.com/smtechaisolutions" target="_blank" className="text-slate-400 hover:text-green-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </Link>
               <Link href="https://www.linkedin.com/company/113085902/" target="_blank" className="text-slate-400 hover:text-green-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </Link>
               <Link href="https://www.reddit.com/user/smtechaisolutions" target="_blank" className="text-slate-400 hover:text-green-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
               </Link>
            </div>
          </div>

          {/* Navigation - Updated as per screenshot navbar items */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest border-l-2 border-green-500 pl-3">Navigation</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-400">
              <li><Link href="#home" className="hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link href="#solutions" className="hover:text-green-500 transition-colors">Solutions</Link></li>
              <li><Link href="#projects" className="hover:text-green-500 transition-colors">Projects</Link></li>
              <li><Link href="#reviews" className="hover:text-green-500 transition-colors">Reviews</Link></li>
              
            </ul>
          </div>

          {/* Pakistan Presence */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest border-l-2 border-green-500 pl-3">Pakistan Presence</h4>
            <div className="space-y-5 text-sm text-slate-400 font-medium">
              <div>
                <span className="text-green-500 font-bold text-[10px] uppercase block mb-1">Head Office</span>
                <p>2nd Floor, Shoukat Plaza, Temple Road, Lahore.</p>
              </div>
              <div>
                <span className="text-green-500 font-bold text-[10px] uppercase block mb-1">Regional Branch</span>
                <p>1st Floor, USWA College, Chiniot, Punjab.</p>
              </div>
            </div>
          </div>

          {/* Global Support */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest border-l-2 border-green-500 pl-3">Global Support</h4>
            <div className="space-y-4">
               <div>
                  <span className="text-green-500 font-bold text-[10px] uppercase block mb-1">UAE Office</span>
                  <p className="text-sm text-slate-400">Business Center, Dubai, United Arab Emirates.</p>
               </div>
                <div className="pt-2">
                    <Link 
                    href="https://wa.me/923010637955" 
                    target="_blank" 
                    className="text-white font-bold flex items-center gap-2 hover:text-green-500 transition-colors"
                    >
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    WhatsApp: +92 301 0637955
                    </Link>
                    
                    <Link href="mailto:smtechsolutions@gmail.com" className="text-slate-300 font-bold flex items-center gap-2 hover:text-green-500 text-sm mt-3 transition-colors">
                    <Mail size={16} className="text-green-500" />
                    smtechsolutions@gmail.com
                    </Link>
                    <p className="text-[10px] text-slate-500 mt-2 italic">Available 24/7 for AI Consultation</p>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            © 2026 SM Technology. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-green-500">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-green-500">Terms of Service</Link>
          </div>
        </div>
      </div>

      <FAQ isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </footer>
  );
}