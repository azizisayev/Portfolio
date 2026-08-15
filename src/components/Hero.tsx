import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { profile } from '../data/profile'

/**
 * Tam genişlik hero bölümü — marka odaklı ilk bakış.
 */
export function Hero() {
  return (
    <section
      id="ust"
      className="relative min-h-svh overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />
      <div className="pointer-events-none absolute -right-24 top-20 h-[420px] w-[420px] rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-[320px] w-[320px] rounded-full bg-coral/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl flex-col justify-center px-5 pb-16 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep"
        >
          {profile.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="font-display text-[clamp(3rem,12vw,7.5rem)] font-extrabold leading-[0.92] tracking-tight text-ink"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-6 max-w-xl text-lg text-muted md:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projeler"
            className="group inline-flex items-center gap-2 rounded-2xl bg-teal px-6 py-3.5 text-sm font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-teal-deep"
          >
            Projeleri gör
            <ArrowDownRight
              size={18}
              className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#iletisim"
            className="rounded-2xl border border-ink/10 bg-white/60 px-6 py-3.5 text-sm font-semibold text-ink shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-ink/20"
          >
            İletişime geç
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 h-px w-full origin-left bg-gradient-to-r from-teal via-coral/60 to-transparent"
        />
      </div>
    </section>
  )
}
