import Reveal from './Reveal.jsx'
import { useLang } from '../i18n.jsx'
import { Icon } from './Icons.jsx'

export default function Practice() {
  const { t } = useLang()
  return (
    <section id="practice" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-500" />
            {t.practice.eyebrow}
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            {t.practice.title}
          </h2>
          <p className="mt-4 text-slate-400">{t.practice.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.practice.items.map((item, i) => {
            const IconEl = Icon[item.icon] || Icon.scale
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <article className="card group h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                    <IconEl width={24} height={24} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
