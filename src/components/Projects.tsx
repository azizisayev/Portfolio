import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

/**
 * Tek proje satırı — görsel + bilgi, etkileşimli screenshot geçişi.
 */
function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeShot, setActiveShot] = useState(0)
  const isReversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        isReversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="relative">
        <div
          className="absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl"
          style={{ background: project.accent }}
        />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/5 bg-white shadow-soft">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.screenshots[activeShot]}
              src={project.screenshots[activeShot]}
              alt={`${project.title} ekran görüntüsü ${activeShot + 1}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="aspect-[4/3] w-full object-cover object-top"
              loading="lazy"
            />
          </AnimatePresence>

          {project.screenshots.length > 1 ? (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-ink/70 px-3 py-2 backdrop-blur">
              {project.screenshots.map((shot, shotIndex) => (
                <button
                  key={shot}
                  type="button"
                  aria-label={`Screenshot ${shotIndex + 1}`}
                  onClick={() => setActiveShot(shotIndex)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    activeShot === shotIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">
          {project.featured ? 'Öne çıkan' : 'Proje'}
        </p>
        <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 text-lg font-medium text-teal-deep">{project.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-lg bg-sand/80 px-3 py-1.5 text-xs font-semibold text-ink-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-foam transition hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              Canlı demo
              <ExternalLink size={16} />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white/70 px-4 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5"
            >
              Kaynak kod
              <Code2 size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

/**
 * Projeler bölümü.
 */
export function Projects() {
  return (
    <section id="projeler" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-deep">
            Portfolyo
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Yaptığım uygulamalar
          </h2>
          <p className="mt-4 text-muted">
            Her proje için kısa açıklama, teknoloji yığını ve ekran görüntüleri.
            Kendi uygulamalarını `src/data/projects.ts` üzerinden kolayca ekleyebilirsin.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
