import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { localeMeta, locales, useLocale, type Locale } from '../i18n/locale-context'
import { getUi } from '../i18n/ui'

/**
 * Bayrak + 3 harfli kod ile dil dropdown'u.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const ui = getUi(locale)
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const current = localeMeta[locale]

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  function selectLocale(next: Locale) {
    setLocale(next)
    setIsOpen(false)
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ui.language}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-lg border border-teal/40 bg-mist/60 px-2.5 py-1.5 text-xs font-bold text-ink transition hover:border-teal hover:text-teal"
      >
        <span className="text-sm leading-none" aria-hidden>
          {current.flag}
        </span>
        <span>{current.code}</span>
        <ChevronDown
          size={14}
          className={`transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen ? (
        <ul
          role="listbox"
          aria-label={ui.language}
          className="absolute right-0 z-50 mt-2 min-w-[148px] overflow-hidden rounded-xl border border-teal/30 bg-foam/95 py-1 shadow-lift backdrop-blur-xl"
        >
          {locales.map((code) => {
            const item = localeMeta[code]
            const isActive = code === locale
            return (
              <li key={code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => selectLocale(code)}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold transition ${
                    isActive
                      ? 'bg-teal/20 text-teal'
                      : 'text-ink hover:bg-mist hover:text-teal'
                  }`}
                >
                  <span className="text-sm leading-none" aria-hidden>
                    {item.flag}
                  </span>
                  <span>{item.code}</span>
                  <span className="ml-auto text-[10px] font-medium text-muted">
                    {item.name}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
