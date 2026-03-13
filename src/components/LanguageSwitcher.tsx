'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'pt', flag: '🇵🇹', name: 'Português' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'ar', flag: '🇸🇦', name: 'العربية' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  const switchLanguage = (code: string) => {
    setLocale(code as any);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="fixed top-6 right-6 z-50 md:top-8 md:right-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/20 px-3 py-2 md:px-4 md:py-2.5 hover:border-white/40 transition-all mono-small rounded-sm"
      >
        <span className="text-lg md:text-xl">{currentLang.flag}</span>
        <span className="text-[#F5F5F0] text-xs md:text-sm font-medium">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 md:w-4 md:h-4 text-[#F5F5F0] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#0A0A0A]/95 backdrop-blur-md border border-white/20 min-w-[180px] md:min-w-[200px] rounded-sm shadow-2xl">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 md:px-4 md:py-3 hover:bg-white/10 transition-colors mono-small text-left first:rounded-t-sm last:rounded-b-sm ${
                lang.code === locale ? 'bg-white/15 text-white' : 'text-[#F5F5F0]/70'
              }`}
            >
              <span className="text-lg md:text-xl">{lang.flag}</span>
              <span className="text-xs md:text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
