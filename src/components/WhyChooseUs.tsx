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

  return (
    <section id="why-us" className="py-12 px-4 bg-[#01040f] relative overflow-hidden border-t border-white/5 scroll-mt-24">
      
      {/* Interactive Blink Button */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-1000 ${showBlink ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-green-600 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] animate-pulse shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center gap-2 border border-green-400/50"
        >
          <MousePointerClick size={16} /> Click Me: Unlock Your Growth
        </button>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Spacing Kam Kar di gayi hai */}
        <div className="text-center mb-5 space-y-3">
          <span className="px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-[9px] font-bold uppercase tracking-[0.3em]">
            Experience Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter italic">
            DOMINATE YOUR NICHE WITH <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-700">SM TECHNOLOGY</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            We deliver <span className="text-white font-bold underline decoration-green-500">Industry Veterans'</span> expertise with <span className="text-green-400 font-bold">450+ AI Projects</span> completed globally.
          </p>
        </div>

        {/* Benefits Grid - Green Neon Borders Added */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {characteristics.map((item, index) => (
            <div 
              key={index} 
              className="p-6 bg-slate-900/30 border-2 border-green-500/30 rounded-4xl hover:border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.05)] hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-500 group hover:bg-slate-900/80"
            >
              <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-green-500/20">
                {item.icon}
              </div>
              <h3 className="text-white font-black text-[11px] mb-2 leading-tight uppercase tracking-wider group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-[10px] leading-relaxed group-hover:text-slate-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Authority Statement */}
        <div className="relative p-1 bg-linear-to-r from-green-600 via-emerald-400 to-green-600 rounded-[40px] overflow-hidden">
          <div className="bg-slate-950 p-8 md:p-10 rounded-[38px] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-green-500">
                <Award size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Expertise</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Stop Burning Cash. <br/>
                Start <span className="text-green-500">Scaling with AI.</span>
              </h3>
              <p className="text-slate-400 text-xs max-w-md">
                Get premium AI services with one click. Our team ensures 100% efficiency while you focus on vision.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
               <div className="flex -space-x-3 mb-1">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[9px] text-white font-bold">
                      {i === 4 ? "+20" : "Exp"}
                    </div>
                  ))}
               </div>
               <button className="px-8 py-4 bg-green-600 text-white text-xs font-black rounded-2xl hover:bg-green-700 transition-all shadow-[0_15px_40px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                 BOOK A FREE STRATEGY CALL
               </button>
               <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Trusted by 450+ Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}