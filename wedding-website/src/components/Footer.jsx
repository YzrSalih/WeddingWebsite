import { motion } from 'framer-motion'

export default function Footer({ config }) {
  return (
    <footer style={{
      padding: '64px 24px 48px',
      textAlign: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #3A1E26 0%, #4A2830 50%, #3A1E26 100%)',
    }}>
      {/* Soft ışıma */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(196,130,142,0.12) 0%, transparent 70%)',
      }}/>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 400, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* İsimler */}
          <h2 style={{
            fontFamily: 'Great Vibes, cursive',
            fontSize: 'clamp(44px, 12vw, 70px)',
            color: '#FDF0F0', lineHeight: 1, marginBottom: 12,
          }}>
            {config.bride} &amp; {config.groom}
          </h2>

          {/* Süsleme çizgisi */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ height: 1, width: 36, background: 'rgba(196,130,142,0.4)' }}/>
            <motion.svg width="18" height="16" viewBox="0 0 22 20" fill="none"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M11 18C11 18 2 11 2 6C2 3,4.5 1,7 1C9 1,10.5 2.2,11 4C11.5 2.2,13 1,15 1C17.5 1,20 3,20 6C20 11,11 18,11 18Z"
                fill="#C4828E" opacity="0.7"/>
            </motion.svg>
            <div style={{ height: 1, width: 36, background: 'rgba(196,130,142,0.4)' }}/>
          </div>

          {/* Tarih & mekan */}
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 13, color: '#C4828E', letterSpacing: '0.22em', marginBottom: 6 }}>
            29 · 08 · 2026
          </p>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, color: '#D4A8B4', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 28 }}>
            {config.venue} — {config.city}
          </p>

          {/* Ayet */}
          <div style={{
            padding: '18px 24px', borderRadius: 14, marginBottom: 28,
            background: 'rgba(196,130,142,0.06)', border: '1px solid rgba(196,130,142,0.18)',
          }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 12, color: '#C8A0A8', lineHeight: 1.8, marginBottom: 8 }}>
              "...aranızda bir sevgi ve merhamet var etmesi O'nun varlığının delillerindendir."
            </p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 10, color: '#C9A96E', letterSpacing: '0.15em', fontWeight: 700 }}>
              Rûm Suresi 21. Ayet
            </p>
          </div>

          {/* Navigasyon */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 28 }}>
            {[{href:'#countdown',label:'Geri Sayım'},{href:'#details',label:'Detaylar'},{href:'#rsvp',label:'Katılım'}].map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily: 'Lato, sans-serif', fontSize: 10, color: '#C8A0A8',
                textDecoration: 'none', letterSpacing: '0.18em', textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F0D0D8'}
              onMouseLeave={e => e.currentTarget.style.color = '#C8A0A8'}
              >
                {l.label}
              </a>
            ))}
          </div>

          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 13, color: '#E8C8D0' }}>
            Aileniz ve sevdiklerinizle görüşmek üzere 🌸
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
