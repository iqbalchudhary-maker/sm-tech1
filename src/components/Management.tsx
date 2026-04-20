"use client";
import Image from 'next/image';

export default function Management() {
  const team = [
    { 
      name: "Tanvir Hussain Chatha", 
      role: "Director UAE", 
      img: "/tanvir.jpeg",
      value: "Scaling international business ROI through bespoke AI architectures and strategic automation."
    },
    { 
      name: "Ghulam Abbas Bhatti", 
      role: "Director (Pakistan) & Global Projects" ,
      img: "/abbass.png", 
      value: "Empowering local enterprises with high-efficiency R&D and future-proof digital infrastructure."
    },
    { 
      name: "Miss Fabiha Zanib", 
      role: "Head of Client Success", 
      img: "/fatima.jpeg",
      value: "Bridging the gap between complex AI logic and business impact to ensure every client achieves 10x ROI."
    },
    { 
      name: "Miss Samina Bukhari", 
      role: "Technical Team Manager", 
      img: "/samina.jpeg",
      value: "Optimizing project timelines and delivery speed to get your products to market faster than ever."
    },
    { 
      name: "Miss Rifat Ismail", 
      role: "Head of Technical Excellence", 
      img: "/rifat.jpeg",
      value: "Ensuring zero-compromise engineering standards to deliver robust, scalable, and secure client solutions."
    },
    { 
      name: "Mr. Faiz Ahmad", 
      role: "Finance Operations Manager", 
      img: "/faiz.jpeg",
      value: "Streamlining operational costs to ensure high-performance services at the most competitive rates."
    }
  ];

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SM Tech",
    "url": "https://sm-tech.com",
    "logo": "https://sm-tech.com/logo.png",
    "description": "Led by experts with 20 years of experience, SM Tech provides elite AI automation and full-stack development.",
    "founder": {
      "@type": "Person",
      "name": "Ghulam Abbas Bhatti"
    },
    "employee": team.map((m) => ({
      "@type": "Person",
      "name": m.name,
      "jobTitle": m.role,
      "description": m.value,
      "image": `https://sm-tech.com${m.img}`
    }))
  };

  return (
    <section id="management" className="py-24 px-4 bg-[#01040f] relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-500/50 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- REFINED SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-10"> {/* Increased spacing between elements */}
          
          {/* Enhanced Badge: Increased tracking and glow effect */}
          <span className="inline-block px-6 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            SM Tech Visionaries
          </span>

          <div className="flex flex-col items-center justify-center text-center w-full">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              EXECUTIVE <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-green-600 to-emerald-400">LEADERSHIP</span>
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-green-500 to-emerald-500 mt-8 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
          </div>

          {/* Added mt-12 for more padding below the header */}
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed mt-12">
            Our mission is simple: <span className="text-white font-semibold">Your growth.</span> SM Tech combines 20 years of experience with global expertise to transform your business.
          </p>
        </div>

        {/* 6 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((m, i) => (
            <div key={i} className="group relative p-px bg-linear-to-b from-green-500/40 to-transparent rounded-[48px] transition-all duration-500 hover:scale-[1.02]">
              <div className="p-8 bg-slate-950 rounded-[46px] h-full flex flex-col relative overflow-hidden border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.05)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group-hover:border-green-500/50 transition-all duration-500">
                
                <div className="relative w-full aspect-4/5 mb-8 rounded-4xl overflow-hidden border border-white/5">
                  <Image 
                    src={m.img} 
                    alt={`${m.name} - ${m.role} at SM Tech`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    priority={i < 3}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-4 left-4 right-4 py-3 px-4 bg-black/40 backdrop-blur-md border border-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-[10px] text-green-300 font-bold uppercase tracking-widest text-center">AI Strategic Leadership</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-green-400 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-green-500 text-[11px] font-black uppercase tracking-[0.2em] mt-2 mb-6">
                    {m.role}
                  </p>

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