import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const skills = [
  'TypeScript',
  'React',
  'React Native',
  'Expo',
  'Tailwind CSS',
  'Node.js',
  'Zod',
  'UI/UX',
] as const

/**
 * Hakkımda bölümü.
 */
export function About() {
  return (
    <section id="hakkimda" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-deep">
            Hakkımda
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Ürün odaklı geliştirme
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{profile.bio}</p>
          <p className="mt-4 text-sm font-medium text-ink-soft">{profile.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-[1.75rem] border border-ink/5 bg-white/70 p-8 shadow-soft backdrop-blur"
        >
          <h3 className="font-display text-xl font-bold text-ink">Yetenekler</h3>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-xl bg-mist px-3.5 py-2 text-sm font-semibold text-ink-soft"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
