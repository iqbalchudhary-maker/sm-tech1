import React from "react";
import Link from "next/link"; // Next.js navigation ke liye

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#050505] text-gray-100 font-sans">
      <aside className="w-72 bg-[#0a0a0a] border-r border-zinc-800 p-8 flex flex-col fixed h-full">
        <div className="mb-12">
          <h1 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic">
            SM TECH PANEL
          </h1>
          <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-medium">Management System</p>
        </div>

        <nav className="flex-1 space-y-2">
          {/* Dashboard Overview Link */}
          <Link 
            href="/admin/dashboard" 
            className="flex items-center p-3 rounded-lg hover:bg-zinc-900 transition-all text-zinc-300 hover:text-white group"
          >
            <span className="group-hover:translate-x-1 transition-transform">Dashboard Overview</span>
          </Link>

          {/* Active Write Article Link (Path: /admin/create) */}
          <Link 
            href="/admin/create" 
            className="flex items-center p-3 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600/20 transition-all group"
          >
            <span className="font-semibold group-hover:scale-105 transition-transform">+ Write Article</span>
          </Link>
        </nav>

        <div className="pt-6 border-t border-zinc-800">
          <Link href="/" className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
             ← Exit to Website
          </Link>
        </div>
      </aside>

      {/* Content Area */}
      <main className="ml-72 flex-1 p-12">
        {children}
      </main>
    </div>
  );
}