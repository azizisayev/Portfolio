import { motion } from 'framer-motion'
import { Code2, Link2 } from 'lucide-react'
import { profile } from '../data/profile'
import { useLocale } from '../i18n/locale-context'
import { getUi } from '../i18n/ui'
import { ProtectedEmailButton } from './ProtectedEmailButton'
import { ContactChannels } from './ContactChannels'

/**
 * İletişim bölümü.
 */
export function Contact() {
  const { locale } = useLocale()
  const ui = getUi(locale)

  return (
    <section id="iletisim" className="scroll-mt-24 pb-24 pt-10 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-teal/30 bg-mist px-8 py-14 shadow-lift md:px-14 md:py-20"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-teal/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-teal/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              {ui.contactEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {ui.contactTitle}
            </h2>
            <p className="mt-4 text-base text-muted md:text-lg">{ui.contactLead}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ProtectedEmailButton emailParts={profile.emailParts} />
              <ContactChannels phoneParts={profile.phoneParts} />
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-teal/50 bg-transparent px-5 py-3 text-sm font-semibold text-teal transition hover:bg-teal hover:text-foam"
              >
                <Code2 size={18} />
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-teal/50 bg-transparent px-5 py-3 text-sm font-semibold text-teal transition hover:bg-teal hover:text-foam"
              >
                <Link2 size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
