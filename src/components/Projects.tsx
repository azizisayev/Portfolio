import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { getProjectCopy, projects, type Project } from '../data/projects'
import { useLocale } from '../i18n/locale-context'
import { getUi } from '../i18n/ui'

interface ProjectCardProps {
  project: Project
  index: number
}

interface PhoneCarouselProps {
  title: string
  screenshots: string[]
  accent: string
  screenshotLabel: string
  prevLabel: string
  nextLabel: string
}

/**
 * Özellik listesi bloğu.
 */
function FeatureBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-ink-soft">{title}</h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ShotThumbProps {
  src: string
  alt: string
  index: number
  isActive: boolean
  onSelect: (index: number) => void
}

/**
 * Küçük screenshot önizleme butonu (memo).
 */
const ShotThumb = memo(function ShotThumb({
  src,
  alt,
  index,
  isActive,
  onSelect,
}: ShotThumbProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-label={alt}
      aria-current={isActive ? 'true' : undefined}
      className={`relative h-14 w-9 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-10 ${
        isActive
          ? 'border-teal shadow-[0_0_0_2px_rgb(0_171_240_/_0.35)]'
          : 'border-teal/20 opacity-70 hover:border-teal/50 hover:opacity-100'
      }`}
    >
      <img src={src} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
    </button>
  )
})

/**
 * Gerçekçi iPhone (Natural Titanium) çerçevesi + üst thumb şeridi + alt navigasyon.
 */
