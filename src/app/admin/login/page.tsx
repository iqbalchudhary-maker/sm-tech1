"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [auth, setAuth] = useState({ user: "", pass: "" });
  const [showPass, setShowPass] = useState(false); // Show password control karne ke liye
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aapka bataya hua password aur username yahan active hai
    if (auth.user === "abbas" && auth.pass === "abbas1515") {
      document.cookie = "isLoggedIn=true; path=/"; 
      router.push("/admin/dashboard");
    } else {
      alert("Invalid Credentials, Sir.");
    }
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center font-sans">
      <form onSubmit={handleLogin} className="bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800 w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter text-center italic">
          SM TECH <span className="text-blue-600">ACCESS</span>
        </h1>
        <p className="text-zinc-500 text-sm mb-8 text-center uppercase tracking-widest">Admin Authentication</p>
        
        {/* --- Username Input --- */}
        <div className="mb-4">
          <input 
            type="text" placeholder="Username" required
            className="w-full p-4 bg-black border border-zinc-800 rounded-xl text-white focus:border-blue-500 outline-none transition"
            onChange={(e) => setAuth({...auth, user: e.target.value})}
          />
        </div>

        {/* --- Password Input with Show/Hide --- */}
        <div className="relative mb-8">
          <input 
            type={showPass ? "text" : "password"} // Dynamic type switching
            placeholder="Password" required
            className="w-full p-4 bg-black border border-zinc-800 rounded-xl text-white focus:border-blue-500 outline-none transition pr-14"
            onChange={(e) => setAuth({...auth, pass: e.target.value})}
          />
          {/* Show/Hide Button */}
          <button 
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-blue-500 transition text-[10px] font-bold uppercase tracking-widest"
          >
            {showPass ? "Hide" : "Show"}
          </button>
        </div>
        
        <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95">
          Enter Dashboard
        </button>

        <p className="mt-6 text-center text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
          Systems That Think <span className="mx-2">//</span> SM Technology
        </p>
      </form>
    </div>
  );
}