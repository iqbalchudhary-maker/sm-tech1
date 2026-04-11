"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const carouselProjects = [
  {
    title: "Autonomous Reasoning Agents",
    desc: "Self-learning AI that executes complex business logic without human intervention.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Intelligence Workflow Automation",
    desc: "Streamlining enterprise operations with smart 24/7 automated pipelines.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Enterprise RAG Systems",
    desc: "Secure private neural networks trained on your organization's exclusive data.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Omni-Channel Sales Bots",
    desc: "Closing deals automatically across WhatsApp, Instagram, and Facebook Messenger.",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Predictive Analytics Dashboards",
    desc: "Visualizing future trends with high-accuracy machine learning forecasting models.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI Voice Concierge",
    desc: "Human-like voice automation for seamless customer support and booking.",
    img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const whatsappLink = "https://wa.me/923010637955?text=Hello%20SM%20Tech,%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <section id="home" className="h-[calc(100vh-70px)] flex items-center justify-center px-4 max-w-7xl mx-auto overflow-hidden">
      
      <div className="relative h-[85%] w-full perspective-[2000px]">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full rounded-[30px] md:rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group"
          >
            <Image
              src={carouselProjects[index].img}
              alt={carouselProjects[index].title}
              fill
              className="object-cover brightness-[0.7] transition-transform duration-6000ms scale-105 group-hover:scale-100"
              priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/40">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 max-w-4xl"
              >
                <span className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[9px] font-bold uppercase tracking-[0.3em]">
                  Featured Innovation
                </span>

                {/* Heading Updated: Font weight changed from font-black to font-bold and size adjusted */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] uppercase">
                  {carouselProjects[index].title}
                </h2>

                <p className="text-sm md:text-base text-slate-200 font-light max-w-xl mx-auto leading-relaxed">
                  {carouselProjects[index].desc}
                </p>

                <div className="pt-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-semibold text-xs rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl active:scale-95"
                  >
                    BOOK AN APPOINTMENT
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselProjects.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-600/5 blur-[100px] rounded-full"></div>
      </div>

    </section>
  );
}