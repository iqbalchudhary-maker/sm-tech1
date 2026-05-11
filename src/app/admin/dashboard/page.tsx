"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/blog").then(res => res.json()).then(data => setPosts(data));
  }, []);

  const deletePost = async (id: string) => {
    if (confirm("Kya aap waqai ye article delete karna chahte hain?")) {
      await fetch(`/api/blog/${id}`, { method: "DELETE" });
      setPosts(posts.filter((p: any) => p.id !== id));
    }
  };

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100">
      
      {/* Header Section */}
      <header className="flex justify-between items-end mb-12 border-b border-zinc-100 pb-8">
        <div>
          <h2 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter italic">
            Content <span className="text-blue-600">Library</span>
          </h2>
          <p className="text-zinc-400 text-[10px] mt-2 uppercase tracking-[0.4em] font-bold">
            Manage your agency insights and academy lessons.
          </p>
        </div>
      </header>

      {/* Posts List Area */}
      <div className="grid gap-4">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-zinc-300 font-medium italic">
            No articles found. Start forging content!
          </div>
        ) : (
          posts.map((post: any) => (
            <div 
              key={post.id} 
              className="group bg-zinc-50 border border-zinc-200 p-6 rounded-2xl flex justify-between items-center hover:border-blue-600 hover:bg-white transition-all shadow-sm"
            >
              <div className="flex items-center gap-6">
                {/* Visual Indicator */}
                <div className={`w-1.5 h-12 rounded-full shadow-sm ${post.isTraining ? 'bg-green-500' : 'bg-blue-600'}`} />
                
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex gap-3 mt-2">
                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white border border-zinc-200 rounded text-zinc-500">
                      {post.category}
                    </span>
                    {post.isTraining && (
                      <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-green-100 border border-green-200 rounded text-green-700">
                        Academy
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <button 
                  onClick={() => router.push(`/admin/edit/${post.id}`)}
                  className="px-4 py-2 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-zinc-200"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deletePost(post.id)} 
                  className="px-4 py-2 bg-white text-red-600 border border-red-100 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}