"use client";
import { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User, Sparkles, Trash2 } from 'lucide-react';

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- JSON-LD FOR CHAT AGENT ---
  const chatSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Customer Support",
    "provider": {
      "@type": "ProfessionalService",
      "name": "SM Tech",
      "url": "https://sm-tech.com",
      "logo": "https://sm-tech.com/logo.png"
    },
    "description": "24/7 AI Strategist Agent for Enterprise Automation and Full Stack Solutions."
  };

  useEffect(() => {
    const savedChat = localStorage.getItem('sm_tech_expert_chat');
    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    } else {
      setMessages([{ role: 'model', text: 'Salam! I am the Lead Strategist at SM Tech. Ready to scale your business with AI? Let\'s discuss your project.' }]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('sm_tech_expert_chat', JSON.stringify(messages));
    }
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      localStorage.removeItem('sm_tech_expert_chat');
      setMessages([{ role: 'model', text: 'Chat cleared. How can I help you again?' }]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: currentInput, 
          history: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })) 
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'model', text: data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting. Check your internet." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Suggesion applied: z-[9999] -> z-9999
    <div className="fixed bottom-6 right-6 z-9999 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chatSchema) }}
      />

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:scale-105 transition-all flex items-center gap-2 group border border-white/10"
        >
          <div className="bg-white/20 p-1 rounded-lg"><Sparkles size={20} /></div>
          <span className="font-bold pr-2 text-sm uppercase tracking-wider">Talk to Expert</span>
        </button>
      )}

      {isOpen && (
        // Suggestions applied: sm:w-95, h-137.5, rounded-4xl
        <div className="bg-white w-[90vw] sm:w-95 h-137.5 max-h-[80vh] shadow-[0_30px_100px_rgba(0,0,0,0.3)] rounded-4xl flex flex-col border border-slate-200 overflow-hidden transition-all animate-in slide-in-from-bottom-5">
          
          <div className="bg-slate-900 p-5 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight uppercase">SM Tech Expert</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Always Online</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <button onClick={clearChat} className="text-slate-400 hover:text-red-400 transition-colors p-2 rounded-lg">
                  <Trash2 size={18}/>
                </button>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-2 border border-white/10 rounded-lg">
                  <X size={22} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-5 overflow-y-auto space-y-6 bg-slate-50/50 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} gap-3`}>
                {m.role !== 'user' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-md">
                    <Sparkles size={14} className="text-white" />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-[22px] text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-slate-400 animate-pulse">Strategizing...</div>}
            <div ref={scrollRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center bg-slate-50 rounded-2xl border border-slate-300">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about AI Automation..."
                className="w-full pl-4 pr-12 py-3 bg-transparent focus:outline-none text-slate-800 text-sm"
              />
              <button onClick={sendMessage} className="absolute right-2 bg-blue-600 text-white p-2 rounded-xl">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}