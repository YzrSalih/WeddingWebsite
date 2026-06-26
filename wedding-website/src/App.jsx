import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Details from './components/Details'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'
import { translations } from './translations'

// ── Düğün Bilgileri ──────────────────────────────────────────
// Google Maps linkini mekana göre güncelleyebilirsiniz.
const WEDDING = {
  bride: 'Emel',
  groom: 'Salih',
  date: new Date('2026-08-29T19:00:00'),
  dateDisplay: '29 Ağustos 2026',
  dayName: 'Cumartesi',
  time: '19:00',
  venue: 'Modularna 3D',
  city: 'Varşova',
  address: 'Varşova, Polonya',
  mapsUrl: 'https://maps.google.com/?q=Modularna+3D+Warsaw',
}
// ─────────────────────────────────────────────────────────────

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'tr')
  const t = translations[language]

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <div style={{ minHeight: '100vh', background: '#FDF8F0' }}>
      <LanguageSwitcher language={language} onChange={setLanguage} label={t.languageLabel} />
      <Hero config={WEDDING} t={t} />
      <Countdown targetDate={WEDDING.date} t={t} />
      <Details config={WEDDING} t={t} />
      <RSVP t={t} />
      <Footer config={WEDDING} t={t} />
    </div>
  )
}
