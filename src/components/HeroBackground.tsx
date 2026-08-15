import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

interface FloatingDot {
  readonly left: string
  readonly top: string
  readonly size: number
  readonly delay: number
  readonly duration: number
}

const rightDots: FloatingDot[] = [
  { left: '52%', top: '16%', size: 5, delay: 0, duration: 4.2 },
  { left: '62%', top: '22%', size: 4, delay: 0.4, duration: 3.8 },
  { left: '74%', top: '14%', size: 6, delay: 0.8, duration: 5.1 },
  { left: '84%', top: '28%', size: 4, delay: 1.1, duration: 4.5 },
  { left: '58%', top: '36%', size: 5, delay: 0.2, duration: 3.6 },
  { left: '70%', top: '42%', size: 3, delay: 1.4, duration: 4.8 },
  { left: '82%', top: '48%', size: 5, delay: 0.6, duration: 3.9 },
  { left: '90%', top: '38%', size: 4, delay: 1.8, duration: 5.4 },
  { left: '54%', top: '54%', size: 4, delay: 0.9, duration: 4.1 },
  { left: '66%', top: '58%', size: 6, delay: 1.3, duration: 4.7 },
  { left: '78%', top: '64%', size: 3, delay: 0.3, duration: 3.5 },
  { left: '88%', top: '70%', size: 5, delay: 1.6, duration: 5.0 },
  { left: '60%', top: '72%', size: 4, delay: 0.7, duration: 4.3 },
  { left: '72%', top: '78%', size: 5, delay: 1.0, duration: 3.7 },
  { left: '80%', top: '20%', size: 3, delay: 2.0, duration: 4.6 },
  { left: '48%', top: '44%', size: 4, delay: 1.2, duration: 5.2 },
  { left: '92%', top: '56%', size: 3, delay: 0.5, duration: 3.4 },
  { left: '56%', top: '88%', size: 4, delay: 1.5, duration: 4.9 },
]

