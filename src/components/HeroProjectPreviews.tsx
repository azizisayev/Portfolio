import { motion } from 'framer-motion'
import { memo, type CSSProperties } from 'react'
import { projects } from '../data/projects'

interface MiniPhoneProps {
  title: string
  src: string
  logo: string
  href: string
  accent: string
  index: number
}

/**
 * Hero için küçük iPhone önizleme çerçevesi.
 * Glow için filter:blur kullanılmaz; box-shadow ile yumuşak halo verilir.
 */
const MiniPhone = memo(function MiniPhone({
  title,
  src,
  logo,
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
      transition={{ duration: 0.45, delay: 0.35 + index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: lift - 10, zIndex: 30 }}
      className="group relative block w-[108px] shrink-0 sm:w-[128px] md:w-[148px] lg:w-[168px]"
      style={{ zIndex: 10 - index }}
      aria-label={title}
    >
      <div
        className="mini-phone-frame relative rounded-[1.35rem] p-[1.5px] transition-[transform,box-shadow] duration-300 ease-out will-change-transform group-hover:scale-[1.03]"
        style={
          {
            '--phone-accent': accent,
            background:
              'linear-gradient(145deg, #efece6 0%, #b0aba2 16%, #7d7870 38%, #d9d5ce 55%, #5f5b54 76%, #c4bfb6 100%)',
          } as CSSProperties
        }
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
            <img
              src={logo}
              alt=""
              width={32}
              height={32}
              className="absolute left-1/2 top-2 z-10 h-7 w-7 -translate-x-1/2 rounded-[0.55rem] object-cover shadow-[0_6px_14px_-6px_rgb(0_0_0_/_0.8)] ring-1 ring-white/25 sm:top-2.5 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
            />
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
      logo: project.logo,
      href: `#project-${project.id}`,
    }))
    .filter((item) => Boolean(item.src))

  return (
    <div className="relative z-20 flex w-full justify-center overflow-visible md:w-auto md:shrink-0 md:justify-end">
      <div className="flex items-end gap-2 overflow-visible sm:gap-3 md:-space-x-6 md:gap-0 lg:-space-x-8">
        {previews.map((preview, index) => (
          <MiniPhone
            key={preview.id}
            title={preview.title}
            src={preview.src!}
            logo={preview.logo}
            href={preview.href}
            accent={preview.accent}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
