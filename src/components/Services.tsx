import { 
  Cpu, 
  Workflow, 
  Database, 
  MessageSquare, 
  LayoutDashboard, 
  Mic2 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Autonomous Cognitive Agents",
      desc: "Architecting self-correcting AI agents that execute multi-step business logic with zero human intervention.",
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      tag: "Agentic AI"
    },
    {
      title: "Enterprise Ecosystem Automation",
      desc: "Orchestrating complex workflows via n8n and Make to create a 24/7 autonomous operations layer.",
      icon: <Workflow className="w-8 h-8 text-emerald-400" />,
      tag: "Process Optimization"
    },
    {
      title: "Proprietary RAG Architectures",
      desc: "Securing corporate intelligence with custom Retrieval-Augmented Generation systems for instant, private data insights.",
      icon: <Database className="w-8 h-8 text-green-600" />,
      tag: "Data Intelligence"
    },
    {
      title: "Omni-Channel Conversational AI",
      desc: "Deploying high-fidelity NLP bots on WhatsApp and LinkedIn to automate the entire sales funnel from lead to close.",
      icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
      tag: "Growth Hacking"
    },
    {
      title: "AI Performance Analytics",
      desc: "Full-stack BI portals providing real-time visualization of agent efficiency and automated ROI metrics.",
      icon: <LayoutDashboard className="w-8 h-8 text-green-400" />,
      tag: "BI & Analytics"
    },
    {
      title: "Neural Voice Engineering",
      desc: "Hyper-realistic voice agents for outbound sales and support, delivering human-level empathy with AI speed.",
      icon: <Mic2 className="w-8 h-8 text-green-500" />,
      tag: "Voice Tech"
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SM Tech AI & Automation Services",
    "description": "Professional AI automation, agentic workflows, and full-stack development services by SM Tech with 20 years of expertise.",
    "itemListElement": services.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Service",
        "name": s.title,
        "description": s.desc,
        "provider": {
          "@type": "Organization",
          "name": "SM Tech",
          "url": "https://sm-tech.com"
        },
        "areaServed": "Global",
        "serviceType": "AI Automation & Digital Transformation"
      }
    }))
  };

  return (
    <section id="services" className="py-24 px-4 bg-[#01040f] relative overflow-hidden border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <div className="absolute top-1/4 right-0 w-80 h-80 bg-green-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- REFINED SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-10">
          
          {/* Enhanced Badge with increased tracking */}
          <span className="inline-block px-6 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            SM Tech Capabilities & Solutions
          </span>

          <div className="flex flex-col items-center justify-center text-center w-full">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight">
              ARCHITECTING THE <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-green-600 to-emerald-400">FUTURE OF WORK</span>
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-green-500 to-emerald-500 mt-8 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
          </div>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed border-l-2 border-green-600/50 pl-8 italic mt-12">
            “At SM Tech, we engineer high-performance autonomous systems that transform operational costs into exponential revenue growth.”
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group relative p-px bg-linear-to-b from-green-500/20 via-transparent to-transparent rounded-[40px] transition-all duration-500 hover:scale-[1.03] hover:from-green-500/50">
              
              <div className="p-8 md:p-10 bg-slate-950 rounded-[39px] h-full flex flex-col relative overflow-hidden border border-white/5 group-hover:border-green-500/30 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-green-500/5 rounded-2xl border border-green-500/10 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all duration-500">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-green-400 transition-colors">
                    {s.tag}
                  </span>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-green-400 transition-colors mb-4 leading-tight">
                    {s.title}
                  </h3>
                  
                  <div className="pt-6 border-t border-white/5 mt-auto relative">
                    <div className="absolute -top-px left-0 w-12 h-px bg-green-600"></div>
                    <p className="text-slate-400 text-[14px] leading-relaxed group-hover:text-slate-200 transition-colors">
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-10 group-hover:bottom-4 right-8 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-[9px] text-green-500 font-bold uppercase tracking-widest bg-green-500/5 px-2 py-1 rounded-md border border-green-500/20">
                    SM Tech Excellence
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}