import React from "react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";
import { Search } from "lucide-react";

// 1. SEO METADATA
export const metadata = {
  title: "AI Research & Knowledge Hub | SM Tech AI Solutions",
  description: "Explore practical AI strategies, Agentic AI case studies, and engineering insights. Stay ahead in business automation with SM Tech's expert-led research repository.",
  keywords: ["Agentic AI", "AI Automation", "SM Tech Insights", "Business Intelligence", "AI Engineering", "Multi-step reasoning engines"],
  openGraph: {
    title: "SM Tech Knowledge Hub | Engineering Autonomy",
    description: "Exploring the frontier of Agentic AI and digital architecture for the next era of business automation.",
    url: "https://www.smtechaisolutions.com/blog",
    siteName: "SM Tech AI Solutions",
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "SM Tech AI Engineering" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Tech AI Research Repository",
    description: "Practical AI training modules and high-impact case studies.",
    images: ["/hero.png"],
  },
};

export const dynamic = "force-dynamic";

// ERROR FIX: Default export as an async function for Server Components
export default async function BlogMainPage() {
  // Fetching data from Neon DB
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SM Tech AI Research Repository",
    "headline": "Engineering Autonomy through Agentic AI",
    "description": "Centralized terminal for practical training modules, agency research insights, and AI case studies.",
    "url": "https://www.smtechaisolutions.com/blog",
    "author": {
      "@type": "Person",
      "name": "Abbas Bhatti"
    }
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- HEADER SECTION --- */}
      <header className="relative group mb-12 overflow-hidden px-4 pt-8">
        <div className="absolute -left-16 -top-16 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto bg-slate-100/50 backdrop-blur-md border border-zinc-200 p-8 md:p-12 rounded-[3rem] shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">SM Tech / Practical Intelligence</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">
                Research <span className="text-green-600">Repository</span>
              </h1>
              <p className="text-slate-600 text-[11px] mt-5 uppercase tracking-[0.2em] font-bold max-w-xl leading-relaxed">
                Centralized terminal for <span className="text-slate-900 underline decoration-green-500/40 underline-offset-4">practical training modules</span>, agency research insights, and high-impact AI case studies.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/50 border border-zinc-200 px-4 py-2 rounded-2xl shadow-sm">
              <Search className="w-4 h-4 text-zinc-400" />
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Search</span>
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
      <section className="relative w-full max-w-7xl mx-auto px-6 mb-12">
        <div className="relative group overflow-hidden rounded-[4rem] border border-zinc-200 bg-zinc-50 shadow-2xl transition-all duration-700 hover:border-blue-500/30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-green-500/5 z-10" />
          <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 p-6 lg:py-8 lg:px-16">
            <div className="lg:w-3/5 space-y-4 lg:pr-5">
              <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-2xl">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">AI Engineering Excellence</p>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.95] uppercase italic">
                Engineering <br />
                <span className="text-blue-600">Autonomy.</span>
              </h2>
              <p className="text-zinc-500 text-base lg:text-lg font-medium leading-relaxed max-w-lg">
                Exploring the frontier of <strong>Agentic AI</strong>, multi-step reasoning engines, and digital architecture for the next era of business automation.
              </p>
            </div>
            <div className="lg:w-2/5 flex justify-center lg:justify-end relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
              <img 
                src="/hero.png" 
                alt="SM Tech AI Solutions Hero Engineering Illustration" 
                className="relative z-30 w-full max-w-[320px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- ARTICLE GRID SECTION --- */}
      <section className="max-w-7xl mx-auto py-4 px-6 relative">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-[0.5em] text-blue-700 mb-2 shadow-sm">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              SM Tech AI Insights and Knowledge Hub
            </span>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none max-w-4xl">
              Latest <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-green-500 bg-clip-text text-transparent italic">
                Articles & Insights
              </span>
            </h3>
            <p className="text-zinc-500 mt-4 max-w-2xl text-base md:text-lg font-medium leading-relaxed">
              Explore <span className="text-zinc-800 font-bold">practical AI strategies</span> and engineering insights designed to help you build smarter systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {posts.map((post) => (
            <article key={post.id}>
              <Link 
                href={`/blog/${post.slug}`} 
                className="group relative flex flex-col h-[500px] bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 opacity-80 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-60 overflow-hidden bg-zinc-100">
                  <img 
                    src={post.image || "/placeholder.jpg"} 
                    alt={`Insight on ${post.title}`} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="absolute bottom-4 left-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest shadow">
                      {post.category || "Research"}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white text-[9px] font-bold">
                        {"AB"}
                      </div>
                      <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                        Abbas Bhatti
                      </p>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 leading-snug mb-4 group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                    <time dateTime={new Date(post.createdAt).toISOString()} className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                      {format(new Date(post.createdAt), "dd MMM yy")}
                    </time>
                    <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                      <span className="text-xs">↗</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gradient-to-b from-zinc-900 to-black border-t border-zinc-800 py-24 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 space-y-10">
            <p className="text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
              SM Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Hub.</span>
            </p>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl font-medium">
              Knowledge-Base Initiatives by SM Tech.
            </p>
          </div>
          <div className="lg:col-span-5 w-full bg-zinc-900/50 backdrop-blur-sm p-12 rounded-[3rem] border border-zinc-800 shadow-2xl">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10">● Neural Navigation</p>
            <nav className="space-y-4">
              {['Client Portal', 'AI Services', 'Staff Access Point'].map((link, i) => (
                <Link key={i} href="/" className="group flex justify-between items-center py-5 border-b border-zinc-800 hover:border-blue-500 transition-all">
                  <span className="text-xs font-black text-zinc-300 group-hover:text-white uppercase tracking-widest transition-colors">{link}</span>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <span className="text-sm text-zinc-400 group-hover:text-white">→</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}