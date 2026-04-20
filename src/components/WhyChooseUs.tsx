"use client";
import { useState, useEffect } from 'react';
import { 
  Zap, ShieldCheck, Target, Globe, 
  Cpu, LifeBuoy, MousePointerClick,
  Clock, Banknote, TrendingUp, Gem, Award
} from 'lucide-react';

export default function WhyChooseUs() {
  const [showBlink, setShowBlink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBlink(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const characteristics = [
    { title: "Ultra Low-Cost", desc: "Premium AI solutions at a fraction of standard market rates.", icon: <Banknote className="text-green-400" /> },
    { title: "Time & Money Saver", desc: "Automate repetitive tasks and save 100+ hours every month.", icon: <Clock className="text-green-400" /> },
    { title: "Sales Multiplier", desc: "AI-driven lead gen designed to skyrocket your conversion rates.", icon: <TrendingUp className="text-green-400" /> },
    { title: "Peak Efficiency", desc: "Execute complex workflows with 0% human error and 100% speed.", icon: <Zap className="text-green-400" /> },
    { title: "All-in-One AI Hub", desc: "From GPTs to Web Automation—all services under one roof.", icon: <Gem className="text-green-400" /> },
    { title: "Autonomous Agents", desc: "24/7 working agents that handle tasks without supervision.", icon: <Cpu className="text-green-400" /> },
    { title: "Enterprise Security", desc: "Data encryption and secure AI deployment for sensitive info.", icon: <ShieldCheck className="text-green-400" /> },
    { title: "Global Reach", desc: "Multilingual AI support in 100+ languages including Urdu.", icon: <Globe className="text-green-400" /> },
    { title: "Cognitive Scraping", desc: "99% Precision B2B lead extraction using neural hunting.", icon: <Target className="text-green-400" /> },
    { title: "Priority Support", desc: "Direct access to our senior engineers for life-time help.", icon: <LifeBuoy className="text-green-400" /> },
  ];

  // --- BUSINESS VALUE & OFFERS SCHEMA (SEO) ---
  const valueSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose SM Tech for AI Automation",
    "description": "Discover why SM Tech is the leader in AI automation with 20 years of experience and 450+ completed projects.",
    "mainEntity": {
      "@type": "Service",
      "name": "SM Tech Professional AI Services",
      "offers": {
        "@type": "Offer",
        "name": "Free AI Strategy Call",
        "description": "Book a free session to scale your business with autonomous AI agents."
      },
      "provider": {
        "@type": "ProfessionalService",
        "name": "SM Tech",
        "image": "/logo.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhowana",
          "addressCountry": "PK"
        }
      }
    }
  };

  return (
    <section id="why-us" className="py-24 px-4 bg-[#01040f] relative overflow-hidden border-t border-white/5 scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(valueSchema) }}
      />
      
      {/* Interactive Blink Button */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-1000 ${showBlink ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-green-600 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] animate-pulse shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center gap-2 border border-green-400/50"
          aria-label="Unlock Growth with SM Tech"
        >
          <MousePointerClick size={16} /> CLICK ME: UNLOCK YOUR GROWTH
        </button>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- REFINED SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-10">
          <span className="inline-block px-6 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            SM Tech: Experience Excellence
          </span>

          <div className="flex flex-col items-center justify-center text-center w-full">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
              DOMINATE YOUR NICHE WITH <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-green-600 to-emerald-400">SM TECHNOLOGY</span>
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-green-500 to-emerald-500 mt-8 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
          </div>

          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed mt-10">
            We deliver <span className="text-white font-bold underline decoration-green-500 underline-offset-4">Industry Veterans'</span> expertise with <span className="text-green-400 font-bold">450+ AI Projects</span> completed globally.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
          {characteristics.map((item, index) => (
            <div 
              key={index} 
              className="p-8 bg-slate-900/30 border border-green-500/20 rounded-[40px] hover:border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.05)] hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-500 group hover:bg-slate-950"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all border border-green-500/20 group-hover:border-green-500/50">
                {item.icon}
              </div>
              <h3 className="text-white font-extrabold text-[12px] mb-3 leading-tight uppercase tracking-wider group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-[11px] leading-relaxed group-hover:text-slate-200 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- CLOSING AUTHORITY STATEMENT (CTA) --- */}
        <div className="relative p-1 bg-linear-to-r from-green-600 via-emerald-400 to-green-600 rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="bg-slate-950 p-10 md:p-14 rounded-[46px] flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-green-500">
                <Award size={20} className="animate-bounce" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Global AI Expertise by SM Tech</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-[1.1] uppercase">
                STOP BURNING CASH. <br/>
                START <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500">SCALING WITH SM TECH.</span>
              </h3>
              <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
                Get premium AI services with one click. Our team ensures 100% efficiency while you focus on vision. Join 450+ successful global brands.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
               <div className="flex -space-x-4 mb-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] text-white font-black shadow-xl">
                     {i === 4 ? "+450" : "20y"}
                   </div>
                 ))}
               </div>
               
               {/* --- WHATSAPP CTA LINK --- */}
               <a 
                 href="https://wa.me/923010637955?text=Hello%20SM%20Tech%2C%20I%20want%20to%20book%20a%20free%20AI%20Strategy%20Call." 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-10 py-5 bg-green-600 text-white text-sm font-black rounded-2xl hover:bg-green-500 transition-all shadow-[0_15px_40px_rgba(34,197,94,0.3)] hover:-translate-y-2 uppercase tracking-widest flex items-center gap-3"
               >
                 Book A Free Strategy Call
               </a>
               
               <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">Trusted by 450+ Global Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}