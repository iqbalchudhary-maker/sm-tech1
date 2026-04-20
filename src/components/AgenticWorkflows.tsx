"use client";
import { Cpu, GitBranch, Repeat, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";

const workflows = [
  {
    title: "Autonomous Reasoning",
    description: "Our agents move beyond basic commands, utilizing advanced 'Chain-of-Thought' reasoning to solve complex, multi-layered business problems.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Collaborative swarms of specialized agents—Researchers, Analysts, and Architects—work in tandem to execute large-scale projects.",
    icon: <GitBranch className="w-6 h-6" />,
  },
  {
    title: "Dynamic Tool Integration",
    description: "Intelligence that makes real-time decisions on when to execute API calls, query deep databases, or trigger automated communication.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Self-Healing Architecture",
    description: "Automated error detection and correction loops ensure your business logic remains flawless and resilient under all conditions.",
    icon: <Repeat className="w-6 h-6" />,
  },
];

export default function AgenticWorkflows() {
  return (
    // ID ADDED HERE: scroll target ke liye
    <section id="workflows" className="py-24 bg-[#fafbfc] border-t border-slate-100 relative overflow-hidden scroll-mt-24">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-50/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            The Future of Automation
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Next-Gen <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Agentic AI</span> Workflows
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We engineer autonomous ecosystems that transcend traditional chatbots, providing 24/7 intelligent operations without manual intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflows.map((flow, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-[2.5rem] border border-slate-200 bg-white hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(8,112,184,0.07)] transition-all duration-500"
            >
              {/* Icon with persistent rotate on hover */}
              <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-360 transition-all duration-700 ease-in-out shadow-sm">
                {flow.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                {flow.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
              </h3>
              
              <p className="text-slate-500 text-base leading-relaxed font-light">
                {flow.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Validation Badges */}
        <div className="mt-24 flex flex-wrap justify-center items-center gap-6">
          <div className="w-full text-center">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Enterprise Grade Stack
            </p>
          </div>
          
          <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 text-white text-sm font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <span>Built with LangGraph & CrewAI</span>
          </div>
          
          <div className="px-6 py-4 bg-white text-slate-700 text-sm font-bold rounded-2xl border border-slate-200 hover:bg-blue-50 transition-colors shadow-sm">
            Production RAG Architecture
          </div>
          
          <div className="px-6 py-4 bg-linear-to-r from-blue-600 to-blue-800 text-white text-sm font-bold rounded-2xl shadow-lg hover:shadow-blue-300 hover:-translate-y-1 transition-all">
            Powered by GPT-4o & Claude 3.5
          </div>
        </div>
      </div>
    </section>
  );
}