const leftDots: FloatingDot[] = [
  { left: '6%', top: '18%', size: 4, delay: 0.3, duration: 4.0 },
  { left: '14%', top: '28%', size: 5, delay: 0.9, duration: 4.6 },
  { left: '22%', top: '16%', size: 3, delay: 1.5, duration: 3.7 },
  { left: '8%', top: '42%', size: 5, delay: 0.5, duration: 5.0 },
  { left: '18%', top: '50%', size: 4, delay: 1.2, duration: 4.2 },
  { left: '28%', top: '38%', size: 3, delay: 0.7, duration: 3.9 },
  { left: '10%', top: '62%', size: 6, delay: 1.7, duration: 4.8 },
  { left: '20%', top: '70%', size: 4, delay: 0.4, duration: 3.6 },
  { left: '30%', top: '58%', size: 5, delay: 1.0, duration: 5.1 },
  { left: '4%', top: '78%', size: 3, delay: 1.4, duration: 4.4 },
  { left: '16%', top: '84%', size: 5, delay: 0.8, duration: 3.8 },
  { left: '26%', top: '76%', size: 4, delay: 1.9, duration: 4.7 },
  { left: '12%', top: '34%', size: 3, delay: 0.2, duration: 5.3 },
  { left: '24%', top: '24%', size: 4, delay: 1.6, duration: 4.1 },
  { left: '3%', top: '24%', size: 4, delay: 0.6, duration: 4.3 },
  { left: '11%', top: '12%', size: 5, delay: 1.1, duration: 3.8 },
  { left: '19%', top: '8%', size: 3, delay: 1.8, duration: 5.0 },
  { left: '7%', top: '52%', size: 4, delay: 0.4, duration: 4.5 },
  { left: '15%', top: '58%', size: 3, delay: 1.3, duration: 3.5 },
  { left: '25%', top: '46%', size: 5, delay: 0.9, duration: 4.9 },
  { left: '5%', top: '68%', size: 4, delay: 1.5, duration: 4.1 },
  { left: '13%', top: '74%', size: 6, delay: 0.2, duration: 5.2 },
  { left: '23%', top: '66%', size: 3, delay: 1.0, duration: 3.7 },
  { left: '9%', top: '88%', size: 4, delay: 1.7, duration: 4.6 },
  { left: '21%', top: '92%', size: 5, delay: 0.8, duration: 4.0 },
  { left: '32%', top: '20%', size: 3, delay: 1.4, duration: 4.8 },
  { left: '34%', top: '48%', size: 4, delay: 0.5, duration: 3.9 },
  { left: '31%', top: '82%', size: 3, delay: 1.2, duration: 5.1 },
  { left: '2%', top: '14%', size: 3, delay: 0.1, duration: 4.2 },
  { left: '8%', top: '6%', size: 4, delay: 0.7, duration: 3.6 },
  { left: '16%', top: '20%', size: 5, delay: 1.3, duration: 4.9 },
  { left: '27%', top: '10%', size: 3, delay: 1.9, duration: 5.2 },
  { left: '1%', top: '36%', size: 4, delay: 0.4, duration: 3.8 },
  { left: '9%', top: '44%', size: 3, delay: 1.0, duration: 4.4 },
  { left: '17%', top: '40%', size: 5, delay: 1.6, duration: 5.0 },
  { left: '29%', top: '30%', size: 4, delay: 0.3, duration: 3.5 },
  { left: '35%', top: '36%', size: 3, delay: 0.9, duration: 4.7 },
  { left: '4%', top: '56%', size: 5, delay: 1.5, duration: 4.1 },
  { left: '12%', top: '64%', size: 3, delay: 0.2, duration: 5.3 },
  { left: '22%', top: '54%', size: 4, delay: 0.8, duration: 3.9 },
  { left: '33%', top: '62%', size: 5, delay: 1.4, duration: 4.6 },
  { left: '2%', top: '72%', size: 3, delay: 0.6, duration: 4.0 },
  { left: '11%', top: '80%', size: 4, delay: 1.1, duration: 5.1 },
  { left: '19%', top: '86%', size: 3, delay: 1.8, duration: 3.7 },
  { left: '28%', top: '90%', size: 5, delay: 0.5, duration: 4.5 },
  { left: '36%', top: '74%', size: 4, delay: 1.2, duration: 4.8 },
  { left: '6%', top: '94%', size: 3, delay: 0.9, duration: 3.6 },
  { left: '14%', top: '48%', size: 4, delay: 1.7, duration: 4.3 },
  { left: '25%', top: '14%', size: 3, delay: 0.3, duration: 5.0 },
  { left: '38%', top: '26%', size: 4, delay: 1.0, duration: 4.2 },
  { left: '37%', top: '56%', size: 3, delay: 1.6, duration: 3.8 },
  // denser left fill
  { left: '0%', top: '22%', size: 3, delay: 0.2, duration: 4.1 },
  { left: '5%', top: '32%', size: 4, delay: 0.8, duration: 3.7 },
  { left: '13%', top: '4%', size: 3, delay: 1.4, duration: 5.0 },
  { left: '21%', top: '30%', size: 5, delay: 0.5, duration: 4.4 },
  { left: '30%', top: '4%', size: 4, delay: 1.1, duration: 3.9 },
  { left: '39%', top: '14%', size: 3, delay: 1.7, duration: 4.8 },
  { left: '0%', top: '48%', size: 4, delay: 0.3, duration: 4.2 },
  { left: '7%', top: '38%', size: 3, delay: 0.9, duration: 5.1 },
  { left: '15%', top: '28%', size: 5, delay: 1.5, duration: 3.6 },
  { left: '24%', top: '42%', size: 4, delay: 0.1, duration: 4.5 },
  { left: '33%', top: '40%', size: 3, delay: 0.7, duration: 4.0 },
  { left: '40%', top: '44%', size: 4, delay: 1.3, duration: 5.2 },
  { left: '1%', top: '60%', size: 3, delay: 1.9, duration: 3.8 },
  { left: '10%', top: '54%', size: 5, delay: 0.4, duration: 4.6 },
  { left: '18%', top: '62%', size: 4, delay: 1.0, duration: 4.1 },
  { left: '27%', top: '52%', size: 3, delay: 1.6, duration: 5.0 },
  { left: '35%', top: '68%', size: 4, delay: 0.6, duration: 3.5 },
  { left: '41%', top: '60%', size: 3, delay: 1.2, duration: 4.7 },
  { left: '3%', top: '86%', size: 4, delay: 0.8, duration: 4.3 },
  { left: '12%', top: '92%', size: 3, delay: 1.4, duration: 3.9 },
  { left: '20%', top: '80%', size: 5, delay: 0.2, duration: 5.1 },
  { left: '29%', top: '96%', size: 4, delay: 0.9, duration: 4.4 },
  { left: '38%', top: '88%', size: 3, delay: 1.5, duration: 3.7 },
  { left: '42%', top: '34%', size: 4, delay: 0.5, duration: 4.9 },
  { left: '43%', top: '72%', size: 3, delay: 1.1, duration: 4.2 },
]

/**
 * Picks a lighter subset of dots for mobile / reduced-motion.
 */
function pickDots(dots: FloatingDot[], limit: number): FloatingDot[] {
  if (dots.length <= limit) return dots
  const step = dots.length / limit
  return Array.from({ length: limit }, (_, index) => dots[Math.floor(index * step)]!)
}

/**
 * Hero arka planı — ışık huzmeleri, mesh glow, hexagon ve yoğun noktalar.
 */
