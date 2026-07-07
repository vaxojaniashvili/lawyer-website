import { useLang, CONTACT } from '../i18n.jsx'
import { Icon } from './Icons.jsx'

export default function Footer() {
  const { t } = useLang()
  const year = 2025

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold-500/40 bg-ink-800 font-serif text-lg font-bold text-gold-500">
            თ
          </span>
          <div>
            <p className="font-serif font-semibold text-white">{t.name}</p>
            <p className="text-xs text-slate-500">{t.footer.tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {t.nav.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-400 transition-colors hover:text-gold-400">
              {l.label}
            </a>
          ))}
        </div>

        <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 text-sm text-gold-400">
          <Icon.phone width={16} height={16} />
          {CONTACT.phoneDisplay}
        </a>
      </div>
      <div className="border-t border-white/5 py-5">
        <p className="container-x text-center text-xs text-slate-600">
          © {year} {t.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
