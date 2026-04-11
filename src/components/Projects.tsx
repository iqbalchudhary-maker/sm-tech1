import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      name: "Nexus AI Auto-Marketer",
      role: "Autonomous Social Media Ecosystem",
      description: "End-to-end marketing automation that leverages generative AI to orchestrate targeted campaigns across Facebook and LinkedIn.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
      testimonial: "This automation has cut our marketing time by 70%. Simply brilliant!",
      client: "CEO, TECHLAUNCH SOLUTIONS"
    },
    {
      name: "Lead-Precision AI Hunter",
      role: "Cognitive B2B Intelligence",
      description: "Advanced AI-driven scraping agent that identifies, validates, and prioritizes high-conversion B2B prospects globally.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      testimonial: "The accuracy of lead generation is unmatched. A game-changer for our sales team.",
      client: "MANAGER OPERATIONS, GLOBAL OUTREACH GROUP"
    },
    {
      name: "Polyglot AI Engine",
      role: "Linguistic Knowledge Engineering",
      description: "Advanced neural translation and content synthesis system utilizing LLMs for cross-border knowledge management.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
      testimonial: "Effortless translation and high-quality rewrites. Highly recommended!",
      client: "CONTENT LEAD, MEDIASTREAM LTD"
    },
    {
      name: "Edu-Smart RAG Assistant",
      role: "Institutional Intelligence Bot",
      description: "A specialized Retrieval-Augmented Generation (RAG) assistant tailored for educational query resolution and workflow optimization.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80", 
      testimonial: "Transformed how our students interact with college resources. Exceptionally smart.",
      client: "PRINCIPAL, USWA COLLEGE"
    },
    {
      name: "LuxeStore AI Commerce",
      role: "Next-Gen E-commerce Suite",
      description: "Premium full-stack retail platform featuring an AI-orchestrated analytics dashboard and adaptive user experiences.",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=1200&q=80",
      testimonial: "The interface is perfect for our fashion brand. User experience and security are top-notch.",
      client: "FOUNDER, BUKHARI RETAIL GROUP"
    },
    {
      name: "Velocity AI Sales Closer",
      role: "Decision Support & Automation",
      description: "Autonomous reasoning agent engineered to navigate complex sales objections and maximize real-time conversion rates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      testimonial: "It's like having a 24/7 salesperson who never gets tired. Remarkable ROI.",
      client: "DIRECTOR MARKETING, INNOVATE PRO"
    }
  ];

  return (
    <section id="projects" className="py-12 px-4 bg-[#01040f] relative overflow-hidden border-t border-white/5 scroll-mt-24">
      {/* Background Green Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-4">
          <span className="px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Completed <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-green-600 to-emerald-400">Projects (450+)</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            From custom GPTs to full-scale E-commerce automation, we deliver solutions that <span className="text-white font-semibold underline decoration-green-500">drive real business results.</span>
          </p>
        </div>

        {/* Projects Grid with Green Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative p-1 bg-linear-to-b from-green-500/40 to-transparent rounded-[48px] transition-all duration-500 hover:scale-[1.02]">
              <div className="p-7 bg-slate-950 rounded-[46px] h-full flex flex-col relative overflow-hidden border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.05)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group-hover:border-green-500/50 transition-all duration-500">
                
                {/* --- Project Image --- */}
                <div className="relative w-full aspect-video mb-6 rounded-4xl overflow-hidden border border-white/5">
                  <Image 
                    src={p.image} 
                    alt={p.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Floating Action Badge - Green Theme */}
                  <div className="absolute bottom-4 left-4 right-4 py-3 px-4 bg-black/40 backdrop-blur-md border border-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-[10px] text-green-300 font-bold uppercase tracking-widest text-center">Built by SM Tech</p>
                  </div>
                </div>

                {/* --- Project Content --- */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-green-400 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-green-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2 mb-4">
                    {p.role}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* --- Testimonial Section --- */}
                  <div className="pt-5 border-t border-white/5 mt-auto relative">
                    <div className="absolute -top-px left-0 w-12 h-px bg-green-600"></div>
                    <p className="text-slate-300 text-[12px] italic leading-relaxed mb-3">
                      "{p.testimonial}"
                    </p>
                    <p className="text-green-400 text-[9px] font-black uppercase tracking-widest">
                      — {p.client}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}