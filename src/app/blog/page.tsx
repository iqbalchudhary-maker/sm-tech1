import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";
import { Search } from "lucide-react"; // Install lucide-react if not present

export default async function BlogMainPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-blue-100">
      
      {/* RESEARCH & TRAINING HEADER SECTION */}
      <header className="relative group mb-12 overflow-hidden">
        <div className="absolute -left-16 -top-16 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] group-hover:bg-green-500/30 transition-all duration-700" />
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500/15 rounded-full blur-[100px] group-hover:bg-blue-500/25 transition-all duration-700" />

        <div className="relative bg-slate-100/50 backdrop-blur-md border border-zinc-200 p-8 md:p-12 rounded-[3rem] hover:border-green-500/40 transition-all duration-500 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">SM Tech / Practical Intelligence</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">
                Research <span className="text-green-600">Repository</span>
              </h2>
              
              <p className="text-slate-600 text-[11px] mt-5 uppercase tracking-[0.2em] font-bold max-w-xl leading-relaxed">
                Centralized terminal for <span className="text-slate-900 underline decoration-green-500/40 underline-offset-4">practical training modules</span>, agency research insights, and high-impact AI case studies.
              </p>
            </div>

            {/* SEARCH SHORTCUT HINT (Visual Only for Server Component) */}
            <div className="flex items-center gap-4 bg-white/50 border border-zinc-200 px-4 py-2 rounded-2xl shadow-sm">
                <Search className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Press</span>
                <kbd className="bg-zinc-900 text-white px-2 py-1 rounded-lg text-[9px] font-black">CTRL + K</kbd>
            </div>

            <div className="hidden lg:flex gap-8 border-l border-slate-300 pl-8">
              <div className="text-right">
                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Total Insights</p>
                <p className="text-3xl font-black italic text-slate-900">{posts.length}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Live Sync</p>
                <div className="flex items-center justify-end gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                   <p className="text-2xl font-black italic text-green-600 uppercase">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- PREMIUM DYNAMIC HERO SECTION --- */}
      <section className="relative w-full max-w-7xl mx-auto px-6 mb-24">
        <div className="relative group overflow-hidden rounded-[4rem] border border-zinc-200 bg-zinc-50 shadow-2xl transition-all duration-700 hover:border-blue-500/30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-green-500/5 z-10" />
          
          <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 p-10 lg:p-16">
            <div className="lg:w-3/5 space-y-6 lg:pr-10">
              <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-2xl">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">AI Engineering Excellence</p>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.95] uppercase italic">
                Engineering <br />
                <span className="text-blue-600">Autonomy.</span>
              </h1>
              
              <p className="text-zinc-500 text-base lg:text-lg font-medium leading-relaxed max-w-lg">
                Exploring the frontier of Agentic AI, multi-step reasoning engines, and digital architecture for the next era of business automation.
              </p>
            </div>

            <div className="lg:w-2/5 flex justify-center lg:justify-end relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
              <img 
                src="/hero.png" 
                alt="SM Tech Hero" 
                className="relative z-30 w-full max-w-[400px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- ENHANCED ARTICLE CARDS GRID --- */}
      <section className="max-w-7xl mx-auto py-16 px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {posts.map((post: any) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id} 
              className="group relative flex flex-col h-[500px] bg-white border border-zinc-200/60 rounded-[3rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-4 hover:rotate-1"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-60 overflow-hidden bg-zinc-100">
                <img 
                  src={post.image || "/placeholder.jpg"} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <span className="bg-white text-zinc-900 px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest shadow-xl">
                        {post.category || "Research"}
                    </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white text-[9px] font-black group-hover:scale-110 transition-transform">
                        {post.author ? post.author.substring(0, 2).toUpperCase() : "AB"}
                    </div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{post.author || "Abbas Bhatti"}</p>
                  </div>

                  <h2 className="text-xl font-black text-zinc-900 uppercase leading-tight italic tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                   <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                    {format(new Date(post.createdAt), "dd . MM . yy")}
                   </span>
                   <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500">
                      <span className="text-xs">↗</span>
                   </div>
                </div>
              </div>

              {/* Hover Glow Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          ))}
        </div>
      </section>

       {/* --- FOOTER: CLEAN ARCHITECTURE --- */}
      <footer className="bg-zinc-50 border-t border-zinc-100 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-7 space-y-10">
            <h3 className="text-5xl font-black text-black uppercase tracking-tighter italic leading-none">
              SM Tech <span className="text-blue-600">Hub.</span>
            </h3>
            
            <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl font-medium">
              We have officially launched our <strong className="text-black underline decoration-blue-500 decoration-4">Knowledge-Base Initiatives</strong>. From industry insights to professional AI training, SM Tech is your source for growth.
            </p>

            <a 
              href="https://wa.me/92301063795" 
              className="inline-flex items-center gap-4 bg-zinc-900 text-white font-black px-10 py-5 rounded-full hover:bg-blue-600 transition-all text-xs uppercase tracking-[0.3em] shadow-2xl"
            >
              Connect with CEO
            </a>
          </div>

          <div className="lg:col-span-5 w-full bg-white p-12 rounded-[3rem] border border-zinc-200 shadow-sm">
            <h4 className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Neural Navigation</h4>
            
            <div className="space-y-4">
              {['Client Portal', 'AI Services', 'Staff Access Point'].map((link, i) => (
                <Link key={i} href={link === 'Staff Access Point' ? '/admin/login' : '/'} className="group flex justify-between items-center py-4 border-b border-zinc-50 hover:border-blue-600 transition-all">
                  <span className="text-xs font-black text-zinc-900 uppercase tracking-widest">{link}</span>
                  <div className="w-6 h-6 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all">
                    <span className="text-[10px] text-zinc-400 group-hover:text-white">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.5em]">
            © 2026 SM Tech AI Solutions.
          </p>
          <div className="flex gap-8 text-zinc-300 text-[9px] font-black uppercase tracking-widest">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Systems</span>
          </div>
        </div>
      </footer>

     
    </div>
  );
}