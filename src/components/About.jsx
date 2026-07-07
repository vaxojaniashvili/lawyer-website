import Reveal from './Reveal.jsx'
import { useLang } from '../i18n.jsx'
import { Icon } from './Icons.jsx'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-950">
              <div className="grid h-full place-items-center">
                <Icon.scale width={120} height={120} className="text-gold-500/20" />
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl border border-gold-500/30 bg-gold-500/5 backdrop-blur-sm" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-500" />
              {t.about.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
              {t.about.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-slate-300">{t.about.p1}</p>
            <p className="mt-4 leading-relaxed text-slate-300">{t.about.p2}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {t.about.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-500">
                    <Icon.check width={15} height={15} />
                  </span>
                  <span className="text-slate-200">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
