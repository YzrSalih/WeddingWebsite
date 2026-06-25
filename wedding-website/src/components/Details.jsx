import { motion } from 'framer-motion'

function DetailCard({ icon, title, lines, mapUrl, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay }}
      style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '48px 36px', borderRadius: 22,
        background: 'linear-gradient(145deg, #FFFAFA, #FDF4F4)',
        border: '1px solid rgba(196,130,142,0.18)',
        boxShadow: '0 6px 28px rgba(196,130,142,0.08)',
      }}
    >
      <div style={{ position:'absolute', top:10, left:10, width:11, height:11, borderTop:'1px solid #C4828E', borderLeft:'1px solid #C4828E', opacity:0.35 }}/>
      <div style={{ position:'absolute', top:10, right:10, width:11, height:11, borderTop:'1px solid #C4828E', borderRight:'1px solid #C4828E', opacity:0.35 }}/>
      <div style={{ position:'absolute', bottom:10, left:10, width:11, height:11, borderBottom:'1px solid #C4828E', borderLeft:'1px solid #C4828E', opacity:0.35 }}/>
      <div style={{ position:'absolute', bottom:10, right:10, width:11, height:11, borderBottom:'1px solid #C4828E', borderRight:'1px solid #C4828E', opacity:0.35 }}/>

      <div style={{
        width: 68, height: 68, borderRadius: '50%',
        background: 'rgba(196,130,142,0.1)',
        border: '1px solid rgba(196,130,142,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 22,
      }}>
        {icon}
      </div>

      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#4A2C35', fontWeight: 500, marginBottom: 16 }}>
        {title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {lines.map((line, i) => (
          <p key={i} style={{
            fontFamily: 'Lato, sans-serif', fontSize: 'clamp(14px, 1.6vw, 17px)',
            color: i === 0 ? '#C4828E' : '#5C3040',
            fontWeight: i === 0 ? 600 : 400, margin: 0,
          }}>
            {line}
          </p>
        ))}
      </div>

      {mapUrl && (
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{
          marginTop: 22,
          display: 'inline-flex', alignItems: 'center', gap: 7,
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#C4828E', textDecoration: 'none',
          border: '1px solid rgba(196,130,142,0.4)',
          padding: '9px 20px', borderRadius: 24,
          fontFamily: 'Lato, sans-serif', fontWeight: 600,
        }}>
          <svg width="10" height="13" viewBox="0 0 11 13" fill="none">
            <path d="M5.5 0C3.3 0 1.5 1.8 1.5 4C1.5 7.2 5.5 12 5.5 12C5.5 12 9.5 7.2 9.5 4C9.5 1.8 7.7 0 5.5 0ZM5.5 5.5C4.7 5.5 4 4.8 4 4C4 3.2 4.7 2.5 5.5 2.5C6.3 2.5 7 3.2 7 4C7 4.8 6.3 5.5 5.5 5.5Z" fill="currentColor"/>
          </svg>
          Haritada Gör
        </a>
      )}
    </motion.div>
  )
}

export default function Details({ config }) {
  return (
    <section id="details" style={{ padding: 'clamp(72px, 10vw, 120px) 32px', background: '#FDF6F2' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, color: '#7A5A18', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>
            Etkinlik Bilgileri
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: '#4A2C35', fontWeight: 400, margin: 0 }}>
            Düğün Detayları
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 18 }}>
            <div style={{ height: 1, width: 52, background: 'rgba(196,130,142,0.4)' }}/>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6L7 0Z" fill="#C4828E" opacity="0.5"/>
            </svg>
            <div style={{ height: 1, width: 52, background: 'rgba(196,130,142,0.4)' }}/>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          <DetailCard
            delay={0.05} title="Tarih"
            icon={
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="4" width="18" height="16" rx="2" stroke="#C4828E" strokeWidth="1.4"/>
                <path d="M2 9H20" stroke="#C4828E" strokeWidth="1.4"/>
                <path d="M7 2V6M15 2V6" stroke="#C4828E" strokeWidth="1.4" strokeLinecap="round"/>
                <rect x="6" y="12" width="4" height="4" rx="0.5" fill="#C4828E" opacity="0.4"/>
              </svg>
            }
            lines={['29 Ağustos 2026', 'Cumartesi', 'Saat 18:30']}
          />
          <DetailCard
            delay={0.12} title="Mekan"
            icon={
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 1.5C7.7 1.5 5 4.2 5 7.5C5 12 11 20 11 20C11 20 17 12 17 7.5C17 4.2 14.3 1.5 11 1.5ZM11 9.5C10 9.5 9.2 8.7 9.2 7.7C9.2 6.7 10 5.9 11 5.9C12 5.9 12.8 6.7 12.8 7.7C12.8 8.7 12 9.5 11 9.5Z" fill="#C4828E" opacity="0.65"/>
              </svg>
            }
            lines={[config.venue, config.city, 'Varşova, Polonya']}
            mapUrl={config.mapsUrl}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 52 }}
        >
          <svg width="160" height="28" viewBox="0 0 160 28" fill="none">
            <path d="M18 14 C45 6, 70 5, 80 14" stroke="#C4828E" strokeWidth="0.7" fill="none" opacity="0.3"/>
            <path d="M142 14 C115 6, 90 5, 80 14" stroke="#C4828E" strokeWidth="0.7" fill="none" opacity="0.3"/>
            <circle cx="80" cy="14" r="3" fill="#C4828E" opacity="0.4"/>
            <circle cx="80" cy="14" r="5.5" stroke="#C4828E" strokeWidth="0.5" fill="none" opacity="0.2"/>
          </svg>
        </motion.div>

      </div>
    </section>
  )
}
