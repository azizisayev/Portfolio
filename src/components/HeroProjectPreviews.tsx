import { motion } from 'framer-motion'
import { memo } from 'react'
import { projects } from '../data/projects'

interface MiniPhoneProps {
  title: string
  src: string
  href: string
  accent: string
  index: number
}

/**
 * Hero için küçük iPhone önizleme çerçevesi.
 */
const MiniPhone = memo(function MiniPhone({
  title,
  src,
  href,
  accent,
  index,
}: MiniPhoneProps) {
  const tilt = index === 0 ? -8 : index === 1 ? 2 : 10
  const lift = index === 0 ? 8 : index === 1 ? 0 : 6

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 28, rotate: tilt - 4 }}
      animate={{ opacity: 1, y: lift, rotate: tilt }}
      transition={{ duration: 0.55, delay: 0.35 + index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: lift - 8, scale: 1.04, zIndex: 20 }}
      className="group relative block w-[92px] shrink-0 sm:w-[112px] md:w-[120px] lg:w-[138px]"
      style={{ zIndex: 10 - index }}
      aria-label={title}
    >
      <div
        className="pointer-events-none absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl transition group-hover:opacity-70"
        style={{ background: accent }}
      />
      <div
        className="relative rounded-[1.35rem] p-[1.5px] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.75)]"
        style={{
          background:
            'linear-gradient(145deg, #efece6 0%, #b0aba2 16%, #7d7870 38%, #d9d5ce 55%, #5f5b54 76%, #c4bfb6 100%)',
        }}
      >
        <div className="rounded-[1.25rem] bg-[#121214] p-[5px]">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.05rem] bg-black">
            <img
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-[10px] font-semibold tracking-wide text-ink-soft opacity-80 sm:text-[11px]">
        {title}
      </p>
    </motion.a>
  )
})

/**
 * Hero sağ taraf — 3 projenin ilk screenshot iPhone önizlemesi.
 * Sol metin bloğuyla aynı satırda hizalanır.
 */
export function HeroProjectPreviews() {
  const previews = projects
    .map((project) => ({
      id: project.id,
      title: project.title,
      accent: project.accent,
      src: project.screenshots[0],
      href: `#project-${project.id}`,
    }))
    .filter((item) => Boolean(item.src))

  return (
    <div className="relative z-20 flex w-full justify-center md:w-auto md:shrink-0 md:justify-end">
      <div className="flex items-end gap-2 sm:gap-3 md:-space-x-5 md:gap-0 lg:-space-x-7">
        {previews.map((preview, index) => (
          <MiniPhone
            key={preview.id}
            title={preview.title}
            src={preview.src!}
            href={preview.href}
            accent={preview.accent}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
