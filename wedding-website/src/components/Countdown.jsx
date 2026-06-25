import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function getTimeLeft(targetDate) {
  const diff = targetDate - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeBox({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.1, duration: 0.6 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
    >
      <div style={{
        position: 'relative',
        width: 'clamp(80px, 16vw, 130px)',
        height: 'clamp(90px, 18vw, 148px)',
        background: 'linear-gradient(145deg, #FFFAFA, #FDF0F0)',
        border: '1px solid rgba(196,130,142,0.25)',
        borderRadius: 18,
        boxShadow: '0 6px 28px rgba(196,130,142,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ position:'absolute', top:8, left:8, width:12, height:12, borderTop:'1px solid #C4828E', borderLeft:'1px solid #C4828E', opacity:0.4 }}/>
        <div style={{ position:'absolute', top:8, right:8, width:12, height:12, borderTop:'1px solid #C4828E', borderRight:'1px solid #C4828E', opacity:0.4 }}/>
        <div style={{ position:'absolute', bottom:8, left:8, width:12, height:12, borderBottom:'1px solid #C4828E', borderLeft:'1px solid #C4828E', opacity:0.4 }}/>
        <div style={{ position:'absolute', bottom:8, right:8, width:12, height:12, borderBottom:'1px solid #C4828E', borderRight:'1px solid #C4828E', opacity:0.4 }}/>

        <motion.span
          key={value}
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 7vw, 58px)',
            color: '#4A2C35', fontWeight: 400, lineHeight: 1,
          }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>

      <span style={{
        fontFamily: 'Lato, sans-serif', fontSize: 11,
        color: '#C4828E', textTransform: 'uppercase', letterSpacing: '0.22em', fontWeight: 600,
      }}>
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown({ targetDate }) {
  const [time, setTime] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(t)
  }, [targetDate])

  const units = [
    { value: time.days,    label: 'Gün' },
    { value: time.hours,   label: 'Saat' },
    { value: time.minutes, label: 'Dakika' },
    { value: time.seconds, label: 'Saniye' },
  ]

  return (
    <section
      id="countdown"
      style={{
        padding: 'clamp(72px, 10vw, 120px) 24px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #FAF0F0 0%, #FDF6F2 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 56 }}
      >
        <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, color: '#7A5A18', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>
          Düğüne Kadar
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: '#4A2C35', fontWeight: 400, margin: 0 }}>
          Geri Sayım
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 18 }}>
          <div style={{ height: 1, width: 52, background: 'rgba(196,130,142,0.4)' }}/>
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
            <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4L5 0Z" fill="#C4828E" opacity="0.6"/>
          </svg>
          <div style={{ height: 1, width: 52, background: 'rgba(196,130,142,0.4)' }}/>
        </div>
      </motion.div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 'clamp(8px, 2.5vw, 28px)' }}>
        {units.map((u, i) => (
          <div key={u.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(8px, 2.5vw, 28px)' }}>
            <TimeBox value={u.value} label={u.label} index={i} />
            {i < units.length - 1 && (
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: '#C4828E', opacity: 0.45, marginTop: 18, lineHeight: 1 }}>
                :
              </span>
            )}
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ marginTop: 44, fontFamily: 'Lato, sans-serif', fontSize: 15, color: '#5C3040', letterSpacing: '0.08em' }}
      >
        29 Ağustos 2026 · Cumartesi · Saat 19:00
      </motion.p>
    </section>
  )
}
