import { motion } from "framer-motion";
import { useLang, CONTACT } from "../i18n.jsx";
import { Icon } from "./Icons.jsx";
import Portrait from "./Portrait.jsx";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-20 md:pt-36">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-8 pb-20 md:gap-12 md:pb-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 lg:order-1">
          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.titleTop}{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>{" "}
            {t.hero.titleBottom}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href={`tel:${CONTACT.phoneRaw}`} className="btn-gold">
              <Icon.phone width={18} height={18} />
              {CONTACT.phoneDisplay}
            </a>
            <a href="#contact" className="btn-ghost">
              {t.cta.consult}
              <Icon.arrow width={18} height={18} />
            </a>
          </motion.div>

          <motion.p
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center gap-2 text-sm text-slate-400"
          >
            <span className="flex text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Icon.star key={i} width={15} height={15} />
              ))}
            </span>
            {t.hero.trust}
          </motion.p>
        </div>

        {/* portrait / visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-[280px] sm:max-w-sm lg:order-2"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-700 to-ink-900 shadow-soft">
            <Portrait
              alt={`${t.name} — ${t.role} ${t.city}`}
              fallback={
                <div className="grid h-full place-items-center">
                  <span className="font-serif text-[8rem] font-bold text-gold-500/25">
                    თ
                  </span>
                </div>
              }
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent p-6 pt-20">
              <p className="font-serif text-xl font-semibold text-white">
                {t.name}
              </p>
              <p className="text-sm text-gold-400">
                {t.role} · {t.city}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -left-5 -top-5 hidden rounded-2xl border border-white/10 bg-ink-800 px-5 py-4 shadow-soft sm:block"
          >
            <p className="font-serif text-2xl font-bold text-gold-500">100+</p>
            <p className="text-xs text-slate-400">{t.stats[1].label}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
