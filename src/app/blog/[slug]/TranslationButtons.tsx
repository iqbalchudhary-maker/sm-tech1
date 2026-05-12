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
        setTimeout(cleanupGoogleUI, 500);
      }
    }
  };

  // Button class mein 'notranslate' add kar di gayi hai
  const btnClass = "notranslate py-4 bg-zinc-50 border border-zinc-200 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300 flex items-center justify-center text-center";

  return (
    <div className="max-w-4xl mx-auto px-6 mt-12 mb-6">
      <div className="flex flex-col items-center">
        {/* H2 tag mein 'notranslate' add kiya gaya hai taake "Phansi ki zuban" na likha aaye */}
        <h2 className="notranslate text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6 font-sans">
          Execution Language
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
          <button onClick={() => triggerTranslation('ur')} className={btnClass}>Urdu Mode</button>
          <button onClick={() => triggerTranslation('hi')} className={btnClass}>Hindi Mode</button>
          <button onClick={() => triggerTranslation('ar')} className={btnClass}>Arabic Mode</button>
          <button onClick={() => triggerTranslation('fa')} className={btnClass}>Persian Mode</button>
          <button 
            onClick={() => triggerTranslation('en')} 
            className="notranslate py-4 bg-blue-600 text-white border border-blue-700 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 flex items-center justify-center text-center"
          >
            Default (EN)
          </button>
        </div>
      </div>
    </div>
  );
}