export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    function sync() {
      setIsMobile(media.matches)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const visibleDots = useMemo(() => {
    if (prefersReducedMotion) {
      return [...pickDots(leftDots, 10), ...pickDots(rightDots, 6)]
    }
    if (isMobile) {
      return [...pickDots(leftDots, 22), ...pickDots(rightDots, 10)]
    }
    return [...leftDots, ...rightDots]
  }, [isMobile, prefersReducedMotion])

  const mx = useMotionValue(72)
  const my = useMotionValue(42)
  const sx = useSpring(mx, { stiffness: 45, damping: 22 })
  const sy = useSpring(my, { stiffness: 45, damping: 22 })
  const left = useTransform(sx, (value) => `${value}%`)
  const top = useTransform(sy, (value) => `${value}%`)

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return undefined

    function onMove(event: MouseEvent) {
      mx.set((event.clientX / window.innerWidth) * 100)
      my.set((event.clientY / window.innerHeight) * 100)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [isMobile, mx, my, prefersReducedMotion])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-teal/25 blur-[90px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 40, -20, 0], y: [0, 30, -15, 0], opacity: [0.35, 0.7, 0.4] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-16 top-1/3 h-[480px] w-[480px] rounded-full bg-coral/20 blur-[100px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -35, 25, 0], y: [0, -25, 35, 0], opacity: [0.3, 0.65, 0.35] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 overflow-hidden opacity-70">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-[-20%] h-[140%] w-[2px] origin-top bg-gradient-to-b from-transparent via-teal/60 to-transparent"
            style={{
              left: `${48 + i * 10}%`,
              rotate: `${18 + i * 2}deg`,
              filter: 'blur(0.5px)',
            }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.35 }
                : {
                    opacity: [0.15, 0.75, 0.2],
                    x: [0, 18, -10, 0],
                  }
            }
            transition={{
              duration: 5 + i,
              delay: i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute right-[12%] top-[18%] h-40 w-40 border border-teal/35 max-md:right-[8%] max-md:h-28 max-md:w-28"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        animate={
          prefersReducedMotion
            ? undefined
            : { rotate: [0, 360], y: [0, 18, 0], opacity: [0.35, 0.7, 0.35] }
        }
        transition={{
          rotate: { duration: 28, repeat: Infinity, ease: 'linear' },
          y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="absolute inset-[18%] border border-teal/50" style={{ clipPath: 'inherit' }} />
      </motion.div>

      {visibleDots.map((dot) => (
        <motion.span
          key={`${dot.left}-${dot.top}-${dot.size}`}
          className="absolute rounded-full bg-teal max-md:opacity-70"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            boxShadow: '0 0 14px rgb(0 171 240 / 0.9)',
          }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.5 }
              : {
                  opacity: [0.25, 1, 0.3],
                  y: [0, -16, 0],
                  scale: [1, 1.4, 1],
                }
          }
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {!prefersReducedMotion && !isMobile ? (
        <>
          <motion.div
            className="absolute right-[18%] top-[34%] h-56 w-56 max-md:right-[10%] max-md:h-40 max-md:w-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_16px_rgb(0_171_240)]" />
            <span className="absolute bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-coral shadow-[0_0_12px_rgb(56_195_255)]" />
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal/90 shadow-[0_0_12px_rgb(0_171_240)]" />
            <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-coral/90 shadow-[0_0_14px_rgb(56_195_255)]" />
            <span className="absolute left-[18%] top-[18%] h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_10px_rgb(0_171_240)]" />
            <span className="absolute bottom-[18%] right-[18%] h-1.5 w-1.5 rounded-full bg-coral shadow-[0_0_10px_rgb(56_195_255)]" />
          </motion.div>

          <motion.div
            className="absolute right-[8%] top-[48%] h-40 w-40 max-md:hidden"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_12px_rgb(0_171_240)]" />
            <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-coral shadow-[0_0_10px_rgb(56_195_255)]" />
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal/80 shadow-[0_0_10px_rgb(0_171_240)]" />
            <span className="absolute right-2 top-[30%] h-1.5 w-1.5 rounded-full bg-coral/80 shadow-[0_0_10px_rgb(56_195_255)]" />
          </motion.div>
        </>
      ) : null}

      <motion.div
        className="absolute left-0 top-[42%] h-px w-full bg-gradient-to-r from-transparent via-teal/70 to-transparent"
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.2, 0.85, 0.2], scaleX: [0.7, 1, 0.7] }
        }
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {!isMobile && !prefersReducedMotion ? (
        <motion.div
          className="absolute h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left,
            top,
            background:
              'radial-gradient(circle, rgb(0 171 240 / 0.32) 0%, rgb(0 171 240 / 0.1) 42%, transparent 70%)',
          }}
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-r from-foam via-foam/75 to-foam/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-foam via-transparent to-foam/45" />
      <div className="grain absolute inset-0 opacity-20" />
    </div>
  )
}
