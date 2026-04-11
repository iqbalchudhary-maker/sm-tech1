import { ShieldCheck, Briefcase, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-10 bg-[#01040f] border-y border-white/5 px-4 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Detailed Text Content with Borders */}
        <div className="relative p-px bg-linear-to-br from-green-500/30 via-transparent to-white/5 rounded-[40px]">
          <div className="bg-slate-950/80 backdrop-blur-xl p-8 md:p-12 rounded-[39px] h-full border border-white/5">
            <h2 className="text-4xl font-black text-white tracking-tight mb-8">
              About <span className="text-green-500">SM Technology</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                <span className="text-white font-bold text-xl block mb-2 underline decoration-green-500/30 underline-offset-8">Innovation Meets Automation</span>
                <span className="text-white font-semibold">SM Technology</span> is a premier <span className="text-green-400">AI Automation Agency</span> and <span className="text-white font-semibold">Web Development</span> firm dedicated to driving <span className="text-white font-semibold">Digital Transformation</span> for businesses globally.
              </p>

              <p className="bg-white/5 p-6 rounded-3xl border-l-4 border-green-500 shadow-inner">
                Our journey is rooted in professional excellence. <span className="text-green-400 font-bold italic">Registration No. 2747, Registered on 3 December 2019</span>, according to <span className="italic text-slate-300">Partnership Act 1932</span>. This ensures reliable automation services to our international clientele.
              </p>

              <p>
                Whether it's building autonomous reasoning agents or scaling omnichannel AI bots, our mission is to empower enterprises with technology that eliminates repetitive manual tasks.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Registered & Trusted Card with Active Glow */}
        <div className="relative group p-px bg-linear-to-tr from-white/5 via-green-500/40 to-white/5 rounded-[48px] shadow-[0_0_40px_rgba(34,197,94,0.1)]">
          <div className="bg-slate-950/90 border border-white/10 rounded-[47px] p-12 text-center backdrop-blur-md relative overflow-hidden">
            
            {/* Animated Banner/Badge Background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-500 to-transparent animate-pulse"></div>

            {/* Active Icon/Badge */}
            <div className="relative w-20 h-20 mx-auto mb-8">
               <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-ping"></div>
               <div className="relative w-20 h-20 bg-slate-900 border-2 border-green-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <ShieldCheck className="w-10 h-10 text-green-500" />
               </div>
            </div>

            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
              <span className="text-green-500">Registered</span> & Trusted
            </h3>
            <p className="text-slate-500 text-sm mb-12 max-w-sm mx-auto leading-relaxed uppercase tracking-widest font-bold">
              Operating under the Partnership Act 1932 since 2019, Delivering Quality & Security.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-4xl group hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-500">
                <p className="text-4xl font-black text-white group-hover:text-green-400 transition-colors tracking-tighter italic">5+</p>
                <div className="w-8 h-1 bg-green-500/30 mx-auto mt-2 rounded-full"></div>
                <p className="text-[10px] uppercase tracking-[2px] font-black text-slate-500 mt-4 leading-tight">Years <br/> Experience</p>
              </div>

              {/* Stat 2 */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-4xl group hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-500">
                <p className="text-4xl font-black text-white group-hover:text-green-400 transition-colors tracking-tighter italic">450+</p>
                <div className="w-8 h-1 bg-green-500/30 mx-auto mt-2 rounded-full"></div>
                <p className="text-[10px] uppercase tracking-[2px] font-black text-slate-500 mt-4 leading-tight">Global <br/> Projects</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}