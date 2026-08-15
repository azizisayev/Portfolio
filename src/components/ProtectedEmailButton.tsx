import { useCallback, useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { buildEmailAddress, type EmailParts } from '../data/profile'
import { useLocale } from '../i18n/locale-context'
import { getUi } from '../i18n/ui'

interface ProtectedEmailButtonProps {
  emailParts: EmailParts
  className?: string
}

/**
 * E-postayı HTML'de açık yazmaz; tıklanınca mailto açar.
 * İsteğe bağlı olarak adresi kopyalar.
 */
export function ProtectedEmailButton({
  emailParts,
  className = '',
}: ProtectedEmailButtonProps) {
  const { locale } = useLocale()
  const ui = getUi(locale)
  const [isCopied, setIsCopied] = useState(false)

  const openMail = useCallback(() => {
    const email = buildEmailAddress(emailParts)
    window.location.href = `mailto:${email}`
  }, [emailParts])

  const copyEmail = useCallback(async () => {
    const email = buildEmailAddress(emailParts)
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
      window.setTimeout(() => setIsCopied(false), 2000)
    } catch {
      openMail()
    }
  }, [emailParts, openMail])

  return (
    <>
      <button
        type="button"
        onClick={openMail}
        className={
          className ||
          'inline-flex items-center gap-2 rounded-lg border-2 border-teal bg-teal px-5 py-3 text-sm font-bold text-foam transition hover:bg-transparent hover:text-teal'
        }
      >
        <Mail size={18} />
        {ui.sendEmail}
      </button>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex items-center gap-2 rounded-lg border-2 border-teal/50 bg-transparent px-5 py-3 text-sm font-semibold text-teal transition hover:bg-teal hover:text-foam"
        aria-label={ui.copyAddress}
      >
        {isCopied ? <Check size={18} /> : <Copy size={18} />}
        {isCopied ? ui.copied : ui.copyAddress}
      </button>
    </>
  )
}
