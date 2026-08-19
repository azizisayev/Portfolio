import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { buildEmailAddress, buildWhatsAppUrl, profile } from '../data/profile'
import { useLocale } from '../i18n/locale-context'
import { getUi } from '../i18n/ui'
import { HeroBackground } from './HeroBackground'
import { HeroProjectPreviews } from './HeroProjectPreviews'
import { LinkedInIcon } from './LinkedInIcon'

const iconBtnClass =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal text-teal transition hover:bg-teal hover:text-foam'

/**
 * Codehal tarzı hero — metin ve CTA odaklı.
 */
export function Hero() {
  const { locale } = useLocale()
  const ui = getUi(locale)

  function openMail() {
    window.location.href = `mailto:${buildEmailAddress(profile.emailParts)}`
  }

  return (
    <section id="ust" className="relative min-h-svh overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center gap-10 px-5 pb-16 pt-28 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8 md:pb-16">
        <div className="relative w-full max-w-2xl shrink-0 md:max-w-[48%]">
          <motion.p
            key={`greet-${locale}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-2 text-lg font-medium text-ink md:text-xl"
          >
            {ui.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-[clamp(2.6rem,8vw,3.75rem)] font-bold leading-[1.15] tracking-tight text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            key={`role-${locale}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-3 text-[clamp(1.4rem,4vw,2rem)] font-bold text-teal"
          >
            {ui.role}
          </motion.h2>

          <motion.p
            key={`tagline-${locale}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg"
          >
            {ui.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#projeler" className="btn-primary min-w-[150px]">
              {ui.ctaProjects}
            </a>
            <a href="#iletisim" className="btn-outline min-w-[150px]">
              {ui.ctaContact}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href={buildWhatsAppUrl(profile.phoneParts)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={iconBtnClass}
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconBtnClass}
            >
              <LinkedInIcon size={18} />
            </a>
            <button
              type="button"
              onClick={openMail}
              aria-label={ui.sendEmail}
              className={iconBtnClass}
            >
              <Mail size={18} />
            </button>
          </motion.div>
        </div>

        <HeroProjectPreviews />
      </div>
    </section>
  )
}
