import { motion } from 'framer-motion'

function FallingPetal({ x, delay, duration, scale, rotate }) {
  const colors = ['#F5C8C8', '#F2B8C0', '#FAD4D0', '#EDB8BC', '#F8CCCC', '#FAD0D8']
  const color = colors[Math.floor(Math.abs(x + delay)) % colors.length]
  return (
    <motion.div
      style={{ position: 'absolute', top: '-8%', left: `${x}%`, zIndex: 5, pointerEvents: 'none' }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, 35, -20, 30, 0],
        rotate: [rotate, rotate + 200, rotate + 360],
        opacity: [0, 0.7, 0.7, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear', times: [0, 0.12, 0.88, 1] }}
    >
      <svg width={scale} height={scale * 1.5} viewBox="0 0 22 32" fill="none">
        <path d="M11 30 C5 25,1 18,2 11 C3 4,7 1,11 2 C15 1,19 4,20 11 C21 18,17 25,11 30Z"
          fill={color} stroke="rgba(180,120,120,0.2)" strokeWidth="0.5"/>
        <path d="M11 30 Q11 16,11 2" stroke="rgba(180,120,120,0.15)" strokeWidth="0.4" fill="none"/>
      </svg>
    </motion.div>
  )
}

function RisingHeart({ x, delay, duration, size }) {
  return (
    <motion.div
      style={{ position: 'absolute', bottom: '8%', left: `${x}%`, zIndex: 5, pointerEvents: 'none' }}
      animate={{
        y: [0, -900], x: [0, 18, -12, 8, 0],
        opacity: [0, 0.55, 0.55, 0], scale: [0.4, 1, 1, 0.6],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeOut', times: [0, 0.18, 0.82, 1] }}
    >
      <svg width={size} height={size} viewBox="0 0 22 20" fill="none">
        <path d="M11 18C11 18 2 11 2 6C2 3,4.5 1,7 1C9 1,10.5 2.2,11 4C11.5 2.2,13 1,15 1C17.5 1,20 3,20 6C20 11,11 18,11 18Z"
          fill="#D4849A" opacity="0.7"/>
      </svg>
    </motion.div>
  )
}

function GlimmerRing({ x, y, delay, size = 20 }) {
  return (
    <motion.div
      style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, zIndex: 4, pointerEvents: 'none' }}
      animate={{ scale: [0, 1.4, 0], opacity: [0, 0.45, 0], rotate: [0, 60] }}
      transition={{ duration: 2.8, delay, repeat: Infinity, repeatDelay: 3 + delay % 2, ease: 'easeInOut' }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9"  stroke="#C9A96E" strokeWidth="1.6" fill="none"/>
        <circle cx="12" cy="12" r="5"  stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.5"/>
        <path d="M8 12 Q12 9,16 12" stroke="#C9A96E" strokeWidth="0.6" fill="none" opacity="0.6"/>
      </svg>
    </motion.div>
  )
}

function ConfettiDot({ x, delay, duration }) {
  const colors = ['#E8C4C4', '#C9A96E', '#F0D4D4', '#D4A0A8', '#E8D0A0']
  const color = colors[Math.floor(Math.abs(x * delay)) % colors.length]
  return (
    <motion.div
      style={{ position: 'absolute', top: '-4%', left: `${x}%`, width: 5, height: 3, borderRadius: 2, background: color, zIndex: 5, pointerEvents: 'none' }}
      animate={{ y: ['0vh', '105vh'], x: [0, 25, -15, 20, 0], rotate: [0, 720], opacity: [0, 0.65, 0.65, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear', times: [0, 0.1, 0.9, 1] }}
    />
  )
}

const petals   = [
  {x:3,delay:0,duration:10,scale:16,rotate:20},{x:14,delay:2.5,duration:14,scale:12,rotate:-30},
  {x:26,delay:5,duration:11,scale:18,rotate:45},{x:39,delay:1,duration:15,scale:13,rotate:10},
  {x:52,delay:7.5,duration:12,scale:10,rotate:-15},{x:63,delay:3.5,duration:16,scale:17,rotate:60},
  {x:76,delay:9,duration:10,scale:14,rotate:-45},{x:88,delay:4.5,duration:17,scale:11,rotate:30},
  {x:96,delay:6,duration:13,scale:15,rotate:-20},
]
const hearts   = [
  {x:5,delay:0.8,duration:8,size:14},{x:22,delay:3.5,duration:11,size:10},
  {x:42,delay:6.5,duration:9,size:16},{x:60,delay:1.5,duration:12,size:11},
  {x:78,delay:5,duration:10,size:13},{x:92,delay:8,duration:9,size:9},
]
const rings    = [
  {x:8,y:18,delay:0.3,size:22},{x:82,y:12,delay:2.5,size:18},
  {x:25,y:68,delay:1.8,size:20},{x:70,y:58,delay:3.8,size:24},
  {x:48,y:30,delay:5,size:16},{x:90,y:72,delay:1,size:22},
  {x:15,y:45,delay:4.2,size:18},
]
const confetti = [
  {x:10,delay:1,duration:9},{x:30,delay:4,duration:12},
  {x:55,delay:7,duration:10},{x:72,delay:2.5,duration:11},{x:85,delay:5.5,duration:13},
]

/* Renkler — soft blush & krem */
const C = {
  bg:        'linear-gradient(155deg, #FDF6F0 0%, #FAF0F0 35%, #FDF4F6 65%, #FBF6F0 100%)',
  name:      '#3A1E28',       // koyu gül kurusu
  amp:       '#B8687A',       // muted rose, biraz daha koyu
  ayet:      '#3A1E28',       // ayet metni — tam okunabilir
  ayetLine:  '#7A5A18',       // altın label — koyu
  body:      '#3A1E28',       // davet metni
  family:    '#5C3040',       // aile üst satır
  familyBold:'#3A1E28',       // aile soyad
  dateNum:   '#3A1E28',       // tarih sayıları
  dateGold:  '#8B6820',       // tarih · noktaları (koyu altın)
  dateSub:   '#5C3040',       // Cumartesi & mekan alt yazısı
  scroll:    '#5C3040',       // Geri Sayım scroll yazısı
  border:    'rgba(139,104,32,0.3)',
  line:      'rgba(139,104,32,0.5)',
  glow:      'rgba(196,130,142,0.1)',
}

export default function Hero({ config, t }) {
  return (
    <section style={{
      minHeight: '100svh',
      background: C.bg,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '52px 28px 68px',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Soft merkez ışıma */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${C.glow} 0%, transparent 70%)`,
      }}/>

      {petals.map((p,i)   => <FallingPetal  key={`p${i}`} {...p}/>)}
      {hearts.map((h,i)   => <RisingHeart   key={`h${i}`} {...h}/>)}
      {rings.map((r,i)    => <GlimmerRing   key={`r${i}`} {...r}/>)}
      {confetti.map((c,i) => <ConfettiDot   key={`c${i}`} {...c}/>)}

      {/* ══════════ İÇERİK ══════════ */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 520 }}>

        {/* Üst yıldız çizgisi */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22, justifyContent: 'center' }}
        >
          <div style={{ flex: 1, maxWidth: 70, height: 1, background: `linear-gradient(to right, transparent, ${C.line})` }}/>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6L7 0Z" fill="#C9A96E" opacity="0.7"/>
          </svg>
          <div style={{ flex: 1, maxWidth: 70, height: 1, background: `linear-gradient(to left, transparent, ${C.line})` }}/>
        </motion.div>

        {/* Ayet */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ marginBottom: 32 }}
        >
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(14.5px, 3.8vw, 17px)',
            color: C.ayet,
            fontStyle: 'italic',
            lineHeight: 1.9,
            margin: '0 0 14px',
            letterSpacing: '0.015em',
            fontWeight: 400,
          }}>
            {t.verse.full}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 1, background: C.line }}/>
            <span style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, color: C.ayetLine, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>
              {t.verse.source}
            </span>
            <div style={{ width: 36, height: 1, background: C.line }}/>
          </div>
        </motion.div>

        {/* ── İSİMLER ── */}
        <div style={{ marginBottom: 10 }}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: 'clamp(88px, 23vw, 144px)',
              color: C.name,
              lineHeight: 1,
              margin: '0 0 2px',
              display: 'block',
            }}
          >
            {config.bride}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: 'clamp(48px, 12vw, 76px)',
              color: C.amp,
              lineHeight: 1,
              margin: '0 0 2px',
              display: 'block',
            }}
          >
            &amp;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: 'clamp(88px, 23vw, 144px)',
              color: C.name,
              lineHeight: 1,
              margin: 0,
              display: 'block',
            }}
          >
            {config.groom}
          </motion.h1>
        </div>

        {/* Kalp çizgisi */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.65 }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', margin: '18px 0 22px' }}
        >
          <div style={{ height: 1, width: 55, background: `linear-gradient(to right, transparent, ${C.line})` }}/>
          <motion.svg width="20" height="18" viewBox="0 0 22 20" fill="none"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M11 18C11 18 2 11 2 6C2 3,4.5 1,7 1C9 1,10.5 2.2,11 4C11.5 2.2,13 1,15 1C17.5 1,20 3,20 6C20 11,11 18,11 18Z"
              fill="#C4828E" opacity="0.85"/>
          </motion.svg>
          <div style={{ height: 1, width: 55, background: `linear-gradient(to left, transparent, ${C.line})` }}/>
        </motion.div>

        {/* Davet */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.8 }}
          style={{ fontFamily: 'Lato, sans-serif', fontSize: 14, color: C.body, lineHeight: 1.8, marginBottom: 22, letterSpacing: '0.03em' }}
        >
          {t.hero.invite}
        </motion.p>

        {/* Aile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.95 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, marginBottom: 26 }}
        >
          <div>
            <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: C.family, fontWeight: 400, letterSpacing: '0.04em' }}>Mehtap - Erdem</div>
            <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 13, color: C.familyBold, fontWeight: 700, letterSpacing: '0.15em' }}>KARGIN</div>
          </div>
          <div style={{ width: 1, height: 34, background: 'rgba(90,48,64,0.25)' }}/>
          <div>
            <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: C.family, fontWeight: 400, letterSpacing: '0.04em' }}>Fatma - Ahmet</div>
            <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 13, color: C.familyBold, fontWeight: 700, letterSpacing: '0.15em' }}>YAZAR</div>
          </div>
        </motion.div>

        {/* Tarih */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.05 }}
          style={{
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: '16px 36px',
            marginBottom: 30,
            background: 'rgba(201,169,110,0.04)',
            display: 'inline-block',
          }}
        >
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(22px, 6vw, 36px)',
            color: C.dateNum, fontWeight: 300,
            letterSpacing: '0.16em', margin: '0 0 7px',
          }}>
            29 <span style={{ color: C.dateGold, margin: '0 5px' }}>·</span>
            08 <span style={{ color: C.dateGold, margin: '0 5px' }}>·</span>
            2026
          </p>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 13, color: C.dateGold, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 4px', fontWeight: 600 }}>
            {t.event.heroDate}
          </p>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, color: C.dateSub, letterSpacing: '0.14em', textTransform: 'uppercase', margin: 0, fontWeight: 500 }}>
            {config.venue} — {t.event.city}
          </p>
        </motion.div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ width: 45, height: 1, background: `linear-gradient(to right, transparent, ${C.line})` }}/>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4L5 0Z" fill="#C9A96E" opacity="0.4"/>
            </svg>
            <div style={{ width: 45, height: 1, background: `linear-gradient(to left, transparent, ${C.line})` }}/>
          </div>
          <a href="#countdown" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <span style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, color: C.scroll, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 500 }}>
              {t.nav.countdown}
            </span>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M2 2L8 8L14 2" stroke="#C4828E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
              </svg>
            </motion.div>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
