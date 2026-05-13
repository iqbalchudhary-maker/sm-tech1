"use client";
import { useEffect } from "react";

export default function TranslationButtons() {
  const cleanupGoogleUI = () => {
    if (typeof window !== "undefined") {
      const banner = document.querySelector(".goog-te-banner-frame") as HTMLElement;
      if (banner) {
        banner.style.display = "none";
        banner.style.visibility = "hidden";
      }
      document.body.style.top = "0px";
      document.body.style.position = "static";
    }
  };

  useEffect(() => {
    cleanupGoogleUI();
    const interval = setInterval(cleanupGoogleUI, 500);
    return () => clearInterval(interval);
  }, []);

  const triggerTranslation = (langCode: string) => {
    if (typeof window !== "undefined") {
      const select = document.querySelector("select.goog-te-combo") as HTMLSelectElement;
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
        setTimeout(cleanupGoogleUI, 100);
      }
    }
  };

  // Buttons style for black background
  const btnClass = "notranslate py-1.5 px-3 bg-zinc-900 border border-zinc-800 rounded-md text-[8px] font-bold uppercase tracking-wider text-zinc-400 hover:bg-white hover:text-black transition-all duration-300";

  return (
    /* FIXED NAVBAR (BLACK THEME): 
       1. 'bg-black' background ko bilkul dark kar dega.
       2. 'border-zinc-800' ek halki separation line dega.
    */
    <nav className="notranslate fixed top-0 left-0 w-full z-[9999] bg-black border-b border-zinc-800 py-3">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500">
          Execution Language
        </span>

        <div className="flex flex-wrap justify-center gap-2">
          <button onClick={() => triggerTranslation('ur')} className={btnClass}>Urdu</button>
          <button onClick={() => triggerTranslation('hi')} className={btnClass}>Hindi</button>
          <button onClick={() => triggerTranslation('ar')} className={btnClass}>Arabic</button>
          <button onClick={() => triggerTranslation('fa')} className={btnClass}>Persian</button>
          <button 
            onClick={() => triggerTranslation('en')} 
            className="notranslate py-1.5 px-4 bg-blue-600 text-white rounded-md text-[8px] font-bold uppercase tracking-wider hover:bg-blue-700 shadow-lg shadow-blue-900/20"
          >
            English
          </button>
        </div>
      </div>
    </nav>
  );
}