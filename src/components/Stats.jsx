import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useLang } from '../i18n.jsx'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const duration = 1400
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { t } = useLang()
  return (
    <section className="border-y border-white/10 bg-ink-900/50">
      <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-14">
        {t.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-4xl font-bold text-gold-500 md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
