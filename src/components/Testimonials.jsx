import Reveal from './Reveal.jsx'
import { useLang } from '../i18n.jsx'
import { Icon } from './Icons.jsx'

export default function Testimonials() {
  const { t } = useLang()
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-500" />
            {t.testimonials.eyebrow}
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            {t.testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <figure className="card h-full">
                <Icon.quote width={34} height={34} className="text-gold-500/50" />
                <blockquote className="mt-4 leading-relaxed text-slate-200">
                  {item.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500/15 font-serif font-semibold text-gold-500">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <span className="flex text-gold-500">
                      {[...Array(5)].map((_, j) => (
                        <Icon.star key={j} width={13} height={13} />
                      ))}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
