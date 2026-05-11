"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function EditFormClient({ post }: { post: any }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  
  // Image Preview States
  const [preview, setPreview] = useState<string | null>(post.image || null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Handle Image Selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Create temporary URL for preview
    }
  };

  // Remove/Reset Image
  const removeImage = () => {
    setPreview(null);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // isTraining checkbox check
      const isTraining = (e.currentTarget.elements.namedItem("isTraining") as HTMLInputElement).checked;
      formData.set("isTraining", String(isTraining));

      // Append new image if selected
      if (selectedFile) {
        formData.set("image", selectedFile);
      } else if (!preview) {
        // Agar preview null hai (yani image remove kar di), to empty string bhejien
        formData.set("image", "");
      }

      const res = await fetch(`/api/blog/${post.id}`, {
        method: "PATCH",
        body: formData,
      });

      if (res.ok) {
        // Success: Move to dashboard immediately
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || "Database synchronization failed.");
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleUpdate} className="space-y-8 bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-200 shadow-2xl">
      
      {/* Title & Content Sections (Keeping your previous styling) */}
      <div className="space-y-2">
        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Research Title</label>
        <input name="title" defaultValue={post.title} className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-5 text-zinc-900 font-bold text-lg outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all shadow-sm" required />
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Research Analysis (Content)</label>
        <textarea name="content" defaultValue={post.content} rows={12} className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-5 text-zinc-900 text-base leading-relaxed outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all shadow-sm" required />
      </div>

      {/* Image Upload & Preview Section */}
      <div className="space-y-4">
        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1 block">Visual Media Management</label>
        
        <div className="bg-white border-2 border-dashed border-zinc-200 rounded-3xl p-6 min-h-[200px] flex flex-col items-center justify-center transition-all hover:border-blue-400">
          
          {preview ? (
            <div className="relative group w-full max-w-sm">
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-2xl shadow-md border border-zinc-100 grayscale hover:grayscale-0 transition-all duration-500" 
              />
              <button 
                type="button"
                onClick={removeImage}
                className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full shadow-xl hover:bg-red-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              <p className="text-[9px] text-center mt-3 text-zinc-400 font-black uppercase tracking-widest">Media Loaded / Ready to Sync</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-4 text-zinc-300">
                <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <label className="cursor-pointer bg-zinc-900 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-zinc-200">
                Upload New Image
                <input 
                  type="file" 
                  name="image" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Grid for Category & Training Switch */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Domain / Category</label>
          <input name="category" defaultValue={post.category} className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 text-zinc-900 font-medium outline-none focus:border-blue-600 transition-all" />
        </div>

        <div className="flex items-center gap-4 bg-white border border-zinc-200 rounded-2xl px-6 py-4 self-end shadow-sm">
          <input type="checkbox" name="isTraining" id="isTraining" defaultChecked={post.isTraining} className="w-5 h-5 accent-blue-600 cursor-pointer" />
          <label htmlFor="isTraining" className="text-[11px] font-black uppercase tracking-widest text-zinc-700 cursor-pointer">Mark as Training Module</label>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-zinc-900 text-white font-black py-6 rounded-2xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.4em] text-[11px] shadow-2xl disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {loading ? (
          <><span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span> Synchronizing Database...</>
        ) : (
          "Resubmit Research to Mainframe →"
        )}
      </button>
    </form>
  );
}