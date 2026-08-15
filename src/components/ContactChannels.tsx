import { useCallback } from 'react'
import { MessageCircle, Phone, Send } from 'lucide-react'
import {
  buildTelUrl,
  buildTelegramUrl,
  buildWhatsAppUrl,
  type PhoneParts,
} from '../data/profile'
import { useLocale } from '../i18n/locale-context'
import { getUi } from '../i18n/ui'

interface ContactChannelsProps {
  phoneParts: PhoneParts
}

const buttonClass =
  'inline-flex items-center gap-2 rounded-lg border-2 border-teal/50 bg-transparent px-5 py-3 text-sm font-semibold text-teal transition hover:bg-teal hover:text-foam'

/**
 * WhatsApp, Telegram ve telefon butonları — numara HTML'de açık yazılmaz.
 */
export function ContactChannels({ phoneParts }: ContactChannelsProps) {
  const { locale } = useLocale()
  const ui = getUi(locale)

  const openWhatsApp = useCallback(() => {
    window.open(buildWhatsAppUrl(phoneParts), '_blank', 'noopener,noreferrer')
  }, [phoneParts])

  const openTelegram = useCallback(() => {
    window.open(buildTelegramUrl(phoneParts), '_blank', 'noopener,noreferrer')
  }, [phoneParts])

  const callPhone = useCallback(() => {
    window.location.href = buildTelUrl(phoneParts)
  }, [phoneParts])

  return (
    <>
      <button type="button" onClick={openWhatsApp} className={buttonClass}>
        <MessageCircle size={18} />
        WhatsApp
      </button>
      <button type="button" onClick={openTelegram} className={buttonClass}>
        <Send size={18} />
        Telegram
      </button>
      <button type="button" onClick={callPhone} className={buttonClass}>
        <Phone size={18} />
        {ui.call}
      </button>
    </>
  )
}
