import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export const locales = ['en', 'tr', 'ru', 'az'] as const
export type Locale = (typeof locales)[number]

export const localeMeta: Record<
  Locale,
  { code: string; flag: string; name: string }
> = {
  en: { code: 'ENG', flag: '🇬🇧', name: 'English' },
  tr: { code: 'TUR', flag: '🇹🇷', name: 'Türkçe' },
  ru: { code: 'RUS', flag: '🇷🇺', name: 'Русский' },
  az: { code: 'AZE', flag: '🇦🇿', name: 'Azərbaycan' },
}

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)
const STORAGE_KEY = 'portfolio-locale'

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'tr' || value === 'ru' || value === 'az'
}

/**
 * Dil tercihini localStorage ve document lang ile senkron tutar.
 * Varsayılan dil: İngilizce.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

/**
 * Aktif dil ve dil değiştirici.
 */
export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
