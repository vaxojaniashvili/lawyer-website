import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { useLang, CONTACT } from '../i18n.jsx'
import { Icon } from './Icons.jsx'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CONTACT.web3formsKey,
          subject: `ვებსაიტიდან ახალი შეტყობინება — ${form.name}`,
          from_name: form.name,
          name: form.name,
          phone: form.phone,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const info = [
    { icon: 'phone', label: t.contact.phoneLabel, value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneRaw}` },
    { icon: 'mail', label: t.contact.emailLabel, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: 'pin', label: t.contact.cityLabel, value: t.city, href: null },
  ]

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 shadow-soft">
          <div className="grid lg:grid-cols-2">
            {/* info side */}
            <div className="relative border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl" />
              <Reveal>
                <span className="eyebrow">
                  <span className="h-px w-8 bg-gold-500" />
                  {t.contact.eyebrow}
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
                  {t.contact.title}
                </h2>
                <p className="mt-4 max-w-md text-slate-300">{t.contact.subtitle}</p>
              </Reveal>

              <div className="mt-10 space-y-5">
                {info.map((item) => {
                  const IconEl = Icon[item.icon]
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-500/10 text-gold-500">
                        <IconEl width={20} height={20} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-500">{item.label}</p>
                        <p className="font-medium text-white">{item.value}</p>
                      </div>
                    </>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label} className="flex items-center gap-4">
                      {inner}
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-wider text-slate-500">{t.followLabel}</p>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-gold-500/60 hover:text-white"
                >
                  <Icon.facebook width={18} height={18} className="text-gold-500" />
                  Facebook
                </a>
              </div>
            </div>

            {/* form side */}
            <div className="p-8 md:p-12">
              <form onSubmit={onSubmit} className="space-y-4">
                <Field
                  label={t.contact.form.name}
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
                <Field
                  label={t.contact.form.phone}
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  required
                />
                <div>
                  <label className="mb-1.5 block text-sm text-slate-400">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-gold-500/60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                  {status !== 'sending' && <Icon.arrow width={18} height={18} />}
                </button>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <StatusMsg key="s" tone="success">
                      {t.contact.form.success}
                    </StatusMsg>
                  )}
                  {status === 'error' && (
                    <StatusMsg key="e" tone="error">
                      {t.contact.form.error}
                    </StatusMsg>
                  )}
                </AnimatePresence>

                <p className="text-center text-xs text-slate-500">{t.contact.form.note}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatusMsg({ tone, children }) {
  const styles =
    tone === 'success'
      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
      : 'border-red-500/30 bg-red-500/10 text-red-300'
  return (
    <motion.p
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`rounded-xl border px-4 py-3 text-center text-sm ${styles}`}
    >
      {children}
    </motion.p>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-slate-400">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-gold-500/60"
      />
    </div>
  )
}
