"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Image from '@tiptap/extension-image';

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
  const [proofPics, setProofPics] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorImageRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const editor = useEditor({
    immediatelyRender: false, 
    extensions: [
      StarterKit,
      TextStyle,
      Color, 
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-2xl border-2 border-blue-100 shadow-lg max-w-full my-6',
        },
      }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setForm(prev => ({ ...prev, content: editor.getHTML() }));
    },
    editorProps: {
      attributes: {
        class: 'prose prose-blue focus:outline-none min-h-[450px] p-6 max-w-none bg-white rounded-b-3xl',
      },
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleEditorImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`/api/blog/upload?filename=${file.name}`, {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        
        if (data.url) {
          editor?.chain().focus().setImage({ src: data.url }).run();
          setProofPics(prev => [...prev, data.url]);
        }
      } catch (error) {
        console.error("Editor upload failed", error);
      } finally {
        setUploading(false);
        if (editorImageRef.current) editorImageRef.current.value = "";
      }
    }
  };

  const removeProofPic = (urlToRemove: string) => {
    setProofPics(prev => prev.filter(url => url !== urlToRemove));
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    let mainImageUrl = "";
    const file = fileInputRef.current?.files?.[0];
    
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`/api/blog/upload?filename=${file.name}`, {
          method: 'POST',
          body: formData,
        });
        const newBlob = await res.json();
        mainImageUrl = newBlob.url;
      } catch (error) {
        console.error("Main image upload failed", error);
      }
    }

    const postRes = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        ...form, 
        image: mainImageUrl,
        proofImages: proofPics 
      }),
    });

    if (postRes.ok) {
      router.push("/admin/dashboard");
      router.refresh();
    }
    setUploading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-white">
      <input 
        type="file" 
        ref={editorImageRef} 
        className="hidden" 
        accept="image/*"
        onChange={handleEditorImageUpload}
      />

      <div className="mb-10 border-b pb-6">
        <h2 className="text-4xl font-black text-zinc-900 uppercase italic">
          Forge <span className="text-blue-600">SM Content</span>
        </h2>
        <p className="text-zinc-400 text-[10px] mt-3 uppercase tracking-[0.4em] font-bold italic">SM Tech AI Solutions | Global Strategy</p>
      </div>
      
      <form onSubmit={handlePublish} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Main Article Title</label>
            <input 
              type="text" required 
              placeholder="e.g. How AI Agents are Revolutionizing E-commerce"
              className="w-full p-6 bg-zinc-50 border border-zinc-200 rounded-3xl text-2xl font-bold outline-none focus:border-blue-600 text-zinc-900 shadow-sm"
              onChange={(e) => setForm({...form, title: e.target.value})}
            />
          </div>

          {/* Editor */}
          <div className="border border-zinc-200 rounded-3xl overflow-hidden shadow-sm bg-white">
            <div className="bg-zinc-100/80 p-3 border-b border-zinc-200 flex gap-2 flex-wrap items-center">
              <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} className="p-2 px-4 bg-white border rounded-xl font-bold hover:text-blue-600">B</button>
              <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className="p-2 px-4 bg-white border rounded-xl font-bold hover:text-blue-600">H2</button>
              
              {/* FIXED COLOR PICKER SECTION */}
              <div className="flex items-center bg-white border rounded-xl px-2 gap-2 h-10.5">
                <input 
                  type="color"
                  onInput={(e) => {
                    const color = (e.target as HTMLInputElement).value;
                    editor?.chain().focus().setColor(color).run();
                  }}
                  value={editor?.getAttributes('textStyle').color || '#000000'}
                  className="w-8 h-8 border-none bg-transparent cursor-pointer"
                  title="Text Color"
                />
                <span className="text-[10px] font-bold text-zinc-400 uppercase pr-1">Color</span>
              </div>

              <button type="button" onClick={() => editorImageRef.current?.click()} className="p-2 px-4 bg-white border rounded-xl hover:bg-blue-50 italic text-zinc-700">
                {uploading ? "⌛ Uploading..." : "🖼️ Add Proof Pic"}
              </button>
            </div>
            <div className="text-zinc-900">
               <EditorContent editor={editor} />
            </div>
          </div>

          {/* Proof Pics Display */}
          {proofPics.length > 0 && (
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Attached Proof Pics ({proofPics.length})</label>
              <div className="grid grid-cols-4 gap-4">
                {proofPics.map((pic, idx) => (
                  <div key={idx} className="relative group rounded-xl overflow-hidden border-2 border-zinc-100">
                    <img src={pic} className="w-full h-24 object-cover" />
                    <button 
                      type="button"
                      onClick={() => removeProofPic(pic)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Cover Image Upload */}
          <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-[2.5rem] space-y-4 shadow-sm">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Main Cover Image</label>
              {previewUrl && (
                <button type="button" onClick={() => {setPreviewUrl(null); if (fileInputRef.current) fileInputRef.current.value = "";}} className="text-[10px] font-bold text-red-500 uppercase hover:underline">Remove ×</button>
              )}
            </div>

            <div className="relative border-2 border-dashed border-zinc-200 rounded-2xl p-4 bg-white text-center hover:border-blue-600 group h-40 flex items-center justify-center cursor-pointer">
              {previewUrl ? (
                <div className="w-full h-full relative">
                  <img src={previewUrl} className="w-full h-full object-cover rounded-xl" alt="Preview" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase">Change Image</span>
                  </div>
                </div>
              ) : (
                <div className="py-4 text-zinc-400 italic text-[10px] font-bold">Click to Upload Cover</div>
              )}
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
          </div>

          {/* Author & SEO Info Box */}
          <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-[2.5rem] space-y-6 shadow-sm">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Author Name</label>
              <input 
                type="text" 
                value={form.author}
                className="w-full p-4 bg-white border border-zinc-200 rounded-2xl font-bold text-zinc-900 outline-none focus:border-blue-600 shadow-sm"
                onChange={(e) => setForm({...form, author: e.target.value})}
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic ml-1">SEO Keywords</label>
              <input 
                type="text"
                placeholder="ai, automation, smtech"
                className="w-full p-5 bg-white border border-zinc-200 rounded-2xl text-sm font-semibold text-zinc-800 outline-none focus:border-blue-600 shadow-sm"
                onChange={(e) => setForm({...form, tags: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Category</label>
              <select 
                className="w-full p-4 bg-white border border-zinc-200 rounded-2xl font-bold text-sm outline-none focus:border-blue-600"
                onChange={(e) => setForm({...form, category: e.target.value})}
              >
                <option>AI Agents</option>
                <option>Web Architecture</option>
                <option>Automation</option>
              </select>
            </div>

            <button 
              type="submit" disabled={uploading}
              className="w-full py-6 bg-blue-600 text-white font-black rounded-3xl uppercase tracking-widest shadow-xl hover:bg-blue-700 active:scale-95 transition-all"
            >
              {uploading ? "Processing..." : "Push Content"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}