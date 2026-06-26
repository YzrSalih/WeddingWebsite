export default function LanguageSwitcher({ language, onChange, label }) {
  const options = [
    { value: 'tr', label: 'TR' },
    { value: 'pl', label: 'PL' },
  ]

  return (
    <div
      aria-label={label}
      style={{
        position: 'fixed',
        top: 18,
        right: 18,
        zIndex: 50,
        display: 'flex',
        gap: 4,
        padding: 4,
        borderRadius: 999,
        background: 'rgba(255,250,250,0.82)',
        border: '1px solid rgba(196,130,142,0.28)',
        boxShadow: '0 8px 28px rgba(90,48,64,0.12)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {options.map(option => {
        const active = option.value === language
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={active}
            style={{
              minWidth: 42,
              height: 34,
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              background: active ? '#A86070' : 'transparent',
              color: active ? '#FFF8F8' : '#5C3040',
              fontFamily: 'Lato, sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.08em',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
