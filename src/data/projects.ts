import { z } from 'zod'

const base = import.meta.env.BASE_URL

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  tagline: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  screenshots: z.array(z.string()),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  accent: z.string(),
})

export type Project = z.infer<typeof projectSchema>

/**
 * Uygulamalarını buraya ekle.
 * Screenshot'ları `public/screenshots/` klasörüne koy.
 * Path örneği: `${base}screenshots/benim-app.png`
 */
export const projects: Project[] = [
  {
    id: 'app-one',
    title: 'Pulse Tracker',
    tagline: 'Günlük alışkanlıklarını tek bakışta takip et.',
    description:
      'Alışkanlık takibi, streak sistemi ve minimal istatistiklerle kullanıcıyı motive eden mobil odaklı bir uygulama. Temiz arayüz ve hızlı etkileşim odaklı tasarlandı.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
    screenshots: [`${base}screenshots/pulse-1.svg`, `${base}screenshots/pulse-2.svg`],
    githubUrl: 'https://github.com/Programmer8-p',
    featured: true,
    accent: '#0d9f8c',
  },
  {
    id: 'app-two',
    title: 'Nova Notes',
    tagline: 'Notlarını hızla yakala, sonra düzenle.',
    description:
      'Hızlı yakalama, etiketleme ve arama özellikleriyle not alma deneyimini sadeleştiren bir web uygulaması. Offline-first yaklaşımla çalışır.',
    tags: ['React', 'Vite', 'Tailwind', 'Zod'],
    screenshots: [`${base}screenshots/nova-1.svg`, `${base}screenshots/nova-2.svg`],
    liveUrl: 'https://programmer8-p.github.io/Portfolio/',
    featured: true,
    accent: '#ff5a3c',
  },
  {
    id: 'app-three',
    title: 'Atlas Weather',
    tagline: 'Hava durumunu sade ve net gör.',
    description:
      'Konum bazlı hava durumu, saatlik tahmin ve zarif görsel hiyerarşi. Kullanıcıya gereksiz gürültü olmadan doğru bilgi sunar.',
    tags: ['TypeScript', 'API', 'UI/UX'],
    screenshots: [`${base}screenshots/atlas-1.svg`],
    featured: false,
    accent: '#1a6cff',
  },
]
