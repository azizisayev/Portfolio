import { profile } from '../data/profile'
import { useLocale } from '../i18n/locale-context'
import { getUi } from '../i18n/ui'

/**
 * Sayfa alt bilgisi.
 */
export function Footer() {
  const { locale } = useLocale()
  const ui = getUi(locale)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-teal/20 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 text-sm text-muted md:flex-row md:items-center md:px-8">
        <p>
          © {year} {profile.name}. {ui.footerRights}
        </p>
        <p className="text-ink-soft/80">{ui.footerPages}</p>
      </div>
    </footer>
  )
}
