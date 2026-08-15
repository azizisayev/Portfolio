import { z } from 'zod'

const emailPartsSchema = z.object({
  user: z.string().min(1),
  domain: z.string().min(1),
})

const phonePartsSchema = z.object({
  country: z.string().min(1),
  number: z.string().min(1),
})

export type EmailParts = z.infer<typeof emailPartsSchema>
export type PhoneParts = z.infer<typeof phonePartsSchema>

/** Site genelinde kullanılan profil bilgileri. */
export const profile = {
  name: 'Aziz',
  role: 'Yazılım Geliştirici',
  tagline: 'Kullanıcıya dokunan, modern ve akıcı uygulamalar tasarlıyorum.',
  bio: 'Mobil ve web tarafında TypeScript, React ve Expo ile ürün odaklı uygulamalar geliştiriyorum. Temiz arayüz, performans ve kullanıcı deneyimi önceliğim.',
  /** E-posta parçalı tutulur; HTML'de düz metin olarak görünmez. */
  emailParts: {
    user: 'isayev_eziz',
    domain: 'mail.ru',
  } satisfies EmailParts,
  /** Telefon parçalı tutulur; tıklanınca birleştirilir. */
  phoneParts: {
    country: '994',
    number: '515387666',
  } satisfies PhoneParts,
  location: 'Azerbaycan',
  socials: {
    linkedin: 'https://www.linkedin.com/in/eziz-isayev-685587',
  },
} as const

/**
 * E-posta adresini parçalardan birleştirir.
 */
export function buildEmailAddress(parts: EmailParts): string {
  const parsed = emailPartsSchema.parse(parts)
  return `${parsed.user}@${parsed.domain}`
}

/**
 * Uluslararası telefon numarasını (ülke kodu + numara) birleştirir.
 */
export function buildPhoneE164(parts: PhoneParts): string {
  const parsed = phonePartsSchema.parse(parts)
  return `${parsed.country}${parsed.number}`
}

/**
 * WhatsApp sohbet linki üretir.
 */
export function buildWhatsAppUrl(parts: PhoneParts): string {
  return `https://wa.me/${buildPhoneE164(parts)}`
}

/**
 * Telegram sohbet linki üretir (telefona bağlı hesap).
 */
export function buildTelegramUrl(parts: PhoneParts): string {
  return `https://t.me/+${buildPhoneE164(parts)}`
}

/**
 * tel: linki üretir.
 */
export function buildTelUrl(parts: PhoneParts): string {
  return `tel:+${buildPhoneE164(parts)}`
}
