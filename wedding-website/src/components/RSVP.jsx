import { useState } from 'react'
import { motion } from 'framer-motion'

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || ''
const initialForm = { name: '', guests: '', notes: '' }

export default function RSVP() {
  const [form, setForm]     = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Lütfen adınızı giriniz.'
    if (!form.guests)       e.guests = 'Lütfen kişi sayısını seçiniz.'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    try {
      if (!SCRIPT_URL) throw new Error('no url')
      await fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = (field) => ({
    width: '100%', padding: '16px 20px', borderRadius: 14, outline: 'none',
    border: `1px solid ${errors[field] ? '#F4A0A0' : 'rgba(196,130,142,0.3)'}`,
    background: '#FFFAFA', color: '#4A2C35', fontSize: 'clamp(14px, 1.4vw, 16px)',
    fontFamily: 'Lato, sans-serif', boxSizing: 'border-box',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  })

  return (
    <section id="rsvp" style={{ padding: 'clamp(72px, 10vw, 120px) 32px', background: 'linear-gradient(180deg, #FDF6F2 0%, #FAF0F0 100%)' }}>
      <div style={{ maxWidth: 580, margin: '0 auto' }}>

        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, color: '#7A5A18', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>
            Katılım Bildirimi
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 5vw, 44px)', color: '#4A2C35', fontWeight: 400, margin: '0 0 16px' }}>
            Düğünümüze Davetlisiniz
          </h2>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#5C3040', lineHeight: 1.7 }}>
            Lütfen 29 Ağustos saat 19:00'da gerçekleşecek olan<br/>düğünümüze katılım durumunuzu belirtiniz.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 16 }}>
            <div style={{ height: 1, width: 40, background: 'rgba(196,130,142,0.4)' }}/>
            <svg width="10" height="9" viewBox="0 0 11 10" fill="none">
              <path d="M5.5 9C5.5 9 1 5.5 1 3C1 1.6 2.1.5 3.5.5C4.4.5 5.1 1 5.5 1.8C5.9 1 6.6.5 7.5.5C8.9.5 10 1.6 10 3C10 5.5 5.5 9 5.5 9Z" fill="#C4828E" opacity="0.6"/>
            </svg>
            <div style={{ height: 1, width: 40, background: 'rgba(196,130,142,0.4)' }}/>
          </div>
        </motion.div>

        {/* Başarı */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign: 'center', padding: '48px 32px', borderRadius: 20,
              background: 'linear-gradient(145deg, #FFFAFA, #FDF4F4)',
              border: '1px solid rgba(196,130,142,0.22)',
              boxShadow: '0 8px 28px rgba(196,130,142,0.1)',
            }}
          >
            <div style={{
              width: 56, height: 56, borderRadius: '50%', margin: '0 auto 16px',
              background: 'rgba(196,130,142,0.12)', border: '1px solid rgba(196,130,142,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12L10 17L19 7" stroke="#C4828E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#4A2C35', marginBottom: 8 }}>Teşekkürler!</h3>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 14, color: '#8C6068' }}>
              Katılım bildiriminiz alındı. Sizi görmekten mutluluk duyacağız 🌸
            </p>
          </motion.div>
        )}

        {/* Form */}
        {status !== 'success' && (
          <motion.form
            onSubmit={handleSubmit} noValidate
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {/* İsim */}
            <div>
              <label style={{ display: 'block', fontFamily: 'Lato, sans-serif', fontSize: 13, color: '#4A2C35', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>
                İsim Soyisim <span style={{ color: '#C4828E' }}>*</span>
              </label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Adınız ve soyadınız"
                style={inputStyle('name')}
                onFocus={e => { e.target.style.borderColor='#C4828E'; e.target.style.boxShadow='0 0 0 3px rgba(196,130,142,0.12)' }}
                onBlur={e => { e.target.style.borderColor=errors.name?'#F4A0A0':'rgba(196,130,142,0.3)'; e.target.style.boxShadow='none' }}
              />
              {errors.name && <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: '#E07878', marginTop: 4 }}>{errors.name}</p>}
            </div>

            {/* Kişi sayısı */}
            <div>
              <label style={{ display: 'block', fontFamily: 'Lato, sans-serif', fontSize: 13, color: '#4A2C35', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>
                Kaç kişi katılacaksınız? <span style={{ color: '#C4828E' }}>*</span>
              </label>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['1','2','3','4','5'].map(n => (
                  <label key={n} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '13px 22px', borderRadius: 14, cursor: 'pointer',
                    border: `1px solid ${form.guests === n ? '#C4828E' : 'rgba(196,130,142,0.25)'}`,
                    background: form.guests === n ? 'rgba(196,130,142,0.1)' : '#FFFAFA',
                    transition: 'all 0.2s', userSelect: 'none',
                  }}>
                    <input type="radio" name="guests" value={n} checked={form.guests === n} onChange={handleChange} style={{ display: 'none' }}/>
                    <span style={{
                      width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                      border: `1.5px solid ${form.guests === n ? '#C4828E' : 'rgba(196,130,142,0.4)'}`,
                      background: form.guests === n ? '#C4828E' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
                    }}>
                      {form.guests === n && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', display: 'block' }}/>}
                    </span>
                    <span style={{ fontFamily: 'Lato, sans-serif', fontSize: 16, color: form.guests === n ? '#4A2C35' : '#5C3040' }}>{n}</span>
                  </label>
                ))}
              </div>
              {errors.guests && <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: '#E07878', marginTop: 4 }}>{errors.guests}</p>}
            </div>

            {/* Notlar */}
            <div>
              <label style={{ display: 'block', fontFamily: 'Lato, sans-serif', fontSize: 13, color: '#4A2C35', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>
                Notlar
              </label>
              <textarea
                name="notes" value={form.notes} onChange={handleChange} rows={3}
                placeholder="Varsa alerji veya özel notlarınız..."
                style={{ ...inputStyle('notes'), resize: 'none' }}
                onFocus={e => { e.target.style.borderColor='#C4828E'; e.target.style.boxShadow='0 0 0 3px rgba(196,130,142,0.12)' }}
                onBlur={e => { e.target.style.borderColor='rgba(196,130,142,0.3)'; e.target.style.boxShadow='none' }}
              />
            </div>

            {status === 'error' && (
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: 13, color: '#E07878', textAlign: 'center' }}>
                Bir hata oluştu. Lütfen tekrar deneyin.
              </p>
            )}

            <button
              type="submit" disabled={status === 'loading'}
              style={{
                width: '100%', padding: '18px', borderRadius: 14, border: 'none',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                background: 'linear-gradient(135deg, #C4828E, #A86070)',
                color: '#FFF8F8',
                fontFamily: 'Lato, sans-serif', fontSize: 13,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                boxShadow: '0 6px 24px rgba(196,130,142,0.35)',
                opacity: status === 'loading' ? 0.75 : 1,
                transition: 'opacity 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {status === 'loading' ? 'Gönderiliyor...' : 'Katılımı Onayla'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}
