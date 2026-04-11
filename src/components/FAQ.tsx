"use client";
import { useState } from 'react';
import { HelpCircle, ChevronDown, X, MessageSquare } from 'lucide-react';

interface FAQProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FAQ({ isOpen, onClose }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!isOpen) return null; // Agar open nahi hai to kuch render na kare

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { 
      q: "How does AI Automation maximize my business ROI?", 
      a: "By automating high-frequency, repetitive tasks such as lead qualification and data entry, we significantly reduce operational overhead. This allows your human capital to pivot toward high-value strategic growth." 
    },
    { 
      q: "Can your AI solutions integrate with my existing tech stack?", 
      a: "Absolutely. We specialize in seamless API integrations using enterprise-grade middleware like n8n and Make. Whether it's your CRM, ERP, or WhatsApp, we ensure a unified data ecosystem." 
    },
    { 
      q: "How do you ensure the security of our sensitive corporate data?", 
      a: "Data integrity is our cornerstone. We deploy private RAG architectures and enterprise-level encryption, ensuring your proprietary information never leaves your secure environment." 
    },
    { 
      q: "What is the typical deployment timeline for a custom AI agent?", 
      a: "Standard workflow automations are typically deployed within 1-2 weeks. More sophisticated Reasoning Agents generally require a 3 to 6-week development cycle." 
    },
    { 
      q: "Are the AI conversational agents truly human-like in interaction?", 
      a: "Yes. Our agents leverage state-of-the-art LLMs to understand nuanced context, sentiment, and intent, providing a professional and sophisticated brand voice." 
    },
    { 
      q: "Do you provide post-deployment support and optimization?", 
      a: "We offer comprehensive 24/7 technical monitoring and iterative maintenance. We continuously refine your AI models to ensure they evolve with your business." 
    },
    { 
      q: "Will AI replace my current workforce?", 
      a: "Our philosophy is 'Augmentation over Replacement.' We build AI systems that handle mundane work, empowering your team to focus on creativity and complex decision-making." 
    },
    { 
      q: "What makes SM Tech different from other AI agencies?", 
      a: "We don't just provide 'out-of-the-box' bots. We architect bespoke business reasoning agents that understand your specific logic, integrated with custom-built dashboards." 
    },
    { 
      q: "Can the AI handle multi-lingual customer support?", 
      a: "Yes, our systems are natively multi-lingual. They can detect, translate, and respond in over 50+ languages, allowing you to scale globally." 
    },
    { 
      q: "What is the first step to starting an automation project?", 
      a: "We begin with a Strategic Discovery Session. We analyze your bottlenecks, identify high-impact areas, and provide a clear roadmap before writing code." 
    }
  ];

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl transition-all duration-500">
      <div className="relative bg-slate-950 border-2 border-green-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] p-6 md:p-10 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-green-400 hover:bg-white/10 transition-all border border-white/10"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-10 space-y-4">
          <span className="px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-widest">
            Support Portal
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic">
            STRATEGIC <span className="text-green-500">INSIGHTS</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`group overflow-hidden transition-all duration-300 rounded-3xl border ${
                openIndex === i ? 'bg-slate-900 border-green-500/40 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'bg-slate-950 border-white/5 hover:border-green-500/20'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left"
              >
                <div className="flex gap-4 items-center">
                  <div className={`p-2 rounded-lg border transition-colors ${
                    openIndex === i ? 'bg-green-600/20 border-green-500/50 text-green-400' : 'bg-white/5 border-white/10 text-green-600'
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white tracking-tight group-hover:text-green-400 transition-colors">
                    {f.q}
                  </h4>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180 text-green-400' : 'rotate-0'
                }`} />
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 ml-10">
                  <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-green-500/30 pl-4">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Contact inside Modal */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <a 
            href="https://wa.me/923010637955?text=Hello" 
            target="_blank" 
            className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-all text-sm uppercase tracking-widest"
          >
            <MessageSquare size={16} /> Still have questions? Chat with us
          </a>
        </div>
      </div>
    </div>
  );
}