'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'pt' | 'en' | 'fr' | 'it' | 'de' | 'ar';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('pt');

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && ['pt', 'en', 'fr', 'it', 'de', 'ar'].includes(saved)) {
      setLocaleState(saved);
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language.split('-')[0];
      if (['pt', 'en', 'fr', 'it', 'de', 'ar'].includes(browserLang)) {
        setLocaleState(browserLang as Locale);
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // Load messages dynamically
  const messages = require(`@/../messages/${locale}.json`);

  const t = (path: string): string => {
    return path.split('.').reduce((obj, key) => obj?.[key], messages) || path;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
