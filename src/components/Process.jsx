import Reveal from './Reveal.jsx'
import { useLang } from '../i18n.jsx'

export default function Process() {
  const { t } = useLang()
  return (
    <section id="process" className="border-y border-white/10 bg-ink-900/40 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-500" />
            {t.process.eyebrow}
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            {t.process.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.process.items.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-ink-800/50 p-6">
                <span className="font-serif text-4xl font-bold text-gold-500/30">{item.step}</span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
