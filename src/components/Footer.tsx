import { profile } from '../data/profile'

/**
 * Sayfa alt bilgisi.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 text-sm text-muted md:flex-row md:items-center md:px-8">
        <p>
          © {year} {profile.name}. Tüm hakları saklıdır.
        </p>
        <p className="text-ink-soft/70">GitHub Pages ile yayınlandı.</p>
      </div>
    </footer>
  )
}
