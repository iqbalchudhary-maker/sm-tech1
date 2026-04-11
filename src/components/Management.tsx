import Image from 'next/image';

export default function Management() {
  const team = [
    { 
      name: "Tanvir Hussain Chatha", 
      role: "Director (UAE) & Global Projects", 
      img: "/tanvir.jpeg",
      value: "Scaling international business ROI through bespoke AI architectures and strategic automation."
    },
    { 
      name: "Ghulam Abbas Bhatti", 
      role: "Director (Pakistan Operations)", 
      img: "/abbass.png", 
      value: "Empowering local enterprises with high-efficiency R&D and future-proof digital infrastructure."
    },
    { 
      name: "Miss Rifat Ismail", 
      role: "Head of Technical Excellence", 
      img: "/rifat.jpeg",
      value: "Ensuring zero-compromise engineering standards to deliver robust, scalable, and secure client solutions."
    },
    { 
      name: "Miss Samina Bukhari", 
      role: "Technical Team Manager", 
      img: "/samina.jpeg",
      value: "Optimizing project timelines and delivery speed to get your products to market faster than ever."
    },
    { 
      name: "Miss Fabeeha Zainab", 
      role: "Strategic Finance Manager", 
      img: "/dummy.jpeg",
      value: "Maximizing client investment value through precise budgeting and sustainable AI product growth."
    },
    { 
      name: "Mr. Faiz Ahmad", 
      role: "Finance Operations Manager", 
      img: "/dummy.jpeg",
      value: "Streamlining operational costs to ensure high-performance services at the most competitive rates."
    }
  ];

  return (
    <section id="management" className="py-24 px-4 bg-[#01040f] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-500/50 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-6">
          <span className="px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest">
            The Visionaries
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            Executive <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-green-600 to-emerald-400">Leadership</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Our mission is simple: <span className="text-white font-semibold">Your growth.</span> We combine global expertise with local dedication to transform your business into an AI-powered powerhouse.
          </p>
        </div>

        {/* 6 Grid Layout with Green Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((m, i) => (
            /* Yahan background gradient aur hover effects ko green theme mein update kiya hai */
            <div key={i} className="group relative p-1 bg-linear-to-b from-green-500/40 to-transparent rounded-[48px] transition-all duration-500 hover:scale-[1.02]">
              {/* Card Main Container with Green Border Shadow */}
              <div className="p-8 bg-slate-950 rounded-[46px] h-full flex flex-col relative overflow-hidden border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.05)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group-hover:border-green-500/50 transition-all duration-500">
                
                {/* --- Image Section --- */}
                <div className="relative w-full aspect-4/5 mb-8 rounded-4xl overflow-hidden border border-white/5">
                  <Image 
                    src={m.img} 
                    alt={m.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Floating Action Badge - Green Theme */}
                  <div className="absolute bottom-4 left-4 right-4 py-3 px-4 bg-black/40 backdrop-blur-md border border-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-[10px] text-green-300 font-bold uppercase tracking-widest text-center">Expert in SM Tech</p>
                  </div>
                </div>

                {/* --- Content Section --- */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-green-400 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-green-500 text-[11px] font-black uppercase tracking-[0.2em] mt-2 mb-6">
                    {m.role}
                  </p>

                  {/* --- Message Section with Green Accents --- */}
                  <div className="pt-6 border-t border-white/5 mt-auto relative">
                    <div className="absolute -top-px left-0 w-12 h-px bg-green-600"></div>
                    <p className="text-slate-300 text-[14px] leading-relaxed font-medium">
                      {m.value}
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