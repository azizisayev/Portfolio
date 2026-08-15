import { motion } from 'framer-motion'
import { Mail, Code2, Link2 } from 'lucide-react'
import { profile } from '../data/profile'

/**
 * İletişim bölümü.
 */
export function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-24 pb-24 pt-10 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-foam shadow-lift md:px-14 md:py-20"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-teal/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-coral/30 blur-3xl" />

          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              İletişim
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Birlikte bir şeyler yapalım
            </h2>
            <p className="mt-4 text-base text-foam/70 md:text-lg">
              Yeni projeler, işbirlikleri veya sadece merhaba demek için yazabilirsin.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-teal px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-deep"
              >
                <Mail size={18} />
                E-posta gönder
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Code2 size={18} />
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
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
