import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Details from './components/Details'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

// ── Düğün Bilgileri ──────────────────────────────────────────
// Google Maps linkini mekana göre güncelleyebilirsiniz.
const WEDDING = {
  bride: 'Emel',
  groom: 'Salih',
  date: new Date('2026-08-29T18:30:00'),
  dateDisplay: '29 Ağustos 2026',
  dayName: 'Cumartesi',
  time: '18:30',
  venue: 'Modularna 3D',
  city: 'Varşova',
  address: 'Varşova, Polonya',
  mapsUrl: 'https://maps.google.com/?q=Modularna+3D+Warsaw',
}
// ─────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#FDF8F0' }}>
      <Hero config={WEDDING} />
      <Countdown targetDate={WEDDING.date} />
      <Details config={WEDDING} />
      <RSVP />
      <Footer config={WEDDING} />
    </div>
  )
}
