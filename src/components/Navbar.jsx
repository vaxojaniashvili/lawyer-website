import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang, CONTACT } from '../i18n.jsx'
import { Icon } from './Icons.jsx'

export default function Navbar() {
  const { t, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold-500/40 bg-ink-800 font-serif text-lg font-bold text-gold-500">
            თ
          </span>
          <span className="hidden font-serif text-lg font-semibold text-white sm:block">
            {t.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {t.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 transition-colors hover:text-gold-400"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-gold-500/60 hover:text-white"
            aria-label="Switch language"
          >
            {t.langLabel}
          </button>
          <a href={`tel:${CONTACT.phoneRaw}`} className="btn-gold hidden py-2.5 text-sm sm:inline-flex">
            <Icon.phone width={16} height={16} />
            {CONTACT.phoneDisplay}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-slate-200 lg:hidden"
            aria-label="Menu"
          >
            {open ? <Icon.close width={20} height={20} /> : <Icon.menu width={20} height={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-md lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {t.nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-slate-200 transition-colors hover:bg-white/5 hover:text-gold-400"
                >
                  {l.label}
                </a>
              ))}
              <a href={`tel:${CONTACT.phoneRaw}`} className="btn-gold mt-2">
                <Icon.phone width={16} height={16} />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
