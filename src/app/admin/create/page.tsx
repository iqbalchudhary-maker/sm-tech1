"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [form, setForm] = useState({ 
    title: "", 
    content: "", 
    category: "AI Agents", 
    isTraining: false,
    author: "Abbas Bhatti", 
    tags: "" 
  });
  
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); 
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Image preview handle karne ke liye function
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    let imageUrl = "";
    const file = fileInputRef.current?.files?.[0];
    
    if (file) {
      const res = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      });
      const newBlob = await res.json();
      imageUrl = newBlob.url;
    }

    const postRes = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ ...form, image: imageUrl }),
    });

    if (postRes.ok) {
        router.push("/admin/dashboard");
        router.refresh();
    }
    setUploading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen bg-white animate-in fade-in duration-700">
      
      {/* Header Section */}
      <div className="mb-10 flex justify-between items-end border-b pb-6 border-zinc-100">
        <div>
          <h2 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter italic leading-none">
            Forge <span className="text-blue-600">New Content</span>
          </h2>
          <p className="text-zinc-400 text-[10px] mt-3 uppercase tracking-[0.4em] font-bold">SM Technology Content Engine</p>
        </div>
      </div>
      
      <form onSubmit={handlePublish} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Article Headline</label>
            <input 
              type="text" required
              className="w-full p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-900 outline-none focus:border-blue-600 focus:bg-white transition-all text-lg font-bold shadow-sm"
              onChange={(e) => setForm({...form, title: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Body Content</label>
            <textarea 
              required
              className="w-full h-[550px] p-6 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-800 outline-none focus:border-blue-600 focus:bg-white transition-all leading-relaxed resize-none shadow-sm"
              onChange={(e) => setForm({...form, content: e.target.value})}
            />
          </div>
        </div>

        {/* Right Column: Settings */}
        <div className="space-y-6">
          
          <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-[2rem] space-y-6 shadow-sm">
            
            {/* Editable Author Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Author Name</label>
              <input 
                type="text"
                value={form.author}
                className="w-full p-4 bg-white border border-zinc-200 rounded-xl text-zinc-900 outline-none focus:border-blue-600 font-bold text-sm"
                onChange={(e) => setForm({...form, author: e.target.value})}
              />
            </div>

            {/* Category Dropdown */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Work Domain</label>
              <select 
                className="w-full p-4 bg-white border border-zinc-200 rounded-xl text-zinc-900 outline-none focus:border-blue-600 font-bold text-sm cursor-pointer"
                onChange={(e) => setForm({...form, category: e.target.value})}
              >
                <option>AI Agents</option>
                <option>Web Architecture</option>
                <option>Automation</option>
                <option>Educational</option>
              </select>
            </div>

            {/* Tags Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Tags (Comma Separated)</label>
              <input 
                type="text"
                className="w-full p-4 bg-white border border-zinc-200 rounded-xl text-zinc-900 outline-none focus:border-blue-600 text-sm"
                onChange={(e) => setForm({...form, tags: e.target.value})}
              />
            </div>

            {/* Academy Toggle */}
            <div className="flex items-center justify-between bg-white border border-zinc-200 rounded-xl p-4">
              <label htmlFor="edu" className="text-[10px] font-black text-zinc-400 uppercase tracking-widest cursor-pointer">Academy Lesson</label>
              <input 
                type="checkbox" id="edu" 
                className="w-5 h-5 accent-blue-600 cursor-pointer"
                onChange={(e) => setForm({...form, isTraining: e.target.checked})} 
              />
            </div>
          </div>

          {/* --- ULTRA-MODERN MEDIA UPLOAD WITH PREVIEW --- */}
          <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-[2rem] space-y-4">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Cover Image</label>
            
            <div className="relative group">
              <div className="border-2 border-dashed border-zinc-200 p-2 rounded-xl text-center hover:border-blue-600 transition bg-white min-h-[150px] flex flex-col items-center justify-center overflow-hidden shadow-inner">
                
                {previewUrl ? (
                  <div className="relative w-full h-full flex flex-col items-center gap-3 p-1">
                    <img 
                      src={previewUrl} 
                      alt="Upload Preview" 
                      className="w-full h-40 object-cover rounded-lg border border-zinc-100 shadow-lg animate-in zoom-in-50 duration-500"
                    />
                    
                    {fileInputRef.current?.files?.[0] && (
                      <p className="text-[10px] text-zinc-400 font-medium truncate w-full px-2 text-center">
                        {fileInputRef.current.files[0].name}
                      </p>
                    )}

                    <button 
                      type="button"
                      onClick={() => { 
                        if(fileInputRef.current) fileInputRef.current.value = ""; 
                        setPreviewUrl(null); 
                      }}
                      className="text-[10px] font-black text-red-500 uppercase hover:text-red-700 transition-colors tracking-widest mt-1"
                    >
                      REMOVE
                    </button>
                  </div>
                ) : (
                  <>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                      onChange={handleFileChange} 
                    />
                    <div className="flex flex-col items-center gap-2 py-4">
                      <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <span className="text-zinc-400 group-hover:text-blue-600 font-bold text-lg">+</span>
                      </div>
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest group-hover:text-blue-600">Select Image</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {uploading && (
              <div className="flex items-center gap-2 px-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <span className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter">Syncing with Cloud...</span>
              </div>
            )}
          </div>

          <button 
            type="submit"
            disabled={uploading}
            className="w-full py-6 bg-blue-600 text-white font-black rounded-[2rem] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 uppercase tracking-[0.2em] active:scale-95 disabled:opacity-50"
          >
            {uploading ? "Publishing..." : "Push Content"}
          </button>
        </div>
      </form>
    </div>
  );
}