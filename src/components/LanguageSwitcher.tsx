'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'pt', flag: '🇵🇹', name: 'Português' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'ar', flag: '🇸🇦', name: 'العربية' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] || 'pt';
  const currentLang = languages.find(l => l.code === currentLocale) || languages[0];

  const switchLanguage = (locale: string) => {
    const newPath = `/${locale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-8 right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 px-4 py-2 hover:border-white/30 transition-colors mono-small"
      >
        <span className="text-xl">{currentLang.flag}</span>
        <span className="text-[#F5F5F0]">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 text-[#F5F5F0] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#0A0A0A] border border-white/10 min-w-[200px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors mono-small text-left ${
                lang.code === currentLocale ? 'bg-white/10 text-white' : 'text-[#F5F5F0]/70'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
