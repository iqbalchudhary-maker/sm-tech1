"use client";
import { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User, Sparkles, Trash2 } from 'lucide-react';

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Load Chat History from LocalStorage
  useEffect(() => {
    const savedChat = localStorage.getItem('sm_tech_expert_chat');
    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    } else {
      setMessages([{ role: 'model', text: 'Salam! I am the Lead Strategist at SM Tech. Ready to scale your business with AI? Let\'s discuss your project.' }]);
    }
  }, []);

  // 2. Auto-save and Auto-scroll
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
    <div className="fixed bottom-6 right-6 z-[1000] font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:scale-105 transition-all flex items-center gap-2 group"
        >
          <div className="bg-white/20 p-1 rounded-lg"><Sparkles size={20} /></div>
          <span className="font-bold pr-2 text-sm uppercase tracking-wider">Talk to Expert</span>
        </button>
      )}

      {isOpen && (
        /* responsive height fixed: max-h added */
        <div className="bg-white w-[350px] sm:w-[380px] h-[600px] max-h-[85vh] shadow-[0_30px_100px_rgba(0,0,0,0.2)] rounded-[32px] flex flex-col border border-slate-200 overflow-hidden transition-all animate-in slide-in-from-bottom-5">
          
          {/* Header Section */}
          <div className="bg-slate-900 p-5 text-white relative z-[1001]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">SM TECHNOLOGY</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Expert Agent</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <button 
                  onClick={clearChat} 
                  title="Clear Chat"
                  className="text-slate-400 hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-lg"
                >
                  <Trash2 size={18}/>
                </button>
                
                {/* Minimize Button (Cross) */}
                <button 
                  onClick={() => setIsOpen(false)} 
                  title="Minimize"
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg border border-white/10"
                >
                  <X size={22} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Chat Messaging Area */}
          <div className="flex-1 p-5 overflow-y-auto space-y-6 bg-slate-50/50 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} gap-3 animate-in fade-in duration-500`}>
                {m.role !== 'user' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-md">
                    <Sparkles size={14} className="text-white" />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-[22px] text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
                {m.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <User size={14} className="text-white" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center animate-spin"><Sparkles size={14} className="text-blue-600" /></div>
                <div className="text-xs text-slate-400 font-bold tracking-widest uppercase animate-pulse">Thinking...</div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100 relative z-[1001]">
            <div className="relative flex items-center bg-slate-50 rounded-2xl border border-slate-300 shadow-inner">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="w-full pl-4 pr-12 py-3 bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400 font-medium text-sm"
                autoFocus
              />
              <button 
                onClick={sendMessage} 
                className="absolute right-2 bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-all shadow-md active:scale-90"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">
              SM Tech AI Agent can make mistakes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}