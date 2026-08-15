import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'

const links = [
  { href: '#projeler', label: 'Projeler' },
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#iletisim', label: 'İletişim' },
] as const

/**
 * Sticky navigasyon çubuğu.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-ink/5 bg-foam/80 shadow-soft backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#ust"
          className="font-display text-lg font-extrabold tracking-tight text-ink transition hover:text-teal-deep"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-foam shadow-soft transition hover:-translate-y-0.5 hover:bg-ink-soft"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          className="rounded-xl border border-ink/10 p-2 text-ink md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-ink/5 bg-foam/95 px-5 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-2 text-base font-medium text-ink"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