function PhoneCarousel({
  title,
  screenshots,
  accent,
  screenshotLabel,
  prevLabel,
  nextLabel,
}: PhoneCarouselProps) {
  const [activeShot, setActiveShot] = useState(0)
  const thumbsRef = useRef<HTMLDivElement>(null)
  const total = screenshots.length

  useEffect(() => {
    setActiveShot(0)
  }, [screenshots])

  useEffect(() => {
    const rail = thumbsRef.current
    if (!rail) return
    const active = rail.querySelector<HTMLElement>('[aria-current="true"]')
    if (!active) return
    const left = active.offsetLeft - rail.clientWidth / 2 + active.offsetWidth / 2
    rail.scrollTo({ left, behavior: 'smooth' })
  }, [activeShot])

  useEffect(() => {
    const node = thumbsRef.current
    if (!(node instanceof HTMLElement)) return
    const el: HTMLElement = node

    function onWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      event.preventDefault()
      el.scrollLeft += event.deltaY
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const selectShot = useCallback((index: number) => {
    setActiveShot(index)
  }, [])

  function goPrev() {
    setActiveShot((prev) => (prev - 1 + total) % total)
  }

  function goNext() {
    setActiveShot((prev) => (prev + 1) % total)
  }

  return (
    <div className="relative mx-auto flex w-full max-w-[300px] flex-col items-center sm:max-w-[320px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[3.5rem] opacity-35 blur-3xl"
        style={{ background: accent }}
      />

      <div
        ref={thumbsRef}
        className="thumb-rail relative z-10 mb-4 flex w-full touch-pan-x gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 pb-2 pt-0.5"
        role="listbox"
        aria-label={`${title} ${screenshotLabel}`}
      >
        {screenshots.map((src, index) => (
          <ShotThumb
            key={src}
            src={src}
            alt={`${title} ${screenshotLabel} ${index + 1}`}
            index={index}
            isActive={index === activeShot}
            onSelect={selectShot}
          />
        ))}
      </div>

      <div className="relative z-10 w-full">
        {/* Action / volume / power — titanium */}
        <div className="absolute -left-[4px] top-[92px] z-20 h-[26px] w-[4px] rounded-l-[2px] bg-gradient-to-b from-[#d4d0c8] via-[#9a958c] to-[#6e6a63] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]" />
        <div className="absolute -left-[4px] top-[138px] z-20 h-[52px] w-[4px] rounded-l-[2px] bg-gradient-to-b from-[#d4d0c8] via-[#9a958c] to-[#6e6a63]" />
        <div className="absolute -left-[4px] top-[198px] z-20 h-[52px] w-[4px] rounded-l-[2px] bg-gradient-to-b from-[#d4d0c8] via-[#9a958c] to-[#6e6a63]" />
        <div className="absolute -right-[4px] top-[168px] z-20 h-[72px] w-[4px] rounded-r-[2px] bg-gradient-to-b from-[#d4d0c8] via-[#9a958c] to-[#6e6a63]" />

        {/* Outer titanium chassis */}
        <div
          className="relative rounded-[3rem] p-[2px]"
          style={{
            background:
              'linear-gradient(145deg, #efece6 0%, #b0aba2 16%, #7d7870 38%, #d9d5ce 55%, #5f5b54 76%, #c4bfb6 100%)',
            boxShadow:
              '0 30px 55px -18px rgba(0,0,0,0.8), 0 14px 28px -14px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.5)',
          }}
        >
          {/* Inner black frame */}
          <div
            className="rounded-[2.9rem] p-[10px]"
            style={{
              background:
                'linear-gradient(165deg, #303033 0%, #141416 35%, #050505 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
            }}
          >
            {/* Display glass */}
            <div className="relative overflow-hidden rounded-[2.35rem] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
              <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={screenshots[activeShot]}
                    src={screenshots[activeShot]}
                    alt={`${title} ${screenshotLabel} ${activeShot + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </AnimatePresence>

                {/* Glass glare layers */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-black/10" />
                <div className="pointer-events-none absolute -left-1/3 top-[-5%] h-[55%] w-[80%] rotate-[18deg] bg-gradient-to-r from-white/[0.09] to-transparent blur-md" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Bottom speaker + USB-C */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[6px] z-10 flex items-center justify-center gap-3.5">
            <span className="flex gap-[3px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-[3px] w-[3px] rounded-full bg-black/55" />
              ))}
            </span>
            <span className="h-[6px] w-[11px] rounded-[2px] border border-black/45 bg-[#151515]" />
            <span className="flex gap-[3px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-[3px] w-[3px] rounded-full bg-black/55" />
              ))}
            </span>
          </div>
        </div>

        {/* Ground contact shadow */}
        <div className="mx-auto -mt-1 h-5 w-[70%] rounded-[100%] bg-black/55 blur-md" />
      </div>

      <div className="relative z-10 mt-4 flex w-full max-w-[260px] items-center justify-between gap-2 rounded-2xl border border-teal/25 bg-mist/80 px-2.5 py-2 shadow-soft backdrop-blur">
        <button
          type="button"
          onClick={goPrev}
          aria-label={prevLabel}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal/35 text-teal transition hover:bg-teal hover:text-foam"
        >
          <ChevronLeft size={18} />
        </button>
        <p className="min-w-[4.5rem] text-center text-xs font-semibold tracking-wide text-ink-soft">
          {activeShot + 1} <span className="text-muted">/</span> {total}
        </p>
        <button
          type="button"
          onClick={goNext}
          aria-label={nextLabel}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal/35 text-teal transition hover:bg-teal hover:text-foam"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

/**
 * Tek proje — iPhone mockup + çok dilli açıklama.
 */
function ProjectCard({ project, index }: ProjectCardProps) {
  const { locale } = useLocale()
  const ui = getUi(locale)
  const copy = getProjectCopy(project, locale)
  const isReversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-14 ${
        isReversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <PhoneCarousel
        title={project.title}
        screenshots={project.screenshots}
        accent={project.accent}
        screenshotLabel={ui.screenshotOf}
        prevLabel={ui.prev}
        nextLabel={ui.next}
      />

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">
          {project.featured ? ui.featured : ui.project}
        </p>
        <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 text-lg font-medium text-teal">{copy.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-muted">{copy.blurb}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {copy.cardBullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-lg border border-teal/25 bg-sand px-3 py-1.5 text-xs font-semibold text-ink-soft"
            >
              {bullet}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-lg border border-teal/40 px-3 py-1.5 text-xs font-semibold text-teal"
            >
              {tag}
            </li>
          ))}
        </ul>

        {copy.guestFeatures ? (
          <FeatureBlock title={ui.guestFeatures} items={copy.guestFeatures} />
        ) : null}
        {copy.staffFeatures ? (
          <FeatureBlock title={ui.staffFeatures} items={copy.staffFeatures} />
        ) : null}
        {copy.features ? <FeatureBlock title={ui.features} items={copy.features} /> : null}
        {copy.highlights ? <FeatureBlock title={ui.highlights} items={copy.highlights} /> : null}
      </div>
    </motion.article>
  )
}

/**
 * Projeler bölümü.
 */
export function Projects() {
  const { locale } = useLocale()
  const ui = getUi(locale)

  return (
    <section id="projeler" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            {ui.projectsEyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {ui.projectsTitle}
          </h2>
          <p className="mt-4 text-muted">{ui.projectsLead}</p>
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
