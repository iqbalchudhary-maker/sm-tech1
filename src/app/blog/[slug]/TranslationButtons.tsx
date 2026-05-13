"use client";
import React from 'react';

const TranslationButtons = () => {
  const btnClass = "notranslate py-1.5 px-4 bg-zinc-800 text-white rounded-md text-[8px] font-bold uppercase tracking-wider hover:bg-zinc-700 transition-colors";

  const triggerTranslation = (langCode: string) => {
    const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event('change'));
    }
  };

  return (
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
            className="notranslate py-1.5 px-4 bg-blue-600 text-white rounded-md text-[8px] font-bold uppercase tracking-wider"
          >
            English
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TranslationButtons;