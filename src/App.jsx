import { Helmet } from 'react-helmet-async'
import { useLang, CONTACT } from './i18n.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Practice from './components/Practice.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { Icon } from './components/Icons.jsx'

export default function App() {
  const { t, lang } = useLang()

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Practice />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* mobile floating call button */}
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        className="btn-gold fixed bottom-5 right-5 z-40 h-14 w-14 !p-0 shadow-gold sm:hidden"
        aria-label={t.cta.call}
      >
        <Icon.phone width={22} height={22} />
      </a>
    </>
  )
}
